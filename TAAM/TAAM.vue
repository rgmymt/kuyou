<!--评论和@-->
<!--涂永 2019/4/5-->
<template>
	<div id="back">
		<br>
		<x-header :left-options="{backText: ''}">评论和@</x-header>
		<br>
		<div id="main">
			<group>
				<cell style="color:white">
					<img class="avatar" slot="icon" v-bind:src="avatar_1">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p  slot="inline-desc" style="color:white;font-size:12px;" v-html="talk"></p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<img class="things" v-bind:src="thing_1">
					</div>
				</cell>
				<cell style="color:white">
					<img class="avatar" slot="icon" v-bind:src="avatar_1">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p  slot="inline-desc" style="color:white;font-size:12px;" v-html="talk"></p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<img class="things" v-bind:src="thing_1">
					</div>
				</cell>
				<cell style="color:white">
					<img class="avatar" slot="icon" v-bind:src="avatar_1">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p  slot="inline-desc" style="color:white;font-size:12px;" v-html="talk"></p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<img class="things" v-bind:src="thing_1">
					</div>
				</cell>
				<cell style="color:white">
					<img class="avatar" slot="icon" v-bind:src="avatar_1">
					<p class="p1" slot="inline-desc" style="color:white;font-size:12px;" v-html="username"></p>
					<p  slot="inline-desc" style="color:white;font-size:12px;" v-html="talk"></p>
					<p slot="inline-desc" style="font-size:10px;" v-html="time"></p>
					<div>
						<img class="things" v-bind:src="thing_1">
					</div>
				</cell>
			</group>
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { Cell } from 'vux'
import avatar_1 from '../../assets/tyimg/avatar1.jpg'
import thing_1 from '../../assets/tyimg/thing_1.jpg'

export default {
	data() {
		return {
			avatar_1 : avatar_1,
			username: "@" + "KUYOU",
			talk: "nice",
			time: "回复了你的评论\xa0\xa0\xa0"+"03-30",
			thing_1: thing_1
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

.avatar {
	margin-right:5px;
	overflow: hidden;
	width: 40px;height: 40px;
	border-radius: 50%;
}

.things {
	margin-right:5px;
	overflow: hidden;
	width: 80px;height: 80px;
}
</style>
