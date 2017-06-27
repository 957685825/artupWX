<template>
	<div id="newAddress">
		<!--头-->
		<mt-header title="收货地址">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right"></mt-button>
		</mt-header>
		<div class="newAddressList">
			<ul>
				<li>
					<div class="listTable">
						<p>收件人</p>
						<input type="text" placeholder="收货人姓名" />
					</div>
				</li>
				<li>
					<div class="listTable">
						<p>联系方式</p>
						<input type="text" placeholder="手机号码" />
					</div>
				</li>
				<li>
					<div class="listTable">
						<p>省市区县</p>
					    <div class="content-block">
				            <input id="province" name="province" type="text" readonly="" placeholder="请选择地址" />
				            <input id="value2" type="hidden" value="00" />
				       </div>
					</div>
				</li>
				<li>
					<div class="listTable">
						<p>详细地址</p>
						<textarea name="" placeholder="请填写详细地址 不少于8个字" rows="" cols=""></textarea>
						
					</div>
				</li>
				<li>
					<div class="listTable">
						<p>默认地址</p>
						<p v-tap='{methods:updataCheck}' class= "circle circleNone"><i class="icon iconfont">&#xe639;</i></p>
					</div>
				</li>
			</ul>
		</div>
		<div class="submitBtn">确认</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tapStyle:false
			}
		},
		methods:{
			updataCheck(params){
				if($(params.event.target).hasClass("circleNone")){
					$(params.event.target).removeClass('circleNone');
					$(params.event.target).find('i').show();
				}else{
					if($(params.event.target).hasClass("icon")){
						$(params.event.target).hide();
						$(params.event.target).parent('p').addClass('circleNone');
					}
					
				}
			}
		
		},
		mounted(){
			var area2 = new LArea();
		    area2.init({
		        'trigger': '#province',
		        'valueTo': '#value2',
		        'keys': {
		            id: 'value',
		            name: 'text'
		        },
		        'type': 2,
		        'data': [provs_data, citys_data, dists_data]
		    });
		}
	}
</script>
