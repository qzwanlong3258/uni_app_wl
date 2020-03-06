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
  const { openId } = await request({
    method: 'POST',
    url: `${LOGIN_WECHAT_LOGIN}?appId=${APP_ID}&code=${code}`,
    needToken: false,
    showLoading: false,
    showErrorModal: false
  }).catch(() => {
    console.log('调用wx.login失败')
  })
  setStorage('openId', openId)
  return openId
}

/**
 * 更新token
 */
async function refreshToken() {
  const openId = getStorage('openId') ? getStorage('openId') : getOpenId()
  const { data } = await request({
    method: 'POST',
    url: `${LOGIN_OPENID_REFRESH}?openId=${openId}`,
    needToken: false,
    showLoading: false,
    hideLoading: false,
    showErrorModal: false,
    errorText: 'openId刷新失败',
    returnHeader: true
  }).catch(err => console.log(err))
	setStorage('tempToken', data.token)
	setStorage('userInfo',data.UserInfo)
}

module.exports = {
  getOpenId,
  refreshToken
}
