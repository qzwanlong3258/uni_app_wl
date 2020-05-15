<template>
	<view class="member-box" :style="{height: pageHeight + 'rpx'}">
		<image class="background-image" :src="img.backgroundImage" mode="widthFix" @load="backgroundLoad"></image>
		<image class="main-button" :src="img.mainButton" mode="aspectFit"></image>
		<!-- <view class="rewardInfo">
			<text class="title">| {{rewardInfo.title}}</text>
			<view class="list">
				<view class="item" v-for="(item,index) in rewardInfo.list" :key="index">
					<text class="title">{{item.title}}</text>
					<text class="content">{{item.content}}</text>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	'use scrict';
	import { RECOMMENDED_MEMBER, INVITE_NOW } from '@/config/image.js';
	
	export default {
		data() {
			return {
				img: {
					backgroundImage: RECOMMENDED_MEMBER,
					mainButton: INVITE_NOW
				},
				pageHeight: undefined,
				rewardInfo: {
					title: "我的奖励",
					list: [{title: "积分", content: 100},{title: "优惠卷", content: "100元"}]
				}
			}
		},
		methods: {
			
			/**
			 * 背景图加载完成，设置页面高度
			 */
			backgroundLoad(e) {
				this.pageHeight = e.detail.height;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.member-box {
		position: relative;
		.background-image {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: -1;
		}
		.main-button {
			width: 500rpx;
			height: 200rpx;
			position: absolute;
			top: 58%;
			left: 125rpx;
		}
		.rewardInfo {
			position: absolute;
			top: 75%;
			width: 100%;
			height: 380rpx;
			box-sizing: border-box;
			padding: 30rpx 60rpx;
			> .title {
				font-size: 40rpx;
				font-weight: 500;
				color: yellow;
				left: 80rpx;
			}
			.list {
				display: flex;
			}
			.item {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: yellow;
				.title {
					margin-top: 60rpx;
					font-size: 32rpx;
				}
				.content {
					margin-top: 20rpx;
					font-size: 46rpx;
					font-weight: bold;
				}
			}
		}
	}
</style>
