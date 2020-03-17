<template>
	<view class="inShop">
		<image class="inShop-hd" :src="imglogo"></image>
		<view style="color: #333333;font-size: 14px;text-align: center;margin-bottom: 20px;">欢迎入驻非客有家</view>
		<view class="application_hd">
			<view class="application_hd_item" style="border-top:1px solid rgba(229, 229, 229, 1) ;">
				<view class="appli_hd_item_lable">*公司名称：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的公司名称" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*营业执照编号：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的营业执照编号" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*法人姓名：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的法人姓名" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*注册时间：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的注册时间" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*注册资金：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的注册资金" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*公司地址：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的公司地址" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*联系人电话：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的联系人电话" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*公司地址：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的公司地址" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*邀请人编码：</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="请输入你的邀请人编码" placeholder-class="input_color" /></view>
			</view>
			<view class="btn">
				<view class="scheduleBtn" @click="submitBtn">提交</view>
				<view class="freeMeasureHomeBtn" @click="apptMeasureHomeBtn">邀请商户</view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import { COMPANY_LOGO} from '@/config/image.js';
import { UPLOAD, INVITE} from '@/config/router.js';
export default {
	data() {
		return{
			imglogo:COMPANY_LOGO
		}
	},
	methods:{
		submitBtn(){
			
			uni.navigateTo({
				url:UPLOAD
			})
			
		},
		apptMeasureHomeBtn(){
			uni.navigateTo({
				url:INVITE
			})
		}
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
	.application_hd {
		height: 485rpx;
		padding: 0 16rpx 0 16rpx;
		background: rgba(255, 255, 255, 1);
	}
	.application_hd_item {
		height: 82rpx;
		display: flex;
		line-height: 82rpx;
		border-bottom: 2rpx solid rgba(229, 229, 229, 1);
	}
	.appli_hd_item_lable {
		flex-basis: 250rpx;
		font-size: 12px;
		color: #333333;
	}
	.appli_hd_item_content {
		flex: 1;
		display: flex;
		align-items: center;
		font-size: 12px;
		color: #333333;
	}
	.input_color{
		color: #999999;
		font-size: 12px;
	}
	
	.btn{
		height: 100rpx;
		
		background: #ffffff;
		display: flex;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 40px;
		
	}
	.scheduleBtn{
		flex: 48%;
		margin: 10rpx;
		background:#FFEA04;
		color: #000000;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 30px;
		box-shadow: 0 2px  rgba(0,0,0,0.1);
		font-size: 13px;
	}
	.freeMeasureHomeBtn{
		flex: 48%;
		margin: 10rpx;
		background: #EBCD9B;
		color: #000000;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 30px;
		box-shadow: 0 2px  rgba(0,0,0,0.1);
		font-size: 13px;
	}
</style>
