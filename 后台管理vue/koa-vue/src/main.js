import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import axios from "axios";
Vue.prototype.http=(method,url,data)=>{
  let val=method==="get"?"params":"data";
  let obj={};
  obj={
    method,
    url,
    headers:{
      
      tokens:localStorage.getItem("tokens")
    }
  }
  obj[val]=data  
  return axios(obj).catch(error=>{
    if(error.response.status===404){
      alert("未定义")
    }
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
