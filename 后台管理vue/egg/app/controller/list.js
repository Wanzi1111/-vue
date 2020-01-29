'use strict';

const Controller = require('egg').Controller;
const tablist=require("../../config/tablist");
class ListController extends Controller {
  async index() {
    const { ctx } = this;
    let listdata=await ctx.service.views.reqviewsdata(ctx.info.role)
    

    let newdata=[];
    let arr=listdata.map(item=>tablist[item.look])
    arr.forEach(item=>{
        let index=newdata.findIndex(val=>val.nametype===item.nametype)
        if(index!=-1){
            newdata[index].children.push({
                name:item.name,
                id:item.id,
                to:item.to 
            })
            return
        }

        newdata.push({
            nametype:item.nametype,
            id:item.id,
            icon:item.icon,
            children:[{
                name:item.name,
                id:item.id,
                to:item.to 
            }]
        });

    })



    ctx.body = {code:0,msg:"请求列表成功",newdata};
  }
}
module.exports = ListController;
