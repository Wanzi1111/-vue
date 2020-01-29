'use strict';

const Controller = require('egg').Controller;

class UserlistController extends Controller {
  async index() {
    const { ctx } = this;
    let userlistdata=await ctx.service.user.requserlist();
    ctx.body = {code:0,msg:"请求用户列表成功",userlistdata};
  }
}

module.exports = UserlistController;
