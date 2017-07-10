var jsons = {
	results:[
		{
			type:'白色',
		    index:1,
		    data:[
		    		{
		    			Size:"195mmx145mm",
		    			imgUrl:'http://image2.artup.com/resources/static/img/taili/taili04.jpg'
		    		},
		    		{
		    			Size:"145mmx195mm",
		    			imgUrl:'http://image2.artup.com/resources/static/img/taili/taili06.jpg'
		    		}
		    ]
		},
		{
			type:'咖啡色',
		    index:1,
		    data:[
		    		{
		    			Size:"195mmx145mm",
		    			imgUrl:'http://image2.artup.com/resources/static/img/taili/taili03.jpg'
		    		},
		    		{
		    			Size:"145mmx195mm",
		    			imgUrl:'http://image2.artup.com/resources/static/img/taili/taili05.jpg'
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
	  		 var imgUrl = ''
	  		for(var i=0; i<data.length; i++){
	  			if(type == data[i].type){
	  				console.log(data[i])
	  				for(var j=0; j<data[i].data.length; j++){
	  					if(size == data[i].data[j].Size){
	  						imgUrl = data[i].data[j].imgUrl;
	  					}
	  				}
	  			}
	  		}
	  		return imgUrl;
	  	}
  	}
  }