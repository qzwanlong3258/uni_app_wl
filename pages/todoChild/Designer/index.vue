<template>
	<view>
		<view class="hd">
			设计师认证信息
		</view>
		<view class="bd">
			<view class="box">
				<view class="box-left">姓名</view>
				<view class="box-right">
					<input type="text" v-model="dataList.name" placeholder="请输入您的姓名">
				</view>
			</view>
			<view class="box">
				<view class="box-left">手机号码</view>
				<view class="box-right">
					<input type="number"  v-model="dataList.phone" maxlength="11" placeholder="请输入您的手机号码">
				</view>
			</view>
			<view class="box">
				<view class="box-left">工作年限(年)</view>
				<view class="box-right" style="position: relative;">
					<input type="text" v-model="dataList.ageNumber" @input='timeInput' placeholder="请输入您的从业年限">
					
					<!-- <view style="font-size: 28rpx;position: absolute;left: 60rpx;top: 2rpx;" :hidden='!timeShow'>平米</view> -->
					
					
				</view>
			</view>
			<view class="box">
				<view class="box-left">工作单位名称</view>
				<view class="box-right">
					<input type="text" v-model="dataList.unit" placeholder="请输入您的现工作单位名称">
				</view>
			</view>
		</view>
		<view class="apptMeasureHome_ft">
			<view class="btn" @click="submit">提交</view>
		</view>
	</view>
</template>

<script>
'use strict';
import {postDesigner} from '@/api/wx.js'
import { getStorage,setStorage } from '@/utils/storage.js';
import {setApplyId,addScore,addScoreRecord,getApplyId} from '@/api/auth.js'
import {getUserRole} from "@/api/auth.js";
var _self


export default {
	data() {
		return{
			dataList:{},
			timeShow:false,
			userInfo:{}
		}
	},
	methods:{
		timeInput(e){
			// console.log(e.detail)
			// this.$forceUpdate();
			if(e.detail.value ==""){
				_self.timeShow=false
			} else{
				_self.timeShow=true
			}
			
		},
		toast(v){
			
				uni.showToast({
				    title: v,
				    duration: 2000,
					icon:'none'
				});
				
			
		},
		
		async submit(){
			if(!this.dataList.name){
				this.toast('请输入您的姓名')
				return;
			}
			if(this.userInfo.role.find(item=>item="设计师")){
				uni.showToast({
				    title: "你已经是设计师",
				    duration: 2000,
					icon:'none'
				});
				return
			}
			// for(let i=0;i<this.userInfo.role.length;i++){
			// 	if(this.userInfo.role[i]=="设计师") 
				
			// 	console.log(this.userInfo.role[i])
				
			// }
			let applyId = (await getApplyId()).applyId 
			await addScore({
			    id: applyId,
			    integral: "50"
			    })
				await addScoreRecord({
			 userid: applyId,
			 money: "50",
			 msg: "邀请设计师赠送50积分"
			})
			postDesigner(this.dataList).then(res=>{
				uni.showToast({
												title: "提交成功",
												icon: 'success',
												duration: 1000,
											});
											setTimeout(function(){
															uni.navigateBack({
																delta: 1
															})
														},1000)
			})
		}
	},
	async onLoad() {
		_self=this
		this.userInfo = getStorage('userInfo');
		
		let e = await getUserRole()
		console.log(e)
		_self.role =e.roleName.split(',')
		let userNew={
			..._self.userInfo,
			
		}
		userNew.role=e.roleName.split(',')
		for(let i =0;i<userNew.role.length;i++){
			if(userNew.role[i]=='黑卡会员'){
				userNew.level ="黄金会员"
			}
			userNew.level ="普通会员"
		}
		setStorage('userInfo',userNew)
		_self.userInfo = getStorage('userInfo');
	}
};
</script>

<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.hd{
		height: 250rpx;
		background: #EEB949;
		color: #FFFFFF;
		line-height: 250rpx;
		text-align: center;
		font-size: 32rpx;
		letter-spacing: 1rpx;
	}
	.bd{
		padding: 80rpx 20rpx;
	}
	.box{
		padding: 20rpx 40rpx 20rpx 20rpx;
		display: flex;
		font-size: 28rpx;
		border-bottom: 2rpx solid #F1F1F1;
		margin-bottom: 40rpx;
	}
	.box-left{
		flex-basis: 200rpx;
		color: #333333;
		text-align: left;
	}
	.box-right{
		flex: 1;
		color: #666666;
		text-align: right;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 60px;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 20px;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 2px 5px rgba(0,0,0,0.3);
		font-size: 14px;
		letter-spacing: 2px;
	}
</style>
