const { NAME_STYLE } = require('./constant');

const CONFIG = {
  output: {
    path: `${__dirname}/api/test`,
    filename: '[name].js'
  },
  customMethod: {
    // 自定义方法映射
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'del'
  },
  nameStyle: NAME_STYLE.camel, // API命名风格
  nameIncludeMethod: true, // 名称是否包含请求方法
  customRootPathName: 'index' // 自定义根路由，解决访问'/‘时无法生成API名称的问题
};

module.exports = CONFIG;
