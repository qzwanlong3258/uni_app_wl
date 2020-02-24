import {
	request
} from '@/config/http.js';

import {
	LOAD_HOME_CAROUSEL
} from '@/config/api.js';

// 获取首页轮播图
export function loadHomeCarousel(data) {
	return request({
		method: 'GET',
		url: LOAD_HOME_CAROUSEL,
		data,
	});
}