import {
	sendVerificationCode,
	getPhoneLogin
} from '@/api/auth.js'
import {
	COMPANY_LOGO
} from '@/config/image.js'
import {
	setStorage,getStorage
} from '@/utils/storage.js'
import { MINE ,DECORATION,BANK_DETAIL, TO_WEB,INSHOP,QUERYPROGRESS,LOAN_APPLICATION,LOAN_TESTONETEST,DECORATE,SHOP} from '@/config/router.js';
import * as home from "@/api/tabbar/home.js";
import {setApplyId,addScore,addScoreRecord} from '@/api/auth.js'

const notWxAuth = {
	data() {
		return {
			yldLogo: COMPANY_LOGO,
			codeValue: '获取验证码',
			param: {
				phone: '',
				code: ''
			},
			show:true,
			name:'',
			user:'',
			serve:'',
			dataL:''
		}
	},
	onLoad:  function(options) {
		//请求微信接口wx.login,获取code
		// const code = await this.login();
		// // const code = getStorage('code')
		// const {
		// 	session_key
		// } = await request({
		// 	method: 'POST',
		// 	url: `${LOGIN_WECHAT_LOGIN}?appId=${APP_ID}&code=${code}`,
		// 	needToken: false,
		// 	showLoading: false,
		// 	showErrorModal: false
		// }).catch(() => {
		// 	console.log('调用wx.login失败')
		// })
		// this.session_key = session_key;
		// this.session_key = getStorage('session_key')
		this.name=options.name
		home.loadHomeCarousel({type:4}).then(res => {
			this.user = res.list.find(item=>item.url=='用户协议').img;
			this.serve = res.list.find(item=>item.url=='服务协议').img;
		});
		// console.log(this.session_key)
		
	},
	methods: {
		linkToBankOne(){
			let ch = "/";
			// var str = "这是一/个变量，这是一个变量";
			let a = this.user.replace(new RegExp(ch,'g'),"!");
			let e = a.replace(":", "*")
			
			var testmsg=e.substring(e.lastIndexOf('.')+1)
			        const extensio = testmsg === 'jpg'
			        const extensio2 = testmsg === 'png'
			        const extensio3 = testmsg === 'jpeg'
			        if(extensio || extensio2 || extensio3) {
			          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			        } else {	
					 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
					}
		},
		linkToBankTwo(){
			let ch = "/";
			// var str = "这是一/个变量，这是一个变量";
			let a =this.serve.replace(new RegExp(ch,'g'),"!");
			let e = a.replace(":", "*")
			
			
			var testmsg=e.substring(e.lastIndexOf('.')+1)
			        const extensio = testmsg === 'jpg'
			        const extensio2 = testmsg === 'png'
			        const extensio3 = testmsg === 'jpeg'
			        if(extensio || extensio2 || extensio3) {
			          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
			        } else {	
					 uni.navigateTo({ url: `${TO_WEB}?id=${e}` });
					}
		},
		noBtn(){
			uni.showToast({
											title: "若不同意协议则无法登录和操作下单哦",
											icon:"none",
											duration: 2000,
										});
		},
		 async yesBtn(){
			
			// setStorage('sessionKey', this.session_key)
			setStorage('tempToken', this.dataL.token)
			setStorage('refreshToken', this.dataL.refreshToken)
			setStorage('userInfo', this.dataL.UserInfo)
			setStorage('isLogin', true)
			console.log(this.name)
			
			let openid=getStorage('openId')
			let e =getStorage('applyId')
			if(e){
				await setApplyId({
				      applyId: e
				  })
			}
			if(getStorage('newUser')){
				await addScore({
				    id: e,
				    integral: "500"
				    })
					await addScoreRecord({
				 userid: e,
				 money: "500",
				 msg: "邀请用户赠送500积分"
				})
			}
			
			
			
			
			if(this.name=='decoration'){
				 uni.switchTab({
					url: DECORATION,
					fail: () => {
						uni.reLaunch({
							url: DECORATION,
						})
					}
				})
			}
			if(this.name=='mine'){
				 uni.switchTab({
					url: MINE,
					fail: () => {
						uni.reLaunch({
							url: MINE,
						})
					}
				})
			}
			if(this.name=='inShop'){
				 uni.switchTab({
					url: INSHOP,
					fail: () => {
						uni.reLaunch({
							url: INSHOP,
						})
					}
				})
			}
			if(this.name=='queryProgress'){
				 uni.switchTab({
					url: QUERYPROGRESS,
					fail: () => {
						uni.reLaunch({
							url: QUERYPROGRESS,
						})
					}
				})
			}
			if(this.name=='loanApply'){
				 uni.switchTab({
					url: LOAN_APPLICATION,
					fail: () => {
						uni.reLaunch({
							url: LOAN_APPLICATION,
						})
					}
				})
			}
			if(this.name=='testonetest'){
				 uni.switchTab({
					url: LOAN_TESTONETEST,
					fail: () => {
						uni.reLaunch({
							url: LOAN_TESTONETEST,
						})
					}
				})
			}
			if(this.name=='todo'){
				 uni.switchTab({
					url: SHOP,
					fail: () => {
						uni.reLaunch({
							url: SHOP,
						})
					}
				})
			}
			if(this.name=='decorateHouse'){
				 uni.switchTab({
					url: DECORATE,
					fail: () => {
						uni.reLaunch({
							url: DECORATE,
						})
					}
				})
			}
			if(this.name=='link'){
				let url =getApp().globalData.link
				 let ch = "/";
				 								// var str = "这是一/个变量，这是一个变量";
				 								let a = url.replace(new RegExp(ch,'g'),"!");
				 								let c = a.replace(":", "*")
												let user = JSON.stringify(this.dataL.UserInfo)
												
												 // console.log(user)
												 // console.log(this.dataL.UserInfo)
				 uni.navigateTo({ url: `${TO_WEB}?id=${c}&tempToken=${this.dataL.token}&refreshToken=${this.dataL.refreshToken}&userInfo=${user}&isLogin=${true}`});
				 
			}
		},	
		//获取验证码
		getCode: function() {
			const _this = this;
			if (this.codeValue == '获取验证码' && /^1\d{0,10}$/g.test(this.param.phone)) {
				sendVerificationCode({
					phone: this.param.phone
				}).then(res => {
					this.getCodeTime();
				});
			} else {
				wx.showToast({
					title: '请填写手机号码',
					icon: 'none',
					duration: 2000
				})
			}
		},
		//验证码倒计时
		getCodeTime: function(options) {
			var that = this;
			var currentTime = 90;
			that.codeValue = currentTime + '秒'
			let interval = setInterval(function() {
				that.codeValue = (currentTime - 1) + '秒'
				currentTime--;
				if (currentTime <= 0) {
					clearInterval(interval)
					that.codeValue = '获取验证码'
				}
			}, 1000)
		},

		//登录授权
		login: function() {
			if (this.param.phone && this.param.code) {
				getPhoneLogin(this.param).then(res => {
					this.dataL=res
					// setStorage('tempToken', res.token)
					// setStorage('refreshToken', res.refreshToken)
					// setStorage('userInfo', res.userInfo)
					// setStorage('isLogin', true)
					// uni.switchTab({
					// 	url: getApp().globalData.fm,
					// 	fail: () => {
					// 		uni.reLaunch({
					// 			url: getApp().globalData.fm,
					// 		})
					// 	}
					// })
					this.show=false
				})
			} else {
				uni.showToast({
					title: '信息不全,请完善',
					icon: 'none',
					duration: 2000
				})
			}
		}
	}
}

export default notWxAuth
