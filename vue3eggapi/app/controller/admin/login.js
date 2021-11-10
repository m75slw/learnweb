'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async create() {
    let {ctx,service,app}=this;
    let postdata = ctx.request.body;
    let rules={
        username:{type:'string',required:true},
        password:{type:'string',required:true}
    };
    let validateResult= app.validator.validate(rules,postdata);

    if(validateResult){
        let {field,message}=validateResult[0];
        ctx.body={
            code:404,
            msg:field+':'+message
        }
        return;
    }
    //根据前台输入的用户名去查询
    let userinfo = await service.login.findOne(postdata.username);
    if(!userinfo){
        ctx.body={
            code:404,
            msg:'账号不存在'
        }
        return;
    }
    let pass=ctx.setPassword(postdata.password);//前台数据加密后
    //密码1234567
    if(pass===userinfo.password){//前台数据加密后 是否等于后台数据
        let payload={username:userinfo.username,password:userinfo.password};
        let token= app.jwt.sign(payload,app.config.jwt.secret);
        // delete payload.password;
        ctx.body={
            code:200,
            msg:'登陆成功',
            token,
            userinfo:payload
        }
    }else{
        ctx.body={
            code:404,
            msg:'密码错误',
        }
    }
    
  }
}

module.exports = LoginController;
