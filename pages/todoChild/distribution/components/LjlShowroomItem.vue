<template>
	<view class="showroom-item-box" :style="{color: color}">
		<text>{{infor.title}}</text>
		<text>￥{{infor.content}}</text>
	</view>
</template>

<script>
	'use script';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			},
			color: {
				type: String,
				default: "#333333"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.showroom-item-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		width: 100%;
		height: 100%;
		text + text {
			margin-top: 10rpx;
		}
	}
</style>
