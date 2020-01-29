<template>
    <div>
     <el-table
    :data="tableData"
    border
    style="width: 100%">


    <el-table-column
      fixed
      prop="id"
      label="角色ID"
      width="400">
    </el-table-column>

    <el-table-column
      prop="role"
      label="角色名称"
      width="400">
    </el-table-column>

    <el-table-column
      prop="address"
      label="操作"
      width="400">
         <template slot-scope="scope">
        <el-button @click="rerole(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="setrole()">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
  export default {
    methods: {
    async  rerole(row) {
        console.log(row);
        let id=row.id;
        let role=row.role;
        let redata=await this.http("delete","/getroledelete",{id,role});
        let {code,rolelistdata}=redata.data
        if(code===0){
          this.tableData=rolelistdata
        }
      },
      setrole(){//编辑角色

      }
    },
   async created(){
        let data=await this.http("get","/getrolelist");
        let {code,msg,rolelistdata}=data.data
        if(code===0){
            this.tableData=rolelistdata
        }
    },

    data() {
      return {
        tableData: []
      }
    }
  }
</script>