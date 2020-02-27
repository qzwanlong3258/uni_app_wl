<template>
	<view class="recod">
		<view class="null" :hidden='show'>
			<null-data :content="nullContent" />
		</view>
		<view class="recodCard" :hidden='!show'>
			<view class="recodCard-hd">
				<view><img src="https://s2.ax1x.com/2020/02/27/3ddZb6.png" style='width: 100%;height: 100%;' alt=""></view>
				<view></view>
				<view style="font-size: 30rpx;">2019-08-05</view>
				<view class="recodCard-hd-product">合作产品</view>
			</view>
			<view class="recodCard-bd-hd">
				<view>借款金额</view>
				<view></view>
				<view>借款期限</view>
			</view>
			<view class="recodCard-bd-bd">
				<view style="padding-left:70rpx;color: #E8BE2E;letter-spacing:8rpx;font-weight: 700;font-size: 43rpx;">10000.00</view>	
				<view><text style="color: #999999;font-size:43rpx;letter-spacing:8rpx;font-weight: 700;">12</text><text style="color: #999999;font-size:33rpx;letter-spacing:8rpx;font-weight: 700;">期</text></view>
			</view>
			<view class="recodCard-ft">
				<view class="recodCard-ft-box">再次申请</view>
			</view>
		</view>
	</view>
</template>


<script>
	'use scrict';
	import NullData from '@/components/NullData.vue';
	
	export default {
		data() {
			return {
				nullContent:'暂无数据',
				show:true
			}
		},
		onLoad(options) {
			
		},
		methods: {
			
		},
		components: {
			NullData
		}
	}
</script>

<style>
	.recod{
		font-size: 32rpx;
		background: rgba(242,246,249,1);
	}
	.recodCard{
		margin: 48rpx 15rpx;
		height: 231rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		overflow: hidden;
	}
	.recodCard-hd{
		height: 50rpx;
		padding-top: 12rpx;
		display: flex;
		position: relative;
		
	}
	.recodCard-hd view{
		flex: 1;
	}
	.recodCard-hd-product{
		position: absolute;
		height: 30rpx;
		background: #2896c7;
		text-align: center;
		font-size: 20rpx;
		width: 120rpx;
		color: #ffffff;
		right: -28.1rpx;
		top: 20rpx;
		transform:rotate(45deg);
	}
	.recodCard-bd-hd{
		display: flex;
		margin-top: 30rpx;
	}
	.recodCard-bd-hd view{
		flex: 1;
		font-size: 24rpx;
		color: #999999;
		text-align: center;
	}
	.recodCard-bd-bd{
		display: flex;
	}
	.recodCard-bd-bd view{
		flex: 1;
	}
	.recodCard-bd-bd view:nth-child(2){
		text-align: center;
		padding-left: 160rpx;
	}
	.recodCard-ft{
		height: 35rpx;
		position: relative;
	}
	.recodCard-ft-box{
		border: 1px solid #409EFF;
		border-radius: 15rpx;
		color: #409EFF;
		font-size: 24rpx;
		width: 140rpx;
		text-align: center;
		line-height: 35rpx;
		position: absolute;
		right: 40rpx;
	}
	
	
</style>

