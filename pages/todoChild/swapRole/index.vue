<template>
	<view class="swapRole">
		<view class="swapRole-hd"> <icon class="iconfont iconjiaoseqiehuan iconclass"></icon></view>
		<view class="swapRole-bd"> 轻触以切换角色</view>
		<view style="height: 50rpx;border-bottom:2rpx solid #bfbfbf ;margin: 0 250rpx 100rpx;"></view>
		<view class="box" style="margin-bottom: 10rpx;">
			<view class="box-left">
				
				<icon class=" iconfont iconperson" style="font-size: 80rpx;margin-top: 30rpx;"></icon>
			</view>
			<view class="box-right">
				<view style="height: 50%;">用户</view>
				<view style="height: 50%;">
					<view class="box-right-static">当前使用</view>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="box-left ">
				<icon class="iconfont iconsheyingshi" style="font-size: 80rpx;color: #efb336;margin-top: 30rpx;"></icon>
			</view>
			<view class="box-right">
				<view style="height: 50%; line-height: 70rpx;">拍照员</view>
				<view style="height: 50%;">
					<view class="box-right-static" >当前使用</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
'use strict';

export default {
	data() {
		return{
			
		}
	},
	methods:{},
	async onLoad() {}
};
</script>

<style scoped>
	.swapRole{
		font-size: 32rpx;
		color: #666666;
		background: rgba(229, 229, 229, 1);
		height: 1250rpx;
	}
	.swapRole-hd{
		height: 300rpx;
		text-align: center;
	}
	.iconclass{
		font-size: 100rpx;
		color: #bfbfbf;
	}
	.swapRole-bd{
		font-size: 60rpx;
		text-align: center;
		color: #000000;
		
	}
	.box{
		margin: 0 100rpx;
		background: #FFFFFF;
		border-radius: 5rpx;
		display: flex;
		height: 140rpx;
	}
	.box-left{
		flex-basis:150rpx ;
		text-align: center;
		line-height: 70rpx;
		
	}
	.box-right{
		flex: 1;
	}
	.box-right-static{
		width: 120rpx;
		height: 40rpx;
		background:#7CFC00;
		color: #00B578;
		border-radius: 5rpx;
		text-align: center;
		font-size: 22rpx;
		line-height: 40rpx;
		
	}
	
</style>
