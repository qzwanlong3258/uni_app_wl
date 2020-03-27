<template>
	<view>
		<canvas class='canvas' :style="{width:`${canvasWidth}px`,height:`${canvasHeight}px`}" canvas-id="firstCanvas"></canvas>
		<camera device-position="back" flash="off" frame-size="large" @click="error" style="width: 100%; height: 75%;"></camera>
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
			}
		},
		mounted() {
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
						this.checkLocation()
					}
				}
			})
		},
		methods: {
			checkAuth: function() {
				if (this.address) {
					this.takePhoto()
				} else {
					this.onShow()
				}
			},
			async takePhoto() {
				if (!this.isLoading) {
					uni.showLoading({
						title: '照片上传中'
					})
					this.setData({
						isLoading: true
					})
					const ctx = uni.createCameraContext()
					ctx.takePhoto({
						quality: 'high',
						success: async (res) => {
							await watermarkPhone({
								canvasId: 'firstCanvas',
								src: res.tempImagePath,
								str: this.address,
								successfn: async (path) => {
									let arr = this.pathList
									arr.push(path)
									console.log(arr)
									this.setData({
										pathList: arr
									})
									console.log(this.pathList)
									uni.hideLoading()
									// await uni.uploadFile({
									//   header: {
									//     "Content-Type": "multipart/form-data"
									//   },
									//   url: 'http://47.104.232.184:8800/file/upload?token=66',
									//   filePath: path,
									//   name: 'file',
									//   success: (result) => {
									//     console.log(result)
									//     this.setData({
									//       currentVideoIndex: this.currentVideoIndex + 1
									//     })
									//     uni.hideLoading()
									//     if (this.currentVideoIndex < this.needLocation.length) {
									//       uni.playBackgroundAudio({
									//         dataUrl: this.needLocation[this.currentVideoIndex].video,
									//       })
									//       this.setData({
									//         isLoading: false
									//       })
									//     } else {
									//       uni.playBackgroundAudio({
									//         dataUrl: viodeUrl.success,
									//         success: () => {
									//           console.log('拍照完成，跳回前一页')
									//         }
									//       })
									//     }
									//   }
									// })
								}
							})
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
								this.setData({
									address: addressRes.result.formatted_addresses.recommend
								})
								let dis = getDistance({
									lat1: res.latitude,
									lng1: res.longitude,
									lat2: 22.686206,
									lng2: 114.230672
								})
								if (dis > 10 && res.altitude == 0) {
									uni.playBackgroundAudio({
										dataUrl: viodeUrl.feikeError,
									})
								} else {
									uni.playBackgroundAudio({
										dataUrl: this.needLocation[0].video,
									})
								}
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
		top: 100%;
		left: 0;
		width: 100%;
		height: 100%;
		visibility: hidden;
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
