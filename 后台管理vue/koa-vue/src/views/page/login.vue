<template>
    <div class="login">
<p><el-input v-model="user" placeholder="请输入账号"></el-input></p>
<p><el-input v-model="pwd" placeholder="请输入密码"></el-input></p>
 <el-button type="success" @click="reqlogin">登录</el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      pwd:''
    }
  },
  methods:{
    async reqlogin(){
         let {user,pwd,http,$router}=this
         let userdata=await  http("post","/getlogin",{user,pwd});


         let {code,msg}=userdata.data

         if(code===0){//登录成功
          window.localStorage.setItem("tokens",userdata.data.token)  
          window.localStorage.setItem("user",user)
         $router.push("/home")//跳转到首页
         return
         }
          alert(msg)
  }
}
  



}
</script>
<style lang="scss" scoped>
.login{
  width: 40%;
  height: 100%;
  margin: auto;
}
p{
  margin-top: 30px;
}

  
</style>