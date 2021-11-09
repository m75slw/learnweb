'use strict';

const Service = require('egg').Service;

class CollectService extends Service {
  async findOne(data) {
    let {app,ctx}=this;
    let result=await ctx.model.Collect.findOne({
        where:data
    });
    result=result.dataValues;
    // console.log(result);
    return result;
  }
}

module.exports = CollectService;
