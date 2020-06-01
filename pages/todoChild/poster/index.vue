<template>
	<view :hidden="!imgShow">
		<!-- <image :src="item" v-for="(item, index) in imgList" ></image> -->
		<view class="page_poster-box page_view-all-inner-padding">
			<view class="poster_view-main">
				<image class="poster_image-back page_view-full" :src="options.list[options.index]" mode="aspectFill" />
				<button class="poster_image-logo-box" @click="saveImage" open-type="share" :data-id="id" style="background-color: transparent;">
					<image class="poster_image-logo" :src="logo" />
					<!-- <text class="poster_text-logo-desc">扫描或长按二维码</text> -->
				</button>
				
			</view>
			<view class="poster_view-options"  @click="optionChange">
				<scroll-view class="scroll-view_H"  scroll-x="true">
					<image class="poster_image-option"  v-for="(item, index) in imgList" @load="imgshow" :key="index" :src="item" :data-index="index" mode="aspectFill" />
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
'use scrict';
import { POSTER_1, POSTER_2, POSTER_3, POSTER_4, POSTER_5, POSTER_6, COMPANY_LOGO, FENXIANG } from '@/config/image.js';
import { getPoster } from '@/api/todoChild/poster.js';
import { getUnlimited } from '@/api/wx.js';
import { getStorage, setStorage } from '@/utils/storage.js';
import { getWxSignature } from '@/api/wx.js';import wx from '@/utils/wx-jssdk.js';
var _self;

export default {
	data() {
		return {
			options: {
				index: 0,
				list: []
				// list: [POSTER_1,POSTER_2,POSTER_3,POSTER_4, POSTER_5,POSTER_6]
			},
			logo: '',
			imgShow: false,
			id: '',
			imgList:[]
		};
	},
	async onLoad(options) {
		_self = this;
		options.title && uni.setNavigationBarTitle({ title: options.title });
		let e = await getPoster();
		_self.options.list = e.list.map(res => {
			return res.img;
		});
		_self.userInfo = getStorage('userInfo');
		let user = _self.userInfo.id;
		_self.id = _self.userInfo.id;

		let a = await getUnlimited({
			scene: user,
			width: 600
		});
		
		console.log(a);
        _self.imgList=_self.options.list
		_self.logo = a;
		this.wxConfig();
		
	},
	methods: {
		saveImage(){
			uni.showToast({
											title: "请从右上角的页面分享进行分享",
											icon: 'none',
											duration: 2000,
										});
		},
		wxConfig() {
					{
						// var myurl = 'https://www.feiaizn.com/gzh/index.html'
		
						var myurl = location.href.split('#')[0];
						myurl = encodeURIComponent(myurl);
						//          var url = ` 获取配置的后台接口?url=${myurl}`;
						getWxSignature({ url: myurl }).then(data => {
							console.log(data);
		
							console.log(wx);
		
							wx.config({
								debug: false, // 开启调试模式,成功失败都会有alert框
								appId: data.appid, // 必填，公众号的唯一标识
								timestamp: data.timestamp, // 必填，生成签名的时间戳
								nonceStr: data.noncestr, // 必填，生成签名的随机串
								signature: data.signature, // 必填，签名
								jsApiList: [ 'updateTimelineShareData',//1.4.0的分享接口，注意：使用新版本的分享功能，一定要在该列表加上对应的老版本功能接口，否则新接口不起作用
			                                 'updateAppMessageShareData',//1.4.0的分享接口,注意：使用新版本的分享功能，一定要在该列表加上对应的老版本功能接口，否则新接口不起作用
			                                 'onMenuShareAppMessage',//老版本分享接口。
			                                 'onMenuShareTimeline'//老版本分享接口。
											 ] // 必填，需要使用的JS接口列表  选择自己需要的接口
							});
							wx.ready(()=> {
								var shareData = {
									        title: '非客有家', // 分享标题
									        desc: '', // 分享描述
									        link: 'https://www.feiaizn.com/gzh/index.html' +'#'+ '/pages/tabbar/home/home?scene=' + this.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
									        imgUrl: FENXIANG, // 分享图标
									        success: function (res) {
									          // 设置成功
									        },
									        error:function(res){
									        }
										};
								        //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
									    wx.updateAppMessageShareData(shareData);
								        //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
									  	wx.updateTimelineShareData(shareData);
								
		
								// alert('00') // config信息验证后会执行ready方法，所有接口调用都必须在config接口获
								//                      得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载
								//                     时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
								//                     对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
							});
							wx.error(function(res) {
								// alert(res)
								//           console.log(res)
								// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错
								//                     误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
								//                     对于SPA可以在这里更新签名。
							});
						});
					}
				},
		
		
		imgshow() {
			_self.imgShow = true;
		},
		optionChange(e) {
			this.options.index = e.target.dataset.index;
		},
		onShareAppMessage: function(options) {
			var that = this; // 设置菜单中的转发按钮触发转发事件时的转发内容
			var shareObj = {
				title: '非客钱包', // 默认是小程序的名称(可以写slogan等)
				path: '/pages/tabbar/home/home', // 默认是当前页面，必须是以‘/’开头的完整路径
				imageUrl: FENXIANG, //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
				success: function(res) {
					// 转发成功之后的回调
					if (res.errMsg == 'shareAppMessage:ok') {
					}
				},
				fail: function() {
					// 转发失败之后的回调
					if (res.errMsg == 'shareAppMessage:fail cancel') {
						// 用户取消转发
					} else if (res.errMsg == 'shareAppMessage:fail') {
						// 转发失败，其中 detail message 为详细失败信息
					}
				},
				complete: function() {
					// 转发结束之后的回调（转发成不成功都会执行）
				}
			}; // 来自页面内的按钮的转发
			if (options.from == 'button') {
				var eData = options.target.dataset;
				console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
				shareObj.path = '/pages/tabbar/home/home?scene=' + eData.id;
			} // 返回shareObj
			return shareObj;
		}
	}
};
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
	width: 100%;
	height: 100%;
	// z-index: -1;
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
	height: 200rpx;
	margin-left: 30rpx;
	display: inline-block;
	
}
// .poster_image-option + .poster_image-option {
// 	margin-left: 30rpx;
// }
.scroll-view_H {
	height: 100%;
	white-space: nowrap;
	width: 100%;
}
</style>
