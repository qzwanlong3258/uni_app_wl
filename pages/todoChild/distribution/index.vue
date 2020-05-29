<template>
	<view class="distribution-box">
		<!-- <ljl-nav middle="member" :userInfo="userInfo" />
		<view class="showroom">
			<view class="top">
				<view class="item" v-for="(item, index) in showroom.top" :key="index"><ljl-showroom-item :infor="item" color="#333333" /></view>
				<button class="withdraw" @click="linkToWithdraw">提现</button>
			</view>
			<view class="bottom">
				<view class="item" v-for="(item, index) in showroom.bottom" :key="index"><ljl-showroom-item :infor="item" color="white" /></view>
			</view>
		</view> -->
	    <view class="distribution">
	    	<view class="distribution-nav " style="position: relative;">
				
				<image :src="img[2]" v-if="userInfo.level=='黄金会员'" style="position: absolute;right: 0;top: 0;width: 300rpx;" mode="widthFix"></image>
				<view style="position: absolute;width: 100%;height: 100%;">
	    		<view class="top">
	    			<view class="distribution-nav-top">
	    				<image :src="userInfo.avatarUrl" class="distribution-nav-top-img" mode="aspectFill">
	    			</view>
	    		</view>
	    		<view style="text-align: center;color: #000000;font-size: 22rpx;padding-bottom: 10rpx;font-family: FZLanTingKanHei-R-GBK;">{{userInfo.nickName?userInfo.nickName:WELCOME}}</view>
	    		<view style="text-align: center;color: #7C7312;font-size: 20rpx;letter-spacing: 0.5rpx;padding-bottom: 13rpx;font-family: FZLanTingKanHei-R-GBK;">{{userInfo.level}}</view>
				<view style="text-align: center;color: #7C7312;font-size: 24rpx;letter-spacing: 0.5rpx;padding-bottom: 54rpx;font-family: FZLanTingKanHei-R-GBK;">加入时间：{{userInfo.create_time|formatDate}}</view>
				<!-- <view class="box" style="padding-bottom: 20rpx;">
					<view class="box-left" style="color: #615808;font-family: Microsoft YaHei;letter-spacing: 0.5rpx;font-size: 26rpx;">未入账</view>
					<view class="box-mid" style="color: #615808;font-family: Microsoft YaHei;letter-spacing: 0.5rpx;font-size: 26rpx;margin: 0 30rpx;">已结算金额</view>
					<view class="box-right" style="color: #615808;font-family: Microsoft YaHei;letter-spacing: 0.5rpx;font-size: 26rpx;">已提现</view>
				</view>
				<view class="box" >
					<view class="box-left" style="color: #000000;font-family: Microsoft YaHei;letter-spacing: 0.5rpx;font-size: 34rpx;">0</view>
					<view class="box-mid" style="color: #000000;font-family: Microsoft YaHei;letter-spacing: 0.5rpx;font-size: 34rpx;margin: 0 10rpx;">0</view>
					<view class="box-right" style="color: #000000;font-family: Microsoft YaHei;letter-spacing: 0.5rpx;font-size: 34rpx;">0</view>
				</view> -->
				<view class="mine-text">
					<view style="flex: 0.3;"></view>
					<view style="flex: 1;display: flex;justify-content: center;align-content: center;">
						<view><image :src="img[0]" mode="widthFix" style="width: 40rpx;margin-right: 10rpx;"></image></view>
						<view @click="toCoupon">优惠券: {{couponNum}}张</view>
					</view>
					<!-- <view style="flex: 1;text-align: center;">余额(元) | 0</view> -->
					<view style="flex: 0.4;"></view>
					<view style="flex: 1;display: flex;justify-content: center;align-content: center;" @click="toScoreDetail">
						<view><image :src="img[1]" mode="widthFix" style="width: 40rpx;margin-right: 10rpx;"></image></view>
						<view>积分: {{integral?integral:0}}</view>
					</view>
					<!-- <view style="flex: 1;text-align: center;">积分 | {{integral?integral:0}}</view> -->
					<view style="flex: 0.3;"></view>
				</view>
				</view>
			</view>
		</view>
		<view class="menu" v-for="(item, index) in menuList" :key="index"><ljl-menu :infor="item" /></view>
		<view style="height: 20rpx;transform: translateY(-20rpx);z-index: 1;background: #FFFFFF;"></view>
	</view>
</template>

<script>
'use scrict';

import LjlNav from '@/components/LjlNav.vue';
import LjlShowroomItem from './components/LjlShowroomItem.vue';
import LjlMenu from '@/components/LjlMenu';
import { getStorage } from '@/utils/storage.js';
import * as imgs from '@/config/image.js';
import { HOME, CUSTOMER_LIST, PROMOTE_GOODS, WITHDRAW, POSTER ,TO_SCORE_DETAIL,COUPON} from '@/config/router.js';
import {formatDate} from '@/config/filter.js'
import { loadIntegral } from '@/api/tabbar/todo.js';
import {loadCoupon} from '@/api/decorateHome.js'
var _self;

export default {
	data() {
		return {
			userInfo:{},
			img:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
			showroom: {
				top: [{ title: '今日奖励', content: 0 }, { title: '待结算金额', content: 0 }, { title: '累计金额', content: 0 }],
				bottom: [{ title: '未入账', content: 0 }, { title: '已结算金额', content: 0 }, { title: '已提现', content: 0 }]
			},
			menuList: [
				{ title: '推广业绩',img:imgs.DIR_TITLE_ONE, list: [{ title: '会员', icon: imgs.DIR_VIP, href: CUSTOMER_LIST }, { title: '设计师', icon: imgs.DESIGNER, href: CUSTOMER_LIST },{ title: '客户', icon: imgs.DIR_KEHU, href: CUSTOMER_LIST } ] },
				{
					title: '推广工具',img:imgs.DIR_TITLE_TWO,
					list: [
						{ title: '专属海报', icon: imgs.DIR_NAV_ONE, href: POSTER },
						{ title: '推广商品', icon: imgs.DIR_NAV_TWO, href: PROMOTE_GOODS },
						{ title: '邀请会员', icon: imgs.DIR_NAV_THREE, href: `${POSTER}?title=邀请会员` },
						{ title: '邀请设计师', icon: imgs.DIR_NAV_FOUR, href: `${POSTER}?title=邀请设计师` },
						{ title: '邀请客户', icon: imgs.DIR_NAV_FIVE, href: `${POSTER}?title=邀请客户` },
						{ title: '首页', icon: imgs.DIR_NAV_SIX, href: HOME }
					]
				}
			],
			img:[imgs.RECOMMEND_COUPON,imgs.RECOMMEND_POINT,imgs.VIP],
			integral:0,
			//优惠卷
			couponNum:0,
			couponList:[]
			
			
			
		};
	},
	filters:{
		formatDate
	},
	onShow() {
		this.loadIntegral();
	},
	onLoad() {
		_self=this
		this.userInfo = getStorage('userInfo')
		this.loadIntegral();
		this.loadCouponNext()
	},
	methods: {
		// 去积分详情
		toScoreDetail(){
			uni.navigateTo({
				url:TO_SCORE_DETAIL
			})
		},
		linkToWithdraw() {
			uni.navigateTo({
				url: WITHDRAW
			});
		},
		/**
		 * 加载积分
		 */
		loadIntegral: function() {
			loadIntegral().then(res => {
				// console.log(res)
				_self.integral = Number(res.integral);
			});
		},
		
		
		//去优惠卷
		toCoupon(){
			let e=JSON.stringify(this.couponList)
			uni.navigateTo({
				url:`${COUPON}?data=${e}` 
			})
		},
		/**
		 * 加载优惠卷
		 */
		loadCouponNext(){
			loadCoupon().then(res=>{
				if(res.list){
					let num =0
					res.list.map(reso=>{
						let e = reso.volume.split(',')
						num+=e.length
						_self.couponNum=num
					})
					_self.couponList=res.list
				}
				
			})
		}
		
	},
	components: {
		LjlNav,
		LjlShowroomItem,
		LjlMenu
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
.distribution-box {
	background: #FFFFFF;
	height: 100rpx;
	.showroom {
		width: 700rpx;
		height: 200rpx;
		margin: 0 auto;
		transform: translateY(-90rpx);
		border-radius: 15rpx;
		> view {
			width: 100%;
			height: 150rpx;
			display: flex;
		}
		.top {
			background: white;
			border-top-left-radius: 15rpx;
			border-top-right-radius: 15rpx;
			.withdraw {
				color: white;
				background: #6bb36a;
				width: 130rpx;
				height: 50rpx;
				font-size: 28rpx;
				line-height: 50rpx;
				border-radius: 25rpx;
				margin: auto 0;
			}
		}
		.bottom {
			background: #283448;
			border-bottom-left-radius: 15rpx;
			border-bottom-right-radius: 15rpx;
		}
		.item {
			width: 180rpx;
			height: 100%;
		}
	}
	.menu {
		
		box-sizing: border-box;
		
	}
	.distribution{
		
		padding: 24rpx 0 0 0;
	}
	.distribution-nav{
		background-color: #FCE77A;
		height: 400rpx;
		margin:0 30rpx;
		padding: 27rpx 0 0;
	}
	.top{
		height: 100rpx;
		padding-bottom: 19rpx;
		
	}
	.distribution-nav-top{
		width: 105rpx;
		height: 105rpx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
		
	}
	.distribution-nav-top-img{
		width: 120rpx;
		height: 120rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.box{
		height: 20rpx;
		line-height: 20rpx;
		display: flex;
		font-size: 26rpx;
		margin:  10rpx 60rpx;
	}
	.box-left{
		flex:1;
		text-align: center;
	}
	.box-mid{
		flex:1;
		text-align: center;
	}
	.box-right{
		flex: 1;
		text-align: center;
	}
	.mine-text{
		height: 40rpx;
		display: flex;
		font-size: 26rpx;
		margin-top: 20rpx;
	}
}
</style>
