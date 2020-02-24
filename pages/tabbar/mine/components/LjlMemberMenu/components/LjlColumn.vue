<template>
	<view class="column-box">
		<image class="icon" :src="infor.url" mode="aspectFit" />
		<view class="content">
			<text class="key">{{ infor.key }}</text>
			<text class="value">{{ infor.value }}</text>
		</view>
	</view>
</template>

<script>
'use strict';
export default {
	props: {
		infor: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.column-box {
		display: flex;
		.icon {
			width: 88rpx;
			height: 88rpx;
		}
		.content {
			text {
				display: block;
			}
			.key {
				color: #666666;
				font: 20rpx/28rpx verdana;
			}
			.value {
				font: 40rpx/56rpx verdana;
			}
		}
	}
</style>
