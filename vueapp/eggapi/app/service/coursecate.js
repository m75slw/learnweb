'use strict';
const { Service } = require("egg");

class courseService extends Service{
    async insert(whereObj){
        const result = await this.app.mysql.insert('course_cate',whereObj);
        return result;
    };
    async index(tablename){
        const results = await this.app.mysql.select(tablename);
        return results;
    };
    async delete(id){
        const results = await this.app.mysql.delete('course_cate', {
            id:id,
          });
        return results;
    };
    async update(data){
        const row = {
            catename:data.catename,
            cateicon:data.cateicon,
            catesort:data.catesort
        };
        const options = {
            where: {
              id: data.id,
            }
        };
        const result = await this.app.mysql.update('course_cate', row, options);
        return result;
    }
}

module.exports=courseService;