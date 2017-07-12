   var jsons = {

		data:[
				
				{
					Size:'400mmX500mm',
					width:'7.02989rem',
					height:'8.92986rem',
					smallBoxWidth:'5.43716rem',
					smallBoxHeight:'7.5464rem'

				},
				{
					Size:"500mmX400mm",
					width:'8.92986rem',
					height:'7.02989rem',
					smallBoxWidth:'8.1792rem',
					smallBoxHeight:'12.6087rem'

				},	
				{
					Size:"700mmX500mm",
					width:'12.7298rem',
					height:'8.92986rem',
					smallBoxWidth:'7.5464rem',
					smallBoxHeight:'7.5464rem'
					
				},
				{
					Size:"500mmX700mm",
					width:'8.92986rem',
					height:'12.7298rem',
					smallBoxWidth:'7.5464rem',
					smallBoxHeight:'5.43716rem'


				},
				{
					Size:"500mmX500mm",
					width:'8.92986rem',
					height:'8.92986rem',
					smallBoxWidth:'12.6087rem',
					smallBoxHeight:'8.1792rem'

				}
			]
  		
  	}

export default {	
	 data() {
	 	
	 },
  	init:{
		selectK:(size)=>{
	  		 var data = jsons.data;
	  		 var datas ={
	  		 	currentWidth:'',
	  		 	currentHeight:'',
	  		 	urls:'',
	  		 	smallWidth:'',
	  		 	smallHeight:''
	  		 }
	  		 for(var i=0; i<data.length; i++){
	  		 	
	  		 	if(data[i].Size == size){
	  		 		datas.currentHeight = data[i].height;
	  		 		datas.currentWidth = data[i].width;
	  		 	}
	  		 }
	  		 return datas;
	  	}
  	}
  }