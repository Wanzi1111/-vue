<template>
  <div class="home">
  <el-header>后台管理系统   
    <div style="float:right">
    <span>{{user}}</span>
    <span>|</span>
    <span @click="comback()">退出</span>
    </div>
    </el-header>
<el-container>


  <el-aside width="210px">
 
    <el-col :span="12" width="100%" >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
       v-for="(item,index) in data" :key="index">

      <el-submenu index="item.id">
        <template slot="title">
          <i class="item.icon"></i>
          <span>{{item.nametype}}</span>
        </template>
          <el-menu-item index="jtem.id" v-for="(jtem,index) in item.children" :key="index" @click="to(jtem.to)">{{jtem.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
    </el-aside>


  <el-main>
    <router-view/>
  </el-main>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
   

     return {
       data:[],
       user:window.localStorage.getItem("user")
     }
  },
  name: 'home',
  components: {
    // HelloWorld
  },
   async created(){
         let {http}=this
     let listdata=await http("post","/getlist");
     this.data=listdata.data.newdata
  },

  methods:{   
    to(path){
      this.$router.push(path)
    },
    comback(){//退出账户
    window.localStorage.clear("user");
    window.localStorage.clear("tokens")
    this.$router.push("/login")

    }
  
  }
}
</script>
<style lang="scss" scoped>
.el-col-12{
  width: 100% !important;
  width: 200px;
}
   .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    width: 100px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  span{
    display: inline-block;
    margin: 0 5px;
  }
</style>
