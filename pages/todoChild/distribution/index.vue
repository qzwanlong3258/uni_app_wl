<template>
	<view class="distribution-box">
		<ljl-nav middle="member" :userInfo="userInfo" />
		<view class="showroom">
			<view class="top">
				<view class="item" v-for="(item, index) in showroom.top" :key="index"><ljl-showroom-item :infor="item" color="#333333" /></view>
				<button class="withdraw" @click="linkToWithdraw">提现</button>
			</view>
			<view class="bottom">
				<view class="item" v-for="(item, index) in showroom.bottom" :key="index"><ljl-showroom-item :infor="item" color="white" /></view>
			</view>
		</view>
		<view class="menu" v-for="(item, index) in menuList" :key="index"><ljl-menu :infor="item" /></view>
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
			userInfo: {},
			showroom: {
				top: [{ title: '今日奖励', content: 0 }, { title: '待结算金额', content: 0 }, { title: '累计金额', content: 0 }],
				bottom: [{ title: '未入账', content: 0 }, { title: '已结算金额', content: 0 }, { title: '已提现', content: 0 }]
			},
			menuList: [
				{ title: '推广业绩', list: [{ title: '会员', icon: imgs.MEMBER, href: CUSTOMER_LIST }, { title: '客户', icon: imgs.CLIENT, href: CUSTOMER_LIST }, { title: '设计师', icon: imgs.DESIGNER, href: CUSTOMER_LIST }] },
				{
					title: '推广工具',
					list: [
						{ title: '专属海报', icon: imgs.POSTER, href: POSTER },
						{ title: '推广商品', icon: imgs.GOODS, href: PROMOTE_GOODS },
						{ title: '邀请会员', icon: imgs.INVITE_MEMBER, href: `${POSTER}?title=邀请会员` },
						{ title: '邀请设计师', icon: imgs.INVITE_DESIGNER, href: `${POSTER}?title=邀请设计师` },
						{ title: '邀请客户', icon: imgs.INVITE_CLIENT, href: `${POSTER}?title=邀请客户` },
						{ title: '首页', icon: imgs.DISTRIBUTION_MENU_HEOM, href: HOME }
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

<style lang="scss">
.distribution-box {
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
		margin-top: 75rpx;
		box-sizing: border-box;
		padding: 0 24rpx;
	}
}
</style>
