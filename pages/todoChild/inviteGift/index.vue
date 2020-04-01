<template>
	<view class="inviteGift">
		<image :src="img[0]" mode="widthFix" class="inviteGift-hd"></image>
		<image :src="img[1]" mode="widthFix" class="inviteGift-hd-friend"></image>
		<view class="text"><text style="color: #252525;font-size:12px ;margin-left: 10px;">邀请活动</text> <text style="color:#828282;font-size:10px ;margin-left: 10px;">邀请好友，获得积分</text></view>
		<view style="height: 130px;" class="pic">
			<image :src="img[2]" mode="widthFix"></image>
			<image :src="img[3]" mode="widthFix"></image>
			<image :src="img[4]" mode="widthFix"></image>
		</view>
		<view class="apptMeasureHome_ft">
			<!-- <view class="btn" @click="toLinkChoose">立即分享</view> -->
			<button class="btn" open-type="share">立即分享</button>
		</view>
	</view>
</template>

<script>
'use strict';
import {INVITE_GIFT,INVITE_FRIEND,INVITE_POINT_ONE,INVITE_POINT_TWO,INVITE_POINT_THREE} from '@/config/image.js'
export default {
	data() {
		return{
			img:[INVITE_GIFT,INVITE_FRIEND,INVITE_POINT_ONE,INVITE_POINT_TWO,INVITE_POINT_THREE]
		}
	},
	onShareAppMessage(res) {
	      return {
	        title: '邀请有礼',
	        path: '/pages/todoChild/inviteGift/index'
	      }
	    },
	methods:{},
	async onLoad() {}
};
</script>
<style>
	page {
	background-color: #FFFFFF;
	}
</style>
<style scoped>
	.inviteGift{
		position: relative;
		background: #FFFFFF;
		height: 510px;
	}
	.inviteGift-hd{
		width: 100%;
		display: block;
	}
	.inviteGift-hd-friend{
		width: 150px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 160px;
	}
	.text{
		height: 35px;
		line-height: 35px;
		border-bottom: 1px solid #F1F1F1;
	}
	.pic{
		margin: 10px 20px;
		display: flex;
	}
	.pic image{
		width: 115px;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 30px;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 20px;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 2px 5px rgba(0,0,0,0.3);
		font-size: 14px;
		letter-spacing: 2px;
	}
</style>
