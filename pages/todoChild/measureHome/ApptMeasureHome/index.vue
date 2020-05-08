<template>
	<view class="apptMeasureHome">
		
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">您的姓名 :</view>
				<view class="appt_item_content"><input type="text" v-model="dataList.name" placeholder="请输入您的姓名" placeholder-class="input_color" /></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">您所在城市 :</view>
				<!-- <view class="appt_item_content" @click="openAddres"><input type="text" v-model="pickerText" placeholder="请输入您的房屋地址" placeholder-class="input_color" /> <icon style="margin-left: -20rpx;" class="iconfont icondizhi"></icon></view> -->
				<view class="appt_item_content" style="position: relative;">
					
						<view class="uni-list uni-input-style">
							<view class="uni-list-cell uni-input-style">
								<view class="uni-list-cell-db uni-input-style">
									<picker @change="periodBindPickerChange" :value="periodIndex" :range="periodArray" >
										<view class="uni-input uni-input-style" style="font-size: 28rpx;color: #424242;">{{ periodArray[periodIndex] }}</view>
										<view class="iconfont  icondizhi iconclass" ></view>
									</picker>
								</view>
							</view>
						</view>
						
						
				</view>
			</view>
			<!-- <view class="apptMeasureHome_item">
				<view class="appt_item_lable">您的详细地址:</view>
				<view class="appt_item_content "><input type="text" placeholder="请输入您的详细地址" placeholder-class="input_color" /></view>
			</view> -->
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">您的小区名称 :</view>
				<view class="appt_item_content"><input type="text" v-model="dataList.communityName" placeholder="请输入您的小区名称" placeholder-class="input_color" /></view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">您的房屋面积 :</view>
				<view class="appt_item_content" style="position: relative;"><input type="text" @input='areaInput' v-model="dataList.area" placeholder="请输入您的房屋面积" placeholder-class="input_color" />
				<view style="font-size: 28rpx;position: absolute;left: 90rpx;top: 2rpx;" :hidden='!areaShow'>平米</view>
				
				</view>
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">您的装修预算 :</view>
				<view class="appt_item_content" style="position: relative;"><input type="text" @input='budgetInput' v-model="dataList.budget" placeholder="请输入您的装修预算" placeholder-class="input_color" />
				<view style="font-size: 28rpx;position: absolute;left: 90rpx;top: 2rpx;" :hidden='!budgetShow'>万</view>
				</view>
				<!-- <view class="appt_item_content" @click="apptBindPickerChange">
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
				</view> -->
			</view>
			<view class="apptMeasureHome_item">
				<view class="appt_item_lable">您的联系方式 :</view>
				<view class="appt_item_content"><input type="text" v-model="dataList.phone" placeholder="请输入您的手机号" placeholder-class="input_color" /></view>
			</view>
		<view class="apptMeasureHome_ft">
			<view class="btn" @click="toLinkChoose">提交信息</view>
		</view>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
'use strict';
import { CHOOSEBUSSINESS ,APPT_MEASUREHOME_SUCCESS} from '@/config/router.js';
import simpleAddress from "@/components/simple-address-normal/simple-address.nvue" 
import { measureHome} from '@/api/measureHome.js';
import { loadCity } from '@/api/city.js';
var _self;
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
							dataList:{},
							periodArray: [],
							periodIndex: 0,
							areaShow:false,
							budgetShow:false
							
		}
	},
	methods:{
		areaInput(e){
			// console.log(e.detail)
			// this.$forceUpdate();
			if(e.detail.value ==""){
				_self.areaShow=false
			} else{
				_self.areaShow=true
			}
			
		},
		budgetInput(e){
			// console.log(e.detail)
			// this.$forceUpdate();
			if(e.detail.value ==""){
				_self.budgetShow=false
			} else{
				_self.budgetShow=true
			}
		},
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
		periodBindPickerChange: function(e){
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.periodIndex = e.target.value
			_self.dataList.address = this.periodArray[e.target.value]
		},
		 toLinkChoose(){
			 // _self.dataList.address = this.pickerText
			 measureHome (this.dataList).then(res=>{
				 console.log(res)
				
				 uni.showToast({
				 								title: "提交成功",
				 								icon: 'success',
				 								duration: 2000,
				 							});
											
				 							uni.navigateTo({
				 								url:`${CHOOSEBUSSINESS}?id=${this.dataList.address}&uuid=${res.uuid}`  
				 							})
				 // uni.navigateTo({
				 // 	url:APPT_MEASUREHOME_SUCCESS
				 // })
			 })
			
		}
	},
	async onLoad() {
		
		_self =this
		let e= await loadCity()
		console.log(e)
		_self.periodArray = e.list.map(res=>{
			return res.name
		})
		
		_self.dataList.address = _self.periodArray[0]
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
		padding: 0 20rpx;
	}
	
	.apptMeasureHome_item {
		height: 100rpx;
		display: flex;
		line-height: 100rpx;
		border-bottom: 2rpx solid rgba(241,241,241,1);
	}
	.appt_item_lable {
		flex-basis: 200rpx;
		padding-left: 20rpx;
		color: #424242;
		font-weight: 400;
		font-family:Microsoft YaHei;
		font-size: 30rpx;
		
	}
	.appt_item_content {
		flex: 1;
		display: flex;
		align-items: center;
	}
	.appt_item_content input{
		width: 100%;
		height: 100%;
		font-size: 28rpx;
		margin-left: 10rpx;
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
		font-size: 28rpx;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 440rpx;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background: #840102;
		color: #FFFFFF;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 4rpx 4rpx  rgba(153,153,153,0.3);
		font-size: 28rpx;
		letter-spacing: 4rpx;
	}
	.uni-input-style{
		width: 100%;
	}
	.iconclass{
		position: absolute;
		right: 0;
		top: 0;
		
	}
</style>
