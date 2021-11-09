'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async create() {
        let{ctx,app,service}=this;
        let postData=ctx.request.body.data;
        // console.log(postData);
        delete postData.code;
        postData.password=ctx.setPassword(postData.password);
        postData.nickname="用户"+Date.now();
        // console.log(postData);
        try {
          let result=await service.users.create(postData);
          if(result){
            ctx.body={
              code:1,
              msg:'success'
            }
          }else{
            ctx.body={
              code:0,
              msg:'fail'
            }
          }
        } catch (error) {
          console.log(error);
          ctx.body={
            code:0,
            msg:'服务器错误'
          };
          // ctx.status=500;
        }
        
  }
  async update(){
    let{app,ctx}=this;
    let putData=ctx.request.body.data;
    // console.log(putData);
    let search={phone:putData.phone};
    // console.log(this.ctx);
    // console.log(search);
    let result=await this.ctx.service.users.findOne(search);
    // result=result.dateValues;
    // console.log(result);
    try {
        if(result){
          let password=ctx.setPassword(putData.password);
          if(password===result.password){
            
            let payload={uid:result.uid,phone:result.phone,nickname:result.nickname,sign:result.sign};
            // delete result.password;
            // let payload=result;
            let token= app.jwt.sign(payload,app.config.jwt.secret);
            ctx.body={
              code:1,
              msg:'登陆成功',
              token,
              users:payload,
            }
          }else{
            ctx.body={
              code:0,
              msg:'密码错误'
            }
          }
      }else{
        ctx.body={
          code:0,
          msg:'不存在账号'
        }
      }
    } catch (err) {
      console.log(err);
      ctx.body={
        code:0,
        msg:'登陆失败'
      }
    }
    
    
  }
}

module.exports = RegisterController;
