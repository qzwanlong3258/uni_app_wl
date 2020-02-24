<template>
	<view class="container">
		<view class="form-imfor primary-text-color content-font">
			<view><input class="content-font" v-model="addressInfo.name" placeholder-class="font-color" placeholder="收货人" /></view>
			<view><input class="content-font" type="number" v-model="addressInfo.phone" placeholder-class="font-color" maxlength="11" placeholder="手机号码" /></view>
			<view class="choose-region content-font">
				<picker style="width: 100%;" mode="region" @change="bindRegionChange" :value="addressInfo.region" :custom-item="customItem">
					<view :style="{ color: addressInfo.region ? '' : '#8f8fa7' }">{{ addressInfo.region ? addressInfo.region : '所在地区' }}</view>
					<i class="iconfont iconright" :style="{ color: addressInfo.region ? '' : '#8f8fa7' }"></i>
				</picker>
			</view>
			<textarea class="detail-address content-font" placeholder-class="font-color" :placeholder="placeholderArea" v-model="addressInfo.detailAddress"></textarea>
			<text class="line-box"></text>
		</view>
		<view class="colunm-slider title-font">
			<view class="setting-address">设为默认地址</view>
			<switch :disabled="isDisabledDefault" color="#000" :checked="addressInfo.default" @change="switch1Change" />
		</view>
		<view v-if="isExit" class="colunm-slider" @click="deleteAddress" style="margin:0;"><view class="theme-color">删除收货地址</view></view>
		<view class="start-todo" @click="saveAddress"><gxg-button class="cus-big-button">立即保存</gxg-button></view>
	</view>
</template>

<script>
import GxgButton from '@/components/GxgButton.vue';
import { ADDRESS_INDEX } from '@/config/router.js';
import { addReceiveAddress, deleteReceiveAddress, updateReceiveAddress, loadAddress } from '@/api/address.js';
import { model } from '@/config/package.js';
import { toRoute } from '@/utils/util.js';

export default {
	data() {
		return {
			addressInfo: {
				name: '',
				phone: '',
				region: '',
				detailAddress: '',
				address: '',
				default: 0
			},
			placeholderArea: '详情地址：如道路、门牌号、小区、楼栋号、单元室等',
			customItem: '全部',
			isExit: false,
			isDisabledDefault: false
		};
	},
	onLoad: function(options) {
		this.options = options;
		options.id && (this.addressInfo = this.getAddress(), this.isExit = true);
		this.addressInfo.default && (this.isDisabledDefault = true);
	},
	methods: {
		
		/**
		 * 获取地址
		 */
		getAddress: function() {
			let info = getApp().globalData.addressList.find(item => item.id == this.options.id);
			// 这里的addres 是由于后端非法命名导致
			let temp = info.addres.split(' ');
			return {
				...info,
				region: temp[0],
				detailAddress: temp[1]
			}
		},
		
		//选择地区
		bindRegionChange: function(e) {
			let list = e.detail.value;
			list[0] === list[1] && (list = list.slice(1));
			this.addressInfo.region = list.join('');
		},
		getLoacation: function() {
			uni.getSetting({
				success: res => {
					if (!res.authSetting['scope.userLocation']) {
						uni.authorize({
							scope: 'scope.userLocation',
							success: () => {
								uni.chooseLocation({
									success: result => {
										this.addressInfo.address = `${result.address}(${result.name})`;
									},
									fail: () => {
										uni.showToast({
											title: '获取位置失败',
											icon: 'none'
										});
									}
								});
							}
						});
					} else {
						uni.chooseLocation({
							success: res => {
								this.addressInfo.address = `${res.address}(${res.name})`;
							},
							fail: function() {
								uni.showToast({
									title: '获取位置失败',
									icon: 'none'
								});
							}
						});
					}
				}
			});
		},
		switch1Change: function(e) {
			this.addressInfo.default = e.detail.value;
		},
		
		/**
		 * 检测收货信息
		 */
		checkAddress: async function() {
			let modelContent;
			if (!this.addressInfo.name) {
				modelContent = '收货人不能为空';
			} else if (!this.addressInfo.phone) {
				modelContent = '收货人手机号码不能为空';
			} else if (!this.addressInfo.region || this.addressInfo.region.indexOf('全部') !== -1) {
				modelContent = '所在区域不能为空';
			} else if (!this.addressInfo.detailAddress) {
				modelContent = '详细地址不能为空';
			}
			modelContent && (await model({ content: modelContent, showCancel: false }));
			return !modelContent;
		},
		
		/**
		 * 提交操作-发送请求
		 */
		submit: async function() {
			this.addressInfo.address = `${this.addressInfo.region} ${this.addressInfo.detailAddress}`;
			let res = this.addressInfo.id ? await updateReceiveAddress(this.addressInfo) : await addReceiveAddress(this.addressInfo);
			let isSuccess = Number(res.count) === 1;
			!isSuccess && await model({ content: "地址提交失败，请重试", showCancel: false });
			return isSuccess ? res : false;
		},

		/**
		 * 保存地址
		 */
		saveAddress: async function() {
			let checkRes, submitRes;
			if (checkRes = await this.checkAddress() && (submitRes = await this.submit())) {
				this.$eventBus.$emit('refreshAddressList');
				uni.navigateBack({delta: 1});
			}
		},
		
		/**
		 * 删除收货地址
		 */
		deleteAddress: async function() {
			let res = await model({ content: "请问是否确认删除", showCancel: true });
			res.confirm && deleteReceiveAddress({id: this.addressInfo.id}).then(res => {
				this.$eventBus.$emit('refreshAddressList');
				uni.navigateBack({delta: 1});
			});
		}
	},
	components: {
		GxgButton
	}
};
</script>

<style lang="scss">
.font-color {
	color: #8f8fa7;
}

.form-imfor {
	width: 100%;
	background: #fff;
	font-size: 30upx;
}

.form-imfor view {
	height: 90upx;
	border-bottom: 1upx solid #eee;
	line-height: 90upx;
}

.form-imfor input {
	width: 640upx;
	line-height: 90upx;
	padding-top: 20upx;
	margin-left: 20upx;
}

.form-imfor .iconweizhi-tianchong {
	position: absolute;
	right: 24upx;
	font-size: 50upx;
	margin-top: -72upx;
}

.choose-region {
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
}

.choose-region view {
	margin-left: 20upx;
}

.choose-region i {
	position: absolute;
	z-index: 2;
	right: 20rpx;
	margin-top: -92rpx;
	border: none;
}

.detail-address {
	width: 94%;
	height: 140rpx;
	background: #fff;
	padding: 20rpx 0;
	margin-left: 3%;
}

.line-box {
	border-bottom: 0.5px solid #eee;
	width: 100%;
	height: 2rpx;
	display: block;
}

.left-logo {
	right: 20upx;
}

.colunm-slider {
	width: 100%;
	height: 90upx;
	border-top: 1upx solid #eee;
	border-bottom: 1upx solid #eee;
	line-height: 90upx;
	display: flex;
	display: -webkit-flex;
	background: #fff;
	margin-top: 40upx;
	font-size: 32upx;
}

.setting-address {
	margin-left: 20upx;
}

.colunm-slider switch {
	position: absolute;
	right: 20upx;
}

.theme-color {
	margin-left: 20upx;
}
</style>
