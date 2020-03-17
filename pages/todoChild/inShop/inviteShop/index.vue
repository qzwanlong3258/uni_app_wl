<template>
	<view>
		<view class="scheduleCard" >
			<view class="scheduleCard-top" style="height:150rpx;">
				<view class="scheduleCard-top-left">
					<image :src="userInfo.avatarUrl" class="scheduleCard-top-left-img" mode="aspectFill">
				</view>
				<view class="scheduleCard-top-mid">
					<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx;color: #333333;">{{userInfo.nickName}}</view>
					<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;color:#333333">{{userInfo.phone}}</view>
				</view>
				<view class="scheduleCard-top-right">
					
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 300px;border: 1px solid #979797;">
				<image src="https://s1.ax1x.com/2020/03/17/8UVCkR.jpg" mode=""></image>
			</view>
			<view style="color: #999999;text-align: center;font-size: 28rpx;margin: 10px 0;">扫码注册成为商户，非客为您提供更优质服务</view>
			<view style="color: #999999;text-align: center;font-size: 28rpx;margin: 10px 0;">邀请人编号 <text style="color: #333333;">1956</text></view>
		</view>
	</view>
</template>

<script>
'use strict';
export default {
	data() {
		return{
			userInfo:{
				avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				nickName:'李三',
				phone:'广东 深圳'
			},
		}
	},
	methods:{},
	async onLoad() {}
};
</script>

<style scoped>
	.scheduleCard{
		margin: 48rpx 15rpx;
		height: 430px;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		overflow: hidden;
		padding: 20rpx;
	}
	.scheduleCard-top{
		padding-bottom: 10rpx;
		display: flex;
	}
	.scheduleCard-top-left{
		flex-basis: 120rpx;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.scheduleCard-top-left image{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.scheduleCard-top-mid{
		flex: 1;
		margin-left: 10px;
		
	}
	.scheduleCard-top-right{
		flex-basis: 180rpx;
	}
	.scheduleCard-bottom image{
		width: 100%;
		height: 100%;
	}
</style>
