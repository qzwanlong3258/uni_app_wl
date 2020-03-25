<template>
	<view class="sectionOne">
		<!-- <text class="section-maintitle">页面1</text>
		<text class="section-subtitle">我的页面”1</text> -->
		<view class="sectionOne-box">
			<view class="sectionOne-hd"> 01/06 你的户型是?</view>
			<view class="sectionOne-bd">
				<view v-for="(item,index) in homeData" :key="index" @click="homeClick(index)">
					<image :src="item.img" mode=""></image>
					<label class="radio"><radio :value="item.value" :checked="index === current" />{{item.name}}</label>
				</view>
				
				
				</view>
			<!-- <view class="sectionOne-ft" style="background: #ffffff;margin: 50rpx 74rpx;height: 175rpx;">
				<view style="height: 80rpx;line-height: 80rpx;text-align: center;">
					你所居住的城市是？
				</view>
				<view style="display: flex;" class="sectionOne-ft-input">
					<input type="text" placeholder="请选择省" placeholder-class="input_color">
					<input type="text" placeholder="请选择市" placeholder-class="input_color">
					<input type="text" placeholder="请选择区" placeholder-class="input_color">
				</view>
				
			</view> -->
		</view>
		<view class="iconfont iconnexts nextclass" ></view> 
		
	</view>
</template>

<script>
	"use strict"
	
	import { ONEHOME ,TWOHOME, THREEHOME ,OTHERHOME} from '@/config/image.js';
	
	var _self;
	export default {
		
		data() {
			return {
				r2:'',
				img1: ONEHOME,
				homeData:[
					{ img: ONEHOME, name: "一居室" ,value:'ONEHOME'},
					
					{ img: TWOHOME, name: "二居室" ,value:'TWOHOME'},
					{ img: THREEHOME, name: "三居室"  ,value:'THREEHOME'},
					{ img: OTHERHOME, name: "四居室及以上"  ,value:'OTHERHOME'},
				],
				current:null
			}
		},
		methods: {
			homeClick(e) {
				// console.log(_self)
				_self.current =e
				},
		    
		},
		created(){
			_self = this
			
		},
		
	}
</script>
<style scoped>
	.sectionOne{
		font-size: 32rpx;
		font-family: MicrosoftYaHei;
		background: rgba(242,246,249,1);
		height: 100%;
		position: relative;
		}
	.nextclass{
		position: absolute;
		left: calc(50% - 10px);
		bottom: 10px;
		transform: rotate(-90deg);
		
	}
	.sectionOne-box{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.sectionOne-hd{
		height: 80rpx;
		margin: 103rpx 55rpx 63rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 34rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
	}
	.sectionOne-bd{
		margin: 63rpx 100rpx;
		height: 500rpx;
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionOne-bd view {
		flex: 45%;
		background: #FFFFFF;
		height: 238rpx;
		margin: 10rpx;
	}
	.sectionOne-bd view image{
		width: 66rpx;
		height: 66rpx;
		display: block;
		margin: 40rpx auto;
	}
	.sectionOne-bd view label {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
	}
	.sectionOne-bd view label radio {
		margin-left: 30rpx;
		margin-right: 10rpx;
	}
	/* .input_color {
		color: #dbdbdb;
	} */
	/* .sectionOne-ft-input input{
		margin-left: 40rpx;
		border: 2rpx solid #313131;
		font-size: 22rpx;
		text-align: center;
	}
	.sectionOne-ft-input input:nth-child(3){
		margin-right: 40rpx;
		
	} */
</style>
