<template>
	<view class="page_poster-box page_view-all-inner-padding">
		<view class="poster_view-main">
			<view class="poster_image-logo-box">
				<image class="poster_image-logo" :src="logo" />
				<text class="poster_text-logo-desc">扫描或长按二维码</text>
			</view>
			<image class="poster_image-back page_view-full" :src="options.list[options.index]" mode="aspectFill" />
		</view>
		<view class="poster_view-options" @click="optionChange">
			<image class="poster_image-option" v-for="(item,index) in options.list" :key="index" :src="item" :data-index="index" mode="aspectFill" />
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { POSTER_1, POSTER_2, POSTER_3, POSTER_4, COMPANY_LOGO } from "@/config/image.js";
	
	export default {
		data() {
			return {
				options: {
					index: 0,
					list: [POSTER_1,POSTER_2,POSTER_3,POSTER_4]
				},
				logo: COMPANY_LOGO
			}
		},
		onLoad(options) {
			options.title && uni.setNavigationBarTitle({ title: options.title });
		},
		methods: {
			optionChange(e) {
				this.options.index = e.target.dataset.index;
			}
		}
	}
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
		z-index: -1;
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
		height: 100%;
	}
	.poster_image-option + .poster_image-option {
		margin-left: 30rpx;
	}
</style>
