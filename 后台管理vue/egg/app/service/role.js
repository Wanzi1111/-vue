const Service = require('egg').Service;

class RoleService extends Service {
  async requserlist() {//角色列表
    return await this.app.mysql.select('roledata');
  }
  async reqrerole(id) {//删除角色
    return await this.app.mysql.delete('roledata',{id});
  }
  async reqviewsadd(bigdata) {//添加视图
    for(var i=0;i<bigdata.look.length;i++){
     await this.app.mysql.insert('viewsdata',{look:i+1,role:bigdata.role});

    }
  }
  async reqroleadd(bigdata) {//添加角色
    console.log(bigdata)
    return await this.app.mysql.insert('roledata',{role:bigdata.role,id:bigdata.id});
  }
}
module.exports = RoleService;