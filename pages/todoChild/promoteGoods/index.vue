<template>
	<view class="promote-goods-box">
		<view class="search"><search @change="searchChange" /></view>
		<view class="goods" v-for="(item, index) in list" :key="index" @click="goodsChange(index)"><LjlGoodsInfo :infor="item" :checked="selectedIndex === index" /></view>
		<view class="submit-box">
			<!-- <view class="submit" @click="saveToAlbum">立即分享</view>
			<view class="cancel" @click="navigateBack">取消</view> -->
			<view class="submit" @tap="shareFc()">立即分享</view>
			<view class="cancel" @click="navigateBack">取消</view> 
		</view>
		<!-- //小程序海报
		<!<share-canvas ref="ShareCanvas" :config="shareConfig" :width="250" :height="400" />
		<! 新海报 -->
		<!-- 分享弹窗-->
		<!-- <view class="share-pro" >
			<view class="share-pro-mask" v-if="deliveryFlag"></view>
			<view class="share-pro-dialog" :class="deliveryFlag?'open':'close'" >
				<view class="close-btn" @tap="closeShareEvn">
					<span class="font_family">&#xe6e6;</span>
				</view>
				<view class="share-pro-title">分享</view>
				<view class="share-pro-body">
					<view class="share-item">
						<button open-type="share">
							<view class="font_family share-icon">&#xe6fa;</view>
							<view >分享给好友</view>
						</button>
					</view>
					<view class="share-item" @tap="createCanvasImageEvn">
						<view class="font_family share-icon">&#xe6f9;</view>
						<view >生成分享图片</view>
					</view>
				</view>
		
			</view>
		</view> -->
		<!-- <hchPoster ref="hchPoster" :canvasFlag.sync="canvasFlag" @cancel="canvasCancel" :posterObj.sync="posterData"/> -->
		<!-- <view :hidden="canvasFlag"> --><!-- 海报 要放外面放组件里面 会找不到 canvas-->
			<!-- <canvas class="canvas"  canvas-id="myCanvas" ></canvas> --><!-- 海报 -->
		<!-- </view> -->
		<!-- <tki-qrcode ref="qrcode" :val="val" :size="200" background="#fff" foreground="#000" pdground="#000" :onval="false"
		 :loadMake="false" @result="qrR" :show="false"></tki-qrcode> -->
		 <!-- //小程序海报 -->
		 
		 <view class="flex_row_c_c modalView" :class="qrShow?'show':''" @tap="hideQr()">
		 	<view class="flex_column">
		 		<view class="backgroundColor-white padding1vh border_radius_10px">
		 			<image :src="poster.finalPath || ''" mode="widthFix" class="posterImage"></image>
		 		</view>
		 		<view class="flex_row marginTop2vh">
		 			<button type="primary" size="mini" @tap.prevent.stop="saveImage()">保存图片</button>
		 			<button type="primary" size="mini" @tap.prevent.stop="share()">分享图片</button>
		 		</view>
		 	</view>
		 </view>
		 <!-- <button type="primary" @tap="shareFc()">生成海报</button> -->
		 <view class="hideCanvasView">
		 	<canvas class="hideCanvas" canvas-id="default_PosterCanvasId" :style="{width: (poster.width||10) + 'px', height: (poster.height||10) + 'px'}"></canvas>
		 </view>
	</view>
</template>

<script>
'use scrict';
import Search from '@/components/Search.vue';
import LjlGoodsInfo from './components/LjlGoodsInfo.vue';
import ShareCanvas from './components/ShareCanvas/ShareCanvas.vue';
import { getGoodsList,getGoodsDetail } from '@/api/goods.js';
import hchPoster from '../../../wxcomponents/hch-poster/hch-poster.vue';
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
import { getStorage } from '@/utils/storage.js';
import { getUnlimited } from '@/api/wx.js';

import _app from '@/components/QS-SharePoster/app.js';
	import {
		getSharePoster
	} from '@/components/QS-SharePoster/QS-SharePoster.js';

var _self;
export default {
	data() {
		return {
			selectedIndex: 0,
			list: [
				// {
				// 	title: '月星真皮沙发',
				// 	desc: '法国品牌|7天包退|官方直售',
				// 	rule: { title: '3期免息', content: '999元/期' },
				// 	checked: true,
				// 	url: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2982686518,338089367&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=c5b1a0d04e6c4936497a09bc4f6a5fb4'
				// },
				// {
				// 	title: '马可波罗地瓷砖地板砖墙砖红色万千热情款',
				// 	desc: '法国品牌|7天包退|官方直售',
				// 	rule: { title: '3期免息', content: '999元/期' },
				// 	checked: false,
				// 	url: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2982686518,338089367&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=c5b1a0d04e6c4936497a09bc4f6a5fb4'
				// }
			],
			listQuery: {
				page: 1,
				size: 5,
				type: 2
			},
			shareConfig: {},
			// 海报
			deliveryFlag: false,
			canvasFlag: true,
			posterData:{},
			// val: 'https://www.baidu.com',
			
			//h5海报
			poster: {},
			qrShow: false,
			canvasId: 'default_PosterCanvasId',
			code:''
			
			
		};
	},
	onLoad: async function() {
		_self=this
		await this.getList();
		
	},
	onShow() {
		// this.$refs.ShareCanvas.checkPermission();
	},
	methods: {
		
		// 海报
		createCanvasImageEvn(){
			// 这个是固定写死的小程序码
			// Object.assign(this.posterData,
			// {
			// 	url:'https://img0.zuipin.cn/mp_zuipin/poster/hch-pro.jpg',//商品主图
			// 	icon:'https://img0.zuipin.cn/mp_zuipin/poster/hch-hyj.png',//醉品价图标
			// 	title:"诗酒茶系列 武夷大红袍 2018年 花香型中火 一级 体验装 16g",//标题
			// 	discountPrice:"250.00",//折后价格
			// 	orignPrice:"300.00",//原价
			// 	code:'https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png',//小程序码
			// })
			this.$forceUpdate();//强制渲染数据
			setTimeout(()=>{
				this.canvasFlag=false;//显示canvas海报
				this.deliveryFlag = false;//关闭分享弹窗
				this.$refs.hchPoster.createCanvasImage();//调用子组件的方法
			},500)
			// 这个是固定写死的小程序码 end
			// 以下是根据后端接口动态生成小程序码
			// let code="https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png";
			// this.codeImg().then((res)=>{
			// 	code = res;
			// 	Object.assign(this.posterData,
			// 	{
			// 		url:'https://img0.zuipin.cn/mp_zuipin/poster/hch-pro.jpg',//商品主图
			// 		icon:'https://img0.zuipin.cn/mp_zuipin/poster/hch-hyj.png',//醉品价图标
			// 		title:"诗酒茶系列 武夷大红袍 2018年 花香型中火 一级 体验装 16g",//标题
			// 		discountPrice:"250.00",//折后价格
			// 		orignPrice:"300.00",//原价
			// 		code:code,//小程序码
			// 	})
			// 	this.$forceUpdate();//强制渲染数据
			// 	setTimeout(()=>{
			// 		this.canvasFlag=false;//显示canvas海报
			// 		this.deliveryFlag = false;//关闭分享弹窗
			// 		this.$refs.hchPoster.createCanvasImage();//调用子组件的方法
			// 	},500)
			// })
			// 以下是根据后端接口动态生成小程序码 end
		},
		// 分享弹窗
		shareEvn() {
			this.deliveryFlag = true;
		},
		// 关闭分享弹窗
		closeShareEvn() {
			this.deliveryFlag = false;
		},
		// 取消海报
		canvasCancel(val){
			this.canvasFlag=val;
		},
		// saveToAlbum() {
		// 	// this.$refs.qrcode._makeCode();
		// 	_self.userInfo = getStorage('userInfo');
		// 	let user=_self.userInfo.id
		// 	console.log(user)
		// 	getUnlimited( {
			      
		// 	      "scene":user,
		// 	      "width":600
		// 	    },).then(respone=>{
		// 		console.log(respone)
		// 		_self.posterData.code=respone
		// 		this.shareEvn()
				
				
		// 	})
			
		// },
		async saveToAlbum() {
			// this.$refs.qrcode._makeCode();
			_self.userInfo = getStorage('userInfo');
			let user=_self.userInfo.id
			console.log(user)
			_self.code = await getUnlimited( {
			      
			      "scene":user,
			      "width":600
			    },)
			
		},
		// qrR(path) {
		// 	this.posterData.code=path
		// 	this.shareEvn()
			
		// },
		
		goodsChange: function(index) {
			this.selectedIndex = index;
			this.setShareConfig();
		},
		searchChange: function(value) {
			console.log('搜索');
		},
		navigateBack: function() {
			uni.navigateBack({delta: 1});
		},
		getList: async function() {
			// this.list = (await getGoodsList(this.listQuery)).list;
			await this.saveToAlbum()
			let a =(await getGoodsList(this.listQuery)).list
			var count=0
			a.map(async res=>{
				let e= (await getGoodsDetail({id:res.uuid})).showimg[0].url
				console.log(e)
				this.list.push({
					id:res.uuid,
					url:e,
					name:res.name,
					price:res.price,
					originalPrice:res.originalPrice
				}) 
			    if(count==0){
					// this.shareConfig = {
					// 	imgUrl: e,
					// 	qRCodeUrl: 'https://feiaizn.com:1001/linkcode?id=1',
					// 	scene: "scene",
					// 	title: res.name,
					// 	price: Number(res.price)
					// }
				this.posterData={
						url:e,//商品主图
						icon:'https://www.feiaizn.com/images/20200515115542_zhehoujia.png',//醉品价图标
						title:res.name,//标题
						discountPrice:res.price,//折后价格
						orignPrice:res.originalPrice,//原价
						code:this.code,//小程序码
					}
					count++
				}
			});
			console.log(this.list)
			for(let i=0;i++;i<this.list.length){
				
			}
			this.$forceUpdate()
			
			
		},

		/**
		 * 创建推广图对象
		 */
		setShareConfig: async function() {
			let item = this.list[this.selectedIndex];
			// this.shareConfig = {
			// 	imgUrl: item.url,
			// 	qRCodeUrl: 'https://feiaizn.com:1001/linkcode?id=1',
			// 	scene: "scene",
			// 	title: item.name,
			// 	price: Number(item.price)
			// }
			
			this.posterData={
					url:item.url,//商品主图
					icon:'https://www.feiaizn.com/images/20200515115542_zhehoujia.png',//醉品价图标
					title:item.name,//标题
					discountPrice:item.price,//折后价格
					orignPrice:item.originalPrice,//原价
					code:this.code,//小程序码
				}
			this.$forceUpdate()
			// console.log(this.shareConfig)
		},
		
		/**
		 * 点击分享
		 */
		// share: function() {
		// 	this.$refs.ShareCanvas.share();
		// },
		
		// h5海报
		async shareFc() {
			console.log(this.posterData)
			try {
				console.log('准备生成:' + new Date())
				const d = await getSharePoster({
					_this: this, //若在组件中使用 必传
					type: 'testShareType',
					formData: {
						//访问接口获取背景图携带自定义数据
		
					},
					posterCanvasId: this.canvasId,	//canvasId
					delayTimeScale: 20, //延时系数
					backgroundImage:this.posterData.url,
					
					/* background: {
						width: 1080,
						height: 1920,
						backgroundColor: '#666'
					}, */
					drawArray: ({
						bgObj,
						type,
						bgScale
					}) => {
						const dx = bgObj.width * 0.3;
						const fontSize = bgObj.width * 0.045;
						const lineHeight = bgObj.height * 0.04;
						//可直接return数组，也可以return一个promise对象, 但最终resolve一个数组, 这样就可以方便实现后台可控绘制海报
						return new Promise((rs, rj) => {
							rs([{
									type: 'custom',
									setDraw(Context) {
										Context.setFillStyle('black');
										Context.setGlobalAlpha(0.3);
										Context.fillRect(0, bgObj.height - bgObj.height * 0.2, bgObj.width, bgObj.height * 0.2);
										Context.setGlobalAlpha(1);
									}
								},
								{
									type: 'image',
									url: this.posterData.code,
									alpha: 1,
									dx,
									dy: bgObj.height - bgObj.width * 0.45,
									infoCallBack(imageInfo) {
										let scale = bgObj.width * 0.2 / imageInfo.height;
										return {
											circleSet: {
												x: imageInfo.width * scale*2 / 2,
												y: bgObj.width * 0.2*2 / 2,
												r: bgObj.width * 0.2*2 / 2
											}, // 圆形图片 , 若circleSet与roundRectSet一同设置 优先circleSet设置
											dWidth: imageInfo.width * scale*2, // 因为设置了圆形图片 所以要乘以2
											dHeight: bgObj.width * 0.2*2,
											/* roundRectSet: { // 圆角矩形
												r: imageInfo.width * .1
											} */
										}
									}
								},
								{
									type: 'text',
									fontStyle: 'italic',
									text: this.posterData.code,
									size: fontSize,
									color: 'white',
									alpha: .5,
									textAlign: 'left',
									textBaseline: 'middle',
									infoCallBack(textLength) {
										_app.log('index页面的text的infocallback ，textlength:' + textLength);
										return {
											dx: bgObj.width - textLength - fontSize,
											dy: bgObj.height - lineHeight * 3
										}
									},
									serialNum: 0,
									id: 'tag1'	//自定义标识
								},
								{
									type: 'text',
									text: this.posterData.orignPrice,
									fontWeight: 'bold',
									size: fontSize,
									color: 'white',
									alpha: .75,
									textAlign: 'left',
									textBaseline: 'middle',
									serialNum: 1,
									allInfoCallback({	//v3.0.1 更新 可以获取drawArray中全部数据
										drawArray
									} = {}) {
										const obj = drawArray.find(item => item.id === 'tag1');
										/* return {
											dx: obj.dx,
											dy: obj.dy + lineHeight
										} */
										//也可以return promise对象
										return new Promise((rs, rj) => {
											setTimeout(() => {
												rs({
													dx: obj.dx,
													dy: obj.dy + lineHeight
												});
											}, 1);
										});
									}
								},
								{
									type: 'text',
									text: '原价' + this.posterData.orignPrice,
									size: fontSize,
									color: 'white',
									alpha: 1,
									textAlign: 'left',
									textBaseline: 'middle',
									infoCallBack(textLength) {
										return {
											dx: bgObj.width - textLength - fontSize,
											dy: bgObj.height - lineHeight - 100
										}
									}
								},
								{
									type: 'text',
									text: '现价' + this.posterData.discountPrice,
									size: fontSize,
									color: 'white',
									alpha: 1,
									textAlign: 'left',
									textBaseline: 'middle',
									infoCallBack(textLength) {
										return {
											dx: bgObj.width - textLength - fontSize - 60,
											dy: bgObj.height - lineHeight - 60
										}
									}
								},
								{
									type: 'qrcode',
									text: '原价:你好，我是取舍',
									// size: bgObj.width * 0.2,
									size: 80,
									dx: bgObj.width * 0.05,
									// dy: bgObj.height - bgObj.width * 0.25
									dy: 380
								}
							]);
						})
					},
					setCanvasWH: ({
						bgObj,
						type,
						bgScale
					}) => { // 为动态设置画布宽高的方法，
						this.poster = bgObj;
					}
				});
				console.log('海报生成成功, 时间:' + new Date() + '， 临时路径: ' + d.poster.tempFilePath)
				this.poster.finalPath = d.poster.tempFilePath;
				this.qrShow = true;
			} catch (e) {
				_app.hideLoading();
				_app.showToast(JSON.stringify(e));
				console.log(JSON.stringify(e));
			}
		},
		saveImage() {
			// #ifndef H5
			uni.saveImageToPhotosAlbum({
				filePath: this.poster.finalPath,
				success(res) {
					_app.showToast('保存成功');
				}
			})
			// #endif
			// #ifdef H5
			_app.showToast('保存了');
			// #endif
		},
		share() {
			// #ifdef APP-PLUS
			_app.getShare(false, false, 2, '', '', '', this.poster.finalPath, false, false);
			// #endif
		
			// #ifndef APP-PLUS
			_app.showToast('分享了');
			// #endif
		},
		hideQr() {
			this.qrShow = false;
		}
	},
	components: {
		Search,
		LjlGoodsInfo,
		ShareCanvas,
		hchPoster,
		tkiQrcode
	}
};
</script>

<style lang="scss">
page {
	background: $color_background-secondary;
}
.promote-goods-box {
	box-sizing: border-box;
	padding: 0 $distance_page-inner-padding;
	> view {
		padding: 20rpx 0;
	}
	.goods + .goods {
		border-top: 1rpx solid $color_border;
	}
	.submit-box {
		position: fixed;
		bottom: 20rpx;
		color: white;
		font-size: 36rpx;
		width: calc(100% - #{$distance_page-inner-padding * 2});
		view {
			width: 100%;
			height: 100rpx;
			border: 1rpx solid $color_border;
			text-align: center;
			line-height: 100rpx;
		}
		view:nth-child(1) {
			background-color: #fad64c;
			margin-bottom: 12rpx;
		}
		view:nth-child(2) {
			color: $color_text-regular;
		}
	}
}
 // @font-face {
	// 	font-family: 'font_family';  /* project id 1065286 */
	// 	src: url('//at.alicdn.com/t/font_1065286_3bsye5aijur.eot');
	// 	src: url('//at.alicdn.com/t/font_1065286_3bsye5aijur.eot?#iefix') format('embedded-opentype'),
	// 	url('//at.alicdn.com/t/font_1065286_3bsye5aijur.woff2') format('woff2'),
	// 	url('//at.alicdn.com/t/font_1065286_3bsye5aijur.woff') format('woff'),
	// 	url('//at.alicdn.com/t/font_1065286_3bsye5aijur.ttf') format('truetype'),
	// 	url('//at.alicdn.com/t/font_1065286_3bsye5aijur.svg#font_family') format('svg');
	//   }
	//   .font_family{
	// 	font-family:"font_family" !important;
	// 	font-size:16px;font-style:normal;
	// 	-webkit-font-smoothing: antialiased;
	// 	-webkit-text-stroke-width: 0.2px;
	// 	-moz-osx-font-smoothing: grayscale;
	//   }
	//   /* 按钮去掉边框 */
	//   button::after {
	// 	border: none;
	//   }
	//   button{
	// 	margin-left: 0;
	// 	margin-right: 0;
	// 	padding-left: 0;
	// 	padding-right: 0;
	// 	line-height: 1;
	// 	color: #1c1c1c;
	// 	font-size: 28rpx;
	// 	background: none;
	//   }
	//   .button-hover {
	// 	color:#1c1c1c;
	// 	background:none;
	//   }
	//   /*每个页面公共css */
	// .content {
	// 	text-align: center;
	// 	height: 100%;
	// }
	// .share-btn{
	// 	padding: 30upx 60upx;background-color:$uni-btn-color;color: $uni-text-color-inverse;
	// }
	// .share-pro{
 //        display: flex;
 //        align-items: center;
 //        justify-content: flex-end;
 //        flex-direction: column;
 //        z-index: 5;
 //        line-height: 1;
 //        box-sizing: border-box;
 //        .share-pro-mask{
 //            width: 100%;
 //            height: 100%;
 //            position: fixed;
 //            top: 0;
 //            right: 0;
 //            bottom: 0;
 //            left: 0;
 //            background: rgba(0, 0, 0, 0.5);
 //        }
 //        .share-pro-dialog {
 //            width: 750rpx;
 //            height: 310rpx;
 //            overflow: hidden;
 //            background-color: #fff;
 //            border-radius: 24rpx 24rpx 0px 0px;
 //            position: relative;
 //            box-sizing: border-box;
 //            position: fixed;
 //            bottom: 0;
 //            .close-btn {
 //                padding: 20rpx 15rpx;
 //                position: absolute;
 //                top: 0rpx;
 //                right: 29rpx;
 //            }
 //            .share-pro-title {
 //                font-size: 28rpx;
 //                color: #1c1c1c;
 //                padding: 28rpx 41rpx;
 //                background-color: #f7f7f7;
 //            }

 //            .share-pro-body{
 //                display: flex;
 //                flex-direction: row;
 //                justify-content:space-around;
 //                font-size: 28rpx;
	//             color: #1c1c1c;
 //                .share-item{
 //                    display: flex;
 //                    flex-direction:column;
 //                    justify-content: center;
 //                    justify-content:space-around;
 //                    .share-icon{
 //                        text-align:center;
 //                        font-size: 70rpx;
 //                        margin-top: 39rpx;
 //                        margin-bottom: 16rpx;
 //                        color: #42ae3c;
 //                    }
 //                    &:nth-child(2){
 //                        .share-icon{
 //                            color: #ff5f33;
 //                        }
 //                    }
 //                }
 //            }
 //        }

 //        /* 显示或关闭内容时动画 */

 //        .open {
 //            transition: all 0.3s ease-out;
	// 		transform: translateY(0);
 //        }

 //        .close {
 //            transition: all 0.3s ease-out;
	// 		transform: translateY(310rpx);
 //        }

 //    }
	//  .canvas{
	//     position: fixed !important;
	//     top: 0 !important;
	//     left: 0 !important;
	//     display: block !important;
	//     width: 100% !important;
	//     height: 100% !important;
	//     z-index: 10;
	// }
	
	
	
	.hideCanvasView {
		position: relative;
	}
	
	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}
	
	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.modalView {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		outline: 0;
		transform: scale(1.2);
		perspective: 2500upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all .3s ease-in-out;
		pointer-events: none;
		backface-visibility: hidden;
		z-index: 999;
	}
	
	.modalView.show {
		opacity: 1;
		transform: scale(1);
		pointer-events: auto;
	}
	
	.flex_column {
		display: flex;
		flex-direction: column;
	}
	
	.backgroundColor-white {
		background-color: white;
	}
	
	.border_radius_10px {
		border-radius: 10px;
	}
	
	.padding1vh {
		padding: 1vh;
	}
	
	.posterImage {
		width: 60vw;
	}
	
	.flex_row {
		display: flex;
		flex-direction: row;
	}
	
	.marginTop2vh {
		margin-top: 2vh;
	}
</style>