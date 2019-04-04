<template>
	<div style="height: 100%;">
	  <div class="mine-header">
		 <x-icon type="ios-arrow-back" size="40" fill="#FFFFFF"></x-icon>
		  <i class="iconfont icongengduo" slot="icon" style="color:#FFFFFF;font-size: 35px;margin-top:-100px;margin-left: 280px;"></i> 
		 <br>
		 <img src="../../assets/img/touxiang.jpg" style="width: 60px;height: 60px;border-radius: 30px;margin-top:15%;margin-left: 40px;"> 
	  </div> 
		<div style="white-space: nowrap;margin-left: 200px;margin-top: 5px;">
		<div style="background-color: #666666;margin-left: 40px;width:50px;">
				<i class="iconfont icontubiao14" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
				<span style="font-size:11px;color:#ADADAD;margin-left: 0px;">收藏</span>
			</div>
			<div style="background-color: #666666;margin-top: -22px;margin-left: 95px;width:20px;">
				<i class="iconfont iconadd-friends_icon" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
				</div>
			<div style="background-color: #666666;margin-top: -21px;margin-left: 120px;width:20px">
				<i class="iconfont iconerweima" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
				</div>
		</div>
		<div>
		<br>
		<span style="color: #FFFFFF;margin-left: 35px;">rgmymt</span>
		<br>
		<span style="font-size:11px;color: #ADADAD;margin-left: 35px;">酷游号：123456789</span>
		<br>
		<span style="font-size:11px;color: #ADADAD;margin-left: 35px;">添加个性签名</span>
		</div>
		<div style="white-space: nowrap;">
		<div style="background-color: #666666;margin-left: 30px;width:50px;">
			<i class="iconfont iconyonghu" slot="icon" style="color:deeppink;font-size: 15px;"></i>
			<span style="font-size:11px;color:#ADADAD;margin-left: 0px;">20岁</span>
		</div>
		<div style="background-color: #666666;margin-top: -22px;margin-left: 90px;width:30px;">
			<span style="font-size:11px;color:#ADADAD;margin-top: 0px;">杭州</span>
			</div>
		<div style="background-color: #666666;margin-top: -21px;margin-left: 130px;width:100px">
			<span style="font-size:11px;color:#ADADAD;margin-top: 0px;">+增加学校等标签</span>
			</div>
		</div>
		<div style="white-space: nowrap;margin-top:10px;">
		<span style="color: #FFFFFF;margin-left: 25px;">0 获赞</span>
		<span style="color: #FFFFFF;margin-left: 20px;">49 关注</span>
		<span style="color: #FFFFFF;margin-left: 20px;">11 粉丝</span>
		</div>
		<div>
		  <tab :line-width="1" badge-background="#333333" v-model="index" style="margin-top: 10px;width: 100%;" >
      	<tab-item selected>酷游踪迹</tab-item>
				<tab-item >{{'作品'+worknum}}</tab-item>
				<tab-item >{{'喜欢'+likenum}}</tab-item>
				
		</tab>
		  <swiper v-model="index" width="100%" height="100px" :show-dots="false" >
        <swiper-item >
          <div class="tab-swiper vux-center">
						<div style="white-space: nowrap;margin-top:10px;">
								<span style="color: #FFFFFF;font-size: 18px;font-weight: 700;margin-left: 35px;">我的旅行</span>
								<br>
									<span style="color: #FFFFE0;font-size: 14px;margin-left: 45px;">去过2个国家 2个城市 2个地点</span>
									<br>
									<img src="../../assets/china.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: 123px;">
									<img src="../../assets/Japan.png" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: -10px;">
							</div>
						<div style="white-space: nowrap;">
							<div>
								<span style="color: #FFFFFF;font-size: 18px;font-weight: 550;margin-left: 35px;">2018.12</span>
							</div>
							<div style="margin-top: -24px;margin-left: 295px;">
								<span style="color: #FFFFFF;font-size: 18px;">旅行一年</span>
							</div>
						</div>
						<div style="white-space: nowrap;">
						<div>
							<img src="../../assets/china.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: 35px;">
							</div>
							<div style="margin-top: -34px;margin-left: 75px;">
								<span style="color: #FFFFFF;font-size: 18px;">中国</span>
								</div>
							<div style="margin-top: -24px;margin-left: 115px">
								<span style="color: #ADADAD;font-size: 16px;">China</span>
								</div>
							</div>
						<div style="white-space: nowrap;">
						<div style="margin-top: -4px;margin-left: 35px;">
							<i class="iconfont iconradio" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
						<div style="margin-top: -14px;margin-left: 18px;">
							<span style="color: #ADADAD;font-size: 16px;margin-left: 85px;">西双版纳</span>
						</div>
						</div>
						</div>
					</div>
        </swiper-item>
				<swiper-item >
					<div class="tab-swiper vux-center"  >
								<router-link to="/videoplay" v-for="(worksrc,id) in worklist" :key=id >
									<img :src="worksrc" style="margin-left: 5px;margin-top: 5px;width: 30%;height: auto;">
								</router-link>
					</div>
				</swiper-item>
				<swiper-item >
					<div class="tab-swiper vux-center">
						<router-link to="/videoplay" v-for="(likesrc,id) in likelist" :key=id>
							<img :src="likesrc" style="margin-left: 5px;margin-top: 5px;width: 30%;height: auto;">
						</router-link>
					</div>
				</swiper-item>
      </swiper>
			</div>
	  <div >
		<tabbar style="background-color: #333333;height: 50px;position: fixed;">
			<tabbar-item>
				<span slot="label" style="font-size: 15px;">首页</span>
			</tabbar-item>
			<tabbar-item >
				<span slot="label" style="font-size: 15px;">活动</span>
			</tabbar-item>
			<tabbar-item style="padding-top: 7px;">
				<i class="iconfont iconvideo" slot="icon" style="font-size: 35px;"></i>
			</tabbar-item>
			<tabbar-item link="/message">
				<span slot="label" style="font-size: 15px;">消息</span>
			</tabbar-item>
			<tabbar-item  selected link="/user">
				<span slot="label" style="font-size: 15px;">我的</span>
			</tabbar-item>
		</tabbar>
	  </div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem , XButton, Tab, TabItem,Swiper, SwiperItem,Flexbox, FlexboxItem} from 'vux'
	import '../../assets/iconfont/iconfont.css'  
	export default {

		components: {
	     Tabbar,
	     TabbarItem,
		  XButton,
			 Tab, 
			 TabItem,
			 Swiper, 
			 SwiperItem,
			 Flexbox, 
			 FlexboxItem
		 },
		
	  data(){
        return {  
					worknum:2,
					likenum:1,
					flag:'酷游踪迹',
					worklist:[
						'../../../static/img/work1.png',
						'../../../static/img/work2.png'
					],
					likelist:[
						'../../../static/img/work3.png'
					],
					list:[
						'酷游踪迹',
						'作品',
						'喜欢',
						],
					index:0,
				}
			}
	}
</script>

<style>
	.mine-header{
		height: 160px;
		width: 100%;
		background-image: url(../../assets/1.jpg);
		/* background-repeat: no-repeat; */
	}
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
	.weui-tabbar__item{
		text-decoration: none;
	}
	.weui-tabbar__label{
		margin-top: 0px;
	}
</style>
