const Controller = require('egg').Controller;
class InfoController extends Controller {
    async index(){
        let{ctx,app}=this;
        let token=ctx.request.header.token;
        let result= app.jwt.verify(token,app.config.jwt.secret);
        // console.log(result);
        ctx.body={
            // result
            code:1,
            msg:'321'
        };
    }
  }
  
  module.exports = InfoController;