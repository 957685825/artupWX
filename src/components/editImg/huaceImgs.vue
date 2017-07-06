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
      	 imgArrType:[huaCeData.bbs1,huaCeData.bbs2,huaCeData.bbs3,huaCeData.bbs4,huaCeData.bbs5,huaCeData.bbs6],
      	 imgArrTypeData:huaCeData, //传递板式的对象
      	 imgArrLome:[],
      	 dataMsg:{
      	 	title:"画册",
      	 	titleEdit:"画册预览",
      	 	tplCode:"huace_170-235_24", 
      	 	defDbId:"9de2973d-3487-4b05-b556-b9b92dd75493"
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