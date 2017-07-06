<template>
	<div id="khSelect">
		<mt-header title="艺术框画">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right">删除</mt-button>
		</mt-header>
		<div class="bbsImg">
			<div class="contioner" :style="{width:data.currentWidth,height:data.currentHeight,backgroundImage:data.urls}">
				<div class="hx">
					<img src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg" alt="" />
					<div class="imgBox">
						<span>编辑</span>
						<img src="" alt="" />
					</div>
				</div>
			</div>
			<!--<img src="../../../assets/img/kuanghua/400x500-hkl.jpg"/>-->
		</div>
		<dl class="slect_dl">
			<dt>
				选择尺寸
			</dt>
			<dd>
				<div  class="dd_slect dd_slectWidth dd_active">
					
					400mmx500mm
				</div>
				<div class="dd_slect dd_slectWidth ">
					
					530mmx740mm
				</div>
				<div  class="dd_slect dd_slectWidth ">
					
					500mmx500mm
				</div>
				<div  class="dd_slect dd_slectWidth ">
					
					500mmx400mm
				</div>
				<div  class="dd_slect dd_slectWidth ">
					
					740mmx530mm
				</div>
			</dd>
		</dl>
		<dl class="slect_dl">
			<dt>
				选择框型
			</dt>
			<dd>
				<div class="dd_slect dd_slectWidth dd_active">
					棕色木框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					银细边铝框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					银平面铝框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					原木色木框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					银立体铝框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					银宽边铝框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					黑细边铝框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					黑平面铝框
				</div>
				<div  class="dd_slect dd_slectWidth ">
					黑宽边铝框
				</div>
			</dd>
		</dl>
		<i style="height: 2.9375rem; display: block; width: 100%;"></i>
		<div class="cart_btn"><div class="price">
			合计<span><b>¥</b>0.01</span></div> <div class="crectOrder">
			下一步
		</div></div>
	</div>
</template>
	
<script>
	//import Selects from './selecgKh.js'
	import Api from '../../../store/selectKh.js'
	export default{
		data(){
			return{
				data:''
			}
		},
		methods:{
			

		},
		mounted(){
			
			var a = Api.init.selectK('500x400','棕色木框');
			this.data = a;
			console.log(a)
		
		}
	}
</script>
	
</script>

<style>
</style>