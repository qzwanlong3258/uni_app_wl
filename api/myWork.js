import {
	request
} from '@/config/http.js';

import {
   MYWORK_FACE
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

