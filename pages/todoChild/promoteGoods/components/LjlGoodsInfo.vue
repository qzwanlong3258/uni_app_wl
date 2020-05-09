<template>
	<view class="goods-info-box">
		<image v-if="infor.url.length" :src="infor.url" mode="aspectFill" />
		<view class="content">
			<view class="title">{{infor.name}}</view>
			<view class="desc"></view>
			<!-- <view class="desc">{{infor.desc}}</view> -->
			<view class="rule">
				<text>{{infor.originalPrice}}</text>
				<text>{{infor.price}}</text>
			</view>
		</view>
		<view class="selected" :class="checked ? 'active' : ''"></view>
	</view>
</template>

<script>
	'use scrict';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			},
			checked: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-info-box {
		display: flex;
		width: 100%;
		height: 300rpx;
		position: relative;
		image {
			width: 200rpx;
			height: 200rpx;
			margin-right: 30rpx;
		}
		.content {
			.title {
				color: $color_text-regular;
				min-height: 100rpx;
				font-size: 34rpx;
				@include omit(2);
			}
			.desc {
				margin-top: 10rpx;
				font-size: 24rpx;
				color: $color_text-secondary-2;
				letter-spacing: 5rpx;
			}
			.rule {
				margin-top: 24rpx;
				font-size: 24rpx;
				color: $color_text-secondary-2;
				text:nth-child(1) {
					color: #E8541E;
					background: #FCEEE9;
					margin-right: 26rpx;
				}
			}
		}
		.selected {
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			top: 200rpx;
			right: 30rpx;
			border: 5rpx solid $color_border;
			background: $color_border;
		}
		.active {
			background: #FAD64C;
		}
	}
</style>
