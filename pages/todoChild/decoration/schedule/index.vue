<template>
	<view class="schedule">
		<ljl-states :infor="states" @change="stateChange"  />
		<view class="schedule-left" :hidden='states.index==1'>
			<view class="schedule-hd">
				<view class="schedule-hd-left">
					<image :src="userInfo.avatarUrl" class="schedule-hd-left-img" mode="aspectFill">
				</view>
				<view class="schedule-hd-mid">
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{userInfo.nickName}}</view>
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{userInfo.phone}}</view>
				</view>
				<view class="schedule-hd-right">
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 20rpx;;color:#999999">正在进行</view>
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">征信查询</view>
				</view>
			</view>
			<view class="schedule-bd">
				<view style="font-size: 28rpx;color:#999999">贷款额:<text style="font-size: 28rpx;color:#8A4850">500000</text></view>
				<view style="font-size: 29rpx;color:#999999">贷款日期: 2020-01-20</view>
			</view>
			<uni-steps :options="[{title: '提交申请'}, {title: '资料审核'}, {title: '征信查询'}, {title: '线下面签'}, {title: '打款成功'}]" :active="1"></uni-steps>
			<view class="schedule-ft">
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
			</view>
		</view>
		<view class="schedule-left" :hidden='states.index==0'>
			<view class="schedule-hd">
				<view class="schedule-hd-left">
					<image :src="userInfo.avatarUrl" class="schedule-hd-left-img" mode="aspectFill">
				</view>
				<view class="schedule-hd-mid">
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">{{userInfo.nickName}}</view>
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 10rpx;;color:#999999">电话：{{userInfo.phone}}</view>
				</view>
				<view class="schedule-hd-right">
					<view class="schedule-hd-mid-bottom" style="font-size: 28rpx;padding-left: 20rpx;;color:#999999">正在进行</view>
					<view class="schedule-hd-mid-top" style="font-size: 30rpx;padding: 10rpx;">征信查询</view>
				</view>
			</view>
			<view class="schedule-bd">
				<view style="font-size: 28rpx;color:#999999">贷款额:<text style="font-size: 28rpx;color:#8A4850">500000</text></view>
				<view style="font-size: 29rpx;color:#999999">贷款日期: 2020-01-20</view>
			</view>
			<uni-steps :options="[{title: '提交申请'}, {title: '资料审核'}, {title: '征信查询'}, {title: '线下面签'}, {title: '打款成功'}]" :active="1"></uni-steps>
			<view class="schedule-ft">
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
				<view style="width: 20%;height: 40px;">
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">2020-01-23</view>
					<view style="height: 20px;text-align: center;font-size: 10px;color: #666666;">9:30</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import uniSteps from '@/components/uni-steps/uni-steps.vue';
import LjlStates from '@/components/LjlStates';
export default {
	 components: {uniSteps,LjlStates
	 },
	data() {
		return{
			userInfo:{
				avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				nickName:'李三',
				phone:13584115454
			},
			states: {
				index: 0,
				list: [ { title: '正常', nullContent: "暂无客户" }, { title: '非正常', nullContent: "暂无设计师" }]
			},
		}
	},
	methods:{
		/**
		 * 切换状态
		 */
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		}
	},
	async onLoad() {}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
		
	.schedule{
		/* background: #FFFFFF;
		position: absolute;
		width: 100%;
		height: 100%; */
	}
	.schedule-hd{
		
		display: flex;
		padding: 10px 0;
		margin: 0 10px ;
		border-bottom: 1px solid rgba(241,241,241,1);;
	}
	.schedule-hd-left{
		flex-basis: 100rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-left: 10px;
		
	}
	.schedule-hd-left image{
		width: 110rpx;
		height: 110rpx;
		display: block;
		margin-top: -5rpx;
		margin-left: -5rpx;
	}
	.schedule-hd-mid{
		margin-left: 10px;
		flex: 1;
		
	}
	.schedule-hd-right{
		flex-basis: 180rpx;
		margin-right: 10px;
	}
	.schedule-bd{
		display: flex;
		justify-content: space-between;
		height: 40px;
		line-height: 40px;
		margin: 0 20px 20px;
	}
	.schedule-ft{
		display: flex;
	}
	
	
</style>
