<template>
	
		
	
	<view class="myWork-Detail" >
		
			<view class="scheduleCard-top" style="height: 35%;border-bottom:2rpx solid #F0F0F0 ;padding: 20px;">
				<view class="scheduleCard-top-left" >
					<image :src="orderList.did?orderList.did:imglogo" class="scheduleCard-top-left-img" mode="aspectFill">
				</view>
				<view class="scheduleCard-top-mid">
					<view class="scheduleCard-top-mid-top" style="font-size: 31rpx;padding: 10rpx 0 10rpx 30rpx;"> <text style="vertical-align: middle;">{{orderList.loanerName}}</text>  <view style="margin-left: 10px;display: inline-block;vertical-align: middle;" class="scheduleCard-top-right-success-circle">
							<icon class="iconfont icondianhua iconclass"></icon>
						</view></view>
					<view class="scheduleCard-top-mid-bottom" style="font-size: 28rpx;padding-left: 30rpx;">面签银行：{{bankData.name}}</view>
				</view>
				<!-- <view class="scheduleCard-top-right">
					<view class="scheduleCard-top-right-success">
						
					</view>
					<view class="scheduleCard-top-right-fail">
						
					</view>
				</view> -->
			</view>
			<view class="scheduleCard-bottom" style="height: 35%;border-bottom:2rpx solid #F0F0F0 ;padding: 5px 0;">
				<view class="scheduleCard-bottom-top" style="height: 50%;color: #666666;">
					<view>申请额度</view>
					<view>申请日期</view>
					<view>产品类型</view>
				</view>
				<view class="scheduleCard-bottom-bottom" style="height: 50%;">
					<view >{{orderList.loanMoney|num}}元</view>
					<view >{{orderList.lastTime|time}}</view>
					<view >银行产品</view>
				</view>
			</view>
			<view class="scheduleCard-bottom" style="height: 50px;line-height: 50px;font-size: 15px;color: #666666;padding-left: 30px;border-bottom:6rpx solid #F0F0F0 ;">
				<!-- <view class="scheduleCard-bottom-top" style="height: 50%;color: #333333;font-size: 14px;">
					水晶之城 
				</view> -->
				<!-- <view class="scheduleCard-bottom-bottom" style="height: 50%;color: #666666;font-size: 12px;"> -->
					{{orderList.address}}
				<!-- </view> -->
			</view>
		
		<!-- <view class="title">
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
		</view> -->
		<view class="title">
			施工阶段
		</view>
		<view class="work" v-for="(item,index) in dataList.phase" :key='index'>
			<view class="work-left">
				
				
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="workOpenBindPickerChange($event,index)" :value="Number(item.phaseid)-1" :range="item.workArray" >
									<view class="uni-input uni-input-style">{{ item.workArray[Number(item.phaseid)-1] }}</view>
									<view class="iconfont  iconyou  iconyouclass"  ></view>
								</picker>
							</view>
						</view>
					</view>
					
			</view>
			<view class="work-mid" style="position: relative;">
				<input type="number" v-model="item.percent" placeholder="比率" class="work-mid-input"  > <text style="margin-top: 3px;">% </text></input>
				
			</view>
			<view class="work-right">
				<icon class="iconfont iconjian" style="margin-left: 10px;" @click="cutPhase(index)"></icon>
				<icon class="iconfont iconjia" style="margin-left: 10px;" v-if="index==0" @click="addPhase"></icon>
			</view>
		</view>
		<view style="height: 25px;border-bottom:6rpx solid #F0F0F0 ;"></view>
		<view class="title">
			现场照片
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H" v-for="(item,index) in dataList.phaseImg" :key="index">
								
								<view @click="chooseimage($event,item.img,index)" :data-id="Number(item.potid) -1" class="photo_box"  ><image @click="previewImage(item.img)" :src="item.img" mode=""></image>
								<view class="iconfont  iconjia scroll-view-item_H_icon"  :hidden="item.img!=''"></view>
								<view :hidden="item.img!=''" style="position: absolute;top: 50%;color: #000000;text-align: center;font-size: 12px;width: 100%;"> 上传照片</view>
								</view>
								<view class="photo_bottom" >
									
									
										<view class="uni-list uni-input-style">
											<view class="uni-list-cell uni-input-style">
												<view class="uni-list-cell-db uni-input-style">
													<picker @change="workBindPickerChange($event,index)" :value="Number(item.potid) -1 " :range="item.workArray" >
														<view class="uni-input uni-input-style">{{ item.workArray[Number(item.potid) -1] }}</view>
														<view class="iconfont  iconyou  iconyouclass" style="right: 0;" ></view>
													</picker>
												</view>
											</view>
										</view>
										
								</view>
								
							</view>
						</scroll-view>
		<!-- <view class="title">
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
						</scroll-view> -->
		<view class="apptMeasureHome_ft">
			<view class="btn" @click="sumbit">提交</view>
		</view>
	</view>
	
</template>

<script>
'use strict';
var _self;
import { loanListDetail , faceSumbit , loanBank} from '@/api/todoChild/loan.js';
// import camera from './components/camera/camera.vue';
import { getStorage } from '@/utils/storage.js';
import { CAMERA, MINE} from '@/config/router.js';
import { COMPANY_LOGO} from '@/config/image.js';
import {
		UPLOAD
	} from '@/config/api.js';
export default {
	// components:{
	// 	camera
	// },
	data() {
		return{
			hidden:false,
			count:false,
			userInfo:{
				// avatarUrl:'https://s2.ax1x.com/2019/10/08/ufSasU.jpg',
				// nickName:'李三',
				// phone:13584115454
			},
			imgphoto:'',
			imglogo:COMPANY_LOGO,
			num:'',
			orderList:{
				loanMoney:300,
				lastTime:1585568923,
				address:'dqwadcqd'
			},
			bankData:{},
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
			workArray: ['水电阶段', '瓦工阶段', '木工阶段', '完工阶段'],
			workIndex: 0,
			inputvalue:40,
			tempFilePaths:'',
			datawork:[
								{img:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字' ],workIndex: 0,},
								{img:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字' ],workIndex: 0,},
								{img:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字'],workIndex: 0,},
								{img:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字'],workIndex: 0,},
								{img:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字' ],workIndex: 0,},
								
								],
			dataList:{
				orderid:'',
				phase:[{workArray: ['水电阶段', '瓦工阶段', '木工阶段', '完工阶段'],
			phaseid: 1,percent:''}],
			    phaseImg:[
								{img:'',photo:'', workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字' ],potid: 1,latitude:'',longitude:''},
								{img:'',photo:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字' ],potid: 1,latitude:'',longitude:''},
								{img:'',photo:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字'],potid: 1,latitude:'',longitude:''},
								{img:'',photo:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字'],potid: 1,latitude:'',longitude:''},
								{img:'',photo:'',workArray: ['客厅','餐厅','厨房', '卫生间','卧室', '合同', '签字' ],potid: 1,latitude:'',longitude:''},
								
								],
			}
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
			      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) ;
		}
	},
	methods:{
		//提交
		sumbit(){
			console.log(this.dataList)
			faceSumbit(this.dataList).then(res=>{
				uni.showToast({
												title: "提交成功",
												icon: 'success',
												duration: 2000,
											});
											setTimeout(function(){
															uni.switchTab({
																url:MINE
															})
														},2000)
			})
		},
		// 减少
		cutPhase(e){
			if(e == 0){
				return;
			} else {
				uni.showModal({
				    title: '提示',
				    content: '是否确定删除该阶段？',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							_self.dataList.phase.splice(e, 1)
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
			
		},
		// 增加
		addPhase(){
			_self.dataList.phase.push({workArray: ['水电阶段', '瓦工阶段', '木工阶段', '完工阶段'],
			phaseid: 1,})
		},
		successRadioChange: function(evt) {
			for (let i = 0; i < this.successItems.length; i++) {
				if (this.successItems[i].value === evt.target.value) {
					this.successCurrent = i;
					break;
				}
			}
		},
		workBindPickerChange: function(e ,v) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
					console.log(e)
		            this.dataList.phaseImg[v].potid = Number(e.target.value)+1
		        },
		workOpenBindPickerChange: function(e , v) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
					console.log(e)
		            this.dataList.phase[v].phaseid =Number(e.target.value)+1
		        },
		// 选择照片
		chooseimage: function (e,v,k) {
			if(v!=''){
				return;
			}
			let a='face'
			console.log(k)
			uni.navigateTo({
				
				url: `${CAMERA}?num=${e.currentTarget.dataset.id}&role=${a}&index=${k}`,
			})
			
			// this.hidden = true
			//         this.$nextTick(() => {
			//           this.$refs.camera.init(e.currentTarget.dataset.id)
			//         })
			
			
			
		  //   var _this = this;
		  //   uni.chooseImage({
		  //     count: 9, // 默认9
		  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		  //     success: function (res) {
		  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
				// _self.tempFilePaths = res.tempFilePaths
				
		  //     }
		  //   })
		  },
		  previewImage(image) {
			  _self.count = true
		  				var imgArr = [];
		  				imgArr.push(image);
		  				//预览图片
		  				uni.previewImage({
		  					urls: imgArr,
		  					current: imgArr[0]
		  				});
		  			},
	},
	async onLoad(options) {
		this.userInfo = getStorage('userInfo');
		console.log(this.userInfo);
		_self = this
		let v = await loanListDetail({orderid:options.id})
		console.log(v)
		_self.orderList = v.order[0]
		// 获取银行信息
		let r = await loanBank({orderid:options.id})
		_self.bankData=r.list[0]
		_self.dataList.orderid=options.id
	},
	async onShow(){
		   if(this.count){
			   _self.count = false;
			   return;
		   }
	       let pages = getCurrentPages();
	       let currPage = pages[pages.length-1];
	
	       if (currPage.data.imgphoto == ''){
	//             this.getHopeJob();
	        }else {
		console.log(currPage.data.imgphoto)
		console.log(currPage.data.num)
	            this.imgphoto = currPage.data.imgphoto
	_self.dataList.phaseImg[currPage.data.num].img = currPage.data.imgphoto
	_self.dataList.phaseImg[currPage.data.num].latitude = currPage.data.latitude 
	_self.dataList.phaseImg[currPage.data.num].longitude = currPage.data.longitude
	_self.num = currPage.data.num
	            await uni.uploadFile({
	                                        // 需要上传的地址
	                                        url:UPLOAD,
	                                        // filePath  需要上传的文件
	                                        filePath: currPage.data.imgphoto,
	                                        name: 'file',
	                                        success: async (res1) =>{
	                                           console.log(res1)
	            								let w=JSON.parse(res1.data)
												console.log(_self.dataList)
												// let pages = getCurrentPages();
												// let currPage = pages[pages.length-1];
												console.log(this.num)
												 _self.dataList.phaseImg[this.num].photo = w.data
												 
												},
												})
	        }
	
	 },
	
};
</script>
<style>
	page{
		background:#FFFFFF;
	}
</style>
<style scoped>
	.myWork-Detail{
		/* background: #FFFFFF;
		height: 1200px; */
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
		flex-basis: 400rpx;
	}
	.scheduleCard-top-right-success{
		
		/* padding-top: 20rpx; */
		
	}
	.scheduleCard-top-right-success-circle{
		width: 40rpx;
		height: 40rpx;
		
		border-radius: 50%;
		line-height: 40rpx;
		text-align: center;
		background: #FFFFFF;
		border: 1px solid #333333;
		overflow: hidden;
	}
	.scheduleCard-bottom-top{
		display: flex;
		padding: 5px 0;
	}
	.scheduleCard-bottom-top view{
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #333333;
	}
	.scheduleCard-bottom-bottom{
		display: flex;
	}
	.scheduleCard-bottom-bottom view{
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #333333;
	}
	.iconclass{
		color: #333333;
		font-size: 12px;
		margin-top: -10px;
	}
	.title{
		height:30px;
		font-size:16px;
		
		font-weight:600;
		color:rgba(51,51,51,1);
		margin: 10px 0 10px 10px;
		line-height: 30px;
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
		margin-bottom: 5px;
		
		
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
			height: 220rpx;
			text-align: center;
			margin: 2%  1% 2% 1%;
		}
		
		.scroll-view-item_H_icon{
			position: absolute; 
			width: 100%;
			top: 30%;
			transform: translateY(-50%);
			color: #CCCCCC;
			
		}
		.scroll-view-item_H view{
			/* box-sizing: border-box; */
		}
		.scroll-view-item_H .photo_box{
			width: 100%;
			height: 146rpx;
			position: relative;
			background: rgba(241,241,241);
			
		}
		.scroll-view-item_H .photo_box image{
			width: 100%;
			height: 146rpx;
			
			display: block;
		}
		.scroll-view-item_H  .photo_bottom{
			height: 30px;
			margin: 5px 0 0 0;
			border: 1px solid rgba(229, 229, 229, 1);
			background: #FFFFFF;
			width:100%;
			position: relative;
			line-height: 30px;
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
		margin-top: 30px;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 20px;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 2px 5px rgba(0,0,0,0.3);
		font-size: 14px;
		letter-spacing: 2px;
	}
</style>
