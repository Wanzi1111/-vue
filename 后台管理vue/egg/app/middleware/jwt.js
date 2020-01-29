const jwt=require("jsonwebtoken");
const url=require("url")
function vsrfiy(tokens,key){
    return new Promise(res=>{
        jwt.verify(tokens,key,(error,result)=>{
            if(error) throw error;
            res(result)

        })
    })

}
module.exports=(options)=>{
    return async(ctx,next)=>{
        if(options.includes(url.parse(ctx.url).pathname)){//没有权限
            await next();
            return 
        }

        let tokens=ctx.get("tokens");
        if(!tokens){
            ctx.body={code:0,msg:"没有权限，请先登录"};
            return
        }
        let info
        try{
            info=await vsrfiy(tokens,"wanzi")

        }catch(error){
         ctx.body={code:1,msg:"权限错误"}
         return
        }
        ctx.info=info
        await next()


   

    }

}