<template>
	<view class="chooseBussiness">
		<view class="box" v-for="(item,index) in dataList" :key="index">
			<view class="left">
				<image :src="item.storePhotos" style="width: 60px;height: 60px;border-radius:50% ;" mode="scaleToFill"></image>
			</view>
			<view class="mid">
				{{item.name}}
			</view>
			<view class="right">
				<image :src="img[0]" v-if="show" @click="choose" style="width: 60px;" mode="widthFix"></image>
				<image :src="img[1]" v-if="!show" @click="choose" style="width: 60px;" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
'use strict';
var _self;
import { MEASUREHOME_CHOOSE,MEASUREHOME_ISCHOOSE } from '@/config/image.js';
import { getShop} from '@/api/measureHome.js';
export default {
	data() {
		return{
			img:[MEASUREHOME_CHOOSE,MEASUREHOME_ISCHOOSE],
			show:true,
			dataList:{}
		}
	},
	methods:{
		choose(){
			_self.show=!this.show
		}
	},
	async onLoad(options) {
		_self=this
		let e= await getShop({city:options.id})
		console.log(e)
		_self.dataList =e.list
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
		height: 75px;
		border-bottom: 2px solid rgba(241,241,241,1);
		display: flex;
	}
	.left{
		flex-basis: 55px;
		padding: 20px 10px;
	}
	.right{
		flex-basis: 55px;
		display: flex;
		align-items: center;
		
	}
	.mid{
		flex: 1;
		line-height: 75px;
	}
</style>
