'use strict';

const Controller = require('egg').Controller;

class ChapterController extends Controller {
    async create(){
        let {ctx}=this;
        try {
            let result=await this.service.chapter.create();
            // console.log(data);
            if(result){
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
        } catch (err) {
            console.log(err);
        } 
    };
    async index(){
        let{ctx}=this;
        let{Op}=this.app.Sequelize;
        //    看心情  cid,cname   limit,page    limit
        // attributes  where       offset       limit
        try {
            // console.log(ctx.query);
            let {cid,chname,limit=5,page=1}=ctx.query;
            
            let obj={};
            obj.attributes=['chname','cid','chduration','chvideo'];
            let where={};
            where=Object.assign(where,{cid});
            if(chname){
                let ch={
                    [Op.substring]:`${chname}`,
                };
                where.chname=ch;
            };
            obj.where=where;
            if(limit&&page){
                let offset=limit*(page-1);
                obj.offset=offset;
            }
            limit && (obj.limit=limit);
            // console.log(obj);
            let {rows,count}=await this.service.chapter.findAndCountAll(obj);
            if(rows.length){
                ctx.body={
                    code:1,
                    msg:'查询成功',
                    rows,
                    count,
                }
            }else{
                ctx.body={
                    code:1,
                    msg:'查询失败',
                    rows:[],
                    count:0,
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    
}

module.exports = ChapterController;
