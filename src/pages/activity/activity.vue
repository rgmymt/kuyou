<!-- author:倪霞 -->
<!-- data：2019.4.5-->
<!-- description：开发活动界面-->
<template>
	<div style="height: 800px;">
		<!-- 搜索框 -->
		<div class="search" style="margin-top: 5px;">
				<x-input title="搜索" type="text" placeholder="  活动搜索" class="searchBox" v-model="searchVal" style="background-color:gray;font-size: 16px;">
				<i class="iconfont iconsousuo" slot="label" style="font-size: 24px;color: white;margin-left: 10px;padding-left:10px;display:block;" width="24" height="24"></i>
				</x-input>
			</div>
		<!-- 轮播图 -->
		<div style="margin-top: 5px;">
			<swiper loop auto :list="demo_list" :index="demo_index" @on-index-change="demo_onIndexChange"></swiper>
		</div>
		<!--精选活动 -->
		<div>
			<label class="gray_line"></label>
			<span style="color: gray;font-size: 14px;margin-left: 10px;">精选活动</span>
		</div>
		<div style="white-space: nowrap;">
			<div>
				<img src="../../assets/img/touxiang1.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top: 5px;margin-left: 5%;">
				<router-link to="/activitydetail">
					<span style="color: yellow;font-size: 17px;font-weight: 500;margin-left: 5%">#城市漫游</span>
				</router-link>
			</div>
		</div>
		<flexbox>
			<flexbox-item>
				<div class="flex-demo">
					<router-link to="/videoplay">
						<img src="../../../static/img/work4.png" style="width: 90%;height: 190px;margin-top:8px;margin-left: 11.9%;">
					</router-link>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="flex-demo">
					<router-link to="/videoplay">
						<img src="../../../static/img/work5.png" style="width: 90%;height: 190px;margin-top:8px;">
					</router-link>
				</div>
			</flexbox-item>
		</flexbox>

		<div style="white-space: nowrap;">
			<div>
				<img src="../../assets/img/touxiang2.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-left: 5%;">
				<span style="color: yellow;font-size: 17px;font-weight: 500;margin-left: 5%">#杭州美食打卡</span>
			</div>
		</div>
		<flexbox>
			<flexbox-item>
				<div class="flex-demo">
					<router-link to="/videoplay">
						<img src="../../../static/img/work6.png" style="width: 90%;height: 190px;margin-top:8px;margin-left: 11.9%;">
					</router-link>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="flex-demo">
					<router-link to="/videoplay">
						<img src="../../../static/img/work6.png" style="width: 90%;height: 190px;margin-top:8px;">
					</router-link>
				</div>
			</flexbox-item>
		</flexbox>
		<!-- 底部导航栏 -->
		<div>
			<tabbar style="background-color: #333333;height: 50px;position: fixed;">
				<tabbar-item link="/home">
					<span slot="label" style="font-size: 15px;">首页</span>
				</tabbar-item>
				<tabbar-item selected link="/activity">
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
	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem,
		Tab,
		TabItem,
		XButton,
		Swiper,
		SwiperItem,
		Flexbox,
		FlexboxItem,
		Divider,
		XInput,
	} from 'vux'
	import '../../assets/iconfont/iconfont.css'

	const baseList = [{
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
		title: '让微信步数爆表    徒步游城市',
	}, {
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
		title: '让微信步数爆表    徒步游城市',
	}, {
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
		title: '让微信步数爆表    徒步游城市',
	}, ]

	const urlList = baseList.map((item, index) => ({
		url: '/activitydetail',
		img: item.img,
		title: `${item.title}`
	}))

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
			FlexboxItem,
			Divider,
			XInput,
		},
		methods: {
			demo_onIndexChange(index) {
				this.demo_index = index
			},
		},
		data() {
			return {
				search: "",
				demo_list: urlList,
				demo_index: 0,
			}
		}
	}
</script>

<style>
	.gray_line {
		background: gray;
		width: 100%;
		height: 1px;
		float: left;
		margin: 10px 0px;
	}

	.weui-tabbar__item {
		text-decoration: none;
	}

	.weui-tabbar__label {
		margin-top: 0px;
	}

	.vux-tab {
		background-color: #333333 !important;
		border-color: rgb(252, 55, 140) !important;
	}

	
	.swiper-demo-img img {
		width: 100%;
	}
	.search .searchBox{
		padding: 0px !important;
		margin: 10px 15px !important;
		border-radius: 10px;
	}
</style>
