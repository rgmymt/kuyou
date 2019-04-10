<template>
	<div class="near-component">
		<div class="dingwei" style="margin-bottom: 10px;">
			<i class="iconfont iconweizhi1" slot="icon" style="font-size: 15px;color: #999999;"></i>
			<span style="margin-left: 10px;font-size: 15px;">{{location}}</span>
		</div>
		<span>热门</span>
		<div class="near-content" v-for="(biaoqian,id) in list" :key=id>
			<img src="../../assets/img/井号.png" style="width: 30px;">
			<router-link to="/biaoqian" style="color: #FFFF00;text-decoration:none;font-size: 20px;">
			<span>{{biaoqian.title}}</span>
			</router-link>
			<flexbox class="video-warp">
			<flexbox-item :span="1/2" v-for="(video,index) in biaoqian.videolist" :key=index>
				<div class="flex-demo">
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
	</div>
</template>

<script>
	 import {  Flexbox,
    FlexboxItem, } from 'vux'
	import '../../assets/iconfont/iconfont.css'
	export default {

		components: {
			 Flexbox,
    FlexboxItem,
		},

		data() {
			return {
				location: '杭州西湖',
				list: [{
					title: '爆浆爆黄小龙虾',
					videolist: [{
						dingwei: '麻辣小龙虾',
						fenmian:'../../../static/img/mala1.png',
						biaoqianlist: [
							'#爆浆爆黄小龙虾',
							'#杭州美食打卡'
						],
						liuyan: '吃货的嘴骗人的鬼',
						touxiang: '../../../static/img/touxiang1.png',
						id:'sddf'
					},
					{
						dingwei: '麻辣小龙虾',
						fenmian:'../../../static/img/mala2.png',
						biaoqianlist: [
							'#爆浆爆黄小龙虾',
							'#杭州美食打卡'
						],
						liuyan: '吃货的嘴骗人的鬼',
						touxiang: '../../../static/img/touxiang1.png',
						id:'sddf'
					}],
				},
				{
					title: '美食',
					videolist: [{
						dingwei: '芝芝舒芙蕾',
						fenmian:'../../../static/img/meishi.png',
						biaoqianlist: [
							'#美食',
							'#杭州美食打卡'
						],
						liuyan: '吃货的嘴骗人的鬼',
						touxiang: '../../../static/img/touxiang1.png',
						id:'sddf'
					},
					{
						dingwei: '芝芝舒芙蕾',
						fenmian:'../../../static/img/meishi.png',
						biaoqianlist: [
							'#美食',
							'#杭州美食打卡'
						],
						liuyan: '吃货的嘴骗人的鬼',
						touxiang: '../../../static/img/touxiang1.png',
						id:'sddf'
					}],
				},
				]
			}
		}
	}
</script>

<style>
	.near-component {
		color: #C2C2C2;
		margin-left: 5%;
	}

	.near-content {
		margin: 20px 5px;
		white-space: nowrap;
	}
	.video-warp{
		margin-top: 20px;
	}
	img{
		vertical-align: text-bottom;
	}
</style>
