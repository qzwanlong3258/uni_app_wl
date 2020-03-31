import {
	request
} from '@/config/http.js';

import {
   MYWORK_FACE, MYWORKPHOTO
} from '@/config/api.js'

//加载积分商品
export function myWorkFace(data) {
	return request({
		method: 'GET',
		url: MYWORK_FACE,
		showSuccessToast: true,
		data
	});
}
//加载拍照任务
export function myWorkPhoto(data) {
	return request({
		method: 'GET',
		url: MYWORKPHOTO,
		showSuccessToast: true,
		data
	});
}

