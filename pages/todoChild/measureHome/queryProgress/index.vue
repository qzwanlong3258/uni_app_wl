<template>
	<view class="chooseBussiness" v-if="showAuth">
		<view class="box" v-for="(item,index) in dataList" :key="index">
			<view class="left">
				<image :src="item.storePhotos" style="width: 110rpx;height: 110rpx;border-radius:50% ; display: block;box-shadow: 0 0 2rpx 2rpx  rgba(153,153,153,0.3);" mode="scaleToFill"></image>
			</view>
			<view class="mid">
				<view style="height: 50%;line-height: 105rpx;font-size: 28rpx;">{{item.name}}</view>
				<view style="height: 50%;line-height: 49rpx;font-size: 20rpx;color: #7E7E7E;">预约时间:{{item.createTimes}}</view>
				
			</view>
			<view class="right">
				<!-- <image :src="img[0]" :hidden="!item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image>
				<image :src="img[1]" :hidden="item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image> -->
				<view style="width: 90rpx;height: 40rpx;background: #FFEA04;font-size: 20rpx;text-align: center;line-height: 40rpx;" v-if="item.makeState == '1'">待量房</view>
				<view style="width: 90rpx;height: 40rpx;background: #01B164;font-size: 20rpx;text-align: center;line-height: 40rpx;" v-if="item.makeState == '2'">已完成</view>
			</view>
		</view>
		<null-data v-if="!dataList.length" class="nullData_view" />
	</view>
</template>

<script>
'use strict';
var _self;
import { getMyShop} from '@/api/measureHome.js';
import NullData from '@/components/NullData.vue';
import { getStorage ,setStorage } from '@/utils/storage.js';
		const { AUTH } = require('../../../../config/router.js');
		var _self;
export default {
	components:{
		NullData
	},
	data() {
		return{
			dataList:{},
			showAuth:false
		}
	},
	methods:{
		
	},
	async onLoad(options) {
		_self=this
		let e = await getMyShop()
		_self.dataList=e.list
		
		
		
		
		const isLogin = getStorage('isLogin');
		if (isLogin) {
			this.showAuth=true
		} else {
			
			let pages = getCurrentPages();
			if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
			uni.reLaunch({
				url:`${AUTH}?name=${'queryProgress'}`
			});	
			}
		
	}
};
</script>


<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.box{
		height: 150rpx;
		border-bottom:4rpx solid rgba(241,241,241,1);
		display: flex;
	}
	.left{
		flex-basis: 110rpx;
		padding: 20rpx 20rpx 20rpx 20rpx;
	}
	.right{
		flex-basis: 160rpx;
		display: flex;
		align-items: center;
	}
	.mid{
		flex: 1;
		/* line-height: 75px; */
		padding-left: 20rpx;
		color: 28rpx;
	}
</style>