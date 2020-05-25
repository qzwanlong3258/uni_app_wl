<template>
	<view>
		<image :src="img[0]" @load='imgshow' mode="widthFix" style="width: 100%;display: block;"></image>
		<view style="padding: 30rpx;">
			<view>{{item.name}}</view>
			<view class="starOne" style="margin-top: 5rpx;"></view>
		</view>
		<view @click="map" style="padding: 30rpx;display: flex;border-top:2rpx solid #F1F1F1 ;
			border-bottom:2rpx solid #F1F1F1 ;position: relative;">
			<view class="iconfont icondizhi" style="font-size: 30rpx;margin-right: 20rpx;"></view>
			<view class="address"  style="padding-right: 10rpx;">{{item.address}}</view>
			<view class="iconfont iconyou" style="position: absolute;right: 5rpx;top: 25rpx;"></view>
		</view>
		<view style="padding: 30rpx;"> 
			限时特惠
		</view>
		<view v-for="(item,index) in dataList" :key="index" style="margin: 0 30rpx 30rpx;display: flex;padding: 30rpx 0;height: 100rpx;background: rgba(255,255,244,1);">
			<view class="left" style="flex-basis: 160rpx;line-height: 100rpx;text-align: center;border-right:2rpx solid #000000 ;font-size: 28rpx;">
				礼品卷
			</view>
			<view class="mid" style="flex: 1;margin-left: 30rpx;">
				<view style="font-size: 24rpx;">{{item.describe}}</view>
				<view style="color: #666666;padding: 10rpx 0;font-size: 18rpx;">有效期：{{item.begin}} — {{item.end}}</view>
				<view style="color: #666666;font-size: 18rpx;">{{item.count}}人已领取</view>
			</view>
			<view class="right" style="flex-basis: 160rpx;display: flex;justify-content: center;align-items: center;">
				<!-- item.show&& -->
				<view v-if="item.show&&item.have==0" style="height: 60rpx ;width:140rpx;border-radius: 30rpx;background: #FFEA04;text-align: center;line-height: 60rpx;font-size: 24rpx;"@click="get(item)">领取</view>
				<view v-if="!item.show" style="height: 60rpx ;width:140rpx;border-radius: 30rpx;background: #FFEA04;text-align: center;line-height: 60rpx;font-size: 24rpx;">已过期</view>
				<view v-if="item.show&&item.have==1" style="height: 60rpx ;width:140rpx;border-radius: 30rpx;background: #FFEA04;text-align: center;line-height: 60rpx;font-size: 24rpx;">已领取</view>
			</view>
		</view>
		<view class="apptMeasureHome_ft">
			<view class="btn" @click="clickNavkefu">立即咨询</view>
		</view>
		
		<view class="mask" :style="{visibility: show ? 'visible' : 'hidden'}">
			<view class="mask-box">
				<image :src="img[2]" style="width: 100%;" mode="widthFix"></image>
				
				<image class="cross" data-tab="close" :src="img[3]" model="aspectFit" @click="handerCheckInChange"></image>
				
				<view style="font-size:40px;font-family:PingFangSC-Semibold,PingFang SC;color: #FFFFFF;position: absolute;left: 50%;transform: translateX(-48%);top: 100rpx;">{{dataL.num}} 
				<text style="font-size:38rpx;color: #FFFFFF;">元</text></view>
				<view style="color: #BB5520;font-size: 20rpx;position: absolute;left: 50%;transform: translateX(-48%);top: 220rpx;">{{dataL.describe}}</view>
				<view style="color: #FFBC44;font-size: 18rpx;position: absolute;left: 50%;transform: translateX(-48%);top: 420rpx;">有效期：{{dataL.begin}}-{{dataL.end}}</view>
				
				<view style='width: 280rpx;height: 100rpx;position: absolute;left: 50%;transform: translateX(-50%);top: 460rpx;' @click="linkToCoupon"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import {DECORATE_HOUSE,STAR,MASK_IMG} from '@/config/image.js';
import {makePhoneCall} from '@/config/package.js';
var QQMapWX = require('@/utils/qqmap-wx-jssdk.js')
import {  CROSS } from "@/config/image.js";
import {getCoupon ,postCoupon} from '@/api/decorateHome.js'
import {COUPON} from '@/config/router.js'
import {loadCoupon} from '@/api/decorateHome.js'

var _self;
export default {
	data() {
		return{
			img:[DECORATE_HOUSE,STAR,MASK_IMG,CROSS],
			show:false,
			item:{} ,//装企信息
			dataList:[],
			dataL:{},
			uuid:'',
			imgShow:false
		}
	},
	methods:{
		
		
		imgshow(){
			_self.imgShow=true
		},
		linkToCoupon(){
			
			loadCoupon().then(res=>{
				let a=res.list
				let e=JSON.stringify(a)
				uni.navigateTo({
					url:`${COUPON}?data=${e}` 
				})
			})
					
		},
		
		handerCheckInChange: async function(e) {
		
			this.show = !this.show
			this.getList(this.item)
		},
		
		clickNavkefu:function() {
			makePhoneCall({
				phone: "400-800-2005"
			})
		},
		get(e){
			let count=0
			count++
			if(count==1){
				this.show = !this.show
				_self.dataL=e
				
				let num= _self.dataL.describe.replace(/[^0-9]/ig,"")
				_self.dataL.num =num
				postCoupon({uuid:e.uuid})
			}
		},
		
		map(){
			let qqmapsdk = new QQMapWX({
				key: 'RXMBZ-V3XKW-EPHR7-R7B2O-S75AK-3TFHW'
			});
			qqmapsdk.geocoder({
			      address: this.item.address,
			      success: function(res) {
			        var latitude = res.result.location.lat
			        var longitude = res.result.location.lng
			        wx.openLocation({
			          latitude: latitude,
			          longitude: longitude,
			          name: res.result.title,
			          scale: 30
			        })
			      }
			    })
			
		},
		getTime:function(){
		
		var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		month >= 1 && month <= 9 ? (month = "0" + month) : "";
		day >= 0 && day <= 9 ? (day = "0" + day) : "";
		var timer = year + '-' + month + '-' + day ;
		return timer;
		},
		getList(e){
			getCoupon({uuid:e.uuid}).then(res=>{
				console.log(res)
				
				// _self.dataList=res.list
				_self.dataList=res.list.map(res=>{
					// console.log(Date.parse(res.end.replace('-', '/')))
					// console.log(new Date().getTime())
					if(Number(Date.parse(res.end.replace('-', '/')))<Number(Date.parse(this.getTime().replace('-', '/'))) ){
						return {
							...res,
							show:false
						}
					} else {
						return {
							...res,
							show:true
						}
					}
				})
				console.log(_self.dataList)
			})
		},
	},
	 onLoad(options) {
		 _self=this
		 this.item=JSON.parse(options.item) 
		 this.getList(this.item)
	 }
};
</script>

<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.starOne{
		
		background:url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
		background-position: -8rpx 0rpx;
		background-size:150rpx 260rpx ;
		height: 26rpx;
	}
	.address{
		overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
			font-size: 26rpx;
			color: #333333;
	}
	.apptMeasureHome_ft{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		/* margin-top: 20px; */
		
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
	.mask{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		left: 0;
		top: 0;
		
		z-index: 99;
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
	}
	.mask-box{
		width: 600rpx;
		height: 700rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		}
	.cross {
		
		width: 80rpx;
		height: 80rpx;
	}
</style>
