<template>
	<view class="queryProgress">
		<view class="queryProgressCard">
			<image class="box-left" src="https://s2.ax1x.com/2020/03/08/3xapSe.jpg"></image>
			<view class="box-right">
				<view class="box-right-top" style="height: 50%;">
					<view class="box-right-top-left">城市人家装饰</view>
					<view class="box-right-top-right">已预约</view>
				</view>
				<view class="box-right-bottom" style="height: 50%;">
					预约时间：2020年3月15日
				</view>
			</view>
		</view>
	</view>
</template>

<script>
'use strict';
export default {
	data() {
		return {};
	},
	methods: {},
	async onLoad() {}
};
</script>

<style>
.queryProgress {
	font-size: 32rpx;
	background: rgba(242, 246, 249, 1);
}
.queryProgressCard {
	margin: 48rpx 15rpx;
	height: 180rpx;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 5rpx 10rpx 4rpx rgb(0, 0, 0, 0.1);
	overflow: hidden;
	padding: 20rpx;
	display: flex;
}
.box-left {
	flex: 0.8;
	width: 100%;
	height: 100%;
}
.box-right {
	flex: 2;
	padding-left: 30rpx;
}
.box-right-top {
	display: flex;
}
.box-right-top-left {
	flex: 3;
	line-height: 90rpx;
}
.box-right-top-right {
	flex: 1;
	background: #e8be2e;
	color: #ffffff;
	
	font-size: 28rpx;
	text-align: center;
	height: 54rpx;
	line-height: 54rpx;
	margin-top: 30rpx;
}
.box-right-bottom{
	line-height: 90rpx;
	
}
</style>
