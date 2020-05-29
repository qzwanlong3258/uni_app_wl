<template>
	<view v-if="showAuth">
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
		const { AUTH } = require('../../../config/router.js');
var _self


export default {
	data() {
		return{
			dataList:{},
			timeShow:false,
			userInfo:{},
			role:[],
			showAuth:false
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
			if(!this.dataList.phone){
				this.toast('请输入您的手机号码')
				return;
			}
			if(!this.dataList.ageNumber){
				this.toast('请输入您的从业年限')
				return;
			}
			if(!this.dataList.unit){
				this.toast('请输入您的现工作单位名称')
				return;
			}
			// if(this.userInfo.role.find(item=>item=="设计师")){
			// 	uni.showToast({
			// 	    title: "你已经是设计师",
			// 	    duration: 2000,
			// 		icon:'none'
			// 	});
			// 	return
			// }
			console.log(this.role)
			console.log(this.role.length)
			if(this.role.length!=0){
				for(let i=0;i<this.role.length;i++){
					if(this.role[i]=="设计师") {
						uni.showToast({
							    title: "你已经是设计师",
							    duration: 2000,
								icon:'none'
							});
							return;
					}
					
					
					
				}
			}
			
			
			let applyId = (await getApplyId()).applyId
			 if(applyId){
				await addScore({
				    id: applyId,
				    integral: "50"
				    })
					await addScoreRecord({
				 userid: applyId,
				 money: "50",
				 msg: "邀请设计师赠送50积分"
				}) 
			 }
			
			await postDesigner(this.dataList).then(res=>{
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
		const isLogin = getStorage('isLogin');
		if (isLogin) {
			this.showAuth=true
			this.userInfo = getStorage('userInfo');
			
			let e = await getUserRole()
			console.log(e)
			// _self.role =e.roleName.split(',')
			let userNew={
				..._self.userInfo,
				
			}
			if(e.roleName){
				this.role=e.roleName.split(',')
			} else {
				this.role=[]
			}
		} else {
			
			let pages = getCurrentPages();
			if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
			uni.reLaunch({
				url:`${AUTH}?name=${'designer'}`
			});	
			}
		
		
		// userNew.role=e.roleName.split(',')
		// for(let i =0;i<userNew.role.length;i++){
		// 	if(userNew.role[i]=='黑卡会员'){
		// 		userNew.level ="黄金会员"
		// 	}
		// 	userNew.level ="普通会员"
		// }
		// setStorage('userInfo',userNew)
		// _self.userInfo = getStorage('userInfo');
		
		
		
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
