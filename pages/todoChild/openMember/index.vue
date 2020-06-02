<template>
	<view class="recomCenter">
		<view class="recomCenter-nav " >
			<view class="top">
				<view class="recomCenter-nav-top">
					<image :src="userInfo.avatarUrl" class="recomCenter-nav-top-img" mode="aspectFill">
				</view>
			</view>
			<view style="text-align: center;color: #000000;font-size: 20rpx;margin: 10rpx;">{{userInfo.nickName?decodeURIComponent(userInfo.nickName):WELCOME}}</view>
			<view style="text-align: center;color: #605800;font-size: 18rpx;margin: 10rpx;">{{userInfo.level}}</view>
			<view style="text-align: center;color: #000000;font-size: 20rpx;margin: 20rpx 200rpx 0 200rpx;border-left:2rpx solid #000000 ;border-right:2rpx solid #000000 ;">10249人</view>
			<view style="text-align: center;color: #000000;font-size: 20rpx;margin: 0 200rpx;border-left:2rpx solid #000000 ;border-right:2rpx solid #000000 ;">加入黄金会员</view>
			<!-- <view style="position: absolute;right: 50rpx;top: 50rpx;font-size: 28rpx;color: #999999;">《会员协议》</view> -->
		</view>
		<view class="schedule">
			<view style="flex: 1;color: #333333;font-size: 26rpx;text-align: center;font-weight: Regular;">选择开通类型</view>
			<view style="flex: 0.7;"></view>
			<view style="flex: 1.3;position: relative;font-size: 20rpx;color: #666666;text-align: center;margin-right: 20rpx;">黄金会员一经开通，无法退订</view>
			
		</view>
		<view class="seclect">
			<view style="flex: 1;padding: 10rpx 0;">
				<view style="height: 40rpx;line-height: 40rpx;text-align: center;color: #333333;font-size: 24rpx;">一年黄金会员</view>
				<view style="height: 30rpx;line-height: 30rpx;text-align: center;font-size: 18rpx;color: #666666;">赠送100积分</view>
			</view>
			<view style="flex: 1;"></view>
			<view style="flex: 1;text-align: right;line-height: 80rpx;padding-right: 20rpx;">
				<label class="radio" style="font-size: 25rpx;"><text style="color: #AD0505;font-size: 24rpx;margin-right: 10rpx;vertical-align: middle;">￥198</text><radio style="vertical-align: middle;"  value="r1" :checked="agreeM" @click="agreeClick()" /></label>
			</view>
		</view>
		<view style="color: #333333;font-size: 26rpx;text-align: left;height: 90rpx;line-height: 90rpx;margin-left: 20rpx;margin-bottom: 20rpx;">黄金会员的八大权益</view>
		<view class="box">
			<view class="box_item" v-for="(item,index) in datalist" :key='index'>
				<image :src="item.img" mode="aspectFit"></image>
				<view style="color: #333333;font-size: 18rpx;text-align: center;">
                              {{item.nametop}} </view>
				<view style="color: #333333;font-size: 18rpx;text-align: center;">{{item.namebottom}}</view>
			</view>
			<!-- <view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size: 9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view>
			<view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size: 9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view>
			<view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size: 9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view>
			<view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size: 9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view>
			<view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size: 9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view>
			<view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size: 9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view>
			<view class="box_item">
				<image :src="img[0]" mode="widthFix"></image>
				<view style="color: #333333;font-size:9px;text-align: center;">
			                    新房免费
			
			                </view>
				<view style="color: #333333;font-size: 9px;text-align: center;">除甲醛</view>
			</view> -->
			
		</view>
		<view class="ft" style="position: fixed;height: 130rpx;width: 100%;left: 0;bottom: 20px;z-index: 800;background: #FFFFFF;">
			<view style="text-align: center;padding-bottom: 10rpx;height: 20rpx;">
				<label class="radio" style="font-size: 25rpx;">
					<radio value="r1" :checked="agree" @click="agre" />
					你已完全阅读并确认
					<label class="noticeBook" @click.stop="open" style="color: #333333;">《会员协议》</label>的内容
				</label>
			</view>
			<view class="apptMeasureHome_ft">
				<view class="btn" @click="pay">立即支付</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {MEMBER_ONE,MEMBER_TWO,MEMBER_THREE,MEMBER_FOUR,MEMBER_FIVE,MEMBER_SIX,MEMBER_SEVEN,MEMBER_EIGHT} from '@/config/image.js'
	import { getStorage } from '@/utils/storage.js';
	import {TO_WEB} from '@/config/router.js'
	import {postPay} from '@/api/wx.js'
	import * as home from "@/api/tabbar/home.js";
	import {setApplyId,addScore,addScoreRecord,getApplyId,newMember,oldMember,aginMember} from '@/api/auth.js'
	
	import {
		
		wxpay
	} from '@/config/package.js';
	
'use strict';
var _self;
export default {                                          
	data() {
		return{
			userInfo:{
				avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				nickName:'李三',
				phone:'广东 深圳'
			},
			agreeM:false,
			img:[MEMBER_ONE,MEMBER_TWO,MEMBER_THREE,MEMBER_FOUR,MEMBER_FIVE,MEMBER_SIX,MEMBER_SEVEN,MEMBER_EIGHT],
			datalist:[
				{img:MEMBER_ONE,nametop:'新房免费',namebottom:'除甲醛'},
				{img:MEMBER_TWO,nametop:'新房',namebottom:'开荒服务'},
				{img:MEMBER_THREE,nametop:'赠送全屋定制',namebottom:'方案效果图'},
				{img:MEMBER_FOUR,nametop:' 赠送装修分期',namebottom:'减息卡一张'},
				{img:MEMBER_FIVE,nametop:' 指定银行按揭',namebottom:'利率优惠'},
				{img:MEMBER_SIX,nametop:'赠送',namebottom:'100积分'},
				{img:MEMBER_SEVEN,nametop:'先装修后付款',namebottom:'体验卡一张'},
				{img:MEMBER_EIGHT,nametop:'赠送全年金融',namebottom:'咨询服务'}
			],
			agree:false,
			member:'',
			openId:''
		}
	},
	methods:{
		agreeClick(){
			_self.agreeM=!this.agreeM
		},
		agre() {
			_self.agree=!this.agree
		},
		open(){
			let ch = "/";
			// var str = "这是一/个变量，这是一个变量";
			let a = this.member.replace(new RegExp(ch,'g'),"!");
			let e = a.replace(":", "*")
			
			console.log(e)
			var testmsg=e.substring(e.lastIndexOf('.')+1)
			        const extensio = testmsg === 'jpg'
			        const extensio2 = testmsg === 'png'
			        const extensio3 = testmsg === 'jpeg'
			        if(extensio || extensio2 || extensio3) {
			          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			        } else {	
					 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
					}
		},
		async pay(){
			uni.showToast({
											title: "功能正在开发,敬请期待",
											icon: 'none',
											duration: 2000,
										});
										return
			if(!this.agreeM){
				uni.showToast({
												title: "请选择金额",
												icon: 'none',
												duration: 2000,
											});
			}
			if(!this.agree){
				uni.showToast({
												title: "请阅读会员协议",
												icon: 'none',
												duration: 2000,
											});
			}
			let e={
				openid:this.openId,
				price:'198'
			}
			let payContent = await postPay(e)
			console.log(payContent)
			payContent.paySign=payContent.sign
			const payRes = await wxpay(payContent);
			if (payRes.type == 'success') {
				let applyId = (await getApplyId()).applyId
				 if(applyId){
					await addScore({
					    id: applyId,
					    integral: "100"
					    })
						await addScoreRecord({
					 userid: applyId,
					 money: "100",
					 msg: "邀请会员赠送100积分"
					}) 
				 }
				 await addScore({
				     id: this.userInfo.id,
				     integral: "100"
				     })
				 	await addScoreRecord({
				  userid: this.userInfo.id,
				  money: "100",
				  msg: "注册会员赠送100积分"
				 })
				 if(this.userInfo.level =="黄金会员"){
					 let e={
					  							 id:this.userInfo.cardId,
					  							 number:'365'
					  }
					 await aginMember(e)
					
					 
				 }else{
					 if(this.userInfo.state){
						 let e={
							 id:this.userInfo.cardId,
							 number:'365'
						 }
						 await oldMember(e) 
					 } else {
						 await newMember({number:"365"})
					 }
					
					 
				 }
				 
				 
				  uni.navigateBack({
				  	delta:1
				  })
			}
			
		}
	},
	async onLoad() {
		_self=this
		_self.userInfo = getStorage('userInfo');
		_self.openId = getStorage('openId')
		home.loadHomeCarousel({type:4}).then(res => {
					this.member = res.list.find(item=>item.url=='会员协议').img;
					
				});
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.recomCenter{
		padding: 20rpx 0;
	}
	.recomCenter-nav{
		background-color: #FCE77A;
		height: 360rpx;
		margin:0 20rpx;
	}
	.top{
		height: 120rpx;
		padding: 10px 0 2px;
	}
	.recomCenter-nav-top{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	.recomCenter-nav-top-img{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.btn-box{
		height: 30rpx;
		margin-top: 30rpx;
		
	}
	.schedule{
		height: 90rpx;
		display: flex;
		line-height: 90rpx;
		border-bottom: 6rpx solid rgba(247,247,247,1);
	}
	.seclect{
		height: 90rpx;
		display: flex;
		line-height: 90rpx;
		border-bottom: 6rpx solid rgba(247,247,247,1);
	}
	.box{
		height: 320rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.box .box_item {
		flex: 25%;
		height: 120rpx;
		margin-top: 20rpx;
	}
	.box_item image{
		width:50rpx;
		height: 50rpx;
		margin: 0 auto;
		display: block;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 30rpx;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 4rpx 10rpx rgba(0,0,0,0.3);
		font-size: 28rpx;
		letter-spacing: 4rpx;
	}
</style>
