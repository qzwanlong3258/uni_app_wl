'use strict'
const regeneratorRuntime = require('./regenerator-runtime/runtime.js')
const { setStorage, getStorage } = require('./storage.js')
const { request } = require('../config/http.js')
const { LOGIN_WECHAT_LOGIN, LOGIN_OPENID_REFRESH } = require('../config/api.js')
import { APP_ID } from '@/config/common.js'

/**
 * 获取临时code
 * @param {超时} timeout
 */
function login(timeout = 1000) {
  return new Promise((resolve, reject) => {
    uni.login({
      timeout,
	  provider: 'weixin',
      success: function(res) {
        if (res.code) {
          resolve(res.code)
        } else {
          reject(res.msg)
        }
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}

/**
 * 获取openId
 */

async function getOpenId() {
  const code = await login()
  // console.log(code,APP_ID)
  // return;
  const { data } = await request({
    method: 'POST',
    url: `${LOGIN_WECHAT_LOGIN}?appId=${APP_ID}&code=${code}`,
    needToken: false,
    showLoading: false,
    showErrorModal: false
  }).catch(() => {
    console.log('调用wx.login失败')
  })
  setStorage('openId', data.openid)
  console.log(data.openid)
  return data.openid
}

/**
 * 更新token
 */
async function refreshToken() {
  // const openId = getStorage('openId') ? getStorage('openId') : getOpenId()
 if ( getStorage('openId')){
	  // console.log(eee)
	 let e ={}
	 e.openid =getStorage('openId')
	 const { data } = await request({
	   method: 'POST',
	   url: `${LOGIN_OPENID_REFRESH}`,
	   needToken: false,
	   showLoading: false,
	   hideLoading: false,
	   showErrorModal: false,
	   errorText: 'openId刷新失败',
	   returnHeader: true,
	 	data:e
	 }).catch(err => console.log(err))
	 	setStorage('tempToken', data.token)
	 	setStorage('userInfo',data.UserInfo)
 } else {
	 // console.log(12)
	 let d={}
	 d.code = await login()
	 var c = await request({
	   method: 'POST',
	   url: `${LOGIN_WECHAT_LOGIN}`,
	   needToken: false,
	   showLoading: false,
	   showErrorModal: false,
	   data:d
	 }).catch(() => {
	   console.log('调用wx.login失败')
	 })
	 // console.log(c)
	 setStorage('openId', c.openid)
	 let e ={}
	 e.openid =getStorage('openId')
	 // console.log(e)
	 var b = await request({
	   method: 'POST',
	   url: `${LOGIN_OPENID_REFRESH}`,
	   needToken: false,
	   showLoading: false,
	   hideLoading: false,
	   showErrorModal: false,
	   errorText: 'openId刷新失败',
	   returnHeader: true,
	   data:e
	 }).catch(err => console.log(err))
	  console.log(b)
	 	setStorage('tempToken', b.data.token)
	 	setStorage('userInfo',b.data.UserInfo)
 }
 
}

module.exports = {
  getOpenId,
  refreshToken
}
