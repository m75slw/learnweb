'use strict';
const { Service } = require("egg");

class LoginService extends Service{
    async read(username){
        // console.log(username);
        //read方法查询admin表中的username=前台输入用户名的值
        let result=await this.app.mysql.get('admin',{username:username});
        return result;
    }
}

module.exports=LoginService;