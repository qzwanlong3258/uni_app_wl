import {
	request
} from '@/config/http.js';
import {
	LOGIN_NOWECAHT_LOGIN,
	SEND_VERIFICATION_CODE,
	GET_USER_ROLE
} from '@/config/api.js';

//获取验证码
export function sendVerificationCode(data) {
	return request({
		method: 'GET',
		url: SEND_VERIFICATION_CODE,
		showSuccessToast: true,
		data,
	})
}

//通过手机验证码登录授权
export function getPhoneLogin(data){
	return request({
		method: 'POST',
		url: LOGIN_NOWECAHT_LOGIN,
		showSuccessToast: true,
		data,
	})
}


// 获取用户角色
export function getUserRole(data) {
	return request({
		method: 'GET',
		url: GET_USER_ROLE,
		data,
	});
}


