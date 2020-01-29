<template>
    <div class="add">
       <el-input v-model="role" placeholder="请添加用户角色"></el-input>


<el-tree
  :data="data"
  show-checkbox
  node-key="id"
  @check-change='handleCheckChange'
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>

  <el-button type="success" @click="sub()">添加角色</el-button>


    </div>
</template>
<script>
export default {
    data(){
        return {
            role:"",
            data:[{
          label: '用户管理',
          children: [{
            id: 1,
            label: '用户列表'
          }, {
            id: 2,
            label: '添加用户'
          }]
        },{
          label: '角色管理',
          children: [{
            id: 3,
            label: '角色列表'
          }, {
            id: 4,
            label: '添加角色'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
            look:[]
        }
        
    },
    methods: {
     async sub(){//提交创建角色
            let {role,look}=this;
            let bigdata={
                look:look,
                role:role,
                id:Math.random()*100
               }
               console.log(look)
            let roledata=await this.http("post","/getcreaterole",{bigdata});
            if(roledata.data.code===0){
                // this.$router.push("/rolelist")
            }
            console.log(roledata)

        },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data)
        if(!data.id){
          return
        }
        let index=this.look.indexOf(data.id);
        if(index!=-1){
          this.look.splice(this.look.indexOf(data.id),1)          
        }else{
          this.look.push(data.id)
        }
console.log(this.look)
      }
    }
}
</script>
<style lang="scss" scoped>
.add{
    width: 400px;
}
    
</style>