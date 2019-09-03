/*配置用户 按钮权限配置文件*/
let permission = {};
permission.install = function (Vue, store) {
  let P = {
    user: ["add_user", "delete_user", "edit_user", "list_user", "reset_password", "edit_user_status", "user_import", "user_export", "user_tlp"], //用户管理
    dept: ["add_dept", "delete_dept", "edit_dept", "list_dept"], //部门管理
    book: ["add_book", "delete_book", "edit_book", "list_book", "config_book", "auth_book", "loc_book", "edit_book_status","persoin_sms_phone","change_dis","reset_book_password"], //客户管理
    upload: ['upload_phoneStatus', 'upload_sMsStatus', 'upload_phone'], //个人中心
    role: ["add_role", "delete_role", "edit_role", 'permiss_role', 'list_role','distribute_right_role','distribute_customer_role','edit_status_role'], //角色管理
    log: ["delete_log"], //日志管理
    mygateway: ["isdo_mygateway", 'config_mygateway', 'surepartchange_mygateway', 'partList_mygateway', 'partTag_mygateway', 'device_import', 'device_export', 'device_del','device_edit','device_online_mygateway'], //我的设备
    gatewayconfig:['config_device_protocol'],//设备配置
    gande: ['add_gande', 'delete_gande', 'edit_gande', "list_gande", "info_gande", "state_gande", "adress_gande"], //联动中心
    inputpart: ["isdo_inputpart"], //输入部件
    history: ["history_export"], //历史列表
    water: ["cz_water"], //钱包管理
    news: ["cms_msg_add", "cms_msg_edit", "cms_msg_pushornotpus", "cms_msg_del"], //新闻中心
    deviceGroup: ["device_group_add", "device_group_del", "device_group_edit"], //设备组
    InspectionConfig: ["check_item_add", "check_item_del"], //巡检项配置
    configDevice: ["check_tlp_add", "check_tlp_del", "check_tlp_edit"], //巡检模板管理
    InsDevice: ["check_device_add", "check_device_del", "check_device_edit", "check_device_info"], //巡检设备管理
    InspectionPlan: ["check_plan_add", "check_plan_del", "check_plan_edit", "check_plan_task", "check_plan_device_group", "check_plan_user"], //巡检计划
    InspectionTask: ["check_task_add", "check_task_del", "check_task_edit", "check_plan_user","check_task_edit"], //巡检任务
    InspectionRecord: ["check_record_excute", "check_record_info"], //巡检记录
    repairTask: ["check_repair_send"], //维修任务
    commond:['device_commond','device_add'],//device_commond消音 复位 部件更新 device_add
    personalCenter:["persoin_info"],
    auth:['create_auth','distribute_menu_auth','distribute_role_auth','edit_auth','del_auth'],//权限管理
    menumanage:['create_menu','refresh_menu','add_childcreate_menu','edit_menu','del_menu',"edit_status_menu"],//菜单管理
    alarm: ['alarm','alarm_reviewer','alarm_sender'],
    //判断按钮是否有权限
    isPermissions(permission) {
      let index = store.getters.permissions.findIndex(item => {
        if (item == permission) return item
      })
      if (index != -1)
        return true
      else
        return false
    }
  }

  Vue.prototype.$PBTN = P




}
export default permission
