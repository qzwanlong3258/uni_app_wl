<template>
	<view class="apptMeasureHome">
		
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">姓名</view>
				<view class="appt_item_content"><input type="text" placeholder="姓名" placeholder-class="input_color" /></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">房屋地址</view>
				<view class="appt_item_content" @click="openAddres"><input type="text" v-model="pickerText" placeholder="房屋地址" placeholder-class="input_color" /> <icon style="margin-left: 150rpx;" class="iconfont icondizhi"></icon></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">详细地址</view>
				<view class="appt_item_content "><input type="text" placeholder="详细地址" placeholder-class="input_color" /></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">小区名称</view>
				<view class="appt_item_content"><input type="text" placeholder="小区名称" placeholder-class="input_color" /></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">房屋面积</view>
				<view class="appt_item_content"><input type="text" placeholder="房屋面积" placeholder-class="input_color" /></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">装修预算</view>
				<view class="appt_item_content" @click="apptBindPickerChange">
					<view class="appt_item_content appt_item_content_appt">
						<view class="uni-list uni-input-style" >
							<view class="uni-list-cell uni-input-style" >
								<view class="uni-list-cell-db uni-input-style" >
									<picker @change="apptBindPickerChange" :value="apptIndex" :range="apptArray" >
										<view class="uni-input uni-input-style" >{{ apptArray[apptIndex] }}</view>
									</picker>
								</view>
							</view>
						</view>
						<view class="iconfont  iconyou iconclass" ></view>
					</view>
				</view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">联系方式</view>
				<view class="appt_item_content"><input type="text" placeholder="手机号" placeholder-class="input_color" /></view>
			</view>
		<view class="apptMeasureHome_ft">
			<view class="btn" @click="toLinkChoose">提交</view>
		</view>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
'use strict';
var _self;
import { CHOOSEBUSSINESS} from '@/config/router.js';
import simpleAddress from "@/components/simple-address-normal/simple-address.nvue"
export default {
	components: {
	            simpleAddress
				
	        },
	
	data() {
		return{
			cityPickerValueDefault: [0, 0, 1],
			                pickerText: '',
							apptArray: ['中国', '美国', '巴西', '日本'],
							apptIndex: 0,
		}
	},
	methods:{
		openAddres() {
			
		                this.$refs.simpleAddress.open();
		            },
		            onConfirm(e) {
						
						var b=e.label.split('-')
						// console.log(e)
						
		                this.pickerText = b[0]+' '+ b[1]+' '+b[2]
		            },
		open(){
		         this.$refs.popup.open()
		      },
		cancel() {
			this.$refs.popup.close()
		},
		change(e) {
			console.log('是否打开:' + e.show)
		},
		apptBindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            this.apptIndex = e.target.value
		        },
		toLinkChoose(){
			uni.navigateTo({
				url:CHOOSEBUSSINESS
			})
		}
	},
	async onLoad() {
		_self = this
	}
};
</script>

<style scoped>
	.apptMeasureHome {
		font-size: 32rpx;
		color: #666666;
		background: rgba(255, 255, 255, 1);
		height: 1200rpx;
		position: relative;
	}
	
	.apptMeasureHome_item {
		height: 82rpx;
		display: flex;
		line-height: 82rpx;
		border-bottom: 2rpx solid rgba(229, 229, 229, 1);
	}
	.appt_item_lable {
		flex-basis: 200rpx;
		padding-left: 20rpx;
	}
	.appt_item_content {
		flex: 1;
		display: flex;
		align-items: center;
	}
	.appt_item_content_appt{
		position: relative;
	}
	.iconclass{
		position: absolute;
		right: 0;
	}
	.uni-input-style{
		width: 100%;
	}
	.input_color {
		color: #dbdbdb;
	}
	.apptMeasureHome_ft{
		position: absolute;
		left: 0;
		bottom: 20rpx;
		width: 100%;
		height: 100rpx;
		
	}
	.btn{
		height: 100rpx;
		
		text-align: center;
		line-height: 100rpx;
		border-radius: 5rpx;
		background: #E8BE2E;
		color: #FFFFFF;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
</style>
