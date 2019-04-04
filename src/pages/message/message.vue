<template>
	<div>
		<x-header :left-options="{showBack: false}" style="background-color: #333333;margin-top: 20px;width: 100%;">消息<a slot="right">联系人</a></x-header>
		<div class="messagetype">
		<!-- <router-link to="/@mine"> -->
		 <cell :title="'@我的'" style="width: 80%;" >
        <img slot="icon" width="35" style="display:block;margin-right:15px;border-radius: 17px;" src="../../assets/img/@我的.png">
		 <x-icon type="ios-arrow-forward" size="30" style="fill:#C0C0C0;"></x-icon>
	  </cell>
	 <!-- </router-link> -->
	<!--  <router-link to="/pinglun"> -->
	 <cell :title="'评论'" style="width: 80%;">
	 <img slot="icon" width="35" style="display:block;margin-right:15px;border-radius: 17px;" src="../../assets/img/评论.png">
	 <x-icon type="ios-arrow-forward" size="30" style="fill:#C0C0C0;"></x-icon>
	 </cell>
	<!-- </router-link> -->
	<!-- <router-link to="/zan"> -->
	<cell :title="'赞'" style="width: 80%;">
	<img slot="icon" width="35" style="display:block;margin-right:15px;border-radius: 17px;" src="../../assets/img/赞.png">
	<x-icon type="ios-arrow-forward" size="30" style="fill:#C0C0C0;"></x-icon>
	</cell>
<!-- 	</router-link> -->
 </div>
	<div class="messages">
	<cell :title="'活动提醒'" :value="'19:00'" style="width: 80%;"  inline-desc='您好,您发起的话题…'>
	<img slot="icon" width="35" style="display:block;margin-right:15px;border-radius: 17px;" src="../../assets/img/提醒.png">
	</cell>
	</div>
	 <tabbar style="background-color: #333333;height: 50px;">
		  <tabbar-item>
		   <span slot="label" style="font-size: 15px;">首页</span>
		  </tabbar-item>
		  <tabbar-item >
		   <span slot="label" style="font-size: 15px;">活动</span>
		  </tabbar-item>
		  <tabbar-item style="padding-top: 7px;">
		   <i class="iconfont iconvideo" slot="icon" style="font-size: 35px;"></i>
		  </tabbar-item>
		  <tabbar-item selected link="/message">
		   <span slot="label" style="font-size: 15px;">消息</span>
		  </tabbar-item>
		  <tabbar-item  link="/user">
		   <span slot="label" style="font-size: 15px;">我的</span>
		  </tabbar-item>
		</tabbar>

	</div>
</template>

<script>
import { XHeader,Cell,Tabbar,TabbarItem } from 'vux'
import '../../assets/iconfont/iconfont.css'
export default {
  components: {
    XHeader,
	Cell,
	Tabbar,
	TabbarItem,
  },
 }
</script>

<style>
	.messagetype /deep/ .weui-cell{
		height: 30px;
		border-top: 0px;
		padding: 10px 0px;
		color: #FFFFFF;	
		margin-left:auto; 
		margin-right:auto;
	}
	.messagetype /deep/ .weui-cell:before{
		border-top: 0px !important;
	}
	.messages{
		margin-top: 20px;
	}
	.vux-label{
		color:#FFFFFF;
		line-height: 21px;
		padding-bottom: -16px;
		
	}
	.messages /deep/ .weui-cell{
		margin-left:auto; 
		margin-right:auto;
	}
	.messages /deep/ .weui-cell__ft{
		font-size: 10px;
	}
	.vux-label-desc{
		font-size: 10px !important;
	}
	.messages /deep/ p{
		font-size: 13px;
		margin-top: 0px !important;
		margin-bottom: 0px !important;
	}
	.weui-tabbar__item{
		text-decoration: none;
	}
	.weui-tabbar__label{
		margin-top: 0px;
	}
</style>
