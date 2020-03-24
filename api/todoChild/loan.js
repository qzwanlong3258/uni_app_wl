import {
	request
} from '@/config/http.js';
import {
	LOAN_APPT ,LOAN_LIST, LOAN_LIST_DETAIL
} from '@/config/api.js';
const {  getStorage } = require('./storage.js')

export function loanAppt(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "POST",
		url: `${LOAN_APPT}`,
		data
	});
}

export function loanList(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_LIST}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}
export function loanListDetail(data) {
	// let token=getStorage('tempToken')
	return request({
		method: "GET",
		url: `${LOAN_LIST_DETAIL}`,
		showLoading:false,
		hideLoading:false,
		data
	});
}