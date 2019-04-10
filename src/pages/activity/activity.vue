<!-- author:倪霞 -->
<!-- data：2019.4.5-->
<!-- description：开发活动界面-->
<template>
	<div style="height: 800px;">
			<!-- 搜索框 -->
			<div style="background-color: #666666;width:93%;height: 25px;margin:15px auto;">
				<i class="iconfont iconsousuo" slot="icon" style="color:#ADADAD;font-size: 25px;"></i>
				<span slot="label" style="font-size: 15px;color: gray;margin-bottom: 15px;">活动搜索</span>
			</div>
			<!-- 轮播图 -->
			<div>
				<swiper loop auto :list="demo_list" :index="demo_index" @on-index-change="demo_onIndexChange"></swiper>
			</div>
			 <!--精选活动 -->
			 <div >
			       <label class="gray_line"></label> 
				   <span style="color: gray;font-size: 14px;margin-right: 5px;">精选活动</span>
			 </div>
            <div style="white-space: nowrap;">
            	<div >
                   <img src="../../assets/img/touxiang1.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top: 5px;margin-left: 5%;">
                </div>
				<div style="margin-top:-25px;margin-left: 45px;">
					<span style="color: yellow;font-size: 17px;font-weight: 500;margin-left: 5%">#城市漫游</span>
				</div>
			</div>
            <div style="white-space: nowrap;">
            	<div>
            	<router-link to="/videoplay" >
            	<img src="../../../static/img/work4.png" style="width: 40%;height: 190px;margin-top:5px;margin-left: 11.9%;"> 
                </router-link>
            	</div>
            	<div style="margin-top: -199px;margin-left: 54%;">
            	<router-link to="/videoplay" >
            	<img src="../../../static/img/work5.png" style="width: 90%;height: 190px;margin-top:5px;"> 
            	</router-link>
            	</div>
            </div>
			<div style="white-space: nowrap;">
				<div >
			       <img src="../../assets/img/touxiang2.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-left: 5%;">
			    </div>
				<div style="margin-top:-25px;margin-left: 45px;">
					<span style="color: yellow;font-size: 17px;font-weight: 500;margin-left: 5%">#杭州美食打卡</span>
				</div>
			</div>
			<div style="white-space: nowrap;">
				<div>
				<router-link to="/videoplay" >
				<img src="../../../static/img/work6.png" style="width: 40%;height: 190px;margin-top:5px;margin-left: 11.9%;"> 
			    </router-link>
				</div>
				<div style="margin-top: -199px;margin-left: 54%;">
				<router-link to="/videoplay" >
				<img src="../../../static/img/work6.png" style="width: 90%;height: 190px;margin-top:5px;"> 
				</router-link>
				</div>
			</div>
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
						  <tabbar-item  link="/message">
						   <span slot="label" style="font-size: 15px;">消息</span>
						  </tabbar-item>
						  <tabbar-item  link="/user">
						   <span slot="label" style="font-size: 15px;">我的</span>
						  </tabbar-item>
						</tabbar>
				
			</div>
	</div>
</template>

<script>
	import {Tabbar,TabbarItem,Tab,TabItem,XButton,Swiper,SwiperItem,Flexbox,FlexboxItem,Divider } from 'vux'
	import '../../assets/iconfont/iconfont.css'

	const baseList = [{
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', 
		title: '让微信步数爆表    徒步游城市',
	},{
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
			Divider 
		},
		methods: {
			demo_onIndexChange(index) {
				this.demo_index = index
			},
		},
		data() {
			return {
				demo_list: urlList,
				demo_index: 0,
			}
		}
	}
</script>

<style>
	.gray_line {
	    background: gray;
	    width:100%;
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

	.el-scrollbar__wrap {
		overflow-x: hidden;
	}

	.swiper-demo-img img {
		width: 100%;
	}
</style>

