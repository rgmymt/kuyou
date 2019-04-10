<template>
	<div>
		
			<div>
		  <tab :line-width="1" badge-background="#333333" v-model="homeindex" style="z-index: 2;width: 100%;" >
				<tab-item style="font-size: 16px;" >关注</tab-item>
				<tab-item style="font-size: 16px;" selected>推荐</tab-item>
				<tab-item style="font-size: 16px;">附近</tab-item>
			</tab>
		<swiper v-model="homeindex" width="100%" height="800px" :show-dots="false" :min-moving-distance = "50">
			<swiper-item style="height: auto;">
				<scroller lock-x height="600px">
				
				</scroller>
			</swiper-item>
			<swiper-item style="height: auto;">
				<scroller lock-x height="600px">
					<recommend  class="full"></recommend>
				</scroller>
			</swiper-item>
			<swiper-item style="height: auto;">
				<scroller lock-x height="600px">
					<near></near>
				</scroller>
			</swiper-item>
		</swiper>
		</div>

		<!--底部操作栏-->
		<tabbar style="background-color: #333333;height: 50px;position: fixed;">
			<tabbar-item selected link="/home">
				<span slot="label" style="font-size: 15px;">首页</span>
			</tabbar-item>
			<tabbar-item link="/activity">
				<span slot="label" style="font-size: 15px;">活动</span>
			</tabbar-item>
			<tabbar-item style="padding-top: 7px;">
				<i class="iconfont iconvideo" slot="icon" style="font-size: 35px;"></i>
			</tabbar-item>
			<tabbar-item link="/message">
				<span slot="label" style="font-size: 15px;">消息</span>
			</tabbar-item>
			<tabbar-item link="/user">
				<span slot="label" style="font-size: 15px;">我的</span>
			</tabbar-item>
		</tabbar>


	</div>
</template>

<script>
	import {
		XHeader,
		Cell,
		Tabbar,
		TabbarItem,
		Tab,
		TabItem,
		Swiper,
		SwiperItem,
		Scroller
	} from 'vux'
	import '../../assets/iconfont/iconfont.css'
	import recommend from '../../components/recommend/recommend.vue'
	import near from '../../components/near/near.vue'
	
	export default {
		components: {
			XHeader,
			Cell,
			Tabbar,
			TabbarItem,
			recommend,
			near,
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			Scroller
		},
		data() {
			return {
				homeindex:1,
			
			}
		},
		methods: {},
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
    
</style>