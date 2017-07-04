<template>
	<div id="index" style="width: 100%;">
		<div class="swipeDiv" style="width: 100%;height: 400px;">
			<mt-swipe  :auto="4000">
			  <mt-swipe-item v-for="img in indexImg">
			  	<a class="a_herf" :href="img.link">		  		
			  		<img :src="img.imgUrl"/>
			  	</a>
			  </mt-swipe-item>
			  <!--<mt-swipe-item style="background: orchid;"></mt-swipe-item>
			  <mt-swipe-item style="background: orange;">3</mt-swipe-item>-->
			</mt-swipe>
		</div>
		<div v-DomHeight class="btn_btn">
			<ul class="btn_ul">
				<li> <router-link to="bbsMsg?category=baobaoshu">宝宝书</router-link></li>
				<li> <router-link to="">画册</router-link></li>
				<li> <router-link to="">台历</router-link></li>
				<li> <router-link to="">框画</router-link></li>
				<li> <router-link to="">其他产品</router-link></li>				
				<li> <router-link to="user">个人中心</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      indexImg:[]
    }
  },
// //拿到数据
//  computed:mapGetters([
//    'count',
//    'test2'
//  ]),
//  //提交方法
//  methods:mapActions([
//    'add','testBtn'
//  ]),
    methods:{
//	    	mapActions([
//	      'add','testBtn'
//	    ])
    },
    mounted(){
    		Indicator.open({
		  text: '加载中...',
		  spinnerType: 'fading-circle'
		});
		if (JSON.stringify(this.$route.query)!="{}") {
			console.log(this.$route.query)
			sessionStorage.setItem('urlQuery',JSON.stringify(this.$route.query))
			if (this.$route.query.userDbId) {
				localStorage.setItem('userDbId',this.$route.query.userDbId)
			}			
		}else{

			if (!localStorage.getItem('userDbId')) {
				//请求接口 //重新登录函数
				Api.user.getUserDbId().then(res=>{
					//请求微信授权
//					location.href=res.data.tokenUrl
				})				
			}
		}
		//首页请求的数据
		Api.Index.indexImg().then(res=>{

			this.indexImg = res.data.data;
			Indicator.close();

		})
		

	}
}
</script>

<style>
	.a_herf{
		display: block;
		width: 100%;
		height: 100%;
	}
	.a_herf >img{
		display: block;
		width: 100%;
	}
</style>