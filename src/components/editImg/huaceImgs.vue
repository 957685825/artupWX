<template>
	<div id="huace">
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
      	 imgArrLome:[],
      	 title:{
      	 	title:"画册",
      	 	titleEdit:"画册预览"     	 	
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