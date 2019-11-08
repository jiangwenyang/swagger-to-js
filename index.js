const fs = require('fs');
const path = require('path');
const apiJson = require('./test/api-docs.json');
const template = require('./template/index');
const CONFIG = require('./config');
const { NAME_STYLE } = require('./constant');

/**
 * 首字母大写
 * @param {string} word
 * @returns
 */
const fistLetterUpper = word => {
  if (!word) return '';
  const [fistLetterUpper, lastLetters] = [word.charAt(0), word.substr(1)];
  return `${fistLetterUpper.toUpperCase()}${lastLetters}`;
};

/**
 * 分组
 * @param {Array}} collection
 * @param {Function} iterator 迭代器
 * @returns
 */
const groupBy = (
  collection,
  iterator,
  groupType = groupBy.GROUP_TYPE.Object
) => {
  const result = {};
  collection.map((item, index, array) => {
    const keys = iterator(item, index, array);

    if (Array.isArray(keys)) {
      keys.map(key => {
        result[key] = [...(result[key] || []), item];
      });
    } else {
      result[keys] = [...(result[keys] || []), item];
    }
  });
  switch (groupType) {
    case groupBy.GROUP_TYPE.Object:
      return result;
    case groupBy.GROUP_TYPE.Array:
    default:
      return Object.keys(result).map(key => result[key]);
  }
};

groupBy.GROUP_TYPE = {
  Object: 0,
  Array: 1
};

/**
 * 获取格式化后的API路径字符串
 * @param {string} apiPath API路径
 * @param {number} [nameStyle=NAME_STYLE.camel] 名称风格
 * @returns
 */
const getApiPathStr = (apiPath, nameStyle = NAME_STYLE.camel) => {
  if (!apiPath.indexOf('/')) {
    apiPath = apiPath.substr(1);
  }

  let pathItemIterator = pathItem => pathItem.replace(/\-/g, '_');
  let pathSeparator = '';
  let wordIterator = word => word;
  let wordSeparator = '';

  switch (nameStyle) {
    case NAME_STYLE.camel:
      pathItemIterator = pathItem => pathItem.replace(/[\{\}]/g, '');
      wordIterator = (word, wordIndex, words, pathIndex) => {
        if (pathIndex) {
          return fistLetterUpper(word);
        }
        return word;
      };
      break;
    case NAME_STYLE.pascal:
      pathItemIterator = pathItem => pathItem.replace(/[\{\}]/g, '');
      wordIterator = word => {
        return fistLetterUpper(word);
      };
      break;
    default:
      break;
  }

  return apiPath
    .split('/')
    .map((pathItem, pathIndex, apiPath) => {
      return pathItemIterator(pathItem, pathIndex, apiPath)
        .split('-')
        .map((word, wordIndex, words) =>
          wordIterator(word, wordIndex, words, pathIndex)
        )
        .join(wordSeparator);
    })
    .join(pathSeparator);
};

/**
 * API method 映射，例如将delete 映射为 del （JavaScript中delete是保留关键字）
 * @param {string} apiMethod
 * @returns
 */
const mapApiMethodToCustomMethod = apiMethod => {
  const customMethod = CONFIG.customMethod;
  if (!customMethod) return apiMethod;

  apiMethod = apiMethod.toLowerCase();
  if (typeof customMethod === 'function') {
    return customMethod(apiMethod);
  }
  if (
    typeof customMethod === 'object' &&
    customMethod &&
    Object.keys(customMethod)
  ) {
    return customMethod[apiMethod];
  }
};

/**
 * 获取完整的API方法名称
 * @param {string} apiPath API路径
 * @param {string} apiMethod API方法
 * @param {number} [nameStyle=NAME_STYLE.camel] 名称风格
 * @param {boolean} nameIncludeMethod 名称是否包含方法
 * @param {boolean} useCustomMethod 是否对API方法使用自定义映射
 * @param {string} [customRootPathName='home'] 自定义根路由名称，解决访问'/‘时无法生成API名称的问题
 * @returns
 */
const getApiFullName = (
  apiPath,
  apiMethod,
  nameStyle = NAME_STYLE.camel,
  nameIncludeMethod = true,
  useCustomMethod,
  customRootPathName = 'index'
) => {
  const isApiPathStartOfSlash = apiPath.indexOf('/');
  const lowerCaseApiMethod = apiMethod.toLowerCase();

  apiMethod = useCustomMethod
    ? mapApiMethodToCustomMethod(lowerCaseApiMethod)
    : lowerCaseApiMethod;

  const emptyPathReg = /^[\/]?$/g;

  apiPath = emptyPathReg.test(apiPath) ? customRootPathName : apiPath;

  const newApiPath = nameIncludeMethod
    ? `${apiMethod}${isApiPathStartOfSlash ? '' : '/'}${apiPath}`
    : apiPath;
  return getApiPathStr(newApiPath, nameStyle);
};

/**
 * 构建api信息对象，将path和method放到其他信息同级
 * @param {Object} apiInfo swagger返回的JSON对象中包含tags summary parameters 等基础信息的对象
 * @param {string} apiPath api路径
 * @param {string} apiMethod api方法
 * @returns
 */
const regenerateApiInfo = (apiInfo = {}, apiPath, apiMethod) => {
  return {
    ...apiInfo,
    path: apiPath,
    method: apiMethod
  };
};

/**
 * 重新生成API对象信息列表
 * @param {Object} originPathsObject swagger返回的原始paths对象
 * @returns
 */
const regenerateApiInfoList = originPathsObject => {
  if (!originPathsObject) return [];
  return Object.keys(originPathsObject).reduce(
    (apiInfoList, apiPath) => [
      ...apiInfoList,
      ...Object.keys(originPathsObject[apiPath]).map(apiMethod =>
        regenerateApiInfo(
          originPathsObject[apiPath][apiMethod],
          apiPath,
          apiMethod
        )
      )
    ],
    []
  );
};

/**
 * API对象信息按照路径进行分组
 * @param {Array} apiInfoList
 */
const getApiInfoListGroupByPath = apiInfoList =>
  groupBy(apiInfoList, apiInfo => apiInfo.path);

/**
 * API对象信息按照标签进行分组（同一个对象如果有多个标签，将会在多个分组中）
 * @param {Array} apiInfoList
 */
const getApiInfoListGroupByTag = apiInfoList =>
  groupBy(apiInfoList, apiInfo => apiInfo.tags);

/**
 * 根据API对象和模板生成对应源代码
 * @param {Object} apiInfo API对象信息
 */
const generateApiSourceCodeFromTemplate = apiInfo => {
  const souceCodeTemplate = template[apiInfo.method] || template.all;
  const customApiInfo = getCustomApiInfo(apiInfo);
  return souceCodeTemplate
    ? souceCodeTemplate(customApiInfo, souceCodeTemplate)
    : `// Unknown request method error, can not generate corresponding source code\r//未知请求错误，不能生成对应源代码\r/*${JSON.stringify(
        customApiInfo,
        null,
        2
      )}*/
`;
};

/**
 * 根据API对象列表生成对应源代码
 * @param {Array} apiInfoList
 * @returns
 */
const generateApiListSourceCode = apiInfoList => {
  return apiInfoList.map(generateApiSourceCodeFromTemplate).join('');
};

/**
 * 在API对象上 添加name 和 customMethod 属性
 * @param {Object} apiInfo API对象
 */
const getCustomApiInfo = apiInfo => ({
  ...apiInfo,
  name: getApiFullName(
    apiInfo.path,
    apiInfo.method,
    CONFIG.nameStyle,
    CONFIG.nameIncludeMethod,
    true,
    CONFIG.customRootPathName
  ),
  customMethod: mapApiMethodToCustomMethod(apiInfo.method)
});

/**
 * 写入单个API源代码到指定文件中
 * @param {string} filePath 写入文件路径
 * @param {string} apiSourceCode 源代码
 * @param {string} [flag='a'] 写入模式
 */
const wirteApiSourceCodeIntoFile = (filePath, apiSourceCode, flag = 'a') => {
  fs.writeFileSync(filePath, apiSourceCode, { flag });
};

const apiPaths = apiJson.paths;
const apiList = regenerateApiInfoList(apiPaths);
const apiListGroupByPath = getApiInfoListGroupByPath(apiList);
const apiListGroupByTag = getApiInfoListGroupByTag(apiList);

const apiInfo = apiList[0];

wirteApiSourceCodeIntoFile(
  path.resolve(__dirname, 'api.js'),
  generateApiSourceCodeFromTemplate(getCustomApiInfo(apiInfo))
);

wirteApiSourceCodeIntoFile(
  path.resolve(__dirname, 'apiList.js'),
  generateApiListSourceCode(apiList)
);

// console.log(apiListGroupByPath);
// console.log(apiListGroupByTag);
