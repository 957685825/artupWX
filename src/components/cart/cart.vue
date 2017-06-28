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
					<b v-tap='{methods:updateCheck,index:indexs}'  ><i class="icon iconfont">&#xe672;</i></b>
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
				var num = params.num+=1;
				this.dataList[params.index].num = num;
				var that = this;
				setTimeout(function(){
					this.oPrice();
				},500)
			},
			/*减少数量*/
			reduce(params){
				if( params.num > 1){
					
					var num = params.num-=1;
					this.dataList[params.index].num = num;
					this.oPrice();
				}
			},
			oPrice(){
				var arr = 0;
				$('.cartList li').each(function(n,el){
					if($(el).hasClass('xz')){
						var pic = parseFloat($(el).find('.div_comenter .img_msg .pic').text().substring(1));
						console.log($(el).find('.div_comenter .img_msg .pic').text())
						arr+=pic;
					}
				})
				this.allPic = arr;
			},
			/*设置选中状态*/
			updateCheck(params){
				if($(params.event.target).parent('b').hasClass("activeSelect")){
					$(params.event.target).parent('b').removeClass('activeSelect');
					$(".cartList >li:nth-child("+(params.index+1)+")").removeClass('xz')
					//this.oPrice("yc",params.index)
				}else{
					$(params.event.target).parent('b').addClass('activeSelect');
					$(".cartList >li:nth-child("+(params.index+1)+")").addClass('xz')
				}
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