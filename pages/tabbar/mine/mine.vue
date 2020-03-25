<template>
	<view class="mine">
		<view class="mine-nav ">
			<view class="top">
				<view class="mine-nav-top">
					<image :src="userInfo.avatarUrl" class="mine-nav-top-img" mode="aspectFill">
				</view>
			</view>
			<view style="text-align: center;color: #000000;font-size: 10px;">WELCOME</view>
			<view class="btn-box"> 
				<view style="flex: 1;"></view>
				<view style="flex: 1;" class="btn" @click="linkToUrl('签到日历')">签到日历</view>
				<view style="flex: 1;font-size: 10px;text-align: center;line-height: 20px;margin: 0 10px;"> 签到有礼</view>
				<view style="flex: 1;" class="btn" @click="linkToUrl('黄金会员')">黄金会员</view>
				<view style="flex: 1;"></view>
			</view>
			<view class="mine-pic">
				<view style="flex: 1;text-align: center;"><image :src="img[0]" mode="widthFix" ></image></view>
				<view style="flex: 1;text-align: center;"><image :src="img[1]" mode="widthFix"></image></view>
			</view>
			<view class="mine-text">
				<view style="flex: 1;text-align: center;">余额(元) | 99</view>
				<view style="flex: 1;text-align: center;">积分 | 200</view>
			</view>
			
		</view>
		<view class="schedule">
			<view style="flex: 1;color: #333333;font-size: 13px;text-align: center;font-weight: Regular;">我的申请记录</view>
			<view style="flex: 1;"></view>
			<view style="flex: 1;position: relative;font-size: 10px;color: #666666;text-align: center;margin-right: 10px;" @click="tolinkrecord(0)">查看我的申请记录 <view class="iconfont  iconyou iconclass" ></view></view>
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
		<view class="mine-link"  @click="linkToUrl('角色切换')">
			<image :src="imgNav[3]" mode="widthFix"></image><text>角色切换</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToWork()">
			<image :src="imgNav[3]" mode="widthFix"></image><text>我的工作</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import { MINE_MONEY, MINE_INTEGRAL, MINE_MEASURE, MINE_LOAN, MINE_RECOMMEND, MINE_INTEGRAL_LOGO, MINE_SHARE_CENTER, MINE_ADRESS} from '@/config/image.js';
import {OPENMEMBER, CALENDER, APPTRECORD,RECOMMENDED, SHOP, DISTRIBUTION, ADDRESS_INDEX, ORDER_LIST, SWAPROLE, MYWORK,RECOMMENDCENTER} from '@/config/router.js';
import { getStorage } from '@/utils/storage.js';
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
		}
		
	},
	async onLoad() {
		_self =this;
		_self.userInfo = getStorage('userInfo');
		this.getData(this.toYear+"-"+this.toMonth);
	}
};
</script>

<style scoped>
	.mine{
		background: #FFFFFF;
		position: absolute;
		height: 100%;
		width: 100%;
		padding: 10px 0;
	}
	.mine-nav{
		background-color: #FCE77A;
		height: 165px;
		margin:0 10px;
	}
	.top{
		height: 120rpx;
		padding: 10px 0 2px;
	}
	.mine-nav-top{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	.mine-nav-top-img{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.btn-box{
		height: 20px;
		display: flex;
		margin-top: 5px;
	}
	.btn{
		color: #000000;
		text-align: center;
		background-color: #F9D133;
		border-radius: 10rpx;
		font-size: 24rpx;
		line-height: 20px;
		box-shadow: 0 4rpx 0 0  rgba(0,0,0,0.15);
	}
	.mine-pic{
		height: 20px;
		display: flex;
		margin-top: 10px;
	}
	.mine-pic image{
		width: 15px;
	}
	.mine-text{
		height: 20px;
		display: flex;
		font-size: 12px;
		margin-top: 3px;
	}
	.schedule{
		height: 35px;
		display: flex;
		line-height: 35px;
		border-bottom: 1px solid rgba(241,241,241,1);;
	}
	.iconclass{
		position: absolute;
		right: 0;
		top: 0;
	}
	.schedule_logo{
		display: flex;
		font-size: 11px;
		font-weight: Regular;
		color: #333333;
		padding: 10px 0;
		border-bottom: 3px solid #F1F1F1;
		
	}
	.schedule_logo image{
		width: 30px;
	}
	.mine-link{
		height: 40px;
		border-bottom: 1px solid rgba(241,241,241,1);
		line-height: 40px;
		position: relative;
	}
	.mine-link image{
		width: 15px;
		margin-left: 15px;
		vertical-align: middle;
	}
	.mine-link text{
		color: #333333;
		font-weight:Regular ;
		font-size: 12px;
		margin-left: 10px;
		vertical-align: middle;
	}
	.mine-link .iconclass{
		font-size: 15px;
		color: #666666;
		right: 10px;
	}
</style>
