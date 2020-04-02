<template>
	<view class="measureHome">
		<image :src="img" mode="widthFix"></image>
		
		<!-- <view class="apptMeasureHome_ft">
			<view class="btn" @click="apptMeasureHomeBtn">提交审核</view>
		</view> -->
		<view class="btn">
			<view class="scheduleBtn" @click="queryProgressBtn">进度查询</view>
			<view class="freeMeasureHomeBtn" @click="apptMeasureHomeBtn">免费量房</view>
		</view>
	</view>
</template>

<script>
'use strict';
import { MEASUREHOME} from '@/config/image.js';
import { APPTMEASUREHOME, QUERYPROGRESS} from '@/config/router.js';
export default {
	data() {
		return{
			img:MEASUREHOME
		}
	},
	methods:{
		queryProgressBtn(){
			
			uni.navigateTo({
				url:QUERYPROGRESS
			})
			
		},
		apptMeasureHomeBtn(){
			uni.navigateTo({
				url:APPTMEASUREHOME
			})
		}
		
			
	},
	async onLoad() {}
};
</script>
<style>
page {
background-color: #FFFFFF;
}
</style>
<style scoped>
	.measureHome{
		height: 750px;
		width: 100%;
		
	}
	.measureHome image{
		width: 100%;
		
	}
	.btn{
		height: 100rpx;
		
		background: #ffffff;
		display: flex;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin: 20px 0;
		
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
	/* .apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		/* width: 100%;
		height: 100rpx;
		margin-top: 40px;
		
	} */ 
	/* .btn{
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 20px;
		background: #EEB862;
		font-family:FZLTKHK;
		font-weight:bold;
		color:rgba(132,1,2,1);
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 2px 5px rgba(0,0,0,0.3);
		font-size: 14px;
		letter-spacing: 2px;
	} */
</style>
