   var jsons = {
  		results:[
  			{
  				type:'黑色木框',
  				data:[
  						{
  							Size400x500:{width:'8.43716rem',height:'10.5464rem'},
  							imgUrl:"../hsmu.png"
  						},
						{
  							Size530x740:{width:'11.1792rem',height:'15.6087rem'},
  							imgUrl:"../hsmu.png"
  						},	
  						{
  							Size500x500:{width:'10.5464rem',height:'10.5464rem'},
  							imgUrl:"../hsmu.png"
  						},
  						{
  							Size500x400:{width:'10.5464rem',height:'8.43716rem'},
  							imgUrl:"../hsmu.png"
  						},
  						{
  							Size740x530:{width:'15.6087rem',height:'11.1792rem'},
  							imgUrl:"../hsmu.png"
  						}
  					]

  			},
  			{
  				type:'棕色木框',
  				data:[
  						{
  							Size:'400x500',
  							width:'8.43716rem',
  							height:'10.5464rem',
  							imgUrl:"../hsmu.png"
  							
  						},
						{
  							Size:"530x740",
  							width:'11.1792rem',
  							height:'15.6087rem',
  							imgUrl:"../hsmu.png"
  						},	
  						{
  							Size:"500x500",
  							width:'10.5464rem',
  							height:'10.5464rem',
  							imgUrl:"../hsmu.png"
  						},
  						{
  							Size:"500x400",
  							width:'10.5464rem',
  							height:'8.43716rem',
  							imgUrl:"url(../../../src/assets/img/kuanghua/400x500-hpl.png)"

  						},
  						{
  							Size:"740x530",
  							width:'15.6087rem',
  							height:'11.1792rem',
  							imgUrl:"../hsmu.png"
  						}
  					]
  			}
  		]
  	}

export default {	
	 data() {
	 	
	 },
  	init:{
		selectK:(size,type)=>{
	  		 var data = jsons.results;
	  		 var datas ={
	  		 	currentWidth:'',
	  		 	currentHeight:'',
	  		 	urls:''
	  		 }
	  		 for(var i=0; i<data.length; i++){
	  		 	if(data[i].type == type){
	  		 		for(var j=0;j<data[i].data.length; j++){
	  		 			if(size ==data[i].data[j].Size){
	  		 				datas.currentHeight = data[i].data[j].height;
	  		 				datas.currentWidth = data[i].data[j].width;
	  		 				datas.urls = data[i].data[j].imgUrl;
	  		 			}
	  		 		}
	  		 	}
	  		 }
	  		 return datas;
	  	}
  	}
  }