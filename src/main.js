import Vue from 'vue'

//引入路由和ajax库
import VueRouter from 'vue-router'
import axios from 'axios'
//vuex 具体东西
import store from './store/'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import YDUI from 'vue-ydui'
import routerConfig from './router.config.js'
import App from './App.vue'
//移动端tap事件
import vueTap from 'v-tap';
//引入vue指令暴露出去的全局指令
import {DomHeight} from './directive.js';

//引入一个自定义的util函数，里面定义的是全局公用的方法
import utils from './components/component/util';

import loading from './components/component/edit'
import editimg from './components/component/editImg';
import MaxImg from './components/component/maxImg';

Vue.use(MaxImg)
Vue.use(utils)
Vue.use(editimg);
Vue.use(loading);
Vue.use(vueTap)
//使用use 引入插件
Vue.use(MintUI);
//Vue.use(axios);
Vue.use(VueRouter);
//Vue.use(YDUI);
Vue.prototype.$http = axios


//生成路由实例:
const router = new VueRouter(routerConfig)
//动态生成导航拦
//router.afterEach((to,from)=>{
//	
//	if(to.meta.title){
//		window.document.title = ""
////		window.document.title = to.meta.title
//	}else{
//		window.document.title = ""
//	}
//})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
