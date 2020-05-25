<template>
	
	<view class="mine" v-if="show">
		<view :hidden='imgShow'>
			<!-- <image :src="jifenPic" mode="widthFix" style="width: 100%;" @click="jifenLinkTo"></image> -->
		<view class="mine-nav" style="position: relative;">
			<image :src="img[4]" v-if="userInfo.level=='黄金会员'" style="position: absolute;right: 0;top: 0;width: 300rpx;" mode="widthFix"></image>
			<view style="position: absolute;width: 100%;height: 100%;">
				
			
			
			<view class="top">
				<view class="mine-nav-top">
					<image :src="userInfo.avatarUrl"  @load='imgshow' class="mine-nav-top-img" mode="aspectFill" v-if='userInfo.avatarUrl'>
					<image :src="imglogo" class="mine-nav-top-img" mode="aspectFill" v-if='!userInfo.avatarUrl'>
				</view>
			</view>
			<!-- <view style="text-align: center;color: #000000;font-size: 10px;">WELCOME</view> -->
			<view style="height: 68rpx;line-height: 68rpx;text-align: center;font-size: 28rpx;margin-top: 10rpx;">{{userInfo.nickName?userInfo.nickName:'WELCOME'}}</view>
			<view class="btn-box"> 
				<view style="flex: 0.1;"></view>
				<view style="flex: 1;" class="btn" @click="linkToUrl('签到日历')">签到有礼</view>
				<view style="flex: 0.8;font-size: 28rpx;text-align: center;margin: 0 20rpx;"> 
				 <view style="height: 50%;line-height: 68rpx;"></view> 
				 <view style="text-align: center;color: #D3B86C;font-size: 16rpx;height: 50%;line-height: 34rpx;"> </view>
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
				<view style="flex: 1;display: flex;justify-content: center;align-content: center;">
					<view><image :src="img[2]" mode="widthFix" style="width: 40rpx;margin-right: 10rpx;"></image></view>
					<view @click="toCoupon">优惠券: {{couponNum}}张</view>
				</view>
				<!-- <view style="flex: 1;text-align: center;">余额(元) | 0</view> -->
				<view style="flex: 0.8;"></view>
				<view style="flex: 1;display: flex;justify-content: center;align-content: center;" @click="toScoreDetail">
					<view><image :src="img[3]" mode="widthFix" style="width: 40rpx;margin-right: 10rpx;"></image></view>
					<view>积分: {{integral?integral:0}}</view>
				</view>
				<!-- <view style="flex: 1;text-align: center;">积分 | {{integral?integral:0}}</view> -->
				<view style="flex: 0.1;"></view>
			</view>
			</view>
		</view>
		
		<!-- <view class="schedule">
			<view style="flex: 1;color: #333333;font-size: 26rpx;text-align: center;font-weight: Regular;">我的申请记录</view>
			<view style="flex: 1;"></view>
			<view style="flex: 1;position: relative;font-size: 20rpx;color: #666666;text-align: center;margin-right: 20rpx;" ><view class="iconfont  iconyou iconclass" ></view></view>
		</view>
		<view class="schedule_logo">
			<view style="flex: 1;justify-content: center;" @click="tolinkrecord(0)"> 
				<view style="text-align: center;"><image :src='imgMeaLoan[0]' mode="widthFix"></image></view>
				<view style="text-align: center;">约量房</view>
			</view> -->
			<!-- <view style="flex: 1;justify-content: center;" @click="tolinkrecord(1)">
				<view style="text-align: center;"><image :src='imgMeaLoan[1]' mode="widthFix"></image></view>
				<view style="text-align: center;">装修分期</view>
			</view> -->
		<!-- </view> -->
		<view class="mine-link" @click="linkToUrl('申请记录')">
			<image :src="imgNav[6]"  mode="aspectFill" style="height: 40rpx;"></image><text >申请记录</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link" @click="linkToUrl('推荐中心')">
			<image :src="imgNav[0]"  mode="widthFix"></image><text >推荐中心</text>
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
		<view class="mine-link"  @click="linkToUrl('设计师认证')">
			<image :src="imgNav[4]" mode="aspectFill" style="height: 40rpx;"></image><text>设计师认证</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToCall()">
			<image :src="imgNav[7]" mode="aspectFill" style="height: 40rpx;"></image><text>我的客服</text>
			<view class="iconfont  iconyou iconclass" ></view>
		</view>
		<view class="mine-link"  @click="linkToUrl('角色切换')" v-if="role">
			<image :src="imgNav[5]" mode="widthFix" ></image><text>角色切换</text>
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
	</view>
</template>

<script>
'use strict';
import { MINE_MONEY, MINE_INTEGRAL, MINE_MEASURE, MINE_LOAN, MINE_RECOMMEND, MINE_INTEGRAL_LOGO, MINE_SHARE_CENTER, MINE_ADRESS, TOUXIANG_LOGO,JIFEN_PIC,MINE_DESIGER,MINE_ROLE_CHANGE,RECOMMEND_COUPON,RECOMMEND_POINT,MINE_RECORD,MINE_KEFU,VIP} from '@/config/image.js';
import {OPENMEMBER, CALENDER, APPTRECORD,RECOMMENDED, SHOP, DISTRIBUTION, ADDRESS_INDEX, ORDER_LIST, SWAPROLE, MYWORK,RECOMMENDCENTER,MYWORK_PHOTO,TO_WEB,TO_DESGER,TO_SCORE_DETAIL,COUPON} from '@/config/router.js';
import { getStorage ,setStorage} from '@/utils/storage.js';
const { AUTH } = require('../../../config/router.js');
import { loadIntegral } from '@/api/tabbar/todo.js';
import * as home from "@/api/tabbar/home.js";
import {getUserRole ,getMember} from "@/api/auth.js";
import {loadCoupon} from '@/api/decorateHome.js'
import {makePhoneCall} from '@/config/package.js';





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
			img:[MINE_MONEY,MINE_INTEGRAL,RECOMMEND_COUPON,RECOMMEND_POINT,VIP],
			imgMeaLoan:[MINE_MEASURE,MINE_LOAN],
			imgNav:[MINE_RECOMMEND,MINE_INTEGRAL_LOGO,MINE_SHARE_CENTER,MINE_ADRESS,MINE_DESIGER,MINE_ROLE_CHANGE,MINE_RECORD,MINE_KEFU],
			index:'',
			role:'',
			imglogo:TOUXIANG_LOGO,
			show:false,
			imgShow:false,
			integral:0,
			jifenPic:JIFEN_PIC,//积分协议照片
			jifen:'',
			//优惠卷
			couponNum:0,
			couponList:[]
			
		}
	},
	
	methods:{
		linkToCall:function() {
			makePhoneCall({
				phone: "400-800-2005"
			})
		},
		// 去积分详情
		toScoreDetail(){
			uni.navigateTo({
				url:TO_SCORE_DETAIL
			})
		},
		//去优惠卷
		toCoupon(){
			let e=JSON.stringify(this.couponList)
			uni.navigateTo({
				url:`${COUPON}?data=${e}` 
			})
		},
		jifenLinkTo(){
			let ch = "/";
			// var str = "这是一/个变量，这是一个变量";
			let a = this.jifen.replace(new RegExp(ch,'g'),"!");
			let e = a.replace(":", "*")
			// let e= this.jifen
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
		imgshow(){
			_self.imgShow=true
		},
		tolinkrecord(e){
			uni.navigateTo({
				url:`${APPTRECORD}?num=${e}`
			})
		},
		linkChoose(value){
			switch(value) {
				case "签到日历": return CALENDER;
				case "黄金会员": return OPENMEMBER;
				case "推荐中心": return RECOMMENDED;
				case "分销中心": return DISTRIBUTION;
				case "地址管理": return `${ADDRESS_INDEX}?operating=updateAddress`;
				case "角色切换": return SWAPROLE;
				case "设计师认证": return TO_DESGER;
				case "申请记录": return `${APPTRECORD}?num=${0}`;
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
		/**
		 * 加载优惠卷
		 */
		loadCouponNext(){
			loadCoupon().then(res=>{
				if(res.list){
					_self.couponNum=res.list.length
					_self.couponList=res.list
				}
				
			})
		}
	},
	onShow() {
		this.loadIntegral();
		this.loadCouponNext()
	},
	async onLoad() {
		//登录
		_self =this;
			const isLogin = getStorage('isLogin');
			if (isLogin) {
				_self.show=true
				
				_self.userInfo = getStorage('userInfo');
				// this.getData(this.toYear+"-"+this.toMonth);
				_self.index =getStorage('index')
				let e = await getUserRole()
				console.log(e)
				
				let card = (await getMember()).card
				var userNew={
					..._self.userInfo,
				}
				if(card){
					if(card.bdate&&card.edate<new Date().getTime()){
						userNew.state=1
					}
					if(card.bdate&&card.edate>new Date().getTime()){
						userNew.level ="黄金会员"
						userNew.cardId =card.id
					}else{
						userNew.level ="普通会员"
					}
				} else{
					userNew.level ="普通会员"
				}
				
				if(e.roleName){
					_self.role =e.roleName.split(',')
					
					userNew.role=e.roleName.split(',')
					// for(let i =0;i<userNew.role.length;i++){
					// 	if(userNew.role[i]=='黑卡会员'){
					// 		userNew.level ="黄金会员"
					// 	}
					// 	userNew.level ="普通会员"
					// }
					// console.log(bdate)
					// console.log(card.edate)
					// console.log(new Date().getTime())
					
					setStorage('userInfo',userNew);
				} else {
					_self.role =[]
					// let userNew={
					// 	..._self.userInfo,	
					// }
					userNew.role=[]
					// for(let i =0;i<userNew.role.length;i++){
					// 	if(userNew.role[i]=='黑卡会员'){
					// 		userNew.level ="黄金会员"
					// 	}
					// 	userNew.level ="普通会员"
					// }
					// if(card){
					// 	if(card.bdate&&card.edate<new Date().getTime()){
					// 		userNew.state=1
					// 	}
					// 	if(card.bdate&&card.edate>new Date().getTime()){
					// 		userNew.level ="黄金会员"
					// 		userNew.cardId =card.id
					// 	}else{
					// 		userNew.level ="普通会员"
					// 	}
					// } else{
					// 	userNew.level ="普通会员"
					// }
					
					setStorage('userInfo',userNew);
				}
				
				console.log(_self.role)
				//
				this.loadIntegral();
				
				this.loadCouponNext()
				
				_self.userInfo = getStorage('userInfo');
				// home.loadHomeCarousel({type:4}).then(res => {
				// 			this.jifen = res.list.find(item=>item.url=='积分协议').img;
							
				// 		});
				
				
				
			} else {
			
				let pages = getCurrentPages();
				if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
				uni.reLaunch({
					url: `${AUTH}?name=${'mine'}`
				});	
				}
		
	},
	async onShow() {
		_self.userInfo = getStorage('userInfo');
		_self.index =getStorage('index')
		let e = await getUserRole()
		this.loadIntegral();
		if(e.roleName){
			_self.role =e.roleName.split(',')
		}
			
		
		
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.mine{
		background: #FFFFFF;
		
		padding: 20rpx 0;
	}
	.mine-nav{
		
		height: 400rpx;
		background-color: #FCE77A;
		margin:0 20rpx;
	}
	/* .nav-bg{
		background-image: url('https://www.feiaizn.com/images/20200525112629_v.png');
		
		background: no-repeat;
		 background-size: 300rpx 372rpx;
		 background-size: 20rpx 21rpx;
		 background-position: -1000%  -1000%;
		 background-color: #FCE77A;
		 
	} */
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
		/* padding: 10rpx; */
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
		margin-top: 10rpx;
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
		border-bottom: 6px solid #F1F1F1;
		
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
