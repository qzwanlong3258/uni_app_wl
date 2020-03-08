(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/todoChild/writeOrder/writeOrder"],{

/***/ 58:
/*!**************************************************************************************************************!*\
  !*** D:/laragon/www/wl_project/feike_uni_app/main.js?{"page":"pages%2FtodoChild%2FwriteOrder%2FwriteOrder"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _writeOrder = _interopRequireDefault(__webpack_require__(/*! ./pages/todoChild/writeOrder/writeOrder.vue */ 59));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_writeOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 59:
/*!*****************************************************************************************!*\
  !*** D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writeOrder_vue_vue_type_template_id_be0c1df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writeOrder.vue?vue&type=template&id=be0c1df4& */ 60);
/* harmony import */ var _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeOrder.vue?vue&type=script&lang=js& */ 62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeOrder.vue?vue&type=style&index=0&lang=scss& */ 66);
/* harmony import */ var _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 24);






/* normalize component */

var component = Object(_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _writeOrder_vue_vue_type_template_id_be0c1df4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _writeOrder_vue_vue_type_template_id_be0c1df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/*!************************************************************************************************************************!*\
  !*** D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue?vue&type=template&id=be0c1df4& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_template_id_be0c1df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeOrder.vue?vue&type=template&id=be0c1df4& */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_template_id_be0c1df4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_template_id_be0c1df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 61:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue?vue&type=template&id=be0c1df4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 62:
/*!******************************************************************************************************************!*\
  !*** D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeOrder.vue?vue&type=script&lang=js& */ 63);
/* harmony import */ var _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));


var _router = __webpack_require__(/*! @/config/router.js */ 21);
var _package = __webpack_require__(/*! @/config/package.js */ 64);
var _address = __webpack_require__(/*! @/api/address.js */ 65);
var _order = __webpack_require__(/*! @/api/order.js */ 47);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var OrderInfor = function OrderInfor() {return __webpack_require__.e(/*! import() | components/OrderInfor */ "components/OrderInfor").then(__webpack_require__.bind(null, /*! @/components/OrderInfor.vue */ 303));};var YldAddress = function YldAddress() {return __webpack_require__.e(/*! import() | components/YldAddress */ "components/YldAddress").then(__webpack_require__.bind(null, /*! @/components/YldAddress.vue */ 339));};var _default =

{
  data: function data() {
    return {
      orderInformation: {},
      shippingAddress: {
        infor: {},
        listQuery: {
          page: 1,
          size: 5 } },


      allMoney: 0,
      submiting: false };

  },
  onLoad: function onLoad() {var _this = this;
    this.orderInformation = getApp().globalData.goodsInfor;
    this.allMoney = this.orderInformation.goodsPrice;
    (0, _address.loadAddress)(this.shippingAddress.listQuery).then(function (res) {
      _this.shippingAddress.infor = res.list[0];
    });
    this.$eventBus.$on("addressChange", function (data) {
      _this.shippingAddress.infor = data;
    });
  },
  components: {
    OrderInfor: OrderInfor,
    YldAddress: YldAddress },

  methods: {

    /**
              * 调整总金额
              */
    changeAllMoney: function changeAllMoney(counts) {
      this.allMoney = Number(counts) * Number(this.orderInformation.goodsPrice);
    },

    /**
        * 检测收货地址
        */
    checkAddress: function () {var _checkAddress = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var infor, isSuccess;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                infor = this.shippingAddress.infor;
                isSuccess = true;
                // 这里的地址字段名故意写错，后端非法命名
                if (infor.addres && infor.name && infor.phone) {_context.next = 6;break;}
                this.isSuccess = false;_context.next = 6;return (
                  (0, _package.model)({
                    content: '请添加收货地址' }));case 6:return _context.abrupt("return",


                isSuccess);case 7:case "end":return _context.stop();}}}, _callee, this);}));function checkAddress() {return _checkAddress.apply(this, arguments);}return checkAddress;}(),


    /**
                                                                                                                                                                                            * 创建订单
                                                                                                                                                                                            */
    createOrder: function () {var _createOrder2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  (0, _order.createOrder)({
                    addressId: this.shippingAddress.infor.id,
                    gid: this.orderInformation.id }));case 2:res = _context2.sent;_context2.t0 =

                Number(res.count) !== 1;if (!_context2.t0) {_context2.next = 8;break;}res = null;_context2.next = 8;return (0, _package.model)({ content: '创建订单失败,请重新选择商品', showCancel: false });case 8:return _context2.abrupt("return",
                res);case 9:case "end":return _context2.stop();}}}, _callee2, this);}));function createOrder() {return _createOrder2.apply(this, arguments);}return createOrder;}(),


    /**
                                                                                                                                                                                      * 订单支付
                                                                                                                                                                                      */
    payOrder: function () {var _payOrder2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(uuid) {var res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  (0, _order.payOrder)({
                    uuid: uuid, money: this.allMoney }));case 2:res = _context3.sent;_context3.t0 =

                Number(res.count) !== 1;if (!_context3.t0) {_context3.next = 8;break;}res = null;_context3.next = 8;return (0, _package.model)({ content: '支付失败,请重新选择商品', showCancel: false });case 8:return _context3.abrupt("return",
                res);case 9:case "end":return _context3.stop();}}}, _callee3, this);}));function payOrder(_x) {return _payOrder2.apply(this, arguments);}return payOrder;}(),


    /**
                                                                                                                                                                               * 处理提交订单
                                                                                                                                                                               */
    startTodo: function () {var _startTodo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var checkAddressRes, createOrderRes, payOrderRes;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:if (!
                this.submiting) {_context4.next = 2;break;}return _context4.abrupt("return");case 2:
                this.submiting = true;_context4.next = 5;return (

                  this.checkAddress());case 5:_context4.t1 = checkAddressRes = _context4.sent;if (!_context4.t1) {_context4.next = 10;break;}_context4.next = 9;return this.createOrder();case 9:_context4.t1 = createOrderRes = _context4.sent;case 10:_context4.t0 = _context4.t1;if (!_context4.t0) {_context4.next = 15;break;}_context4.next = 14;return this.payOrder(createOrderRes.uuid);case 14:_context4.t0 = payOrderRes = _context4.sent;case 15:if (_context4.t0) {_context4.next = 17;break;}return _context4.abrupt("return",
                this.submiting = false);case 17:

                uni.navigateTo({
                  url: "".concat(_router.ORDER_DETAIL, "?id=").concat(createOrderRes.uuid) });

                this.submiting = false;case 19:case "end":return _context4.stop();}}}, _callee4, this);}));function startTodo() {return _startTodo.apply(this, arguments);}return startTodo;}() } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 66:
/*!***************************************************************************************************************************!*\
  !*** D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../HbuilderX/HBuilderX.2.4.2.20191115/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeOrder.vue?vue&type=style&index=0&lang=scss& */ 67);
/* harmony import */ var _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HbuilderX_HBuilderX_2_4_2_20191115_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/laragon/www/wl_project/feike_uni_app/pages/todoChild/writeOrder/writeOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[58,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/todoChild/writeOrder/writeOrder.js.map