<template>
	<div id="Address">
		<!--头-->
		<mt-header title="收货地址">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon=""  slot="right"></mt-button>
		</mt-header>
		<div class="addressList">
			<ul class="clearfix">
				<li class="clearfix">
					<div class="content clearfix">
						<div class="listContent clearfix">
							<ul class="clearfix">
								<li><p v-tap='{methods:updataCheck}' class= "circle circleNone"><i class="icon iconfont">&#xe639;</i></p></li>
								<li>
									<p>
										<span>彭进</span>
										<span>15111110111</span>
									</p>
									<p>北京市顺义区北京雅昌艺术中心 北京市顺义区北京雅昌艺术中心 北京市顺义区北京雅昌艺术中心</p>
								</li>
								<li><i class="icon iconfont">&#xe6a7;</i></li>
							</ul>
						</div>
						<div class="delet clearfix">
							<div>删除</div>
						</div>
					</div>
				</li>
				<li class="clearfix">
					<div class="content clearfix">
						<div class="listContent clearfix">
							<ul class="clearfix">
								<li><p v-tap='{methods:updataCheck}' class= "circle circleNone"><i class="icon iconfont">&#xe639;</i></p></li>
								<li>
									<p>
										<span>彭进</span>
										<span>15111110111</span>
									</p>
									<p>北京市顺义区北京雅昌艺术中心</p>
								</li>
								<li><i class="icon iconfont">&#xe6a7;</i></li>
							</ul>
						</div>
						<div class="delet clearfix">
							<div>删除</div>
						</div>
					</div>
				</li>
			</ul>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tapStyle:false
			}
		},
		methods:{
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
			}
		
		},
		mounted(){
			$(function(){
				//动态设置删除按钮高度
				function FnsetDelectDivHeight(){
					var delectHeight = [];
					var dom = [];
					$('.listContent').each(function(n,e){
						delectHeight.push($(this).height())
					});
					$('.delet ').each(function(n,e){
						dom.push($(this))
					});
					for(var i=0; i<delectHeight.length;i++){
						dom[i].css({
							'height':delectHeight[i]+'px'
						});
					}
				}FnsetDelectDivHeight();
				//滑动删除UI  显示删除按钮
				function FndelectTouch(){
					//绑定事件的时候这里不能用click 而要用touchstart
					var expansion = null; //是否存在展开的list
					var container = $('.addressList > ul li .content');
					for(var i = 0; i < container.length; i++){    
					    var x, y, X, Y, swipeX, swipeY;
					    container[i].addEventListener('touchstart', function(event) {
					        x = event.changedTouches[0].pageX;
					        y = event.changedTouches[0].pageY;
					        swipeX = true;
					        swipeY = true ;
					        if(expansion){   //判断是否展开，如果展开则收起
					            expansion.className = "";
					        }        
					    });
					    container[i].addEventListener('touchmove', function(event){  
					    	
					        X = event.changedTouches[0].pageX;
					        Y = event.changedTouches[0].pageY;        
					        // 左右滑动
					        if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
					            // 阻止事件冒泡
					            event.stopPropagation();
					            if(X - x > 10){   //右滑
					                event.preventDefault();
					                 $(this).animate({left:"0"},1);  //右滑收起
					            }
					            if(x - X > 10){   //左滑
					                event.preventDefault();
					                
					                $(this).animate({left:"-3.78rem"},1);
					               
					               // $(this).addClass('swipeleft');   //左滑展开
					                expansion = $(this);
					            }
					            swipeY = false;
					        }
					        // 上下滑动
					        if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
					            swipeX = false;
					        }        
					    });
					}
				}FndelectTouch();
				
				
			})
		}
	}
</script>
