<template>
	<view class="menu-box" :class="infor.center">
		<view style="border-bottom: 2rpx solid rgba(241,241,241,1);
			height: 60rpx;line-height: 60rpx;">
			<image :src='infor.img' mode="widthFix" style="width: 30rpx;margin-left: 20rpx;vertical-align: middle;"></image> <text class="title">{{infor.title}}</text>
			</view>
		
		<view class="content">
			<view class="item" v-for="(item,index) in infor.list" :key="index" :style="{width: infor.list.length > 3 ? '33%' : '33%'}" @click="linkToRoute({route:item.href,index})">
			    <view style="margin-bottom: 30rpx;">
					<ljl-menu-item :infor="item" />
				</view>
				
			</view>
		</view>
		<!-- :style="{width: infor.list.length > 3 ? '25%' : '33%'}" -->
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
			font-size: 30rpx;
			
			color: #333333;
			margin-left: 20rpx;
			vertical-align: middle;
			
		}
		.content {
			display: flex;
			flex-wrap: wrap;
			border-bottom: 6rpx solid rgba(241,241,241,1);
			padding: 20rpx 0;
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
