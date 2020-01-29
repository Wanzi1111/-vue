<template>
    <div class="ipt">
    <el-input v-model="user" placeholder="请更改账号"></el-input>
    <el-input v-model="pwd" placeholder="请更改密码"></el-input>
    


        <el-select v-model="value" placeholder="请选择" style="float:left">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.role"
      :value="item.role">
    </el-option>
  </el-select>
  <el-button type="success" @click="sub()">更改成功</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:this.$route.query.user,
            pwd:this.$route.query.pwd,
            value:this.$route.query.role,
            id:JSON.parse(this.$route.query.id),
            // id:this.$route.query.id,
            options: [],
      }
        },
     async created(){
         let opt=await this.http("get","/getrolelist");
         this.options=opt.data.rolelistdata
        },
        methods:{
         async sub(){
                let {user,pwd,value,id,http}=this;
                let bigdata={user,pwd,role:value,id};
                let adddata=await http("put","/getuserset",bigdata);
                if(adddata.data.code===0){
                this.$router.push("/userlist")
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.ipt{
    width: 40%;
}
    
</style>