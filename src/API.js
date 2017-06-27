import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
console.log(qs)
Vue.prototype.$http = axios
// 常量 API 接口地址
const HOST = 'http://image2.artup.com/'

//用户名全局变量获取

localStorage.setItem("sessionId","2141731");
const sessionIds = localStorage.getItem("sessionId");

////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
//}
var category = 'baobaoshu'

const VueHttp = new Vue();
export default {	
		testBaidu:{
	  		test:(inter)=>{
	  			return  VueHttp.$http.get(HOST+inter)   
	  		}
	   },
	   baobaoshu:{ //宝宝书
	   	//artup-build/builder/service/baobaoshu/attributes.do?format=json&ignore=true
	   	  bbsSelect:(inter)=>{ //宝宝书选择数据
	   	  	return  VueHttp.$http.get(HOST+inter)   
	   	  },
	   	  bbsPrice:(inter,category,color,page,size)=>{//宝宝书价格
	   	  	return  VueHttp.$http.get(HOST+inter)
	   	  }
	   },
	   work:{
	   	 	workEdit:(inter,jsons)=>{
	   	 		return VueHttp.$http.post(HOST+inter,
	   	 			qs.stringify(jsons)   	 				   	 		
	   	 		)
	   	 	}
	   },
	   Material:{
	   		MaterialData:(inter)=>{//素材数据
		   	  	return VueHttp.$http.get(HOST+inter, {
						params: {
				   	  		format:"json",
				   	  		userDbId:sessionIds,
				   	  		status:1,
				   	  		pageNum:0,
				   	  		pageSize:150,
				   	  		sort:"uploadDt",
				   	  		order:"desc",
				   	  		category:''
				   	  	}
				})
	   	 }	   	 
	   },
	   ajax(url,callback){
	   	 console.log(arguments.length)
	   	 if (arguments.length>2) {
	   	 	console.log('直接调用那个对象')
	   	 }
	   	 if(url){
	   	 	console.log('loading...');
	   	 	callback(this.testBaidu)
	   	 }	   	 
	   	 if (callback) {
	   	 	callback('123')
	   	 }	   	  
	   },
	   $$ajax(inter,data,callback){	  			
  			if(data && url !=''){
  				console.log('post请求')
  			}else{
  				console.log('loading..................')
  				VueHttp.$http.get(HOST+inter).then((res)=>{
  					callback(res)
  					//console.log(res)
  				})
  			}
	  	}
		
		
		
	
}
  	


