'use strict';

const Controller = require('egg').Controller;

class UsercollectController extends Controller {
  async index(){
    let {app,ctx}=this;
    let token=ctx.query['0'];
    let data= app.jwt.verify(token,ctx.app.config.jwt.secret);
    let {uid,phone}=data;
    ctx.uid=uid;
    ctx.phone=phone;
    let where={
        uid:uid,
    }
    try {
        // console.log(where);
        let result=await ctx.service.collect.findOne(where);
        // console.log(data);
        if(result){
            ctx.body={
                code:1,
                msg:'成功',
                result,
            }
        }
    } catch (err) {
        console.log(err);
        ctx.body={
            code:0,
            msg:'数据库错误'
        }
    }
    //中间件解析完token，payload中的用户信息去挂载ctx属性
    // let uid=ctx.uid;
    // let cid=ctx.cid;
    // let where={
    //     uid:uid,
    //     cid:cid
    // };
    // let data=await this.ctx
  }
}

module.exports = UsercollectController;
