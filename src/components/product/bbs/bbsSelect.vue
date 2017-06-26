<template>
	<div id="bbs-select">
		<mt-header title="选择产品">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>		
		<div class="bbsImg">
			<img src="../../../assets/img/bbs.png"/>
		</div>
		

			<dl v-for="(item,index1) in bbs.attributes"  class="slect_dl">
				<dt>
					{{item.name}}选择
				</dt>
				<dd>
					<div v-for="(elements,index2)  in item.attributeValues"  :data-name="elements.name" :data-code="elements.code" v-tap="{methods : check,index1:index1,index2:index2}"  :class="elements.colorF? 'dd_slect dd_slectWidth dd_active' : 'dd_slect dd_slectWidth '"><b  v-bind:style="{background:elements.attr}" v-if="item.code =='color'"></b>{{elements.name}}</div>
				</dd>
			</dl>

		<i style="height: 2.9375rem; display: block; width: 100%;"></i>
		<div class="cart_btn">			
			<div class="price">
				合计<span><b>¥</b>{{price}}</span></div> 
			<div  v-tap="{methods : nextPage}" class="crectOrder">
				下一步
			</div>
		</div>
	</div>	
</template>

<script>
	import Api from '../../../API.js'	
	import { Toast,Indicator} from 'mint-ui';	
//	import {mapGetters, mapActions} from 'vuex'
	export default{
		data(){
			return{
				bbs:{
					
					
				},
				bbsSlsectDate:{ //给后端传递的数据
					
				},
				price:0 //价格
			}
		},
		methods:{
			check(params){ //切换选项		
				for (var i = 0; i < this.bbs.attributes.length; i++) {
						for (var j = 0; j < this.bbs.attributes[i].attributeValues.length; j++) {
							this.bbs.attributes[i].attributeValues[j].colorF = false;
							this.bbs.attributes[params.index1].attributeValues[params.index2].colorF = true;
						}
				}
				$("#bbs-select .slect_dl > dd .dd_slectWidth").eq(params.index2).addClass("dd_active").siblings().removeClass("dd_active");
				//在次计算价格
				this.getPrice($("#bbs-select .slect_dl > dd .dd_active"));
			},
			checkColor(data,num){ //切换选项
				for (var i = 0; i < data.length; i++) {
						for (var j = 0; j < data[i].attributeValues.length; j++) {
							data[i].attributeValues[j].colorF = false;
							data[i].attributeValues[num].colorF = true;
						}
				}
			},
			nextPage(){//下一页
				location.href="#BbsImg"
			},
			getPrice(dom){//获得页面的价格
					this.bbsSlsectDate={};
					//获得页面的颜色
				 	this.bbsSlsectDate.colorName = dom.eq(0).text().trim();				 	
					var dataCode = '';//请求价格需要的参数
					var dataCode2 = '';//后端需要的参数
					dom.each(function(index,el){
						dataCode+=$(this).attr("data-code")+'.'
						dataCode2+=$(this).attr("data-name")+'.'
					})
					//组装后端需要的数据暂存浏览器
					this.bbsSlsectDate.name = this.bbsSlsectDate.name+'.'+dataCode2;
					localStorage.setItem("bbsSlsectDate",JSON.stringify(this.bbsSlsectDate))
				 	//请求价格:			
//					Api.baobaoshu.bbsPrice(`artup-build/builder/price.do?format=json&ignore=true&category=baobaoshu&parameter=dataCode`).then((res)=>{
//						//价格计算
//						 this.price = res.data.price;
//					})
					console.log(this.bbsSlsectDate)					
			}
		},
		mounted(){
			var This = this;
			//宝宝书选择作品
			Indicator.open({text: '页面加载中...',spinnerType: 'fading-circle'});
			Api.baobaoshu.bbsSelect("artup-build/builder/service/baobaoshu/attributes.do?format=json&ignore=true").then((res)=>{
				 console.log(res.data)
				 //组装后端数据
				 this.bbsSlsectDate.name=res.data.name; 
				 this.bbs= res.data;
				 //给数据里面添加1个判断class的对象
				 this.checkColor(this.bbs.attributes,0)
				 Indicator.close();				 
				 //默认的价格
				 setTimeout(function(){
				 	This.getPrice($("#bbs-select .slect_dl > dd .dd_active"))
				 })	
				 
			});
			
			
		}
	}
</script>

<style>
</style>