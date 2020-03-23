<template>
	<view class="queryProgress">
		<ljl-states :infor="states" @change="stateChange"  />
		<view class="schedule-left" :hidden='states.index==1'>
			<view class="queryProgressCard" >
				<image class="box-left" src="https://s2.ax1x.com/2020/03/08/3xapSe.jpg"></image>
				<view class="box-right">
					<view class="box-right-top" style="height: 50%;">
						<view class="box-right-top-left">城市人家装饰</view>
						<view class="box-right-top-right">已预约</view>
					</view>
					<view class="box-right-bottom" style="height: 50%;">
						预约时间：2020年3月14日
					</view>
				</view>
			</view>
		</view>
		<view class="schedule-right" :hidden='states.index==0'>
		<view class="queryProgressCard" >
			<image class="box-left" src="https://s2.ax1x.com/2020/03/08/3xapSe.jpg"></image>
			<view class="box-right">
				<view class="box-right-top" style="height: 50%;">
					<view class="box-right-top-left">城市人家装饰</view>
					<view class="box-right-top-right">已预约</view>
				</view>
				<view class="box-right-bottom" style="height: 50%;">
					预约时间：2020年3月16日
				</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
'use strict';
var _self;
import LjlStates from './components/changeStates';
export default {
	components:{
		LjlStates
	},
	data() {
		return {
			states: {
				index: 0,
				list: [ { title: '约量房', nullContent: "暂无客户" }, { title: '装修分期', nullContent: "暂无设计师" }]
			},
			num:''
		};
	},
	methods: {
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		}
	},
	onLoad(options) {
		_self = this
		console.log(options)
		this.states.index = Number(options.num)
		
	}
	
	
	
};
</script>
<style>
page {
background-color: rgba(245,245,245,1);;
}
</style>
<style scoped>
.queryProgress {
	font-size: 32rpx;
	/* background: rgba(242, 246, 249, 1); */
}
.queryProgressCard {
	margin: 48rpx 15rpx;
	height: 180rpx;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 2px 2px  rgba(153,153,153,0.3);
	overflow: hidden;
	padding: 20rpx;
	display: flex;
}
.box-left {
	flex: 0.8;
	width: 100%;
	height: 100%;
}
.box-right {
	flex: 2;
	padding-left: 30rpx;
}
.box-right-top {
	display: flex;
}
.box-right-top-left {
	flex: 3;
	line-height: 90rpx;
}
.box-right-top-right {
	flex: 1;
	background: #e8be2e;
	color: #ffffff;
	
	font-size: 28rpx;
	text-align: center;
	height: 54rpx;
	line-height: 54rpx;
	margin-top: 30rpx;
}
.box-right-bottom{
	line-height: 90rpx;
	
}
</style>
