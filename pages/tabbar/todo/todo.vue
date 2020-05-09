<template>
	<view class="todo-box">
		<view :hidden='!imgShow' >
		<view class="shop-swiper"><swiper-img :imgList="imgList" :heightNum="450"></swiper-img></view>
		<view class="shop-nav"><yld-nav></yld-nav></view>
		<view><yld-shop :shopList="shopList" @searchChange="searchChange" @imgshow='imgshow'></yld-shop></view>
		</view>
	</view>
</template>

<script>
'use scrict';
import SwiperImg from '../../../components/SwiperImg.vue';
import YldNav from './components/YldNav.vue';
import YldShop from './components/YldShop.vue';
import { getGoodsList,getGoodsDetail } from '@/api/goods.js';
import { loadHomeCarousel } from '@/api/tabbar/home.js';
var _self
export default {
	data: function() {
		return {
			listQuery: {
				page: 1,
				size: 6,
				type: 1
			},
			imgList: [],
			shopList: [],
			imgShow:false
		};
	},
	onLoad: function() {
		_self=this
		this.getCarousel();
		this.getList();
	},
	methods: {
		imgshow(){
			_self.imgShow=true
		},
		getCarousel: async function() {
			this.imgList = (await loadHomeCarousel({type:1})).list;
		},
		getList: async function() {
			let a =(await getGoodsList({type:1})).list
			
			a.map(async res=>{
				let e= (await getGoodsDetail({id:res.uuid})).showimg[0].url
				console.log(e)
				this.shopList.push({
					id:res.uuid,
					img:e,
					name:res.name,
					price:res.price
				}) 
			});
			this.$forceUpdate()
			console.log(this.shopList)
			
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
