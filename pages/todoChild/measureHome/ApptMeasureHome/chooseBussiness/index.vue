<template>
	<view class="chooseBussiness">
		<view class="chooseBussiness-hd">
			
			<input type="text"/>
			<view class="iconfont iconsousuo iconsousuoclass iconclass"></view>
			
			<view class="hd-text"> 取消</view>
		</view>
		<view class="chooseBussiness-bd">
			<ljl-states :infor="states" @change="stateChange"  />
			<view class="schedule-left" :hidden='states.index==1'>
				<view class="chooseBussiness-box">
					<image class="box-left" src="https://s2.ax1x.com/2020/03/08/3xapSe.jpg"></image>
					<view class="box-mid"> 城市人家装饰</view>
					<view class="box-right">
						<view style="background: #E8BE2E;color: #FFFFFF;margin-top: 70rpx;font-size: 28rpx;text-align: center;height: 54rpx;line-height: 54rpx;">已预约</view>
						<view style="font-size: 24rpx;color: #999999;text-align: right;">3.0km</view>
					</view>
				</view>
			</view>
			<view class="schedule-right" :hidden='states.index==0'>
				<view class="chooseBussiness-box">
					<image class="box-left" src="https://s2.ax1x.com/2020/03/08/3xapSe.jpg"></image>
					<view class="box-mid"> 城市人家装饰</view>
					<view class="box-right">
						<view style="background: #E8BE2E;color: #FFFFFF;margin-top: 70rpx;font-size: 28rpx;text-align: center;height: 54rpx;line-height: 54rpx;">已预约</view>
						<view style="font-size: 24rpx;color: #999999;text-align: right;">3.0km</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
'use strict';
import LjlStates from './components/changeStates';
export default {
	components: {
		LjlStates
	},
	data() {
		return{
			states: {
				index: 0,
				list: [ { title: '热门推荐', nullContent: "暂无客户" }, { title: '附近推荐', nullContent: "暂无设计师" }]
			},
		}
	},
	methods:{
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		}
	},
	async onLoad() {}
};
</script>

<style  scoped>
	.chooseBussiness{
		background: #FFFFFF;
		height: 1250rpx;
	}
	.chooseBussiness-hd{
		height: 60rpx;
		padding-left: 20rpx;
		display: flex;
		position: relative;
	}
	.chooseBussiness-hd input{
		background:rgba(245,245,245,1);
		flex: 1;
		height: 60rpx;
		
	}
	.chooseBussiness-hd  .iconclass{
		position: absolute;
		left: 30rpx;
		top: 10rpx;
		color: #1D1D1D;
		font-size: 32rpx;
	}
	.chooseBussiness-hd .hd-text{
		flex-basis: 130rpx;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 32rpx;
	}
	.chooseBussiness-box{
		height: 170rpx;
		border-bottom: 2rpx solid #EEEEEE;
		display: flex;
		margin: 0 20rpx;
	}
	.box-left{
		flex: 1;
		width: 100%;
		height: 99%;
		display: block;
	}
	.box-mid{
		flex: 2;
		text-align: left;
		line-height: 170rpx;
		font-size: 36rpx;
	}
	.box-right{
		flex: 0.6;
		
	}
</style>

