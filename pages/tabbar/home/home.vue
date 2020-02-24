<template>
	<scroll-view scroll-y class="container">
		<view class="home-top"><yld-top :citys="citys" @change="cityChange"></yld-top></view>
		<view class="swiper-img"><swiper-img :imgList="imgList" :heightNum="400"></swiper-img></view>
		<view class="hot-tip"><yld-hot :valueList="tipList"></yld-hot></view>
		<yld-nav v-if="todoNav.length" :navList="todoNav"></yld-nav>
		<view class="bottom-show"><image :src="demoImg" mode="widthFix"></image></view>
	</scroll-view>
</template>

<script>
'use scrict';
import YldTop from './components/YldTop.vue';
import SwiperImg from '../../../components/SwiperImg.vue';
import YldHot from './components/YldHot.vue';
import YldNav from './components/YldNav.vue';
import { HOME_DEMO } from '@/config/image.js';
import * as home from "@/api/tabbar/home.js";
import { loadCity } from '@/api/city.js';

export default {
	data: function() {
		return {
			todoNav: [],
			imgList: [],
			tipList: ['非客双汇活动商品时间2019/12/19-2020/03/20', '非客双汇活动商品时间2019/12/19-2020/03/20', '非客双汇活动商品时间2019/12/19-2020/03/20'],
			demoImg: HOME_DEMO,
			citys: []
		};
	},
	onLoad: function() {
		home.loadHomeCarousel().then(res => {
			this.imgList = res.list;
		});
		loadCity().then(res => {
			this.citys = res.list;
			this.todoNav = this.citys[0].button;
		});
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
.home-top {
	position: absolute;
	top: 0;
	width: 100%;
	height: 70rpx;
	z-index: 99;
}
.swiper-img {

}
.bottom-show {
	width: 100%;
	margin-top: 45rpx;
}
.bottom-show image {
	width: 100%;
}
</style>