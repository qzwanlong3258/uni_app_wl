<template>
	<view class="inShop">
		<image class="inShop-hd" :src="imglogo"></image>
		<view style="color: #333333;font-size: 14px;text-align: center;margin-bottom: 20px;border-bottom: 1px solid #F1F1F1;">欢迎入驻非客有家</view>
		<view class="title">
			<image :src="imgupload" ></image>
			<text style="color: #333333;font-size: 13px;">上传资料</text>
		</view>
		<view class="sectionFive-ft">
			<view v-for="(item,index) in ageData" :key="index" class="box">
				<view class="iconfont iconjia iconclass" ></view>
				<view style="text-align: center;color: #333333;margin-top: 15px;font-size: 12px;">{{item.name}}</view>
			</view>
			</view>
			<view class="apptMeasureHome_ft">
				<view class="btn" @click="toLinkChoose">提交审核</view>
			</view>
	</view>
</template>

<script>
'use strict';
import { COMPANY_LOGO, UPLOAD} from '@/config/image.js';
export default {
	data() {
		return{
			imglogo:COMPANY_LOGO,
			imgupload:UPLOAD,
			ageData:[
				{  name: "营业执照" },
				{  name: "公司Logo" },
				{  name: "门店照片" },
				{  name: "装修案例" },
			]
		}
	},
	methods:{
		
	},
	async onLoad() {}
};
</script>

<style scoped>
	.inShop{
		height: 500px;
		background: #FFFFFF;
		padding-top: 20px;
	}
	.inShop-hd{
		display: block;
		border-radius: 50%;
		border: 1px solid #DCDCDC;
		width: 45px;
		height: 45px;
		margin: 0 auto 5px;
	}
	.title{
		height: 30px;
		width: 100%;
		line-height: 30px;
		display: flex;
		align-content: center;
		position: relative;
	}
	.title image{
		width: 20px;
		height: 20px;
		margin-top: 5px;
		margin-left: 10px;
	}
	.sectionFive-ft{
		margin: 63rpx 100rpx;
		height: 400rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionFive-ft .box {
		flex: 39%;
		background: #F1F1F1;
		height: 120rpx;
		margin: 30rpx;
		line-height: 120rpx;
		padding: 30rpx 0;
		position: relative;
		border: 1px solid #D2D2D2;
	}
	.iconclass{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top:0;
		color: #999999;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 80px;
		
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
		box-shadow: 0 2px rgba(0,0,0,0.1);
		font-size: 14px;
		letter-spacing: 2px;
	}
</style>
