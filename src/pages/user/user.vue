<!-- author:倪霞 -->
<!-- data：2019.3.26-->
<!-- description：开发我的界面-->
<template>
	<div class="backgroundDiv" :style="backgroundDiv">
	<el-scrollbar>
	  <div >
		 <x-icon type="ios-arrow-back" size="40" fill="#FFFFFF"></x-icon>
		  <i class="iconfont icongengduo" slot="icon" style="color:#FFFFFF;font-size: 35px;margin-left: 70%;"></i> 
		  <br>
	  </div>
	  <br>
	  <br>
	  <br>
	  <br>
	  <br>
	  <div style="white-space: nowrap;">
		  <div style="">
	         <img src="../../assets/img/touxiang.jpg" style="width: 60px;height: 60px;border-radius: 30px;margin-left: 12.5%;">
	      </div>
	    <div style="background-color: #666666;margin-left: 65%;margin-top:-25px;width:14.625%;">
	   		   <i class="iconfont icontubiao14" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
	   		   <span style="font-size:11px;color:#ADADAD;">收藏</span>
	   		 </div>
	   		<div style="background-color: #666666;margin-top: -21px;margin-left: 80%;width:6.25%;">
	   		    <i class="iconfont iconadd-friends_icon" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
	   		 	</div>
	   		<div style="background-color: #666666;margin-top: -21px;margin-left: 87%;width:6.25%">
	   		   <i class="iconfont iconerweima" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
	   		 	</div>
	   </div>
	  <div>
	     <span style="color: #FFFFFF;margin-left: 11.5%;">rgmymt</span>
		 <br>
		 <span style="font-size:11px;color: #ADADAD;margin-left: 11.3%;">酷游号：123456789</span>
		 <br>
		 <span style="font-size:11px;color: #ADADAD;margin-left: 11.3%;">添加个性签名</span>
	   </div>
	   
	   <div style="white-space: nowrap;margin-left: 11.5%;margin-top: 5px;">
	    <div style="background-color: #666666;width:50px;">
		   <i class="iconfont iconyonghu" slot="icon" style="color:deeppink;font-size: 15px;"></i>
		   <span style="font-size:11px;color:#ADADAD;margin-left: 0px;">20岁</span>
		 </div>
		<div style="background-color: #666666;margin-top: -22px;margin-left: 60px;width:30px;">
		   <span style="font-size:11px;color:#ADADAD;margin-top: 0px;">杭州</span>
		 	</div>
		<div style="background-color: #666666;margin-top: -21px;margin-left: 100px;width:100px">
		   <span style="font-size:11px;color:#ADADAD;margin-top: 0px;">+增加学校等标签</span>
		 	</div>
	   </div>
	   <div style="white-space: nowrap;margin-top:10px;margin-left: 10%;">
	      <span style="color: #FFFFFF;">0 获赞</span>
	   	  <span style="color: #FFFFFF;margin-left: 12.5%;">49 关注</span>
	   	  <span style="color: #FFFFFF;margin-left: 12.5%;">11 粉丝</span>
	    </div>
		<div>
		  <tab :line-width="1" badge-background="#333333" v-model="index" style="width: 100%;" >
      	<tab-item style="font-size: 16px;" selected>酷游踪迹</tab-item>
				<tab-item style="font-size: 16px;" >{{'作品'+worknum}}</tab-item>
				<tab-item style="font-size: 16px;">{{'喜欢'+likenum}}</tab-item>
		</tab>
	<swiper v-model="index" width="100%" height="800px" :show-dots="false">
        <swiper-item ><!-- 酷游踪迹 -->
		<div class="tab-swiper vux-center">
          <div style="white-space: nowrap;margin-top:10px;">
          		   <span style="color: #FFFFFF;font-size: 18px;font-weight: 700;margin-left: 11.9%;">我的旅行</span>
          		   <br>
          			  <span style="color: #FFFFE0;font-size: 14px;margin-left: 13%;">去过2个国家 2个城市 2个地点</span>
          			  <br>
          			  <img src="../../assets/img/china.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: 40%;">
          			  <img src="../../assets/img/Japan.png" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;margin-left: -10px;">
          		 </div>
           <div style="white-space: nowrap;">
          		 <div>
          			 <span style="color: #FFFFFF;font-size: 18px;font-weight: 550;margin-left: 11.9%;">2018.12</span>
          		</div>
          		<div style="margin-top: -24px;margin-left: 75%;">
          			<span style="color: #FFFFFF;font-size: 18px;">旅行一年</span>
          		</div>
          </div>
           <div style="white-space: nowrap;margin-left: 11.9%;">
            <div>
          		<img src="../../assets/img/china.jpg" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;">
          		</div>
          		<div style="margin-top: -34px;margin-left: 45px;">
          		   <span style="color: #FFFFFF;font-size: 18px;">中国</span>
          		  </div>
          		<div style="margin-top: -23px;margin-left: 85px">
          		   <span style="color: #ADADAD;font-size: 16px;">China</span>
          		  </div>
          		</div>
			<div style="white-space: nowrap;margin-left: 18%;">
			<div style="margin-top: 5px;">
				<i class="iconfont iconradio" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
			</div>
			<div style="margin-top: -20px;margin-left: 20px;">
				<span style="color: #ADADAD;font-size: 16px;">西双版纳</span>
			</div>
			<div>
				<router-link to="/videoplay" >
				<img src="../../../static/img/work2.png" style="width: 150px;height: 190px;margin-top:5px;"> 
			    </router-link>
			</div>
		    </div>
		   <div style="white-space: nowrap;margin-top: -5px;margin-left: 11%;">
			<div >
				<i class="iconfont iconduomeitiicon-" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
			</div>
			<div style="margin-top: -28px;margin-left: 30px;">
			     <span style="color: #ADADAD;font-size: 15px;">2.6w</span>
			</div>
			<div style="margin-top: -28px;margin-left: 63px;">
				<i class="iconfont iconpinglun" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
			</div>
			<div style="margin-top: -28px;margin-left: 95px;">
			     <span style="color: #ADADAD;font-size: 15px;">评论</span>
			</div>
			<div style="margin-top: -28px;margin-left: 125px;">
				<i class="iconfont iconzhuanfa" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
			</div>
			<div style="margin-top: -28px;margin-left: 158px;">
			     <span style="color: #ADADAD;font-size: 15px;">转发</span>
			</div>
		   </div>
		 <div style="white-space: nowrap;margin-left: 11.9%;">
		  <div>
		           		<img src="../../assets/img/Japan.png" style="width: 40px;height: 40px;border-radius: 20px;margin-top:15px;">
		           		</div>
		           		<div style="margin-top: -34px;margin-left: 45px;">
		           		   <span style="color: #FFFFFF;font-size: 18px;">日本</span>
		           		  </div>
		           		<div style="margin-top: -24px;margin-left: 85px">
		           		   <span style="color: #ADADAD;font-size: 16px;">Japan</span>
		           		  </div>
		           		</div>
		 			<div style="white-space: nowrap;margin-left: 18%;">
		 			<div style="margin-top: 5px;">
		 				<i class="iconfont iconradio" slot="icon" style="color:#ADADAD;font-size: 15px;"></i>
		 			</div>
		 			<div style="margin-top: -20px;margin-left: 20px;">
		 				<span style="color: #ADADAD;font-size: 16px;">东京</span>
		 			</div>
		 			<div>
						<router-link to="/videoplay" >
		 				<img src="../../../static/img/work1.png" style="width: 150px;height: 190px;margin-top:5px;"> 
		 			    </router-link>
					</div>
		  </div>
		 <div style="white-space: nowrap;margin-top: -5px;margin-left: 11%;">
		 			<div >
		 				<i class="iconfont iconduomeitiicon-" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
		 			</div>
		 			<div style="margin-top: -28px;margin-left: 30px;">
		 			     <span style="color: #ADADAD;font-size: 15px;">2.6w</span>
		 			</div>
		 			<div style="margin-top: -28px;margin-left: 63px;">
		 				<i class="iconfont iconpinglun" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
		 			</div>
		 			<div style="margin-top: -28px;margin-left: 95px;">
		 			     <span style="color: #ADADAD;font-size: 15px;">评论</span>
		 			</div>
		 			<div style="margin-top: -28px;margin-left: 125px;">
		 				<i class="iconfont iconzhuanfa" slot="icon" style="color:#ADADAD;font-size: 30px;"></i>
		 			</div>
		 			<div style="margin-top: -28px;margin-left: 158px;">
		 			     <span style="color: #ADADAD;font-size: 15px;">转发</span>
		 			</div>
		 </div>
		</div>
        </swiper-item><!-- 作品 -->
				<swiper-item >
					<div class="tab-swiper vux-center">
						<router-link to="/videoplay" v-for="worksrc in worklist" >
							<img :src="worksrc" style="margin-left: 5px;margin-top: 5px;width: 30%;height: auto;">
						</router-link>
					</div>
				</swiper-item>
				<swiper-item ><!-- 喜欢 -->
					<div class="tab-swiper vux-center">
						<router-link to="/videoplay" v-for="likesrc in likelist" >
							<img :src="likesrc" style="margin-left: 5px;margin-top: 5px;width: 30%;height: auto;">
						</router-link>
					</div>
				</swiper-item>
      </swiper>
			</div>
	 <!-- 底部导航栏 -->	
	 <div>
	   <tabbar style="background-color: #333333;position: fixed;height: 50px;">
		  <tabbar-item>
		   <span slot="label" style="font-size: 15px;">首页</span>
		  </tabbar-item>
		  <tabbar-item  link="/activity">
		   <span slot="label" style="font-size: 15px;">活动</span>
		  </tabbar-item>
		  <tabbar-item style="padding-top: 7px;">
		    <i class="iconfont iconvideo" slot="icon" style="font-size: 35px;"></i>
		  </tabbar-item>
		  <tabbar-item  link="/message">
		   <span slot="label" style="font-size: 15px;">消息</span>
		  </tabbar-item>
		  <tabbar-item selected link="/user">
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
                                backgroundImage:'url(' + require('../../assets/img/userbackground.jpg') + ')',
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"100% 15%"
                              },
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
