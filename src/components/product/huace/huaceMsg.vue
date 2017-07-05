<template>
	<div id="bbsMsg">
		<mt-header title="画册介绍">
		 <router-link to="" @click.native="fn"  slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<span><a href="#huaceSelect">画册介绍界面...</a></span>
		<p @click="fn">test</p>
	</div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
	  data () {
	    return {
	      msg: ''
	    }
	  },
    methods:{
		fn(){
			
		}
    },
    mounted(){
    	    //更改session
    		this.addToSession();
	}
}
</script>

<style>
	
</style>