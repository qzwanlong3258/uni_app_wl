 // const baseUrl = 'http://192.168.5.17:1001';
 const baseUrl = 'http://192.168.3.25:1001';
 // const baseUrl = 'http://yapi.open.com.cn/mock/2423';
const auth = `${baseUrl}/wx/user`;

module.exports = {
	/** 微信 **/
	GET_ACCESS_TOKEN: `${baseUrl}/wx/user/getAccessToken`,
	GET_UNLIMITED: `${baseUrl}/wx/user/getUnlimited`,
	
	/** 登录 **/
	LOGIN_NOWECAHT_LOGIN: `${baseUrl}/user/createToken`,
	LOGIN_WECHAT_LOGIN: `${auth}/getSessionkey`,
	LOGIN_TOKEN_REFRESH: `${auth}/refresh`,
	LOGIN_OPENID_REFRESH: `${auth}/register`,
	LOGIN_WECHAT_GET_USERINFO: `${auth}/getUserInfo`,
	SEND_VERIFICATION_CODE: `${baseUrl}/user/loadCode`,
	LOGIN_APP_REGISTER_LOGIN: `${auth}/register`,
	
	/** 积分商城 **/
	LOAD_GOODS_LIST: `${baseUrl}/wx/user/loadWxGoods`, // 加载积分商品
	LOAD_GOODS_DETAIL: `${baseUrl}/wx/user/loadWxGoodsDetails`, // 查看积分商品详情
	LOAD_GOODS_EVALUATION: `${baseUrl}/wx/user/loadWxGoodsEvaluation`, // 查看评价商品
	LOAD_GOODS_CONVERT: `${baseUrl}/wx/user/loadWxGoodsConvert`,// 查看参与商品兑换记录
	LOAD_INTEGRAL: `${baseUrl}/wx/user/loadRemaining`,  // 查询积分余额
	
	/** 首页 **/
	LOAD_HOME_CAROUSEL: `${baseUrl}/wx/user/loadPicture`,
	
	/** 我的 **/
	GET_CHECK_IN: `${baseUrl}/wx/user/isSignIn`,
	CHECK_IN: `${baseUrl}/wx/user/signIn`,
	
	/** 城市 **/
	LOAD_CITY: `${baseUrl}/city/loadCity`,
	
	/** 收货地址 **/
	LOAD_ADDRESS: `${baseUrl}/wx/user/loadAddress`,
	ADD_ADDRESS: `${baseUrl}/wx/user/insertAddress`,
	UPDATE_ADDRESS: `${baseUrl}/wx/user/updateAddress`,
	DELETE_ADDRESS: `${baseUrl}/wx/user/deleteAddress`,
	
	/** 订单 **/
	CREATE_ORDER: `${baseUrl}/wx/user/createOrder`,
	PAY_ORDER: `${baseUrl}/wx/user/payOrder`,
	GET_ORDER_DETAIL: `${baseUrl}/wx/user/orderDetails`,
	GET_ORDER_LIST: `${baseUrl}/wx/user/loadMyOrder`,
	DELETE_ORDER: `${baseUrl}/wx/user/deleteOrder`,
	UPDATE_ORDER: `${baseUrl}/wx/user/updateOrder`,
	ORDER_DELIVERY: `${baseUrl}/wx/user/orderComplete`,
	
	/** 活动 **/
	LOAD_ACTIVITY: `${baseUrl}/wx/user/loadActivity`,
	COMPLETE_ACTIVITY: `${baseUrl}/wx/user/completeActivity`,
	
	/** 客户 **/
	LOAD_CUSTOMER: `${baseUrl}/wx/user/loadUserList`,
	
	/** 贷款分期申请 **/
	LOAN_APPT:`${baseUrl}/wx/login/apply`,
	LOAN_LIST:`${baseUrl}/wx/user/shcedule`,
	LOAN_LIST_DETAIL:`${baseUrl}/wx/login/loadOrderPhaseInfo`
	
}
