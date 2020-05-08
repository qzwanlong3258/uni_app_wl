<template>
	<view :hidden='!imgShow'>
		<view >
			<image style="width: 100%;" mode="widthFix" :src="img" @load='imgshow'></image>
			<!-- <image style="width: 100%;" mode="widthFix" :src="img[1]" v-if="num == 1"></image>
			<image style="width: 100%;" mode="widthFix" :src="img[2]" v-if="num == 2"></image> -->
		</view>
		<!-- <view v-if='!show' style="width: 100%;height: 100%;">
		        <web-view  src="www.baidu.com"></web-view>
		</view> -->
	</view>
	
</template>

<script>
'use strict';
var _self;
// import {  BANK_JH_DETAIL, BANK_BH_DETAIL, BANK_BJ_DETAIL} from '@/config/image.js';
export default {
	data() {
		return{
			img:'',
			imgShow:false
		}
	},
	methods:{
		imgshow(){
			_self.imgShow=true
		},
	},
	async onLoad(options) {
		_self=this
				_self.img=options.id
		
	}
};
</script>

<style>
	page{
		background: #FFFFFF;
	}
</style>
