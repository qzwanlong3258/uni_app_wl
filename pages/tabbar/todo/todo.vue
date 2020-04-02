<template>
	<view class="todo-box">
		<view class="shop-swiper"><swiper-img :imgList="imgList" :heightNum="500"></swiper-img></view>
		<view class="shop-nav"><yld-nav></yld-nav></view>
		<view><yld-shop :shopList="shopList" @searchChange="searchChange"></yld-shop></view>
	</view>
</template>

<script>
'use scrict';
import SwiperImg from '../../../components/SwiperImgtodo.vue';
import YldNav from './components/YldNav.vue';
import YldShop from './components/YldShop.vue';
import { getGoodsList } from '@/api/goods.js';
import { loadHomeCarousel } from '@/api/tabbar/home.js';

export default {
	data: function() {
		return {
			listQuery: {
				page: 1,
				size: 6,
				type: 1
			},
			imgList: [],
			shopList: []
		};
	},
	onLoad: function() {
		this.getCarousel();
		this.getList();
	},
	methods: {
		getCarousel: async function() {
			this.imgList = (await loadHomeCarousel()).list;
		},
		getList: async function() {
			this.shopList = (await getGoodsList(this.listQuery)).list;
		},
		searchChange: function(value) {
			this.listQuery.name = value;
			this.getList();
		}
	},
	components: {
		SwiperImg,
		YldNav,
		YldShop
	}
};
</script>

<style lang="scss" scoped></style>
