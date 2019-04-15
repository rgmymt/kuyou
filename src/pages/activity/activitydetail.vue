<template>
	<div >
		<div style="z-index: 5;position:absolute ;width: 100%;top:0px">
				<router-link to="/activity">
				<x-icon type="ios-arrow-back" size="40" fill="#FFFFFF"></x-icon>
				<br>
				</router-link>
			</div>
		<div style="z-index: 0;position: absolute;top:0px">
		 <img :src="bg_img" style="width:100%;height: 150px;"> 
		</div>
		<div style="position: absolute;z-index: 2;top:50px;">
			<div style="margin-top: 105px;">
				<router-link to="/activity">
					<span style="color: yellow;font-size: 14px;margin-left: 5%">#徒步游城市</span>
				</router-link>
				<div style="float: right;margin-right: 25px;">
					<i class="iconfont iconshijian" slot="icon" style="color:yellow;font-size: 15px;"></i>
					<span style="font-size:11px;color:#ADADAD;">3/2-3/20</span>
				</div>
			</div>
			<div style="margin-top: 5px;">
				<span style="color:#FFFFFF;font-size: 16px;font-weight: 700;margin-left: 6%;margin-top: 15px;">详情描述</span>
				<div style="float: right;margin-right: 50px;">
					<i class="iconfont iconweizhi" slot="icon" style="color:yellow;font-size: 15px;"></i>
					<span style="font-size:11px;color:#ADADAD;">不限</span>
				</div>
			</div>
			<div style="margin-left: 7%;">
				<span style="font-size:11px;color:#FFFFFF;"> 生活越来越快，压力越来越大，你有多久没有好好停下脚步欣赏这座你每天奔忙的城市。</span>
				<br>
				<span style="font-size:11px;color:#FFFFFF;">微信步数能不能炸裂冲击榜首，就看这次出行了~</span>
			</div>
			<div>
				<label class="gray_line"></label>
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
			 <div style="width: 95%;">
		      	<flexbox class="video-warp">
		      				<flexbox-item :span="1/2" v-for="(video,index) in videolist" :key="index">
		      					<div class="flex-demo">
		      						<div style="font-size: 12px;width: 90%;white-space:pre-wrap">
		      						<router-link to="/activitydetail" style="color: yellow;font-size: 12px;text-decoration:none;">
		      						<span >{{video.biaoqian}}</span>
		      						</router-link>
		      						<i class="iconfont iconweizhi" slot="icon" style="color:gray;font-size: 12px;"></i>
		      						<span style="font-size: 12px;color: gray;">{{video.dingwei}}</span>
									<span style="color: white;">{{video.liuyan}}</span>
		      					</div></div>
		      				</flexbox-item>
		      				</flexbox>	
							</div>
			  </div> 
			<div>
				<button type="submit" style="background-color: yellow;color:#333333;margin-left: 38%;width: 80px;height: 30px;border-radius: 20px;position:fixed;bottom: 20px;">参与 </button>
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
		ButtonTab,
		 ButtonTabItem
	} from 'vux'
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
			FlexboxItem,
			ButtonTab, 
			ButtonTabItem
		},
		data() {
			return {
				bg_img:"./static/img/activity1.jpg",
				videolist: [{
					dingwei: '杭州西湖',
					cover:'./static/img/work4.png',
					biaoqian:'#徒步游城市',
					liuyan: '故事从这里开始',
				},
				{
					dingwei: '山东青岛',
					cover:'./static/img/work5.png',
					biaoqian:'#徒步游城市',
					liuyan:'大海！！',
				}],
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
     .video-warp{
		 margin: 5px 8px;
		 white-space: nowrap;
	 }

</style>
