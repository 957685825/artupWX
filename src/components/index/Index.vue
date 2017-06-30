<template>
	<div id="index" style="width: 100%;">
		<div class="" style="width: 100%;height: 400px;background: #ccc;">
			<mt-swipe  :auto="4000">
			  <mt-swipe-item style="background: #ccc;">1</mt-swipe-item>
			  <mt-swipe-item style="background: orchid;">2</mt-swipe-item>
			  <mt-swipe-item style="background: orange;">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="btn_btn">
			<ul class="btn_ul">
				<li><a href="">
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
		
	}
}
</script>

<style>
	
</style>