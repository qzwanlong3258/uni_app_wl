<template>
	<view class="myWork">
		<!-- <view class="myWork-hd">
			<input type="text" style="position: absolute;width: 100%;height: 100%;">
			<icon class="iconfont iconsousuo  iconclass"></icon> <text style="font-size: 12px;color:#999999 ;margin-left: 2px;">搜索</text>
		</view> -->
		<ljl-states :infor="states" @change="stateChange"  />
		<view class="box-left" :hidden='states.index==1'>
			<view class="myWork-Card" @click="linkToDetail" :data-id="item.id" v-for="(item,index) in dataList" :key="index">
				<view class="myWork-Card-hd">
					<view class="Card-hd-left">{{item.loanerName}}</view>
					<view class="Card-hd-mid"></view>
					<view class="Card-hd-right">{{item.lastTime|time}}</view>
				</view>
				<view class="myWork-Card-bottom">
					{{item.address}}
				</view>
			</view>
		</view>
		<view class="box-left" :hidden='states.index==0'>
			<view class="myWork-Card">
				<view class="myWork-Card-hd" @click="linkToDetail()" v-for="(item,index) in dataListCom" :key="index">
					<view class="Card-hd-left">{{item.loanerName}}</view>
					<view class="Card-hd-mid"></view>
					<view class="Card-hd-right">{{item.lastTime|time}}</view>
				</view>
				<view class="myWork-Card-bottom">
					{{item.address}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
'use strict';
var _self;
import LjlStates from './components/changeStates';
import { MYWORKDETAIL} from '@/config/router.js';
import { myWorkFace } from '@/api/myWork.js'
export default {
	components:{
		LjlStates
	},
	data() {
		return{
			dataList:[],
			dataListCom:[],
			states: {
				index: 0,
				list: [ { title: '进行中', nullContent: "暂无客户" }, { title: '已完成', nullContent: "暂无设计师" }]
			},
		}
	},
	filters:{
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
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		},
		linkToDetail(e){
			uni.navigateTo({
				url: `${MYWORKDETAIL}?id=${e.currentTarget.dataset.id}`,
			})
		},
	},
	async onLoad() {
		_self = this
		let p=[]
		let b = await myWorkFace({state:1})
		console.log(b)
		p.push(...b.list)
		// let c = await myWorkFace({state:2})
		// console.log(c)
		// p.push(...c.list)
		_self.dataList =p
		let o=[]
		let e = await myWorkFace({state:2})
		console.log(e)
		o.push(...e.list)
		let f = await myWorkFace({state:3})
		console.log(f)
		o.push(...f.list)
		_self.dataListCom = o
		console.log(_self.dataListCom)
	}

 }
</script>
<style>
	page{
		background: rgba(242,246,249,1);
	}
</style>
<style scoped>
	/* .myWork{
		background: rgba(242,246,249,1);
	} */
	.myWork-hd{
		height: 28px;
		margin: 7.5px 7.5px 6px 7.5px;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.iconclass{
		color: #999999;
		font-size: 32rpx;
		margin-top: -10px;
	}
	.myWork-Card{
		margin: 48rpx 15rpx;
		height: 180rpx;
		background: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0 2px 2px  rgba(153,153,153,0.3);
		overflow: hidden;
		padding: 20rpx;
		
	}
	.myWork-Card-hd{
		height: 50%;
		display: flex;
		width: 100%;
	}
	.Card-hd-left{
		flex: 1;
		color: #333333;
		font-size: 15px;
		line-height: 60rpx;
	}
	.Card-hd-mid{
		flex: 2;
		color: #666666;
		font-size: 13px;
		line-height: 60rpx;
	}
	.Card-hd-right{
		flex: 1;
		color: #999999;
		font-size: 12px;
	}
	.myWork-Card-bottom{
		color: #666666;
		font-size: 13px;
	}
</style>
