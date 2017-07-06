<template>
	<div id="bbsMsg">
		<mt-header title="画册介绍">
		   <router-link to=""  v-tap="{ methods:linkGo }" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>	
		<span><a href="#huaceSelect">画册介绍界面...</a></span>

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
		linkGo(){
			this.vurRouterGo();
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