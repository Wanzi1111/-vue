<template>
    <div>
     <el-table
    :data="tableData"
    border
    style="width: 100%">


    <el-table-column
      fixed
      prop="id"
      label="用户ID"
      width="200">
    </el-table-column>

    <el-table-column
      prop="user"
      label="用户账号"
      width="200">
    </el-table-column>

    <el-table-column
      prop="pwd"
      label="用户密码"
      width="200">
    </el-table-column>

    <el-table-column
      prop="role"
      label="用户角色"
      width="200">
    </el-table-column>

    <el-table-column
      prop="address"
      label="操作"
      width="200">
         <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="setuser(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
  export default {
    methods: {
    async  handleClick(row) {//删除
    let id=row.id
        let redata=await this.http("delete","/getuserdelete",{id})
        let {code,userlistdata}=redata.data
        if(code===0){
        this.tableData=userlistdata
        }
      },
      setuser(row){//编辑
      this.$router.push({path:"/setuser",query:row})
      }
    },
   async created(){
        let data=await this.http("get","/getuserlist");//用户列表
        let {code,msg,userlistdata}=data.data
        if(code===0){
            this.tableData=userlistdata
        }
    },

    data() {
      return {
        tableData: []
      }
    }
  }
</script>