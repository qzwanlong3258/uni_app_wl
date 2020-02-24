<template>
	<view class="home-header title-font">
		<view v-if="citys.length" @click="changSelectStatus" class="city-section">
			<text>{{ cityName || citys[0].name }}</text>
			<i class="iconfont icondown"></i>
		</view>
		<picker-view v-if="isShowSlecet" indicator-style="height: 40px;line-height: 40px" class="slecet-list" :value="city" @change="saveValue" @click="changSelectStatus">
			<picker-view-column class="title-font">
				<view class="slecet-clonum" v-for="(item, index) in citys" :key="index">{{ item.name }}</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script>
'use scrict';

export default {
	data() {
		return {
			cityName: '',
			searchValue: '',
			isShowSlecet: false,
			cityIndex: 0
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
	methods: {
		changSelectStatus: function(e) {
			this.isShowSlecet = !this.isShowSlecet;
			!this.isShowSlecet && this.$emit('change', {item:this.citys[this.cityIndex],index: this.cityIndex});
		},
		saveValue: function(e) {
			this.cityIndex = e.detail.value[0];
			this.cityName = this.citys[this.cityIndex].name;
		}
	}
};
</script>

<style scoped lang="scss">
.home-header {
	display: flex;
	width: 96%;
	margin-left: 2%;
	height: 60upx;
	line-height: 60upx;

	.city-section {
		display: flex;
		align-items: center;
		color: white;
		font-size: 28rpx;
		background: $color_primary;
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
		line-height: 40px;
	}

	.select-value {
		position: absolute;
		left: 200rpx;
	}
}
</style>
