<template>
	
		<view class="recomCenter">
			<view class="recomCenter-nav ">
				<view class="top">
					<view class="recomCenter-nav-top">
						<image :src="userInfo.avatarUrl" class="recomCenter-nav-top-img" mode="aspectFill">
					</view>
				</view>
				<view style="text-align: center;color: #000000;font-size: 20rpx;">WELCOME</view>
				<view style="text-align: center;color: #605800;font-size: 18rpx;">{{userInfo.level}}</view>
				<view class="btn-box"><view class="btn">我的奖励</view></view>
				<view style="display: flex;" class="recomCenter-pic">
					<view style="flex: 1;display: flex;justify-content: center;align-content: center;">
						<view><image :src="img[0]" mode="widthFix"></image></view>
						<view>积分: {{integral?integral:0}}</view>
					</view>
					<view style="flex: 1;display: flex;justify-content: center;align-content: center;">
						<view><image :src="img[1]" mode="widthFix"></image></view>
						<view>优惠券: 0元</view>
					</view>
				</view>
			</view>
			<view style="margin: 20rpx; position: relative;">
				<image :src="img[2]" mode="widthFix" style="width: 100%;"></image>
				<!-- <image :src="img[3]" mode="widthFix" style="width: 250px;position: absolute;left: 50%;transform: translateX(-50%);top:250px" @click="linktoRecommend"></image> -->
				<view style="width: 500rpx;position: absolute;left: 50%;transform: translateX(-50%);top:390rpx;height: 60rpx;" @click="linktoRecommend"></view>
			</view>
			
		</view>
	
</template>

<script>
'use strict';
import {RECOMMEND_POINT,RECOMMEND_COUPON, RECOMMEND_GIFT, RECOMMEND_INVITE} from '@/config/image.js';
import {RECOMMENDED} from '@/config/router.js';
import { getStorage } from '@/utils/storage.js';
import { loadIntegral } from '@/api/tabbar/todo.js';
export default {
	data() {
		return{
			userInfo:{
				// avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				// nickName:'李三',
				// phone:'广东 深圳'
			},
			img:[RECOMMEND_POINT,RECOMMEND_COUPON,RECOMMEND_GIFT,RECOMMEND_INVITE],
			integral:0
		}
	},
	onShow() {
		this.loadIntegral();
	},
	methods:{
		linktoRecommend(){
			uni.navigateTo({
				url:RECOMMENDED
			})
		},
		/**
		 * 加载积分
		 */
		loadIntegral: function() {
			loadIntegral().then(res => {
				// console.log(res)
				this.integral = Number(res.integral);
			});
		},
	},
	async onLoad() {
		this.userInfo = getStorage('userInfo');
		this.loadIntegral();
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.recomCenter{
		padding: 20rpx 0;
	}
	.recomCenter-nav{
		background-color: #FCE77A;
		height: 420rpx;
		margin:0 20rpx ;
	}
	.top{
		height: 120rpx;
		padding: 20rpx 0 4rpx;
	}
	.recomCenter-nav-top{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	.recomCenter-nav-top-img{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.btn-box{
		height: 30rpx;
		margin-top: 30rpx;
		
	}
	.btn{
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		width: 120rpx;
		border: 2rpx solid #605800;
		margin: 0 auto;
		font-size: 20rpx;
	}
	.recomCenter-pic{
		height: 60rpx;
		
		font-family:Microsoft YaHei;
		font-weight:400;
		color:rgba(0,0,0,1);
		font-size: 26rpx;
		margin: 30rpx 0;
	}
	.recomCenter-pic image{
		width: 40rpx;
		margin-right: 10rpx;
	}
</style>
