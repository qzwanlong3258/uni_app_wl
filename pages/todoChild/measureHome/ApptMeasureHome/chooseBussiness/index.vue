<template>
	<view class="chooseBussiness">
		<view class="box" v-for="(item,index) in dataList" :key="index">
			<view class="left">
				<image :src="item.storePhotos" style="width: 110rpx;height: 110rpx;border-radius:50% ; display: block;box-shadow: 0 0 2rpx 2rpx  rgba(153,153,153,0.3);" mode="scaleToFill"></image>
			</view>
			<view class="mid">
				{{item.name}}
			</view>
			<view class="right">
				<image :src="img[0]" :hidden="!item.show" @click="choose(index)" style="width: 120rpx;" mode="widthFix"></image>
				<image :src="img[1]" :hidden="item.show" @click="choose(index)" style="width: 120rpx;" mode="widthFix"></image>
			</view>
		</view>
		<null-data v-if="!dataList.length" class="nullData_view" :content="'暂无商户'" />
		<w-picker
			mode="date" 
			    :startYear="year" 
			    
			    :defaultVal="value"
			@confirm="onConfirm"
			:disabledAfter="false"
			ref="date"
		></w-picker>
	</view>
</template>

<script>
'use strict';
var _self;
import { MEASUREHOME_CHOOSE,MEASUREHOME_ISCHOOSE } from '@/config/image.js';
import { getShop, measureSuccess} from '@/api/measureHome.js';
import wPicker from "@/components/w-picker/w-picker.vue";
import {HOME} from '@/config/router.js';
import NullData from '@/components/NullData.vue';
export default {
	components: {
		wPicker,
		NullData
	},
	data() {
		return{
			img:[MEASUREHOME_CHOOSE,MEASUREHOME_ISCHOOSE],
			show:true,
			dataList:{},
			value:'',
			index:'',
			year:'',
			uuid:''
			
			
		}
	},
	methods:{
		choose(e){
			if(_self.dataList[e].show){
				uni.showToast({
												title: "请选择预约时间",
												icon:"none",
												duration: 1000,
											});
				setTimeout(()=>{
								_self.index =e
								this.$refs.date.show()
							},1000)
				
			} else{
				_self.dataList[e].show=!this.dataList[e].show
			}
			
		},
		
		onConfirm (e) {
								this.value = e.result
								console.log(e.result)
								let c ={
    "makeUuid":this.uuid,
    "decorateUuid":this.dataList[this.index].uuid,
    "time":e.result
}
								measureSuccess(c).then(res=>{
									uni.showToast({
																	title: "预约成功",
																	icon: 'success',
																	duration: 2000,
																});
																_self.dataList[this.index].show=!this.dataList[this.index].show
																// setTimeout(()=>{
																// 				uni.switchTab({
																// 					url:HOME
																// 				})
																// 			},2000)
																
																
								})
							},
		getTime:function(){
		
		var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		month >= 1 && month <= 9 ? (month = "0" + month) : "";
		day >= 0 && day <= 9 ? (day = "0" + day) : "";
		var timer = year + '-' + month + '-' + day ;
		return timer;
		},
	},
	async onLoad(options) {
		_self=this
		_self.value=this.getTime()
		_self.year=parseInt(new Date().getFullYear())
		_self.uuid=options.uuid
		let e= await getShop({city:options.id})
		console.log(e)
		_self.dataList =e.list.map(res=>{
			let e =res
			e.show = true
			return e
		})
		
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
		height: 150rpx;
		border-bottom: 4rpx solid rgba(241,241,241,1);
		display: flex;
	}
	.left{
		flex-basis: 110rpx;
		padding: 20rpx ;
	}
	.right{
		flex-basis: 160rpx;
		display: flex;
		align-items: center;
	}
	.mid{
		flex: 1;
		line-height: 150rpx;
		padding-left: 20rpx;
		color: 28rpx;
	}
</style>
