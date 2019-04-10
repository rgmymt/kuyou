<!--粉丝-->
<!--涂永 2019/4/5-->
<template>
	<div id="back">
		<br>
		<x-header :left-options="{backText: ''}">粉丝</x-header>
		<br>
		<div id="main">
			<group>
				<cell style="color:white">
					<img slot="icon" width="40" style="margin-right:5px;" v-bind:src="music">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;">关注了你</p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<button class="cell_btn">关注</button>
					</div>
				</cell>
				<cell style="color:white">
					<img slot="icon" width="40" style="margin-right:5px;" v-bind:src="music">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;">关注了你</p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<button class="cell_btn">关注</button>
					</div>
				</cell>
				<cell style="color:white">
					<img slot="icon" width="40" style="margin-right:5px;" v-bind:src="music">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;">关注了你</p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<button class="cell_btn">关注</button>
					</div>
				</cell>
			</group>
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { Cell } from 'vux'
import music from '../../assets/tyimg/music.png'

export default {
	data() {
		return {
			music : music,
			username: "@" + "KUYOU",
			time: "2018-12-06"
		}
	},
	components: {
		XHeader,
		Cell
	},
	mounted() {
			let head = document.getElementsByClassName('vux-header')[0]
			head.style.backgroundColor = '#333333'
			head.style.borderBottom="rgb(65,65,65) 1px solid"
			let cellset = document.getElementsByClassName('vux-cell-bd vux-cell-primary')[0]
			cellset.style.marginLeft = "10px"
	}
 }
</script>

<style>

.p1 {
	margin-bottom: 0px;
	margin-top: 0px;
}

.cell_btn {
	background-color: rgb(254,44,85);
	border: none;
	border-radius: 4px;
	height: 30px;
	width: 80px;
	color: white;
}
</style>
