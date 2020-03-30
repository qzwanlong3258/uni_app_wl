<template>
	<view style="height: 2000px;">
		<!-- <canvas class='canvas' :style="{width:`${canvasWidth}px`,height:`${canvasHeight}px`}" canvas-id="firstCanvas"></canvas> -->
		
		<view class="wrapper"><canvas style="height: 100%;width: 100%;backgroundColor: #FFFFFF" canvas-id="firstCanvas"></canvas></view>
		<camera device-position="back" flash="off" frame-size="large" @click="error" style="width: 100%; height: 300px;"></camera>
		<image v-if="pathList.length" @click="previewList" class="phone-list" :src="pathList[pathList.length-1]" />
		<button class="take-phone-btn" @click="checkAuth"><i class='iconfont iconpaizhao'></i></button>
	</view>
</template>

<script>
	import {
		getDistance
	} from '@/utils/util.js'
	var QQMapWX = require('@/utils/qqmap-wx-jssdk.js')
	import {
		watermarkPhone
	} from '@/utils/watermark.js'
	const regeneratorRuntime = require('@/utils/regenerator-runtime/runtime.js')
	const viodeUrl = {
		feikeError: 'http://47.104.232.184/images/feike.mp3',
		success: 'http://47.104.232.184/images/success.mp3',
	}
	import {
		UPLOAD
	} from '@/config/api.js';
	import { formatTime } from '@/utils/util.js';
	var _self;
	export default {
		data() {
			return {
				canvasWidth: 752,
				canvasHeight: 808,
				needLocation: [{
						id: 1,
						name: '客厅',
						video: 'http://47.104.232.184/images/keting.mp3'
					},
					{
						id: 2,
						name: '餐厅',
						video: 'http://47.104.232.184/images/canting.mp3'
					},
					{
						id: 3,
						name: '厨房',
						video: 'http://47.104.232.184/images/chufang.mp3'
					},
					{
						id: 4,
						name: '卫生间',
						video: 'http://47.104.232.184/images/weishengjian.mp3'
					},
					{
						id: 5,
						name: '卧室',
						video: 'http://47.104.232.184/images/woshi.mp3'
					}
				],
				currentVideoIndex: 0,
				isLoading: false,
				address: '',
				pathList: [],
				cover: 'https://s2.ax1x.com/2019/10/08/ufSasU.jpg'
			}
		},
		mounted() {
			_self = this;
			uni.getSetting({
				success: (res) => {
					if (!res.authSetting['scope.userLocation'] && res.authSetting.hasOwnProperty('scope.userLocation')) {
						fkConfirm({
							title: '温馨提示',
							content: '非客有家检测到您还没授权定位或拍照功能，是否去前去授权？',
							successFunction: () => {
								uni.openSetting({})
							},
							failFunction: function() {
								uni.showToast({
									title: '取消授权则无法使用该功能，即将退出拍照页面!',
									icon: 'none',
									duration: 2000,
									success: () => {
										uni.navigateBack()
									}
								})
							}
						})
					} else {
						// this.checkLocation()
						
					}
				}
			})
		},
		methods: {
			qrR(e) {
				let that = this;
				// this.qr_path = path;
				let system_info = uni.getSystemInfoSync();
				let ctx = uni.createCanvasContext('firstCanvas');
				// uni.getImageInfo({
				// 	src: e,
				// 	success:(res) => {
				// 		console.log(res.path);
				// 		ctx.drawImage(res.path, 0, 0, 375, uni.upx2px(1020));
				// 		let linearGrad = ctx.createLinearGradient(0, 0, 800, 0);
				// 		linearGrad.addColorStop('0.25', '#8b00d2');
				// 		linearGrad.addColorStop('0.5', '#003fb3');
				// 		linearGrad.addColorStop('0.75', '#ff3ef0');
				// 		ctx.fillStyle = '#FFFFFF';
				// 		ctx.fillRect(uni.upx2px(500), uni.upx2px(790), uni.upx2px(200), uni.upx2px(210));
				// 		ctx.drawImage(path, uni.upx2px(520), uni.upx2px(800), uni.upx2px(160), uni.upx2px(160));
				// 		ctx.font = '13px Arial';
				// 		ctx.fillStyle = '#000';
				// 		ctx.fillText(this.address, uni.upx2px(508), uni.upx2px(990));
				// 		ctx.font = '13px Arial';
				// 		ctx.fillStyle = '#000';
				// 		ctx.fillText(formatTime(new Date()), uni.upx2px(508), uni.upx2px(990));
				// 		ctx.draw(false, () => {
				// 			uni.canvasToTempFilePath({
				// 				x: 0,
				// 				y: 0,
				// 				width: 375,
				// 				height: uni.upx2px(1020),
				// 				destWidth: 375,
				// 				destHeight: uni.upx2px(1020),
				// 				canvasId: 'firstCanvas',
				// 				success: function(res) {
				// 					console.log(res)
				// 					uni.saveImageToPhotosAlbum({
				// 						filePath: res.tempFilePath,
				// 						success: function() {
				// 							console.log('save success');
				// 						}
				// 					});
				// 				},
				// 				fail(e) {
				// 					console.log(e);
				// 					uni.showToast({
				// 						title: '生成海报失败',
				// 						icon: 'none'
				// 					});
				// 				}
				// 			});
				// 		});
				// 	},
				// 	fail(error) {
				// 		console.log(error);
				// 	}
				// });
			 uni.getImageInfo({
			 	src: that.cover,
			 	success(res) {
			 		console.log(res.path);
			 		ctx.drawImage(res.path, 0, 0, 375, uni.upx2px(1020));
			 		let linearGrad = ctx.createLinearGradient(0, 0, 800, 0);
			 		linearGrad.addColorStop('0.25', '#8b00d2');
			 		linearGrad.addColorStop('0.5', '#003fb3');
			 		linearGrad.addColorStop('0.75', '#ff3ef0');
			 		ctx.fillStyle = '#FFFFFF';
			 		ctx.fillRect(uni.upx2px(500), uni.upx2px(790), uni.upx2px(200), uni.upx2px(210));
			 		ctx.drawImage(res.path, uni.upx2px(520), uni.upx2px(800), uni.upx2px(160), uni.upx2px(160));
			 		ctx.font = '13px Arial';
			 		ctx.fillStyle = '#000';
			 		ctx.fillText('长按保存二维码', uni.upx2px(508), uni.upx2px(990));
			 		ctx.draw(false, () => {
			 			uni.canvasToTempFilePath({
			 				x: 0,
			 				y: 0,
			 				width: 375,
			 				height: uni.upx2px(1020),
			 				destWidth: 375,
			 				destHeight: uni.upx2px(1020),
			 				canvasId: 'firstCanvas',
			 				success: function(res) {
								console.log(res)
			 					uni.saveImageToPhotosAlbum({
			 						filePath: res.tempFilePath,
			 						success: function() {
			 							console.log('save success');
			 						}
			 					});
			 				},
			 				fail(e) {
			 					console.log(e);
			 					uni.showToast({
			 						title: '生成海报失败',
			 						icon: 'none'
			 					});
			 				}
			 			});
			 		});
			 	},
				fail(error) {
						console.log(error);
					}
				});
			 
			 
			},
			init(e){
				uni.getSetting({
					success: (res) => {
						if (!res.authSetting['scope.userLocation'] && res.authSetting.hasOwnProperty('scope.userLocation')) {
							fkConfirm({
								title: '温馨提示',
								content: '非客有家检测到您还没授权定位或拍照功能，是否去前去授权？',
								successFunction: () => {
									uni.openSetting({})
								},
								failFunction: function() {
									uni.showToast({
										title: '取消授权则无法使用该功能，即将退出拍照页面!',
										icon: 'none',
										duration: 2000,
										success: () => {
											uni.navigateBack()
										}
									})
								}
							})
						} else {
							
							uni.playBackgroundAudio({
								dataUrl: this.needLocation[e].video,
							})
							this.checkLocation()
						}
					}
				})
				
			},
			checkAuth: function() {
				this.takePhoto()
				// if (this.address) {
				// 	this.takePhoto()
				// } else {
				// 	this.onShow()
				// }
			},
			
			async takePhoto() {
				if (!this.isLoading) {
					// uni.showLoading({
					// 	title: '照片上传中'
					// })
					// _self.isLoading =true
					// this.setData({
					// 	isLoading: true
					// })
					const ctx = uni.createCameraContext()
					console.log(ctx)
					ctx.takePhoto({
						quality: 'high',
						success: async (res) => {
							console.log(res)
							
							uni.uploadFile({
							                            // 需要上传的地址
							                            url:UPLOAD,
							                            // filePath  需要上传的文件
							                            filePath: res.tempImagePath,
							                            name: 'file',
							                            success: async (res1) =>{
							                               console.log(res1)
															let w=JSON.parse(res1.data)
															
															this.qrR(w.data)
															
							                            }
							                        });
						
							
						}
					})
				}
			},
			error(e) {
				console.log(e.detail)
			},
			checkLocation: async function() {
				let qqmapsdk = new QQMapWX({
					key: 'RXMBZ-V3XKW-EPHR7-R7B2O-S75AK-3TFHW'
				});
				await uni.getLocation({
					type: 'gcj02',
					altitude: 'true',
					success: async (res) => {
						qqmapsdk.reverseGeocoder({
							location: {
								latitude: res.latitude,
								longitude: res.longitude
							},
							success: (addressRes) => {
								console.log(res)
								// this.setData({
								// 	address: addressRes.result.formatted_addresses.recommend
								// })
								_self.address=addressRes.result.formatted_addresses.recommend
								// let dis = getDistance({
								// 	lat1: res.latitude,
								// 	lng1: res.longitude,
								// 	lat2: 22.686206,
								// 	lng2: 114.230672
								// })
								// if (dis > 10 && res.altitude == 0) {
								// 	uni.playBackgroundAudio({
								// 		dataUrl: viodeUrl.feikeError,
								// 	})
								// } else {
								// 	uni.playBackgroundAudio({
								// 		dataUrl: this.needLocation[0].video,
								// 	})
								// }
							}
						})
					},
				})
			},
			previewList: function() {
				uni.previewImage({
					current: this.pathList[this.pathList.length - 1], // 当前显示图片的http链接
					urls: this.pathList // 需要预览的图片http链接列表
				})
			},
		}
	}
</script>

<style>
	/* pages/loan/Camera/camera.wxss */
	.wrapper {
		height: 1020rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50upx;
	}
	.bg-color {
		background: #000;
	}

	.take-phone-btn {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		background: #fff;
		text-align: center;
		line-height: 120rpx;
		position: absolute;
		margin: 12% auto;
		left: 0;
		right: 0;
	}

	.take-phone-btn i {
		font-size: 60rpx;
		top: 4rpx;
		position: relative;
		left: 2rpx;
	}

	.canvas {
		position: fixed;
		top: 40%;
		left: 0;
		width: 100%;
		height: 100%;
		/* visibility: hidden; */
	}

	.phone-list {
		width: 120rpx;
		height: 120rpx;
		position: absolute;
		border-radius: 50%;
		margin-top: 88rpx;
		margin-left: 79rpx;
		z-index: 999;
	}
</style>
