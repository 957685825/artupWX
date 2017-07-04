<template>
	<div id="user">
		<mt-header title="多个按钮">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button>关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<a class="telePhone" href="tel:400-6688-688">客服电话：400-6688-688</a>
		<ul class="userList">
			<li>
				<router-link to="cart">
					 <i style="font-size: 3.1875rem;" class="icon iconfont">&#xe608;</i>
				 	<p>购物车</p>
				 </router-link>
			</li>
			<li>
				<router-link to="orderList">
					 <i class="icon iconfont">&#xe609;</i>
					 <p>订单列表</p>		
				 </router-link>
			</li>
			<li>
				<router-link to="Address">
					 <i class="icon iconfont">&#xe601;</i>
				 	<p>地址管理</p>
				 </router-link>
			</li>
			<li>
				<router-link to="">
				 	<i class="icon iconfont">&#xe620;</i>
					 <p>优惠卷</p>
				 </router-link>
			</li>
			<li>
				<router-link to="">
					 <i class="icon iconfont">&#xe603;</i>
				 	<p>我的素材库</p>
				 </router-link>
			</li>
			<li>
				<router-link to="">
					<i style="font-size:1.6875rem;" class="icon iconfont">&#xe7ca;</i>
				 	<p>我的作品库</p>
				 </router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
</script>

<style>
	
</style>