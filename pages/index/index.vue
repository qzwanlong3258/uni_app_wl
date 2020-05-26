<template>
	<view class="content">
		34213424
	</view>
</template>
<script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
<script type="text/javascript">
import {getWxCode ,getWxUser}from '@/api/wx.js'
import {APP_ID,APP_SECRET}from '@/config/wx_gch.js'
import { getStorage, setStorage } from '@/utils/storage.js';
import {HOME} from '@/config/router.js'
async function choose(){
	// uni.navigateTo({
	// 	url:`/pages/tabbar/home/home`
	// })
	// uni.redirectTo({
	// 	url:`/pages/tabbar/home/home`
	// })
	
	
	if(getQuery("code")){
		
		
		     
		// let e={
		// 	appid:APP_ID,
		// 	secret:APP_SECRET,
		// 	code:getQuery("code")
		// }
		
		// let data = await getWxCode(e)
		// alert(data)
		// let a={
		// 	access_token:data.access_token,
		// 	openid:data.openid
		// }
		
		// let userInfo = await getWxUser(a)
		// alert(userInfo)
		
		
		// setStorage('userInfo',userInfo)
		// setStorage('isLogin', true)
		// alert(getQuery("code"))
		uni.reLaunch({
			url:HOME
		})
		// uni.redirectTo({
		// 	url:`${HOME}?code=${getQuery("code")}`
		// })
	} else {
		login()
	}
	
}




choose()            

function login(){
	
	var redirect_uri=encodeURIComponent('http://192.168.3.40:8080');
	// var redirect_uri=encodeURIComponent('https://www.feiaizn.com/gzh/index.html');
	
	var scope='snsapi_userinfo'
	
	var state=''
	
	console.log(redirect_uri)
	
	window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APP_ID}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=#wechat_redirect`
	
	// https://open.weixin.qq.com/connect/oauth2/authorize?appid="wxae7929d1330c16e2"&redirect_uri="http%3A%2F%2F192.168.3.40%3A8080"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect
	
	 // location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
}





function getQuery(name) {
    // 正则：[找寻'&' + 'url参数名字' = '值' + '&']（'&'可以不存在）
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r != null) {
        // 对参数值进行解码
        return unescape(r[2]);
    }
    return null;
}


</script>

<style>
	
</style>
