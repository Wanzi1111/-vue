'use strict';

const Controller = require('egg').Controller;

class RolelistController extends Controller {
  async index() {
    const { ctx } = this;
    let rolelistdata=await ctx.service.role.requserlist()
    ctx.body = {code:0,msg:"角色列表请求成功",rolelistdata};

  }
}

module.exports = RolelistController;
