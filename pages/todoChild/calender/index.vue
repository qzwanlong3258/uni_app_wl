<template>
	<view >
		<view class="hd">
			<view class="hd-circle">
				<image :src="img" mode="widthFix"></image>
				<view style="text-align: center;font-size: 22rpx;color: #B75727;margin-top: 10rpx;" v-if="show">今日已签</view>
				<view style="text-align: center;font-size: 22rpx;color: #B75727;margin-top: 10rpx;" v-if="!show">请签到</view>
				<!-- <view style="text-align: center;font-size: 11px;color: #B75727;">未签到</view> -->
			</view>
			<button class="btn" @click="clickbtn" :disabled="show">立即签到</button>
			<view style="font-size: 24rpx;color: #FFFFFF;text-align: center;margin: 40rpx 0;"> 本月已签到{{signData.length}}天,总共签到{{sumCount}}天,继续加油！</view>
		</view>
		<model-calendar ref="calender"
		:sendYear="toYear" :sendMonth="toMonth"
		:dataSource="signData" :totalNum="sumCount"
		 @dateChange="getData" @clickChange="clickRegister"	 >
		 </model-calendar>
		 <view class="check-in-barrage"  :style="{visibility: checkIn.isShow ? 'visible' : 'hidden'}">
		 	<view class="checkImg">
		 		<image class="img" :src="checkIn.url" model="aspectFit"></image>
		 		<text class="font">签到成功，今日已领<text>1</text>积分</text>
		 	</view>
		 	<image class="cross" data-tab="close" :src="checkIn.crossUrl" model="aspectFit" @click="handerCheckInChange"></image>
		 </view>
		<!-- <view class='count'>
			<text>截至目前，已签到</text>
			<view class='daynumber'>
				<text class='number'>{{sumCount}}</text>
				<text class='day'>天</text>
			</view>

			<view>本月已签到<text class="monthSum">{{signData.length}}</text>天</view>
			<text>请再接再厉，继续努力!</text>
		</view> -->
	</view>
</template>

<script>
	import {SIGNIN, SIGNIN_IMAGE} from '@/config/image.js'
	import modelCalendar from '@/components/Calendar.vue';
	import { checkIn, calender ,getCheckIn } from '@/api/tabbar/mine.js';
	import { CHECK_IN, CROSS } from "@/config/image.js";
	var _self;

	export default {
		data() {
			return {
				toYear: parseInt(new Date().getFullYear()), //本日
				toMonth: parseInt(new Date().getMonth() + 1), //本月
				sumCount: 0,
				signData: [],
				img:SIGNIN,
				show:false,
				checkIn: {
					isShow: false,
					url: CHECK_IN,
					crossUrl: CROSS
				}
			};
		},
		components: {
			modelCalendar
		},
		async onLoad() {
			//获取当前用户当前任务的签到状态  			
			// this.getData(this.toYear+"-"+this.toMonth);
			_self=this
			this.getData(this.getTime());
			let e = await getCheckIn()
			_self.show=e
			console.log(e)
		},
		methods: {
			handerCheckInChange: async function(e) {
			
				this.checkIn.isShow = !this.checkIn.isShow;
				
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
			var timer = year + '-' + month ;
			return timer;
			},
			// time(val){
			// 	var time = new Date(val);
				    
			// 	      function timeAdd0(str) {
			// 	        if (str < 10) {
			// 	          str = '0' + str;
			// 	        }
			// 	        return str
			// 	      }
			// 	      var y = time.getFullYear();
			// 	      var m = time.getMonth() + 1;
			// 	      var d = time.getDate();
			// 	      var h = time.getHours();
			// 	      var mm = time.getMinutes();
			// 	      var s = time.getSeconds();
			// 	      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) ;
			// },
			
			async clickbtn() {
				this.$refs.calender.clickSignUp(parseInt(new Date().getDate()),1)
				checkIn()
				this.getData(this.getTime())
				let e = await getCheckIn()
				_self.show=e
				this.checkIn.isShow = !this.checkIn.isShow;
			},
			clickRegister(day) {
				//console.log("在模版页签到了", day);
				this.signData.push(day);
				this.sumCount++
				//this.$http.postHttp("Comment/UpdateRecord", day, (res) => {//可以通过后台接口添加当前用户当日打卡记录，
				// 		//console.log(res);
				// 		//if (res!= undefined) {
				// 			uni.showToast({
				// 				title: "打卡成功"+day,
				// 				icon: 'success',
				// 				duration: 2000
				// 			});
				// 		
				// 		//}
				//  })	
			},
			//当模板的时候可以直接引入，然后触发子组件事件到父界面去控制数据

			//获取当前用户该任务的签到数组
			async getData(e) {
				let c = await calender({date:e})
				console.log(c)
				let y=e.split('-')[0];
				let m=e.split('-')[1];
				//this.$http.postHttp("Comment/GetRecord", {//可以通过后台接口去获取你的打卡数据
				// 	Year: y,
				// 	Month: m,
				// }, (res) => {
				//console.log(res);
				// this.sumCount = 88; //res.SumCount	
				this.sumCount = c.count
				if (y == this.toYear && m.slice(1,2) == this.toMonth) {
					// let num=["02","03","06","08","12","15"],
					let num = c.list.map(item=>{
						return  item.createTime.slice(0,10)
					})
					console.log(num)
					let newSign=[],
					today=new Date().getDate();
					for(let i=0;i<num.length;i++){
						// if(parseInt(num[i])>today){
						// 	break;
						// }
						newSign.push(num[i])
					}
					// for(let i=0;i<6;i++){
					// 	if(parseInt(num[i])>today){
					// 		break;
					// 	}
					// 	newSign.push(y+"-"+m+"-"+num[i])
					// }
					this.signData = newSign;
				} else {
				 	this.signData = [];
				 }
				// })
			},
		}
	}
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang='scss' scoped>
	.count .daynumber {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.count .daynumber .day {
		margin-top: 50rpx;
	}

	.count {
		margin: 20rpx;
		padding: 30rpx;
		display: flex;
		text-align: center;
		border-radius: 20rpx;
		flex-direction: column;
		justify-content: center;
		background-color: #fff;
		align-items: center;
	}

	.count .number {
		color: #fff;
		font-size: 60rpx;
		background-color: #EEAE36;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 20rpx;
	}

	.monthSum {
		color: red;
		font-size: 40rpx;
	}

	.count text {
		margin: 10rpx;
	}
	 .hd{
		height: 350rpx;
		background: linear-gradient(#EDB733, #F19168);
		padding: 20rpx 0;
	}
	 .btn{
		height: 50rpx;
		margin: 50rpx 240rpx;
		background: #FFEA3E;
		color: #B75727;
		font-size: 22rpx;
		border-radius:40rpx ;
		box-shadow: 0 4rpx 4rpx rgba(0,0,0,0.3);
		text-align: center;
		line-height: 50rpx;
	}
	 .hd-circle {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: 4rpx solid #B75727;
		text-align: center;
		margin: 0 auto;
	}
	 .hd-circle image{
		margin-top: 20rpx;
		width: 40rpx;
	}
	.check-in-barrage {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(#000000, 0.7);
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.checkImg {
			width: 550rpx;
			height: 400rpx;
			position: relative;
			.img {
				width: 100%;
				height: 100%;
			}
			.font {
				position: absolute;
				top: 70%;
				left: 14%;
				text {
					display: inline-block;
					color: #D63754;
					font-size: 36rpx;
					width: 50rpx;
					text-align: center;
				}
			}
		}
		.cross {
			margin-top: 100rpx;
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
