<template>
	<view :hidden='!imgShow'>
	<view class="page_poster-box page_view-all-inner-padding">
		
		<view class="poster_view-main">
			<button class="poster_image-logo-box" open-type="share" :data-id='id' style="background-color: transparent;">
				<image class="poster_image-logo"  :src="logo" />
				<!-- <text class="poster_text-logo-desc">扫描或长按二维码</text> -->
			</button>
			<image class="poster_image-back page_view-full" :src="options.list[options.index]" mode="aspectFill" />
		</view>
		<view class="poster_view-options" @click="optionChange">
			 <scroll-view class="scroll-view_H" scroll-x="true" >
			                    <image class="poster_image-option" v-for="(item,index) in options.list" @load='imgshow' :key="index" :src="item" :data-index="index" mode="aspectFill" />
			                </scroll-view>
			
		</view>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { POSTER_1, POSTER_2, POSTER_3, POSTER_4, POSTER_5,POSTER_6,COMPANY_LOGO, FENXIANG } from "@/config/image.js";
	import {getPoster} from "@/api/todoChild/poster.js"
	import { getUnlimited } from '@/api/wx.js'
	import { getStorage ,setStorage } from '@/utils/storage.js';
	var _self;
	
	export default {
		data() {
			return {
				options: {
					index: 0,
					list: [],
					// list: [POSTER_1,POSTER_2,POSTER_3,POSTER_4, POSTER_5,POSTER_6]
				},
				logo: "",
				imgShow:false,
				id:''
			}
		},
		onLoad(options) {
			_self=this
			options.title && uni.setNavigationBarTitle({ title: options.title });
			getPoster().then(res=>{
				_self.options.list=res.list.map(res=>{
					return res.img
				})
				_self.userInfo = getStorage('userInfo');
				let user=_self.userInfo.id 
				_self.id=_self.userInfo.id 
				// console.log(user)
				getUnlimited( {
				      
				      "scene":user,
				      "width":600
				    },).then(respone=>{
					console.log(respone)
					_self.logo=respone
					
				})
				this.$forceUpdate()
			})
			
			
		},
		methods: {
			imgshow(){
				_self.imgShow=true
			},
			optionChange(e) {
				this.options.index = e.target.dataset.index;
			},
			onShareAppMessage: function( options ){
			　　var that = this;
			　　// 设置菜单中的转发按钮触发转发事件时的转发内容
			　　var shareObj = {
			　　　　title: "非客钱包",        // 默认是小程序的名称(可以写slogan等)
			　　　　path: '/pages/tabbar/home/home',        // 默认是当前页面，必须是以‘/’开头的完整路径
			　　　　imageUrl: FENXIANG,     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
			　　　　success: function(res){
			　　　　　　// 转发成功之后的回调
			　　　　　　if(res.errMsg == 'shareAppMessage:ok'){
			　　　　　　}
			　　　　},
			　　　　fail: function(){
			　　　　　　// 转发失败之后的回调
			　　　　　　if(res.errMsg == 'shareAppMessage:fail cancel'){
			　　　　　　　　// 用户取消转发
			　　　　　　}else if(res.errMsg == 'shareAppMessage:fail'){
			　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
			　　　　　　}
			　　　　},
			　　　　complete: function(){
			　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
			　　　　}
			　　};
			　　// 来自页面内的按钮的转发
			　　if( options.from == 'button' ){
			　　　　var eData = options.target.dataset;
			　　　　console.log( eData.name );     // shareBtn
			　　　　// 此处可以修改 shareObj 中的内容
			　　　　shareObj.path =  '/pages/tabbar/home/home?scene='+eData.id;;
			　　}
			　　// 返回shareObj
			　　return shareObj;
			}
		}
	}
</script>

<style lang="scss">
	.page_poster-box {
		width: 100vw;
		height: 100vh;
	}
	.poster_view-main {
		width: 100%;
		height: calc(100% - 250rpx);
		position: relative;
	}
	.poster_image-back {
		position: absolute;
		z-index: -1;
	}
	.poster_image-logo-box {
		position: absolute;
		left: 200rpx;
		top: 250rpx;
	}
	.poster_image-logo {
		width: 300rpx;
		height: 300rpx;
		border-radius: 50%;
	}
	.poster_text-logo-desc {
		color: white;
		display: block;
		margin-top: 40rpx;
		width: 100%;
		text-align: center;
	}
	.poster_view-options {
		height: 170rpx;
		margin-top: 50rpx;
	}
	.poster_image-option {
		width: 130rpx;
		height: 100%;
	
	}
	.poster_image-option + .poster_image-option {
		margin-left: 30rpx;
	}
	.scroll-view_H{
		height: 100%;
		white-space: nowrap;
		width: 100%;
	}
</style>
