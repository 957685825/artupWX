<template>
	<div id="index" style="width: 100%;">
		<div class="swipeDiv" style="width: 100%;height: 400px;background: #ccc;">
			<mt-swipe  :auto="4000">
			  <mt-swipe-item style="background: #ccc;">1</mt-swipe-item>
			  <mt-swipe-item style="background: orchid;">2</mt-swipe-item>
			  <mt-swipe-item style="background: orange;">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<div v-DomHeight class="btn_btn">
			<ul class="btn_ul">
				<li><a href="#bbsMsg?category=baobaoshu">
					宝宝书
				</a></li>
				<li><a href="">
					画册
				</a></li>
				<li><a href="">
					台历
				</a></li>
				
				<li><a href="">
					框画
				</a></li>
				<li><a href="">其他产品</a></li>
				<li><a href="">个人中心</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    	//http://localhost:8081/#/?a=b&c=d 参数的形式
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
	}
}
</script>

<style>
	
</style>