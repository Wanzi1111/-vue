'use strict';

const Controller = require('egg').Controller;

class UserdeleteController extends Controller {
  async index() {
    const { ctx } = this;
    const {id}=ctx.request.body;
    let redata=await ctx.service.user.reqdeleteuder(id);
    if(redata.affectedRows===1){
        let userlistdata=await ctx.service.user.requserlist();
        ctx.body = {code:0,msg:"删除用户成功",userlistdata};

    }
  }
}

module.exports = UserdeleteController;
