(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-todoChild-inShop-index"],{"0bc9":function(t,e,i){"use strict";var a={"w-picker":i("f8d0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showAuth?i("v-uni-view",{staticClass:"inShop"},[i("v-uni-image",{staticClass:"inShop-hd",attrs:{src:t.imglogo}}),i("v-uni-view",{staticStyle:{color:"#333333","font-size":"14px","text-align":"center","margin-bottom":"20px"}},[t._v("欢迎入驻非客有家")]),i("v-uni-view",{staticClass:"application_hd"},[i("v-uni-view",{staticClass:"application_hd_item",staticStyle:{"border-top":"1px solid rgba(229, 229, 229, 1)"}},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*公司名称：")]),i("v-uni-view",{staticClass:"appli_hd_item_content"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入公司名称","placeholder-class":"input_color"},model:{value:t.dataList.name,callback:function(e){t.$set(t.dataList,"name",e)},expression:"dataList.name"}})],1)],1),i("v-uni-view",{staticClass:"application_hd_item",staticStyle:{"border-top":"1px solid rgba(229, 229, 229, 1)"}},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*营业执照编号：")]),i("v-uni-view",{staticClass:"appli_hd_item_content"},[i("v-uni-input",{attrs:{type:"number",maxlength:"18",placeholder:"请输入营业执照编号","placeholder-class":"input_color"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.licenseCodeClick.apply(void 0,arguments)}},model:{value:t.dataList.businesslicenseCode,callback:function(e){t.$set(t.dataList,"businesslicenseCode",e)},expression:"dataList.businesslicenseCode"}})],1)],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*法定代表人：")]),i("v-uni-view",{staticClass:"appli_hd_item_content"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入法定代表人姓名","placeholder-class":"input_color"},model:{value:t.dataList.juridicalPerson,callback:function(e){t.$set(t.dataList,"juridicalPerson",e)},expression:"dataList.juridicalPerson"}})],1)],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*注册时间：")]),i("v-uni-view",{staticClass:"appli_hd_item_content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show.apply(void 0,arguments)}}},[t._v(t._s(t.value))])],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*注册资金：")]),i("v-uni-view",{staticClass:"appli_hd_item_content",staticStyle:{position:"relative"}},[i("v-uni-input",{attrs:{type:"number",maxlength:"10",placeholder:"请输入注册资金","placeholder-class":"input_color"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.createNumberInput.apply(void 0,arguments)}},model:{value:t.dataList.createNumber,callback:function(e){t.$set(t.dataList,"createNumber",e)},expression:"dataList.createNumber"}}),i("v-uni-view",{staticStyle:{"font-size":"28rpx",position:"absolute",left:"140rpx",top:"2rpx"},attrs:{hidden:!t.createNumberShow}},[t._v("元")])],1)],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*所在城市：")]),i("v-uni-view",{staticClass:"appli_hd_item_content",staticStyle:{position:"relative"}},[i("v-uni-view",{staticClass:"appli_hd_item_content appli_hd_item_content_work"},[i("v-uni-view",{staticClass:"uni-list uni-input-style"},[i("v-uni-view",{staticClass:"uni-list-cell uni-input-style"},[i("v-uni-view",{staticClass:"uni-list-cell-db uni-input-style"},[i("v-uni-picker",{attrs:{value:t.periodIndex,range:t.periodArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.periodBindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input uni-input-style"},[t._v(t._s(t.periodArray[t.periodIndex]))]),i("v-uni-view",{staticClass:"iconfont  iconyou iconclass"})],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*联系人电话：")]),i("v-uni-view",{staticClass:"appli_hd_item_content"},[i("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入联系人电话","placeholder-class":"input_color"},model:{value:t.dataList.phone,callback:function(e){t.$set(t.dataList,"phone",e)},expression:"dataList.phone"}})],1)],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("*公司地址：")]),i("v-uni-view",{staticClass:"appli_hd_item_content"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入公司地址","placeholder-class":"input_color"},model:{value:t.dataList.address,callback:function(e){t.$set(t.dataList,"address",e)},expression:"dataList.address"}})],1)],1),i("v-uni-view",{staticClass:"application_hd_item"},[i("v-uni-view",{staticClass:"appli_hd_item_lable"},[t._v("邀请人编码：")]),i("v-uni-view",{staticClass:"appli_hd_item_content"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入邀请人编码","placeholder-class":"input_color"},model:{value:t.dataList.yaoqing,callback:function(e){t.$set(t.dataList,"yaoqing",e)},expression:"dataList.yaoqing"}})],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"scheduleBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitBtn.apply(void 0,arguments)}}},[t._v("上传资料")]),i("v-uni-view",{staticClass:"freeMeasureHomeBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.apptMeasureHomeBtn.apply(void 0,arguments)}}},[t._v("邀请商户")])],1),i("w-picker",{ref:"date",attrs:{mode:"date",startYear:"1950",defaultVal:t.value,disabledAfter:!1},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}})],1)],1):t._e()},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"0e3a":function(t,e,i){"use strict";var a=i("ba16"),n=i.n(a);n.a},"354a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loadCity=s;var a=i("133c"),n=i("e2a7");function s(t){return(0,a.request)({method:"GET",url:n.LOAD_CITY,data:t})}},"409a":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n,s=a(i("3b8d")),o=i("5e5c"),l=i("0ae1"),r=i("354a"),c=i("4148"),d=(a(i("f8d0")),i("0ae1")),u=d.AUTH,p={data:function(){return{imglogo:o.COMPANY_LOGO,periodArray:[],periodIndex:0,dataList:{},cityid:[],value:"",createNumberShow:!1,showAuth:!1}},methods:{licenseCodeClick:function(t){15!=t.detail.value.length&&18!=t.detail.value.length&&uni.showToast({title:"营业执照编号需15位或18位",icon:"none",duration:2e3})},createNumberInput:function(t){""==t.detail.value?n.createNumberShow=!1:n.createNumberShow=!0},show:function(){this.$refs.date.show()},onConfirm:function(t){n.dataList.createDate=t.result,n.value=t.result},periodBindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.periodIndex=t.target.value,n.dataList.cid=this.cityid[t.target.value]},getTime:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();t.getHours(),t.getHours(),t.getMinutes(),t.getMinutes(),t.getSeconds(),t.getSeconds();i>=1&&i<=9&&(i="0"+i),a>=0&&a<=9&&(a="0"+a);var n=e+"-"+i+"-"+a;return n},toast:function(t){uni.showToast({title:t,duration:2e3,icon:"none"})},submitBtn:function(){if(this.dataList.name)if(this.dataList.businesslicenseCode)if(this.dataList.juridicalPerson)if(this.dataList.createDate)if(this.dataList.createNumber)if(this.dataList.cid)if(this.dataList.phone)if(this.dataList.address){n.yaoqing="";var t=JSON.stringify(this.dataList);setTimeout((function(){uni.showToast({title:"提交成功,请上传资料",icon:"none",duration:2e3})}),100),uni.navigateTo({url:"".concat(l.UPLOAD,"?data=").concat(t)})}else this.toast("请输入你的公司地址");else this.toast("请输入你的联系人电话");else this.toast("请输入你的所在城市");else this.toast("请输入你的注册资金");else this.toast("请输入你的注册时间");else this.toast("请输入你的法人姓名");else this.toast("营业执照编号");else this.toast("请输入你的公司名称")},apptMeasureHomeBtn:function(){uni.navigateTo({url:l.INVITE})}},onLoad:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){var e,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this,t.next=3,(0,r.loadCity)();case 3:if(e=t.sent,console.log(e),n.periodArray=e.list.map((function(t){return t.name})),n.cityid=e.list.map((function(t){return t.id})),n.dataList.cid=n.cityid[0],n.value=this.getTime(),n.dataList.createDate=this.getTime(),i=(0,c.getStorage)("isLogin"),!i){t.next=15;break}this.showAuth=!0,t.next=19;break;case 15:if(a=getCurrentPages(),!(a.length>0&&0===u.indexOf("/"+a[a.length-1].route))){t.next=18;break}return t.abrupt("return");case 18:uni.redirectTo({url:"".concat(u,"?name=","inShop")});case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()};e.default=p},"50f2":function(t,e,i){"use strict";i.r(e);var a=i("409a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"7a02":function(t,e,i){"use strict";i.r(e);var a=i("0bc9"),n=i("50f2");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("0e3a"),i("f167");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"26023712",null,!1,a["a"],o);e["default"]=r.exports},b6ee:function(t,e,i){var a=i("b9a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("9678b4a4",a,!0,{sourceMap:!1,shadowMode:!1})},b9a7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".inShop[data-v-26023712]{height:500px;padding-top:20px}.inShop-hd[data-v-26023712]{display:block;border-radius:50%;border:1px solid #dcdcdc;width:45px;height:45px;margin:0 auto 5px}.application_hd[data-v-26023712]{height:%?485?%;padding:0 %?16?% 0 %?16?%;background:#fff}.application_hd_item[data-v-26023712]{height:%?82?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?82?%;border-bottom:%?2?% solid #e5e5e5}.appli_hd_item_lable[data-v-26023712]{-webkit-flex-basis:%?250?%;flex-basis:%?250?%;font-size:12px;color:#333}.appli_hd_item_content[data-v-26023712]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:12px;color:#333}.input_color[data-v-26023712]{color:#999;font-size:12px}.btn[data-v-26023712]{height:%?100?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;padding-left:%?20?%;padding-right:%?20?%;margin-top:40px}.scheduleBtn[data-v-26023712]{-webkit-box-flex:48%;-webkit-flex:48%;flex:48%;margin:%?10?%;background:#ffea04;color:#000;height:%?80?%;line-height:%?80?%;text-align:center;border-radius:30px;box-shadow:0 2px rgba(0,0,0,.1);font-size:13px}.freeMeasureHomeBtn[data-v-26023712]{-webkit-box-flex:48%;-webkit-flex:48%;flex:48%;margin:%?10?%;background:#ebcd9b;color:#000;height:%?80?%;line-height:%?80?%;text-align:center;border-radius:30px;box-shadow:0 2px rgba(0,0,0,.1);font-size:13px}.uni-input-style[data-v-26023712]{width:100%}.iconclass[data-v-26023712]{position:absolute;right:0;top:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}",""]),t.exports=e},ba16:function(t,e,i){var a=i("c47b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0b127a6d",a,!0,{sourceMap:!1,shadowMode:!1})},c47b:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-26023712]{background-color:#fff}body.?%PAGE?%[data-v-26023712]{background-color:#fff}",""]),t.exports=e},f167:function(t,e,i){"use strict";var a=i("b6ee"),n=i.n(a);n.a}}]);