const Service = require('egg').Service;

class ViewsService extends Service {
  async reqviewsdata(role) {
    return await this.app.mysql.select('viewsdata',{where:{role}});
  }
  async requserlist() {
    return await this.app.mysql.select('viewsdata');
  }
  async reqreviews(role) {
    return await this.app.mysql.select('viewsdata',{where:{role:role}});
  }
  
}
module.exports = ViewsService;