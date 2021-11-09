'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index(){
    //轮播(数组) 课程分类cid/cthumb/cname 课程
    let {ctx}=this;
    let {Op}=this.app.Sequelize;
    const sql1={attributes:['bthumb']};
    const sql2={attributes:['id','cateicon','catename']};
    const sql3={attributes:['cid','cthumb','cname','cperiod','cintroduce','cprice','csales','cdesc'],offset:0,limit:4,order:[['csales', 'DESC']]};
    let {banner,courseCate,course}=await ctx.service.index.index(sql1,sql2,sql3);
    try{

        ctx.body={
            code:1,
            msg:'成功',
            banner,
            courseCate,
            course
            
        }
    } catch (err) {
        console.log(err);
    }
  }
}

module.exports = IndexController;
