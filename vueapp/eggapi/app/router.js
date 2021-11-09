'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  
  //后台管理端路由
  router.post('/admin/login', controller.admin.login.check);

  router.get('/admin/info', controller.admin.info.index);
  router.post('/admin/changepass', controller.admin.changepass.index);
  router.post('/admin/coursecate/insert',controller.coursecate.coursecateinsert.insert);
  router.get('/admin/coursecate/index', controller.coursecate.coursecateinsert.index);
  router.post('/admin/coursecate/delete', controller.coursecate.coursecateinsert.delete);
  router.post('/admin/coursecate/update', controller.coursecate.coursecateinsert.update);
  router.post('/admin/upload', controller.upload.index);
  //restful风格resources
  router.resources('course','/admin/course',controller.course.course);
  router.resources('chapter','/admin/chapter',controller.chapter.chapter);

  //前台路由
  router.resources('index','/index',controller.index.index);
  router.resources('/index/courseinfo',controller.index.courseinfo);
  router.resources('/index/courselist',controller.index.courselist);
  router.resources('/index/register',controller.index.register);
  router.resources('/users/collect',controller.index.usercollect);
  router.resources('/users/orders',controller.index.orders);
};
