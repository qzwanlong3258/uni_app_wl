<template>
	<view>
	<view class="container" v-if='show'>
		<!-- #ifdef MP-WEIXIN -->
		<image class="gxg-logo" :src="yldLogo"></image>
		<button class="auth-btn title-font" open-type="getUserInfo" @getuserinfo="getUserInfo">
			微信一键授权
		</button>
		<!-- #endif -->
		<!--  #ifndef MP-WEIXIN -->
			<image class="gxg-logo-nowx" :src="yldLogo"></image>
			<view class="auth-login title-font">
				<i class="iconfont iconshouji border-primary-color"></i>
				<input v-model="param.phone" class="type-input" type="number" maxlength="13" placeholder="手机号码" />
			</view>
			<view class="auth-login title-font code-box">
				<i class="iconfont iconyanzhengma border-primary-color"></i>
				<input v-model="param.code" class="type-input" type="number" maxlength="6" placeholder="验证码" />
				<view class="get-code content-font" @click="getCode">{{codeValue}}</view>
			</view>
			<button class="auth-btn title-font" style="margin-top: 80rpx;" @click='login'>登录</button>
		<!-- #endif -->
	</view>
	<view class="prompt" v-if='!show'>
		<h3 style='text-align: center;margin: 200rpx 0 60rpx 0;font-weight: 900;letter-spacing: 2rpx;'>温馨提示</h3>
		<p style='margin: 20rpx 30rpx;font-size: 26rpx;'>感谢您信任并使用非客钱包！</p>
		<p style='margin: 20rpx 30rpx;line-height: 50rpx;font-size: 26rpx;'>我们依据最新的法律要求更新了《服务协议》和《隐私政策》，请您在使用服务前仔细阅读并充分理解相关条款。
          为了方便您阅读，请您点击下列协议链接，完整阅读全文：</p>
		 <p style='margin: 20rpx 30rpx;font-size: 26rpx;color: #E8BE2E;'><span>《服务协议》</span><span>《隐私协议》</span></p>
		 <p style='margin: 20rpx 30rpx;line-height: 50rpx;font-size: 26rpx;'>您点击同意即表示您已完整阅读并同意《服务协议》和《隐私政策》的全部内容。我们将尽全力保护您的个人信息及合法权益，再次感谢您的信任！</p>
		 <view class="btn">
		 	<view class="noBtn" @click="noBtn">不同意</view>
		 	<view class="yesBtn" @click="yesBtn">同意</view>
		 </view>
	</view>
	</view>
</template>

<script>
	// #ifdef MP-WEIXIN
		import wxAuth from './wxAuth.js'
		export default {
			...wxAuth,
		}
		// #endif
		// #ifndef MP-WEIXIN
		import notWxAuth from './notWxAuth.js'
		export default {
			...notWxAuth
		}
		// #endif
</script>

<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		//小程序
		.gxg-logo {
			position: absolute;
			margin-top: -150upx;
			width: 160upx;
			height: 160upx;
		}
		//除小程序
		.gxg-logo-nowx {
			position: absolute;
			top: 15%;
			width: 180upx;
			height: 180upx;
			margin: 0 auto;
		}
		.auth-login {
			position: absolute;
			width: 80%;
			height: 600upx;
			border-radius: 20upx;
			display: flex;
			justify-content: center;
			i {
				font-size: 50upx;
				line-height: 70upx;
				display: inline-block;
				width: 15%;
				height: 70upx;
				border-top-left-radius: 30upx;
				border-bottom-left-radius: 30upx;
				text-align: center;
			}
			input {
				border-left: none;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				width: 85%;
			}
		}
		.code-box {
			margin-top: 140upx;
			margin-bottom: 140upx;
			input {
				width: 55%;
				border-left: none;
				border-right: none;
				border-radius: 0;
			}
			.get-code {
				width: 30%;
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				border-top-right-radius: 30upx;
				border-bottom-right-radius: 30upx;
				background: #e8be2e;
				color: #fff;
			}
		}
		.auth-btn {
			position: absolute;
			background: #e8be2e;
			width: 550upx;
			height: 80upx;
			line-height: 80upx;
			color: #fff;
			border-radius: 42upx;
		}
		
	}
	.btn{
		height: 100rpx;
		
		background: #ffffff;
		display: flex;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin: 20px 0;
		
	}
	.noBtn{
		flex: 48%;
		margin: 10rpx 45rpx;
		background:#FFFFFF;
		color: #000000;
		border: 2rpx solid #E8BE2E;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
	}
	.yesBtn{
		flex: 48%;
		margin: 10rpx 45rpx;
		background: #E8BE2E;
		color: #000000;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		border: 2rpx solid #E8BE2E;
	}

</style>
