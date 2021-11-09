'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {
    async index() {
        let {ctx,app,service}=this;
        //前台穿过来的数据
        //分页和搜索 总数total->统计函数 count(*)
        //分页 limit page .. 
        //搜索 order ..
        // `selet * from course where like %搜索% order by 字段 asc limit offset,n ` 
        // console.log(ctx.query);
        let {cname,id,page=1,limit=5,order="cid",type="desc"}= ctx.query;
        let whereobj={};
        if(id){
            whereobj['course.id']=id*1;
            // console.log(whereobj['course.id']);
        }
        if(cname){
            whereobj.cname=['%'+cname+'%', 'LIKE'];
        }
        // console.log(whereobj);
        let orders={order,type};
        let field="*";
        try {
            let result =await service.course.index({whereobj,orders,field,limit,page});
            ctx.body={
                code:1,
                msg:'1',
                data:result                 
            }
        } catch (err) {
            console.log(err);
        }
        

        // let indexResult=await this.service.course.index(sql);
        // console.log(indexResult);
        // if(indexResult){
        //     ctx.body={
        //         code:1,
        //         msg:'查看成功',
        //         indexResult
        //     }
        // }else{
        //     ctx.body={
        //         code:0,
        //         msg:'查看失败',
        //         indexResult:[]
        //     }
        // }
    };
    async destroy() {
    
    };
    async update() {
    
    };
    async create() {
        let {ctx}=this;
        let data=ctx.request.body;
        let insertResult=await this.service.course.insert(data);
        if(insertResult){
            ctx.body={
                code:1,
                msg:'添加成功'
            }
        }else{
            ctx.body={
                code:0,
                msg:'添加失败'
            }
        }
    };
    async edit() {
    
    };
    async new() {
    
    };
    async show() {
    
    };

}

module.exports = CourseController;
