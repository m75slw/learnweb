const { Controller } = require("egg");

class Courselist  extends Controller{
    async index(){
        let {ctx, service, app} = this;
        let {Op} = app.Sequelize;
        let {id,page=1,limit=10,search,order} = ctx.query;
        let options = {};
        let offset = (page -1) * limit;
        options.offset = offset;
        options.limit = limit *1;
        if(order){
            options.order = [order , 'desc'];
        }
        options.where = {};

        if(id && id*1){
           options.where.id = id;
        }
        switch(search){
            case '1':
                options.where.cprice = {
                    [Op.gt]:0
                }
               break;
            case '0':
                options.where.cprice = 0;    
        }
        let {count,rows} = await service.course.findAndCountAll(options);
        ctx.body = {
            code:0,
            msg:'success',
            count:count,
            data:rows
        }
    }
}

module.exports = Courselist