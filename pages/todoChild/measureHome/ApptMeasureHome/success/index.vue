<template>
	<view class="success">
		<view class="black">
			</view>
			<view class="box">
					<image :src="img" mode="widthFix"></image>
					<view class="text-successs">提交成功</view>
					<view class="text">
			                            您已成功提交免费量房申请，客服人员
			
			                        </view>
					<view class="text">将及时跟您联系，请保持电话畅通。</view>
					<view class="apptMeasureHome_ft">
						<view class="btn" @click="toLinkChoose">关闭</view>
					</view>
				
			</view>
	</view>
	
		
</template>

<script>
'use strict';
import { MEASUREHOME_SUCCESS } from '@/config/image.js';
import {HOME} from '@/config/router.js'
export default {
	data() {
		return {
			img: MEASUREHOME_SUCCESS
		};
	},
	methods: {
		toLinkChoose(){
			uni.switchTab({
				url:HOME
			})
		}
	},
	async onLoad() {}
};
</script>

<style lang="scss" scoped>
.success{
		position: relative;
		height: 500px;
		width: 100%;
}
.black {
	background: rgba(0, 0, 0, 1);
	opacity: 0.5;
	
	width: 100%;
	height: 100%;
	position: absolute;
}
.box {
	height: 220px;
	
	background: #ffffff;
	width: 270px;
	padding: 30px 20px 0 20px;
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	transform:translate(-50%,-50%);
}
.box image {
	width: 40px;
	display: block;
	margin: 0 auto;
}
.text-successs {
	font-family: FZLTKHK;
	font-weight: bold;
	color: #840202;
	text-align: center;
	letter-spacing: 2px;
	margin: 10px 0;
}
.text{
	color: #A2A2A2;
	text-align: center;
	font-size: 12px;
	margin: 5px;
	
	
}
.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 20px;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 20px;
		background: #840202;
		color: #FFFFFF;
		margin-left: 60px;
		margin-right: 60px;
		box-shadow: 0 2px 5px rgba(0,0,0,0.3);
		font-size: 14px;
		letter-spacing: 2px;
	}
</style>
