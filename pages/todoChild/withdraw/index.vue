<template>
	<view class="withdraw-box">
		<view class="balance">
			<view class="title">账户余额 (元)</view>
			<view class="content">￥{{balance}}</view>
		</view>
		<view class="withdraw">
			<view class="title">提取金额</view>
			<view class="content">
				<view class="icon">￥</view>
				<input />
			</view>
			<text class="option">全部提现</text>
		</view>
		<view class="submit">提现</view>
	</view>
</template>

<script>
	'use scrict';
	
	export default {
		data() {
			return {
				balance: 100
			}
		}
	}
</script>

<style lang="scss" scoped>
	.withdraw-box {
		color: #666666;
		> view {
			box-sizing: border-box;
			padding: 30rpx;
			.content {
				margin-top: 50rpx;
			}
		}
		.balance {
			background: #FAD64C;
			height: 300rpx;
			font-size: 28rpx;
			.content {
				font-size: 80rpx;
			}
		}
		.withdraw {
			.content {
				display: flex;
				.icon {
					width: 80rpx;
					font-size: 50rpx;
				}
				input {
					width: calc(90% - 80rpx);
					border-bottom: 1px solid #979797;
				}
			}
			.option {
				font-size: 32rpx;
				margin-left: 80rpx;
			}
		}
		.submit {
			margin: 30rpx;
			height: 100rpx;
			background: #FAD64C;
			color: white;
			font-size: 36rpx;
			text-align: center;
		}
	}
</style>
