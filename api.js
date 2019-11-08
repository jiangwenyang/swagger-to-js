
// 应用版本更新
// 查询最新应用版本信息
const getAppLastVersion  = params => {
  return get(`/app/last-version`, params)
}
