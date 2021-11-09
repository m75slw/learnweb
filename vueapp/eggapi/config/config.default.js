/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634198263267_290';

  // add your middleware config here
  config.middleware = ['adminauth'];
  config.adminauth={
    enable:true,
    match:'/admin',
    
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    code:{
      success:1,
      fail:0
    }
  };
  config.security={
    csrf: false,
    domainWhiteList: [ 'http://localhost:8080' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  config.jwt={
    secret:'123456',
  };
  config.mysql={
    client:{
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '000215',
      // 数据库名
      database: 'aishe',

    },
    app:true,
    agent: false,
  }
  config.validate={
    convert: true,
    validateRoot: false,
  }
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    user: 'root',
    password: '000215',
    port: 3306,
    database: 'aishe',
  };
  return {
    ...config,
    ...userConfig,
  };
};
