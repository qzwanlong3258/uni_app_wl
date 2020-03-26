<template>
	<view class="myWork-Detail">
		<view class="scheduleCard" >
			<view class="scheduleCard-top" style="height: 35%;border-bottom:4rpx solid #F0F0F0 ;">
				<view class="scheduleCard-top-left">
					<image :src="userInfo.avatarUrl" class="scheduleCard-top-left-img" mode="aspectFill">
				</view>
				<view class="scheduleCard-top-mid">
					<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx 0 10rpx 30rpx;">{{userInfo.nickName}}</view>
					<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 30rpx;;color:#999999">电话：{{userInfo.phone}}</view>
				</view>
				<view class="scheduleCard-top-right">
					<view class="scheduleCard-top-right-success">
						<view class="scheduleCard-top-right-success-circle">
							<icon class="iconfont icondianhua iconclass"></icon>
						</view>
					</view>
					<view class="scheduleCard-top-right-fail">
						
					</view>
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 35%;">
				<view class="scheduleCard-bottom-top" style="height: 50%;">
					<view>申请额度</view>
					<view>申请日期</view>
					<view>产品类型</view>
				</view>
				<view class="scheduleCard-bottom-bottom" style="height: 50%;">
					<view style="font-size: 32rpx;color: #C4282B;">{{orderList.loanMoney|num}}元</view>
					<view style="font-size: 30rpx;color: #333333;">{{orderList.lastTime|time}}</view>
					<view style="font-size: 30rpx;color: #333333;padding-left: 40rpx;">合作产品</view>
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 30%;">
				<!-- <view class="scheduleCard-bottom-top" style="height: 50%;color: #333333;font-size: 14px;">
					水晶之城 
				</view> -->
				<view class="scheduleCard-bottom-bottom" style="height: 50%;color: #666666;font-size: 12px;">
					{{orderList.address}}
				</view>
			</view>
		</view>
		<view class="title">
			贷款结果
		</view>
		<view class="seclect">
			<view class="seclect-item">是否成功</view>
			<view class="seclect-content"> 
			<radio-group @change="successRadioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in successItems" :key="item.value">
					<radio :value="item.value" :checked="index === successCurrent" />
			
					<text style="margin: 0 20rpx 0 10rpx;font-size: 12px;">{{ item.name }}</text>
				</label>
			</radio-group>
			</view>
			<view class="seclect-right"></view>
		</view>
		<view class="seclect">
			<view class="seclect-item">获得金额</view>
			<view class="seclect-content"> <input type="text" class="content-input"></view>
			<view class="seclect-right"></view>
		</view>
		<view class="seclect">
			<view class="seclect-item">失败原因</view>
			<view class="seclect-content"> <input type="text" class="content-input"></view>
			<view class="seclect-right"></view>
		</view>
		<view class="title">
			施工阶段
		</view>
		<view class="work">
			<view class="work-left">
				
				
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="workBindPickerChange" :value="workIndex" :range="workArray" >
									<view class="uni-input uni-input-style">{{ workArray[workIndex] }}</view>
									<view class="iconfont  iconyou  iconyouclass"  ></view>
								</picker>
							</view>
						</view>
					</view>
					
			</view>
			<view class="work-mid">
				<input type="text" v-model="inputvalue" placeholder="比率" class="work-mid-input"> <text style="margin-top: 3px;">%</text>
			</view>
			<view class="work-right">
				<icon class="iconfont iconjian" style="margin-left: 5px;"></icon>
				<icon class="iconfont iconjia" style="margin-left: 5px;"></icon>
			</view>
		</view>
		<view class="title">
			初始照片
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H" v-for="(huadong,index) in huadongs" :key="index">
								
								<view @click="chooseimage" class="scroll-view-item_H_img"><image :src="tempFilePaths" mode=""></image>
								<view class="iconfont  iconpaizhao scroll-view-item_H_icon"  :hidden="tempFilePaths!=''"></view>
								</view>
								<view>{{huadong.name}}</view>
								
							</view>
						</scroll-view>
		<view class="title">
			签合同
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H" v-for="(huadong,index) in huadongs" :key="index">
								
								<view @click="chooseimage" class="scroll-view-item_H_img"><image :src="tempFilePaths" mode=""></image>
								<view class="iconfont  iconpaizhao scroll-view-item_H_icon"  :hidden="tempFilePaths!=''"></view>
								</view>
								<view>{{huadong.name}}</view>
								
							</view>
						</scroll-view>
		<view class="title">
			装修期
		</view>
		<view class="title-small">水电期</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H" v-for="(huadong,index) in huadongs" :key="index">
								
								<view @click="chooseimage" class="scroll-view-item_H_img"><image :src="tempFilePaths" mode=""></image>
								<view class="iconfont  iconpaizhao scroll-view-item_H_icon"  :hidden="tempFilePaths!=''"></view>
								</view>
								<view>{{huadong.name}}</view>
								
							</view>
						</scroll-view>
		<view class="apptMeasureHome_ft">
			<view class="btn" @click="toLinkChoose">提交</view>
		</view>
	</view>
</template>

<script>
'use strict';
var _self;
import { loanListDetail } from '@/api/todoChild/loan.js';
import { getStorage } from '@/utils/storage.js';
export default {
	data() {
		return{
			userInfo:{
				// avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				// nickName:'李三',
				// phone:13584115454
			},
			orderList:[],
			successItems: [
				{
					value: 'USA',
					name: '是'
				},
				{
					value: 'CHN',
					name: '否'
				}
			],
			successCurrent: 0,
			workArray: ['中国', '美国', '巴西', '日本'],
			workIndex: 0,
			inputvalue:40,
			tempFilePaths:'',
			huadongs:[
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								{img:'tempFilePaths',name:'舟舟',info:'xxxxxxxx'},
								],
		}
	},
	filters:{
		num(val){
			if(!val){
				return ''
			}
			return Number(val).toFixed(2)
		},
		time(val){
			if(!val){
				return ''
			}
			var time = new Date(val);
			    
			      function timeAdd0(str) {
			        if (str < 10) {
			          str = '0' + str;
			        }
			        return str
			      }
			      var y = time.getFullYear();
			      var m = time.getMonth() + 1;
			      var d = time.getDate();
			      var h = time.getHours();
			      var mm = time.getMinutes();
			      var s = time.getSeconds();
			      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
		}
	},
	methods:{
		successRadioChange: function(evt) {
			for (let i = 0; i < this.successItems.length; i++) {
				if (this.successItems[i].value === evt.target.value) {
					this.successCurrent = i;
					break;
				}
			}
		},
		workBindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            this.workIndex = e.target.value
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
	},
	async onLoad(options) {
		this.userInfo = getStorage('userInfo');
		console.log(this.userInfo);
		_self = this
		let v = await loanListDetail({orderid:options.id})
		console.log(v)
		_self.orderList = v.order[0]
	}
};
</script>

<style scoped>
	.myWork-Detail{
		background: #FFFFFF;
		height: 1200px;
		padding-top: 20px;
	}
	.scheduleCard{
		margin: 0 15rpx 48rpx;
		height: 346rpx;
		
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx 4rpx rgb(0,0,0,0.1);
		overflow: hidden;
		padding: 20rpx;
	}
	.scheduleCard-top{
		padding-bottom: 10rpx;
		display: flex;
	}
	.scheduleCard-top-left{
		flex-basis: 120rpx;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.scheduleCard-top-left image{
		width: 140rpx;
		height: 140rpx;
		display: block;
		margin-top: -10rpx;
		margin-left: -10rpx;
	}
	.scheduleCard-top-mid{
		flex: 1;
		
	}
	.scheduleCard-top-right{
		flex-basis: 180rpx;
	}
	.scheduleCard-top-right-success{
		padding-left: 104rpx;
		padding-top: 20rpx;
		
	}
	.scheduleCard-top-right-success-circle{
		width: 68rpx;
		height: 68rpx;
		
		border-radius: 50%;
		line-height: 68rpx;
		text-align: center;
		background: #439EFF;
	}
	.scheduleCard-bottom-top{
		display: flex;
	}
	.scheduleCard-bottom-top view{
		flex: 1;
		padding: 20rpx 0 0 20rpx;
		font-size: 28rpx;
		color: #999999;
	}
	.scheduleCard-bottom-bottom{
		display: flex;
	}
	.scheduleCard-bottom-bottom view{
		flex: 1;
	}
	.iconclass{
		color: #FFFFFF;
	}
	.title{
		height:14px;
		font-size:13px;
		
		font-weight:600;
		color:rgba(51,51,51,1);
		margin: 10px 0 10px 10px;
		line-height: 14px;
		letter-spacing:1px;
		
	}
	.seclect{
		height: 30px;
		line-height: 30px;
		display: flex;
		margin-bottom: 10px;
	}
	.seclect-item{
		margin-left: 15px;
		flex: 0.7;
		color: #333333;
		font-size: 13px;
	}
	.seclect-content{
		flex: 2;
		padding-left: 10px;
	}
	.seclect-right{
		flex: 1;
	}
	.content-input{
		border: 1px solid #BFBFBF;
		height: 100%;
	}
	.work{
		height: 30px;
		display: flex;
	}
	
	.work-left{
		flex: 1;
		margin-left: 10px;
		text-align: center;
		line-height: 30px;
		border: 1px solid #BFBFBF;
		position: relative;
	}
	.work-mid{
		flex: 1;
		margin-left: 10px;
		display: flex;
		justify-content: center;
		border: 1px solid #BFBFBF;
	}
	.work-right{
		flex: 0.6;
	}
	.uni-input-style{
		width: 100%;
	}
	.iconyouclass{
		position: absolute;
		right: 5px;
		top:0;
		transform:rotate(90deg);
	}
	.work-mid-input{
		width: 40px;
		
		height: 100%;
		color: #333333;
		font-size:15px;
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
			color: #CCCCCC;
			
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
	    .title-small{
			height:14px;
			font-size:11px;
			
			font-weight:600;
			color:#666666;
			margin: 10px 0 10px 10px;
			line-height: 14px;
			letter-spacing:1px;
		}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
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
