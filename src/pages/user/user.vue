<!-- author:倪霞 -->
<!-- data：2019.3.26-->
<!-- description：开发'我的'界面-->
<template>
	<div>
		<div style="z-index: 5;position:absolute ;width: 100%;top:0px">
			<i class="iconfont icongengduo" slot="icon" style="color:#FFFFFF;font-size: 35px;float: right;margin-right: 10px;"></i>
			<br>
		</div>
		<div style="z-index: -0.9;position: absolute;top:0px">
			<img :src="bg_img" style="width:100%;height: 150px;">
		</div>

		<div style="position: absolute;z-index: 2;top:120px;left:35px">
			<flexbox>
				<flexbox-item :span="6">
					<div class="flex-demo">
						<img :src=" head" style="width: 60px;height: 60px;border-radius: 30px;margin-left: 20%;">
					</div>
				</flexbox-item>
				<flexbox-item :span="3">
					<div class="flex-demo">
						<flexbox style="width: 70%;">
							<flexbox-item>
								<div class="flex-demo">
									<div style="background-color: #666666;margin-left: 65%;width:14.625%;">
										<i class="iconfont icontubiao14" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
										<span style="font-size:11px;color:#ADADAD;">收藏</span>
									</div>
								</div>
							</flexbox-item>
							<flexbox-item>
								<div class="flex-demo">
									<div style="background-color: #666666;margin-top: -21px;margin-left: 80%;width:6.25%;">
										<i class="iconfont iconadd-friends_icon" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
									</div>
								</div>
							</flexbox-item>
							<flexbox-item>
								<div class="flex-demo">
									<div style="background-color: #666666;margin-top: -21px;margin-left: 87%;width:6.25%">
										<i class="iconfont iconerweima" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
									</div>
								</div>
							</flexbox-item>
						</flexbox>
					</div>
				</flexbox-item>
				<flexbox-item>
					<div class="flex-demo"></div>
				</flexbox-item>
			</flexbox>
			<div>
				<span style="color: #FFFFFF;margin-left: 11.5%;">{{nick}}</span>
				<br>
				<span style="font-size:11px;color: #ADADAD;margin-left: 11.3%;">{{'酷游号：'+ u_id}}</span>
				<br>
				<span style="font-size:11px;color: #ADADAD;margin-left: 11.3%;">添加个性签名</span>
			</div>

			<div style="white-space: nowrap;margin-left: 11.5%;margin-top: 5px;">
				<div style="background-color: #666666;width:50px;">
					<i class="iconfont iconyonghu" slot="icon" style="color:deeppink;font-size: 15px;"></i>
					<span style="font-size:11px;color:#ADADAD;margin-left: 0px;">{{age}}</span>

					<span style="font-size:11px;color:#ADADAD;margin-top: 0px;background: #666666;">{{city}}</span>

					<span style="font-size:11px;color:#ADADAD;margin-top: 0px;background: #666666;">+增加学校等标签</span>
				</div>
			</div>
			<div style="white-space: nowrap;margin-top:10px;margin-left: 10%;">
				<span style="color: #FFFFFF;">{{thumb_num+' 获赞'}}</span>
				<span style="color: #FFFFFF;margin-left: 12.5%;">{{following_num+' 关注'}}</span>
				<span style="color: #FFFFFF;margin-left: 12.5%;">{{fans_num+' 粉丝'}}</span>
			</div>
		</div>
		<div style="padding-top: 280px;">
			<tab :line-width="1" badge-background="#333333" v-model="index" style="width: 100%;">
				<tab-item style="font-size: 16px;" selected>酷游踪迹</tab-item>
				<tab-item style="font-size: 16px;">{{'作品'+worknum}}</tab-item>
				<tab-item style="font-size: 16px;">{{'喜欢'+likenum}}</tab-item>
			</tab>
			<swiper v-model="index" width="100%" height="250px" :show-dots="false" :min-moving-distance="120">
				<swiper-item style="height: auto;">
					<!-- 酷游踪迹 -->
					<scroller lock-x height="250px">
						<div class="tab-swiper vux-center" style="padding-bottom:80px;">
							<div style="white-space: nowrap;margin-top:10px;">
								<span style="color: #FFFFFF;font-size: 18px;font-weight: 700;margin-left: 11.9%;">我的旅行</span>
								<br>
								<span style="color: #FFFFE0;font-size: 14px;margin-left: 13%;">{{'去过'+country_num+'个国家 '+city_num+'个城市 '+place_num+'个地点'}}</span>
								<br>
								<img src="../../assets/img/china.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: 40%;">
								<img src="../../assets/img/Japan.png" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: -10px;">
							</div>
							<div style="white-space: nowrap;">
								<div>
									<span style="color: #FFFFFF;font-size: 18px;font-weight: 550;margin-left: 11.9%;">2018.12</span>
								</div>
								<div style="margin-top: -24px;margin-left: 75%;">
									<span style="color: #FFFFFF;font-size: 18px;">{{'旅行'+travalyear+'年'}}</span>
								</div>
							</div>
							<div style="white-space: nowrap;margin-left: 11.9%;">
								<div>
									<img src="../../assets/img/china.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;">
								</div>
								<div style="margin-top: -34px;margin-left: 45px;">
									<span style="color: #FFFFFF;font-size: 18px;">中国</span>
									<span style="color: #ADADAD;font-size: 16px;">China</span>
								</div>
							</div>
							<div style="white-space: nowrap;margin-left: 20%;">
								<div style="margin-top: 5px;">
									<i class="iconfont iconradio" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
									<span style="color: #ADADAD;font-size: 16px;">西双版纳</span>
								</div>
								<div>
									<router-link to="/videoplay">
										<img src="../../../static/img/work2.png" style="width: 150px;height: 190px;margin-top:5px;">
									</router-link>
								</div>
							</div>
							<flexbox style="width: 59%;margin-left: 70px;">
								<flexbox-item>
									<div class="flex-demo">
										<i class="iconfont iconduomeitiicon-" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
									</div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <span style="color: #ADADAD;font-size: 15px;">2.6w</span></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <i class="iconfont iconpinglun" slot="icon" style="color:#ADADAD;font-size: 30px;"></i></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <span style="color: #ADADAD;font-size: 15px;">评论</span></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"><i class="iconfont iconzhuanfa" slot="icon" style="color:#ADADAD;font-size: 30px;"></i></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <span style="color: #ADADAD;font-size: 15px;">转发</span></div>
								</flexbox-item>
							</flexbox>

							<div style="white-space: nowrap;margin-left: 11.9%;">
								<div>
									<img src="../../assets/img/Japan.png" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;">
								</div>
								<div style="margin-top: -34px;margin-left: 45px;">
									<span style="color: #FFFFFF;font-size: 18px;">日本</span>
									<span style="color: #ADADAD;font-size: 16px;">Japan</span>
								</div>
							</div>
							<div style="white-space: nowrap;margin-left: 20%;">
								<div style="margin-top: 5px;">
									<i class="iconfont iconradio" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
									<span style="color: #ADADAD;font-size: 16px;">东京</span>
								</div>
								<div>
									<router-link to="/videoplay">
										<img src="../../../static/img/work1.png" style="width: 150px;height: 190px;margin-top:5px;">
									</router-link>
								</div>
							</div>
							<flexbox style="width: 59%;margin-left: 70px;">
								<flexbox-item>
									<div class="flex-demo">
										<i class="iconfont iconduomeitiicon-" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
									</div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <span style="color: #ADADAD;font-size: 15px;">2.6w</span></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <i class="iconfont iconpinglun" slot="icon" style="color:#ADADAD;font-size: 30px;"></i></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <span style="color: #ADADAD;font-size: 15px;">评论</span></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"><i class="iconfont iconzhuanfa" slot="icon" style="color:#ADADAD;font-size: 30px;"></i></div>
								</flexbox-item>
								<flexbox-item>
									<div class="flex-demo"> <span style="color: #ADADAD;font-size: 15px;">转发</span></div>
								</flexbox-item>
							</flexbox>
						</div>
					</scroller>
				</swiper-item><!-- 作品 -->
				<swiper-item>
					<scroller lock-x height="220px">
						<div class="tab-swiper vux-center">
							<router-link to="/videoplay" v-for="(worksrc,id) in worklist" :key="id">
								<img :src="worksrc" style="margin-left: 5px;margin-top: 5px;width: 30%;height: auto;">
							</router-link>
						</div>
					</scroller>
				</swiper-item>
				<swiper-item>
					<!-- 喜欢 -->
					<scroller lock-x height="220px">
						<div class="tab-swiper vux-center">
							<router-link to="/videoplay" v-for="(likesrc,id) in likelist" :key="id">
								<img :src="likesrc" style="margin-left: 5px;margin-top: 5px;width: 30%;height: auto;">
							</router-link>
						</div>
					</scroller>
				</swiper-item>
			</swiper>
		</div>
		<!-- 底部导航栏 -->
		<div>
			<tabbar style="background-color: #333333;position: fixed;height: 50px;">
				<tabbar-item link="/home">
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
				<tabbar-item selected link="/user">
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
		Scroller
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
			Scroller,
		},
		data() {
			return {
				worknum: 2,
				likenum: 1,
				bg_img: './static/img/userbackground.jpg',
				nick: 'rgmymt',
				head: '../../../static/img/touxiang.jpg',
				u_id: '123456789',
				signature: '添加个性签名',
				age: '20岁',
				city: '杭州',
				countrylist: [
					'中国',
					'日本',
				],
				works_num: 2,
				like_num: 1,
				thumb_num: 0,
				following_num: 49,
				fans_num: 11,
				country_num: 2,
				city_num: 2,
				place_num: 2,
				travalyear: 1,
				flag: '酷游踪迹',
				worklist: [
					'../../../static/img/work1.png',
					'../../../static/img/work2.png'
				],
				likelist: [
					'../../../static/img/work3.png'
				],
				list: [
					'酷游踪迹',
					'作品',
					'喜欢',
				],
				index: 0,
			}
		},
	}
</script>

<style>
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
</style>

