<template>
	<div id="bbsMsg">
		<mt-header title="宝宝书介绍">
		 <router-link to="" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button>关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<span>宝宝书介绍</span>
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

    },
    mounted(){
		
	}
}
</script>

<style>
	
</style>