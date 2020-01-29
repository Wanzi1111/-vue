'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getlogin', controller.login.index);//登录
  router.post('/getlist', controller.list.index);//首页列表

  router.get("/getuserlist",controller.userlist.index);//用户列表
  router.post("/getuseradd",controller.useradd.index);//添加用户
  router.delete("/getuserdelete",controller.userdelete.index);//删除用户
  router.put("/getuserset",controller.userset.index);//编辑用户


  router.get("/getrolelist",controller.rolelist.index);//角色列表
  router.delete("/getroledelete",controller.roledelete.index);//删除角色
  router.post("/getcreaterole",controller.createrole.index);//创建角色











};
