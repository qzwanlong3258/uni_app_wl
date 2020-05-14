<template>
	<scroll-view v-if="isLoading" scroll-y @scrolltolower="scrolltolower" class="container">
		<view v-if="addressList.length" class="form-list">
			<view v-for="(item, index) in addressList" :key="index" :data-index="index" :data-id="item.id" class="list-column">
				<view @click.stop="exitAddress" :data-id="item.id" class="column-top">
					<view class="column-name">{{ item.name }}</view>
					<view class="column-phone">{{ item.phone }}</view>
				</view>
				<view class="column-bottom">
					<view @click.stop="exitAddress" :data-index="index" :data-id="item.id" v-if="item.isDefault" class="tip-font default-logo">默认</view>
					<view @click.stop="exitAddress" :data-index="index" :data-id="item.id" :style="{ width: item.isDefault ? '65%' : '75%' }" class="column-address">
						<!-- 这里是故意写错成addres，后端字段命名垃圾 -->
						{{ item.addres }}
					</view>
					<view @click.stop="exitAddress"  :data-index="index" :data-id="item.id" class="column-exit">
						{{ options.operating === 'selectAddress' ? '选择' : rightName }}
					</view>
				</view>
			</view>
		</view>
		<view v-if="!addressList.length"><image class="default-image" :src="defaultImg"></image></view>
		<gxg-button class="start-todo" @clickBtn="addAddress">添加收货地址</gxg-button>
	</scroll-view>
</template>

<script>
import { NULL_DATA } from '@/config/image.js';
import { ADDRESS_DETAIL } from '@/config/router.js';
import GxgButton from '@/components/GxgButton.vue';
import { loadAddress } from '@/api/address.js';
import { updateOrder } from '@/api/order.js';
import { toRoute } from '@/utils/util.js';
import { model } from '@/config/package.js';
import { ORDER_DETAIL } from '@/config/router.js';
var _self;
export default {
	data() {
		return {
			options: {},
			rightName: '编辑',
			page: 1,
			pages: 0,
			addressList: [],
			pageSize: 10,
			defaultImg: NULL_DATA,
			isLoading: true,
			isChoose: false,
			isIpx: false
		};
	},
	onLoad: async function(options) {
		this.options = options;
		if(this.options.operating == 'orderUpdate'){
			this.rightName="选择"
		}
		this.refreshAddressList();
		this.$eventBus.$on('refreshAddressList', this.refreshAddressList);
	},
	methods: {
		/**
		 * 刷新收货地址
		 */
		refreshAddressList: async function() {
			delete getApp().globalData.addressList;
			this.addressList = await this.getAddressList();
		},

		/**
		 * 获取收货地址列表
		 */
		getAddressList: async function() {
			if (getApp().globalData.addressList) return addressList;
			return (getApp().globalData.addressList = (await loadAddress()).list);
		},

		/**
		 * 添加地址
		 */
		addAddress: function() {
			uni.navigateTo({ url: ADDRESS_DETAIL });
		},

		/**
		 * 更新订单地址
		 */
		orderUpdate: async function({ id }) {
			
			let res = await updateOrder({
				uuid: this.options.orderid,
				addressId: id
			});
			let isSuccess = res.count === 1;
			!isSuccess && (await model({ content: '更新订单收货地址失败，请刷新重试', showCancel: false }));
			uni.navigateTo({
				url: `${ORDER_DETAIL}?id=${this.options.orderid}`
			});
			return isSuccess ? res : false;
		},

		/**
		 * 选择地址
		 */
		selectAddress: function({ item }) {
			this.$eventBus.$emit('addressChange', item);
			uni.navigateBack({
				delta: 1
			});
		},

		/**
		 * 编辑地址
		 */
		updateAddress: function({ item }) {
			wx.navigateTo({
				url: `${ADDRESS_DETAIL}?id=${item.id}`
			});
		},

		/**
		 * 处理选中事件
		 */
		exitAddress: function(e) {
			const id = e.currentTarget.dataset.id;
			let item = this.addressList.find(item => item.id == id);
			this[this.options.operating] && this[this.options.operating]({ item, id });
		}
	},
	components: {
		GxgButton
	}
};
</script>

<style>
.form-list {
	width: 100%;
	background: #fff;
}

.form-list .list-column {
	width: 100%;
	min-height: 180upx;
	border-bottom: 1upx solid #eee;
}

.list-column .column-top {
	width: 100%;
	height: 80upx;
	font-size: 32upx;
	line-height: 80upx;
	display: flex;
	display: -webkit-flex;
	padding-left: 20upx;
}

.column-top .column-phone {
	font-size: 24upx;
	color: #666;
	margin-left: 20upx;
	line-height: 90upx;
}

.list-column .column-bottom {
	width: 710upx;
	margin-left: 20upx;
	display: -webkit-flex;
	font-size: 28upx;
}

.list-column .default-logo {
	width: 80upx;
	height: 42upx;
	background: #000000;
	border-radius: 30upx;
	text-align: center;
	line-height: 40upx;
	color: #fff;
	margin-top: 14upx;
	margin-right: 30upx;
}

.list-column .column-address {
	width: 65%;
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	min-height: 70upx;
	flex-direction: column;
	justify-content: center;
}

.list-column .column-exit {
	width: 95upx;
	height: 40upx;
	border-left: 1upx solid #eee;
	text-align: right;
	line-height: 40upx;
	position: absolute;
	right: 30upx;
	font-size: 30upx;
}

.default-image {
	width: 400upx;
	height: 300upx;
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: absolute;
}

.default-image image {
	width: 100%;
	height: 100%;
}
</style>
