const Service = require('egg').Service;

class UserService extends Service {
  async requserdata(user) {//登录  查询账号
    return await this.app.mysql.select('userdata',{where:{user}});
  }
  async requserlist() {//用户列表
    return await this.app.mysql.select('userdata');
  }
  async requseradd(bigdata) {//添加用户
    return await this.app.mysql.insert('userdata',{user:bigdata.user,pwd:bigdata.pwd,role:bigdata.role,id:bigdata.id});
  } 
  async reqdeleteuder(id) {//删除用户
    return await this.app.mysql.delete('userdata',{id});
  } 
  async requserset(bigdata) {//编辑用户
    // console.log(bigdata)
    return await this.app.mysql.update('userdata',bigdata,{where:{id:bigdata.id}});
    // return   await this.app.mysql.update('userdata',bigdata,{where:{userid:bigdata.userid}})

  } 
  
}
module.exports = UserService;