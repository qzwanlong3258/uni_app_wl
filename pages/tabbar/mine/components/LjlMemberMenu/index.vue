<template>
	<view class="menu-box">
		<view class="header"><text>开通会员》</text></view>
		<view class="content"><ljl-column class="column" v-for="(item, index) in memberMenu" :key="index" :infor="item" /></view>
	</view>
</template>

<script>
'use strict';
import LjlColumn from './components/LjlColumn.vue';
import * as meImg from '@/config/image.js';

export default {
	data() {
		return {
			memberMenu: [{ key: '余额 (元)', value: 99, url: meImg.ME_1 }, { key: '积分', value: 200, url: meImg.ME_1 }, { key: '优惠卷', value: 20, url: meImg.ME_2 }]
		};
	},
	components: {
		LjlColumn
	}
};
</script>

<style lang="scss" scoped>
.menu-box {
	.header {
		height: 60rpx;
		background: white;
		opacity: 0.45;
		position: relative;
		text {
			position: absolute;
			right: 14rpx;
			line-height: 60rpx;
			font-weight: bold;
		}
	}
	.content {
		height: 130rpx;
		background: white;
		box-sizing: border-box;
		padding: 24rpx;
		display: flex;
		.column {
			width: 33%;
		}
	}
}
</style>
