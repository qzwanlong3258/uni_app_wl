<template>
	
		<view class="recomCenter">
			<view class="recomCenter-nav ">
				<view class="top">
					<view class="recomCenter-nav-top">
						<image :src="userInfo.avatarUrl" class="recomCenter-nav-top-img" mode="aspectFill">
					</view>
				</view>
				<view style="text-align: center;color: #000000;font-size: 10px;">WELCOME</view>
				<view style="text-align: center;color: #605800;font-size: 9px;">普通会员</view>
				<view class="btn-box"><view class="btn">我的奖励</view></view>
				<view style="display: flex;" class="recomCenter-pic">
					<view style="flex: 1;display: flex;justify-content: center;align-content: center;">
						<view><image :src="img[0]" mode="widthFix"></image></view>
						<view>积分: 100</view>
					</view>
					<view style="flex: 1;display: flex;justify-content: center;align-content: center;">
						<view><image :src="img[1]" mode="widthFix"></image></view>
						<view>优惠卷: 100元</view>
					</view>
				</view>
			</view>
			<view style="margin: 10px; position: relative;">
				<image :src="img[2]" mode="widthFix" style="width: 100%;"></image>
				<!-- <image :src="img[3]" mode="widthFix" style="width: 250px;position: absolute;left: 50%;transform: translateX(-50%);top:250px" @click="linktoRecommend"></image> -->
				<view style="width: 250px;position: absolute;left: 50%;transform: translateX(-50%);top:195px;height: 30px;" @click="linktoRecommend"></view>
			</view>
			
		</view>
	
</template>

<script>
'use strict';
import {RECOMMEND_POINT,RECOMMEND_COUPON, RECOMMEND_GIFT, RECOMMEND_INVITE} from '@/config/image.js';
import {RECOMMENDED} from '@/config/router.js';
export default {
	data() {
		return{
			userInfo:{
				avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				nickName:'李三',
				phone:'广东 深圳'
			},
			img:[RECOMMEND_POINT,RECOMMEND_COUPON,RECOMMEND_GIFT,RECOMMEND_INVITE]
		}
	},
	methods:{
		linktoRecommend(){
			uni.navigateTo({
				url:RECOMMENDED
			})
		}
	},
	async onLoad() {}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.recomCenter{
		padding: 10px 0;
	}
	.recomCenter-nav{
		background-color: #FCE77A;
		height: 210px;
		margin:0 10px ;
	}
	.top{
		height: 120rpx;
		padding: 10px 0 2px;
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
		height: 15px;
		margin-top: 15px;
		
	}
	.btn{
		height: 15px;
		line-height: 15px;
		text-align: center;
		width: 60px;
		border: 1px solid #605800;
		margin: 0 auto;
		font-size: 10px;
	}
	.recomCenter-pic{
		height: 30px;
		
		font-family:Microsoft YaHei;
		font-weight:400;
		color:rgba(0,0,0,1);
		font-size: 13px;
		margin: 15px 0;
	}
	.recomCenter-pic image{
		width: 20px;
		margin-right: 5px;
	}
</style>
