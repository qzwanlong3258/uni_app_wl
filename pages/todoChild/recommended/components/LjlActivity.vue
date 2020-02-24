<template>
	<view class="activity-box">
		<view class="left">{{infor.name}}</view>
		<view class="right">还差{{Number(infor.count) - Number(infor.applyCount)}}人,可获得{{infor.money}}积分</view>
	</view>
</template>

<script>
	'use scrict';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	}
</script>

<style lang="scss">
	$leftWidth: 250rpx;
	$leftHeight: 170rpx;
	
	.activity-box {
		display: flex;
		width: 100%;
		height: $leftHeight;
		box-sizing: border-box;
		padding: 24rpx 30rpx;
		.left {
			width: $leftWidth;
			line-height: $leftHeight - 60rpx;
			color: #FAD64C;
			font-size: 34rpx;
			background: #D8D8D8;
			text-align: center;
		}
		.right {
			box-sizing: border-box;
			padding: 0 24rpx;
			width: calc(100% - #{$leftWidth});
			line-height: $leftHeight - 60rpx;
			font-size: 34rpx;
			font-weight: 500;
			color: #333333;
			overflow: hidden;
			text-overflow: elipsis;
			white-space: nowarp;
		}
	}
</style>
