<template>
	<view class="customer-list-box">
		<ljl-states :infor="states" @change="stateChange" />
		<!-- <template v-if="list.length"> -->
			<!-- <ljl-customer-infor v-for="(item, index) in list" :key="index" :infor="item" /> -->
			<view class="scheduleCard" >
				<view class="scheduleCard-top" style="height: 35%;border-bottom:4rpx solid #F0F0F0 ;">
					<view class="scheduleCard-top-left">
						<image :src="userInfo.avatarUrl" class="scheduleCard-top-left-img" mode="aspectFill">
					</view>
					<view class="scheduleCard-top-mid">
						<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx 0 10rpx 30rpx;">{{userInfo.nickName}}</view>
						<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 30rpx;;color:#999999">电话：{{userInfo.phone}}</view>
					</view>
					<view class="scheduleCard-top-right">
						贡献积分100
						<view class="iconfont iconyou iconclass"></view>
					</view>
				</view>
				<view class="scheduleCard-mid">
					<view style="flex: 50%;">奖励积分: 10</view>
					<view style="flex: 50%;">奖励时间: 2020-01-20</view>
					<view style="flex: 50%;">支付单数: 1</view>
					<view style="flex: 50%;">交易金额: 202，000</view>
					<view style="flex: 50%;">奖励积分: 100</view>
					<view style="flex: 50%;">最新交易时间: 2020-01-20</view>
				</view>
			</view>
		<!-- </template> -->
		<!-- <template v-else>
			<null-data :content="states.list[states.index].nullContent" />
			<view class="page_view-bottomMenu"><ljl-menu :infor="menu" /></view>
		</template> -->
	</view>
</template>

<script>
'use scrict';
import LjlMenu from '@/components/LjlMenu';
import LjlStates from '@/components/LjlStates';
import LjlCustomerInfor from './components/LjlCustomerInfor';
import NullData from '@/components/NullData.vue';
import * as imgs from '@/config/image.js';
import { loadCustomer } from '@/api/todoChild/customerList.js';
import { HOME, CUSTOMER_LIST, PROMOTE_GOODS, WITHDRAW, POSTER } from '@/config/router.js';

export default {
	data() {
		return {
			userInfo:{
				avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				nickName:'李三',
				phone:13584115454
			},
			list: [],
			buffer: [],
			states: {
				index: 0,
				list: [{ title: '全部', nullContent: "暂无数据" }, { title: '会员', nullContent: "暂无会员" }, { title: '客户', nullContent: "暂无客户" }, { title: '设计师', nullContent: "暂无设计师" }]
			},
			menu: {
				title: '推广工具',
				center: 'center',
				list: [
					{ title: '专属海报', icon: imgs.POSTER, href: POSTER },
					{ title: '推广商品', icon: imgs.GOODS, href: PROMOTE_GOODS },
					{ title: '邀请会员', icon: imgs.INVITE_MEMBER, href: POSTER },
					{ title: '邀请设计师', icon: imgs.INVITE_DESIGNER, href: POSTER },
					{ title: '邀请客户', icon: imgs.INVITE_CLIENT, href: POSTER }
				]
			}
		};
	},
	onLoad(options) {
		this.states.index = Number(options.index) + 1;
		this.loadList();
	},
	methods: {
		
		loadList: async function() {
			this.buffer = (await loadCustomer()).list;
			this.stateTo0();
		},
		
		/**
		 * 切换到状态0(全部)
		 */
		stateTo0() {
			this.states.index = 0;
			this.list = [...this.buffer];
		},
		
		/**
		 * 切换到状态1(会员)
		 */
		stateTo1() {
			this.states.index = 1;
			this.list = this.buffer.filter(item => item.roleName.indexOf('会员') !== -1);
		},
		
		/**
		 * 切换到状态2(客户)
		 */
		stateTo2() {
			this.states.index = 2;
			this.list = this.buffer.filter(item => item.roleName.indexOf('客户') !== -1);
		},
		
		/**
		 * 切换到状态3(设计师)
		 */
		stateTo3() {
			this.states.index = 3;
			this.list = this.buffer.filter(item => item.roleName.indexOf('设计师') !== -1);
		},
		
		/**
		 * 切换状态
		 */
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		}
	},
	components: {
		LjlMenu,
		LjlStates,
		LjlCustomerInfor,
		NullData
	}
};
</script>

<style lang="scss" scoped>
	.scheduleCard{
		// margin: 0 15rpx 48rpx;
		height: 346rpx;
		// border-radius: 20rpx;
		// box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		// overflow: hidden;
		padding: 20rpx;
	}
	.scheduleCard-top{
		padding-bottom: 10rpx;
		display: flex;
		margin: 0 10px;
		border-bottom: 1px solid rgba(241,241,241,1);;
	}
	.scheduleCard-top-left{
		flex-basis: 120rpx;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.scheduleCard-top-left image{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.scheduleCard-top-mid{
		flex: 1;
		vertical-align: middle;
		
	}
	.scheduleCard-top-right{
		flex-basis: 220rpx;
		text-align: center;
		position: relative;
		font-size: 29rpx;
		color: #666666;
		line-height: 140rpx;
	}
	.iconclass{
		color: #999999;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		transform: rotate(90deg);
	}
	.scheduleCard-mid{
		display: flex;
		flex-wrap: wrap;
		color: #666666;
		font-size: 10px;
		text-align: left;
		padding: 0 10px 15px 10px;
		border-bottom: 3px solid rgba(241,241,241,1);
	}
	.scheduleCard-mid view{
		margin: 5px 0;
	}

</style>
