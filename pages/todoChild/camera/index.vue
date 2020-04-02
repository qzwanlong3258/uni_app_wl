
<template>
	<view class="content" style="position: absolute;width: 100%;height: 100%;">
		<view class="post" style="position: absolute;width: 100%;height: 100%;">
			<view class="wrapper"><canvas style="height: 100%;width: 100%;backgroundColor: #FFFFFF" canvas-id="firstCanvas"></canvas></view>
		</view>
		<view style="position: absolute;width: 100%;height: 100%;">
			<camera device-position="back" flash="off" frame-size="large" @click="error" style="width: 100%; height: 80%;"></camera>
			<view style="width: 100%;height: 20%;display: flex;justify-content: center;align-items: center;background: #000000; position: relative;">	
			<view style="width: 50px;height: 50px;border-radius: 50%;background: #FFFFFF;text-align: center;line-height: 50px;" @tap="qrR" v-if="role == 0">
				<icon   class="iconfont iconpaizhao iconclass"></icon>
			</view>
			<button :disabled='disable' style="width: 50px;height: 50px;border-radius: 50%;background: #FFFFFF;text-align: center;line-height: 50px;" @tap="photo" v-if="role == 1">
				<icon   class="iconfont iconpaizhao iconclass"></icon>
			</button>
			<image :src="imgphoto"  @click="_previewImage(imgphoto)" v-if="imgphoto" style="position: absolute;left: 20px;top: 35px;width: 50px;height: 50px; border-radius: 50%;display: block;"></image>
			</view>
		</view>
		
		
	</view>
</template>
 
<script>
	import {
		UPLOADPHOTO
	} from '@/config/api.js';
	import {
		getDistance
	} from '@/utils/util.js'
	var QQMapWX = require('@/utils/qqmap-wx-jssdk.js')
	import { formatTime } from '@/utils/util.js'
	const viodeUrl = {
		feikeError: 'http://47.104.232.184/images/feike.mp3',
		success: 'http://47.104.232.184/images/success.mp3',
	}
	import { MINE} from '@/config/router.js';
	import { photoSubmit } from '@/api/myWork.js'
	var _self;
	export default {
		name: 'canvas-drawer',
		
		data() {
			return {
				cover: 'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				imgphoto:'',
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
					},
					{
						id: 6,
						name: '卧室',
						video: 'http://47.104.232.184/images/woshi.mp3'
					}
				],
				currentVideoIndex: 0,
				isLoading: false,
				address: '',
				latitude:'',
				longitude:'',
				role:0,
				disable:false,
				uuid:''
				
			};
		},
		onLoad(options) {
			_self =this
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
						if(options.role =='face'){
							var pages = getCurrentPages();
							var currPage = pages[pages.length - 1]; //当前页面
							var prevPage = pages[pages.length - 2]; //上一个页面
							//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
							prevPage.setData({
							        num:Number(options.index)
							       
							})
							
							console.log(Number(options.index))
							uni.playBackgroundAudio({
								dataUrl: this.needLocation[Number(options.num)].video,
							})
							this.checkLocation()
							_self.role = 0
						} else{
							_self.role = 1
							_self.location=JSON.parse(decodeURIComponent(options.location))  
							console.log(options)
							_self.latitude=options.latitude
							_self.longitude=options.longitude
							_self.latitude=22.71991
							_self.longitude=114.24779
							_self.uuid = options.uuid
							
							this.checkPhotoLocation()
						}
						
						
					}
				}
			})
			
		},
		methods: {
			async photo() {
				const photo = uni.createCameraContext()
				console.log(photo)
				uni.showLoading({
					title: '照片上传中'
				})
				await photo.takePhoto({
					quality: 'high',
					success: async (res) => {
						console.log(res)
						
						await uni.uploadFile({
						                            // 需要上传的地址
						                            url:UPLOADPHOTO,
						                            // filePath  需要上传的文件
						                            filePath: res.tempImagePath,
						                            name: 'file',
						                            success: async (res1) =>{
						                               console.log(res1)
														let w=JSON.parse(res1.data)
														// _self.cover = w.data
														// console.log(_self.cover)
														let system_info = uni.getSystemInfoSync();
														let ctx = uni.createCanvasContext('firstCanvas');
														
														await uni.getImageInfo({
															src: w.data,
															success: (res) => {
																console.log(res.path);
																// console.log(this)
																ctx.drawImage(res.path, 0, 0, 375, uni.upx2px(1020));
																let linearGrad = ctx.createLinearGradient(0, 0, 800, 0);
																linearGrad.addColorStop('0.25', '#8b00d2');
																linearGrad.addColorStop('0.5', '#003fb3');
																linearGrad.addColorStop('0.75', '#ff3ef0');
																// ctx.fillStyle = '#FFFFFF';
																// ctx.fillRect(uni.upx2px(500), uni.upx2px(790), uni.upx2px(200), uni.upx2px(210));
																// ctx.drawImage(path, uni.upx2px(520), uni.upx2px(800), uni.upx2px(160), uni.upx2px(160));
																ctx.font = '13px Arial';
																ctx.fillStyle = '#fff';
																ctx.fillText(this.address, uni.upx2px(380), uni.upx2px(1000));
																ctx.font = '13px Arial';
																ctx.fillStyle = '#fff';
																ctx.fillText(formatTime(new Date()), uni.upx2px(380), uni.upx2px(970));
																ctx.draw(false, () => {
																	uni.canvasToTempFilePath({
																		x: 0,
																		y: 0,
																		width: 375,
																		height: uni.upx2px(1020),
																		destWidth: 375,
																		destHeight: uni.upx2px(1020),
																		canvasId: 'firstCanvas',
																		success: async (res)=> {
																			console.log(res)
																			_self.imgphoto=res.tempFilePath
																			await uni.uploadFile({
																			  header: {
																			    "Content-Type": "multipart/form-data"
																			  },
																			  url: UPLOADPHOTO,
																			  filePath: res.tempFilePath,
																			  name: 'file',
																			  success: (result) => {
																			    console.log(result)
																				let data ={
																					uuid:this.uuid,
																					url:JSON.parse(result.data).data,
																					potId:this.location[this.currentVideoIndex],
																					latitude:this.latitude,
																					longitude:this.longitude
																				}
																			    photoSubmit(data).then(res=>{
																					_self.currentVideoIndex=this.currentVideoIndex + 1
																																								   
																					setTimeout(function(){
																						uni.hideLoading()
																						uni.showToast({
																						
																						title: '成功',
																						icon:'success',
																																							
																						duration: 2000
																						
																						});
																					}, 100);
																					if (this.currentVideoIndex < this.location.length) {
																					  uni.playBackgroundAudio({
																					    dataUrl: this.needLocation[Number(this.location[this.currentVideoIndex])].video,
																					  })
																					  
																					} else {
																					  uni.playBackgroundAudio({
																					    dataUrl: viodeUrl.success,
																					    success: () => {
																					      console.log('拍照完成，跳回前一页')
																						  uni.switchTab({
																						  	url:MINE
																						  })
																					    }
																					  })
																					}
																				})
																			     
																			  }
																			})
																			
																			
																			
																			
																			
																		},
																		fail(e) {
																			console.log(e);
																			uni.showToast({
																				title: '拍照失败',
																				icon: 'none'
																			});
																		}
																	});
																});
															},
															fail(error) {
																setTimeout(uni.hideLoading, 100);
																console.log(error);
															}
														});
													
														
						                            }
						                        });
					
						
					}
				})
			},
			async qrR() {
				// this.checkLocation()
				const photo = uni.createCameraContext()
				console.log(photo)
				uni.showLoading({
					title: '照片上传中'
				})
				await photo.takePhoto({
					quality: 'high',
					success: async (res) => {
						console.log(res)
						
						await uni.uploadFile({
						                            // 需要上传的地址
						                            url:UPLOADPHOTO,
						                            // filePath  需要上传的文件
						                            filePath: res.tempImagePath,
						                            name: 'file',
						                            success: async (res1) =>{
						                               console.log(res1)
														let w=JSON.parse(res1.data)
														// _self.cover = w.data
														// console.log(_self.cover)
														let system_info = uni.getSystemInfoSync();
														let ctx = uni.createCanvasContext('firstCanvas');
														
														await uni.getImageInfo({
															src: w.data,
															success: (res) => {
																console.log(res.path);
																// console.log(this)
																ctx.drawImage(res.path, 0, 0, 375, uni.upx2px(1020));
																let linearGrad = ctx.createLinearGradient(0, 0, 800, 0);
																linearGrad.addColorStop('0.25', '#8b00d2');
																linearGrad.addColorStop('0.5', '#003fb3');
																linearGrad.addColorStop('0.75', '#ff3ef0');
																// ctx.fillStyle = '#FFFFFF';
																// ctx.fillRect(uni.upx2px(500), uni.upx2px(790), uni.upx2px(200), uni.upx2px(210));
																// ctx.drawImage(path, uni.upx2px(520), uni.upx2px(800), uni.upx2px(160), uni.upx2px(160));
																ctx.font = '13px Arial';
																ctx.fillStyle = '#fff';
																ctx.fillText(this.address, uni.upx2px(380), uni.upx2px(1000));
																ctx.font = '13px Arial';
																ctx.fillStyle = '#fff';
																ctx.fillText(formatTime(new Date()), uni.upx2px(380), uni.upx2px(970));
																ctx.draw(false, () => {
																	uni.canvasToTempFilePath({
																		x: 0,
																		y: 0,
																		width: 375,
																		height: uni.upx2px(1020),
																		destWidth: 375,
																		destHeight: uni.upx2px(1020),
																		canvasId: 'firstCanvas',
																		success: async (res)=> {
																			console.log(res)
																			_self.imgphoto=res.tempFilePath
																			var pages = getCurrentPages();
																			var currPage = pages[pages.length - 1]; //当前页面
																			var prevPage = pages[pages.length - 2]; //上一个页面
																			//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
																			prevPage.setData({
																			        imgphoto:res.tempFilePath,
																			       
																			})
																			setTimeout(function(){
																				uni.hideLoading()
																				uni.showToast({
																				
																				title: '成功',
																				icon:'success',
																																					
																				duration: 2000
																				
																				});
																			}, 100);
																			
																			
																			
																			 uni.navigateBack();
																			
																			// uni.navigateBack({
																			//     delta: 1
																			// });
																			// await uni.uploadFile({
																			//                             // 需要上传的地址
																			//                             url:UPLOAD,
																			//                             // filePath  需要上传的文件
																			//                             filePath: res.tempImagePath,
																			//                             name: 'file',
																			//                             success: async (res1) =>{
																			//                                console.log(res1)
																			// 								let w=JSON.parse(res1.data)
																			// 								_self.imgphoto = w.data
																			// 								console.log(this)
																			// 								}
																			// 					})
																			// uni.saveImageToPhotosAlbum({
																			// 	filePath: res.tempFilePath,
																			// 	success: function() {
																			// 		console.log('save success');
																			// 	}
																			// });
																		},
																		fail(e) {
																			console.log(e);
																			uni.showToast({
																				title: '拍照失败',
																				icon: 'none'
																			});
																		}
																	});
																});
															},
															fail(error) {
																setTimeout(uni.hideLoading, 100);
																console.log(error);
															}
														});
													
														
						                            }
						                        });
					
						
					}
				})
				
				
				
				
				
				
				
				// let that = this;
				// this.qr_path = path;
				
 
 
 
			},
			_previewImage(image) {
							var imgArr = [];
							imgArr.push(image);
							//预览图片
							uni.previewImage({
								urls: imgArr,
								current: imgArr[0]
							});
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
									
										_self.address=addressRes.result.formatted_addresses.recommend
										_self.latitude =res.latitude
										_self.longitude =res.longitude
										var pages = getCurrentPages();
										var currPage = pages[pages.length - 1]; //当前页面
										var prevPage = pages[pages.length - 2]; //上一个页面
										//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
										prevPage.setData({
										        latitude:res.latitude,
										        longitude:res.longitude
										       
										})
										
									
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
										// uni.playBackgroundAudio({
										// 	dataUrl: this.needLocation[0].video,
										// })
									// }
								}
							})
						},
					})
				},
			checkPhotoLocation: async function(a,b) {
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
								
									_self.address=addressRes.result.formatted_addresses.recommend
								console.log(this)
								let dis = getDistance({
									lat1: res.latitude,
									lng1: res.longitude,
									lat2: Number(this.latitude),
									lng2: Number(this.longitude)
								})
								if (dis > 10 && res.altitude == 0) {
									uni.playBackgroundAudio({
										dataUrl: viodeUrl.feikeError,
									})
									_self.disable=true
								} else {
									uni.playBackgroundAudio({
										dataUrl: this.needLocation[Number(this.location[0])].video,
									})
									_self.disable=false
								}
							}
						})
					},
				})
			},
			
			
			// saveToAlbum() {
			// 	this.$refs.qrcode._makeCode();
			// }
		}
	};
</script>
 
<style lang="scss" scoped>
	.post {
		height: 100%;
		background-color: #f4f4f4;
 
		.wrapper {
			height: 1020rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 50upx;
		}
	}
	.iconclass{
		font-size: 14px;
	}
</style>
