<template>
	<scroll-view scroll-y class="container">
		<view class="clothe-infor">
			<order-infor :order="orderInformation" @changeAllMoney="changeAllMoney"></order-infor>
			<i @click="goOrderListPage" class="iconfont iconcha"></i>
		</view>
		<view class="order-infor">
			<view class="address-infor">
				<view class="adress-tip title-font">收货地址</view>
				<yld-address :address="shippingAddress.infor"></yld-address>
			</view>
			<view class="delivery-infor">
				<view class="title-font">快递</view>
				<view class="infor-content">
					<i class="iconfont iconqueding"></i>
					<view class="tip-font delivery-name">顺丰</view>
					<view class="tip-font">￥0.00</view>
				</view>
			</view>
			<view class="pay-infor">
				<view class="title-font">支付方式</view>
				<view class="infor-content"><view class="tip-font">积分支付</view></view>
			</view>
			<view class="money-infor">
				<view class="tip-font infor-con">
					<view>商品总金额</view>
					<view>{{ allMoney }}积分</view>
				</view>
				<view class="tip-font infor-con">
					<view>优惠券抵扣</view>
					<view>￥ 0.00</view>
				</view>
				<view class="tip-font infor-con">
					<view>运费</view>
					<view>￥ 0.00</view>
				</view>
				<view class="title-font infor-con">
					<view>实付款</view>
					<view>{{ allMoney }}积分</view>
				</view>
			</view>
		</view>
		<button class="start-todo primary-cus-big-button" @click="startTodo">提交订单</button>
	</scroll-view>
</template>

<script>
'use strict';
import OrderInfor from '@/components/OrderInfor.vue';
import YldAddress from '@/components/YldAddress.vue';
import { ORDER_DETAIL, ADDRESS_INDEX } from '@/config/router.js';
import { model, toast } from '@/config/package.js';
import { loadAddress } from '@/api/address.js';
import { createOrder, payOrder } from '@/api/order.js';

export default {
	data() {
		return {
			orderInformation: {},
			shippingAddress: {
				infor: {},
				listQuery: {
					page: 1,
					size: 5
				}
			},
			allMoney: 0,
			submiting: false
		};
	},
	onLoad() {
		this.orderInformation = getApp().globalData.goodsInfor;
		this.allMoney = this.orderInformation.goodsPrice;
		loadAddress(this.shippingAddress.listQuery).then(res => {
			this.shippingAddress.infor = res.list[0];
		});
		this.$eventBus.$on("addressChange", data => {
			this.shippingAddress.infor = data;
		});
	},
	components: {
		OrderInfor,
		YldAddress
	},
	methods: {

		/**
		 * 调整总金额
		 */
		changeAllMoney(counts) {
			this.allMoney = Number(counts) * Number(this.orderInformation.goodsPrice);
		},
		
		/**
		 * 检测收货地址
		 */
		checkAddress: async function() {
			let infor = this.shippingAddress.infor;
			let isSuccess = true;
			// 这里的地址字段名故意写错，后端非法命名
			if (!(infor.addres && infor.name && infor.phone)) {
				this.isSuccess = false;
				await model({
					content: '请添加收货地址'
				});
			}
			return isSuccess;
		},

		/**
		 * 创建订单
		 */
		createOrder: async function() {
			let res = await createOrder({
				addressId: this.shippingAddress.infor.id,
				gid: this.orderInformation.id
			});
			Number(res.count) !== 1 && ((res = null), await model({ content: '创建订单失败,请重新选择商品', showCancel: false }));
			return res;
		},

		/**
		 * 订单支付
		 */
		payOrder: async function(uuid) {
			let res = await payOrder({
				uuid,money: this.allMoney
			});
			Number(res.count) !== 1 && ((res = null), await model({content: '支付失败,请重新选择商品', showCancel: false }));
			return res;
		},

		/**
		 * 处理提交订单
		 */
		startTodo: async function() {
			if (this.submiting) return;
			this.submiting = true;
			let checkAddressRes, createOrderRes, payOrderRes;
			if (!((checkAddressRes = await this.checkAddress()) && (createOrderRes = await this.createOrder()) && (payOrderRes = await this.payOrder(createOrderRes.uuid)))) {
				return (this.submiting = false);
			}
			uni.navigateTo({
				url: `${ORDER_DETAIL}?id=${createOrderRes.uuid}`
			});
			this.submiting = false;
		}
	}
};
</script>

<style lang="scss">
.iconcha {
	position: absolute;
	right: 64upx;
	top: 64upx;
}

.order-infor {
	width: 100%;
	height: calc(100% - 300upx);
	border-top: 4upx solid #dcdcdc;
	border-top-left-radius: 150upx;
	border-top-right-radius: 150upx;
	box-shadow: 0 0 1upx 1upx rgba(0, 0, 0, 0.1);
	background: #fff;
	.address-infor {
		width: 82%;
		margin-left: 9%;
		margin-top: 80upx;
		padding-bottom: 46upx;
		border-bottom: 1upx solid #dcdcdc;
	}

	.delivery-infor {
		width: 82%;
		margin-left: 9%;
		margin-top: 46upx;
		padding-bottom: 46upx;
		border-bottom: 1upx solid #dcdcdc;

		.infor-content {
			margin-top: 23upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.delivery-name {
				margin-right: 380upx;
			}

			.tip-font {
				color: #333;
			}
		}
	}

	.pay-infor {
		width: 82%;
		margin-left: 9%;
		margin-top: 46upx;
		padding-bottom: 46upx;
		border-bottom: 1upx solid #dcdcdc;
		display: flex;
		justify-content: space-between;
		.tip-font {
			color: #333;
			margin-top: 22rpx;
		}
	}

	.money-infor {
		width: 82%;
		margin-left: 9%;
		margin-top: 46upx;
		padding-bottom: 46upx;
		border-bottom: 1upx solid #dcdcdc;

		.infor-con {
			display: flex;
			justify-content: space-between;
		}

		.tip-font {
			color: #333;
			margin-top: 22rpx;
		}

		.title-font {
			margin-top: 53upx;
		}
	}
}
</style>
