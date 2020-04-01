<template>
	<view>
		
	<view :style="{height:height+'px;'}" class="home-hd">
		<view class="home-top"><yld-top :citys="citys" @change="cityChange"></yld-top></view>
	</view>
	<scroll-view scroll-y class="container" style="background: #FFFFFF;">
		
		<view class="swiper-img"><swiper-img :imgList="imgList" :heightNum="400"></swiper-img></view>
		<view class="hot-tip"><yld-hot :valueList="tipList"></yld-hot></view>
		<!-- <yld-nav v-if="todoNav.length" :navList="todoNav"></yld-nav> -->
		<yld-nav ></yld-nav>
		<view class="bottom-show"><image :src="adimg[1]" mode="widthFix"></image></view>
		<view class="bottom-show"><image :src="adimg[0]" mode="widthFix"></image></view>
		<view class="bottom-show"><image :src="adimg[2]" mode="widthFix"></image></view>
	</scroll-view>
	</view>
</template>

<script>
'use scrict';
import YldTop from './components/YldTop.vue';
import SwiperImg from '../../../components/SwiperImg.vue';
import YldHot from './components/YldHot.vue';
import YldNav from './components/YldNav.vue';
import { HOME_DEMO ,BANNER_ONE,BANNER_TWO,BANNER_THREE,BANNER_FOUR,AD_ONE, AD_TWO, AD_THREE} from '@/config/image.js';
import * as home from "@/api/tabbar/home.js";
import { loadCity } from '@/api/city.js';
var _self;
export default {
	data: function() {
		return {
			todoNav: [],
			imgList: [{'img': BANNER_ONE},{'img': BANNER_TWO},{'img': BANNER_THREE},{'img': BANNER_FOUR}],
			tipList: ['非客双汇活动商品时间2019/12/19-2020/03/20', '非客双汇活动商品时间2019/12/19-2020/03/20', '非客双汇活动商品时间2019/12/19-2020/03/20'],
			demoImg: HOME_DEMO,
			adimg:[AD_ONE, AD_TWO, AD_THREE],
			citys: [],
			height:40
		};
	},
	onLoad: function() {
		_self = this
		console.log(this.imgList)
		home.loadHomeCarousel().then(res => {
			this.imgList = res.list;
		});
		loadCity().then(res => {
			this.citys = res.list;
			this.todoNav = this.citys[0].button;
		});
		uni.getSystemInfo({
		        success:function(e){
		            _self.height = e.statusBarHeight
		            // #ifndef MP
		            if(e.platform == 'android') {
		                _self.height = e.statusBarHeight + 50
		            }else {
		               _self.height = e.statusBarHeight + 45
		            }
		            // #endif
		            
		            // #ifdef MP-WEIXIN
		            let custom = wx.getMenuButtonBoundingClientRect()
		            _self.height = custom.bottom + custom.top - e.statusBarHeight
		            // #endif
		            
		            // #ifdef MP-ALIPAY
		            _self.height = e.statusBarHeight + e.titleBarHeight
		            // #endif
		        }
		    })
	},
	methods: {
		cityChange({item,index}) {
			this.todoNav = item.button;
			let temp = this.citys[0];
			this.citys[0] = this.citys[index];
			this.citys[index] = temp;
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

<style scoped>
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