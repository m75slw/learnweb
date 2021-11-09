'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
    async index(sql,sql2,sql3) {
        const{ctx}=this
        //轮播(数组) 课程分类cid/cthumb/cname 课程
        const banner =await ctx.model.Banner.findAll(sql);
        const courseCate = await ctx.model.Coursecate.findAll(sql2);
        const course= await ctx.model.Course.findAndCountAll(sql3);
        return {banner,courseCate,course};
    }
}

module.exports = IndexService;
