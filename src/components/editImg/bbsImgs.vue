<template>
	<div id="baobaoshus">
		<MaxImg :data-img="dataImg"></MaxImg>
	</div>
</template>

<script>
import Api from '../../API.js'
import { Swipe, SwipeItem,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      dataImg:{ //img
      	 imgArrType:[htmlData.bbs5,htmlData.bbs6],
      	 imgArrLome:[htmlData.bbs9,htmlData.bbs10],
      	 title:{
      	 	title:"宝宝书",
      	 	titleEdit:"宝宝书预览"     	 	
      	 }
	   }
  	}
  },
// props: ['dataImg'],
    methods:{
    		
    },
    mounted(){
    		
    }
}
</script>

<style>

</style>