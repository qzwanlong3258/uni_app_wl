(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-decoration-testonetest-testonetestsubmit-index"],{"0b96":function(t,n,o){var e=o("b9bc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var c=o("4f06").default;c("21e2b662",e,!0,{sourceMap:!1,shadowMode:!1})},"1fdd":function(t,n,o){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return o?uni.setStorageSync(t,n):new Promise((function(o,e){uni.setStorage({key:t,data:n,success:function(){o()},fail:function(t){e()}})}))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n?uni.getStorageSync(t):new Promise((function(n,o){uni.getStorage({key:t,success:function(t){n(t.data)},fail:function(t){o(t)}})}))}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n?uni.removeStorageSync(t):new Promise((function(n,o){uni.removeStorage({key:t,success:function(){n()},fail:function(t){o()}})}))}function a(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!t)return new Promise((function(t,n){uni.clearStorage({success:function(){t()},fail:function(t){n(t)}})}));uni.clearStorageSync()}function d(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t?uni.getStorageInfoSync():new Promise((function(t,n){uni.getStorageInfo({success:function(n){t(n)},fail:function(t){n(t)}})}))}t.exports={setStorage:e,getStorage:c,removeStorage:i,clearStorage:a,getStorageInfo:d}},"5e5c":function(t,n,o){"use strict";var e="http://47.104.232.184/feiai";t.exports={COMPANY_LOGO:"".concat(e,"/companyLogo.png"),TOUXIANG_LOGO:"".concat(e,"/touxianglogo.png"),HOME_DEMO:"".concat(e,"/demo.png"),NULL_DATA:"".concat(e,"/nullData.png"),HOME_HEADER:"".concat(e,"/todoChild/home/position.png"),ME_1:"".concat(e,"/tabbar/bitmap.png"),ME_2:"".concat(e,"/tabbar/bitmap1.png"),ME_3:"".concat(e,"/tabbar/bitmap2.png"),ME_4:"".concat(e,"/tabbar/分享@2x.png"),ME_5:"".concat(e,"/tabbar/积分商城@2x.png"),ME_6:"".concat(e,"/tabbar/分销@2x.png"),ME_7:"".concat(e,"/tabbar/分享@2x.png"),ME_8:"".concat(e,"/tabbar/地址@2x.png"),CHECK_IN:"".concat(e,"/tabbar/签到.png"),CROSS:"".concat(e,"/tabbar/叉号.png"),RIGHT:"".concat(e,"/tabbar/right.png"),PRE_PAYMENT:"".concat(e,"/tabbar/待付款@2x.png"),TO_BE_DELIVERED:"".concat(e,"/tabbar/待发货@2x.png"),TO_BE_RECEIVED:"".concat(e,"/tabbar/待收货@2x.png"),EVALUATION:"".concat(e,"/tabbar/评价@2x.png"),AFTER_SALE:"".concat(e,"/tabbar/售后@2x.png"),MEMBER:"".concat(e,"/todoChild/distribution/位图@2x.png"),DESIGNER:"".concat(e,"/todoChild/distribution/位图@2x(1).png"),CLIENT:"".concat(e,"/todoChild/distribution/位图@2x(2).png"),POSTER:"".concat(e,"/todoChild/海报@2x.png"),GOODS:"".concat(e,"/todoChild/商品@2x.png"),INVITE_MEMBER:"".concat(e,"/todoChild/发送纸飞机@2x.png"),INVITE_DESIGNER:"".concat(e,"/todoChild/邀请@2x(1).png"),INVITE_CLIENT:"".concat(e,"/todoChild/邀请@2x.png"),DISTRIBUTION_MENU_HEOM:"".concat(e,"/todoChild/distribution/system-loadingc@2x.png"),DIR_TITLE_ONE:"".concat(e,"/todoChild/distribution/业绩@2x.png"),DIR_TITLE_TWO:"".concat(e,"/todoChild/distribution/工具@2x.png"),DIR_NAV_ONE:"".concat(e,"/todoChild/distribution/海报.png"),DIR_NAV_TWO:"".concat(e,"/todoChild/distribution/商品.png"),DIR_NAV_THREE:"".concat(e,"/todoChild/distribution/会员.png"),DIR_NAV_FOUR:"".concat(e,"/todoChild/distribution/设计师.png"),DIR_NAV_FIVE:"".concat(e,"/todoChild/distribution/客户.png"),DIR_NAV_SIX:"".concat(e,"/todoChild/distribution/首页.png"),DIR_VIP:"".concat(e,"/todoChild/distribution/vip.png"),DIR_RESGITER:"".concat(e,"/todoChild/distribution/shejishi.png"),DIR_KEHU:"".concat(e,"/todoChild/distribution/kehu.png"),RECOMMENDED_MEMBER:"".concat(e,"/todoChild/member/推荐好友.png"),INVITE_NOW:"".concat(e,"/todoChild/member/立即邀请.png"),DOWNLOAD_IMG:"".concat(e,"/todoChild/promoteGoods/save_album.png"),POSTER_1:"".concat(e,"/todoChild/poster/11.jpg"),POSTER_2:"".concat(e,"/todoChild/poster/22.jpg"),POSTER_3:"".concat(e,"/todoChild/poster/33.jpg"),POSTER_4:"".concat(e,"/todoChild/poster/44.jpg"),POSTER_5:"".concat(e,"/todoChild/poster/55.jpg"),POSTER_6:"".concat(e,"/todoChild/poster/66.jpg"),SUCCESSPAY:"".concat(e,"/todoChild/打款成功@2x.png"),ONEHOME:"".concat(e,"/todoChild/testonetest/一室一厅@2x.png"),TWOHOME:"".concat(e,"/todoChild/testonetest/户型 (1)@2x.png"),THREEHOME:"".concat(e,"/todoChild/testonetest/户型 (3)@2x.png"),OTHERHOME:"".concat(e,"/todoChild/testonetest/户型 (2)@2x.png"),TESTMEN:"".concat(e,"/todoChild/testonetest/男孩@2x.png"),TESTWOMEN:"".concat(e,"/todoChild/testonetest/女孩@2x.png"),INCOMEONE:"".concat(e,"/todoChild/testonetest/收入ONE.png"),INCOMETWO:"".concat(e,"/todoChild/testonetest/收入TWO.png"),INCOMETHREE:"".concat(e,"/todoChild/testonetest/收入THREE.png"),INCOMEFOUR:"".concat(e,"/todoChild/testonetest/收入FOUR.png"),BUSINESSMAN:"".concat(e,"/todoChild/testonetest/个体商户@2x.png"),SERVANTMAN:"".concat(e,"/todoChild/testonetest/公务员@2x.png"),EMPLOYEE:"".concat(e,"/todoChild/testonetest/员工@2x.png"),STAFF:"".concat(e,"/todoChild/testonetest/一般员工@2x.png"),HOMEONE:"".concat(e,"/todoChild/testonetest/homeone.png"),HOMETWO:"".concat(e,"/todoChild/testonetest/hometwo.png"),HOMETHREE:"".concat(e,"/todoChild/testonetest/homethree.png"),HOMEFOUR:"".concat(e,"/todoChild/testonetest/homefour.png"),TESTSUCCESS:"".concat(e,"/todoChild/testonetest/完成@2x.png"),TESTFAIL:"".concat(e,"/todoChild/testonetest/3.0-未完成@2x.png"),LOAN_PICTURE:"".concat(e,"/todoChild/装修分期付，轻松就入住.png"),MEASUREHOME:"".concat(e,"/todoChild/约量房.png"),MEASUREHOME_SUCCESS:"".concat(e,"/todoChild/约量房成功@2x.png"),MEASUREHOME_CHOOSE:"".concat(e,"/todoChild/measureHome/choose.png"),MEASUREHOME_ISCHOOSE:"".concat(e,"/todoChild/measureHome/ischoose.png"),UPLOAD:"".concat(e,"/todoChild/上传@2x.png"),BANNER_ONE:"".concat(e,"/banner/banner1@2x.png"),BANNER_TWO:"".concat(e,"/banner/banner2@2x.png"),BANNER_THREE:"".concat(e,"/banner/banner3@2x.png"),BANNER_FOUR:"".concat(e,"/banner/banner4@2x.png"),HEAT_POINT:"".concat(e,"/banner/redian.png"),NAV_ONE:"".concat(e,"/banner/navone.png"),NAV_TWO:"".concat(e,"/banner/navtwo.png"),NAV_THREE:"".concat(e,"/banner/navthree.png"),NAV_FOUR:"".concat(e,"/banner/navfour.png"),AD_ONE:"".concat(e,"/banner/广告位1@2x.png"),AD_TWO:"".concat(e,"/banner/广告位2@2x.png"),AD_THREE:"".concat(e,"/banner/广告位3@2x.png"),BANK_PIC:"".concat(e,"/todoChild/decoration/bankmoney.png"),BANK_LOGO:"".concat(e,"/todoChild/decoration/banklogo.png"),BANK_JH:"".concat(e,"/todoChild/decoration/建设银行@2x.png"),BANK_BH:"".concat(e,"/todoChild/decoration/碧海银行@2x.png"),BANK_BJ:"".concat(e,"/todoChild/decoration/北京银行@2x.png"),BANK_JH_DETAIL:"".concat(e,"/todoChild/decoration/jianshe.png"),BANK_BH_DETAIL:"".concat(e,"/todoChild/decoration/bohai.png"),BANK_BJ_DETAIL:"".concat(e,"/todoChild/decoration/beijing.png"),BANK_APPT:"".concat(e,"/todoChild/decoration/appt.png"),BANK_RECORD:"".concat(e,"/todoChild/decoration/record.png"),BANK_LOOKFOR:"".concat(e,"/todoChild/decoration/lookfor.png"),APPT_TITLE_ONE:"".concat(e,"/todoChild/decoration/工单信息@2x.png"),APPT_TITLE_TWO:"".concat(e,"/todoChild/decoration/贷款信息变更@2x.png"),MINE_MONEY:"".concat(e,"/todoChild/mine/money.png"),MINE_INTEGRAL:"".concat(e,"/todoChild/mine/integral.png"),MINE_MEASURE:"".concat(e,"/todoChild/mine/mine_measure.png"),MINE_LOAN:"".concat(e,"/todoChild/mine/mine_loan.png"),MINE_RECOMMEND:"".concat(e,"/todoChild/mine/推荐@2x.png"),MINE_INTEGRAL_LOGO:"".concat(e,"/todoChild/mine/积分@2x.png"),MINE_SHARE_CENTER:"".concat(e,"/todoChild/mine/分销中心@2x.png"),MINE_ADRESS:"".concat(e,"/todoChild/mine/地址@2x.png"),RECOMMEND_POINT:"".concat(e,"/todoChild/recommend/积分@2x.png"),RECOMMEND_COUPON:"".concat(e,"/todoChild/recommend/优惠券@2x.png"),RECOMMEND_GIFT:"".concat(e,"/todoChild/recommend/gift.png"),RECOMMEND_INVITE:"".concat(e,"/todoChild/recommend/yaoqing.png"),RECOMMEND_DESIGNER:"".concat(e,"/todoChild/recommend/shejishi.png"),RECOMMEND_VIP:"".concat(e,"/todoChild/recommend/vip.png"),RECOMMEND_CLIENT:"".concat(e,"/todoChild/recommend/kehu.png"),RECOMMEND_OVER:"".concat(e,"/todoChild/recommend/已结束@2x.png"),MEMBER_ONE:"".concat(e,"/todoChild/mine/组 2@2x.png"),MEMBER_TWO:"".concat(e,"/todoChild/mine/组 2@2x (1).png"),MEMBER_THREE:"".concat(e,"/todoChild/mine/组 2@2x (2).png"),MEMBER_FOUR:"".concat(e,"/todoChild/mine/组 2@2x (3).png"),MEMBER_FIVE:"".concat(e,"/todoChild/mine/组 2@2x (4).png"),MEMBER_SIX:"".concat(e,"/todoChild/mine/组 2@2x (5).png"),MEMBER_SEVEN:"".concat(e,"/todoChild/mine/组 2@2x (6).png"),MEMBER_EIGHT:"".concat(e,"/todoChild/mine/组 2@2x (7).png"),INVITE_GIFT:"".concat(e,"/todoChild/invitegift/invitegift.png"),INVITE_FRIEND:"".concat(e,"/todoChild/invitegift/friend.png"),INVITE_POINT_ONE:"".concat(e,"/todoChild/invitegift/10.png"),INVITE_POINT_TWO:"".concat(e,"/todoChild/invitegift/50.png"),INVITE_POINT_THREE:"".concat(e,"/todoChild/invitegift/500.png"),SIGNIN:"".concat(e,"/todoChild/calender/签到@2x.png"),SIGNIN_IMAGE:"".concat(e,"/todoChild/calender/时间@2x.png"),FENXIANG:"".concat(e,"/fenxiang.png")}},"8c79":function(t,n,o){"use strict";var e=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("96cf");var c,i=e(o("3b8d")),a=o("5e5c"),d=o("0ae1"),r=o("a196"),g=o("4148"),s={data:function(){return{imgsuccess:a.TESTSUCCESS,imgfail:a.TESTFAIL,show:!1}},methods:{submit:function(){uni.switchTab({url:d.DECORATION})},submitToAppt:function(){uni.navigateTo({url:d.LOAN_APPLICATION})}},onLoad:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=this,t.next=3,(0,r.getCount)();case 3:n=t.sent,console.log(n),"0"==n.count?(c.show=!0,(0,g.setStorage)("canloan",!0)):(0,g.setStorage)("canloan",!1);case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()};n.default=s},a196:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loanAppt=a,n.loanList=d,n.loanListDetail=r,n.loanBank=g,n.loanFaceMember=s,n.loanPeriod=E,n.faceSumbit=l,n.testOneTest=p,n.getCount=u;var e=o("133c"),c=o("e2a7"),i=o("1fdd");i.getStorage;function a(t){return(0,e.request)({method:"POST",url:"".concat(c.LOAN_APPT),data:t})}function d(t){return(0,e.request)({method:"GET",url:"".concat(c.LOAN_LIST),showLoading:!1,hideLoading:!1,data:t})}function r(t){return(0,e.request)({method:"GET",url:"".concat(c.LOAN_LIST_DETAIL),showLoading:!1,hideLoading:!1,data:t})}function g(t){return(0,e.request)({method:"GET",url:"".concat(c.LOAN_BANK),showLoading:!1,hideLoading:!1,data:t})}function s(t){return(0,e.request)({method:"GET",url:"".concat(c.LOAN_FACE_MEMBER),showLoading:!1,hideLoading:!1,data:t})}function E(t){return(0,e.request)({method:"GET",url:"".concat(c.LOAN_PERIOD),showLoading:!1,hideLoading:!1,data:t})}function l(t){return(0,e.request)({method:"POST",url:"".concat(c.FACE_SUBMIT),data:t})}function p(t){return(0,e.request)({method:"POST",url:"".concat(c.TESTONETEST),data:t})}function u(t){return(0,e.request)({method:"GET",url:"".concat(c.GET_COUNT),showLoading:!1,hideLoading:!1,data:t})}},a2f8:function(t,n,o){"use strict";var e=o("0b96"),c=o.n(e);c.a},b853:function(t,n,o){"use strict";var e,c=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"testonetestsubmit",attrs:{hidden:t.show}},[o("v-uni-view",{staticClass:"testSuccess"},[o("v-uni-view",{staticStyle:{height:"115rpx","text-align":"center","padding-top":"30rpx"}},[o("v-uni-image",{staticStyle:{width:"82rpx",height:"73rpx"},attrs:{src:t.imgsuccess,mode:""}})],1),o("v-uni-view",{staticStyle:{height:"24rpx","margin-top":"20rpx","text-align":"center"}},[t._v("恭喜您已完成测试！")])],1),o("v-uni-view",{staticClass:"testFail",attrs:{hidden:!t.show}},[o("v-uni-view",{staticStyle:{height:"115rpx","text-align":"center","padding-top":"30rpx"}},[o("v-uni-image",{staticStyle:{width:"59rpx",height:"59rpx"},attrs:{src:t.imgfail,mode:""}})],1),o("v-uni-view",{staticStyle:{height:"24rpx","margin-top":"20rpx","text-align":"center"}},[t._v("对不起，您暂不符合条件！")])],1),o("v-uni-view",{staticStyle:{position:"fixed",left:"0",bottom:"0",width:"100%",height:"140rpx"},attrs:{hidden:t.show}},[o("v-uni-view",{staticClass:"btn",staticStyle:{"margin-top":"20rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submitToAppt.apply(void 0,arguments)}}},[t._v("立即申请")])],1),o("v-uni-view",{staticStyle:{position:"fixed",left:"0",bottom:"0",width:"100%",height:"140rpx"},attrs:{hidden:!t.show}},[o("v-uni-view",{staticClass:"btn",staticStyle:{"margin-top":"20rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("返回")])],1)],1)},i=[];o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}))},b9bc:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,".testonetestsubmit[data-v-68b2ba23]{font-size:%?32?%;background:#f2f6f9;height:100%}.testSuccess[data-v-68b2ba23]{margin:%?30?%;background:#fff;height:%?226?%}.testFail[data-v-68b2ba23]{margin:%?30?%;background:#fff;height:%?226?%}.btn[data-v-68b2ba23]{margin:%?10?% %?20?% 0 %?20?%;border-radius:%?40?%;background:#e8be2e;cursor:pointer;height:%?80?%;line-height:%?80?%;text-align:center;color:#fff}",""]),t.exports=n},c4b1:function(t,n,o){"use strict";o.r(n);var e=o("b853"),c=o("ef74");for(var i in c)"default"!==i&&function(t){o.d(n,t,(function(){return c[t]}))}(i);o("a2f8");var a,d=o("f0c5"),r=Object(d["a"])(c["default"],e["b"],e["c"],!1,null,"68b2ba23",null,!1,e["a"],a);n["default"]=r.exports},ef74:function(t,n,o){"use strict";o.r(n);var e=o("8c79"),c=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=c.a}}]);