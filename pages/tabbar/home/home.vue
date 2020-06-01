<template>
	<view :hidden='!imgShow'>
		
	<view :style="{height:height+'px;'}" class="home-hd">
		<yld-top :citys="citys"  @change="cityChange" ></yld-top>
		<!-- <view class="home-top"><yld-top :citys="citys"  @change="cityChange" ></yld-top></view> -->
	</view>
	<scroll-view scroll-y='true' class="scroll-Y"  :style="'height:'+ScreenHeight+'px'">
		
		<view class="swiper-img"><swiper-img :imgList="imgList" :heightNum="450"></swiper-img></view>
		<view class="hot-tip"><yld-hot :valueList="tipList"></yld-hot></view>
		<!-- <yld-nav v-if="todoNav.length" :navList="todoNav"></yld-nav> -->
		<yld-nav  :navList="todoNav"></yld-nav>
		<view style="padding-bottom: 80rpx;">
			<view class="bottom-show" v-for="(item,index) in adimg" :key="index"  @click="linkToPage(item.url)">
				<image :src="item.img" @load='imgshow'  mode="widthFix"></image></view>
		</view>
		
		<!-- <view class="bottom-show"><image :src="adimg[1]" mode="widthFix"></image></view>
		<view class="bottom-show"><image :src="adimg[0]" mode="widthFix"></image></view>
		<view class="bottom-show"><image :src="adimg[2]" mode="widthFix"></image></view> -->
		<!-- <view style="height: 40px;"></view> -->
		<!-- <view style="height: 100rpx;background: #000000;" @click="code"></view> -->
	</scroll-view>
	</view>
</template>

<script>
'use scrict';
import YldTop from './components/YldTop.vue';
import SwiperImg from '../../../components/SwiperImg.vue';
import YldHot from './components/YldHot.vue';
import YldNav from './components/YldNav.vue';
import { HOME_DEMO ,BANNER_ONE,BANNER_TWO,BANNER_THREE,BANNER_FOUR,AD_ONE, AD_TWO, AD_THREE, FENXIANG} from '@/config/image.js';
import * as home from "@/api/tabbar/home.js";
import { loadCity } from '@/api/city.js';
import { BANK_DETAIL,TO_WEB} from '@/config/router.js';
import { getStorage ,setStorage} from '@/utils/storage.js';
// import {getWxCode ,getWxUser}from '@/api/wx.js'
// import {APP_ID,APP_SECRET}from '@/config/wx_gch.js'
// import {WEIXIN_CODE , WEIXIN_USERINFO } from '@/config/api.js';
// import { refreshToken } from  '../../../utils/openLogin'
var _self;
export default {
	data: function() {
		return {
			todoNav: [],
			// imgList: [{'img': BANNER_ONE},{'img': BANNER_TWO},{'img': BANNER_THREE},{'img': BANNER_FOUR}],
			imgList: [],
			tipList: [],
			demoImg: HOME_DEMO,
			// adimg:[AD_ONE, AD_TWO, AD_THREE],
			adimg:[],
			citys: [],
			dataL:[],
			height:40,
			imgShow:false,
			ScreenHeight:667
		};
	},
	onLoad: async function(options) {
		_self = this
		
		console.log(this.imgList)
		// alert(this.getQuery('code'))
		// if(this.getQuery('code')){
			
		// 	let e={
		// 		appid:APP_ID,
		// 		secret:APP_SECRET,
		// 		code:this.getQuery("code")
		// 	}
		// 	uni.request({
		// 					url: WEIXIN_CODE, //仅为示例，并非真实接口地址。
		// 					data: e,
		// 	                method:'GET',//请求方式  或GET
		// 					success: res => {
		// 							// console.log('返回', res);
		// 							setStorage('openId', res.data.openid)
		// 							setStorage('tempToken', res.data.access_token)
									
		// 							let a={
		// 								access_token:res.data.access_token,
		// 								openid:res.data.openid
		// 							}
									
		// 							uni.request({
		// 											url: WEIXIN_USERINFO, //仅为示例，并非真实接口地址。
		// 											data: a,
													
		// 							                method:'GET',//请求方式  或GET
		// 											success: respone => {
		// 													// console.log('返回', res);
		// 													setStorage('userInfo',respone.data)
		// 													setStorage('isLogin', true)
															
		// 														}
		// 											});
									
									
								
		// 							       }
									
		// 								})
			
		// }else{
		// 	alert('无')
		// }
		
		home.loadHomeCarousel({type:1}).then(res => {
			_self.imgList = res.list;
		});
		home.loadHomeCarousel({type:2}).then(res => {
			_self.adimg = res.list;
		});
		home.loadHomeNews().then(res => {
			_self.tipList = res.list;
		});
		loadCity().then(res => {
			let list = []
			for (let i = 0; i < res.list.length; i++) {
				list.push({
					label: res.list[i].name,
					value: i
				})
			}
			_self.citys = list
			
			_self.dataL = res.list.map(res=>{
				let e=[]
				res.button.map(reso=>{
					if(reso.bname=='装修分期'||reso.bname=='设计师认证'){
						
					}else{
						e.push(reso)
					}
				})
				let c={
					bname: "装修分期",
					icon: "https://www.feiaizn.com/images/20200528143342_navthree.png",
					bid: "11",
					url: "/pages/todoChild/decoration/decorationPicture/index"
				}
				e.push(c)
				console.log(e)
				return {
					button: e,
					name: res.name,
					id: res.id,
					uuid:res.uuid
				}
			})
			_self.todoNav = _self.dataL[0].button
			
			// _self.citys = res.list
			// _self.todoNav = this.citys[0].button;
		});
		var sys=getStorage('sysInfo')
		uni.getSystemInfo({
		        success:function(e){
		            _self.height = e.statusBarHeight
		            // #ifndef MP
		            if(e.platform == 'android') {
		                _self.height = e.statusBarHeight + 50
						_self.ScreenHeight=sys.windowHeight - _self.height
		            }else {
		               _self.height = e.statusBarHeight + 45
					   _self.ScreenHeight=sys.windowHeight - _self.height
		            }
		            // #endif
		            
		            // #ifdef MP-WEIXIN
		            let custom = wx.getMenuButtonBoundingClientRect()
		            _self.height = custom.bottom + custom.top - e.statusBarHeight
					_self.ScreenHeight=sys.windowHeight - _self.height
		            // #endif
		            
		            // #ifdef MP-ALIPAY
		            _self.height = e.statusBarHeight + e.titleBarHeight
					_self.ScreenHeight=sys.windowHeight - _self.height
		            // #endif
					
		        }
		    })
			
	if(options.scene){
	    let scene=decodeURIComponent(options.scene);
		setStorage('applyId',scene)
	    //&是我们定义的参数链接方式
	    // let userId=scene.split("&")[0];
	    // let recommendId=scene.split('&')[1];
	    //其他逻辑处理。。。。。
	  }
			
			
	},
	methods: {
		async code(){
			let e={
				appid:APP_ID,
				secret:APP_SECRET,
				code:this.getQuery("code")
			}
			let data = await getWxCode(e)
			console.log(data)
			let dataT=JSON.parse(data)
			setStorage('openId', dataT.openid)
			
			let a={
				access_token:dataT.access_token,
				openid:dataT.openid
			}
			
			let userInfo = await getWxUser(a)
			refreshToken()
			console.log(userInfo)
			
		},
		 getQuery(name) {
		    // 正则：[找寻'&' + 'url参数名字' = '值' + '&']（'&'可以不存在）
		    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		    let r = location.search.substr(1).match(reg);
		    if(r != null) {
		        // 对参数值进行解码
		        return r[2];
		    }
		    return null;
		},
		imgshow(){
			_self.imgShow=true
		},
		linkToPage: function(e) {
			if(!e){return}
			var testmsg=e.substring(e.lastIndexOf('.')+1)
			        const extensio = testmsg === 'jpg'
			        const extensio2 = testmsg === 'png'
			        const extensio3 = testmsg === 'jpeg'
			        if(extensio || extensio2 || extensio3) {
			          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			        } else {
						
					 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
					}
			
		},
		cityChange({item,index}) {
			// console.log(e)
			// console.log(this.dataL)
			this.todoNav = this.dataL.find(res => res.name == item).button;
			// this.todoNav = item.button;
			let temp = this.citys[0];
			this.citys[0] = this.citys[index];
			this.citys[index] = temp;
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
		　　　　shareObj.path = '/pages/tabbar/home/home';
		　　}
		　　// 返回shareObj
		　　return shareObj;
		}
		
	},
	components: {
		YldTop,
		SwiperImg,
		YldNav,
		YldHot
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.scroll-Y{
		height: 1115rpx;
		width: 100%;
	}
	.home-hd{
		background: #fff;
		position: relative;
	}
.home-top {
	position: absolute;
	bottom: 2px;
	width: 100%;
	height: 70rpx;
	z-index: 99;
}
.swiper-img {

}
.bottom-show {
	margin: 25rpx 30rpx 0 25rpx ;
}
.bottom-show image {
	width: 100%;
	
	
}
</style>