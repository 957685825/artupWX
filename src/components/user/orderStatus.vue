<template>
	<div>
		订单支付
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
        		paymentType:this.$route.query.paymentType,
        		addressId:this.$route.query.addressId,
        		dbId:this.$route.query.dbId,
        		userDbId:this.$route.query.userDbId,
        		openId:this.$route.query.openId,
        		subject:'微信支付'
        	}
        	Api.car.orderPay(jsons).then(res=>{
        		if(res.data.code === 'success'){
						if(this.$route.query.paymentType==='WX'){//手机微信支付
							wxpay(res.data,function callback(res){
								if(res.errMsg=="chooseWXPay:fail"){
									
									//updateOrderStatus(orderDbIds);
									
									alert("调起支付失败");
									//window.location.href = url;
									
								}else if(res.errMsg == "chooseWXPay:cancel" ) {//用户取消订单
								
									//updateOrderStatus(orderDbIds);
								
									alert("调起支付失败");			
								}else{
									alert("支付成功");
									//window.location.href = url;
								}
							}); 
						}
					} else {
						Toast('支付失败');
        				//location.href="#orderList"
						
					}
        	},err=>{
        		
        	})
        }
    }
</script>

<style>
</style>