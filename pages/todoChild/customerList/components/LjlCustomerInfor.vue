<template>
	<view class="customer-info-box">
		<view class="nav" @click="changeContent">
			<image class="avatar" :src="infor.avatarUrl" mode="aspectFill" />
			<view class="content">
				<view class="top">{{infor.nickName}}
					<text class="customerInfor_text-role" v-for="(item,index) in roles" :key="index" :class="{designer: item === '设计师', member: item === '会员', customer: item === '客户'}">{{item}}</text>
				</view>
				<view class="bottom">已绑定 {{infor.create_time | formatDate}}</view>
			</view>
			<view class="integral">积分: 10 <icon class="iconfont iconyou page_icon-right" :class="{active: isShowContent}"></icon></view>
		</view>
		<view class="info-content" v-show="isShowContent">
			<view class="row" v-for="(item,index) in list" :key="index">
				<text class="col">{{item.info}}</text>
				<text class="col">{{item.desc}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { formatDate } from '@/config/filter.js';
	
	export default {
		data() {
			return {
				list: [{info: "奖励积分: 10", desc: "奖励时间: 2020/01/10"}],
				isShowContent: false
			}
		},
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		filters: {
			formatDate
		},
		computed: {
			roles() {
				return this.infor.roleName && this.infor.roleName.split(',');
			}
		},
		methods: {
			changeContent() {
				this.isShowContent = !this.isShowContent;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		height: 100rpx;
		display: flex;
		align-items: center;
		background: white;
		.avatar {
			width: 72rpx;
			height: 72rpx;
			margin: 0 20rpx 0 32rpx;
			border-radius: 50%;
		}
		.content {
			.top {
				color: $color_text-regular;
				font-size: 34rpx;
			}
			.bottom {
				color: $color_text-secondary-2;
				font-size: 20rpx;
				margin-top: 10rpx;
			}
		}
		.integral {
			position: absolute;
			right: 30rpx;
			color: $color_text-secondary;
			display: flex;
			align-items: center;
		}
	}
	.info-content {
		color: $color_text-regular;
		font-size: 24rpx;
		box-sizing: border-box;
		padding: 20rpx 50rpx;
		.row {
			width: 100%;
			height: 30rpx;
			line-height: 30rpx;
			text:nth-child(2) {
				position: absolute;
				left: 450rpx;
			}
		}
		.row + .row {
			margin-top: 6rpx;
		}
	}
</style>