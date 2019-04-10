<template>
	<div>
	<x-icon type="ios-arrow-left" size="35" style="float:left;position: fixed;top:5px;fill:#C2C2C2"  @click="$router.go(-1)"></x-icon>
	<div class="biaoqiancontent">
	<span style="color: #FFFF00;">{{biaoqiantitle}}</span>
	<flexbox class="video-warp">
	<flexbox-item :span="1/2" v-for="(video,index) in videolist" :key=index>
		<div class="flex-demo" style="width: 95%;" >
			<img :src="video.fenmian" >
			<i class="iconfont iconweizhi1" slot="icon" style="font-size: 13px;color: #999999;margin-left: -85%;"></i>
			<span style="font-size: 12px;">{{video.dingwei}}</span>
			<div style="font-size: 12px;width: 95%;white-space:pre-wrap">
			<router-link to="/biaoqian" style="color: #FFFF00;text-decoration:none;">
			<span v-for="(biaoqian,value) in video.biaoqianlist" :key=value>{{biaoqian}}&nbsp;&nbsp;</span>
			</router-link>
			<span style="color: #C2C2C2;">{{video.liuyan}}</span>
			</div>
			<div style="vertical-align: middle;">
			<img :src="video.touxiang" style="border-radius:14px;width: 25px;margin-top: 10px;">
			<span style="font-size: 12px;">{{video.id}}</span>
			</div>
		</div>
	</flexbox-item>
	</flexbox>	
	</div>
	</div>
</template>

<script>
	import {  Flexbox,
	FlexboxItem, } from 'vux'
	export default {
			components: {
				Flexbox,
		FlexboxItem,
			},
			
		data(){
			return{
				biaoqiantitle:'#美食',
					videolist: [{
						dingwei: '麻辣小龙虾',
						fenmian:'../../../static/img/mala1.png',
						biaoqianstr:'#爆浆爆黄小龙虾 #杭州美食打卡',
						biaoqianlist: [],
						liuyan: '吃货的嘴骗人的鬼',
						touxiang: '../../../static/img/touxiang1.png',
						id:'sddf'
					},
					{
						dingwei: '麻辣小龙虾',
						fenmian:'../../../static/img/mala2.png',
						biaoqianstr:'#爆浆爆黄小龙虾 #杭州美食打卡',
						biaoqianlist: [],
						liuyan: '吃货的嘴骗人的鬼',
						touxiang: '../../../static/img/touxiang1.png',
						id:'sddf'
					}],
				}
				},
				created(){
					for(var i;i<this.biaoqianstr.length;i++){
					if(this.biaoqianstr[i]=="#")
						num++;
					this.biaoqianlist[num].push(this.biaoqianstr[i]);
					}
					
				}
	}
</script>

<style>
	.biaoqiancontent{
		margin-top: 50px;
		margin-left:5%;
		
	}
	.video-warp{
		margin-top: 20px;
		color:#C2C2C2		
	}
	
</style>
