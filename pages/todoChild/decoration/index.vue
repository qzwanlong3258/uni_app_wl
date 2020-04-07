<template>
	<view class="decoration_view-box-box ">
		<view class="decoration_view-nav ">
			<text class="decoration_text-row decoration_text-row-title" style="color: #50450C;">可用额度</text>
			<text class=" decoration_text-row-content"> <text style="font-size: 70rpx; color:#E7CD64 ;font-weight:100 ;">—</text>200.0000.00<text style="font-size:70rpx; color:#E7CD64 ;font-weight:100 ;">—</text></text>
			<text class="decoration_text-row-submit" @click="testLinkTo">测一测额度</text>
			<!-- <image :src="bank_pic" mode="widthFix" class="bank_pic"></image>
			<image :src="bank_logo" mode="widthFix" class="bank_logo"></image> -->
		</view>
		<view class="decoration_view-row decoration_view-menu page_view-box page_view-box-inner-padding" style="margin-top: 20px;">
			<view class="decoration_view-menu-item" v-for="(item,index) in menus" :key="index" @click="linkToRoute(item.href)" v-if="!show">
				<!-- <icon class="iconfont decoration_icon-menu" :class="item.icon"></icon> -->
				<image :src='item.img' mode="widthFix" class="image_nav"></image>
				<text class="decoration_text-title">{{item.title}}</text>
			</view>
			<view class="decoration_view-menu-item" v-for="(item,index) in menus" :key="index" v-if="show">
				<!-- <icon class="iconfont decoration_icon-menu" :class="item.icon"></icon> -->
				<image :src='item.img' mode="widthFix" class="image_nav"></image>
				<text class="decoration_text-title">{{item.title}}</text>
			</view>
		</view>
		<view style="height: 3px;background: #F1F1F1;"></view>
		<!-- <view class="decoration_view-row decoration_view-platform page_view-box page_view-box-inner-padding">
			<view class="decoration_view-platformLeft">
				<text class="decoration_text-platformColumn decoration_text-platformTitle">值得信赖</text>
				<text class="decoration_text-platformColumn decoration_text-platformDesc">装修场景的消费金融信息服务平台</text>
			</view>
			<view class="decoration_view-platformRight">
				<image class="decoration_image-platformLogo" :src="icons.logo"></image>
			</view>
		</view> -->
		<!-- <view class="decoration_view-row decoration_view-plan page_view-box">
			<image class="page_image-plan" src="http://fa.aitech.xin/images/aboutUs.png" mode="widthFix" />
		</view> -->
		<view class="decoration_view-row decoration_view-plan page_view-box"  style="margin: 10px ;margin-top: 20px;">
			<image @click="linkToBank(0)" class="page_image-plan" :src="bank[0]" mode="widthFix" />
		</view>
		<view class="decoration_view-row decoration_view-plan page_view-box" style="margin: 10px  ;">
			<image @click="linkToBank(1)" class="page_image-plan" :src="bank[1]" mode="widthFix" />
		</view>
		<view class="decoration_view-row decoration_view-plan page_view-box" style="margin:  10px ;">
			<image @click="linkToBank(2)" class="page_image-plan" :src="bank[2]" mode="widthFix" />
		</view>
	</view>
</template>

<script>
	'use scrict';
	var _self;
	import { COMPANY_LOGO ,BANK_PIC, BANK_LOGO, BANK_JH, BANK_BH, BANK_BJ, BANK_APPT, BANK_RECORD, BANK_LOOKFOR} from '@/config/image.js';
	import { LOAN_APPLICATION ,LOAN_SCHEDULE, LOAN_RECORD, LOAN_TESTONETEST, BANK_DETAIL} from '@/config/router.js';
	import { getStorage, setStorage } from '@/utils/storage.js';
	
	export default {
		data() {
			return {
				icons: {
					logo: COMPANY_LOGO
				},
				menus: [
					{ icon: "iconxinshenqing-",img:BANK_APPT, title: "发起申请", href: LOAN_APPLICATION },
					
					{ icon: "icongerencanbaoxinxichaxun",img:BANK_RECORD, title: "借款记录" ,href: LOAN_RECORD},
					{ icon: "iconshengyuyiliaofeijiesuanjiluchaxun",img:BANK_LOOKFOR, title: "查询进度" ,href: LOAN_SCHEDULE},
				],
				bank_pic:BANK_PIC,
				bank_logo:BANK_LOGO,
				bank:[BANK_JH,BANK_BH,BANK_BJ],
				show:false
			}
		},
		methods: {
			linkToRoute(router) {
				uni.navigateTo({ url: router });
			},
			testLinkTo() {
				uni.navigateTo({ url: LOAN_TESTONETEST });
			},
			linkToBank(e){
				uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			}
			
		},
		 onShow() {
			 if(getStorage('canloan')){
				 _self.show = getStorage('canloan')
			 } else {
				 _self.show =false
			 }
			
		},
		async onLoad() {
			_self=this
			
		}
	}
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	.decoration_view-box-box{
		
	}
	.decoration_view-nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #FCE77A;
		padding: 20rpx;
		position: relative;
		height: 160px;
		color: #000000;
		margin: 0 10px;
	}
	.decoration_text-row {
		color: white;
		border-radius: $radius_page-box;
	}
	.decoration_text-row + .decoration_text-row {
		margin-top: 30rpx;
	}
	.decoration_text-row-title {
		font-size: 32rpx;
	}
	.decoration_text-row-content {
		font-size: 70rpx;
		font-weight: 1100;
		color: #776A6D;
	}
	.decoration_text-row-submit {
		color: #FFFFFF;
		width: 250rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: #33364C;
		border-radius: 10rpx;
		font-size: 24rpx;
		margin-top: 30rpx;
		// box-shadow: 0 4rpx 0 0  rgba(0,0,0,0.15);
	}
	.decoration_view-menu, .decoration_view-platform {
		display: flex;
	}
	.decoration_view-menu-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 33%;
	}
	.decoration_view-menu-item image{
		width: 60rpx;
	}
	.decoration_icon-menu {
		color: $color_primary;
		font-size: 2.5em;
	}
	.decoration_text-title {
		color: $color_text-secondary;
		font-size: 24rpx;
	}
	.decoration_view-platformLeft {
		width: calc(100% - 200rpx);
	}
	.decoration_view-platformRight {
		width: 200rpx;
	}
	.decoration_image-platformLogo {
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
		margin: auto;
		display: block;
	}
	.decoration_text-platformColumn {
		display: block;
		margin-left: 50rpx;
	}
	.decoration_text-platformTitle {
		font-size: 32rpx;
		font-weight: bold;
		color: $color_text-title;
	}
	.decoration_text-platformDesc {
		font-size: 28rpx;
		margin-top: 24rpx;
		color: $color_text-secondary;
	}
	.page_image-plan {
		width: 100%;
	}
	.bank_pic{
		width: 150rpx;
		display: block;
		position: absolute;
		right: 0;
		bottom: 10px;
		
	}
	.bank_logo{
		width: 150rpx;
		display: block;
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.image_nav{
		width: 60rpx;
	}
</style>
