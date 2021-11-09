'use strict';

const Service = require('egg').Service;

class ChapterService extends Service {
  async create() {
    let {ctx}=this;
    let data=ctx.request.body;
    let {chname,chid,chduration,cid,chvideo}=data;
    console.log(ctx.model.Chapter);
    const chapter = await ctx.model.Chapter.create({ chname,chid,chduration,cid,chvideo });
    // console.log(data);
    
    return chapter.cid
  };
  async findAndCountAll({attributes,where,offset,limit=5}={}){
      let {ctx}=this;
    //   console.log(where);
      let sql={};
      if(attributes && Array.isArray(attributes) && attributes.length){
        sql.attributes=attributes;
      };
      
      if(where && typeof where ==='object' && Object.keys(where).length){
        sql.where=where;
      };
      sql.offset=offset;
      sql.limit=limit*1;
      const chapter =await ctx.model.Chapter.findAndCountAll(sql);
      return chapter
      //   {
      //     attributes:['chname','cid'],
      //     where:{
      //         cid:'',
      //         chname:{
      //             [Op.substring]:'s'
      //         },
      //     },
      //     offset:10,
      //     limit:5,
      // }
  };
  async findAll({where,order}={}){
    let {app} = this;
    let options = {};
     if(where){
        options.where = where;
     }
     if(order){
        options.order = [ order ];
     }
     let result = await app.model.Chapter.findAll(options);
     return result;
  };
}

module.exports = ChapterService;
