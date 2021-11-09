'use strict';

const Controller = require('egg').Controller;

class CourseinfoController extends Controller {
  /**
   *  课程信息 
   *  课程章节
   *  课程评价
   *  推荐课程
   *  */ 
  async show() {
      let {ctx, service , app} = this;
      let cid = ctx.params.id;
      let {Op} = app.Sequelize;
      let courseInfo = await service.course.queryOne(cid);
      let chapterOption = {
            where:{
                cid
            }
      } 
      let chapter = await service.chapter.findAll(chapterOption);
      let recommendOptions = {
            where:{
                cid:{
                  [Op.ne]:cid
                },
                id:courseInfo.id
            },
            limit: 4,
            order:['cid','desc']
      };
      let recommend = await service.course.query(recommendOptions)
      ctx.body = {
            code:0,
            msg:'success',
            data:{
                courseinfo:courseInfo,
                chapter:chapter,
                recommend
            }
      } 
  }
}

module.exports = CourseinfoController;