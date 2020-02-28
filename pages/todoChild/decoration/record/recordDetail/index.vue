<template>
  <view class='recordDetail'>
	  <view class="recordDetailCard">
		  <image class="recordDetailCard_image" :src="img" mode=""></image>
		  <view class="recordDetailCard-text">银行打款成功</view>
	  </view> 
	  <view class="q1">
	  		  <view style="height: 400rpx;padding: 40rpx;background: #E8541E;"></view>
			  <view style="height: 400rpx;padding: 40rpx;background: #00B578;"></view>
	  </view> 
	  <button type="primary" @click="btn"></button>
  </view>
</template>

<script>
'use scrict';
import { SUCCESSPAY  } from '@/config/image.js';	
export default {
  data () {
    return {
		   img: SUCCESSPAY
		   
	   
    }
  },
  methods:{
	 btn(){
		 
	 } 
  },
  onLoad() {
  	
  }
}
</script>

<style>
    .recordDetail{
		font-size: 32rpx;
		background: rgba(242,246,249,1);
	}
	.recordDetailCard{
		margin: 48rpx 15rpx;
		height: 231rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		overflow: hidden;
		position: relative;
	}
	.recordDetailCard_image{
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
	}
	.recordDetailCard-text{
		position: absolute;
		width: 100%;
		height: 100%;
		line-height: 231rpx;
		text-align: center;
		font-size: 50rpx;
		color: #FFFFFF;
		
	}
	.q1{
		height: 500rpx;
		background: #409EFF;
		overflow: hidden;
	}
</style>