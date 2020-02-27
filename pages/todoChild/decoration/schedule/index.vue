<template>
	<view class="schedule">
		<ljl-states :infor="states" @change="stateChange" />
		<view class="scheduleCard">
			<view class="scheduleCard-top" style="height: 50%;border-bottom:4rpx solid #F0F0F0 ;">
				
			</view>
			<view class="scheduleCard-bottom" style="height: 50%;">
				
			</view>
		</view>
	</view>
</template>


<script>
	'use scrict';
	import LjlStates from '@/components/LjlStates';
	
	export default {
		data() {
			return {
				states: {
					index: 0,
					list: [ { title: '正常', nullContent: "暂无客户" }, { title: '非正常', nullContent: "暂无设计师" }]
				},
			}
		},
		onLoad(options) {
			
		},
		methods: {
			/**
			 * 切换状态
			 */
			stateChange: async function({ index }) {
				this.states.index = index;
				this[`stateTo${index}`] && this[`stateTo${index}`]();
			}
		},
		components: {
			LjlStates
		}
	}
</script>

<style>
	.schedule{
	font-size: 32rpx;
	background: rgba(242,246,249,1);}
	
	.scheduleCard{
		margin: 48rpx 15rpx;
		height: 231rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		overflow: hidden;
		padding: 20rpx;
	}
	
	
	
</style>
