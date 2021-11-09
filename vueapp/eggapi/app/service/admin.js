'use strict';
const { Service } = require("egg");

class AdminService extends Service{
    async read(whereObj){
        // console.log(username);
        let result=await this.app.mysql.get('admin',whereObj);
        return result;
    };
    async update(dataobj,wherobj){
        // console.log(username);
        let result=await this.app.mysql.update('admin',dataobj,{
            where:wherobj
        });
        return result.affectedRows;
    }
}

module.exports=AdminService;