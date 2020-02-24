<template>
	<view class="order-list-box">
		<view class="nav"><ljl-order-menu :header="false" :list="orderStateList" @change="stateChange" /></view>
		<view class="detail-list">
			<view v-for="(item, index) in list" :key="index" :data-id="item.id" class="detail-content">
				<view class="order-status">{{ state | formatOrderState }}</view>
				<view @click="linkToOrderDetail" :data-id="item.id"><order-infor :order="item"></order-infor></view>
				<view class="infor-tip">
					商品合计:
					<span class="primary-theme-color" style="font-size: 28rpx">{{ item.goodsPrice * Number(item.orderCount) }}</span>
					积分
				</view>
				<view class="btn-list">
					<order-button
						@updateList="changeOrderList"
						:btnList="state | formatOrderBtns"
						:infor="item"
						@change="buttonChange"
					></order-button>
				</view>
			</view>
		</view>
		<no-more-data ref="NoMoreData" />
		<null-data v-if="!list.length" class="nullData_view" />
	</view>
</template>

<script>
import OrderInfor from '@/components/OrderInfor';
import OrderButton from '@/components/OrderButton';
import NoMoreData from '@/components/NoMoreData.vue';
import { formatOrderState, formatOrderBtns } from '@/config/filter.js';
import LjlOrderMenu from '@/components/LjlOrderMenu';
import { ORDER_DETAIL } from '@/config/router';
import { getOrderList } from '@/api/order.js';
import NullData from '@/components/NullData.vue';

export default {
	data() {
		return {
			orderStateList: [{ state: 1, count: 0 }, { state: 2, count: 0 }, { state: 3, count: 0 }, { state: 4, count: 0 }, { state: 5, count: 0 }],
			list: [],
			state: 1,
			isShowNoMoreData: false,
			listQuery: {
				page: 1,
				size: 5
			}
		};
	},
	onLoad(options) {
		options.state && (this.state = options.state);
		options.title && uni.setNavigationBarTitle({ title: options.title });
		this.stateChange();
	},
	onReachBottom() {
		let count = this.orderStateList.find(item => item.state === Number(this.state)).count;
		this.list.length < Number(count) ? this.loadNextPage() : this.$refs.NoMoreData.show();
	},
	filters: {
		formatOrderState,
		formatOrderBtns
	},
	methods: {

		/**
		 * 链接到订单详情
		 */
		linkToOrderDetail: function(e) {
			uni.navigateTo({
				url: `${ORDER_DETAIL}?id=${e.currentTarget.dataset.id}`
			});
		},

		/**
		 * 加载下一页
		 */
		loadNextPage: function() {
			this.listQuery.page++;
			this.stateChange();
		},
		
		/**
		 * 按钮事件
		 */
		buttonChange({event}) {
			this[event] && this[event]();
		},
		
		/**
		 * 订单状态切换
		 */
		stateChange: async function(state = this.state) {
			let res = await getOrderList({
				state: state,
				page: this.listQuery.page,
				size: this.listQuery.size,
			});
			this.state = state;
			this.list = res.list;
			// this.orderStateList.find(item => item.state === state).count = res.count;
			this.orderStateList.find(item => item.state === Number(state)).count = this.list.length;
		},
		
		/**
		 * 删除订单
		 */
		deleteOrder: function({ id }) {
			let index = this.list.findIndex(item => item.id == id);
			this.list.splice(index, 1);
			this.orderStateList = this.orderStateList.map(item => {
				item.state === this.state && item.count--;
				return item;
			});
		},
	},
	components: {
		OrderInfor,
		OrderButton,
		NoMoreData,
		LjlOrderMenu,
		NullData
	}
};
</script>

<style lang="scss" scoped>
.nav {
	display: fixed;
	top: 0;
}

.detail-list {
	width: 100%;
	.detail-content {
		width: 96%;
		background: #fff;
		margin: 2%;
		.order-status {
			position: absolute;
			right: 90upx;
			color: #baa16d;
			margin-top: 15upx;
			font-size: 28upx;
		}

		.iconcha {
			position: absolute;
			right: 80upx;
			margin-top: 12upx;
		}

		.infor-tip {
			position: absolute;
			margin-top: -90rpx;
			margin-left: 50rpx;
			font-size: 20rpx;
			right: 50rpx;
		}

		.btn-list {
			position: relative;
			top: -30upx;
			margin-bottom: 10upx;
		}
	}
}
</style>
