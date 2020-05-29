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
						<view style="height: 50%;line-height: 105rpx;font-size: 28rpx;">{{item.name}}</view>
						<view style="height: 50%;line-height: 48rpx;font-size: 20rpx;color: #7E7E7E;">预约时间:{{item.createTimes}}</view>
						
					</view>
					<view class="right">
						<!-- <image :src="img[0]" :hidden="!item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image>
						<image :src="img[1]" :hidden="item.show" @click="choose(index)" style="width: 60px;" mode="widthFix"></image> -->
						<view style="width: 90rpx;height: 40rpx;background: #FFEA04;font-size: 20rpx;text-align: center;line-height: 40rpx;" v-if="item.makeState == '1'">待量房</view>
						<view style="width: 90rpx;height: 40rpx;background: #01B164;font-size: 20rpx;text-align: center;line-height: 40rpx;" v-if="item.makeState == '2'">已完成</view>
					</view>
				</view>
				
			</view>
			<!-- <null-data v-if="!datalist.length" :name="'暂无记录'" class="nullData_view" /> -->
		</view>
		<view class="schedule-right" :hidden='states.index==0'>
			
			
			<view style="position: relative;">
					<view v-if="dataListW.length">
						
					
					<view style="position: absolute;width: 100%;height: 100%;">
					<view class="bg">
					
					</view>
					<view style="display: flex;justify-content: space-between;">
						<view class="triangleLeft">
						</view>
						<view class="triangleRight">
						</view>
					</view>
					
					
					
					</view>
					
					<view class="boxQ">
						<image :src="img" mode="widthFix" class="img"></image>
						
						
						<view class="box-content" :data-id="item.id" v-for="(item,index) in dataListW" @click="linkRecordDetail" :key="index">
							<view style="height: 70%;display: flex;align-items: center;">
								<view class="btn" >申请金额</view>
								<view class="btn" >申请期限</view>
							</view>
							<view style="height: 30%;display: flex;align-items: center;">
								<view class="text" >{{item.loanMoney|num}}
			</view>
								<view class="text" >{{item.term}}</view>
							</view>
							<view class="iconfont iconyou iconclass" ></view>
						</view>
					</view>
					</view>
					<!-- <null-data v-if="!dataListW.length" :name="'暂无记录'" class="nullData_view" /> -->
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
import {BOTTOM_JIANTOU} from '@/config/image.js'
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
			img:BOTTOM_JIANTOU,
			dataListW:[]
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
		 let c = await loanList({status:3})
		 console.log(a)
		 p.push(...a.list)
		 let d = await loanList({status:5})
		 console.log(b)
		 p.push(...b.list)
		 _self.dataListW =p
		
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
	
	.bg{
		background: #FEE614;
		height: 500rpx;
		
	}
	.triangleLeft{
		 width: 0;
		    height: 0;
		    border-top: 80rpx solid #FEE614;
		    border-left: 200rpx solid transparent;
	}
	.triangleRight{
		width: 0;
		   height: 0;
		   border-bottom: 80rpx solid transparent;
		   border-left: 200rpx solid  #FEE614;
	}
	.boxQ{
		position: absolute;
		width: 650rpx;
		/* height: 300rpx; */
		box-shadow: 0 0 5px rgba(0,0,0,0.3);
		left: 50%;
		transform: translateX(-50%);
		top: 110rpx;
		background: #FFFFFF;
		padding: 200rpx 30rpx;
	}
	.img{
		position: absolute;
		left:calc(50% - 40rpx) ;
		width: 80rpx;
		top:0 ;
		transform: translateY(-40rpx);
	}
	.box-content{
		background: #F0EFED;
		width: 100%;
		height: 200rpx;
		position: relative;
		margin-bottom: 20rpx;
	}
	.btn{
		width: 100%;height: 60rpx;background:#FEE50E ;border-radius: 30rpx;flex: 1;margin: 0 40rpx;font-size: 28rpx;color: #333333;line-height: 60rpx;text-align: center;
	}
	.text{
		width: 100%;height: 100%;flex: 1;line-height: 10rpx;text-align: center;margin:0 40rpx;font-size: 28rpx;color: #333333;
	}
	.iconclass{
		position: absolute;
		right: 1rpx;
		top: 50%;
		transform:translateY(-50%) ;
		color: #666666;
	}
	</style>
</style>