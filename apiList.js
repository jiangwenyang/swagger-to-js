
// 应用版本更新
// 查询最新应用版本信息
const getAppLastVersion  = params => {
  return get(`/app/last-version`, params)
}

// 鉴权
// 用户登录
const postAuthLogin  = params => {
  return post(`/auth/login`, params)
}

// 鉴权
// 用户登出
const postAuthLogout  = params => {
  return post(`/auth/logout`, params)
}

// 鉴权
// 用户修改密码
const putAuthPassword  = params => {
  return put(`/auth/password`, params)
}

// 鉴权
// 用户忘记密码
const putAuthResetPassword  = params => {
  return put(`/auth/reset-password`, params)
}

// 鉴权
// 用户激活
const putAuthActive  = params => {
  return put(`/auth/active`, params)
}

// 鉴权
// 用户注册
const postAuthRegister  = params => {
  return post(`/auth/register`, params)
}

// 鉴权
// 发送短信验证码
const postAuthVerifyCode  = params => {
  return post(`/auth/verify-code`, params)
}

// 重庆看板
// 被监控特种设备维保情况
const getChongqingBoardMaintenanceStatistics  = params => {
  return get(`/chongqing-board/maintenance-statistics`, params)
}

// 重庆看板
// 被监控企业安全培训情况(累计)  安全培训
const getChongqingBoardSafetyTraining  = params => {
  return get(`/chongqing-board/safety-training`, params)
}

// 重庆看板
// 企业详情
const getChongqingBoardEnterpriseDetail  = params => {
  return get(`/chongqing-board/enterprise-detail`, params)
}

// 重庆看板
// 被监控特种设备类型占比
const getChongqingBoardSpecialPercentage  = params => {
  return get(`/chongqing-board/special-percentage`, params)
}

// 重庆看板
// 被监控企业应急演练情况(累计)
const getChongqingBoardEmergencyStatistics  = params => {
  return get(`/chongqing-board/emergency-statistics`, params)
}

// 重庆看板
// 被监控企业隐患排查情况(累计)
const getChongqingBoardDangerStatistics  = params => {
  return get(`/chongqing-board/danger-statistics`, params)
}

// 重庆看板
// 企业统计
const getChongqingBoardEnterpriseStatistics  = params => {
  return get(`/chongqing-board/enterprise-statistics`, params)
}

// 处理进度
// 时间轴
const getWfInsIdHistoryItems  = params => {
  return get(`/wf/ins/${params.id}/history-items`, params)
}

// 处理进度
// 信息项
const getWfTaskIdInfoItems  = params => {
  return get(`/wf/task/${params.id}/info-items`, params)
}

// 流程管理
// 初始节点
const getWfNodeStartNodes  = params => {
  return get(`/wf/node/start-nodes`, params)
}

// 流程管理
// 节点详情
const getWfNodeDetailId  = params => {
  return get(`/wf/node/detail/${params.id}`, params)
}

// 流程管理
// 初始节点的物资列表（分页）
const postWfNodeIdMaterials  = params => {
  return post(`/wf/node/${params.id}/materials`, params)
}

// 流程管理
// 查询操作项（物资组模板与节点操作关联时）
const getWfNodeIdOperationItems  = params => {
  return get(`/wf/node/${params.id}/operation-items`, params)
}

// 流程管理
// 我的上报（分页）
const postWfInsSubmitted  = params => {
  return post(`/wf/ins/submitted`, params)
}

// 流程管理
// 我的处理（分页）
const postWfInsProcessed  = params => {
  return post(`/wf/ins/processed`, params)
}

// 流程管理
// 历史纪录（分页）
const postWfInsHistory  = params => {
  return post(`/wf/ins/history`, params)
}

// 流程管理
// 我的待办列表（分页）
const postWfTaskMy  = params => {
  return post(`/wf/task/my`, params)
}

// 流程管理
// 企业待办列表（分页）
const postWfTaskAll  = params => {
  return post(`/wf/task/all`, params)
}

// 流程管理
// 待办详情
const getWfTaskDetailId  = params => {
  return get(`/wf/task/detail/${params.id}`, params)
}

// 流程管理
// 任务高级指派
const postWfTaskAssign  = params => {
  return post(`/wf/task/assign`, params)
}

// 流程管理
// 高级指派人员
const getWfTaskAssignees  = params => {
  return get(`/wf/task/assignees`, params)
}

// 流程管理
// 任务指派人
const getWfTaskOperationsIdAssignors  = params => {
  return get(`/wf/task/operations/${params.id}/assignors`, params)
}

// 流程管理
// 节点提交
const postWfInsNodesOperation  = params => {
  return post(`/wf/ins/nodes-operation`, params)
}

// 流程管理
// 判断当前场景下当前物资是否可以发起流程，针对串行场景
const getWfInsStartCheck  = params => {
  return get(`/wf/ins/start-check`, params)
}

// 流程管理
// 节点转接操作匹配查询
const getWfInsNodeTransferMatch  = params => {
  return get(`/wf/ins/node-transfer/match`, params)
}

// 流程管理
// 流程处理人（分页）
const getWfInsAssignees  = params => {
  return get(`/wf/ins/assignees`, params)
}

// 流程管理
// 流程处理人（本企业待办+跨企业待办）
const getWfInsV1Assignees  = params => {
  return get(`/wf/ins/v1/assignees`, params)
}

// 流程管理
// 删除流程实例
const delWfInsId  = params => {
  return del(`/wf/ins/${params.id}`, params)
}

// 流程管理
// 已经启用的流程
const getWfConfigStartedWfs  = params => {
  return get(`/wf/config/started-wfs`, params)
}

// 开放权限
// 图形验证码
const getCaptcha  = params => {
  return get(`/captcha`, params)
}

// 公用接口
// 获取企业全部用户（下拉框使用）
const getCommonAllUserIdAndRealname  = params => {
  return get(`/common/all-user-id-and-realname`, params)
}

// 公用接口
// 文件上传初始化
const getCommonUploadInit  = params => {
  return get(`/common/upload-init`, params)
}

// 公用接口
// 地址服务
const getCommonLocations  = params => {
  return get(`/common/locations`, params)
}

// 公用接口
// 获取组织架构树
const getCommonOrganizationsTrees  = params => {
  return get(`/common/organizations-trees`, params)
}

// 公用接口
// 模板下载
const getCommonDownloadTemplatesType  = params => {
  return get(`/common/download-templates/${params.type}`, params)
}

// 数据权限
// 获取数据权限详情
const postDataRulesDetail  = params => {
  return post(`/data-rules/detail`, params)
}

// 数据权限
// 编辑数据权限
const postDataRules  = params => {
  return post(`/data-rules`, params)
}

// 数据仪表盘
// 数据查询
const postDashboardChart  = params => {
  return post(`/dashboard/chart`, params)
}

// 数据仪表盘
// 仪表盘中报表的查询条件
const getDashboardReportsReport_idQueryCondition  = params => {
  return get(`/dashboard/reports/${params.report_id}/query-condition`, params)
}

// 数据仪表盘
// 仪表盘列表
const getDashboard  = params => {
  return get(`/dashboard`, params)
}

// 数据仪表盘
// 状态栏数据
const postDashboardStatusData  = params => {
  return post(`/dashboard/status-data`, params)
}

// 数据仪表盘
// 任务栏数据
const postDashboardTaskData  = params => {
  return post(`/dashboard/task-data`, params)
}

// 数据仪表盘
// 组件文本数据查询
const getDashboardComponentsIdText  = params => {
  return get(`/dashboard/components/${params.id}/text`, params)
}

// 数据仪表盘
// 流程状态查询
const getDashboardWorkflowStatus  = params => {
  return get(`/dashboard/workflow-status`, params)
}

// 数据仪表盘
// 仪表盘详情
const getDashboardId  = params => {
  return get(`/dashboard/${params.id}`, params)
}

// 企业字典
// 删除配置项
const delDictionaryDefinitionsConfigId  = params => {
  return del(`/dictionary/definitions/config/${params.id}`, params)
}

// 企业字典
// 企业字典导入
const postDictionaryDefinitionsImport  = params => {
  return post(`/dictionary/definitions/import`, params)
}

// 企业字典
// 列表查询（从根节点开始）
const getDictionaryDefinitionsFromRoot  = params => {
  return get(`/dictionary/definitions/from-root`, params)
}

// 企业字典
// 通过ID批量查询
const postDictionaryDefinitionsByIds  = params => {
  return post(`/dictionary/definitions/by-ids`, params)
}

// 企业字典
// 查询子节点
const getDictionaryDefinitionsQueryChild  = params => {
  return get(`/dictionary/definitions/query/child`, params)
}

// 企业字典
// 查询固定层级
const getDictionaryDefinitionsQueryFloor  = params => {
  return get(`/dictionary/definitions/query/floor`, params)
}

// 企业字典
// 企业字典信息保存
const postDictionaryDefinitions  = params => {
  return post(`/dictionary/definitions`, params)
}

// 企业信息管理
// 获取企业信息
const getEnterprises  = params => {
  return get(`/enterprises`, params)
}

// 企业信息管理
// 提交企业信息
const postEnterprises  = params => {
  return post(`/enterprises`, params)
}

// 企业信息管理
// 合作企业列表
const getEnterprisesCooperateEnterprises  = params => {
  return get(`/enterprises/cooperate-enterprises`, params)
}

// 信息项管理
// 信息项模板列表
const getInfoItemTemplates  = params => {
  return get(`/info-item/templates`, params)
}

// 信息项管理
// 信息项模板编辑
const putInfoItemTemplates  = params => {
  return put(`/info-item/templates`, params)
}

// 信息项管理
// 信息项模板基本信息
const getInfoItemTemplatesId  = params => {
  return get(`/info-item/templates/${params.id}`, params)
}

// 信息项管理
// 信息项模板配置信息
const getInfoItemTemplatesIdConfigs  = params => {
  return get(`/info-item/templates/${params.id}/configs`, params)
}

// 信息项管理
// 数据源列表
const getInfoItemDataSources  = params => {
  return get(`/info-item/data-sources`, params)
}

// 数据报表
// 全部报表信息
const getReportsAll  = params => {
  return get(`/reports/all`, params)
}

// 数据报表
// 明细报表列表
const getReportsDetailedReports  = params => {
  return get(`/reports/detailed-reports`, params)
}

// 数据报表
// 报表列表
const getReports  = params => {
  return get(`/reports`, params)
}

// 数据报表
// 报表查询条件
const getReportsIdQueryConditions  = params => {
  return get(`/reports/${params.id}/query-conditions`, params)
}

// 数据报表
// 明细报表查询条件
const getReportsDetailedReportsIdQueryConditions  = params => {
  return get(`/reports/detailed-reports/${params.id}/query-conditions`, params)
}

// 数据报表
// 报表内容
const postReportsId  = params => {
  return post(`/reports/${params.id}`, params)
}

// 数据报表
// 明细报表内容
const postReportsDetailedReportsId  = params => {
  return post(`/reports/detailed-reports/${params.id}`, params)
}

// 数据报表
// 报表内容导出为excel
const postReportsIdExportExcel  = params => {
  return post(`/reports/${params.id}/export-excel`, params)
}

// 数据报表
// 明细报表内容导出为excel
const postReportsDetailedReportsIdExportExcel  = params => {
  return post(`/reports/detailed-reports/${params.id}/export-excel`, params)
}

// 企业看板
// 企业看板配置
const getViewBoardConfigs  = params => {
  return get(`/view-board/configs`, params)
}

// 企业看板
// 文本转语音
const getViewBoardVoice  = params => {
  return get(`/view-board/voice`, params)
}

// 企业看板
// 指定位置的内容
const getViewBoardPositionIdContent  = params => {
  return get(`/view-board/position/${params.id}/content`, params)
}

// 设备关联
// 创建功能关联设备
const postEquipmentsFunctionRelations  = params => {
  return post(`/equipments/function-relations`, params)
}

// 设备关联
// 删除功能关联设备
const delEquipmentsFunctionRelations  = params => {
  return del(`/equipments/function-relations`, params)
}

// 设备关联
// 功能关联设备列表
const postEquipmentsFunctionRelationList  = params => {
  return post(`/equipments/function-relation-list`, params)
}

// 数据导出
// 导出列表
const postExportWorkflowRecordLists  = params => {
  return post(`/export/workflow-record/lists`, params)
}

// 数据导出
// 导出操作
const postExportWorkflowRecordExcel  = params => {
  return post(`/export/workflow-record/excel`, params)
}

// 数据导出
// 查询条件
const getExportWorkflowRecordStartedWfs  = params => {
  return get(`/export/workflow-record/started-wfs`, params)
}

// 公用接口
// 一级分组
const getCommonAllLv1Groups  = params => {
  return get(`/common/all-lv1-groups`, params)
}

// 公用接口
// 二级分组
const getCommonAllLv2GroupsByLv1Id  = params => {
  return get(`/common/all-lv2-groups-by-lv1-id`, params)
}

// 公用接口
// 二级分组
const getCommonAllLv2Groups  = params => {
  return get(`/common/all-lv2-groups`, params)
}

// 物资分组
// 分组列表（分页）
const postGroupsMaterialLists  = params => {
  return post(`/groups/material-lists`, params)
}

// 物资分组
// 分组树
const getGroupsTreeByMaterials  = params => {
  return get(`/groups/tree-by-materials`, params)
}

// 物资分组
// 加入物资组
const postGroupsIdMaterials  = params => {
  return post(`/groups/${params.id}/materials`, params)
}

// 物资分组
// 移除物资组
const delGroupsIdMaterials  = params => {
  return del(`/groups/${params.id}/materials`, params)
}

// 物资分组
// 更换物资组
const putGroupsMaterials  = params => {
  return put(`/groups/materials`, params)
}

// 班组
// 分组列表(分页)
const postUserGroupsLists  = params => {
  return post(`/user-groups/lists`, params)
}

// 班组
// 分组树
const getUserGroupsTree  = params => {
  return get(`/user-groups/tree`, params)
}

// 班组
// 加入班组
const postUserGroupsIdUsers  = params => {
  return post(`/user-groups/${params.id}/users`, params)
}

// 班组
// 移除班组
const delUserGroupsIdUsers  = params => {
  return del(`/user-groups/${params.id}/users`, params)
}

// 班组
// 更换班组
const putUserGroupsUsers  = params => {
  return put(`/user-groups/users`, params)
}

// 设备点检
// 内容管理列表
const getMachinesCheckupContentManagement  = params => {
  return get(`/machines/checkup/content-management`, params)
}

// 设备点检
// 点检表分组列表
const getMachinesCheckupFormGroup  = params => {
  return get(`/machines/checkup/form-group`, params)
}

// 设备点检
// 配置点检组
const postMachinesCheckupFormGroup  = params => {
  return post(`/machines/checkup/form-group`, params)
}

// 设备点检
// 删除点检组
const delMachinesCheckupFormGroup  = params => {
  return del(`/machines/checkup/form-group`, params)
}

// 设备点检
// 获取点检表详情
const getMachinesCheckupCheckupForm  = params => {
  return get(`/machines/checkup/checkup-form`, params)
}

// 设备点检
// 编辑点检表
const putMachinesCheckupCheckupForm  = params => {
  return put(`/machines/checkup/checkup-form`, params)
}

// 设备点检
// 新增点检表
const postMachinesCheckupCheckupForm  = params => {
  return post(`/machines/checkup/checkup-form`, params)
}

// 设备点检
// 删除点检表
const delMachinesCheckupCheckupForm  = params => {
  return del(`/machines/checkup/checkup-form`, params)
}

// 设备点检
// 复制点检表
const putMachinesCheckupCheckupFormCopy  = params => {
  return put(`/machines/checkup/checkup-form-copy`, params)
}

// 设备点检
// 点检表下拉列表
const getMachinesCheckupCheckupFormNames  = params => {
  return get(`/machines/checkup/checkup-form-names`, params)
}

// 设备点检
// 内容管理模板导入
const postMachinesCheckupFormImport  = params => {
  return post(`/machines/checkup/form-import`, params)
}

// 设备点检
// 点检记录
const postMachinesCheckupOperationsList  = params => {
  return post(`/machines/checkup/operations/list`, params)
}

// 设备点检
// 点检记录
const getMachinesCheckupOperationsId  = params => {
  return get(`/machines/checkup/operations/${params.id}`, params)
}

// 设备点检
// 有点检记录的设备列表
const postMachinesCheckupOperationsMaterials  = params => {
  return post(`/machines/checkup/operations/materials`, params)
}

// 设备点检
// 点检表导出
const postMachinesCheckupOperationsFormsExport  = params => {
  return post(`/machines/checkup/operations/forms-export`, params)
}

// 设备点检
// 关联设备列表
const postMachinesCheckupRelationMaterialLists  = params => {
  return post(`/machines/checkup/relation-material-lists`, params)
}

// 设备点检
// 创建关联关系
const postMachinesCheckupRelationMaterials  = params => {
  return post(`/machines/checkup/relation-materials`, params)
}

// 设备点检
// 删除关联关系
const delMachinesCheckupRelationMaterials  = params => {
  return del(`/machines/checkup/relation-materials`, params)
}

// 设备点检
// 设备导入
const postMachinesCheckupRelationMaterialsImport  = params => {
  return post(`/machines/checkup/relation-materials-import`, params)
}

// 设备点检
// 点检设备管理列表
const postMachinesCheckupSettingMaterialLists  = params => {
  return post(`/machines/checkup/setting-material-lists`, params)
}

// 设备点检
// 停检设置保存
const postMachinesCheckupSettingMaterialPause  = params => {
  return post(`/machines/checkup/setting-material-pause`, params)
}

// 设备点检
// 删除停检设置
const delMachinesCheckupSettingMaterialPause  = params => {
  return del(`/machines/checkup/setting-material-pause`, params)
}

// 设备点检
// 点检设置详情
const getMachinesCheckupSettingDetails  = params => {
  return get(`/machines/checkup/setting-details`, params)
}

// 设备点检
// 点检开关
const putMachinesCheckupSetting  = params => {
  return put(`/machines/checkup/setting`, params)
}

// 设备点检
// 获取点检流程
const getMachinesCheckupWorkflow  = params => {
  return get(`/machines/checkup/workflow`, params)
}

// 设备点检
// 编辑点检流程
const putMachinesCheckupWorkflow  = params => {
  return put(`/machines/checkup/workflow`, params)
}

// 设备点检
// 获取流程下拉列表
const getMachinesCheckupWorkflowNames  = params => {
  return get(`/machines/checkup/workflow-names`, params)
}

// 设备点检
// 点检错误汇总
const postMachinesCheckupErrors  = params => {
  return post(`/machines/checkup/errors`, params)
}

// 设备点检
// 点检执行跟踪列表
const postMachinesCheckupFollowList  = params => {
  return post(`/machines/checkup/follow-list`, params)
}

// 设备点检
// 点检跟踪详情
const getMachinesCheckupFollowDetail  = params => {
  return get(`/machines/checkup/follow-detail`, params)
}

// 设备点检
// 导出点检执行跟踪
const postMachinesCheckupFollowExport  = params => {
  return post(`/machines/checkup/follow-export`, params)
}

// 设备点检
// 点检错误汇总导出
const postMachinesCheckupErrorsExport  = params => {
  return post(`/machines/checkup/errors-export`, params)
}

// 设备点检
// 导出点检设备列表
const postMachinesCheckupSettingMaterialExport  = params => {
  return post(`/machines/checkup/setting-material-export`, params)
}

// 设备点检
// 获取点检班次列表
const getMachinesCheckupSchedules  = params => {
  return get(`/machines/checkup/schedules`, params)
}

// 设备点检
// 获取标准列表
const getMachinesCheckupStandard  = params => {
  return get(`/machines/checkup/standard`, params)
}

// 设备点检
// 新增标准
const postMachinesCheckupStandard  = params => {
  return post(`/machines/checkup/standard`, params)
}

// 设备点检
// 删除标准
const delMachinesCheckupStandard  = params => {
  return del(`/machines/checkup/standard`, params)
}

// 设备点检
// 获取标准详情
const getMachinesCheckupStandardId  = params => {
  return get(`/machines/checkup/standard/${params.id}`, params)
}

// 设备点检
// 编辑标准
const putMachinesCheckupStandardId  = params => {
  return put(`/machines/checkup/standard/${params.id}`, params)
}

// 设备点检
// 点检获取指定企业存在点检类型
const getMachinesCheckupStandardsExistTypes  = params => {
  return get(`/machines/checkup/standards/exist-types`, params)
}

// 设备状态
// 设备状态列表（分页）
const postMachinesStatusMaterialLists  = params => {
  return post(`/machines/status/material-lists`, params)
}

// 设备状态
// 设备状态统计
const getMachinesStatusStatistics  = params => {
  return get(`/machines/status/statistics`, params)
}

// 设备状态
// 设备状态数据字典
const getMachinesStatusDictionary  = params => {
  return get(`/machines/status/dictionary`, params)
}

// 设备开关机
// 开关机列表（分页）
const postMachinesSwitchMaterialLists  = params => {
  return post(`/machines/switch/material-lists`, params)
}

// 设备开关机
// 新增开关机设备列表（分页）
const postMachinesSwitchAddMaterials  = params => {
  return post(`/machines/switch/add-materials`, params)
}

// 设备开关机
// 新增开关机设备
const postMachinesSwitchMaterials  = params => {
  return post(`/machines/switch/materials`, params)
}

// 设备开关机
// 删除开关机设备
const delMachinesSwitchMaterials  = params => {
  return del(`/machines/switch/materials`, params)
}

// 设备开关机
// 开关机日志（分页）
const getMachinesSwitchSwitchLogs  = params => {
  return get(`/machines/switch/switch-logs`, params)
}

// 设备开关机
// 计划开机时长修改
const postMachinesSwitchPlanDuration  = params => {
  return post(`/machines/switch/plan-duration`, params)
}

// 设备开关机
// 开关机物资带属性类别列表
const getMachinesSwitchCategoryWithAttr  = params => {
  return get(`/machines/switch/category-with-attr`, params)
}

// 设备开关机
// 操作来源列表
const getMachinesSwitchOperatorRef  = params => {
  return get(`/machines/switch/operator-ref`, params)
}

// 设备开关机
// 删除开关机日志
const delMachinesSwitchLogs  = params => {
  return del(`/machines/switch/logs`, params)
}

// 设备开关机
// 操作人列表
const getMachinesSwitchOperators  = params => {
  return get(`/machines/switch/operators`, params)
}

// 设备开关机
// 开关机通知列表
const getMachinesSwitchNotices  = params => {
  return get(`/machines/switch/notices`, params)
}

// 设备开关机
// 新增开关机通知
const postMachinesSwitchNotices  = params => {
  return post(`/machines/switch/notices`, params)
}

// 设备开关机
// 开关机通知详情
const getMachinesSwitchNoticesId  = params => {
  return get(`/machines/switch/notices/${params.id}`, params)
}

// 设备开关机
// 编辑开关机通知
const putMachinesSwitchNoticesId  = params => {
  return put(`/machines/switch/notices/${params.id}`, params)
}

// 设备开关机
// 删除开关机通知
const delMachinesSwitchNoticesId  = params => {
  return del(`/machines/switch/notices/${params.id}`, params)
}

// 分类管理
// 分类列表（分页）
const getCategoriesLists  = params => {
  return get(`/categories/lists`, params)
}

// 分类管理
// 全部分类(高级搜索，数据列表等场景)
const getCategoriesAll  = params => {
  return get(`/categories/all`, params)
}

// 分类管理
// 分类详情
const getCategoriesId  = params => {
  return get(`/categories/${params.id}`, params)
}

// 分类管理
// 分类详情（对象新增、对象编辑）
const getCategoriesIdForMaterialEdit  = params => {
  return get(`/categories/${params.id}/for-material-edit`, params)
}

// 对象管理
// 一级列表
const postMaterialsDefLists  = params => {
  return post(`/materials/def-lists`, params)
}

// 公用接口
// 物资定义列表（目前使用场景只有数据列表）
const postCommonMaterialsDefLists  = params => {
  return post(`/common/materials/def-lists`, params)
}

// 对象管理
// 对象定义详情
const getMaterialsDefDetailIdForEdit  = params => {
  return get(`/materials/def-detail/${params.id}/for-edit`, params)
}

// 对象管理
// 对象定义详情
const getMaterialsDefDetailId  = params => {
  return get(`/materials/def-detail/${params.id}`, params)
}

// 对象管理
// 新增定义
const postMaterialsDef  = params => {
  return post(`/materials/def`, params)
}

// 对象管理
// 修改定义
const putMaterialsDefId  = params => {
  return put(`/materials/def/${params.id}`, params)
}

// 对象管理
// 删除定义
const delMaterialsDefId  = params => {
  return del(`/materials/def/${params.id}`, params)
}

// 对象管理
// 导出对象
const postMaterialsExport  = params => {
  return post(`/materials/export`, params)
}

// 对象管理
// 导入对象
const postMaterialsImport  = params => {
  return post(`/materials/import`, params)
}

// 对象管理
// 下载模板
const getMaterialsImportTemplate  = params => {
  return get(`/materials/import-template`, params)
}

// 对象管理
// 导入记录（分页）
const getMaterialsImportLists  = params => {
  return get(`/materials/import-lists`, params)
}

// 对象管理
// 对象二级列表
const postMaterialsInsLists  = params => {
  return post(`/materials/ins-lists`, params)
}

// 公用接口
// 对象二级列表（目前使用场景只有发起流程）
const postCommonMaterialsInsLists  = params => {
  return post(`/common/materials/ins-lists`, params)
}

// 对象管理
// 对象实例详情
const getMaterialsInsDetailIdForEdit  = params => {
  return get(`/materials/ins-detail/${params.id}/for-edit`, params)
}

// 对象管理
// 对象实例详情
const getMaterialsInsDetailId  = params => {
  return get(`/materials/ins-detail/${params.id}`, params)
}

// 公用接口
// 对象实例详情（主要场景是业务模块展示物资信息，目前主要是流程详情，计划详情等）
const getCommonMaterialsInsDetailId  = params => {
  return get(`/common/materials/ins-detail/${params.id}`, params)
}

// 对象管理
// 新增实例
const postMaterialsIns  = params => {
  return post(`/materials/ins`, params)
}

// 对象管理
// 修改实例
const putMaterialsInsId  = params => {
  return put(`/materials/ins/${params.id}`, params)
}

// 对象管理
// 删除实例
const delMaterialsInsId  = params => {
  return del(`/materials/ins/${params.id}`, params)
}

// 对象组织机构
// 组织机构列表（分页）
const postMaterialsOrganizationLists  = params => {
  return post(`/materials/organization-lists`, params)
}

// 对象组织机构
// 组织机构树
const getMaterialsOrganizationTree  = params => {
  return get(`/materials/organization-tree`, params)
}

// 对象组织机构
// 加入/移除/更换组织机构
const postMaterialsOrganizationSave  = params => {
  return post(`/materials/organization-save`, params)
}

// 物资组织机构
// 物资组织机构列表新接口
const postMaterialsNewOrganizationList  = params => {
  return post(`/materials/new-organization-list`, params)
}

// 对象管理
// 获取可以成为子对象的对象列表（分页）
const postMaterialsCanBeChildLists  = params => {
  return post(`/materials/can-be-child-lists`, params)
}

// 对象管理
// 获取关联对象（子父对象）
const postMaterialsRelations  = params => {
  return post(`/materials/relations`, params)
}

// 对象管理
// 对象关联备件（分页）
const postMaterialsSparePartHistoryLists  = params => {
  return post(`/materials/spare-part-history-lists`, params)
}

// 功能权限
// 获取当前用户菜单
const getModuleAuthMenus  = params => {
  return get(`/module-auth/menus`, params)
}

// 功能权限
// 获取企业的全量菜单
const getModuleAuthMenusEnterpriseAll  = params => {
  return get(`/module-auth/menus/enterprise-all`, params)
}

// 功能权限
// 角色列表
const getModuleAuthRoles  = params => {
  return get(`/module-auth/roles`, params)
}

// 功能权限
// 角色创建
const postModuleAuthRoles  = params => {
  return post(`/module-auth/roles`, params)
}

// 功能权限
// 角色删除
const delModuleAuthRoles  = params => {
  return del(`/module-auth/roles`, params)
}

// 功能权限
// 角色选择列表
const getModuleAuthRolesSelect  = params => {
  return get(`/module-auth/roles/select`, params)
}

// 功能权限
// 角色详情
const getModuleAuthRolesId  = params => {
  return get(`/module-auth/roles/${params.id}`, params)
}

// 功能权限
// 角色更新
const putModuleAuthRolesId  = params => {
  return put(`/module-auth/roles/${params.id}`, params)
}

// 功能权限
// 角色授权
const postModuleAuthRolesAssign  = params => {
  return post(`/module-auth/roles/assign`, params)
}

// 功能权限
// 用户被授权角色列表
const getModuleAuthRolesByUsers  = params => {
  return get(`/module-auth/roles/by-users`, params)
}

// 业务监控
// 业务监控列表
const getMonitors  = params => {
  return get(`/monitors`, params)
}

// 业务监控
// 新增业务监控
const postMonitors  = params => {
  return post(`/monitors`, params)
}

// 业务监控
// 编辑业务监控
const putMonitorsModification  = params => {
  return put(`/monitors/modification`, params)
}

// 业务监控
// 删除业务监控
const delMonitorsDestruction  = params => {
  return del(`/monitors/destruction`, params)
}

// 业务监控
// 业务监控详情
const getMonitorsDetail  = params => {
  return get(`/monitors/detail`, params)
}

// 业务监控
// 获取触发流程
const getMonitorsWorkflow  = params => {
  return get(`/monitors/workflow`, params)
}

// 业务监控
// 获取节点信息项
const getMonitorsPlanContent  = params => {
  return get(`/monitors/plan-content`, params)
}

// 组织架构管理
// 新增组织架构
const postOrganizations  = params => {
  return post(`/organizations`, params)
}

// 组织架构管理
// 编辑组织架构
const putOrganizationsId  = params => {
  return put(`/organizations/${params.id}`, params)
}

// 组织架构管理
// 删除组织架构
const delOrganizationsId  = params => {
  return del(`/organizations/${params.id}`, params)
}

// 组织架构管理
// 组织架构树
const getOrganizationsTrees  = params => {
  return get(`/organizations/trees`, params)
}

// 组织架构管理
// 导入
const postOrganizationsExcels  = params => {
  return post(`/organizations/excels`, params)
}

// 组织架构管理
// 批量分配
const postOrganizationsUserOrganizationRelations  = params => {
  return post(`/organizations/user-organization-relations`, params)
}

// 组织架构管理
// 设置/取消管理员
const putOrganizationsIdUsersUser_id  = params => {
  return put(`/organizations/${params.id}/users/${params.user_id}`, params)
}

// 组织架构管理
// 人员列表
const getOrganizationsUsers  = params => {
  return get(`/organizations/users`, params)
}

// 计划管理
// 计划列表(参数都通过body发送，文档稍后修改)
const postPlansList  = params => {
  return post(`/plans/list`, params)
}

// 计划管理
// 新增计划
const postPlans  = params => {
  return post(`/plans`, params)
}

// 计划管理
// 计划详情
const getPlansId  = params => {
  return get(`/plans/${params.id}`, params)
}

// 计划管理
// 编辑计划
const putPlansId  = params => {
  return put(`/plans/${params.id}`, params)
}

// 计划管理
// 删除计划
const delPlansId  = params => {
  return del(`/plans/${params.id}`, params)
}

// 计划管理
// 计划启停
const putPlansIdStatus  = params => {
  return put(`/plans/${params.id}/status`, params)
}

// 计划管理
// 查询业务场景
const getPlansWorkflow  = params => {
  return get(`/plans/workflow`, params)
}

// 计划管理
// 查询开始节点（根据场景）一并返回是否有过程节点
const getPlansStartNodeByWorkflow  = params => {
  return get(`/plans/start-node-by-workflow`, params)
}

// 计划管理
// 查询节点操作（根据计划操作节点）
const getPlansOperationByNode  = params => {
  return get(`/plans/operation-by-node`, params)
}

// 计划管理
// 查询计划处理人
const getPlansOperators  = params => {
  return get(`/plans/operators`, params)
}

// 计划管理
// 查询物资组对应的物资定义集合
const getPlansGroupMaterials  = params => {
  return get(`/plans/group-materials`, params)
}

// 计划管理
// 检验触发节点是否不指派自己
const getPlansCheckAssignSelf  = params => {
  return get(`/plans/check-assign-self`, params)
}

// 计划管理
// 获取节点信息项
const getPlansPlanContent  = params => {
  return get(`/plans/plan-content`, params)
}

// 单据
// 铭牌样式配置获取
const getPressworkNameplatesStyleConfig  = params => {
  return get(`/presswork/nameplates/style-config`, params)
}

// 单据
// 铭牌样式配置保存
const postPressworkNameplatesStyleConfig  = params => {
  return post(`/presswork/nameplates/style-config`, params)
}

// 单据
// 铭牌格式检测
const getPressworkNameplatesCheckFormat  = params => {
  return get(`/presswork/nameplates/check-format`, params)
}

// 单据
// 单据设置获取
const getPressworkConfig  = params => {
  return get(`/presswork/config`, params)
}

// 单据
// 单据设置保存
const putPressworkConfig  = params => {
  return put(`/presswork/config`, params)
}

// 单据
// 单据下载
const getPressworkDownload  = params => {
  return get(`/presswork/download`, params)
}

// 单据
// 单据查看
const getPressworkShow  = params => {
  return get(`/presswork/show`, params)
}

// 单据
// 单据设置操作日志
const getPressworkConfigLogs  = params => {
  return get(`/presswork/config/logs`, params)
}

// 单据
// 模板单文档列表
const getPressworkTemplates  = params => {
  return get(`/presswork/templates`, params)
}

// 单据
// 模板单文档添加
const postPressworkTemplates  = params => {
  return post(`/presswork/templates`, params)
}

// 单据
// 模板单文档详情
const getPressworkTemplatesId  = params => {
  return get(`/presswork/templates/${params.id}`, params)
}

// 单据
// 模板单文档更新
const putPressworkTemplatesId  = params => {
  return put(`/presswork/templates/${params.id}`, params)
}

// 单据
// 模板单文档删除
const delPressworkTemplatesId  = params => {
  return del(`/presswork/templates/${params.id}`, params)
}

// 排班管理
// 新增排班
const postSchedules  = params => {
  return post(`/schedules`, params)
}

// 排班管理
// 全部排班
const getSchedulesAll  = params => {
  return get(`/schedules/all`, params)
}

// 排班管理
// 编辑排班
const putSchedulesId  = params => {
  return put(`/schedules/${params.id}`, params)
}

// 排班管理
// 删除排班
const delSchedulesId  = params => {
  return del(`/schedules/${params.id}`, params)
}

// 排班管理
// 导出
const getSchedulesExcels  = params => {
  return get(`/schedules/excels`, params)
}

// 排班管理
// 导入
const postSchedulesExcels  = params => {
  return post(`/schedules/excels`, params)
}

// 排班管理
// 查询人员列表
const getSchedulesUsers  = params => {
  return get(`/schedules/users`, params)
}

// 排班管理
// 批量排班
const postSchedulesUserScheduleRelations  = params => {
  return post(`/schedules/user-schedule-relations`, params)
}

// 排班管理
// 获取企业的全部班组
const getSchedulesGroups  = params => {
  return get(`/schedules/groups`, params)
}

// 排班管理
// 新增班组
const postSchedulesGroups  = params => {
  return post(`/schedules/groups`, params)
}

// 排班管理
// 班组详情
const getSchedulesGroupsId  = params => {
  return get(`/schedules/groups/${params.id}`, params)
}

// 排班管理
// 编辑班组
const postSchedulesGroupsId  = params => {
  return post(`/schedules/groups/${params.id}`, params)
}

// 排班管理
// 删除班组
const delSchedulesGroupsId  = params => {
  return del(`/schedules/groups/${params.id}`, params)
}

// 特种设备
// 特种设备列表（分页，无内置限定）
const postSpecialEquipmentSpecialEquipments  = params => {
  return post(`/special-equipment/special-equipments`, params)
}

// 特种设备
// 特种设备详情
const getSpecialEquipmentSpecialEquipmentsId  = params => {
  return get(`/special-equipment/special-equipments/${params.id}`, params)
}

// 特种设备
// 获取某特种设备的关联对象（子父对象）
const postSpecialEquipmentSpecialEquipmentRelations  = params => {
  return post(`/special-equipment/special-equipment-relations`, params)
}

// 特种设备
// 按企业聚合
const postSpecialEquipmentCollectByEnterprise  = params => {
  return post(`/special-equipment/collect-by-enterprise`, params)
}

// 特种设备
// 当前企业下监管所有设备
const getSpecialEquipmentAllStat  = params => {
  return get(`/special-equipment/all-stat`, params)
}

// 特种设备
// 当前企业监管特种设备数量
const getSpecialEquipmentCount  = params => {
  return get(`/special-equipment/count`, params)
}

// 特种设备
// 当前企业所监管某企业特种设备查询
const getSpecialEquipmentStat  = params => {
  return get(`/special-equipment/stat`, params)
}

// 特种设备
// 当前企业所监管企业使用情况查询
const getSpecialEquipmentEnterpriseUsage  = params => {
  return get(`/special-equipment/enterprise-usage`, params)
}

// 特种设备
// 当前企业监管特种设备的维保情况
const getSpecialEquipmentMaintenanceStatistics  = params => {
  return get(`/special-equipment/maintenance-statistics`, params)
}

// 特种设备
// 当前企业监管特种设备的各类型占比情况
const getSpecialEquipmentTypePercentage  = params => {
  return get(`/special-equipment/type-percentage`, params)
}

// 特种设备
// 根据流程类型获取相关特种设备
const postSpecialEquipmentWorkflowTypeWorkflow_typeLists  = params => {
  return post(`/special-equipment/workflow-type/${params.workflow_type}/lists`, params)
}

// 特种设备
// 根据流程类型获取相关特种设备（超期流程）
const postSpecialEquipmentWorkflowTypeListsOfReportOverdue  = params => {
  return post(`/special-equipment/workflow-type/lists-of-report-overdue`, params)
}

// 特种设备
// 特种设备附属设备情况查询
const getSpecialEquipmentSubsidiaryEquipmentStatistics  = params => {
  return get(`/special-equipment/subsidiary-equipment-statistics`, params)
}

// 特种设备
// 当前企业的被监管企业应急演练情况（累计）
const getSpecialEquipmentEmergencyDrillStatistics  = params => {
  return get(`/special-equipment/emergency-drill-statistics`, params)
}

// 特种设备
// 当前企业的被监管企业隐患排查情况（累计）
const getSpecialEquipmentHiddenDangerEliminationStatistics  = params => {
  return get(`/special-equipment/hidden-danger-elimination-statistics`, params)
}

// 特种设备
// 当前企业的被监管企业安全培训情况（累计）
const getSpecialEquipmentSafetyTrainingStatistics  = params => {
  return get(`/special-equipment/safety-training-statistics`, params)
}

// 特种设备
// 当前企业看板信息
const getSpecialEquipmentBoardInfo  = params => {
  return get(`/special-equipment/board-info`, params)
}

// 特种设备
// 当前企业监管的特种设备企业统计
const getSpecialEquipmentEnterpriseStatistics  = params => {
  return get(`/special-equipment/enterprise-statistics`, params)
}

// 特种设备
// 当前企业监管的特种设备企业全部列表
const getSpecialEquipmentEnterpriseAll  = params => {
  return get(`/special-equipment/enterprise-all`, params)
}

// 特种设备
// 当前企业监管的特种设备企业列表
const getSpecialEquipmentEnterpriseList  = params => {
  return get(`/special-equipment/enterprise-list`, params)
}

// 特种设备
// 安全部门列表
const getSpecialEquipmentSecurityOrganizationsAll  = params => {
  return get(`/special-equipment/security-organizations-all`, params)
}

// 特种设备
// 获取特种设备的分类集合
const postSpecialEquipmentCategories  = params => {
  return post(`/special-equipment/categories`, params)
}

// 特种设备
// 特种设备历史记录
const postSpecialEquipmentWfHistories  = params => {
  return post(`/special-equipment/wf-histories`, params)
}

// 特种设备
// 组织架构人员列表
const getSpecialEquipmentOrganizationUsers  = params => {
  return get(`/special-equipment/organization-users`, params)
}

// 用户信息管理
// 用户绑定
const postUsersBind  = params => {
  return post(`/users/bind`, params)
}

// 用户信息管理
// 用户解绑
const postUsersUnbind  = params => {
  return post(`/users/unbind`, params)
}

// 用户信息管理
// 根据 username 添加用户获取用户信息
const getUsersUserForStore  = params => {
  return get(`/users/user-for-store`, params)
}

// 用户信息管理
// 用户列表
const getUsers  = params => {
  return get(`/users`, params)
}

// 用户信息管理
// 新增用户
const postUsers  = params => {
  return post(`/users`, params)
}

// 用户信息管理
// 编辑用户
const putUsersId  = params => {
  return put(`/users/${params.id}`, params)
}

// 用户信息管理
// 导出用户
const getUsersExcels  = params => {
  return get(`/users/excels`, params)
}

// 用户信息管理
// 批量修改用户信息
const putUsersExcels  = params => {
  return put(`/users/excels`, params)
}

// 用户信息管理
// 导入用户
const postUsersExcels  = params => {
  return post(`/users/excels`, params)
}

// 云库房
// 物资分类
const getWarehousesIdCategoriesAll  = params => {
  return get(`/warehouses/${params.id}/categories/all`, params)
}

// 云库房盘存
// 盘存列表
const getWarehousesCorrections  = params => {
  return get(`/warehouses/corrections`, params)
}

// 云库房盘存
// 新增盘存
const postWarehousesCorrections  = params => {
  return post(`/warehouses/corrections`, params)
}

// 云库房盘存
// 盘存详情
const getWarehousesCorrectionsId  = params => {
  return get(`/warehouses/corrections/${params.id}`, params)
}

// 云库房盘存
// 更新盘存
const putWarehousesCorrectionsId  = params => {
  return put(`/warehouses/corrections/${params.id}`, params)
}

// 云库房盘存
// 删除盘存
const delWarehousesCorrectionsId  = params => {
  return del(`/warehouses/corrections/${params.id}`, params)
}

// 云库房盘存
// 盘存归档
const postWarehousesCorrectionsIdArchiving  = params => {
  return post(`/warehouses/corrections/${params.id}/archiving`, params)
}

// 云库房
// 出入库记录（分页）
const getWarehousesReceipts  = params => {
  return get(`/warehouses/receipts`, params)
}

// 云库房
// 出入库
const postWarehousesReceipts  = params => {
  return post(`/warehouses/receipts`, params)
}

// 云库房
// 出入库记录导出
const getWarehousesReceiptsExcels  = params => {
  return get(`/warehouses/receipts/excels`, params)
}

// 云库房
// 库位列表(分页)
const getWarehousesIdSlots  = params => {
  return get(`/warehouses/${params.id}/slots`, params)
}

// 云库房
// 库位新增
const postWarehousesIdSlots  = params => {
  return post(`/warehouses/${params.id}/slots`, params)
}

// 云库房
// 库位编辑
const putWarehousesIdSlotsSlot_id  = params => {
  return put(`/warehouses/${params.id}/slots/${params.slot_id}`, params)
}

// 云库房
// 编辑库位物料
const postWarehousesIdSlotsSlot_idMaterials  = params => {
  return post(`/warehouses/${params.id}/slots/${params.slot_id}/materials`, params)
}

// 云库房
// 人员列表（分页）
const getWarehousesIdUsers  = params => {
  return get(`/warehouses/${params.id}/users`, params)
}

// 云库房
// 人员新增
const postWarehousesIdUsers  = params => {
  return post(`/warehouses/${params.id}/users`, params)
}

// 云库房
// 人员启用/禁用
const putWarehousesIdUsersUser_id  = params => {
  return put(`/warehouses/${params.id}/users/${params.user_id}`, params)
}

// 云库房
// 获取全部库房
const getWarehousesAll  = params => {
  return get(`/warehouses/all`, params)
}

// 云库房
// 获取指定库房配置详情
const getWarehousesIdConfigs  = params => {
  return get(`/warehouses/${params.id}/configs`, params)
}

// 云库房
// 编辑库房配置
const putWarehousesIdConfigs  = params => {
  return put(`/warehouses/${params.id}/configs`, params)
}

// 云库房
// 获取指定库房下接受预警的手机号
const getWarehousesIdReceiversAll  = params => {
  return get(`/warehouses/${params.id}/receivers/all`, params)
}

// 云库房
// 编辑指定库房下接受预警的手机号
const putWarehousesIdReceiversAll  = params => {
  return put(`/warehouses/${params.id}/receivers/all`, params)
}

// 云库房
// 库存详情
const getWarehousesIdMaterialsMaterial_id  = params => {
  return get(`/warehouses/${params.id}/materials/${params.material_id}`, params)
}

// 云库房
// 编辑物料属性（预警值等）
const putWarehousesIdMaterialsMaterial_id  = params => {
  return put(`/warehouses/${params.id}/materials/${params.material_id}`, params)
}

// 云库房
// 出入库物资列表
const getWarehousesIdMaterials  = params => {
  return get(`/warehouses/${params.id}/materials`, params)
}

// 云库房
// 库存列表（库存预警设置列表）
const getWarehousesStocks  = params => {
  return get(`/warehouses/stocks`, params)
}

// 云库房
// 库存记录导出
const getWarehousesStocksExcels  = params => {
  return get(`/warehouses/stocks/excels`, params)
}

// 云库房
// 获取指定库房指定物资的物资详情(带库位和批次信息）最大只支持1000个物料
const getWarehousesIdMaterialWithBatchDetails  = params => {
  return get(`/warehouses/${params.id}/material-with-batch-details`, params)
}

// 云库房
// 出入库物资列表(新)
const postWarehousesMaterialsV2  = params => {
  return post(`/warehouses/materials-v2`, params)
}

// 云库房
// 物资分类v2
const getWarehousesIdCategoriesAllV2  = params => {
  return get(`/warehouses/${params.id}/categories/all-v2`, params)
}

// 开放权限
// 欢迎页面
const getAaa  = params => {
  return get(`/`, params)
}
