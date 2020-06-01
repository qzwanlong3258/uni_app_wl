<template>
	<view v-if="showAuth">
		<image :src="img[0]" @load='imgshow' mode="widthFix"  style="width: 100%;display: block;"></image>
		<view class="search" style="height: 50rpx;padding: 40rpx 0;">
			<view class="input" style="height: 50rpx;display: flex;position: relative;">
				<input
					type="text"
					v-model="query.name"
					style="height: 50rpx;margin-left: 30rpx;border-radius: 40rpx;background:#EFEFF1 ;width: 100%;padding-left: 65rpx;font-size:25rpx ;color: #666666;"
					placeholder-style="font-size:25rpx"
					placeholder="装修公司"
				/>
				<view class="iconfont iconsousuo" style="position: absolute;left: 60rpx;top: 13rpx;font-size: 25rpx;"></view>
				<view
					style="flex-basis:100rpx;line-height: 50rpx;text-align: center;font-size: 28rpx;margin: 0 20rpx 0 10rpx;font-family: font-family:Microsoft YaHei;"
					@click="search"
				>
					搜索
				</view>
			</view>
		</view>
		
		<view style="padding: 30rpx;">
			<view
				class="box"
				v-for="(item, index) in dataList"
				:key="index"
				style="padding: 30rpx;display: flex;background: rgba(247,247,245,1);margin-bottom: 30rpx;"
				@click="linkTo(item)"
			>
				<view class="box-left" style="flex-basis: 182rpx;margin-right: 30rpx;height:182rpx ;">
					<image :src="item.logo" mode="aspectFill" style="width: 182rpx;height: 182rpx;"></image>
				</view>
				<view class="box-right" style="flex: 1;">
					<view style="font-size:30rpx ;font-family:Microsoft YaHei;color: #1B1B1B;white-space: nowrap;">{{ item.name }}</view>
					<view :class="{starOne:item.level=='0',starTwo:item.level=='1',starThree:item.level=='2',starFour:item.level=='3',starFive:item.level=='4',starSix:item.level=='5',starSeven:item.level=='6',starEight:item.level=='7',starNine:item.level=='8',starTen:item.level=='9','starEleven':item.level=='10'} " style="margin-top: 5rpx;"></view>
					<view class="rateBox" style="display: flex;margin: 10rpx 0;">
						<view
							v-for="(items, index) in item.noPicLable"
							:key="index"
							style="border: 2rpx solid rgba(220,220,220,1);padding: 0 10rpx;margin-right: 10rpx;font-size: 20rpx;color: #343434;"
						>
							{{ items.content }}
						</view>
						<!-- <view style="border: 2rpx solid rgba(220,220,220,1);padding: 0 10rpx;margin-right: 10rpx;font-size: 20rpx;color: #343434;">3D效果图</view> -->
					</view>
					<view style="display: flex;margin-top: 10rpx;" v-for="(items, index) in item.picLable" :key="index">
						<image :src="items.img" mode="aspectFill" style="width: 25rpx;height: 25rpx;"></image>
						<view style="margin-left: 16rpx;font-size: 20rpx;height: 25rpx;line-height: 25rpx;">{{ items.content }}</view>
					</view>
					<!-- <view style="display: flex;">
						<image src="https://s1.ax1x.com/2020/05/22/YOnzb8.png" mode="aspectFill" style="width: 25rpx;height: 25rpx;"></image>
						<view style="margin-left: 16rpx;font-size: 20rpx;height: 25rpx;line-height: 25rpx;">预约送全景效果图</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
'use strict';
import { DECORATE_HOUSE, STAR } from '@/config/image.js';
import { SHOP_HOME } from '@/config/router.js';
import { getShopList } from '@/api/decorateHome.js';
import { getStorage, setStorage } from '@/utils/storage.js';
const { AUTH } = require('../../../config/router.js');

var _self;
export default {
	data() {
		return {
			img: [DECORATE_HOUSE, STAR],
			dataList: [],
			query: {
				name: ''
			},
			showAuth:false,
			imgShow:false,
			star:[
				'starOne',
				'starTwo',
				'starThree',
				'starFour',
				'starFive',
				'starSix',
				'starSeven',
				'starEight',
				'starNine',
				'starTen',
				'starElever'
			]
		};
	},
	methods: {
		
		imgshow(){
			_self.imgShow=true
		},
		search() {
			this.getList();
		},
		linkTo(item) {
			let e = JSON.stringify(item);
			uni.navigateTo({
				url: `${SHOP_HOME}?item=${e}`
			});
		},
		getList() {
			getShopList(this.query).then(res => {
				console.log(res);
				if(res.list){
					_self.dataList = res.list.map(res => {
						let a = [];
						let b = [];
						if(res.lableList){
							res.lableList.map(res => {
								if (res.type == '1') {
									a.push(res);
								}
								if (res.type == '2') {
									b.push(res);
								}
							});
						}
						
					
						return {
							...res,
							picLable: b,
							noPicLable: a
						};
					});
				}
				
				console.log(_self.dataList);
			});
		}
	},
	onLoad() {
		_self = this;
		this.getList();

		const isLogin = getStorage('isLogin');
		if (isLogin) {
			this.showAuth = true;
		} else {
			let pages = getCurrentPages();
			if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
			uni.redirectTo({
				url: `${AUTH}?name=${'decorateHouse'}`
			});
		}
	}
};
</script>

<style>
page {
	background: #ffffff;
}
</style>
<style scoped>

.starOne {
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	 background-position: -8rpx -5rpx; 
	/* background-position: -8rpx -27rpx; */
	
}
.starTwo {
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -28rpx; 
}
.starThree {
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -51rpx; 
}
.starFour {
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -74rpx; 
}
.starFive{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -97rpx; 
}
.starSix{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -120rpx; 
}
.starSeven{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -143rpx; 
}
.starEight{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -166rpx; 
}
.starNine{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -189rpx; 
}
.starTen{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -212rpx; 
}
.starEleven{
	background: url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
	background-size: 150rpx 260rpx;
	height: 22rpx;
	background-position: -8rpx -235rpx; 
}



</style>
