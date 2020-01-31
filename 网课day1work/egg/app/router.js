'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getlogin', controller.login.index);//登录接口
  router.post('/getreginser', controller.reginser.index);//注册接口



};
