<template>
	<div id="workList">
		<!--头-->
		<mt-header title="我的作品">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right">删除</mt-button>
		</mt-header>
		<div class="headTap">
			<ul>
				<li><p v-tap='{methods : updatStyle}' class="tabBtn liActive">未完成</p></li>
				<li><p v-tap='{methods : updatStyle}' class='tabBtn'>已完成</p></li>
			</ul>
		</div>
		<div class="tapList">
			<div class="listContent">
				<ul
			  v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">
			  <li v-for="item in list" style="margin-top: 0.53rem;">
			  	<div class="content">
					<ul>
						<li><p v-tap='{methods:updataCheck}' class= "circle circleNone"><i class="icon iconfont">&#xe639;</i></p></li>
						<li>
							<img src="/dist/图层 3.png?36074abbec880d869d7da666542c62e3">
						</li> 
						<li>
							<ul>
								<li>
									<span>宝宝书</span>
									<span>智慧蓝</span>
									<span>24页</span>
								</li>
								<li>170mm*235mm</li>
								<li>2017-06-9</li>
							</ul>
						</li>
						<li v-bind:hidden="tapStyle">
							<p>继续编辑</p>
						</li>
					</ul>
				</div>
			  </li>
			</ul>
			<p class="page-infinite-loading" v-bind:hidden="loading == false">
		    	  加载中...
		    </p>
			</div>
			
		</div>
	</div>
</template>

<script>
	import { InfiniteScroll } from 'mint-ui';
	export default{
		data(){
			return{
				tapStyle:false,
				list:[1,2,3,4,5,6],
				loading:false
			}
		},
		methods:{
			updatStyle(params){
				$('.tabBtn').removeClass('liActive')
				if($(params.event.target).hasClass("liActive")){
				}else{
					$(params.event.target).addClass('liActive');
				}
				if($(params.event.target).text() == '未完成'){
					this.tapStyle = false;
				}else{
					this.tapStyle = true;
				}

			},
			updataCheck(params){
				if($(params.event.target).hasClass("circleNone")){
					$(params.event.target).removeClass('circleNone');
					$(params.event.target).find('i').show();
				}else{
					if($(params.event.target).hasClass("icon")){
						$(params.event.target).hide();
						$(params.event.target).parent('p').addClass('circleNone');
					}
					
					
					
				}
			},
			loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			    let last = this.list[this.list.length - 1];
			    for (let i = 1; i <= 10; i++) {
			      this.list.push(last + i);
			    }
			    this.loading = false;
			  }, 2500);
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>