<template>
	<view style="position: absolute;
		width: 100%;
		height: 100%;background: #FFFFFF;">
		<view class="hd">
			<view class="hd-circle">
				<image :src="img" mode="widthFix"></image>
				<view style="text-align: center;font-size: 11px;color: #B75727;margin-top: 5px;">今日已签</view>
				<!-- <view style="text-align: center;font-size: 11px;color: #B75727;">未签到</view> -->
			</view>
			<view class="btn" @click="clickbtn">立即签到</view>
			<view style="font-size: 12px;color: #FFFFFF;text-align: center;margin: 20px 0;"> 本月已签到{{signData.length}}天,总共签到{{sumCount}}天,继续加油！</view>
		</view>
		<model-calendar ref="calender"
		:sendYear="toYear" :sendMonth="toMonth"
		:dataSource="signData" :totalNum="sumCount"
		 @dateChange="getData" @clickChange="clickRegister"	 >
		 </model-calendar>
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

	export default {
		data() {
			return {
				toYear: parseInt(new Date().getFullYear()), //本日
				toMonth: parseInt(new Date().getMonth() + 1), //本月
				sumCount: 0,
				signData: [],
				img:SIGNIN
			};
		},
		components: {
			modelCalendar
		},
		created() {
			//获取当前用户当前任务的签到状态  			
			this.getData(this.toYear+"-"+this.toMonth);
		},
		methods: {
			clickbtn() {
				this.$refs.calender.clickSignUp(parseInt(new Date().getDate()),1)
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
			getData(val) {
				let y=val.split('-')[0];
				let m=val.split('-')[1];
				//this.$http.postHttp("Comment/GetRecord", {//可以通过后台接口去获取你的打卡数据
				// 	Year: y,
				// 	Month: m,
				// }, (res) => {
				//console.log(res);
				this.sumCount = 88; //res.SumCount		
				if (y == this.toYear && m == this.toMonth) {
					let num=["02","03","06","08","12","15"],newSign=[],today=new Date().getDate();
					
					for(let i=0;i<6;i++){
						if(parseInt(num[i])>today){
							break;
						}
						newSign.push(y+"-"+m+"-"+num[i])
					}
					this.signData = newSign;
				} else {
				 	this.signData = [];
				 }
				// })
			},
		}
	}
</script>

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
		border-radius: 10px;
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
		height: 150px;
		background: linear-gradient(#EDB733, #F19168);
		padding: 10px 0;
	}
	 .btn{
		height: 20px;
		margin: 20px 120px;
		background: #FFEA3E;
		color: #B75727;
		font-size: 10px;
		border-radius:20px ;
		box-shadow: 0 2px 2px rgba(0,0,0,0.3);
		text-align: center;
		line-height: 20px;
	}
	 .hd-circle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 2px solid #B75727;
		text-align: center;
		margin: 0 auto;
	}
	 .hd-circle image{
		margin-top: 10px;
		width: 20px;
	}
</style>
