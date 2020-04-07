<template>
	<view class="chooseBussiness">
		<view class="box" v-for="(item,index) in dataList" :key="index">
			<view class="left">
				<image :src="item.storePhotos" style="width: 55px;height: 55px;border-radius:50% ; display: block;box-shadow: 0 0 1px 1px  rgba(153,153,153,0.3);" mode="scaleToFill"></image>
			</view>
			<view class="mid">
				<view style="height: 50%;line-height: 52.5px;">{{item.name}}</view>
				<view style="height: 50%;line-height: 24.5px;font-size: 10px;color: #7E7E7E;">预约时间:{{item.createTime}}</view>
				
			</view>
			<view class="right">
				<!-- <image :src="img[0]" :hidden="!item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image>
				<image :src="img[1]" :hidden="item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image> -->
				<view style="width: 45px;height: 20px;background: #FFEA04;font-size: 10px;text-align: center;line-height: 20px;" v-if="item.state == '1'">待量房</view>
				<view style="width: 45px;height: 20px;background: #01B164;font-size: 10px;text-align: center;line-height: 20px;" v-if="item.state == '2'">已完成</view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
var _self;
import { getMyShop} from '@/api/measureHome.js';
export default {
	data() {
		return{
			dataList:{}
		}
	},
	methods:{
		
	},
	async onLoad(options) {
		_self=this
		let e = await getMyShop()
		_self.dataList=e.list
		
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
		height: 75px;
		border-bottom: 2px solid rgba(241,241,241,1);
		display: flex;
	}
	.left{
		flex-basis: 55px;
		padding: 10px 10px 10px 10px;
	}
	.right{
		flex-basis: 80px;
		display: flex;
		align-items: center;
	}
	.mid{
		flex: 1;
		/* line-height: 75px; */
		padding-left: 10px;
		color: 14px;
	}
</style>