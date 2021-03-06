//import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Index from './components/index/Index.vue'
import User from './components/user/userInfo.vue'
import NewAddress from './components/user/newAddress.vue'
import Address from './components/user/address.vue'
import OrderList from './components/user/orderList.vue'

import OrderStatus from './components/user/orderStatus.vue'
/*购物车列表*/
import Cart from './components/cart/cart.vue'
/*购物车列表*/
import payOrder from './components/cart/payOrder.vue'
//宝宝书选择
import bbsSelect from './components/product/bbs/bbsSelect.vue'

import bbsMsg from './components/product/bbs/bbsMsg.vue'

//画册
import huaceMsg from './components/product/huace/huaceMsg.vue'
//海报介绍
import hbMsg from './components/product/hb/hbMsg.vue'
//框画介绍
import khMsg from './components/product/kh/khMsg.vue'
//台历介绍
import tlMsg from './components/product/tl/tlMsg.vue'

import huaceSelect from './components/product/huace/huaceSelect.vue'


//图片编辑
import editImg from './components/editImg/editImg.vue'


//BbsImg 宝宝书 图片上传
import BbsImg from './components/editImg/bbsImg.vue'
//我的作品库
import workList from './components/workList/workList.vue'



//模块测试
import editImgs from './components/editImg/bbsImgs.vue'
import huaceImgs from './components/editImg/huaceImgs.vue'
/*选择框画尺寸以及框*/
import khSelect from './components/product/kh/khSelect.vue'
/*x选择台历尺寸*/
import tlSelect from './components/product/tl/tlSelect.vue'
//编辑上传台历
import tlEdit from './components/product/tl/tlEdit.vue'
//海报选择
import hbSelect from './components/product/hb/hbSelect.vue'

//我的素材库
import material from './components/user/material.vue'

let router = {
//	mode:'history',
	routes:[
	 	{ 
	 		path: '/', component: Index,
	 		meta:{
	 			title:"传给雅昌"
	 		}
	 	},
	 	{ 
	 		path: '/bbsImgs', component: editImgs,  //测试模块的路由宝宝书
	 		meta:{
	 			title:"宝宝书"
	 		}
	 	},
	 	{ 
	 		path: '/huaceImgs', component: huaceImgs,  //测试模块路由画册
	 		meta:{
	 			title:"画册"
	 		}
	 	},
//		{
//			path:'/', component:Home, //首页 home
//			children: [
//	            { path: '/orderList', component: orderList }
////	            { path: '/page5', component: Page5, name: '页面5' }
//     		 ]
//		},
		{ 
	 		path: '/Login', component: Login	//测试vuex 		
	 	},
		{
			path:'/User', component:User, //个人列表
			meta:{
	 			title:"个人中心"
	 		}
		},
		{
			path:'/NewAddress', component:NewAddress, //新建地址
			meta:{
	 			title:"新建地址"
	 		}
		},
		{
			path:'/Address', component:Address //收货地址
		},
		{
			path:'/OrderList', component:OrderList //订单列表
		},
		{
			path:'/OrderStatus', component:OrderStatus //订单列表
		},
		{
			path:'/cart', component:Cart //购物车
		},
		{
			path:'/payOrder', component:payOrder //购物车
		},
		{
			path:'/bbsSelect', component:bbsSelect //宝宝书选择
		},
		{
			path:'/bbsMsg', component:bbsMsg //宝宝书介绍
		},
		{
			path:'/editImg', component:editImg //图片编辑
		},
		{
			path:'/BbsImg', component:BbsImg //宝宝书图片上传
		},
		{
			path:'/workList', component:workList //我的作品库
		},
		{
			path:'/khSelect', component:khSelect //框画选择
			
		},
		{
			path:'/huaceMsg', component:huaceMsg //画册介绍
		},
		{
			path:'/hbMsg', component:hbMsg //海报介绍
		},
		{
			path:'/khMsg', component:khMsg //框画介绍
		},
		{
			path:'/tlMsg', component:tlMsg //台历介绍
		},
		{
			path:'/huaceSelect', component:huaceSelect, //画册选择
			meta:{
	 			title:"画册尺寸选择"
	 		}
		},
		{
			path:'/tlSelect', component:tlSelect //台历
			,meta:{
	 			title:"台历尺寸选择"
	 		}
		},
		{
			path:'/tlEdit', component:tlEdit //台历
			
		},
		{
			path:'/hbSelect', component:hbSelect //海报选择
			
		},{
			path:'/material', component:material //我的素材
			
		}
		
	]
}
//进入路由后动态修改每一个的title
//console.log(router)




//导出路由
export default router