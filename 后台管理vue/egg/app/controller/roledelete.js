'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let {id,role}=ctx.request.body
    let rerole=await ctx.service.role.reqrerole(id);
    let review=await ctx.service.views.reqreviews(role)
    console.log(review)
    if(rerole.affectedRows===1){
    let rolelistdata=await ctx.service.role.requserlist()
        ctx.body = {code:0,msg:"删除角色成功",rolelistdata};
    }
  }
}

module.exports = HomeController;
