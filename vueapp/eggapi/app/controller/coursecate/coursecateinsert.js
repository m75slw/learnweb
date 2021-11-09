const Controller = require('egg').Controller;

class CoursecateController extends Controller{
    async insert(){
        let{ctx}=this;
        let data=ctx.request.body;
        // console.log(data);
        let insertResult=await this.service.coursecate.insert(data);
        //没写校验、验证
        //写异常处理
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
    async index(){
        let {ctx}=this;
        let indexResult=await this.service.coursecate.index('course_cate');
        // console.log(indexResult);
        //if判断长度  
        ctx.body={
            code:1,
            msg:'查看成功',
            indexResult
        }
        
    };
    async delete(){
        let {ctx}=this;
        let deleteResult=await this.service.coursecate.delete(ctx.request.body.id);
        console.log(deleteResult);
        // let deleteResult=await this.service.course.delete();
        ctx.body={
            code:1,
            msg:'删除成功'
        }
    };
    async update(){
        let{ctx}=this;
        console.log(ctx.request.body);
        let updateResult=await this.service.coursecate.update(ctx.request.body);
        if(updateResult){
            ctx.body={
                code:1,
                msg:'更新成功'
            }
        }else{
            ctx.body={
                code:0,
                msg:'更新失败'
            }
        }
    }
}

module.exports=CoursecateController;