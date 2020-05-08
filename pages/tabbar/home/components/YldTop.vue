<template>
	<view class="home-header title-font">
		<view v-if="citys.length" @tap="handleTap" class="city-section">
			<image :src="img" mode="widthFix" style="width: 26rpx;margin-right: 10rpx;"></image>
			<text>{{ cityName || citys[0].label }}</text>
			<i class="iconfont iconyou iconclass" ></i>
		</view>
		<!-- <button @tap="handleTap">插槽自定义选择器头部</button>
		<view>{{ value }}</view>
		<lb-picker ref="picker"
		  v-model="value"
		  mode="selector"
		  :list="list"
		  @change="handleChange"
		  @confirm="handleConfirm"
		  @cancel="handleCancel">
		  <view slot="cancel-text">插槽取消</view>
		  <view slot="action-center">中间自定义</view>
		  <view slot="confirm-text">插槽确定</view>
		</lb-picker> -->
		<!-- <view @tap="handleTap"> -->
			<lb-picker ref="picker"
			  v-model="city"
			  mode="selector"
			  :list="citys"
			  @change="handleChange"
			  @confirm="handleConfirm"
			  @cancel="handleCancel">
			  <view slot="cancel-text">取消</view>
			  <view slot="action-center">请选择城市</view>
			  <view slot="confirm-text">确定</view>
			</lb-picker>
		<!-- </view> -->
		
		<!-- <picker-view v-if="isShowSlecet" indicator-style="height: 80rpx;line-height: 80rpx" class="slecet-list" :value="city" @change="saveValue" @click="changSelectStatus">
			<picker-view-column class="title-font">
				<view class="slecet-clonum" v-for="(item, index) in citys" :key="index">{{ item.name }}</view>
			</picker-view-column>
		</picker-view> -->
	</view>
</template>

<script>
'use scrict';
import { HOME_HEADER} from '@/config/image.js';
import LbPicker from '@/components/lb-picker'

export default {
	components:{
		LbPicker
	},
	data() {
		return {
			cityName: '',
			searchValue: '',
			isShowSlecet: false,
			cityIndex: 0,
			img:HOME_HEADER,
			list:[]
		};
	},
	props: {
		citys: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	created() {
		// let list = []
		// for (let i = 1; i < this.citys.length; i++) {
		// 	list.push({
		// 		label: this.citys[i].name,
		// 		value: i
		// 	})
		// }
		// this.list = list
	},
	methods: {
		handleTap () {
			this.$refs.picker.show()
		},
		// changSelectStatus: function(e) {
		// 	this.isShowSlecet = !this.isShowSlecet;
		// 	!this.isShowSlecet && this.$emit('change', {item:this.citys[this.cityIndex],index: this.cityIndex});
		// },
		// saveValue: function(e) {
		// 	this.cityIndex = e.detail.value[0];
		// 	this.cityName = this.citys[this.cityIndex].name;
		// },
		handleChange (item) {
			console.log('change::', item)
			
		},
		handleConfirm (item) {
			this.cityName = item.item.label
			this.$emit('change', {item:this.cityName,index: item.item.value});
			console.log('confirm::', item)
		},
		handleCancel (item) {
			console.log('cancel::', item)
		}
	}
};
</script>

<style scoped lang="scss">
	.iconclass{
		font-size: 15px;
	}
.home-header {
	display: flex;
	width: 96%;
	margin-left: 2%;
	height: 60upx;
	line-height: 60upx;

	.city-section {
		display: flex;
		align-items: center;
		color: #000000;
		font-size: 28rpx;
		// background: $color_primary;
		padding: 0 10rpx;
		margin-top: 10rpx;
		text {
			overflow: hidden;
			text-overflow: ellipsis; //超出部分以省略号显示
			white-space: nowrap;
		}
		i {
			font-size: 1em;
			margin-top: 4upx;
			margin-left: 10rpx;
		}
	}

	.home-msg {
		display: flex;
		line-height: 60upx;
		border-radius: 30upx;
		margin-left: 2%;
		width: 77%;
		background: #fff;
		i {
			margin-left: 3%;
		}

		input {
			margin-left: 3%;
		}
	}
	
	.search {
		height: 100%;
	}

	.slecet-list {
		width: 100%;
		height: 420rpx;
		position: fixed;
		bottom: 0;
		z-index: 99;
		background: #fff;
	}

	.slecet-clonum {
		display: flex;
		justify-content: center;
		line-height: 80rpx;
	}

	.select-value {
		position: absolute;
		left: 200rpx;
	}
}
</style>
