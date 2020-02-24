import {
	request
} from '@/config/http.js';

import {
	GET_CHECK_IN,
	CHECK_IN
} from '@/config/api.js';

export function getCheckIn(data) {
	return request({
		method: 'POST',
		url: GET_CHECK_IN,
		data
	}).then(res => {
		return res.count > 0;
	});
}

export function checkIn(data) {
	return request({
		method: 'POST',
		url: CHECK_IN,
		data
	});
}