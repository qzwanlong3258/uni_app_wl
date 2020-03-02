<template>
	
	
	<view class="container container-fill">
		<view class="scroll-fullpage" @touchstart="scrollTouchstart" @touchmove="scrollTouchmove" @touchend="scrollTouchend" style="transform:translateY(-{{scrollindex*100}}%);margin-top: {{margintop}}px">
			<view :class="scrollindex==0?'active':''" style="height: 100%;">
				
				<sectionOne></sectionOne>
			</view>
			<view :class="scrollindex==1?'active':''" style="background: #00CC66;height: 100%;">
				<text class="section-maintitle">页面2</text>
				<text class="section-subtitle">我的页面”2</text>
			</view>
			<view :class="scrollindex==2?'active':''" style="background: #33CCCC;height: 100%;">
				<text class="section-maintitle">页面3</text>
				<text class="section-subtitle">我的页面”3</text>
			</view>
			<view :class="scrollindex==3?'active':''" style="background: #6699FF;height: 100%;">
				<text class="section-maintitle">页面4</text>
				<text class="section-subtitle">我的页面”4</text>
			</view>
			<view :class="scrollindex==4?'active':''" style="background: #9966FF;height: 100%;">
				<text class="section-maintitle">无缝对接双创服5</text>
				<text class="section-subtitle">我的页面”5</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	"use strict"
	var self_
	import sectionOne from './components/sectionOne.vue';
	export default {
	  data () {
	    return {
	       scrollindex:0,  //当前页面的索引值
	          totalnum:5,  //总共页面数
	          starty:0,  //开始的位置x
	          endy:0, //结束的位置y
	          critical: 100, //触发翻页的临界值
	          margintop:0,  //滑动下拉距离
	    }
	  },
	  methods:{
		  scrollTouchstart:function(e){
			  console.log(e)
		      let py = e.touches[0].pageY;
			  self_.starty = py
		    },
		    scrollTouchmove:function(e){
		      let py = e.touches[0].pageY;
		      let d = this;
			  self_.endy =py;
		     
		      if(py-d.starty<100 && py-d.starty>-100){   
				  self_.margintop=py - d.starty
		      }
		    },
		    scrollTouchend:function(e){
		      let d = this;
		      if(d.endy-d.starty >100 && d.scrollindex>0){
				  self_.scrollindex=d.scrollindex-1
		        
		      }else if(d.endy-d.starty <-100 && d.scrollindex<this.totalnum-1){
				   self_.scrollindex=d.scrollindex+1
		      }
			  self_.starty=0
			  self_.endy=0
			  self_.margintop=0
		    },
		 
	  },
	  components:{
		  sectionOne
	  },
	  onLoad() {
	  	self_=this
	  }
	}
</script>

<style>
	.testonetest{
	font-size: 32rpx;
	background: rgba(242,246,249,1);
	}
</style>
<style scoped>
	.container-fill{
		height: 100%;
		overflow: hidden;
	}
	.scroll-fullpage{
		height: 100%;
		transition: all 0.3s;
	}
	.section{
		height: 100%;
	}
	>>>.section-maintitle{
		display: block;
		text-align: center;
		font-size: 50rpx;
		color: #fff;
		font-weight: bold;
		letter-spacing: 10rpx;
		padding-top: 140rpx;
	}
	>>>.section-subtitle{
		display: block;
		text-align: center;
		font-size: 40rpx;
		color: #fff;
		font-weight: bold;
		letter-spacing: 10rpx;
	}
	.active >>> .section-maintitle,
	.active >>> .section-subtitle{
		animation: mymove 0.8s;
	}
	@keyframes mymove{
		from {
			transform: translateY(-400rpx) scale(0.5) rotateY(90deg);
		}
		to {
			transform: translateY(0) scale(1) rotateY(0);
		}
	}
	
</style>
