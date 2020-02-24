<template>
	<view data-mark="box" class="canvas_box" @click="hideCanvas" catchtouchmove="nothing" :style="{ visibility: hideBox ? 'hidden' : 'visible' }">
		<view :hidden="hideShareCanvas">
			<canvas canvas-id="canvas" @click="hideCanvas" :style="{ width: `${width}px`, height: `${height}px` }"></canvas>
			<view class="share_set">
				<view class="share_option" :style="{visibility: hideBtnSet ? 'hidden' : 'visible'}">
					<image :src="downloadImg" @click="saveForAlubm"></image>
					<text @click="saveForAlubm">保存到相册</text>
				</view>
				<button :style="{visibility: hideBtnSet ? 'visible' : 'hidden'}" class="under_button" @click="junpAuthorization">点击授权</button>
			</view>
		</view>
	</view>
</template>

<script>
'use scrict';
import ShareCanvas, { IWX, result, renum } from './ShareCanvasUtil.js';
import { DOWNLOAD_IMG } from '@/config/image.js';
import { getUnlimited } from '@/api/wx.js';

export default {
	data() {
		return {
			// 画布对象
			canvas: null,

			// 画布组件
			canvasComponent: null,

			// 显示推广图
			hideShareCanvas: true,

			// 分享画布对象
			shareCanvas: null,

			// 隐藏推广图按钮列表
			hideBtnSet: false,

			// 隐藏弹幕
			hideBox: true,

			// 下载图片icon
			downloadImg: DOWNLOAD_IMG,

			// 小程序码
			qRCodeUrl: ''
		};
	},

	props: {
		width: {
			type: Number,
			required: true
		},
		height: {
			type: Number,
			required: true
		},
		config: {
			type: Object,
			defautl() {
				return {};
			}
		}
	},

	mounted() {
		this.canvasComponent = wx.createCanvasContext('canvas', this);
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		/**
		 * 检查是否有保存图片到本地权限
		 * 有则显示保存到相册按钮
		 * 否则显示跳转授权按钮
		 */
		checkPermission() {
			this.canvas &&
				this.canvas.checkPermission().then(result => {
					if (result.code == renum.UNAUTHORIZED) {
						this.showJump();
					} else if (result.code == renum.NOPERMISSION || result.code == renum.HASPERMISSION) {
						this.showShareCanvas();
					} else {
						console.warn('检测权限返回结果错误');
					}
				});
		},

		/**
		 * 跳转授权
		 */
		junpAuthorization() {
			IWX.invoke('openSetting');
		},

		/**
		 * 显示弹幕
		 */
		showBox() {
			this.hideBox = false;
		},

		/**
		 * 显示推广图
		 * 显示保存图片按钮
		 */
		showShareCanvas() {
			(this.hideBox = false), (this.hideShareCanvas = false), (this.hideBtnSet = false);
		},

		/**
		 * 显示推广图
		 * 隐藏保存图片按钮
		 * 显示跳转设置权限页面
		 */
		showJump() {
			(this.hideBox = false), (this.hideShareCanvas = false), (this.hideBtnSet = true);
		},

		/**
		 * 隐藏推广图
		 */
		hideCanvas(event) {
			if (event == renum.INITIATIVE || event.currentTarget.dataset.mark == 'box') {
				(this.hideBox = true), (this.hideShareCanvas = true);
			}
		},

		/**
		 * 隐藏推广图
		 * 显示跳转授权页面按钮
		 */
		switchAuthorization() {
			this.hideCanvas(renum.INITIATIVE);
			this.hideBtnSet = true;
		},

		/**
		 * 保存推广图到相册
		 */
		saveForAlubm() {
			this.getTempImgPath().then(value => {
				this.canvas
					.saveImgLocal(value)
					.then(result => {
						this.hideCanvas(renum.INITIATIVE);
					})
					.catch(result => {
						this.switchAuthorization();
					});
			});
		},

		/**
		 * 绘制推广图
		 */
		drawShareCanvas() {
			this.canvas
				.draw()
				.then(result => {
					this.showShareCanvas();
				})
				.catch(result => {
					if (result.code == renum.UNAUTHORIZED) {
						this.showJump();
					}
				})
				.then(res => {
					uni.hideLoading();
				});
		},

		/**
		 * 点击分享
		 */
		share: async function() {
			!this.miniCodeUrl && (this.miniCodeUrl = await this.genderMiniCode());
			if (this.canvas === null) {
				uni.showLoading({
					title: '正在加载'
				});
				this.canvas = new ShareCanvas({ // 创建推广图对象
					ctx: this.canvasComponent,
					imgUrl: this.config.imgUrl,
					qRCodeUrl: this.qRCodeUrl,
					title: this.config.title,
					price: this.config.price,
					width: this.width,
					height: this.height,
					qRCodeWidth: 280
				});
				this.checkPermission();
				this.showBox(); // 先把弹幕弹出来，不给用户划走的绘制的推广图
				this.drawShareCanvas();
			} else {
				this.showBox(); // 先把弹幕弹出来，不给用户划走的绘制的推广图
				if (!this.canvas.isDraw)
					// 如果该画布还没有绘制，就先绘制
					this.drawShareCanvas();
				this.checkPermission();
			}
		},

		/**
		 * 获取推广图临时路径
		 */
		getTempImgPath() {
			return new Promise((resolve, reject) => {
				uni.canvasToTempFilePath(
					{
						x: 0,
						y: 0,
						canvasId: 'canvas',
						success(res) {
							resolve(res.tempFilePath);
						},
						fail(err) {
							console.error(err);
						}
					},
					this
				);
			});
		},

		/**
		 * 获取小程序码
		 */
		genderMiniCode: function() {
			return getUnlimited({
				page: this.config.jumpPath,
				scene: this.config.scene,
				width: 600,
				is_hyaline: true
			}).then(res => {
				this.qRCodeUrl = res;
			}).catch(res => {
				this.hideCanvas(renum.INITIATIVE);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.canvas_box {
	position: fixed;
	top: 0rpx;
	left: 0rpx;
	right: 0rpx;
	bottom: 0rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 999;
}

.canvas_box canvas {
	transform: translateY(-10%);
	background-color: #fffffb;
}

.share_set {
	position: fixed;
	left: 0rpx;
	right: 0rpx;
	bottom: 0rpx;
	height: 200rpx;
	display: flex;
	justify-content: center;
}

.share_option {
	width: 33%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.share_option > image {
	width: 100rpx;
	height: 100rpx;
}

.share_option > text {
	font-size: 24rpx;
	color: #fffffb;
	margin-top: 10rpx;
}

.under_button {
	background-color: transparent;
	height: 100rpx;
	position: fixed;
	bottom: 30rpx;
	width: 80%;
	color: #fffffb;
}
</style>
