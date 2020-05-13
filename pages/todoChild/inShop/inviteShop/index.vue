<template>
	<view>
		<view class="scheduleCard" >
			<view class="scheduleCard-top" style="height:150rpx;">
				<view class="scheduleCard-top-left">
					<image :src="userInfo.avatarUrl" class="scheduleCard-top-left-img" mode="aspectFill">
				</view>
				<view class="scheduleCard-top-mid">
					<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx;color: #333333;">{{userInfo.nickName}}</view>
					<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;color:#333333">{{userInfo.phone}}</view>
				</view>
				<view class="scheduleCard-top-right">
					
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 600rpx;border: 2rpx solid #979797;">
				<image :src="code" mode=""></image>
			</view>
			<view style="color: #999999;text-align: center;font-size: 28rpx;margin: 10px 0;">扫码注册成为商户，非客为您提供更优质服务</view>
			<view style="color: #999999;text-align: center;font-size: 28rpx;margin: 10px 0;">邀请人编号 <text style="color: #333333;">{{num}}</text></view>
		</view>
		<tki-qrcode ref="qrcode" :val="val" :size="300" background="#fff" foreground="#1394DA" pdground="#000" :onval="false" :icon="imglogo" :iconSize="30"
		 :loadMake="false" @result="qrR" :show="false"></tki-qrcode>
	</view>
</template>

<script>
'use strict';
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
import { getStorage } from '@/utils/storage.js';
import { COMPANY_LOGO} from '@/config/image.js';


var _self;
export default {
	component:{
		tkiQrcode
	},
	data() {
		return{
			userInfo:{
				// avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				// nickName:'李三',
				// phone:'广东 深圳'
			},
			val: 'https://feiaizn.com:1001/linkcode?id=1',
			code:'',
			num:0,
			imglogo:COMPANY_LOGO
		}
	},
	methods:{
		saveToAlbum() {
			this.$refs.qrcode._makeCode();
		},
		qrR(path) {
			_self.code=path
			
			
		},
		
	},
	 onLoad() {
		_self =this;
		_self.userInfo = getStorage('userInfo');
		_self.num=Number(_self.userInfo.id) + 1000
		// let e = '1'+'_'+_self.userInfo.id+'inShop'
		let e = '1'+'_'+'2'
		_self.val=`https://feiaizn.com:1001/linkcode?id=${e}`
		console.log(_self.val)
		console.log(this.num)
		// this.saveToAlbum()
		uni.getImageInfo({
		       src: COMPANY_LOGO,
		       success: (res)=> {
			console.log(res.path)
			_self.imglogo=res.path
			setTimeout(()=>{
							this.saveToAlbum()
						},100)
			 
		}
		})
	}
};
</script>

<style scoped>
	.scheduleCard{
		margin: 48rpx 15rpx;
		height: 860rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 4rpx 4rpx  rgba(153,153,153,0.3);
		overflow: hidden;
		padding: 20rpx;
	}
	.scheduleCard-top{
		padding-bottom: 10rpx;
		display: flex;
	}
	.scheduleCard-top-left{
		flex-basis: 120rpx;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.scheduleCard-top-left image{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.scheduleCard-top-mid{
		flex: 1;
		margin-left: 10px;
		
	}
	.scheduleCard-top-right{
		flex-basis: 180rpx;
	}
	.scheduleCard-bottom image{
		width: 100%;
		height: 100%;
	}
</style>
