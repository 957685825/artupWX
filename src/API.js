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

var category = 'baobaoshu'
/*添加购物车*/
const ADD_CAR = `${HOST}artup-build/builder/cors/car/add/command.do?format=json&ignore=true`
/*购物车列表*/
const CAR_LIST = `${HOST}artup-build/builder/cors/car/queryByPage.do?format=json&ignore=true`
<<<<<<< HEAD
/*素材dpi是否合格*/
const MATER_DPI = `${HOST}artup-build/builder/cors/picture/validate.do?format=json&ignore=true&userDbId=${sessionIds}&sessionId=${sessionIds}`
////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
=======

////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
>>>>>>> 05c421158a4b5c3931e797a3e9adbd4320ca247e
//}


const VueHttp = new Vue();
export default {	
		testBaidu:{
	  		test:(inter)=>{
	  			return  VueHttp.$http.get(HOST+inter)   
	  		}
	   },
	   car:{//购物车
	   	/*添加购物车*/
	   	addCar:(jsons)=>{
	   		return VueHttp.$http.post(ADD_CAR,
	   	 			qs.stringify(jsons)   	 				   	 		
	   	 	)
	   	},
	   	carList:(jsons)=>{
	   		return VueHttp.$http.get(CAR_LIST,jsons)
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
	   work:{ //作品的接口post方法(保存)
	   	 	workEdit:(inter,jsons)=>{
	   	 		return VueHttp.$http.post(HOST+inter,
	   	 			qs.stringify(jsons)   	 				   	 		
	   	 		)
	   	 	},
	   	 	workList:(inter,status,pageNum,category)=>{ //作品列表查询
	   	  		return  VueHttp.$http.get(HOST+inter,{
						params: {
				   	  		format:"json",
				   	  		ignore:"true",
				   	  		userDbId:sessionIds,
				   	  		sessionId:sessionIds,
				   	  		status:status, //未完成1，已经完成2 
				   	  		sortField:"createdDt",
				   	  		pageSize:15,//每页多少条
				   	  		pageNum:pageNum, //第几页
				   	  		order:"desc",
				   	  		category:category //类型
				   	  	}
			})
	   	  },
	   	  unfinishedWork:(inter,edtDbId)=>{//素材数据
		   	  	return VueHttp.$http.get(HOST+inter, {
	   	 			params: {
			   	  		format:"json",
			   	  		ignore:"true",
			   	  		userDbId:sessionIds,
			   	  		sessionId:sessionIds,
			   	  		edtDbId:edtDbId				   	  		
				   	}
				})
	   	 },
	   	 checkDPI:(jsons)=>{
	   	 	return VueHttp.$http.post(MATER_DPI,
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
  	


