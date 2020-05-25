<template>
	<view style="padding: 60rpx 30rpx;">
		<view class="box" v-for="(item,index) in list" :key="index">
			<image :src="img[0]" mode="widthFix"></image>
			<view class="bg">
				<view class="left" style="flex-basis: 250rpx;text-align: center;line-height: 180rpx;font-size: 52rpx;color: #FFEA04;">￥{{item.num}}</view>
				<view class="mid" style="padding-top: 60rpx ;flex: 1;">
					<view class="mid-top" style="color: #FFFFFF;font-size: 24rpx;margin-bottom: 10rpx;">{{item.describe}}</view>
					<view class="mid-bot" style="color: #79758A;font-size: 18rpx;">{{item.begin}}-{{item.end}}</view>
				</view>
				<view v-if="item.state=='1'" class="right" style="flex-basis: 170rpx;text-align: center;line-height: 180rpx;font-size: 26rpx;color: #FFFFFF;">去使用</view>
				<view v-if="item.state=='2'" class="right" style="flex-basis: 170rpx;text-align: center;line-height: 180rpx;font-size: 26rpx;color: #FFFFFF;">已使用</view>
			</view>
		</view>
		<null-data v-if="!list.length" class="nullData_view" />
	</view>
</template>

<script>
'use strict';
import {COUPON_BG} from '@/config/image.js'
import NullData from '@/components/NullData.vue';
var _self
export default {
	components:{
		NullData
	},
	data() {
		return{
			img:[COUPON_BG],
			list:[]
		}
	},
	methods:{

		getList(e){
			_self.list=e.map(res=>{
				let num= res.describe.replace(/[^0-9]/ig,"")
				return{
					...res,
					num:num
				}
			})
		}
	},
	 onLoad(options) {
		 _self=this
		this.getList(JSON.parse(options.data))
	}
};
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.box{
		width:calc(100% - 60rpx) ;
		height: 150rpx;
		margin-bottom: 60rpx;
	}
	.box image{
		position: absolute;
		width:calc(100% - 60rpx);
		
		
	}
	.bg{
		width:calc(100% - 60rpx);
		height: 150rpx;
		position: absolute;
		display: flex;
	}
</style>
