<template>
	<view style="padding: 60rpx 0;">
		<view v-for="(item,index) in list" :key="index" style="background: #FFFFFF;padding:20rpx 30rpx;">
			<view style="height: 60rpx;line-height: 60rpx;border-bottom: 2rpx solid #F1F1F1;display: flex;font-size: 30rpx;">
				<image :src="item.logo" style="margin: 0 20rpx;width: 60rpx;height: 60rpx;vertical-align: middle;" mode="aspectFit"></image>
				<view>{{item.name}}</view>
			</view>
		<view class="box" v-for="(items,index) in item.volume" :key="index">
			
			<image :src="img[0]" mode="widthFix"></image>
			<view class="bg">
				<!-- <view style="position: absolute;font-size: 15rpx;color: #FFFFFF;left: 20rpx;bottom: 5rpx;">{{item.uuid}}</view> -->
				
				<view class="left" style="flex-basis: 200rpx;text-align: center;line-height: 180rpx;font-size: 52rpx;color: #FFEA04;">￥{{items.num}}</view>
				<view class="mid" style="padding-top: 60rpx ;flex: 1;" @click="qaz(items)">
					<view class="mid-top" style="color: #FFFFFF;font-size: 24rpx;margin-bottom: 10rpx;">{{items.describe}}</view>
					<view class="mid-bot" style="color: #79758A;font-size: 18rpx;">{{items.begin}}-{{items.end}}</view>
				</view>
				<view :hidden="items.state=='2'" class="right" style="flex-basis: 170rpx;text-align: center;line-height: 180rpx;font-size: 26rpx;color: #FFFFFF;" :data-id='items.uuid'  @click="useCoupon">去使用</view>
				<view :hidden="items.state=='1'" class="right" style="flex-basis: 170rpx;text-align: center;line-height: 180rpx;font-size: 26rpx;color: #FFFFFF;">已使用</view>
			</view>
		</view>
		</view>
		<tki-qrcode ref="qrcode" :val="val" :size="1000" background="#fff" foreground="#1394DA" pdground="#000" :onval="false" 
		 :loadMake="false" @result="qrR" :show="false"></tki-qrcode>
		
		<null-data v-if="!list.length" class="nullData_view" />
		<view class="mask" :style="{visibility: show ? 'visible' : 'hidden'}">
			<view class="mask-box">
				<image :src="code" style="width: 100%;" mode="widthFix"></image>
				
				<image class="cross" data-tab="close" :src="img[1]" model="aspectFit" @click="handerCheckInChange"></image>
				
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
'use strict';
import {COUPON_BG,CROSS,COMPANY_LOGO} from '@/config/image.js'
import NullData from '@/components/NullData.vue';
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
import {loadCoupon} from '@/api/decorateHome.js'


		
var _self
export default {
	components:{
		NullData,
		tkiQrcode
	},
	data() {
		return{
			img:[COUPON_BG,CROSS,COMPANY_LOGO],
			list:[],
			val: '',
			code:'',
			show:false,
			imglogo:''
		}
	},
	methods:{
		qaz(e){
			console.log(e)
		},
		saveToAlbum() {
			this.$refs.qrcode._makeCode();
			_self.show = !_self.show
		},
		qrR(path) {
			_self.code=path
			
			
		},
		useCoupon(e){
			console.log(e)
			let c=e.currentTarget.dataset.id
			console.log(2121)
			let count = 0
			count++
			if(count==1){
				_self.val='https://www.feiaizn.com/xj/index.html'+'?code='+c
				// console.log(_self.val)
				// uni.getImageInfo({
				//        src: COMPANY_LOGO,
				//        success: (res)=> {
				// 	console.log(res.path)
				// 	_self.imglogo=res.path
				// 	setTimeout(()=>{
				// 					this.saveToAlbum()
				// 				},100)
					 
				// }
				// })
				setTimeout(()=>{
									this.saveToAlbum()
								},100)
				// this.saveToAlbum()
			}
			
		},
		loadCouponNext(){
			loadCoupon().then(res=>{
				if(res.list){
					
					 this.getList(res.list)
				}
				
			})
		},
		handerCheckInChange: async function(e) {
		
			this.show = !this.show
			
			
			this.loadCouponNext()
			// this.getList(this.item)
		},
		arrayToObj(arr){
		 
		    var obj = {};
		    for(var i = 0; i < arr.length; i++){
		        obj[i] = arr[i];
		    }
		},


		getList(e){
			
			console.log(e)
			_self.list=e.map(res=>{
				let volume = res.volume.split(',')
				
				console.log(volume)
				let b=[]
				volume.map(reso=>{
					let qa=reso.split(';')
					let qaz=qa.map(re=>{
						return re.split(':')
					})
					console.log(qaz)
					let e=new Object()
					qaz.map(res=>{
						e[res[0]]=res[1]
					})
					console.log(e)
				
					let num= e.describe.replace(/[^0-9]/ig,"")
					e.num=num
					b.push(e)
				})
				
				return{
					...res,
					volume:b
				}
			})
			console.log(_self.list)
		}
		
	},
	 onLoad(options) {
		 _self=this
		this.getList(JSON.parse(options.data))
	}
};
</script>
<style>
	/* page{
		background: #FFFFFF;
	} */
</style>
<style scoped>
	.box{
		width:calc(100% - 60rpx) ;
		height: 150rpx;
		margin-bottom: 30rpx;
		background: #FFFFFF;
	}
	.box image{
		position: absolute;
		width:calc(100% - 60rpx);
		
		
	}
	.bg{
		width:calc(100% - 60rpx);
		height: 150rpx;
		position: absolute;
		display: flex;
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
