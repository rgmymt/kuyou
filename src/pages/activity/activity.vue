<!-- author:倪霞 -->
<!-- data：2019.4.5-->
<!-- description：开发活动界面-->
<template>
	<div>
		<el-scrollbar>
		<!-- 底部导航栏 -->
		<div>
		  <tabbar style="background-color: #333333;position: fixed;height: 50px;">
			  <tabbar-item>
			   <span slot="label" style="font-size: 15px;">首页</span>
			  </tabbar-item>
			  <tabbar-item selected link="/activity">
			   <span slot="label" style="font-size: 15px;">活动</span>
			  </tabbar-item>
			  <tabbar-item style="padding-top: 7px;">
			    <i class="iconfont iconvideo" slot="icon" style="font-size: 35px;"></i>
			  </tabbar-item>
			  <tabbar-item  link="/message">
			   <span slot="label" style="font-size: 15px;">消息</span>
			  </tabbar-item>
			  <tabbar-item  link="/user">
			   <span slot="label" style="font-size: 15px;">我的</span>
			  </tabbar-item>
			</tabbar>
		 </div>
		 </el-scrollbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem,Tab, TabItem,XButton,Swiper, SwiperItem,Flexbox, FlexboxItem} from 'vux'
	import '../../assets/iconfont/iconfont.css' 
	export default {
		components: {
	     Tabbar,
	     TabbarItem,
		 Tab, 
		 TabItem,
		 Swiper, 
	     SwiperItem,
		  XButton,
		  Flexbox, 
		  FlexboxItem
		 },
	  data(){
	    return {  
			   backgroundDiv: {
	                            backgroundImage:'url(' + require('../../assets/1.jpg') + ')',
	                            backgroundRepeat:"no-repeat",
	                            backgroundSize:"100% 15%"
	                          },
				}
			}
	}
				
</script>

<style>
	.weui-tabbar__item{
		text-decoration: none;
	}
	.weui-tabbar__label{
		margin-top: 0px;
	}
	.vux-tab{
		background-color: #333333 !important; 
		border-color: rgb(252, 55, 140) !important;
	}
	.el-scrollbar__wrap {
	     overflow-x: hidden;
	 }
</style>
