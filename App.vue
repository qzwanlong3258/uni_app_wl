<script>
'use strict';
const regeneratorRuntime = require('./utils/regenerator-runtime/runtime.js');
const { setStorage, getStorage } = require('./utils/storage.js');
const { AUTH } = require('./config/router.js');
const { request } = require('./config/http.js');
const { LOGIN_TOKEN_REFRESH, LOGIN_OPENID_REFRESH } = require('./config/api.js');
import { refreshToken, getOpenId } from  './utils/openLogin'

export default {
	globalData: {
		
		// 上一个页面
		fm: '',
		
		// 是否已经刷新
		hasRefresh: true,
		
		// 商品信息
		goodsInfor: {},
		
		// 微信请求凭证
		accessToken: "",
		
		// 收货地址列表
		addressList: null
	},
	methods: {
		canIuse: function() {
			return getStorage('isLogin') && this.$options.globalData.hasRefresh;
		},
		getFrom: function(path, query) {
			for (let key in query) {
				path += path.indexOf('?') === -1 ? '?' : '&';
				path += `${key}=${query[key]}`;
			}
			this.$options.globalData.fm = `/${path}`;
		},
		switchRouter(url) {
			let pages = getCurrentPages();
			if (pages.length === 0 || url.indexOf('/' + pages[pages.length - 1].route) === 0) return;

			//跳转相对应的页面
			uni.reLaunch({
				url: url,
				success: () => {
					this.$options.globalData.hasRefresh = true;
					var pages = getCurrentPages();
					if (pages.length) {
						var currentPage = pages[pages.length - 1];
						currentPage.onLoad();
					}
				},
				fail: () => {
					uni.switchTab({
						url: url,
						success: () => {
							this.$options.globalData.hasRefresh = true;
							var pages = getCurrentPages();
							if (pages.length) {
								var currentPage = pages[pages.length - 1];
								currentPage.onLoad();
							}
						}
					});
				}
			});
		},
	},
	onLaunch:  function(options) {
		let globalData = this.$options.data;
		if (!getStorage('sysInfo', true)) {
			const sysInfo = wx.getSystemInfoSync();
			const { screenWidth, screenHeight } = sysInfo;
			sysInfo.screenHeightRpx = (750 * screenHeight) / screenWidth;
			sysInfo.perRpx = screenWidth / 750;
			setStorage('sysInfo', sysInfo);
		}

		//获得启动项目的路径
		const { path, query } = options;
		this.getFrom(path, query);

		// 处理token
		
		refreshToken();
	},
	onShow: function() {},
	onHide: function() {}
};
</script>

<style lang="scss">
@import "./style/yld.scss";
@import "./style/global.scss";
@import "./style/iconfont.scss";

page {
	background: $color_background;
}
</style>
