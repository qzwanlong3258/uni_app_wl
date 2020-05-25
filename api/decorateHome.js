import {
	request
} from '@/config/http.js';
import {
	SHOP_LIST,SHOP_COUPON,GET_COUPON,MY_COUPON
} from '@/config/api.js';


//装企列表
export function getShopList(data) {
	return request({
		method: 'GET',
		url: SHOP_LIST,
		data
	});
}
//优惠卷
export function getCoupon(data) {
	return request({
		method: 'GET',
		url: SHOP_COUPON,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function postCoupon(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${GET_COUPON}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
//优惠卷
export function loadCoupon(data) {
	return request({
		method: 'GET',
		url: MY_COUPON,
		showLoading:false,
		hideLoading:false,
		data
	});
}
