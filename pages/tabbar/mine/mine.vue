<template>
	<view class="mine" v-if="show">
		<view class="mine-nav ">
			<view class="top">
				<view class="mine-nav-top">
					<image :src="userInfo.avatarUrl" class="mine-nav-top-img" mode="aspectFill" v-if='userInfo.avatarUrl'>
					<image :src="imglogo" class="mine-nav-top-img" mode="aspectFill" v-if='!userInfo.avatarUrl'>
				</view>
			</view>
			<!-- <view style="text-align: center;color: #000000;font-size: 10px;">WELCOME</view> -->
			<view class="btn-box"> 
				<view style="flex: 0.1;"></view>
				<view style="flex: 1;" class="btn" @click="linkToUrl('签到日历')">签到日历</view>
				<view style="flex: 0.8;font-size: 28rpx;text-align: center;margin: 0 20rpx;"> 
				 <view style="height: 50%;line-height: 38rpx;">签到有礼</view> 
				 <view style="text-align: center;color: #D3B86C;font-size: 16rpx;height: 50%;line-height: 34rpx;">WELCOME</view>
				</view>
				<view style="flex: 1;" class="btn" @click="linkToUrl('黄金会员')">黄金会员</view>
				<view style="flex: 0.1;"></view>
			</view>
			<!-- <view class="mine-pic">
				<view style="flex: 1;text-align: center;"><image :src="img[0]" mode="widthFix" ></image></view>
				<view style="flex: 1;text-align: center;"><image :src="img[1]" mode="widthFix"></image></view>
			</view> -->
			<view class="mine-text">
				<view style="flex: 0.1;"></view>
				<view style="flex: 1;text-align: center;">余额(元) | 0</view>
				<view style="flex: 0.8;"></view>
				<view style="flex: 1;text-align: center;">积分 | 0</view>
				<view style="flex: 0.1;"></view>
			</view>
			
		</view>
		<view class="schedule">
			<view style="flex: 1;color: #333333;font-size: 26rpx;text-align: center;font-weight: Regular;">我的申请记录</view>
			<view style="flex: 1;"></view>
			<view style="flex: 1;position: relative;font-size: 20rpx;color: #666666;text-align: center;margin-right: 20rpx;" ><view class="iconfont  iconyou iconclass" ></view></view>
		</view>
		<view class="schedule_logo">
			<view style="flex: 1;justify-content: center;" @click="tolinkrecord(0)"> 
				<view style="text-align: center;"><image :src='imgMeaLoan[0]' mode="widthFix"></image></view>
				<view style="text-align: center;">约量房</view>
			</view>
			<view style="flex: 1;justify-content: center;" @click="tolinkrecord(1)">
				<view style="text-align: center;"><image :src='imgMeaLoan[1]' mode="widthFix"></image></view>
				<view style="text-align: center;">装修分期</view>
			</view>
		</view>
		<view class="mine-link" @click="linkToUrl('推荐中心')">
			<image :src="imgNav[0]" mode="widthFix"></image><text >推荐中心</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToshop()">
			<image :src="imgNav[1]" mode="widthFix"></image><text>积分商城</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToUrl('分销中心')">
			<image :src="imgNav[2]" mode="widthFix"></image><text>分销中心</text>
			<view class="iconfont  iconyou iconclass" ></view><view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToUrl('地址管理')">
			<image :src="imgNav[3]" mode="widthFix"></image><text>地址管理</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToUrl('角色切换')" v-if="role">
			<image :src="imgNav[3]" mode="widthFix"></image><text>角色切换</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToWork()" v-if="index === 1">
			<image :src="imgNav[3]" mode="widthFix"></image><text>面签任务</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToPhoto()" v-if="index === 2">
			<image :src="imgNav[3]" mode="widthFix"></image><text>拍照任务</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import { MINE_MONEY, MINE_INTEGRAL, MINE_MEASURE, MINE_LOAN, MINE_RECOMMEND, MINE_INTEGRAL_LOGO, MINE_SHARE_CENTER, MINE_ADRESS, TOUXIANG_LOGO} from '@/config/image.js';
import {OPENMEMBER, CALENDER, APPTRECORD,RECOMMENDED, SHOP, DISTRIBUTION, ADDRESS_INDEX, ORDER_LIST, SWAPROLE, MYWORK,RECOMMENDCENTER,MYWORK_PHOTO} from '@/config/router.js';
import { getStorage } from '@/utils/storage.js';
const { AUTH } = require('../../../config/router.js');

var _self;
export default {
	components:{	
	},
	data() {
		return{
			userInfo:{
				// avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				// nickName:'李三',
				// phone:'广东 深圳'
			},
			img:[MINE_MONEY,MINE_INTEGRAL],
			imgMeaLoan:[MINE_MEASURE,MINE_LOAN],
			imgNav:[MINE_RECOMMEND,MINE_INTEGRAL_LOGO,MINE_SHARE_CENTER,MINE_ADRESS],
			index:'',
			role:'',
			imglogo:TOUXIANG_LOGO,
			show:false
			
		}
	},
	methods:{
		tolinkrecord(e){
			uni.navigateTo({
				url:`${APPTRECORD}?num=${e}`
			})
		},
		linkChoose(value){
			switch(value) {
				case "签到日历": return CALENDER;
				case "黄金会员": return OPENMEMBER;
				case "推荐中心": return RECOMMENDCENTER;
				case "分销中心": return DISTRIBUTION;
				case "地址管理": return `${ADDRESS_INDEX}?operating=updateAddress`;
				case "角色切换": return SWAPROLE;
			}
		},
		linkToUrl(e){
			uni.navigateTo({
				url:this.linkChoose(e)
			})
		},
		linkToshop(){
			uni.switchTab({
				url:SHOP
			})
		},
		linkToWork(){
			uni.navigateTo({
				url:MYWORK
			})
		},
		linkToPhoto(){
			uni.navigateTo({
				url:MYWORK_PHOTO
			})
		}
	},
	async onLoad() {
		
			const isLogin = getStorage('isLogin');
			if (isLogin) {
				this.show=true
				
			} else {
			
				let pages = getCurrentPages();
				if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
				uni.reLaunch({
					url: `${AUTH}?name=${'mine'}`
				});	
				}
		_self =this;
		_self.userInfo = getStorage('userInfo');
		// this.getData(this.toYear+"-"+this.toMonth);
		_self.index =getStorage('index')
		_self.role =getStorage('userInfo').role[0]
		console.log(_self.role)
	},
	onShow() {
		_self.userInfo = getStorage('userInfo');
		_self.index =getStorage('index')
		_self.role =getStorage('userInfo').role[0]
	}
};
</script>

<style scoped>
	.mine{
		background: #FFFFFF;
		position: absolute;
		height: 100%;
		width: 100%;
		padding: 20rpx 0;
	}
	.mine-nav{
		background-color: #FCE77A;
		height: 330rpx;
		margin:0 20rpx;
	}
	.top{
		height: 120rpx;
		padding: 20rpx 0 4rpx;
	}
	.mine-nav-top{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
		border: 6rpx solid #F7B414;
		padding: 10rpx;
		background: #FFFFFF;
	}
	.mine-nav-top-img{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -8rpx;
		margin-left: -8rpx;
	}
	.btn-box{
		height: 70rpx;
		display: flex;
		margin-top: 40rpx;
	}
	.btn{
		color: #FFFFFF;
		text-align: center;
		background-color: #FAB310;
		border-radius: 10rpx;
		font-size: 26rpx;
		line-height: 70rpx;
		/* box-shadow: 0 4rpx 0 0  rgba(0,0,0,0.15); */
	}
	.mine-pic{
		height: 40rpx;
		display: flex;
		margin-top: 20rpx;
	}
	.mine-pic image{
		width: 30rpx;
	}
	.mine-text{
		height: 40rpx;
		display: flex;
		font-size: 26rpx;
		margin-top: 20rpx;
	}
	.schedule{
		height: 70rpx;
		display: flex;
		line-height: 70rpx;
		border-bottom: 2rpx solid rgba(241,241,241,1);;
	}
	.iconclass{
		position: absolute;
		right: 0;
		top: 0;
	}
	.schedule_logo{
		display: flex;
		font-size: 22rpx;
		font-weight: Regular;
		color: #333333;
		padding: 20rpx 0;
		border-bottom: 6rpx solid #F1F1F1;
		
	}
	.schedule_logo image{
		width: 60rpx;
	}
	.mine-link{
		height: 80rpx;
		border-bottom: 2rpx solid rgba(241,241,241,1);
		line-height: 80rpx;
		position: relative;
	}
	.mine-link image{
		width: 30rpx;
		margin-left: 30rpx;
		vertical-align: middle;
	}
	.mine-link text{
		color: #333333;
		font-weight:Regular ;
		font-size: 24rpx;
		margin-left: 20rpx;
		vertical-align: middle;
	}
	.mine-link .iconclass{
		font-size: 30rpx;
		color: #666666;
		right: 20rpx;
	}
</style>
