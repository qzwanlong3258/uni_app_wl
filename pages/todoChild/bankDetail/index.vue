<template>
	<view>
		<image style="width: 100%;" mode="widthFix" :src="img[0]" v-if="num == 0"></image>
		<image style="width: 100%;" mode="widthFix" :src="img[1]" v-if="num == 1"></image>
		<image style="width: 100%;" mode="widthFix" :src="img[2]" v-if="num == 2"></image>
	</view>
</template>

<script>
'use strict';
var _self;
import {  BANK_JH_DETAIL, BANK_BH_DETAIL, BANK_BJ_DETAIL} from '@/config/image.js';
export default {
	data() {
		return{
			img:[BANK_JH_DETAIL,BANK_BH_DETAIL,BANK_BJ_DETAIL],
			num:1
		}
	},
	methods:{},
	async onLoad(options) {
		_self=this
		_self.num = options.id
	}
};
</script>

<style>
	page{
		background: #FFFFFF;
	}
</style>
