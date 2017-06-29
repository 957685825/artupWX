<template>
	<div id="payOrder">
		<!--头-->
		<mt-header title="确认订单">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right"></mt-button>
		</mt-header>
		<div class="address">
			<span>+</span>&nbsp;请添加收货地址
		</div>
		<div class="addressContet">
			<ul>
				<li><span>收件人姓名</span><span>彭进</span></li>
				<li>北京顺义雅昌艺术中心</li>
				<i>&#xe65f;</i>
			</ul>
		</div>
		<div class="content">
			<div class="contentList clearfix">
				<ul>
					<li>
						<div class="leftBox">
							<img src="../../../dist/bbs.png"/>
						</div>
						<div class="rightBox">
							<ul>
								<li>宝宝书  智慧蓝 24页</li>
								<li>170mm*235mm</li>
								<li>2017-06-09  13:32</li>
								<li><span>¥100.01</span><span>×1</span></li>
							</ul>
						</div>
					</li>
				</ul>
				<div class="zffs">
					<ul>
						<li>
							<span>支付方式</span>
							<span>微信支付</span>
						</li>
						<li>
							<span>商品金额</span>
							<span>￥88</span>
						</li>
						<li>
							<span>运费</span>
							<span>免运费</span>
						</li>
						<li>
							<span>优惠金额</span>
							<span>￥0</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="bottomBar">
			<ul>
				<li>合计<span>￥88.0</span></li>
				<li><span>订单提交</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
   import { Toast ,Actionsheet,Popup,Indicator} from 'mint-ui';	
   import Api from '../../API.js'
    export default {
        data() {
            return {
              
            }
        },
        methods: {
         
        },
        mounted() {
        	var jsons = {
        		orderDbId:this.$route.query.orderDbId,
        		openId:this.$route.query.openId,
        		userDbId:this.$route.query.userDbId,
        		sessionId:localStorage.getItem("sessionId")
        	}
           Api.car.queryOrder(jsons).then(res=>{
           		console.log(res)
           },err=>{
           	
           })
        }
    }
</script>

<style>
</style>