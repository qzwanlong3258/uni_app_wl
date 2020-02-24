<template>
	<view class="application_view-box page_view-all-inner-padding">
		<view class="application_view-module" v-for="(item,index) in form" :key="index">
			<text class="application_text-title">{{item.title}}</text>
			<view class="application_view-content page_view-box page_view-box-inner-padding">
				<view class="page_view-border-top" v-for="(row,j) in item.list" :key="j">
					<application-input v-if="row.type === 'text'" :infor="row" /> mn  
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { ApplicationInput } from './components/ApplicationInput.vue';
	
	export default {
		data() {
			return {
				form: [
					{title: "申请信息", list: [
						{title: "额度", submitKey: "quota", type: "text"},
						{title: "期限", submitKey: "term", type: "option"},
						{title: "邀请人", submitKey: "invite", type: "text"},
						{title: "面签城市", submitKey: "city", type: "option"}
					]}
				]
			}
		},
		components: {
			ApplicationInput
		}
	}
</script>

<style lang="scss">
	.application_view-box {
		font-size: 32rpx;
	}
	.application_text-title {
		color: $color_primary;
	}
	.application_view-content {
		box-shadow: 0 0 10rpx 4rpx $color_shadow;
		color: $color_text-secondary;
		margin-top: 30rpx;
	}
	.applicationInput_view-box {
		height: 80rpx;
		width: 100%;
		display: flex;
		align-items: center;
	}
	.application_text-inner.title {
		width: 200rpx;
		text-align: right;
	}
	.application_text-inner.content {
		width: calc(100% - 200rpx);
		box-sizing: border-box;
		padding-left: 30rpx;
	}
</style>
