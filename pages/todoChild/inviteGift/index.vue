<template>
	<view class="inviteGift">
		<image :src="img[0]" mode="widthFix" class="inviteGift-hd"></image>
		<image :src="img[1]" mode="widthFix" class="inviteGift-hd-friend"></image>
		<view class="text">
			<text style="color: #252525;font-size:24rpx ;margin-left: 20rpx;">邀请活动</text>
			<text style="color:#828282;font-size:20rpx ;margin-left: 20rpx;">邀请好友，获得积分</text>
		</view>
		<view style="height: 260rpx;" class="pic">
			<image :src="img[2]" mode="widthFix"></image>
			<image :src="img[3]" mode="widthFix"></image>
			<image :src="img[4]" mode="widthFix"></image>
		</view>
		<view class="apptMeasureHome_ft">
			<!-- <view class="btn" @click="toLinkChoose">立即分享</view> -->
			<button class="btn" open-type="share" :data-id="id" @click="ShareTimeline">立即分享</button>
		</view>
	</view>
</template>

<script type="text/javascript">
'use strict';
import { INVITE_GIFT, INVITE_FRIEND, INVITE_POINT_ONE, INVITE_POINT_TWO, INVITE_POINT_THREE, FENXIANG } from '@/config/image.js';
import { getStorage, setStorage } from '@/utils/storage.js';
import { getWxSignature } from '@/api/wx.js';
import wx from '@/utils/wx-jssdk.js';
var _self;

export default {
	data() {
		return {
			img: [INVITE_GIFT, INVITE_FRIEND, INVITE_POINT_ONE, INVITE_POINT_TWO, INVITE_POINT_THREE],
			id: ''
		};
	},
	// updateAppMessageShareData: function(options) {
	// 	var that = this; // 设置菜单中的转发按钮触发转发事件时的转发内容
	// 	var shareObj = {
	// 		title: '邀请有礼', // 默认是小程序的名称(可以写slogan等)
	// 		path: '/pages/tabbar/home/home', // 默认是当前页面，必须是以‘/’开头的完整路径
	// 		imageUrl: FENXIANG, //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
	// 		success: function(res) {
	// 			// 转发成功之后的回调
	// 			if (res.errMsg == 'shareAppMessage:ok') {
	// 			}
	// 		},
	// 		fail: function() {
	// 			// 转发失败之后的回调
	// 			if (res.errMsg == 'shareAppMessage:fail cancel') {
	// 				// 用户取消转发
	// 			} else if (res.errMsg == 'shareAppMessage:fail') {
	// 				// 转发失败，其中 detail message 为详细失败信息
	// 			}
	// 		},
	// 		complete: function() {
	// 			// 转发结束之后的回调（转发成不成功都会执行）
	// 		}
	// 	}; // 来自页面内的按钮的转发
	// 	if (options.from == 'button') {
	// 		var eData = options.target.dataset;
	// 		console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
	// 		shareObj.path = '/pages/tabbar/home/home?scene=' + eData.id;
	// 	} // 返回shareObj
	// 	return shareObj;
	// },
	methods: {
		ShareTimeline(e) {
			// console.log(e)
			// var eData = e.target.dataset;
			// //分享给朋友
			// wx.updateAppMessageShareData({
			// 	title: '邀请有礼', // 分享标题
			// 	desc: '', // 分享描述
			// 	link: 'https://www.feiaizn.com/gzh/index.html' + '/pages/tabbar/home/home?scene=' + eData.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			// 	imgUrl: FENXIANG, // 分享图标
			// 	success: function() {
			// 		// 设置成功
			// 	}
			// });
			// wx.onMenuShareTimeline({
			//       title: '邀请有礼', // 分享标题
			//       link: 'https://www.feiaizn.com/gzh/index.html' +'#'+ '/pages/tabbar/home/home?scene=' + eData.id, // 分享链接
			//       imgUrl: FENXIANG, // 分享图标
			//       desc: '', // 分享描述
			//       success () {
			//         opstion.success()
			//       },
			//       cancel () {
			//         opstion.error()
			//       }
			//     })
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
							        title: '邀请有礼', // 分享标题
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

		async onLoad() {
			_self = this;

			this.wxConfig();

			_self.userInfo = getStorage('userInfo');
			_self.id = _self.userInfo.id;
		}
	}
};
</script>
<style>
page {
	background-color: #ffffff;
}
</style>
<style scoped>
.inviteGift {
	position: relative;
	background: #ffffff;
}
.inviteGift-hd {
	width: 100%;
	display: block;
}
.inviteGift-hd-friend {
	width: 300rpx;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 320rpx;
}
.text {
	height: 70rpx;
	line-height: 70rpx;
	border-bottom: 2rpx solid #f1f1f1;
}
.pic {
	margin: 20rpx 40rpx;
	display: flex;
}
.pic image {
	width: 230rpx;
}
.apptMeasureHome_ft {
	/* position: absolute;
		left: 0;
		bottom: 20rpx; */
	width: 100%;
	height: 100rpx;
	margin-top: 60rpx;
}
.btn {
	height: 80rpx;

	text-align: center;
	line-height: 80rpx;
	border-radius: 40rpx;
	background: #ffe906;
	color: #000000;
	margin-left: 20rpx;
	margin-right: 20rpx;
	box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.3);
	font-size: 28rpx;
	letter-spacing: 4rpx;
}
</style>
