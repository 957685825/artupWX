<template>
	<div id="tlEdit">
		<mt-header title="台历编辑">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right">下一步</mt-button>
		</mt-header>
		<div class="tlEditTop">
			<span>195X145</span>
			<span>2017年8月</span>
		</div>
		<div class="tlEditContent">
			<div class="tl_box">
				<img @click="imgshow" id="updateBtn" src="http://image2.artup.com/resources/static/img/p_sucai_02.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>