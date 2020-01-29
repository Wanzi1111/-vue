'use strict';

const Controller = require('egg').Controller;

class CreateroleController extends Controller {
  async index() {
    const { ctx } = this;
    let {bigdata}=ctx.request.body

    let viewsdata=await ctx.service.role.reqviewsadd(bigdata);
    let roledata=await ctx.service.role.reqroleadd(bigdata);
    if(roledata.affectedRows===1){
        ctx.body = {coed:0,msg:"创建角色成功"}
        return
    }

  }
}

module.exports = CreateroleController;
