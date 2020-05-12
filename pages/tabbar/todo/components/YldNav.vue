<template>
	<view class="nav-box">
		<view class="nav-clonum" v-for="(item, index) in navList" :key="index" @click="linkToRoute(item.href)">
			<i :class="['iconfont', item.icon]"></i>
			<text class="page_text-single-omit">{{item.name + (item.name !== '我的积分' || isNaN(integral) ? '' : ':' + integral)}}</text>
		</view>
	</view>
</template>

<script>
import { ORDER_LIST } from '@/config/router.js';
import { loadIntegral } from '@/api/tabbar/todo.js';

export default {
	props: {
		integral: {
			type: Number,
			default: 0
		}
		},
	data() {
		return {
			navList: [
				{
					id: 1,
					icon: 'iconjifen',
					name: '我的积分',
					href: ''
				},
				{
					id: 2,
					icon: 'icon19',
					name: '兑换记录',
					href: `${ORDER_LIST}?title=兑换记录`
				}
			],
			// integral: NaN
		};
	},
	created() {
		// this.loadIntegral();
	},
	methods: {
		/**
		 * 加载积分
		 */
		loadIntegral: function() {
			loadIntegral().then(res => {
				// console.log(res)
				this.integral = res.integral;
			});
		},
		
		linkToRoute: function(href) {
			uni.navigateTo({
				url: href
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.nav-box {
	display: flex;
	width: 100%;
	height: 50upx;
	line-height: 50upx;
	margin: 30upx 0;
	.nav-clonum {
		width: 50%;
		display: flex;
		justify-content: center;
		i {
			font-size: 50upx;
			margin-right: 6upx;
			color: #333;
		}
		text {
			color: #333;
			font-size: 32upx;
			max-width: 75%;
		}
		&:not(:last-child) {
			border-right: 2upx solid #ddd;
		}
	}
}
</style>
