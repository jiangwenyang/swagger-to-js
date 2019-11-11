const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const babelParser = require('@babel/parser');
const babelGenerator = require('@babel/generator');

const apiJson = require('./test/api-docs.json');
const template = require('./template');
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
 * 获取指定内容的hash值
 * @param {string} content
 * @returns
 */
const getHash = content => {
  const hash = crypto.createHash('sha256');
  hash.update(content);
  return hash.digest('hex');
};

/**
 * 写入单个API源代码到指定文件中
 * @param {string} filePath 写入文件路径
 * @param {string} apiSourceCode 源代码
 * @param {string} [flag='a'] 写入模式
 */
const wirteApiSourceCodeIntoFile = (filePath, apiSourceCode, flag = 'a+') => {
  fs.writeFileSync(filePath, apiSourceCode, { flag });
};

/**
 *
 * @param {string} outputPath 文件目录路径
 * @param {string} outputFilename 文件名
 * @param {string} content 文件内容，用于生成hash
 * @returns
 */

/**
 * 获取输出文件路径
 * @param {Object} outputConfig 输出文件配置对象
 * @param {string} outputConfig.outputPath 文件目录路径
 * @param {string} outputConfig.outputFilename 文件名
 * @param {string} outputConfig.content 文件内容，用于生成hash
 * @returns
 */
const getOutputFilePath = ({ outputPath, outputFilename, content }) => {
  const {
    output: { path: pathConfig, filename: filenameConfig } = {}
  } = CONFIG;

  outputPath = outputPath || pathConfig || `${__dirname}/api`;
  outputFilename = outputFilename || filenameConfig || '[hash].js';

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  if (outputFilename.includes('[name]')) {
    outputFilename = outputFilename.replace('[name]', 'index');
  }

  if (outputFilename.includes('[hash]')) {
    const hash = getHash(content);
    outputFilename = outputFilename.replace('[hash]', hash);
  }

  return path.resolve(outputPath, outputFilename);
};

/**
 * 从源代码中获取抽象语法树
 * @param {string} sourceCode 源代码
 * @returns
 */
const getASTFromSourceCode = sourceCode => {
  if (!sourceCode) return null;
  return babelParser.parse(sourceCode, { sourceType: 'module' });
};

/**
 * 从抽象语法树中删除外层变量
 * @param {Object} ast 抽象语法树
 * @param {string} varName 变量名称
 * @returns
 */
const deleteOuterDeclarationFromAST = (ast, varName) => {
  return {
    ...ast,
    program: {
      ...ast.program,
      body: ast.program.body.reduce((body, node) => {
        if (isVariableDeclarationNode(node)) {
          let declarations = node.declarations || node.declaration.declarations;
          if (declarations && declarations.length) {
            declarations = declarations.filter(declaration =>
              !isExpectedVariableDeclaration(declaration, varName)
            );
            if (node.declarations) {
              node.declarations = declarations;
            }
            if (node.declaration && node.declaration.declarations) {
              node.declaration.declarations = declarations;
            }
            if (!declarations.length) return body;
          }
        }
        return [...body, node];
      }, [])
    }
  };
};

/**
 * 判断给定语法树节点是否是变量声明
 * @param {Object} node .program.body下的节点
 */
const isVariableDeclarationNode = (node, varName) =>
  node.declaration || node.declarations;

/**
 * 判断声明是否是是指定的变量名称
 * @param {Object} declaration .program.body[n].declarations下的节点
 * @param {string} varName 变量名称
 */
const isExpectedVariableDeclaration = (declaration, varName) =>
  declaration.type === 'VariableDeclarator' &&
  declaration.id &&
  declaration.id.name === varName &&
  declaration.id.type === 'Identifier';

/**
 * 语法树最外层是否已存在给定变量名称
 * @param {Object} ast 抽象语法树对象
 * @param {string} varName 变量名称
 * @returns
 */
const hasExistedVarInASTOuter = (ast, varName) => {
  if (!(ast && varName)) return false;
  try {
    return ast.program.body.some(node => {
      return (
        isVariableDeclarationNode(node) &&
        (node.declarations || node.declaration.declarations).some(declaration =>
          isExpectedVariableDeclaration(declaration, varName)
        )
      );
    });
  } catch (error) {
    return false;
  }
};

const apiPaths = apiJson.paths;
const apiList = regenerateApiInfoList(apiPaths);
const apiListGroupByPath = getApiInfoListGroupByPath(apiList);
const apiListGroupByTag = getApiInfoListGroupByTag(apiList);

const sourceCode = generateApiListSourceCode(apiList);

let ast = getASTFromSourceCode(sourceCode);
ast = deleteOuterDeclarationFromAST(ast, 'getAppLastVersion');
console.log(JSON.stringify(ast.program.body.slice(0, 3), null, 2));
console.log(hasExistedVarInASTOuter(ast, 'getAppLastVersion'));
// console.log(babelGenerator.default(ast).code);
