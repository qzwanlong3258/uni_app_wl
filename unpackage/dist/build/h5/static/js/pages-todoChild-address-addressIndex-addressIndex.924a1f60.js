(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-address-addressIndex-addressIndex"],{"0407":function(t,n,o){"use strict";var e,i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.isLoading?o("v-uni-scroll-view",{staticClass:"container",attrs:{"scroll-y":!0},on:{scrolltolower:function(n){arguments[0]=n=t.$handleEvent(n),t.scrolltolower.apply(void 0,arguments)}}},[t.addressList.length?o("v-uni-view",{staticClass:"form-list"},t._l(t.addressList,(function(n,e){return o("v-uni-view",{key:e,staticClass:"list-column",attrs:{"data-index":e,"data-id":n.id}},[o("v-uni-view",{staticClass:"column-top",attrs:{"data-id":n.id},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.exitAddress.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"column-name"},[t._v(t._s(n.name))]),o("v-uni-view",{staticClass:"column-phone"},[t._v(t._s(n.phone))])],1),o("v-uni-view",{staticClass:"column-bottom"},[n.isDefault?o("v-uni-view",{staticClass:"tip-font default-logo",attrs:{"data-index":e,"data-id":n.id},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.exitAddress.apply(void 0,arguments)}}},[t._v("默认")]):t._e(),o("v-uni-view",{staticClass:"column-address",style:{width:n.isDefault?"65%":"75%"},attrs:{"data-index":e,"data-id":n.id},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.exitAddress.apply(void 0,arguments)}}},[t._v(t._s(n.addres))]),o("v-uni-view",{staticClass:"column-exit",attrs:{"data-index":e,"data-id":n.id},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.exitAddress.apply(void 0,arguments)}}},[t._v(t._s("selectAddress"===t.options.operating?"选择":t.rightName))])],1)],1)})),1):t._e(),t.addressList.length?t._e():o("v-uni-view",[o("v-uni-image",{staticClass:"default-image",attrs:{src:t.defaultImg}})],1),o("gxg-button",{staticClass:"start-todo",on:{clickBtn:function(n){arguments[0]=n=t.$handleEvent(n),t.addAddress.apply(void 0,arguments)}}},[t._v("添加收货地址")])],1):t._e()},a=[];o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}))},2744:function(t,n,o){"use strict";var e=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("7514"),o("96cf");var i=e(o("3b8d")),a=o("5e5c"),c=o("0ae1"),d=e(o("7fc9")),r=o("4d7d"),s=o("3956"),l=(o("4cc3"),o("36ce")),p={data:function(){return{options:{},rightName:"编辑",page:1,pages:0,addressList:[],pageSize:10,defaultImg:a.NULL_DATA,isLoading:!0,isChoose:!1,isIpx:!1}},onLoad:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.options=n,"orderUpdate"==this.options.operating&&(this.rightName="选择"),this.refreshAddressList(),this.$eventBus.$on("refreshAddressList",this.refreshAddressList);case 4:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),methods:{refreshAddressList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return delete getApp().globalData.addressList,t.next=3,this.getAddressList();case 3:this.addressList=t.sent;case 4:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),getAddressList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!getApp().globalData.addressList){t.next=2;break}return t.abrupt("return",addressList);case 2:return t.next=4,(0,r.loadAddress)();case 4:return t.abrupt("return",getApp().globalData.addressList=t.sent.list);case 5:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),addAddress:function(){uni.navigateTo({url:c.ADDRESS_DETAIL})},orderUpdate:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){var o,e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=n.id,t.next=3,(0,s.updateOrder)({uuid:this.options.orderid,addressId:o});case 3:if(e=t.sent,i=1===e.count,t.t0=!i,!t.t0){t.next=9;break}return t.next=9,(0,l.model)({content:"更新订单收货地址失败，请刷新重试",showCancel:!1});case 9:return uni.navigateTo({url:"".concat(c.ORDER_DETAIL,"?id=").concat(this.options.orderid)}),t.abrupt("return",!!i&&e);case 11:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),selectAddress:function(t){var n=t.item;this.$eventBus.$emit("addressChange",n),uni.navigateBack({delta:1})},updateAddress:function(t){var n=t.item;wx.navigateTo({url:"".concat(c.ADDRESS_DETAIL,"?id=").concat(n.id)})},exitAddress:function(t){var n=t.currentTarget.dataset.id,o=this.addressList.find((function(t){return t.id==n}));this[this.options.operating]&&this[this.options.operating]({item:o,id:n})}},components:{GxgButton:d.default}};n.default=p},"36d1":function(t,n,o){"use strict";o.r(n);var e=o("2744"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},3956:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createOrder=a,n.payOrder=c,n.getOrderDetail=d,n.deleteOrder=r,n.orderDelivery=s,n.getOrderList=l,n.updateOrder=p;var e=o("133c"),i=o("e2a7");function a(t){return(0,e.request)({method:"POST",url:i.CREATE_ORDER,data:t})}function c(t){return(0,e.request)({method:"POST",url:i.PAY_ORDER,data:t})}function d(t){return(0,e.request)({method:"GET",url:i.GET_ORDER_DETAIL,data:t})}function r(t){return(0,e.request)({method:"POST",url:i.DELETE_ORDER,data:t})}function s(t){return(0,e.request)({method:"POST",url:i.ORDER_DELIVERY,data:{orderid:t}})}function l(t){return(0,e.request)({method:"GET",url:i.GET_ORDER_LIST,data:t})}function p(t){return(0,e.request)({method:"POST",url:i.UPDATE_ORDER,data:t})}},"5e5c":function(t,n,o){"use strict";var e="https://www.feiaizn.com/feiai";t.exports={COMPANY_LOGO:"".concat(e,"/companyLogo.png"),TOUXIANG_LOGO:"".concat(e,"/touxianglogo.png"),HOME_DEMO:"".concat(e,"/demo.png"),NULL_DATA:"".concat(e,"/nullData.png"),HOME_HEADER:"".concat(e,"/todoChild/home/position.png"),ME_1:"".concat(e,"/tabbar/bitmap.png"),ME_2:"".concat(e,"/tabbar/bitmap1.png"),ME_3:"".concat(e,"/tabbar/bitmap2.png"),ME_4:"".concat(e,"/tabbar/分享@2x.png"),ME_5:"".concat(e,"/tabbar/积分商城@2x.png"),ME_6:"".concat(e,"/tabbar/分销@2x.png"),ME_7:"".concat(e,"/tabbar/分享@2x.png"),ME_8:"".concat(e,"/tabbar/地址@2x.png"),CHECK_IN:"".concat(e,"/tabbar/签到.png"),CROSS:"".concat(e,"/tabbar/叉号.png"),RIGHT:"".concat(e,"/tabbar/right.png"),PRE_PAYMENT:"".concat(e,"/tabbar/待付款@2x.png"),TO_BE_DELIVERED:"".concat(e,"/tabbar/待发货@2x.png"),TO_BE_RECEIVED:"".concat(e,"/tabbar/待收货@2x.png"),EVALUATION:"".concat(e,"/tabbar/评价@2x.png"),AFTER_SALE:"".concat(e,"/tabbar/售后@2x.png"),MEMBER:"".concat(e,"/todoChild/distribution/位图@2x.png"),DESIGNER:"https://www.feiaizn.com/images/20200514152221_qianbi.png",CLIENT:"".concat(e,"/todoChild/distribution/位图@2x(2).png"),POSTER:"".concat(e,"/todoChild/海报@2x.png"),GOODS:"".concat(e,"/todoChild/商品@2x.png"),INVITE_MEMBER:"".concat(e,"/todoChild/发送纸飞机@2x.png"),INVITE_DESIGNER:"".concat(e,"/todoChild/邀请@2x(1).png"),INVITE_CLIENT:"".concat(e,"/todoChild/邀请@2x.png"),DISTRIBUTION_MENU_HEOM:"".concat(e,"/todoChild/distribution/system-loadingc@2x.png"),DIR_TITLE_ONE:"".concat(e,"/todoChild/distribution/业绩@2x.png"),DIR_TITLE_TWO:"".concat(e,"/todoChild/distribution/工具@2x.png"),DIR_NAV_ONE:"".concat(e,"/todoChild/distribution/海报.png"),DIR_NAV_TWO:"".concat(e,"/todoChild/distribution/商品.png"),DIR_NAV_THREE:"".concat(e,"/todoChild/distribution/会员.png"),DIR_NAV_FOUR:"".concat(e,"/todoChild/distribution/设计师.png"),DIR_NAV_FIVE:"".concat(e,"/todoChild/distribution/客户.png"),DIR_NAV_SIX:"".concat(e,"/todoChild/distribution/首页.png"),DIR_VIP:"".concat(e,"/todoChild/distribution/vip.png"),DIR_RESGITER:"".concat(e,"/todoChild/distribution/shejishi.png"),DIR_KEHU:"".concat(e,"/todoChild/distribution/kehu.png"),RECOMMENDED_MEMBER:"".concat(e,"/todoChild/member/推荐好友.png"),INVITE_NOW:"".concat(e,"/todoChild/member/立即邀请.png"),DOWNLOAD_IMG:"".concat(e,"/todoChild/promoteGoods/save_album.png"),POSTER_1:"".concat(e,"/todoChild/poster/11.jpg"),POSTER_2:"".concat(e,"/todoChild/poster/22.jpg"),POSTER_3:"".concat(e,"/todoChild/poster/33.jpg"),POSTER_4:"".concat(e,"/todoChild/poster/44.jpg"),POSTER_5:"".concat(e,"/todoChild/poster/55.jpg"),POSTER_6:"".concat(e,"/todoChild/poster/66.jpg"),SUCCESSPAY:"".concat(e,"/todoChild/打款成功@2x.png"),ONEHOME:"".concat(e,"/todoChild/testonetest/一室一厅@2x.png"),TWOHOME:"".concat(e,"/todoChild/testonetest/户型 (1)@2x.png"),THREEHOME:"".concat(e,"/todoChild/testonetest/户型 (3)@2x.png"),OTHERHOME:"".concat(e,"/todoChild/testonetest/户型 (2)@2x.png"),TESTMEN:"".concat(e,"/todoChild/testonetest/男孩@2x.png"),TESTWOMEN:"".concat(e,"/todoChild/testonetest/女孩@2x.png"),INCOMEONE:"".concat(e,"/todoChild/testonetest/收入ONE.png"),INCOMETWO:"".concat(e,"/todoChild/testonetest/收入TWO.png"),INCOMETHREE:"".concat(e,"/todoChild/testonetest/收入THREE.png"),INCOMEFOUR:"".concat(e,"/todoChild/testonetest/收入FOUR.png"),BUSINESSMAN:"".concat(e,"/todoChild/testonetest/个体商户@2x.png"),SERVANTMAN:"".concat(e,"/todoChild/testonetest/公务员@2x.png"),EMPLOYEE:"".concat(e,"/todoChild/testonetest/员工@2x.png"),STAFF:"".concat(e,"/todoChild/testonetest/一般员工@2x.png"),HOMEONE:"".concat(e,"/todoChild/testonetest/homeone.png"),HOMETWO:"".concat(e,"/todoChild/testonetest/hometwo.png"),HOMETHREE:"".concat(e,"/todoChild/testonetest/homethree.png"),HOMEFOUR:"".concat(e,"/todoChild/testonetest/homefour.png"),TESTSUCCESS:"".concat(e,"/todoChild/testonetest/完成@2x.png"),TESTFAIL:"".concat(e,"/todoChild/testonetest/3.0-未完成@2x.png"),LOAN_PICTURE:"https://www.feiaizn.com/images/20200518120407_loanPicture.png",MEASUREHOME:"".concat(e,"/todoChild/约量房.png"),MEASUREHOME_SUCCESS:"".concat(e,"/todoChild/约量房成功@2x.png"),MEASUREHOME_CHOOSE:"".concat(e,"/todoChild/measureHome/choose.png"),MEASUREHOME_ISCHOOSE:"".concat(e,"/todoChild/measureHome/ischoose.png"),UPLOAD:"".concat(e,"/todoChild/上传@2x.png"),BANNER_ONE:"".concat(e,"/banner/banner1@2x.png"),BANNER_TWO:"".concat(e,"/banner/banner2@2x.png"),BANNER_THREE:"".concat(e,"/banner/banner3@2x.png"),BANNER_FOUR:"".concat(e,"/banner/banner4@2x.png"),HEAT_POINT:"".concat(e,"/banner/redian.png"),NAV_ONE:"".concat(e,"/banner/navone.png"),NAV_TWO:"".concat(e,"/banner/navtwo.png"),NAV_THREE:"".concat(e,"/banner/navthree.png"),NAV_FOUR:"".concat(e,"/banner/navfour.png"),AD_ONE:"".concat(e,"/banner/广告位1@2x.png"),AD_TWO:"".concat(e,"/banner/广告位2@2x.png"),AD_THREE:"".concat(e,"/banner/广告位3@2x.png"),BANK_PIC:"".concat(e,"/todoChild/decoration/bankmoney.png"),BANK_LOGO:"".concat(e,"/todoChild/decoration/banklogo.png"),LOAN_NAV_PIC:"https://www.feiaizn.com/images/20200518163409_loanTH.jpg",BANK_JH:"".concat(e,"/todoChild/decoration/建设银行@2x.png"),BANK_BH:"".concat(e,"/todoChild/decoration/碧海银行@2x.png"),BANK_BJ:"".concat(e,"/todoChild/decoration/北京银行@2x.png"),BANK_JH_DETAIL:"".concat(e,"/todoChild/decoration/jianshe.png"),BANK_BH_DETAIL:"".concat(e,"/todoChild/decoration/bohai.png"),BANK_BJ_DETAIL:"".concat(e,"/todoChild/decoration/beijing.png"),BANK_APPT:"".concat(e,"/todoChild/decoration/appt.png"),BANK_RECORD:"".concat(e,"/todoChild/decoration/record.png"),BANK_LOOKFOR:"".concat(e,"/todoChild/decoration/lookfor.png"),APPT_TITLE_ONE:"".concat(e,"/todoChild/decoration/工单信息@2x.png"),APPT_TITLE_TWO:"".concat(e,"/todoChild/decoration/贷款信息变更@2x.png"),MINE_MONEY:"".concat(e,"/todoChild/mine/money.png"),MINE_INTEGRAL:"".concat(e,"/todoChild/mine/integral.png"),MINE_MEASURE:"".concat(e,"/todoChild/mine/mine_measure.png"),MINE_LOAN:"".concat(e,"/todoChild/mine/mine_loan.png"),MINE_RECOMMEND:"".concat(e,"/todoChild/mine/推荐@2x.png"),MINE_INTEGRAL_LOGO:"".concat(e,"/todoChild/mine/积分@2x.png"),MINE_SHARE_CENTER:"".concat(e,"/todoChild/mine/分销中心@2x.png"),MINE_ADRESS:"".concat(e,"/todoChild/mine/地址@2x.png"),MINE_DESIGER:"https://www.feiaizn.com/images/20200518111543_shejishirenzheng.png",MINE_ROLE_CHANGE:"https://www.feiaizn.com/images/20200518111657_jiaoseqiehuan.png",RECOMMEND_POINT:"".concat(e,"/todoChild/recommend/积分@2x.png"),RECOMMEND_COUPON:"".concat(e,"/todoChild/recommend/优惠券@2x.png"),RECOMMEND_GIFT:"".concat(e,"/todoChild/recommend/gift.png"),RECOMMEND_INVITE:"".concat(e,"/todoChild/recommend/yaoqing.png"),RECOMMEND_DESIGNER:"".concat(e,"/todoChild/recommend/shejishi.png"),RECOMMEND_VIP:"".concat(e,"/todoChild/recommend/vip.png"),RECOMMEND_CLIENT:"".concat(e,"/todoChild/recommend/kehu.png"),RECOMMEND_OVER:"".concat(e,"/todoChild/recommend/已结束@2x.png"),MEMBER_ONE:"".concat(e,"/todoChild/mine/组 2@2x.png"),MEMBER_TWO:"".concat(e,"/todoChild/mine/组 2@2x (1).png"),MEMBER_THREE:"".concat(e,"/todoChild/mine/组 2@2x (2).png"),MEMBER_FOUR:"".concat(e,"/todoChild/mine/组 2@2x (3).png"),MEMBER_FIVE:"".concat(e,"/todoChild/mine/组 2@2x (4).png"),MEMBER_SIX:"".concat(e,"/todoChild/mine/组 2@2x (5).png"),MEMBER_SEVEN:"".concat(e,"/todoChild/mine/组 2@2x (6).png"),MEMBER_EIGHT:"".concat(e,"/todoChild/mine/组 2@2x (7).png"),INVITE_GIFT:"".concat(e,"/todoChild/invitegift/invitegift.png"),INVITE_FRIEND:"".concat(e,"/todoChild/invitegift/friend.png"),INVITE_POINT_ONE:"".concat(e,"/todoChild/invitegift/10.png"),INVITE_POINT_TWO:"".concat(e,"/todoChild/invitegift/50.png"),INVITE_POINT_THREE:"".concat(e,"/todoChild/invitegift/500.png"),SIGNIN:"".concat(e,"/todoChild/calender/签到@2x.png"),SIGNIN_IMAGE:"".concat(e,"/todoChild/calender/时间@2x.png"),FENXIANG:"".concat(e,"/fenxiang.png"),JIFEN_PIC:"https://www.feiaizn.com/images/20200514171649_jifenfenxiao.png",BOTTOM_JIANTOU:"https://www.feiaizn.com/images/20200516120658_xiatubiao.png",DECORATE_HOUSE:"https://www.feiaizn.com/images/20200522094914_outFitTop.png",STAR:"https://www.feiaizn.com/images/20200522114244_xingxing.png",MASK_IMG:"https://www.feiaizn.com/images/20200522164139_youhuijuan.png",COUPON_BG:"https://www.feiaizn.com/images/20200524201641_youhuijuanbeijing.png",MINE_RECORD:"https://www.feiaizn.com/images/20200525111941_jilu.png",MINE_KEFU:"https://www.feiaizn.com/images/20200525112119_kefu.png",VIP:"https://www.feiaizn.com/images/20200525112629_v.png"}},"93d1":function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,".form-list[data-v-7547b0cb]{width:100%;background:#fff}.form-list .list-column[data-v-7547b0cb]{width:100%;min-height:%?180?%;border-bottom:%?1?% solid #eee}.list-column .column-top[data-v-7547b0cb]{width:100%;height:%?80?%;font-size:%?32?%;line-height:%?80?%;display:-webkit-box;display:flex;display:-webkit-flex;padding-left:%?20?%}.column-top .column-phone[data-v-7547b0cb]{font-size:%?24?%;color:#666;margin-left:%?20?%;line-height:%?90?%}.list-column .column-bottom[data-v-7547b0cb]{width:%?710?%;margin-left:%?20?%;display:-webkit-flex;font-size:%?28?%}.list-column .default-logo[data-v-7547b0cb]{width:%?80?%;height:%?42?%;background:#000;border-radius:%?30?%;text-align:center;line-height:%?40?%;color:#fff;margin-top:%?14?%;margin-right:%?30?%}.list-column .column-address[data-v-7547b0cb]{width:65%;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:%?70?%;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-column .column-exit[data-v-7547b0cb]{width:%?95?%;height:%?40?%;border-left:%?1?% solid #eee;text-align:right;line-height:%?40?%;position:absolute;right:%?30?%;font-size:%?30?%}.default-image[data-v-7547b0cb]{width:%?400?%;height:%?300?%;margin:auto;top:0;left:0;right:0;bottom:0;position:absolute}.default-image uni-image[data-v-7547b0cb]{width:100%;height:100%}",""]),t.exports=n},"998d":function(t,n,o){"use strict";var e=o("a0bb"),i=o.n(e);i.a},a0bb:function(t,n,o){var e=o("93d1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("49813e8e",e,!0,{sourceMap:!1,shadowMode:!1})},de18:function(t,n,o){"use strict";o.r(n);var e=o("0407"),i=o("36d1");for(var a in i)"default"!==a&&function(t){o.d(n,t,(function(){return i[t]}))}(a);o("998d");var c,d=o("f0c5"),r=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"7547b0cb",null,!1,e["a"],c);n["default"]=r.exports}}]);