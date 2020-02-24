<template>
	<view class="promote-goods-box">
		<view class="search"><search @change="searchChange" /></view>
		<view class="goods" v-for="(item, index) in list" :key="index" @click="goodsChange(index)"><LjlGoodsInfo :infor="item" :checked="selectedIndex === index" /></view>
		<view class="submit-box">
			<view class="submit" @click="share">立即分享</view>
			<view class="cancel" @click="navigateBack">取消</view>
		</view>
		<share-canvas ref="ShareCanvas" :config="shareConfig" :width="250" :height="400" />
	</view>
</template>

<script>
'use scrict';
import Search from '@/components/Search.vue';
import LjlGoodsInfo from './components/LjlGoodsInfo.vue';
import ShareCanvas from './components/ShareCanvas/ShareCanvas.vue';
import { getGoodsList } from '@/api/goods.js';

export default {
	data() {
		return {
			selectedIndex: 0,
			list: [
				{
					title: '月星真皮沙发',
					desc: '法国品牌|7天包退|官方直售',
					rule: { title: '3期免息', content: '999元/期' },
					checked: true,
					url: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2982686518,338089367&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=c5b1a0d04e6c4936497a09bc4f6a5fb4'
				},
				{
					title: '马可波罗地瓷砖地板砖墙砖红色万千热情款',
					desc: '法国品牌|7天包退|官方直售',
					rule: { title: '3期免息', content: '999元/期' },
					checked: false,
					url: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2982686518,338089367&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=c5b1a0d04e6c4936497a09bc4f6a5fb4'
				}
			],
			listQuery: {
				page: 1,
				size: 5,
				type: 2
			},
			shareConfig: {}
		};
	},
	onLoad: async function() {
		await this.getList();
		this.setShareConfig();
	},
	onShow() {
		this.$refs.ShareCanvas.checkPermission();
	},
	methods: {
		goodsChange: function(index) {
			this.selectedIndex = index;
			this.setShareConfig();
		},
		searchChange: function(value) {
			console.log('搜索');
		},
		navigateBack: function() {
			uni.navigateBack({delta: 1});
		},
		getList: async function() {
			this.list = (await getGoodsList(this.listQuery)).list;
		},

		/**
		 * 创建推广图对象
		 */
		setShareConfig: function() {
			let item = this.list[this.selectedIndex];
			this.shareConfig = {
				imgUrl: item.url[0].path,
				qRCodeUrl: item.url[0].path,
				scene: "scene",
				title: item.name,
				price: 99
			}
		},
		
		/**
		 * 点击分享
		 */
		share: function() {
			this.$refs.ShareCanvas.share();
		}
	},
	components: {
		Search,
		LjlGoodsInfo,
		ShareCanvas
	}
};
</script>

<style lang="scss">
page {
	background: $color_background-secondary;
}
.promote-goods-box {
	box-sizing: border-box;
	padding: 0 $distance_page-inner-padding;
	> view {
		padding: 20rpx 0;
	}
	.goods + .goods {
		border-top: 1rpx solid $color_border;
	}
	.submit-box {
		position: fixed;
		bottom: 20rpx;
		color: white;
		font-size: 36rpx;
		width: calc(100% - #{$distance_page-inner-padding * 2});
		view {
			width: 100%;
			height: 100rpx;
			border: 1rpx solid $color_border;
			text-align: center;
			line-height: 100rpx;
		}
		view:nth-child(1) {
			background-color: #fad64c;
			margin-bottom: 12rpx;
		}
		view:nth-child(2) {
			color: $color_text-regular;
		}
	}
}
</style>