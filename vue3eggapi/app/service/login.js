'use strict';
const { Service } = require("egg");

class LoginService extends Service{
    async findOne(username){
        const {ctx}=this
        //read方法查询admin表中的username=前台输入用户名的值
        let result=await ctx.model.Admin.findOne({ 
            where:{ username:username }
        });
        
        return result;
    }
}

module.exports=LoginService;