<template>
	<view>
		<image @load='imgshowL' :src="item.url" mode="widthFix" style="width: 100%;" v-for="(item,index) in detailImgs"> </image>
		<view style="height: 90rpx;"></view>
	</view>
</template>

<script>
'use strict';
export default {
	props: {
		detailImgs: {
			type: Array
		}
	},
	data() {
		return{
			
		}
	},
	methods:{
		imgshowL(){
			this.$emit('imgshow')
		},
	},
	async onLoad() {}
};
</script>

<style>
	
</style>
