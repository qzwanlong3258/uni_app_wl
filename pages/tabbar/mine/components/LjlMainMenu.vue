<template>
	<view class="main-menu-box">
		<image class="icon" :src="infor.url" />
		<text class="title">{{infor.title}}</text>
		<image class="link" :src="img.RIGHT" />
	</view>
</template>

<script>
	'use scrict';
	import { RIGHT } from "@/config/image.js";
	
	export default {
		data() {
			return {
				img: {
					RIGHT
				}
			}
		},
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-menu-box {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		.icon {
			width: 46rpx;
			height: 46rpx;
			margin-left: 30rpx;
		}
		.title {
			margin-left: 50rpx;
			color: #333333;
			font: 34rpx/48rpx verdana;
		}
		.link {
			width: 16rpx;
			height: 26rpx;
			position: absolute;
			right: 30rpx;
			color: #CCCCCC;
		}
	}
</style>
