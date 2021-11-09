'use strict';
const { Controller } = require("egg");

class ChangeController extends Controller{
    async index(){
        let {ctx,app,service}=this;
        // console.log(app);
        let{success}=app.config.code;
        let postdata = ctx.request.body;
        // console.log(postdata);
        let id=ctx.id;
        let rules={
            oldpas:{type:'string',required:true,min:5,max:10},
            newpas:{type:'string',required:true},
            confirmpas:{type:'string',compare:'newpas'},
        };
        let validateResult= app.validator.validate(rules,postdata);
        if(validateResult){
            let{field,message}=validateResult[0];
            ctx.body={
                code:0,
                msg:field+'-'+message
            }
            return;
        }else{
            //获取用户信息
            let userinfo=await service.admin.read({username:id});
            userinfo=userinfo.password;
            // console.log(userinfo);
            if(ctx.setPassword(postdata.oldpas)!=userinfo){
                ctx.body={
                    code:0,
                    msg:'密码错误'
                }
                return;
            };
                
            
            let newpas=  ctx.setPassword(postdata.newpas);
            let updateResult = await service.admin.update({password:newpas},{});
            let payload={id:userinfo.username,username:userinfo.password};
            let token= app.jwt.sign(payload,app.config.jwt.secret);
            ctx.body={
                code:1,
                msg:'成功',
                token,
                userinfo:payload
            };
        }
        
        
        
        
        
        // ctx.setPassword(postdata,oldpas)===userinfo
    }
    
}

module.exports=ChangeController;