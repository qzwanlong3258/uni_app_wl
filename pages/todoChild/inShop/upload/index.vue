<template>
	<view class="inShop">
		<image class="inShop-hd" :src="imglogo"></image>
		<view style="color: #333333;font-size: 14px;text-align: center;padding-bottom: 20px;border-bottom: 1px solid #F1F1F1;">欢迎入驻非客有家</view>
		<view class="title">
			<image :src="imgupload" ></image>
			<text style="color: #333333;font-size: 13px;">上传资料</text>
		</view>
		<view class="sectionFive-ft">
			<view v-for="(item,index) in ageData" :key="index" class="box">
				
				<view class="iconfont iconjia iconclass"   @click="chooseimage(index)" v-if="item.img === ''"></view>
				<view style="text-align: center;color: #333333;margin-top: 15px;font-size: 12px;" v-if="item.img === ''">{{item.name}}</view>
				<image :src="item.img" mode="aspectFit" v-if="item.img != ''" style="
				width: 100%;
				height: 100%;
				"></image>

			</view>
			<view  class="box" v-for="(item,index) in photoData" :key="index" >
				<view class="iconfont iconjia iconclass"   @click="chooseimage(3)" v-if="item.img === ''"></view>
				<view style="text-align: center;color: #333333;margin-top: 15px;font-size: 12px;" v-if="item.img === ''">{{item.name}}</view>
				<image :src="item.img" mode="aspectFit" v-if="item.img != ''" style="
				width: 100%;
				height: 100%;
				"></image>
				</view>
			</view>
			<view class="apptMeasureHome_ft">
				<view class="btn" @click="toLinkChoose">提交审核</view>
			</view>
	</view>
</template>

<script>
'use strict';
import { COMPANY_LOGO, UPLOAD} from '@/config/image.js';
import { loanListDetail , faceSumbit , loanBank} from '@/api/todoChild/loan.js';
import { postShop} from '@/api/inShop.js';
import { HOME} from '@/config/router.js';
import {
		UPLOADPHOTO 
	} from '@/config/api.js';
var _self;
export default {
	data() {
		return{
			imglogo:COMPANY_LOGO,
			imgupload:UPLOAD,
			ageData:[
				{  name: "营业执照" ,img:''},
				{  name: "公司Logo" ,img:''},
				{  name: "门店照片" ,img:''},
				
			],
			photoData:[
				{  name: "装修案例" ,img:''},
			],
			
			list:{},
			show:false
			
		}
	},
	methods:{
		toast(v){
			
				uni.showToast({
				    title: v,
				    duration: 2000,
					icon:'none'
				});
				
			
		},
		toLinkChoose(){
			if(!this.ageData[0].img){
				this.toast('请上传营业执照')
				return;
			}
			if(!this.ageData[1].img){
				this.toast('请上传公司Logo')
				return;
			}
			if(!this.ageData[2].img){
				this.toast('请上传门店照片')
				return;
			}
			postShop(this.list).then(res=>{
				uni.showToast({
												title: "提交成功",
												icon: 'success',
												duration: 2000,
											});
											setTimeout(function(){
															uni.switchTab({
																url:HOME
															})
														},2000)
			})
		},
		// 选择照片
		chooseimage: function(e) {
			var _this = this;
			uni.chooseImage({
				count: 9, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，marryPath可以作为img标签的src属性显示图片
					
					var imgFiles = res.tempFilePaths[0]
					
					console.log(res)
					uni.uploadFile({
					                            // 需要上传的地址
					                            url:UPLOADPHOTO,
					                            // filePath  需要上传的文件
					                            filePath: imgFiles,
					                            name: 'file',
					                            success: (res1) =>{
					                                // 显示上传信息
					        //                         console.log(res1)
													// console.log(_self)
													// console.log(e)
													// console.log(_self.dataList[e])
													// console.log(res1.data )
													if(e == 3){
														
														let w=JSON.parse(res1.data)
														_self.photoData[0].img = imgFiles
														_self.list.case =[]
														_self.list.case.push({
        "caseName":'',
        "caseShowImg":w.data,
        "caseDescribe":''
    })
													} else{
														let r =['businessImg','icon','storePhotos']
														
														let w=JSON.parse(res1.data)
														_self.ageData[e].img = imgFiles
														_self.list[r[e]] = w.data
													}
													
													
													// if(e ==='thisRunningWater'||e ==='spouseRunningWater') {
													// 	_self.dataL[e].push(imgFiles);			
													// 	_self.dataList[e].push(w.data);
														
													// } else{
													// 	_self.dataList[e] = w.data;
													// 	_self.dataL[e] = imgFiles;
													// }
													
													
					                            }
					                        });
					
				}
			});
		},
	},
	async onLoad(options) {
		_self = this
		let e = JSON.parse(decodeURIComponent(options.data))  
		_self.list=e
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.inShop{
		height: 500px;
		background: #FFFFFF;
		padding-top: 20px;
	}
	.inShop-hd{
		display: block;
		border-radius: 50%;
		border: 1px solid #DCDCDC;
		width: 45px;
		height: 45px;
		margin: 0 auto 5px;
	}
	.title{
		height: 30px;
		width: 100%;
		line-height: 30px;
		display: flex;
		align-content: center;
		position: relative;
	}
	.title image{
		width: 20px;
		height: 20px;
		margin-top: 5px;
		margin-left: 10px;
	}
	.sectionFive-ft{
		margin: 80rpx 100rpx;
		/* height: 400rpx; */
		
		display: flex;
		flex-wrap: wrap;
	}
	.sectionFive-ft .box {
		flex: 39%;
		background: #F1F1F1;
		height: 120rpx;
		margin: 20rpx;
		line-height: 120rpx;
		padding: 30rpx 0;
		position: relative;
		border: 1px solid #D2D2D2;
	}
	.iconclass{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top:0;
		color: #999999;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 120px;
		
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
</style>
