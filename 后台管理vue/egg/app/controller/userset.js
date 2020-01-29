'use strict';

const Controller = require('egg').Controller;

class UsersetController extends Controller {
  async index() {
    const { ctx } = this;
    let userlist=await ctx.service.user.requserset(ctx.request.body)
    if(userlist.affectedRows===1){
        ctx.body = {code:0,msg:"编辑成功"};
    }
  }
}

module.exports = UsersetController;
