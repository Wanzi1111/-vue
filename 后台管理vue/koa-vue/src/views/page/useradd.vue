<template>
    <div class="ipt">
       <el-input v-model="user" placeholder="请输入账号"></el-input>
    <el-input v-model="pwd" placeholder="请输入密码"></el-input>
    


        <el-select v-model="value" placeholder="请选择" style="float:left">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.role"
      :value="item.role">
    </el-option>
  </el-select>
  <el-button type="success" @click="sub()">提交</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:"",
            pwd:"",
            value:"",
        options: [],
        value: '',
       id:Math.random()*100,

      }
        },
     async created(){
         let opt=await this.http("get","/getrolelist");
         this.options=opt.data.rolelistdata
        },
        methods:{
         async sub(){
                let {user,pwd,value,http,id}=this;
                let bigdata={user,pwd,role:value,id};
                let adddata=await http("post","/getuseradd",bigdata);
                this.$router.push("/userlist")
                console.log(adddata)
            }
        }
    }
</script>
<style lang="scss" scoped>
.ipt{
    width: 40%;
}
    
</style>