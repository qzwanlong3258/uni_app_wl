<template>
	<!-- <view class="application_view-box page_view-all-inner-padding">
		<view class="application_view-module" v-for="(item,index) in form" :key="index">
			<text class="application_text-title">{{item.title}}</text>
			<view class="application_view-content page_view-box page_view-box-inner-padding">
				<view class="page_view-border-top" v-for="(row,j) in item.list" :key="j">
					<application-input v-if="row.type === 'text'" :infor="row" /> mn  
				</view>
			</view>
		</view>
	</view> -->
	<view class="application">
		<view class="application_hd">
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">贷款人姓名</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="姓名" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">身份证号码</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="身份证" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">联系电话</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="手机号" placeholder-class="input_color" /></view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">婚姻状态</view>
				<view class="appli_hd_item_content">
					<radio-group @change="marriageRadioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in marriageItems" :key="item.value">
							<radio :value="item.value" :checked="index === marriageCurrent" />

							<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">工作单位性质</view>
				<view class="appli_hd_item_content appli_hd_item_content_work">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="workBindPickerChange" :value="workIndex" :range="workArray" >
									<view class="uni-input uni-input-style">{{ workArray[workIndex] }}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="iconfont  iconyou iconclass" ></view>
				</view>
			</view>
			<view class="application_hd_item">
				<view class="appli_hd_item_lable">月收入</view>
				<view class="appli_hd_item_content"><input type="text" placeholder="月收入" placeholder-class="input_color" /></view>
			</view>
		</view>
	<view class="application_bd">
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">贷款金额</view>
			<view class="appli_hd_item_content"><input type="text" placeholder="金额" placeholder-class="input_color" /></view>
		</view>
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">期数</view>
			<view class="appli_hd_item_content appli_hd_item_content_work">
				<view class="uni-list uni-input-style">
					<view class="uni-list-cell uni-input-style">
						<view class="uni-list-cell-db uni-input-style">
							<picker @change="periodBindPickerChange" :value="periodIndex" :range="periodArray" >
								<view class="uni-input uni-input-style">{{ periodArray[periodIndex] }}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="iconfont  iconyou iconclass" ></view>
			</view>
		</view>
	</view>
	<view class="application_ft">
		<view class="application_hd_item">
			<view class="appli_hd_item_lable">房屋照片采集</view>
			<view class="appli_hd_item_content">
				<radio-group @change="photoRadioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in photoItems" :key="item.value">
						<radio :value="item.value" :checked="index === photoCurrent" />
			
						<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="application_hd_item" :hidden='photoCurrent === 0'>
		<view @click="show" class="appli_hd_item_lable">{{ value }}</view>
		<view class="appli_hd_item_content appli_hd_item_content_work">
			<view class="uni-list uni-input-style">
				<view class="uni-list-cell uni-input-style">
					<view class="uni-list-cell-db uni-input-style">
						<picker @change="dateBindPickerChange" :value="dateIndex" :range="dateArray" >
							<view class="uni-input uni-input-style">{{ dateArray[dateIndex] }}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H" v-for="(huadong,index) in huadongs" :key="index">
								
								<view @click="chooseimage" class="scroll-view-item_H_img"><image :src="tempFilePaths" mode=""></image>
								<view class="iconfont  iconpaizhao scroll-view-item_H_icon"  :hidden="tempFilePaths!=''"></view>
								</view>
								<view>{{huadong.name}}</view>
								
							</view>
						</scroll-view>
						
		<view style="height: 20rpx;"></view>
		<view style="text-align: center;padding-bottom: 10rpx;height: 20rpx;"><label class="radio" style="font-size: 25rpx;"><radio value="r1" :checked="agree" @click="agree=!agree" />同意<label class="noticeBook" @click="open" style="color: #333333;">《用户告知书》</label></label></view>
		<view class="btn" style="margin-top: 20rpx;" @click="submit">
			提交
			
		</view>
		
		<!-- <button style="margin:30rpx;" @click="chooseimage">获取图片</button>
		<image :src="tempFilePaths" mode="aspecFill" style="width: 100%; height: 450rpx"/> -->
		</view>
		
				<w-picker
					mode="date" 
					    startYear="2017" 
					    
					    :defaultVal="value"
					@confirm="onConfirm"
					:disabledAfter="false"
					ref="date"
				></w-picker>
				<!-- <uni-popup ref="popup" type="center">底部弹出 Popup</uni-popup> -->
				<uni-popup ref="popup" type="center" :mask-click="false" @change="change">
					<view class="uni-tip">
						<text class="uni-tip-title">用户告知书</text>
						<text class="uni-tip-content">内容</text>
						<view class="uni-tip-group-button">
							<text class="uni-tip-button" @click="cancel('tip')">取消</text>
							<text class="uni-tip-button" @click="cancel('tip')">确定</text>
						</view>
					</view>
				</uni-popup>
	</view>
</template>

<script>
'use scrict';
// import { ApplicationInput } from './components/ApplicationInput.vue';
import wPicker from "@/components/w-picker/w-picker.vue";
import uniPopup from "@/components/uni-popup/uni-popup.vue";
import { DECORATION} from '@/config/router.js';
var _self;
export default {
	data() {
		return {
			// form: [
			// 	{title: "申请信息", list: [
			// 		{title: "额度", submitKey: "quota", type: "text"},
			// 		{title: "期限", submitKey: "term", type: "option"},
			// 		{title: "邀请人", submitKey: "invite", type: "text"},
			// 		{title: "面签城市", submitKey: "city", type: "option"}
			// 	]}
			// ]
			marriageItems: [
				{
					value: 'USA',
					name: '已婚'
				},
				{
					value: 'CHN',
					name: '未婚'
				}
			],
			photoItems: [
				{
					value: 'USA',
					name: '用户拍'
				},
				{
					value: 'CHN',
					name: '非客拍'
				}
			],
			workArray: ['中国', '美国', '巴西', '日本'],
			workIndex: 0,
			periodArray: ['中国', '美国', '巴西', '日本'],
			periodIndex: 0,
			dateArray: ['07:00-10:00', '10:00-13:00', '13:00-16:00', '16:00-19:00'],
			dateIndex: 0,
			marriageCurrent: 0,
			photoCurrent: 0,
			tempFilePaths: '',
			huadongs:[
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								],
				agree:false,
				disabledTime: [
				                {
				                    start: '11:00',
				                    end: '12:00'
				                }
				            ],
				value: ''
			
			
			
			
		};
	},
	onLoad:function(){
		_self = this
		_self.value=this.getTime()
	},
	methods: {
		marriageRadioChange: function(evt) {
			for (let i = 0; i < this.marriageItems.length; i++) {
				if (this.marriageItems[i].value === evt.target.value) {
					this.marriageCurrent = i;
					break;
				}
			}
		},
		photoRadioChange: function(evt) {
			for (let i = 0; i < this.photoItems.length; i++) {
				if (this.photoItems[i].value === evt.target.value) {
					this.photoCurrent = i;
					break;
				}
			}
		},
		workBindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            this.workIndex = e.target.value
		        },
		periodBindPickerChange: function(e){
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.periodIndex = e.target.value
		},
		dateBindPickerChange: function(e){
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.dateIndex = e.target.value
		},
		// 选择照片
		chooseimage: function () {
		    var _this = this;
		    uni.chooseImage({
		      count: 9, // 默认9
		      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		      success: function (res) {
		        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
				_self.tempFilePaths = res.tempFilePaths
				
		      }
		    })
		  },
		selectedTime:function (e) {
		            console.log(e)
		        },
		show () {
								this.$refs.date.show()
							},
		onConfirm (e) {
								this.value = e.result
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
		open(){
		         this.$refs.popup.open()
		      },
	    cancel() {
	    	this.$refs.popup.close()
	    },
	    change(e) {
	    	console.log('是否打开:' + e.show)
	    },
		submit:function () {
			console.log(DECORATION)
			uni.navigateTo({
				url:DECORATION
			})
		}
	},
	components: {
		// ApplicationInput
		
		wPicker,
		uniPopup
	}
};
</script>

<style lang="scss">
	
// .application_view-box {
// 	font-size: 32rpx;
// }
// .application_text-title {
// 	color: $color_primary;
// }
// .application_view-content {
// 	box-shadow: 0 0 10rpx 4rpx $color_shadow;
// 	color: $color_text-secondary;
// 	margin-top: 30rpx;
// }
// .applicationInput_view-box {
// 	height: 80rpx;
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// }
// .application_text-inner.title {
// 	width: 200rpx;
// 	text-align: right;
// }
// .application_text-inner.content {
// 	width: calc(100% - 200rpx);
// 	box-sizing: border-box;
// 	padding-left: 30rpx;
// }
.application {
	font-size: 32rpx;
	color: #666666;
	background: rgba(229, 229, 229, 1);
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
	flex-basis: 200rpx;
}
.appli_hd_item_content {
	flex: 1;
	display: flex;
	align-items: center;
}
.appli_hd_item_content_work{
	position: relative;
}
.application_bd {
	height: 156rpx;
	padding: 0 16rpx 2.5px 16rpx;
	margin: 30rpx 0 30rpx 0;
	background: rgba(255, 255, 255, 1);
}
.application_ft {
	height: 587rpx;
	padding: 0 16rpx 0 16rpx;
	background: rgba(255, 255, 255, 1);
}
.uni-input-style{
	width: 100%;
}
.input_color {
	color: #dbdbdb;
}
.iconclass{
	position: absolute;
	right: 0;
}
.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 159rpx;
		height: 195rpx;
		text-align: center;
		margin: 2%  1% 2% 1%;
	}
	
	.scroll-view-item_H_icon{
		position: absolute; 
		top: 50%;
		transform: translateY(-50%);
		
	}
	.scroll-view-item_H view{
		box-sizing: border-box;
	}
	.scroll-view-item_H view:nth-child(1){
		width: 100%;
		height: 146rpx;
		position: relative;
		background: rgba(229, 229, 229, 1);
		border-radius: 10rpx;
	}
	.scroll-view-item_H view:nth-child(1) image{
		width: 100%;
		height: 146rpx;
		border-radius: 10rpx;
		display: block;
	}
	.scroll-view-item_H view:nth-child(2){
		width: 100%;
		height: 49rpx;
	}
	.btn{
		margin:0 20rpx 0 20rpx ;
		border-radius: 40rpx;
		background: #E8BE2E;
		cursor:pointer;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
	}
	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 300px;
		background-color: #fff;
		border-radius: 10px;
	}
	.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
		}
	
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 20px;
		}
	
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 14px;
			color: #3b4144;
		}
	

</style>
