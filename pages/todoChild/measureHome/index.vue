<template>
	<view class="measureHome">
		<image :src="img" mode=""></image>
		<view style="height: 70rpx;background: #FFFFFF;"></view>
		<view class="btn">
			<view class="scheduleBtn">进度查询</view>
			<view class="freeMeasureHomeBtn" @click="apptMeasureHomeBtn">免费量房</view>
		</view>
	</view>
</template>

<script>
'use strict';
import { MEASUREHOME} from '@/config/image.js';
import { APPTMEASUREHOME} from '@/config/router.js';
export default {
	data() {
		return{
			img:MEASUREHOME
		}
	},
	methods:{
		apptMeasureHomeBtn(){
			uni.navigateTo({
				url:APPTMEASUREHOME
			})
		},
			
	},
	async onLoad() {}
};
</script>

<style scoped>
	.measureHome{
		height: 1870rpx;
		width: 100%;
	}
	.measureHome image{
		width: 100%;
		height: 1700rpx;
		display: block;
	}
	.btn{
		height: 100rpx;
		
		background: #ffffff;
		display: flex;
		padding-left: 20rpx;
		padding-right: 20rpx;
		
	}
	.scheduleBtn{
		flex: 48%;
		margin: 10rpx;
		background:rgba(232,190,46,0.15);
		color: #E8BE2E;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.freeMeasureHomeBtn{
		flex: 48%;
		margin: 10rpx;
		background: #E8BE2E;
		color: #ffffff;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
