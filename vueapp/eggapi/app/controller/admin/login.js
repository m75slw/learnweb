const Controller = require('egg').Controller;

class LoginController extends Controller {
  async check(){
    let {ctx,app,service}=this;
    let{success,fail}=app.config.code;
    //接受前台输入用户名和密码
    let postdata = ctx.request.body;
    //校验参数
    // ctx.validate()
    // app.validator.validate()
    let rules={
        username:{type:'string',required:true,min:5,max:10},
        password:{type:'string',required:true}
    };

    let validateResult= app.validator.validate(rules,postdata);
    
    if(validateResult){
        let {field,message}=validateResult[0];
        ctx.body={
            code:fail,
            msg:field+':'+message
        }
        return;
    }
    //根据前台输入的用户名 去数据库查询
    let userinfo = await service.login.read(postdata.username);

    // console.log(userinfo);
    if(!userinfo){
        ctx.body={
            code:fail,
            msg:'账号不存在'
        }
        return;
    }
    let pass=ctx.setPassword(postdata.password);
    if(pass===userinfo.password){
        let payload={id:userinfo.username,username:userinfo.password};
        let token= app.jwt.sign(payload,app.config.jwt.secret);
        // console.log(token);
        ctx.body={
            code:success,
            msg:'登陆成功',
            token,
            userinfo:payload
        }
    }else{
        ctx.body={
            code:fail,
            msg:'密码错误',
        }
    }
    
    //在控制器中获取配置
    
    
    
  }
}

module.exports = LoginController;