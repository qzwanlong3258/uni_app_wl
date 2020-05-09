<template>
	<view class="customer-info-box" style="border-bottom: 4rpx solid #F1F1F1;">
		<view class="nav" @click="changeContent">
			<image class="avatar" :src="infor.avatarUrl" mode="aspectFill" />
			<view class="content">
				<view class="top">{{infor.nickName}}
					<!-- <text class="customerInfor_text-role" v-for="(item,index) in roles" :key="index" v-if="item === '设计师'|| item === '会员'||item === '客户'" :class="{designer: item === '设计师', member: item === '会员', customer: item === '客户'}">{{item}}</text> -->
				</view>
				
				<view class="bottom"><text class="customerInfor_text-role" v-for="(item,index) in roles" :key="index" v-if="item === '设计师'|| item === '会员'||item === '客户'" :class="{designer: item === '设计师', member: item === '会员', customer: item === '客户'}">{{item}}</text></view>
				<!-- <view class="bottom">已绑定 {{infor.create_time | formatDate}}</view> -->
			</view>
			<view class="integral">积分: {{infor.integral}} <icon class="iconfont iconyou page_icon-right" style="margin-bottom: 10rpx;margin-left: 20rpx;" :class="{active: isShowContent}"></icon></view>
		</view>
		<view class="info-content" v-show="isShowContent">
			<!-- <view class="row" v-for="(item,index) in list" :key="index">
				<text class="col">{{item.info}}</text>
				<text class="col"></text> -->
				<!-- <text class="col">{{item.desc}}</text> -->
			<!-- </view> -->
			<view class="row" >
				<text class="col">奖励积分:{{score}}</text>
				<text class="col"></text>
				<!-- <text class="col">{{item.desc}}</text> -->
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
				isShowContent: false,
		
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
			},
			score(){
				var a = 0
				let e = this.infor.roleName && this.infor.roleName.split(',')
				for(let i=0;i<e.length;i++){
					if(e[i]==='设计师'){
						a = a + 50
					}
					if(e[i]==='会员'){
						a = a + 10
					}
					if(e[i]==='客户'){
						a =a + 500
					}
				}
				return a
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
		height: 150rpx;
		display: flex;
		align-items: center;
		background: white;
		border-bottom: 2rpx solid #F1F1F1;
		.avatar {
			width: 72rpx;
			height: 72rpx;
			margin: 0 20rpx 0 32rpx;
			border-radius: 50%;
		}
		.content {
			.top {
				color: $color_text-regular;
				font-size: 28rpx;
				margin-left: 10rpx;
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
			font-size: 25rpx;
		}
	}
	.info-content {
		color: $color_text-regular;
		font-size: 24rpx;
		box-sizing: border-box;
		padding: 20rpx 50rpx;
		background: #FFFFFF;
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