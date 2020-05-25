import {
	request
} from '@/config/http.js';
import {
	GET_ACCESS_TOKEN,
	GET_UNLIMITED,
	SHE_JI_SHI,
	PAY,
	WEIXIN_CODE
} from '@/config/api.js';

/**
 * 获取二维码
 */
export async function getUnlimited(data) {
	let accessToken = getApp().globalData.accessToken;
	!accessToken && ((accessToken = (await request({method: 'GET',url: GET_ACCESS_TOKEN})).access_token) && (getApp().globalData.accessToken = accessToken));
	return request({
		method: 'POST',
		url: GET_UNLIMITED,
		data: {
			"access_token": accessToken,
			...data
		}
	});
}
/**
 * 设计师
 */

export function postDesigner(data) {
	return request({
		method: 'POST',
		url: SHE_JI_SHI,
		showSuccessToast: true,
		data
	});
}
/**
 * 支付
 */
export function postPay(data) {
	return request({
		method: 'POST',
		url: PAY,
		showLoading:false,
		hideLoading:false,
		data
	});
}

/**
 * 微信code
 */

export function getWxCode(data) {
	return request({
		method: 'GET',
		url: `${WEIXIN_CODE}?appid=${data.appid}&redirect_uri=${data.redirect_uri}login.php&response_type=${'code'}&scope=${data.scope}&state=${data.state}#wechat_redirect`,                 
		showLoading:false,
		hideLoading:false,
		data
	});
}


