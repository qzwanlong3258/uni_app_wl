<template>
	<view>
		
	</view>
</template>

<script>
'use strict';
import {getWxCode} from '@/api/wx.js'
export default {
	data() {
		return{
			
		}
	},
	methods:{
		async code(){
			let data={}
			
			data.appid='wxae7929d1330c16e2'
			
			data.redirect_uri=encodeURIComponent('http://192.168.3.40:8080');
			
			data.scope='snsapi_userinfo'
			
			data.state=''
			
		    let a = await getWxCode(data)
			
			console.log(a)
		}
	},
	async onLoad() {
		 await this.code()
	}
};
</script>

<style>
	
</style>
