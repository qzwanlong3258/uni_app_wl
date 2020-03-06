<template>
	
	
	<view class="container container-fill">
		<view class="scroll-fullpage" id='scrollTouch' @touchstart="scrollTouchstart" @touchmove="scrollTouchmove" @touchend="scrollTouchend" v-bind:style="{margintop: margintop+'px',transform: transform}">
			<view :class="scrollindex==0?'active':''" style="height: 100%;">
				
				<sectionOne></sectionOne>
			</view>
			<view :class="scrollindex==1?'active':''" style="height: 100%;">
				<sectionTwo></sectionTwo>
			</view>
			<view :class="scrollindex==2?'active':''" style="height: 100%;">
				<sectionThree></sectionThree>
			</view>
			<view :class="scrollindex==3?'active':''" style="height: 100%;">
				<sectionFour></sectionFour>
			</view>
			<view :class="scrollindex==4?'active':''" style="height: 100%;">
				<sectionFive></sectionFive>
			</view>
			<view :class="scrollindex==5?'active':''" style="height: 100%;">
				<sectionSix></sectionSix>
			</view>
		</view>
	</view>
	
</template>

<script>
	"use strict"
	var self_
	import sectionOne from './components/sectionOne';
	import sectionTwo from './components/sectionTwo';
	import sectionThree from './components/sectionThree';
	import sectionFour from './components/sectionFour';
	import sectionFive from './components/sectionFive';
	import sectionSix from './components/sectionSix';
	export default {
		components:{
				  sectionOne,
				  sectionTwo,
				  sectionThree,
				  sectionFour,
				  sectionFive,
				  sectionSix,
		},
	  data () {
	    return {
	       scrollindex:0,  //当前页面的索引值
	          totalnum:6,  //总共页面数
	          starty:0,  //开始的位置x
	          endy:0, //结束的位置y
	          critical: 100, //触发翻页的临界值
	          margintop:0,  //滑动下拉距离
			  transform:'translateY(-' + 0 + '%)'
	    }
	  },
	  methods:{
		  scrollTouchstart:function(e){
			  
		      let py = e.touches[0].pageY;
			  // console.log(py)
			  self_.starty = py
		    },
		    scrollTouchmove:function(e){
		      let py = e.touches[0].pageY;
			  // console.log(py)
		      let d = this;
			  self_.endy =py;
		      if(py-d.starty<100 && py-d.starty>-100){   
				  self_.margintop=py - d.starty
		      }
		    },
		    scrollTouchend:function(e){
				
		      let d = this;
			  // console.log(d.endy)
			  // console.log(d.starty)
			  // console.log(d.scrollindex)
			  // console.log(this.totalnum)
		      if(d.endy-d.starty >100 && d.scrollindex>0){
				  self_.scrollindex=d.scrollindex-1
				  self_.transform = 'translateY(-' + self_.scrollindex*100 + '%)'
		        
		      }else if(d.endy-d.starty <-100 && d.scrollindex<this.totalnum-1 && d.endy!==0){
				   self_.scrollindex=d.scrollindex+1
				   self_.transform = 'translateY(-' + self_.scrollindex*100 + '%)'
		      }
			  self_.starty=0
			  self_.endy=0
			  self_.margintop=0
		    },
		 
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