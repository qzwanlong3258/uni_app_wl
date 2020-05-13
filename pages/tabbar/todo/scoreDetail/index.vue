<template>
	<view>
		<view style="height: 160rpx;padding: 70rpx;border-bottom: 2rpx solid #F1F1F1;">
			<view style="font-size: 30rpx;text-align: center;">积分详情</view>
			<view  style="font-size: 80rpx;color: #2B1E01;text-align: center;">{{integral?integral:0}}</view>
		</view>
		<view style="padding: 30rpx;display: flex;" v-for="(item,index) in dataList">
			<view style="flex: 1;">
				<view style="color: #333333;font-size: 24rpx;">{{item.describe}}</view>
				<view style="color: #999999;font-size: 20rpx;">{{item.createtime|time}}</view>
			</view>
			<view style="flex-basis: 50rpx;"  :class="{red:item.money<0,green:item.money>0}">{{item.money>0?'+'+item.money:item.money}}</view>
		</view>
	</view>
</template>

<script>
'use strict';
var _self;
import { loadIntegral,loadIntegralDeyail } from '@/api/tabbar/todo.js';

import { formatDate } from '@/config/filter.js';
export default {
	data() {
		return{
			integral:0,
			dataList:[]
		}
	},
	filters:{
		time(val){
			return formatDate(val)
		}
	},
	methods:{
		/**
		 * 加载积分
		 */
		loadIntegral: function() {
			loadIntegral().then(res => {
				// console.log(res)
				this.integral = Number(res.integral);
			});
		},
		getList(){
			loadIntegralDeyail().then(res=>{
				_self.dataList=res.list
			})
		}
	},
	async onLoad() {
		_self=this
		this.loadIntegral();
		this.getList()
	},
	onShow() {
		this.loadIntegral();
	},
};
</script>

<style >
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.red{
		color: red;
	}
	.green{
		color: green;
	}
</style>
