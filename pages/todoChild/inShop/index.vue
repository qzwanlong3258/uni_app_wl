<template>
	<view class="inShop">
		<image class="inShop-hd" :src="imglogo"></image>
		<view style="color: #333333;font-size: 14px;text-align: center;margin-bottom: 20px;">欢迎入驻非客有家</view>
		<view class="application_hd">
			<view class="application_hd_item" style="border-top:1px solid rgba(229, 229, 229, 1) ;">
				<view class="appli_hd_item_lable">*公司名称：</view>
				<view class="appli_hd_item_content"><input type="text" v-model="dataList.name" placeholder="请输入你的公司名称" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item" style="border-top:1px solid rgba(229, 229, 229, 1) ;">
				<view class="appli_hd_item_lable">*营业执照编号：</view>
				<view class="appli_hd_item_content"><input type="number" v-model="dataList.businesslicenseCode" placeholder="请输入您的营业执照编号" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*法人姓名：</view>
				<view class="appli_hd_item_content"><input type="text"  v-model="dataList.juridicalPerson"  placeholder="请输入你的法人姓名" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*注册时间：</view>
				<view class="appli_hd_item_content"><input type="text"  v-model="dataList.createDate" placeholder="请输入你的注册时间" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*注册资金：</view>
				<view class="appli_hd_item_content"><input type="number" v-model="dataList.createNumber" placeholder="请输入你的注册资金" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*所在城市：</view>
				<view class="appli_hd_item_content" style="position: relative;">
					<view class="appli_hd_item_content appli_hd_item_content_work">
						<view class="uni-list uni-input-style">
							<view class="uni-list-cell uni-input-style">
								<view class="uni-list-cell-db uni-input-style">
									<picker @change="periodBindPickerChange" :value="periodIndex" :range="periodArray" >
										<view class="uni-input uni-input-style">{{ periodArray[periodIndex] }}</view>
										<view class="iconfont  iconyou iconclass" ></view>
									</picker>
								</view>
							</view>
						</view>
						
						</view>
				</view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*联系人电话：</view>
				<view class="appli_hd_item_content"><input type="number"  maxlength="11" v-model="dataList.phone" placeholder="请输入你的联系人电话" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">*公司地址：</view>
				<view class="appli_hd_item_content"><input type="text" v-model="dataList.address" placeholder="请输入你的公司地址" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">邀请人编码：</view>
				<view class="appli_hd_item_content"><input type="text" v-model="dataList.yaoqing" placeholder="请输入你的邀请人编码" placeholder-class="input_color" /></view>
			</view>
			<view class="btn">
				<view class="scheduleBtn" @click="submitBtn">提交</view>
				<view class="freeMeasureHomeBtn" @click="apptMeasureHomeBtn">邀请商户</view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
import { COMPANY_LOGO} from '@/config/image.js';
import { UPLOAD, INVITE} from '@/config/router.js';
import { loadCity } from '@/api/city.js';
import { getStorage ,setStorage } from '@/utils/storage.js';
var _self;
export default {
	data() {
		return{
			imglogo:COMPANY_LOGO,
			periodArray: [],
			periodIndex: 0,
			dataList:{},
			cityid:[]
		}
	},
	methods:{
		periodBindPickerChange: function(e){
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.periodIndex = e.target.value
			_self.dataList.cid = this.cityid[e.target.value]
		},
		toast(v){
			
				uni.showToast({
				    title: v,
				    duration: 2000,
					icon:'none'
				});
				
			
		},
		submitBtn(){
			
			if(!this.dataList.name){
				this.toast('请输入你的公司名称')
				return;
			}
			if(!this.dataList.businesslicenseCode){
				this.toast('营业执照编号')
				return;
			}
			if(!this.dataList.juridicalPerson){
				this.toast('请输入你的法人姓名')
				return;
			}
			if(!this.dataList.createDate){
				this.toast('请输入你的注册时间')
				return;
			}
			if(!this.dataList.createNumber){
				this.toast('请输入你的注册资金')
				return;
			}
			if(!this.dataList.cid){
				this.toast('请输入你的所在城市')
				return;
			}
			if(!this.dataList.phone){
				this.toast('请输入你的联系人电话')
				return;
			}
			if(!this.dataList.address){
				this.toast('请输入你的公司地址')
				return;
			}
			
			_self.yaoqing=''
			// setStorage('data',this.dataList)
			let e = JSON.stringify(this.dataList)
			uni.navigateTo({
				
				url: `${UPLOAD}?data=${e}`
			})
			
		},
		apptMeasureHomeBtn(){
			uni.navigateTo({
				url:INVITE
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
		_self.cityid = e.list.map(res=>{
			return res.id
		})
		_self.dataList.cid = _self.cityid[0]
	}
};
</script>
<style>
	page {
	background-color: #FFFFFF;
	}
</style>
<style scoped>
	.inShop{
		height: 500px;
		
		padding-top: 20px;
	}
	.inShop-hd{
		display: block;
		border-radius: 50%;
		border: 1px solid #DCDCDC;
		width: 45px;
		height: 45px;
		margin: 0 auto 5px;
	}
	.application_hd {
		height: 485rpx;
		padding: 0 16rpx 0 16rpx;
		background: rgba(255, 255, 255, 1);
	}
	.application_hd_item {
		height: 82rpx;
		display: flex;
		line-height: 82rpx;
		border-bottom: 2rpx solid rgba(229, 229, 229, 1);
	}
	.appli_hd_item_lable {
		flex-basis: 250rpx;
		font-size: 12px;
		color: #333333;
	}
	.appli_hd_item_content {
		flex: 1;
		display: flex;
		align-items: center;
		font-size: 12px;
		color: #333333;
	}
	.input_color{
		color: #999999;
		font-size: 12px;
	}
	
	.btn{
		height: 100rpx;
		
		background: #ffffff;
		display: flex;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 40px;
		
	}
	.scheduleBtn{
		flex: 48%;
		margin: 10rpx;
		background:#FFEA04;
		color: #000000;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 30px;
		box-shadow: 0 2px  rgba(0,0,0,0.1);
		font-size: 13px;
	}
	.freeMeasureHomeBtn{
		flex: 48%;
		margin: 10rpx;
		background: #EBCD9B;
		color: #000000;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 30px;
		box-shadow: 0 2px  rgba(0,0,0,0.1);
		font-size: 13px;
	}
	.uni-input-style{
		width: 100%;
	}
	.iconclass{
		position: absolute;
		right: 0;
		top: 0;
		transform: rotate(90deg);
	}
</style>
