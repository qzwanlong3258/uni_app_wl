<template>
	<view class="swapRole">
		<view class="swapRole-hd"> <icon class="iconfont iconjiaoseqiehuan iconclass"></icon></view>
		<view class="swapRole-bd"> 轻触以切换角色</view>
		<view style="height: 50rpx;border-bottom:2rpx solid #bfbfbf ;margin: 0 250rpx 100rpx;"></view>
		<view class="box" style="margin-bottom: 20rpx;" @click="swapRole(0)">
			<view class="box-left">
				
				<icon class=" iconfont iconperson" style="font-size: 80rpx;margin-top: 30rpx;color: #F39813;"></icon>
			</view>
			<view class="box-right">
				<view style="height: 50%;line-height: 70rpx;font-size: 12px;font-weight: 700;">用户</view>
				<view style="height: 50%;" v-if='index == 0'>
					<view class="box-right-static">当前角色</view>
				</view>
			</view>
		</view>
		<view class="box" style="margin-bottom: 20rpx;" @click="swapRole(1)">
			<view class="box-left">
				
				<icon class=" iconfont iconperson" style="font-size: 80rpx;margin-top: 30rpx;color: #F4EA2A;"></icon>
			</view>
			<view class="box-right">
				<view style="height: 50%;line-height: 70rpx;font-size: 12px;font-weight: 700;">面签员</view>
				<view style="height: 50%;" v-if='index == 1'>
					<view class="box-right-static">当前角色</view>
				</view>
			</view>
		</view>
		<view class="box" @click="swapRole(2)">
			<view class="box-left ">
				<icon class="iconfont iconsheyingshi" style="font-size: 80rpx;color: #41C2C2;margin-top: 30rpx;"></icon>
			</view>
			<view class="box-right">
				<view style="height: 50%; line-height: 70rpx;font-size: 12px;font-weight: 700;">拍照员</view>
				<view style="height: 50%;" v-if='index == 2'>
					<view class="box-right-static" >当前角色</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
'use strict';
import { getStorage, setStorage } from '@/utils/storage.js';
var _self;
export default {
	data() {
		return{
			index:0
		}
	},
	methods:{
		swapRole(e){
			_self.index=e
			setStorage('index', e)
		}
	},
	async onLoad() {
		_self = this
		_self.index=getStorage('index')
	}
};
</script>

<style scoped>
	.swapRole{
		font-size: 32rpx;
		color: #666666;
		background: rgba(232,232,231,0.1);
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
		border-radius: 15rpx;
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
		background:rgba(7,193,96,0.1);
		color:#06E570;
		border-radius: 5rpx;
		text-align: center;
		font-size: 22rpx;
		line-height: 40rpx;
		
	}
	
</style>
