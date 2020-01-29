'use strict';
const jwt=require("jsonwebtoken")
const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    let {user,pwd}=ctx.request.body
    let userdata=await ctx.service.user.requserdata(user)


    //非空处理
    if(user===""){
      ctx.body={code:3,msg:"账号不能为空"};
      return
    }
    if(pwd===""){
      ctx.body={code:3,msg:"密码不能为空"};
      return
    }


    if(userdata.length==0){//判断账号是否存在
      ctx.body={code:4,msg:"没有该账号，请先注册账号"};
      return
    }
    if(userdata[0].pwd!=pwd){//密码判断
      ctx.body={code:1,msg:"密码错误,请从新输入密码"};
      return
    }
    let token=jwt.sign({...userdata[0]},"wanzi")
    ctx.body = {code:0,msg:"登录成功",token};//先进行登录成功

  }
}

module.exports = LoginController;
