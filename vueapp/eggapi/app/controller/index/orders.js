'use strict';

const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async create() {
    let{ctx,app}=this;
    ctx.body={
        code:1,
        msg:'cg'
    }
  }
}

module.exports = OrdersController;
