<template>
	<div >
		<div style="z-index: -2;position: absolute;">
		 <img src="../../assets/img/activity1.jpg" style="width:100%;height: 150px;"> 
		</div>
			<div style="z-index: 0;">
				<x-icon type="ios-arrow-back" size="40" fill="#FFFFFF"></x-icon>
				<br>
			</div>
			<div style="white-space: nowrap;margin-top: 105px;">
				<router-link to="/activity">
					<span style="color: yellow;font-size: 14px;margin-left: 5%">#徒步游城市</span>
				</router-link>
				<div style="margin-left: 70%;margin-top:-20px;">
					<i class="iconfont iconshijian" slot="icon" style="color:yellow;font-size: 15px;"></i>
					<span style="font-size:11px;color:#ADADAD;">3/2-3/20</span>
				</div>
			</div>
			<div style="white-space: nowrap;">
				<span style="color:#FFFFFF;font-size: 16px;font-weight: 700;margin-left: 6%;margin-top: 15px;">详情描述</span>
				<div style="margin-left:70%;margin-top:-25px;">
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
			<div>
				<router-link to="/videoplay">
					<img src="../../../static/img/work4.png" style="width: 40%;height: 190px;margin-top: 5px;margin-left: 7%;">
				</router-link>
			</div>
			<div style="margin-top: -210px;margin-left: 52%;">
				<router-link to="/videoplay">
					<img src="../../../static/img/work5.png" style="width: 93%;height: 190px;margin-top:5px;">
				</router-link>
			</div>
			<div>
				<span style="color: yellow;margin-left: 5%;font-size: 12px;">#徒步游城市</span>
				<i class="iconfont iconweizhi" slot="icon" style="color:gray;font-size: 12px;"></i>
				<span style="color: gray;font-size: 12px;margin-left: -5px;">杭州西湖</span>
			</div>
			<div style="margin-top: -18px;margin-left: 52%;">
				<span style="color: yellow;font-size: 12px;">#徒步游城市</span>
				<i class="iconfont iconweizhi" slot="icon" style="color:gray;font-size: 12px;"></i>
				<span style="color: gray;font-size: 12px;margin-left: -5px;">山东青岛</span>
			</div>
			<div>
				<span style="color: white;font-size: 12px;margin-left: 7%;">故事从这里开始</span>
			</div>
			<div style="margin-top: -18px;margin-left: 45%;">
				<span style="color: white;font-size: 12px;margin-left: 20%;">大海！！</span>
			</div>
			<div>
				<button type="submit" style="background-color: yellow;color:#333333;margin-left: 38%;width: 80px;height: 30px;border-radius: 20px;position:fixed;bottom: 10px;">参与 </button>
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
				backgroundDiv: {
					backgroundImage: 'url(' + require('../../assets/img/activity1.jpg') + ')',
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 20%",
				},
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

	.el-scrollbar__wrap {
		overflow-x: hidden;
	}

</style>
