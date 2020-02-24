<template>
	<scroll-view scroll-y class="container">
		<ljl-states :infor="states"></ljl-states>
		<view class="shop-swiper"><swiper-img :imgList="imgList" :heightNum="500" :autoplay="false"></swiper-img></view>
		<view class="shop-infor"><yld-infor :infor="infor"></yld-infor></view>
		<view class="recommend-shop"><yld-recommend></yld-recommend></view>
		<view class="fixed-document primary-cus-button" @click="buyShop">立即兑换</view>
	</scroll-view>
</template>

<script>
'use scrict';
import SwiperImg from '../../../components/SwiperImg.vue';
import YldInfor from './components/YldInfor.vue';
import YldRecommend from './components/YldRecommend.vue';
import LjlStates from '@/components/LjlStates.vue';
import { WRITE_ORDER } from '@/config/router.js';
import { getGoodsDetail, getGoodsConvert, getGoodsEvaluation } from '@/api/goods.js';

export default {
	data: function() {
		return {
			id: '',
			states: {
				index: 0,
				list: [{title: "商品详情"},{title: "用户评价"},{title: "参与记录"}]
			},
			
			// 轮播图
			imgList: [],
			// 商品信息
			infor: {},
			// 商品详情
			detailImgs: [],
			// 用户评价
			goodsEvaluation: {
				list: [],
				listQuery: {
					page: 1,
					size: 5
				}
			},
			// 兑换记录
			goodsConvert: {
				list: [],
				listQuery: {
					page: 1,
					size: 5
				}
			}
		};
	},
	onLoad: function(options) {
		this.id = options.id;
		getGoodsDetail({ id: this.id }).then(res => {
			this.infor = res.goods[0];
			this.imgList = res.showImg;
			this.detailImgs = res.list;
		});
		this.goodsEvaluation.listQuery.id = this.id;
		getGoodsEvaluation(this.goodsEvaluation.listQuery).then(res => {
			this.goodsEvaluation.list = res.list;
		});
		this.goodsConvert.listQuery.id = this.id;
		getGoodsConvert(this.goodsConvert.listQuery).then(res => {
			this.goodsConvert.list = res.list;
		});
	},
	methods: {
		buyShop: function() {
			getApp().globalData.goodsInfor = {
				id: this.infor.id,
				url: this.imgList[0]&&this.imgList[0].url,
				goodsName: this.infor.name,
				goodsOriginalPrice: this.infor.originalPrice,
				goodsPrice: this.infor.price,
				orderCount: this.infor.count
			}
			uni.navigateTo({
				url: WRITE_ORDER
			});
		}
	},
	components: {
		SwiperImg,
		YldInfor,
		YldRecommend,
		LjlStates
	}
};
</script>

<style lang="scss" scoped>
.shop-detail {
	margin-top: 30upx;
	background: #fff;
	height: calc(100% - 840upx);
}
.fixed-document {
	position: fixed;
	bottom: 0;
}
.recommend-shop {
	margin-top: 30upx;
}
</style>
