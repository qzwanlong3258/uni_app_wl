<template>
	<view class="menu-box" :class="infor.center">
		<text class="title">{{infor.title}}</text>
		<view class="content">
			<view class="item" v-for="(item,index) in infor.list" :key="index" :style="{width: infor.list.length > 3 ? '25%' : '33%'}" @click="linkToRoute({route:item.href,index})">
				<ljl-menu-item :infor="item" />
			</view>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import LjlMenuItem from './components/LjlMenuItem.vue';
	
	export default {
		props: {
			infor: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		methods: {
			
			/**
			 * 链接到路由
			 */
			linkToRoute({route,index}) {
				uni.navigateTo({
					url: `${route}?index=${index}`,
					fail() {
						uni.switchTab({ url: route });
					}
				});
			}
		},
		components: {
			LjlMenuItem
		}
	}
</script>

<style lang="scss" scoped>
	.menu-box {
		.title {
			font-size: 36rpx;
			color: #333333;
		}
		.content {
			display: flex;
			flex-wrap: wrap;
		}
		.item {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 30rpx;
		}
	}
	.menu-box.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			margin: 20rpx 0 35rpx;
		}
	}
</style>
