<template>
	<div id="tlEdit">
		<mt-header title="台历编辑">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right">下一步</mt-button>
		</mt-header>
		<div class="tlEditTop">
			<span>195X145</span>
			<span>2017年8月</span>
		</div>
		<div class="tlEditContent" v-for="(item,index) in taili">
			<div class="tl_box_s">
				<img @click="imgshow" id="updateBtn" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg" alt="" />
			</div>
			<div class="tiData"><span >2017</span>年<span>{{item}}</span><span v-if="index!=0">月</span> </div>
		</div>
	</div>
</template>

<script>
	import Api from '../../../API.js'	
	
	import { Toast,Indicator,MessageBox } from 'mint-ui';	
//	import {mapGetters, mapActions} from 'vuex'
	export default{
		data(){
			return{
				taili:['封面',1,2,3,4,5,6,7,8,9,10,11,12]
			}
		},
		methods:{
			
			 editorImage(){}
		},
		mounted(){
			
			
			
		}
	}
</script>

<style>
</style>