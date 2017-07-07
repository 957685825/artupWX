<template>
	<div id="fileLoad">
		<!-- 弹出框选上传方式 -->
		<mt-popup class="fileUpload" style="position;relative;"  v-model="sheetVisible"  closeOnClickModal="false" position="bottom">
			<ul>
				<li id="browseButton">从本地添加</li>
				<li v-tap="{methods : slectUpload}">从素材库里导入</li>
				<li @click="sheetVisible=false">取消</li>
			</ul>
		</mt-popup>
		<!-- 弹出框图片素材库 -->
		<mt-popup style="position;relative;"
				  v-model="popupVisible"
				  position="bottom">
			<div class="img_div">
				<!--liActive-->
				<ul>
					<li  v-tap="{methods : MaterialCheckImg ,index : index}"  :class="imgs.activeLi ? 'liActive ':'' " v-for="(imgs,index) in bbs.Material" >
						<img :src="imgs.thumbnailUrl" >
					</li>
				</ul>
				<div class="btn_button">
					<a class="Determine" v-tap="{methods : okQuery}">确认</a>
				</div>
			</div>
		</mt-popup>
	</div>	
</template>

<script>
	import { Toast ,Actionsheet,Popup,Indicator} from 'mint-ui';
    import Api from '../../../API.js'
    export default{ 
    		   
     	 data () {
            return {
            	
         }}
     	 
     	 
     }
	
</script>

<style>
</style>