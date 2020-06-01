<template>
	<view class="recommend-box">
		<ljl-states :infor="states" @change="stateChange" />
		<!-- <view
			class="activity"
			v-if="states.index === 0 ? item.applyCount !== item.count : item.applyCount === item.count"
			v-for="(item, index) in activityList"
			:key="index"
			@click="linkToRoute(item)"
		>
			<ljl-activity :infor="item" />
		</view> -->
		
		<view class="schedule-left" :hidden='states.index==1'>
			<view :hidden='!imgShow'>
			<button class="box" @click="share" open-type="share" :data-id='id'  v-for="(item,index) in activityList" :key="index" style="background: #FFFFFF;">
				<view class="box-left" :style="'background:'+item.color" >
					<image @load='imgshow' :src='item.img' mode="widthFix"></image>
					<view class="text" :style="'color:'+item.colorOne">{{item.name}}</view>
				</view>
				<view class="box-right">{{item.describe}}</view>
			</button>
			<!-- <button class="box" open-type="share" @click="linkToRoute" v-for="(item,index) in activityList" :key="index" style="background: #FFFFFF;">
				<view class="box-left" :style="'background:'+colorD[index]" >
					<image :src='item.img' mode="widthFix"></image>
					<view class="text" style="color: #825203;">{{item.roleName}}</view>
				</view>
				<view class="box-right">{{item.describe}}</view>
			</button> -->
			<!-- <button class="box" open-type="share" @click="linkToRoute" style="background: #FFFFFF;">
				<view class="box-left" style="background: #EBCD9B;">
					<image :src='img[0]' mode="widthFix"></image>
					<view class="text" style="color: #825203;">推荐会员</view>
				</view>
				<view class="box-right">还差一人，可获得10积分</view>
			</button>
			<button class="box" open-type="share" @click="linkToRoute" style="background: #FFFFFF;">
				<view class="box-left" style="background: #EB9B9B;">
					<image :src='img[1]' mode="widthFix"></image>
					<view class="text" style="color: #860A0A;">推荐设计师</view>
				</view>
				<view class="box-right">还差一人，可获得50积分</view>
			</button>
			<button class="box" open-type="share" @click="linkToRoute" style="background: #FFFFFF;">
				<view class="box-left" style="background: #9BD2EB;">
					<image :src='img[2]' mode="widthFix"></image>
					<view class="text" style="color: #07587C;">推荐客户</view>
				</view>
				<view class="box-right">还差一人，可获得500积分</view>
			</button> -->
			</view>
		</view>
		<view class="schedule-right" :hidden='states.index==0'>
			
			<view class="box"  v-for="(item,index) in activityListCom" :key="index" style="background: #FFFFFF;">
				<view class="box-left" :style="'background:'+item.color" >
					<image  :src='item.img' mode="widthFix"></image>
					<view class="text" :style="'color:'+item.colorOne">{{item.name}}</view>
				</view>
				<view class="box-right">{{item.describe}}<image :src="img[3]" mode="widthFix"></image></view>
			</view>
			<!-- <view class="box">
				<view class="box-left" :style="color[index]">
					<image :src='img[0]' mode="widthFix"></image>
					<view class="text" style="color: #825203;">推荐会员</view>
				</view>
				<view class="box-right"><text>还差一人，可获得10积分</text> <image :src="img[3]" mode="widthFix"></image></view>
			</view> -->
			<!-- <view class="box">
				<view class="box-left" style="background: #EBCD9B;">
					<image :src='img[0]' mode="widthFix"></image>
					<view class="text" style="color: #825203;">推荐会员</view>
				</view>
				<view class="box-right"><text>还差一人，可获得10积分</text> <image :src="img[3]" mode="widthFix"></image></view>
			</view>
			<view class="box">
				<view class="box-left" style="background: #EB9B9B;">
					<image :src='img[1]' mode="widthFix"></image>
					<view class="text" style="color: #860A0A;">推荐设计师</view>
				</view>
				<view class="box-right"><text>还差一人，可获得10积分</text> <image :src="img[3]" mode="widthFix"></image></view>
			</view>
			<view class="box">
				<view class="box-left" style="background: #9BD2EB;">
					<image :src='img[2]' mode="widthFix"></image>
					<view class="text" style="color: #07587C;">推荐客户</view>
				</view>
				<view class="box-right"><text>还差一人，可获得500积分</text> <image :src="img[3]" mode="widthFix"></image></view>
			</view> -->
		</view>
	</view>
</template>

<script>
'use scrict';
import LjlActivity from './components/LjlActivity.vue';
import LjlStates from '@/components/LjlStates';
import { RECOMMENDED_MEMBER } from '@/config/router.js';
import { loadActivity, completeActivity } from '@/api/activity.js';
import { RECOMMEND_DESIGNER, RECOMMEND_VIP, RECOMMEND_CLIENT, RECOMMEND_OVER,FENXIANG} from '@/config/image.js';
import { getStorage ,setStorage} from '@/utils/storage.js';
import { getWxSignature } from '@/api/wx.js';
		import wx from '@/utils/wx-jssdk.js';
var _self;
export default {
	data() {
		return {
			states: {
				index: 0,
				list: [{ title: '进行中的活动' }, { title: '已结束的活动' }]
			},
			// activityList: [
			// 	{ title: '推荐会员', descript: '还差1人，可获得10积分' },
			// 	{ title: '推荐设计师', descript: '还差1人，可获得50积分' },
			// 	{ title: '推荐客户', descript: '成交后，可获得500积分' }
			// ]
			img:[RECOMMEND_VIP,RECOMMEND_DESIGNER,RECOMMEND_CLIENT,RECOMMEND_OVER],
			activityList:[],
			activityListCom:[],
			colorD:["#EBCD9B","#EB9B9B","#9BD2EB",
			"#EBCD9B","#EB9B9B","#9BD2EB",
			"#EBCD9B","#EB9B9B","#9BD2EB",
				
			],
			imgShow:false,
			id:''
			
		};
	},
	computed: {
	            color(e) {
	                return this.colorD[e];
	            },
				
	        },
	onLoad() {
		_self=this
		
		_self.userInfo = getStorage('userInfo');
		_self.id=_self.userInfo.id
		this.loadListForActivity();
		this.wxConfig();
	},
	methods: {
		share(){
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
		
		imgshow(){
			_self.imgShow=true
		},
		
		randomRgb() {
		        let R = Math.floor(Math.random() * 255);
		        let G = Math.floor(Math.random() * 255);
		        let B = Math.floor(Math.random() * 255);
		        return 'rgb(' + R + ',' + G + ',' + B + ')'
		          // width: (item.num / item.total * 100) + '%', // 进度条
		          
		        
		      },
		
		
		onShareAppMessage: function( options ){
		　　var that = this;
		　　// 设置菜单中的转发按钮触发转发事件时的转发内容
		　　var shareObj = {
		　　　　title: "邀请有礼",        // 默认是小程序的名称(可以写slogan等)
		　　　　path: '/pages/tabbar/home/home',        // 默认是当前页面，必须是以‘/’开头的完整路径
		// 　　　　imageUrl: FENXIANG,     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
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
		},
		
		/**
		 * 加载活动列表
		 */
		loadListForActivity() {
			
			loadActivity().then(res => {
				var a=[]
				var b=[]
				res.list.map(res=>{
					let e=this.randomRgb()
					let c=this.randomRgb()
					if(Date.now()>Number(res.edate)){
						if(res.roleName == "设计师"){
							b.push({
								color:"#EB9B9B",
								colorOne:"#860A0A",
								...res
							})
							return
						}
						if(res.roleName == "客户"){
							
							
							b.push({
								color:"#9BD2EB",
								colorOne:"#07587C",
								...res
							})
							return
						}
						if(res.roleName == "会员"){
							
							
							b.push({
								color:"#EBCD9B",
								colorOne:"#825203",
								...res
							})
							return
						}
						b.push({
							color:e,
							colorOne:c,
							...res
						})
						
					} else {
						if(res.roleName == "设计师"){
							a.push({
								color:"#EB9B9B",
								colorOne:"#860A0A",
								...res
							})
							return
						}
						if(res.roleName == "客户"){
							a.push({
								color:"#9BD2EB",
								colorOne:"#07587C",
								...res
							})
							return
						}
						if(res.roleName == "会员"){
							a.push({
								color:"#EBCD9B",
								colorOne:"#825203",
								...res
							})
							return
						}
						a.push({
							color:e,
							colorOne:c,
							...res
						})
						
					}
			
				});
				this.activityList = a
				this.activityListCom = b
			});
		},

		/**
		 * 切换状态
		 */
		stateChange({ index }) {
			this.states.index = index;
		},

		/**
		 * 链接到路由
		 */
		linkToRoute(item) {
			// uni.navigateTo({
			// 	url: RECOMMENDED_MEMBER
			// });
		}
	},
	components: {
		LjlActivity,
		LjlStates
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	.box{
		height: 70px;
		display: flex;
		background: #FFFFFF;
		
	}
	.box-left{
		flex: 1;
		
	}
	.box-right{
		flex: 2.5;
		text-align: center;
		line-height: 70px;
	}
	.box-left{
		margin: 10px 20px 10px 20px;
	}
	.box-left image{
		width: 15px;
		margin: 5px auto;
		display: block;
	}
	.box-left .text{
		font-size: 11px;
		text-align: center;
		font-family:FZLanTingKanHei-R-GBK;
	}
	.box-right{
		font-size: 12px;
		text-align: left;
		margin-left: 10px;
	}
	.box-right image{
		width: 30px;
		vertical-align: middle;
		margin-left: 10px;
	}
</style>
