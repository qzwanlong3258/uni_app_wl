<template>
	<view class="myWork">
		<view class="myWork-hd">
			<input type="text" style="position: absolute;width: 100%;height: 100%;">
			<icon class="iconfont iconsousuo  iconclass"></icon> <text style="font-size: 12px;color:#999999 ;margin-left: 2px;">搜索</text>
		</view>
		<ljl-states :infor="states" @change="stateChange"  />
		<view class="box-left" :hidden='states.index==1'>
			<view class="myWork-Card" @click="linkToDetail()">
				<view class="myWork-Card-hd">
					<view class="Card-hd-left">水晶之城</view>
					<view class="Card-hd-mid">刘**</view>
					<view class="Card-hd-right">2019.07.01</view>
				</view>
				<view class="myWork-Card-bottom">
					龙岗区横岗街道荷坳地铁站旁水晶之城36栋503
				</view>
			</view>
		</view>
		<view class="box-left" :hidden='states.index==0'>
			<view class="myWork-Card">
				<view class="myWork-Card-hd" @click="linkToDetail()">
					<view class="Card-hd-left">水晶之城</view>
					<view class="Card-hd-mid">刘**</view>
					<view class="Card-hd-right">2019.07.01</view>
				</view>
				<view class="myWork-Card-bottom">
					龙岗区横岗街道荷坳地铁站旁水晶之城36栋503
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import LjlStates from './components/changeStates';
import { MYWORKDETAIL} from '@/config/router.js';
export default {
	components:{
		LjlStates
	},
	data() {
		return{
			states: {
				index: 0,
				list: [ { title: '进行中', nullContent: "暂无客户" }, { title: '已完成', nullContent: "暂无设计师" }]
			},
		}
	},
	methods:{
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		},
		linkToDetail(){
			uni.navigateTo({
				url:MYWORKDETAIL
			})
		}
	},
	async onLoad() {}
};
</script>

<style scoped>
	.myWork{
		background: rgba(242,246,249,1);
	}
	.myWork-hd{
		height: 28px;
		margin: 7.5px 7.5px 6px 7.5px;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.iconclass{
		color: #999999;
		font-size: 32rpx;
		margin-top: -10px;
	}
	.myWork-Card{
		margin: 48rpx 15rpx;
		height: 180rpx;
		background: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0, 0, 0, 0.1);
		overflow: hidden;
		padding: 20rpx;
		
	}
	.myWork-Card-hd{
		height: 50%;
		display: flex;
		width: 100%;
	}
	.Card-hd-left{
		flex: 1;
		color: #333333;
		font-size: 15px;
		line-height: 60rpx;
	}
	.Card-hd-mid{
		flex: 2;
		color: #666666;
		font-size: 13px;
		line-height: 60rpx;
	}
	.Card-hd-right{
		flex: 1;
		color: #999999;
		font-size: 12px;
	}
	.myWork-Card-bottom{
		color: #666666;
		font-size: 13px;
	}
</style>
