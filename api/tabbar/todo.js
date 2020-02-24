import {
	request
} from '@/config/http.js';

import {
	LOAD_INTEGRAL
} from '@/config/api.js';

// 获取我的积分余额
export function loadIntegral(data) {
	return request({
		method: 'GET',
		url: LOAD_INTEGRAL,
		data,
	});
}