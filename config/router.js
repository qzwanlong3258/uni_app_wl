/**
 * 储存页面路径，对应app.json的路由，用于页面跳转
 */

module.exports = {
	/**
	 * 登录
	 */
	AUTH: '/pages/auth/auth', //授权登录页

	/**
	 * 首页
	 */
	HOME: '/pages/tabbar/home/home', //首页
	// 积分商城
	SHOP: '/pages/tabbar/todo/todo', //积分商城
	SHOP_DETAIL: '/pages/todoChild/shopDetail/shopDetail', //商品详情
	REFUND_ORDER: '/pages/todoChild/refundOrder/refundOrder', //退单详情
	// 订单
	WRITE_ORDER: '/pages/todoChild/writeOrder/writeOrder', //填写订单
	ORDER_DETAIL: '/pages/todoChild/orderDetail/orderDetail', //订单详情
	ORDER_LIST: '/pages/todoChild/orderList/orderList', //兑换记录
	// 个人中心
	MINE: '/pages/tabbar/mine/mine',
	// 收货地址
	ADDRESS_INDEX: '/pages/todoChild/address/addressIndex/addressIndex',
	ADDRESS_DETAIL: '/pages/todoChild/address/addressDetail/addressDetail',
	// 推荐中心
	RECOMMENDED: '/pages/todoChild/recommended/index',
	// 分销中心
	DISTRIBUTION: '/pages/todoChild/distribution/index',
	// 推荐会员
	RECOMMENDED_MEMBER: '/pages/todoChild/member/index',
	// 客户列表
	CUSTOMER_LIST: '/pages/todoChild/customerList/index',
	// 推广商品
	PROMOTE_GOODS: '/pages/todoChild/promoteGoods/index',
	// 提现
	WITHDRAW: '/pages/todoChild/withdraw/index',
	// 专属海报
	POSTER: '/pages/todoChild/poster/index',
	// 家装分期
	DECORATION: '/pages/todoChild/decoration/index',
	LOAN_APPLICATION: '/pages/todoChild/decoration/application/index',//发起申请
	LOAN_SCHEDULE: '/pages/todoChild/decoration/schedule/index',//进度查询
	LOAN_RECORD: '/pages/todoChild/decoration/record/index',//申请记录
	LOAN_RECORD_Detail: '/pages/todoChild/decoration/record/recordDetail/index',//申请记录
	
}
