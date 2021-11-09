//后端授权
const { Server } = require('http');
const { config } = require('process');
const url = require('url');
// const { Service } = require('../../typings/app');

module.exports= option =>{
    
    return async function index(ctx,next){
        // console.log('授权中间件');
        // console.log(url.parse(ctx.url));
        let {pathname}=url.parse(ctx.url);
        // let {fail}=this.app.config.code;
        if(pathname==='/admin/login'||'/admin/upload'){
            await next();
        }else{
            let {app}=ctx;
            // console.log(ctx);
            let token= ctx.request.header.token;
            // console.log(token);  
            if(token){
                try{
                    // console.log(ctx);
                    let result= app.jwt.verify(token,ctx.app.config.jwt.secret);
                    // console.log(result);
                    ctx.id=result.id;
                    ctx.username=result.username;
                    // console.log(result);
                    
                    await next();
                    // console.log('333');
                }catch(err){
                    console.dir(err);
                    ctx.body={
                        code:0,
                        msg:'修改失败,请刷新页面'
                    }
                }
                
                
            }else{
                ctx.body={
                    code:0,
                    msg:'空'
                }
            }
            // console.log('123456');
            
        }
        
    }
}