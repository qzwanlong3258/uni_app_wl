<template>
	<view class="decoration_view-box page_view-all-inner-padding">
		<view class="decoration_view-nav page_view-box">
			<text class="decoration_text-row decoration_text-row-title">可用额度</text>
			<text class="decoration_text-row decoration_text-row-content">——200.0000.00——</text>
			<text class="decoration_text-row-submit" @click="testLinkTo">测一测额度</text>
		</view>
		<view class="decoration_view-row decoration_view-menu page_view-box page_view-box-inner-padding">
			<view class="decoration_view-menu-item" v-for="(item,index) in menus" :key="index" @click="linkToRoute(item.href)">
				<icon class="iconfont decoration_icon-menu" :class="item.icon"></icon>
				<text class="decoration_text-title">{{item.title}}</text>
			</view>
		</view>
		<view class="decoration_view-row decoration_view-platform page_view-box page_view-box-inner-padding">
			<view class="decoration_view-platformLeft">
				<text class="decoration_text-platformColumn decoration_text-platformTitle">值得信赖</text>
				<text class="decoration_text-platformColumn decoration_text-platformDesc">装修场景的消费金融信息服务平台</text>
			</view>
			<view class="decoration_view-platformRight">
				<image class="decoration_image-platformLogo" :src="icons.logo"></image>
			</view>
		</view>
		<view class="decoration_view-row decoration_view-plan page_view-box">
			<image class="page_image-plan" src="http://fa.aitech.xin/images/aboutUs.png" mode="widthFix" />
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { COMPANY_LOGO } from '@/config/image.js';
	import { LOAN_APPLICATION ,LOAN_SCHEDULE, LOAN_RECORD, LOAN_TESTONETEST} from '@/config/router.js';
	
	export default {
		data() {
			return {
				icons: {
					logo: COMPANY_LOGO
				},
				menus: [
					{ icon: "iconxinshenqing-", title: "发起申请", href: LOAN_APPLICATION },
					
					{ icon: "icongerencanbaoxinxichaxun", title: "借款记录" ,href: LOAN_RECORD},
					{ icon: "iconshengyuyiliaofeijiesuanjiluchaxun", title: "查询进度" ,href: LOAN_SCHEDULE},
				]
			}
		},
		methods: {
			linkToRoute(router) {
				uni.navigateTo({ url: router });
			},
			testLinkTo() {
				uni.navigateTo({ url: LOAN_TESTONETEST });
			},
			
		}
	}
</script>

<style lang="scss">
	.decoration_view-nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $color_primary;
		padding: 20rpx;
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
		font-size: 42rpx;
		font-weight: bold;
	}
	.decoration_text-row-submit {
		color: #000000;
		width: 250rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: #F9D133;
		border-radius: 10rpx;
		font-size: 24rpx;
		margin-top: 30rpx;
		box-shadow: 0 4rpx 0 0  rgba(0,0,0,0.15);
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
</style>
