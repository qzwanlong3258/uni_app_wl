<template>
	<view class="distribution-box">
		<!-- <ljl-nav middle="member" :userInfo="userInfo" />
		<view class="showroom">
			<view class="top">
				<view class="item" v-for="(item, index) in showroom.top" :key="index"><ljl-showroom-item :infor="item" color="#333333" /></view>
				<button class="withdraw" @click="linkToWithdraw">提现</button>
			</view>
			<view class="bottom">
				<view class="item" v-for="(item, index) in showroom.bottom" :key="index"><ljl-showroom-item :infor="item" color="white" /></view>
			</view>
		</view> -->
	    <view class="distribution">
	    	<view class="distribution-nav ">
	    		<view class="top">
	    			<view class="distribution-nav-top">
	    				<image :src="img" class="distribution-nav-top-img" mode="aspectFill">
	    			</view>
	    		</view>
	    		<view style="text-align: center;color: #000000;font-size: 10px;margin: 2px 0;">WELCOME</view>
	    		<view style="text-align: center;color: #605800;font-size: 9px;margin: 2px 0;">普通会员</view>
				<view style="text-align: center;color: #605800;font-size: 9px;margin: 2px 0;">加入时间：2020-01-22   13:00</view>
				<view class="box" style="margin-top: 15px;">
					<view class="box-left">未入账</view>
					<view class="box-mid">已结算金额</view>
					<view class="box-right">已提现</view>
				</view>
				<view class="box">
					<view class="box-left">100</view>
					<view class="box-mid">100</view>
					<view class="box-right">100</view>
				</view>
			</view>
		</view>
		<view class="menu" v-for="(item, index) in menuList" :key="index"><ljl-menu :infor="item" /></view>
		<view style="height: 10px;transform: translateY(-10px);z-index: 1;background: #FFFFFF;"></view>
	</view>
</template>

<script>
'use scrict';

import LjlNav from '@/components/LjlNav.vue';
import LjlShowroomItem from './components/LjlShowroomItem.vue';
import LjlMenu from '@/components/LjlMenu';
import { getStorage } from '@/utils/storage.js';
import * as imgs from '@/config/image.js';
import { HOME, CUSTOMER_LIST, PROMOTE_GOODS, WITHDRAW, POSTER } from '@/config/router.js';

export default {
	data() {
		return {
			img:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
			showroom: {
				top: [{ title: '今日奖励', content: 0 }, { title: '待结算金额', content: 0 }, { title: '累计金额', content: 0 }],
				bottom: [{ title: '未入账', content: 0 }, { title: '已结算金额', content: 0 }, { title: '已提现', content: 0 }]
			},
			menuList: [
				{ title: '推广业绩',img:imgs.DIR_TITLE_ONE, list: [{ title: '会员', icon: imgs.DIR_VIP, href: CUSTOMER_LIST }, { title: '设计师', icon: imgs.DESIGNER, href: CUSTOMER_LIST },{ title: '客户', icon: imgs.DIR_KEHU, href: CUSTOMER_LIST } ] },
				{
					title: '推广工具',img:imgs.DIR_TITLE_TWO,
					list: [
						{ title: '专属海报', icon: imgs.DIR_NAV_ONE, href: POSTER },
						{ title: '推广商品', icon: imgs.DIR_NAV_TWO, href: PROMOTE_GOODS },
						{ title: '邀请会员', icon: imgs.DIR_NAV_THREE, href: `${POSTER}?title=邀请会员` },
						{ title: '邀请设计师', icon: imgs.DIR_NAV_FOUR, href: `${POSTER}?title=邀请设计师` },
						{ title: '邀请客户', icon: imgs.DIR_NAV_FIVE, href: `${POSTER}?title=邀请客户` },
						{ title: '首页', icon: imgs.DIR_NAV_SIX, href: HOME }
					]
				}
			]
			
		};
	},
	onLoad() {
		this.userInfo = {
			...getStorage('userInfo'),
			level: '普通会员',
			joinTime: '2019-02-25 16:00'
		};
	},
	methods: {
		
		linkToWithdraw() {
			uni.navigateTo({
				url: WITHDRAW
			});
		}
	},
	components: {
		LjlNav,
		LjlShowroomItem,
		LjlMenu
	}
};
</script>

<style lang="scss" scoped>
.distribution-box {
	background: #FFFFFF;
	height: 500px;
	.showroom {
		width: 700rpx;
		height: 200rpx;
		margin: 0 auto;
		transform: translateY(-90rpx);
		border-radius: 15rpx;
		> view {
			width: 100%;
			height: 150rpx;
			display: flex;
		}
		.top {
			background: white;
			border-top-left-radius: 15rpx;
			border-top-right-radius: 15rpx;
			.withdraw {
				color: white;
				background: #6bb36a;
				width: 130rpx;
				height: 50rpx;
				font-size: 28rpx;
				line-height: 50rpx;
				border-radius: 25rpx;
				margin: auto 0;
			}
		}
		.bottom {
			background: #283448;
			border-bottom-left-radius: 15rpx;
			border-bottom-right-radius: 15rpx;
		}
		.item {
			width: 180rpx;
			height: 100%;
		}
	}
	.menu {
		
		box-sizing: border-box;
		
	}
	.distribution{
		
		padding: 10px 0;
	}
	.distribution-nav{
		background-color: #FCE77A;
		height: 165px;
		margin:0 10px;
	}
	.top{
		height: 120rpx;
		padding: 10px 0 2px;
	}
	.distribution-nav-top{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	.distribution-nav-top-img{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.box{
		height: 10px;
		line-height: 10px;
		display: flex;
		font-size: 13px;
		margin:  5px 30px;
	}
	.box-left{
		flex:1;
		text-align: center;
	}
	.box-mid{
		flex:1;
		text-align: center;
	}
	.box-right{
		flex: 1;
		text-align: center;
	}
}
</style>
