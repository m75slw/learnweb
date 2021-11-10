//后端授权
const { Server } = require('http');
const { config } = require('process');
const url = require('url');

module.exports= option =>{
    
    return async function index(ctx,next){
        // console.log('授权中间件');
        let {pathname}=url.parse(ctx.url);
        if(pathname==='/admin/login'||'/admin/upload'){
            await next();
        }else{
            let {app}=ctx;
            let token= ctx.request.header.token;
            if(token){
                try{
                    let result= app.jwt.verify(token,ctx.app.config.jwt.secret);
                    ctx.id=result.id;
                    ctx.username=result.username;
                    await next();
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