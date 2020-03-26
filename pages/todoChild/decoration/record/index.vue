<template>
	<view class="record">
		<view class="null" :hidden="show"><null-data :content="nullContent" /></view>
		<view class="recordCard" :hidden="!show" @click="linkRecordDetail" :data-id="item.id" v-for="(item,index) in dataList" :key="index">
			<view class="recordCard-hd">
				<view style="margin-left: 5px;"><image :src="img" style="width: 100%;" mode="widthFix" alt="" /></view>
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
</template>

<script>
'use scrict';
var _self;
import NullData from '@/components/NullData.vue';
import { LOAN_RECORD_Detail } from '@/config/router.js';
import { BANK_LOGO } from '@/config/image.js';
import { loanList } from '@/api/todoChild/loan.js'
export default {
	data() {
		return {
			nullContent: '暂无数据',
			show: true,
			img:BANK_LOGO,
			dataList:[]
		};
	},
	async onLoad (options){
		_self =this
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
	},
	methods: {
		linkRecordDetail(e) {
			console.log(e)
			uni.navigateTo({ 
				url:`${LOAN_RECORD_Detail}?id=${e.currentTarget.dataset.id}`,
			});
		}
	},
	filters:{
		num(val){
			return Number(val).toFixed(2)
		}
	},
	components: {
		NullData
	}
};
</script>
<style>
	page{
		background: rgba(242, 246, 249, 1);
	}
</style>
<style scoped>
.record {
	font-size: 32rpx;
	
}
.recordCard {
	margin: 48rpx 15rpx;
	height: 231rpx;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 2px 2px  rgba(153,153,153,0.3);
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
