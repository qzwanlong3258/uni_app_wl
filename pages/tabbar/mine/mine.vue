<template>
	<view class="mine-box">
		<ljl-nav middle="nickName" :userInfo="userInfo" @checkIn="checkIn" />
		<view class="menu">
			<view class="item"><ljl-member-menu /></view>
			<view class="item"><ljl-order-menu :list="orderStateList" @change="linkToOrderList" /></view>
		</view>
		<view class="main-menu">
			<view class="item" v-for="(item, index) in mainMenu" :key="index" @click="linkToMainMenu(item.href)"><ljl-main-menu :infor="item" /></view>
		</view>
	</view>
</template>

<script>
'use scrict';

import LjlNav from '@/components/LjlNav.vue';
import LjlMemberMenu from './components/LjlMemberMenu';
import LjlOrderMenu from '@/components/LjlOrderMenu';
import LjlMainMenu from './components/LjlMainMenu.vue';
import { setStorage, getStorage } from '@/utils/storage.js';
import * as meImg from '@/config/image.js';
import { RECOMMENDED, SHOP, DISTRIBUTION, ADDRESS_INDEX, ORDER_LIST } from '@/config/router.js';
import { toRoute } from '@/utils/util.js';
import { getCheckIn, checkIn } from '@/api/tabbar/mine.js';

export default {
	data: function() {
		return {
			userInfo: {},
			mainMenu: [
				{ title: '推荐中心', url: meImg.ME_4, href: RECOMMENDED },
				{ title: '积分商城', url: meImg.ME_5, href: SHOP },
				{ title: '分销中心', url: meImg.ME_6, href: DISTRIBUTION },
				{ title: '账户与安全', url: meImg.ME_7 },
				{ title: '地址管理', url: meImg.ME_8, href: `${ADDRESS_INDEX}?operating=updateAddress` }
			],
			orderStateList: [{state: 1},{state: 2},{state: 3},{state: 4},{state: 5}]
		};
	},
	onLoad: async function() {
		this.userInfo = getStorage('userInfo');
		this.$set(this.userInfo, "checkIn", (await getCheckIn()));
	},
	methods: {
		
		/**
		 * 签到
		 */
		checkIn() {
			this.userInfo.checkIn = true;
			setStorage('userInfo', this.userInfo);
		},
		
		/**
		 * 链接到菜单中心
		 */
		linkToMainMenu(route) {
			uni.navigateTo({
				url: route,
				fail: () => {
					uni.switchTab({ url: route });
				}
			});
		},

		/**
		 * 链接到订单列表
		 */
		linkToOrderList(state) {
			uni.navigateTo({ url: `${ORDER_LIST}?state=${state}` });
		}
	},
	components: {
		LjlNav,
		LjlMemberMenu,
		LjlOrderMenu,
		LjlMainMenu
	}
};
</script>

<style lang="scss" scoped>
.mine-box {
	width: 100%;
	.menu {
		width: 700rpx;
		height: 300rpx;
		margin: 0 auto;
		transform: translateY(-90rpx);
		.item + .item {
			margin-top: 20rpx;
		}
	}
	.main-menu {
		width: 100%;
		background: white;
	}
}
</style>
