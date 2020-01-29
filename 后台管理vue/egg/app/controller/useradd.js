'use strict';

const Controller = require('egg').Controller;

class UseraddController extends Controller {
  async index() {
    const { ctx } = this;
    // const bigdata={
    //     user:"111",
    //     pwd:"123",
    //     role:"21313",
    //     id:1
    // }
    let bigdata=ctx.request.body
    let useradd=await ctx.service.user.requseradd(bigdata)
    if(useradd.affectedRows===1){
        let userlist=await ctx.service.user.requserlist()
        ctx.body = {code:0,msg:"添加成功",userlist};
    }
  }
}
module.exports = UseraddController;
