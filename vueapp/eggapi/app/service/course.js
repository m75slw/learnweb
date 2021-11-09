'use strict';

const Service = require('egg').Service;

class CourseService extends Service {
    async insert(whereObj){
        const result = await this.app.mysql.insert('course',whereObj);
        return result;
    }
    async index({whereobj,orders,field,limit,page}){
        let sql=`SELECT ${field} from course,course_cate where `;
        let countSql=`SELECT count(*) as count from course,course_cate where `;
        if(JSON.stringify(whereobj)!=JSON.stringify({})){
            for( let i in whereobj ){
                let value=whereobj[i];
                if(Array.isArray(value)){
                    let [v,op]=value;
                    sql += ` ${i} ${op} '${v}' and `;
                    countSql +=` ${i} ${op} '${v}' and `;

                }else{
                    sql+=`${i} = ${value} and `;
                    countSql +=`${i} = ${value} and `;
                }
            }
        }
        sql+=" course.id = course_cate.id ";
        countSql+=" course.id = course_cate.id ";
        sql+=` order by ${orders.order} ${orders.type} `;
        let offset=(page-1)*limit;
        sql+=` limit ${offset},${limit} `
        // console.log(countSql);

        let result =await this.app.mysql.query(sql);
        let count =await this.app.mysql.query(countSql);
        // console.log(count[0].count);
        // console.log(result);
        return {result,count:count[0].count};

        // const result = await this.app.mysql.select('course');
        // return result
    };
    async findAndCountAll({where,order='cid',limit=10,offset=0,attributes=['cid','cdesc','cname','cthumb','cprice','csales','cperiod']}={}){
        let {app} = this;
        let options = {};
        if(where){
            options.where = where;
        }
        if(attributes){
            options.attributes = attributes;
        }
        if(order){
            options.order = [ order ];
        }
        if(limit){
            options.limit = limit;
        }
        if(offset){
            options.offset = offset;
        }
        let result = await app.model.Course.findAndCountAll(options);
        return result;
    };
    async queryOne(cid){
        let result = await this.app.model.Course.findByPk(cid);
        return result;
    };
    async query({where,order,limit,attributes=['cid','cdesc','cname','cthumb','cprice','csales','cperiod']}={}){
        let {app} = this;
        let options = {};
        if(where){
           options.where = where;
        }
        if(attributes){
           options.attributes = attributes;
        }
        if(order){
           options.order = [ order ];
        }
        if(limit){
           options.limit = limit;
        }
        let result = await app.model.Course.findAll(options);
        return result;
    }
}

module.exports = CourseService;



