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
  config.keys = appInfo.name + '_1636514917657_6875';

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
      success:200,
      fail:404
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
    database: 'vue3',
  };
  return {
    ...config,
    ...userConfig,
  };
};
