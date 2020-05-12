<template>
	<view class="queryProgress">
		<ljl-states :infor="states" @change="stateChange"  />
		<view class="schedule-left" :hidden='states.index==1'>
			<view class="chooseBussiness">
				<view class="box" v-for="(item,index) in datalist" :key="index">
					<view class="left">
						<image :src="item.storePhotos" style="width: 110rpx;height: 110rpx;border-radius:50% ; display: block;box-shadow: 0 0 2rpx 2rpx  rgba(153,153,153,0.3);" mode="scaleToFill"></image>
					</view>
					<view class="mid">
						<view style="height: 50%;line-height: 105rpx;">{{item.name}}</view>
						<view style="height: 50%;line-height: 48rpx;font-size: 20rpx;color: #7E7E7E;">预约时间:{{item.createTime}}</view>
						
					</view>
					<view class="right">
						<!-- <image :src="img[0]" :hidden="!item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image>
						<image :src="img[1]" :hidden="item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image> -->
						<view style="width: 90rpx;height: 40rpx;background: #FFEA04;font-size: 20rpx;text-align: center;line-height: 40rpx;" v-if="item.makeState == '1'">待量房</view>
						<view style="width: 90rpx;height: 40rpx;background: #01B164;font-size: 20rpx;text-align: center;line-height: 40rpx;" v-if="item.makeState == '2'">已完成</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="schedule-right" :hidden='states.index==0'>
			<view class="record">
				<view class="null" :hidden="show"><null-data :content="nullContent" /></view>
				<view class="recordCard" :hidden="!show" @click="linkRecordDetail" :data-id="item.id" v-for="(item,index) in dataList" :key="index">
					<view class="recordCard-hd">
						<view style="margin-left: 10rpx;"><image :src="img" style="width: 100%;" mode="widthFix" alt="" /></view>
						<view></view>
						<view style="font-size: 30rpx;"></view>
						<!-- <view class="recordCard-hd-product">合作产品</view> -->
					</view>
					<view class="recordCard-bd-hd">
						<view>借款金额</view>
						<view></view>
						<view>借款期限</view>
					</view>
					<view class="recordCard-bd-bd">
						<view style="padding-left:70rpx;color: #E8BE2E;letter-spacing:8rpx;font-weight: 700;font-size: 43rpx;">{{item.loanMoney|num}}</view>
						<view>
							<text style="color: #999999;font-size:43rpx;letter-spacing:8rpx;font-weight: 700;">{{item.term}}</text>
							<text style="color: #999999;font-size:33rpx;letter-spacing:8rpx;font-weight: 700;">期</text>
						</view>
					</view>
					<!-- <view class="recordCard-ft"><view class="recordCard-ft-box">再次申请</view></view> -->
					<view class="recordCard-ft"><view ></view></view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
'use strict';
var _self;
import LjlStates from './components/changeStates';
import { getMyShop} from '@/api/measureHome.js';

import NullData from '@/components/NullData.vue';
import { LOAN_RECORD_Detail } from '@/config/router.js';
import { BANK_LOGO } from '@/config/image.js';
import { loanList } from '@/api/todoChild/loan.js'
export default {
	components:{
		LjlStates
	},
	data() {
		return {
			states: {
				index: 0,
				list: [ { title: '约量房', nullContent: "暂无记录" }, { title: '装修分期', nullContent: "暂无记录" }]
			},
			num:'',
			datalist:[],
			
			nullContent: '暂无数据',
			show: true,
			img:BANK_LOGO,
			dataList:[]
		};
	},
	filters:{
		num(val){
			return Number(val).toFixed(2)
		}
	},
	methods: {
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		},
		linkRecordDetail(e) {
			console.log(e)
			uni.navigateTo({ 
				url:`${LOAN_RECORD_Detail}?id=${e.currentTarget.dataset.id}`,
			});
		}
		
	},
	async onLoad(options) {
		_self = this
		console.log(options)
		this.states.index = Number(options.num)
		let e = await getMyShop()
		_self.datalist=e.list
		
		let p =[]
		 let v = await loanList({status:1})
		 console.log(v)
		 p.push(...v.list)
		 let a = await loanList({status:2})
		 console.log(a)
		 p.push(...a.list)
		 let b = await loanList({status:4})
		 console.log(b)
		 p.push(...b.list)
		 _self.dataList =p
		
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
		border-bottom: 4rpx solid rgba(241,241,241,1);
		display: flex;
	}
	.left{
		flex-basis: 110rpx;
		padding: 20rpx;
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
	
	.record {
		font-size: 32rpx;
		
	}
	.recordCard {
		margin: 48rpx 15rpx;
		height: 231rpx;
		background: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0 4rpx 4rpx  rgba(153,153,153,0.3);
		overflow: hidden;
	}
	.recordCard-hd {
		height: 50rpx;
		padding-top: 12rpx;
		display: flex;
		position: relative;
	}
	.recordCard-hd view {
		flex: 1;
	}
	.recordCard-hd-product {
		position: absolute;
		height: 30rpx;
		background: #2896c7;
		text-align: center;
		font-size: 20rpx;
		width: 120rpx;
		color: #ffffff;
		right: -28.1rpx;
		top: 20rpx;
		transform: rotate(45deg);
	}
	.recordCard-bd-hd {
		display: flex;
		margin-top: 30rpx;
	}
	.recordCard-bd-hd view {
		flex: 1;
		font-size: 24rpx;
		color: #999999;
		text-align: center;
	}
	.recordCard-bd-bd {
		display: flex;
	}
	.recordCard-bd-bd view {
		flex: 1;
	}
	.recordCard-bd-bd view:nth-child(2) {
		text-align: center;
		padding-left: 160rpx;
	}
	.recordCard-ft {
		height: 35rpx;
		position: relative;
	}
	.recordCard-ft-box {
		border: 1px solid #409eff;
		border-radius: 15rpx;
		color: #409eff;
		font-size: 24rpx;
		width: 140rpx;
		text-align: center;
		line-height: 35rpx;
		position: absolute;
		right: 40rpx;
	}
	</style>
</style>