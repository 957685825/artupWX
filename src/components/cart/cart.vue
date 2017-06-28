<template>
	<div id="cart">
		<mt-header title="购物车">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button>关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<!--购物车列表-->
		<ul class="cartList">
			<li v-for="(itme,indexs) in dataList">
				<div class="div_select">
					<b  :class="itme.isOK ? 'activeSelect':'' "  v-tap='{methods:updateCheck,index:indexs}'  ><i class="icon iconfont">&#xe672;</i></b>
				</div>
				<div class="div_comenter">
					<div class="img_cart">
						<img v-bind:src="itme.thumbnailImageUrl" alt="" />
						
					</div>
					<ol class="img_msg">
						<li>{{itme.sku | splitSku}}</li>
						<li>{{itme.sku | splitSkuLast}}</li>
						<li>{{itme.createdDt}}</li>
						<li class="pic" v-model="itme.num">¥&nbsp;{{itme.total * itme.num}}</li>
					</ol>
				</div>
				<div class="div_number">
					<ol>
						<li v-tap='{methods : reduce,num:itme.num,index:indexs}'>减</li>
						<li v-model="itme.num">{{itme.num}}</li>
						<li v-tap='{methods : add,num:itme.num,index:indexs}'>加</li>
					</ol>
				</div>
			</li>			
		</ul>
		<!--购物车底部-->
		<i style="height: 2.9375rem;display: block;width: 100%;"></i>
		<div class="cart_btn">
			<div class="all_select">
				<b><i></i></b> 
				<span>全选</span>
			</div>
			<div class="price">
				合计<span><b>¥</b> {{allPic}}</span>
			</div>
			<div class="crectOrder">
				结算
			</div>
		</div>
	</div>
</template>
	
<script>
	
import  Api   from '../../API.js'
export default {

	  data () {
	    return {
			dataList:[],
			price:'',
			orderNum:'',
			checkes:false,
			allPic:0,
			arr:[],
			picMap:[]
	    }
	  },
	 watch:{
　　　　
　　　　},
		methods:{
			/*添加数量*/
			add(params){
				++this.dataList[params.index].num;
				this.oPrice();
			},
			/*减少数量*/
			reduce(params){
				if( params.num > 1){
					--this.dataList[params.index].num;
					this.oPrice();
				}
			},
			oPrice(){//计算价格
				var arr = 0;
				for (var i = 0; i < this.dataList.length; i++) {
					if (this.dataList[i].isOK) {
						arr+=this.dataList[i].total *this.dataList[i].num;
					}					
				}
				this.allPic = arr;
			},
			/*设置选中状态*/
			updateCheck(params){
				this.dataList[params.index].isOK = !this.dataList[params.index].isOK;
				this.oPrice();
			}
		},	
		mounted(){
			
			var jsons = {
				sessionId:localStorage.getItem("sessionId"),
	  			userDbId:localStorage.getItem("sessionId"),
	  			status:1,
	  			pageNum:0,
	  			pageSize:15,
	  			sort:"createdDt",
	  			order:'desc'
			}
			Api.car.carList(jsons).then(res=>{
				this.dataList = res.data.results;
				for (var i = 0; i < this.dataList.length; i++) {
					this.dataList[i].isOK = false;
				}
				this.oPrice();
				console.log(res)
			},err=>{
				
			})
			
			console.log(this.$route.query)
	//		GetQueryString("category")
		}
	}
	
</script>

<style>

</style>