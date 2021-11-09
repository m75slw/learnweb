'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  async create(data) {
    let {ctx}=this;
    let result=await ctx.model.Users.create(data);
    return result;
  };
  async findOne(data){
    let {app,ctx}=this;
    let result=await ctx.model.Users.findOne({
        where:data
    });
    result=result.dataValues;
    // console.log(result);
    return result;
  }
}

module.exports = UsersService;
