webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"display-4\">Angular Playground</h1>\n    <p class=\"lead\">Developer: Vanz Perla</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [ngStyle]=\"{'background-color': themeBackgroundColor}\">\n\n <header>\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" href=\"\" routerLink=\"home\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" routerLink=\"about\">About</a>\n              </li>\n          </ul>\n      </nav>\n      <ng2-toasty [position]=\"'top-center'\"></ng2-toasty>\n </header>\n <br />\n  <router-outlet></router-outlet>\n\n  <br />\n  <footer>\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-5\">\n            <p>All rights reserved @ 2018</p>\n        </div>\n    </div>\n  </footer>\n\n</div> <!-- end of main container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select().subscribe(function (res) {
            if (typeof (res.setting) !== 'undefined' && typeof (res.setting.themeBackgroundColor) !== 'undefined')
                _this.themeBackgroundColor = res.setting.themeBackgroundColor;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ks_currency_mask_lib_ks_currency_mask_module__ = __webpack_require__("../../../../ks-currency-mask/lib/ks-currency-mask.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ks_currency_mask_lib_ks_currency_mask_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__node_modules_ks_currency_mask_lib_ks_currency_mask_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting_component__ = __webpack_require__("../../../../../src/app/pages/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_product_component__ = __webpack_require__("../../../../../src/app/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart_component__ = __webpack_require__("../../../../../src/app/pages/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_product_admin_product_component__ = __webpack_require__("../../../../../src/app/pages/admin/product/admin.product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_customer_info_customer_info_component__ = __webpack_require__("../../../../../src/app/pages/checkout/customer-info/customer-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_order_order_component__ = __webpack_require__("../../../../../src/app/pages/admin/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_checkout_billing_address_billing_address_component__ = __webpack_require__("../../../../../src/app/pages/checkout/billing-address/billing-address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkout_payment_info_payment_info_component__ = __webpack_require__("../../../../../src/app/pages/checkout/payment-info/payment-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_checkout_review_review_component__ = __webpack_require__("../../../../../src/app/pages/checkout/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_product_modal_add_product_modal_component__ = __webpack_require__("../../../../../src/app/pages/add-product-modal/add-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_checkout_checkout_modal_checkout_modal_component__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_admin_order_detail_modal_order_detail_modal_component__ = __webpack_require__("../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_admin_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/pages/admin/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_toasty_service__ = __webpack_require__("../../../../../src/app/services/toasty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__redux_store__ = __webpack_require__("../../../../../src/app/redux/store.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // <-- #1 import module






























var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        this.ngRedux = ngRedux;
        this.devTools = devTools;
        var enhancers = [];
        var middleware = [];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])() && devTools.isEnabled()) {
            enhancers = enhancers.concat([devTools.enhancer()]);
        }
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_32__redux_store__["a" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_32__redux_store__["b" /* INITIAL_STATE */], middleware, enhancers);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_admin_product_admin_product_component__["a" /* AdminProductComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_checkout_customer_info_customer_info_component__["a" /* CustomerInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_admin_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_admin_order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_checkout_checkout_modal_checkout_modal_component__["a" /* CheckoutModalComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_checkout_billing_address_billing_address_component__["a" /* BillingAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_checkout_payment_info_payment_info_component__["a" /* PaymentInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_checkout_review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_admin_order_detail_modal_order_detail_modal_component__["a" /* OrderDetailModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__node_modules_ks_currency_mask_lib_ks_currency_mask_module__["KsCurrencyMask"],
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_22__pages_add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */], __WEBPACK_IMPORTED_MODULE_23__pages_checkout_checkout_modal_checkout_modal_component__["a" /* CheckoutModalComponent */], __WEBPACK_IMPORTED_MODULE_24__pages_admin_order_detail_modal_order_detail_modal_component__["a" /* OrderDetailModalComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_25__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_27__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_28__services_setting_service__["a" /* SettingService */], __WEBPACK_IMPORTED_MODULE_29__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_30__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_31__services_toasty_service__["a" /* ToastyMessageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n   <!-- Left -->\n  <div class=\"col-md-2\">\n    <setting-component></setting-component>\n  </div>\n\n  <!-- Center -->\n  <div class=\"col-md-6\">\n    <product-component></product-component>\n    <br />\n    <cart-component></cart-component>\n  </div>  \n\n  <!-- Right -->\n  <div class=\"col-md-4\">\n    <admin-component></admin-component>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/bill.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillModel; });
var BillModel = (function () {
    function BillModel(address1, address2, country, zipcode) {
        this.address1 = address1;
        this.address2 = address2;
        this.country = country;
        this.zipcode = zipcode;
    }
    return BillModel;
}());

//# sourceMappingURL=bill.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/cart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartModel; });
var CartModel = (function () {
    function CartModel(product, qty, subTotal, total) {
        this.name = product ? product.name : '';
        this.description = product ? product.description : '';
        this.price = product ? product.price : null;
        this.imgUrl = product ? product.imgUrl : '';
        this.qty = qty;
        this.subTotal = subTotal;
        this.total = total;
    }
    return CartModel;
}());

//# sourceMappingURL=cart.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/customer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModel; });
var CustomerModel = (function () {
    function CustomerModel(firstname, lastname, gender, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
    }
    return CustomerModel;
}());

//# sourceMappingURL=customer.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailModel; });
var OrderDetailModel = (function () {
    function OrderDetailModel(customerInfo, billInfo, paymnetInfo) {
        this.customerInfo = customerInfo;
        this.billInfo = billInfo;
        this.paymentInfo = this.paymentInfo;
    }
    return OrderDetailModel;
}());

//# sourceMappingURL=order.detail.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModel; });
var OrderModel = (function () {
    function OrderModel(orderNo, subTotal, tax, shippingFee, totalAmount, orderItems, orderDetail, status) {
        this.orderNo = orderNo;
        this.subTotal = subTotal;
        this.tax = tax;
        this.shippingFee = shippingFee;
        this.totalAmount = totalAmount;
        this.orderItems = orderItems;
        this.orderDetail = orderDetail;
        this.status = status;
    }
    return OrderModel;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/payment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModel; });
var PaymentModel = (function () {
    function PaymentModel(paymentType, nameOnCard, cardType, cardNo, cardExpMonth, cardExpDay, cardExpYear, cardCvv) {
        this.paymentType = paymentType;
        this.nameOnCard = nameOnCard;
        this.cardType = cardType;
        this.cardNo = cardNo;
        this.cardExpMonth = cardExpMonth;
        this.cardExpDay = cardExpDay;
        this.cardExpYear = cardExpYear;
        this.cardCvv = cardCvv;
    }
    return PaymentModel;
}());

//# sourceMappingURL=payment.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductModel = (function () {
    function ProductModel(name, description, price, imgUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
    return ProductModel;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/setting.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingModel; });
var SettingModel = (function () {
    function SettingModel(themeBackgroundColor, tax, shippingFee) {
        if (tax === void 0) { tax = 0.12; }
        if (shippingFee === void 0) { shippingFee = 4.50; }
        this.themeBackgroundColor = themeBackgroundColor;
        this.tax = tax;
        this.shippingFee = shippingFee;
    }
    return SettingModel;
}());

//# sourceMappingURL=setting.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/add-product-modal/add-product-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/add-product-modal/add-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form class=\"form-horizontal\" [formGroup]=\"productForm\">\n    <div class=\"form-group\">\n      <label>Name:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" formControlName=\"productName\">\n      \n      <div *ngIf=\"productForm.controls.productName.invalid \n                && (productForm.controls.productName.dirty \n                || productForm.controls.productName.touched)\" class=\"alert alert-danger\">Product Name is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Description:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter description\" formControlName=\"productDescription\">\n    \n      <div *ngIf=\"productForm.controls.productDescription.invalid \n                && (productForm.controls.productDescription.dirty \n                || productForm.controls.productDescription.touched)\" class=\"alert alert-danger\">Product Description is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Price:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter price\" ksCurrentFormatter formControlName=\"productPrice\">\n\n      <div *ngIf=\"productForm.controls.productPrice.invalid \n                && (productForm.controls.productPrice.dirty \n                || productForm.controls.productPrice.touched)\" class=\"alert alert-danger\">Product Price is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Image Url:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter image url\" formControlName=\"productImageUrl\">\n\n      <div *ngIf=\"productForm.controls.productImageUrl.invalid \n                && (productForm.controls.productImageUrl.dirty \n                || productForm.controls.productImageUrl.touched)\" class=\"alert alert-danger\">Product Image Url is required.\n      </div>\n    </div>\n\n    <button type=\"button\" (click)=\"save()\" class=\"btn btn-success\">Submit</button>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/add-product-modal/add-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toasty_service__ = __webpack_require__("../../../../../src/app/services/toasty.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductModalComponent = (function () {
    function AddProductModalComponent(bsModalRef, productService, toastyMessageService) {
        this.bsModalRef = bsModalRef;
        this.productService = productService;
        this.toastyMessageService = toastyMessageService;
        this.productForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            productName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required
            ]),
            productDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required
            ]),
            productPrice: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required
            ]),
            productImageUrl: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required
            ])
        });
    }
    AddProductModalComponent.prototype.ngOnInit = function () {
    };
    AddProductModalComponent.prototype.save = function () {
        if (!this.productForm.valid) {
            this.toastyMessageService.showMessage('', 'Invalid Form', 'error'); //TODO: move to common
            return;
        }
        var newProduct = new __WEBPACK_IMPORTED_MODULE_4__models_product_model__["a" /* ProductModel */](this.productForm.value.productName, this.productForm.value.productDescription, this.productForm.value.productPrice, this.productForm.value.productImageUrl);
        this.productService.saveProduct(newProduct);
        this.toastyMessageService.showMessage('', 'Added New Product', 'success'); //TODO: move to common
    };
    return AddProductModalComponent;
}());
AddProductModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-product-modal.component',
        template: __webpack_require__("../../../../../src/app/pages/add-product-modal/add-product-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/add-product-modal/add-product-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_toasty_service__["a" /* ToastyMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toasty_service__["a" /* ToastyMessageService */]) === "function" && _c || Object])
], AddProductModalComponent);

var _a, _b, _c;
//# sourceMappingURL=add-product-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".admin-tab {\r\n    padding: 0px 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <span>Admin Panel</span>\n    </div>\n    <br />\n    <div class=\"admin-tab\">\n      <nav>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"btn btn-block\"  [ngClass]=\"(toggleNav === 'products') ? 'btn-success' : 'btn-outline-success'\" (click)=\"changeNav('products')\" >Products</button>\n            </div>\n            <div class=\"col-md-6\">\n                <button type=\"button\" class=\"btn btn-block\"  [ngClass]=\"(toggleNav === 'orders') ? 'btn-success' : 'btn-outline-success'\" (click)=\"changeNav('orders')\" >Orders</button>\n            </div>\n          </div>\n      </nav>\n    </div>\n    <div class=\"card-body\">\n      \n        <div id=\"product-tab\" *ngIf=\"toggleNav === 'products'\">\n            <admin-product-component></admin-product-component>\n            <br />\n            <product-detail-component></product-detail-component>\n        </div>\n\n        <div id=\"order-tab\" *ngIf=\"toggleNav === 'orders'\">\n            <order-component></order-component>\n        </div> <!-- end of order tab -->\n        \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.toggleNav = 'products';
    };
    AdminComponent.prototype.changeNav = function (selectedNav) {
        this.toggleNav = selectedNav;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-component',
        template: __webpack_require__("../../../../../src/app/pages/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div class=\"modal-body\">\n      <div class=\"card\">\n        <h5 class=\"card-header\">Order No: {{ selectedOrderNo }}</h5>\n      </div>\n      <br />\n      <div class=\"card\">\n          <h5 class=\"card-header\">Customer Information </h5>\n          <div class=\"card-body\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col\">Name:</div>\n                <div class=\"col\">{{ customer.firstname }} {{ customer.lastname }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Gender:</div>\n                <div class=\"col\">{{ customer.gender }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Email:</div>\n                <div class=\"col\">{{ customer.email }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br />\n        <div class=\"card\">\n          <h5 class=\"card-header\">Shipping Address</h5>\n          <div class=\"card-body\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col\">Address 1:</div>\n                <div class=\"col\">{{ bill.address1 }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Address 2:</div>\n                <div class=\"col\">{{ bill.address2 }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Country:</div>\n                <div class=\"col\">{{ bill.country }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Zipcode:</div>\n                <div class=\"col\">{{ bill.zipcode }}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br />\n        <div class=\"card\">\n          <h5 class=\"card-header\">Payment Information</h5>\n          <div class=\"card-body\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col\">Payment Type:</div>\n                <div class=\"col\">{{ payment.paymentType }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Card Type:</div>\n                <div class=\"col\">{{ payment.cardType }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Name on Card:</div>\n                <div class=\"col\">{{ payment.nameOnCard }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Card No:</div>\n                <div class=\"col\">{{ payment.cardNo }}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">Card Expiration:</div>\n                <div class=\"col\">{{ payment.cardExpMonth + \" \" + payment.cardExpDay + \", \" + payment.cardExpYear  }}</div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col\">Card CVV:</div>\n                  <div class=\"col\">{{ payment.cardCvv }}</div>\n                </div>\n            </div>\n          </div>\n        </div>\n        <br />\n        <div class=\"card\">\n          <h5 class=\"card-header\">Order Details</h5>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <table class=\"table table-striped table-dark\">\n                  <tbody>\n                    <tr *ngFor=\"let orderItem of orderItems\">\n                      <td>{{ orderItem.name }}</td>\n                      <td>Image here</td>\n                      <td>{{ orderItem.price | currency:'USD':'code' }}</td>\n                      <td>{{ orderItem.qty }}</td>\n                    </tr>\n                    <tr>\n                      <td>&nbsp;</td>\n                      <td>&nbsp;</td>\n                      <td>Sub Total:</td>\n                      <td>{{ subTotal | currency:'USD':'code'}}</td>\n                    </tr>\n                    <tr>\n                      <td>&nbsp;</td>\n                      <td>&nbsp;</td>\n                      <td>Tax:</td>\n                      <td>{{ tax | currency:'USD':'code' }}</td>\n                    </tr>\n                    <tr>\n                      <td>&nbsp;</td>\n                      <td>&nbsp;</td>\n                      <td>Shipping Fee:</td>\n                      <td>{{ shippingFee | currency:'USD':'code'}}</td>\n                    </tr>\n                    <tr>\n                      <td>&nbsp;</td>\n                      <td>&nbsp;</td>\n                      <td>Total Amount:</td>\n                      <td>{{ totalAmount | currency:'USD':'code' }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"bsModalRef.hide()\"><< Back</button>\n      </div>\n    </div>\n    \n    \n    \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_order_model__ = __webpack_require__("../../../../../src/app/models/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderDetailModalComponent = (function () {
    function OrderDetailModalComponent(bsModalRef, orderService, cartService, store) {
        this.bsModalRef = bsModalRef;
        this.orderService = orderService;
        this.cartService = cartService;
        this.store = store;
        this.orderDetail = new __WEBPACK_IMPORTED_MODULE_4__models_order_model__["a" /* OrderModel */]();
        this.orderItems = new Array();
    }
    OrderDetailModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select().subscribe(function (res) {
            var selectedOrder = _this.orderService.getOrderByOrderNo(res.selectedOrder.orderNo);
            //validate selectedOrder here...
            _this.selectedOrderNo = selectedOrder.orderNo;
            _this.orderItems = selectedOrder.orderItems;
            _this.subTotal = selectedOrder.subTotal;
            _this.totalAmount = selectedOrder.totalAmount;
            _this.tax = selectedOrder.tax;
            _this.shippingFee = selectedOrder.shippingFee;
            var orderDetail = selectedOrder.orderDetail;
            _this.customer = orderDetail.customerInfo;
            _this.bill = orderDetail.billInfo;
            _this.payment = orderDetail.paymentInfo;
        });
    };
    return OrderDetailModalComponent;
}());
OrderDetailModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'order-detail-modal.component',
        template: __webpack_require__("../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _d || Object])
], OrderDetailModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-detail-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n            <span>Manage Orders</span>\n        </div>\n        <div class=\"col-md-3\">\n            <button type=\"button\" class=\"btn btn-link\"></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n        <table class=\"table table-striped table-dark\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Order No</th>\n                <th scope=\"col\">Order Date</th>\n                <th scope=\"col\">Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders\" (click)=\"openOrderDetailModal(order)\">\n                <td>{{ order.orderNo }}</td>\n                <td>{{ order.orderDate | date: 'dd/MM/yyyy' }}</td>\n                <td>{{ order.status }}</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__ = __webpack_require__("../../../../../src/app/redux/actions/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_detail_modal_order_detail_modal_component__ = __webpack_require__("../../../../../src/app/pages/admin/order-detail-modal/order-detail-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderComponent = (function () {
    function OrderComponent(orderService, store, modalService) {
        this.orderService = orderService;
        this.store = store;
        this.modalService = modalService;
        this.orders = new Array();
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.orders = this.orderService.getOrders();
    };
    // selectedOrder(orderModel: OrderModel) {
    //   this.store.dispatch({ type: SELECTED_ORDER, payload: { selectedOrder: orderModel }});
    // }
    OrderComponent.prototype.openOrderDetailModal = function (orderModel) {
        var initialState = {
            title: 'Order Detail'
        };
        var modalOptions = new __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["c" /* ModalOptions */]();
        modalOptions.ignoreBackdropClick = true;
        modalOptions.initialState = initialState;
        modalOptions.class = 'modal-lg';
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__["g" /* SELECTED_ORDER */], payload: { selectedOrder: orderModel } });
        this.modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__order_detail_modal_order_detail_modal_component__["a" /* OrderDetailModalComponent */], modalOptions);
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'order-component',
        template: __webpack_require__("../../../../../src/app/pages/admin/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["d" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["d" /* BsModalService */]) === "function" && _c || Object])
], OrderComponent);

var _a, _b, _c;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n      <span>Product Detail</span>\n  </div>\n  <div *ngIf=\"!isSelected\">\n    <p>There's no selected product.</p>\n  </div>\n  <div class=\"card-body\" *ngIf=\"isSelected\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{ productDetail.imgUrl }}\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ productDetail.name }}</h5>\n          <p class=\"card-text\">Price: {{ productDetail.price | currency:'USD':'code' }}</p>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/admin/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    function ProductDetailComponent(store) {
        this.store = store;
        this.productDetail = new __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */]();
        this.isSelected = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.watchProductSelected();
    };
    ProductDetailComponent.prototype.watchProductSelected = function () {
        var _this = this;
        this.store.select().subscribe(function (res) {
            Object.assign(_this.productDetail, res.selectedProduct);
            if (typeof (res.selectedProduct) != 'undefined' && typeof (res.selectedProduct.name) !== 'undefined')
                _this.isSelected = true;
        });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-detail-component',
        template: __webpack_require__("../../../../../src/app/pages/admin/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin/product-detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], ProductDetailComponent);

var _a;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/product/admin.product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/product/admin.product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n          <span>Manage Products</span>\n      </div>\n      <div class=\"col-md-3\">\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"openAddProductModal()\">+ Add</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n      <table class=\"table table-striped table-dark\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Product</th>\n              <th scope=\"col\">Price</th>\n              <th scope=\"col\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of productLists\" (click)=\"selectedProduct(product)\">\n              <td>{{ product.name }}</td>\n              <td>{{ product.price | currency:'USD':'code' }}</td>\n              <td>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"this.productService.remove(product.name+product.description)\">Remove</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/admin/product/admin.product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_modal_add_product_modal_component__ = __webpack_require__("../../../../../src/app/pages/add-product-modal/add-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_action__ = __webpack_require__("../../../../../src/app/redux/actions/action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminProductComponent = (function () {
    function AdminProductComponent(modalService, productService, store) {
        this.modalService = modalService;
        this.productService = productService;
        this.store = store;
        this.productLists = new Array();
    }
    AdminProductComponent.prototype.openAddProductModal = function () {
        var initialState = {
            title: 'Create Product'
        };
        this.modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_3__add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */], { initialState: initialState });
        this.modalRef.content.closeBtnName = 'Close';
    };
    AdminProductComponent.prototype.ngOnInit = function () {
        this.loadDefaultProducts();
        this.watchProducts();
    };
    AdminProductComponent.prototype.loadDefaultProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (res) {
            Object.assign(_this.productLists, res);
        });
    };
    AdminProductComponent.prototype.watchProducts = function () {
        var _this = this;
        this.store.select().subscribe(function (res) {
            _this.productLists = new Array();
            Object.assign(_this.productLists, res.products);
        });
    };
    AdminProductComponent.prototype.selectedProduct = function (product) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__redux_actions_action__["h" /* SELECTED_PRODUCT */], payload: { selectedProduct: product } });
    };
    return AdminProductComponent;
}());
AdminProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-product-component',
        template: __webpack_require__("../../../../../src/app/pages/admin/product/admin.product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/admin/product/admin.product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["d" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["d" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], AdminProductComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n      <span>Carts</span>\n  </div>\n  <div class=\"card-body\">\n    <div *ngIf=\"!isCartChange\">\n      <p>Cart is empty.</p>\n    </div>\n   \n    <div *ngIf=\"isCartChange\">\n      <div class=\"row\">\n          <table class=\"table table-striped table-dark\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Product</th>\n                <th scope=\"col\">Price</th>\n                <th scope=\"col\">Quantity</th>\n                <th scope=\"col\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cart of carts\">\n                <td>{{ cart.name }}</td>\n                <td>{{ cart.price | currency:'USD':'code' }}</td>\n                <td>{{ cart.qty }}</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"cartService.remove(cart.name+cart.description)\">Remove</button>\n                </td>\n              </tr>\n              <tr>\n                <td>&nbsp;</td>\n                <td>&nbsp;</td>\n                <td>Sub Total:</td>\n                <td>{{ subTotal | currency:'USD':'code' }}</td>\n            </tbody>\n          </table>\n      </div>\n      <button *ngIf=\"carts.length > 0\" type=\"button\" (click)=\"openCheckoutModal()\" class=\"btn btn-success\">Proceed to checkout</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout_modal_checkout_modal_component__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = (function () {
    function CartComponent(cartService, store, modalService) {
        this.cartService = cartService;
        this.store = store;
        this.modalService = modalService;
        this.carts = new Array();
        this.isCartChange = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.watchCarts();
    };
    CartComponent.prototype.watchCarts = function () {
        var _this = this;
        this.store.select().subscribe(function (res) {
            _this.carts = new Array();
            Object.assign(_this.carts, res.carts);
            _this.subTotal = _this.cartService.getSubTotal();
            _this.isCartChange = true;
        });
    };
    CartComponent.prototype.openCheckoutModal = function () {
        var initialState = {
            title: 'Checkout'
        };
        var modalOptions = new __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["c" /* ModalOptions */]();
        modalOptions.ignoreBackdropClick = true;
        modalOptions.initialState = initialState;
        modalOptions.class = 'modal-lg';
        this.modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout_modal_checkout_modal_component__["a" /* CheckoutModalComponent */], modalOptions);
        this.modalRef.content.closeBtnName = 'Close';
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cart-component',
        template: __webpack_require__("../../../../../src/app/pages/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["d" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["d" /* BsModalService */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/checkout/billing-address/billing-address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/billing-address/billing-address.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"billForm\">\n    <div class=\"form-group\">\n      <label>Address 1:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Address 1\" formControlName=\"address1\">\n      \n      <div *ngIf=\"address1.invalid \n                && (address1.dirty \n                || address1.touched)\" class=\"alert alert-danger\">Address 1 is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Address 2:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Address 2\" formControlName=\"address2\">        \n    </div>\n\n    <div class=\"form-group\">\n      <label>Country:</label>\n      <select class=\"form-control\" formControlName=\"country\">\n        <option>United States</option>\n        <option>Singapore</option>\n        <option>Philippines</option>\n        <option>India</option>\n      </select>\n      \n      <div *ngIf=\"country.invalid \n                && (country.dirty \n                || country.touched)\" class=\"alert alert-danger\">Country is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Zipcode:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Zip Code\" formControlName=\"zipcode\">\n      \n      <div *ngIf=\"zipcode.invalid \n                && (zipcode.dirty \n                || zipcode.touched)\" class=\"alert alert-danger\">Zipcode is required.\n      </div>\n    </div>\n\n    <button type=\"button\" (click)=\"save()\" class=\"btn btn-success\">Save & Next</button>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/billing-address/billing-address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bill_model__ = __webpack_require__("../../../../../src/app/models/bill.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__ = __webpack_require__("../../../../../src/app/services/toasty.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillingAddressComponent = (function () {
    function BillingAddressComponent(orderService, toastyMessageService) {
        this.orderService = orderService;
        this.toastyMessageService = toastyMessageService;
        this.createFormControls();
        this.createForm();
        this.setFormData();
    }
    BillingAddressComponent.prototype.ngOnInit = function () {
    };
    BillingAddressComponent.prototype.createFormControls = function () {
        this.address1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]);
        this.address2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []);
        this.country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]);
        this.zipcode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]);
    };
    BillingAddressComponent.prototype.createForm = function () {
        this.billForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            address1: this.address1,
            address2: this.address2,
            country: this.country,
            zipcode: this.zipcode
        });
    };
    BillingAddressComponent.prototype.setFormData = function () {
        if (this.orderService.isTabNavigatable('bill')) {
            var billInfo = this.orderService.order.orderDetail.billInfo;
            if (typeof (billInfo) !== 'undefined') {
                this.billForm.setValue({
                    address1: billInfo.address1,
                    address2: billInfo.address2,
                    country: billInfo.country,
                    zipcode: billInfo.zipcode
                });
            }
        }
    };
    BillingAddressComponent.prototype.save = function () {
        if (!this.billForm.valid) {
            this.toastyMessageService.showMessage('', "Form is not valid!", 'error'); //TODO: move type to common
            return;
        }
        var billInfo = new __WEBPACK_IMPORTED_MODULE_2__models_bill_model__["a" /* BillModel */](this.billForm.value.address1, this.billForm.value.address2, this.billForm.value.country, this.billForm.value.zipcode);
        this.orderService.saveBillInfo(billInfo);
        this.orderService.addNavigatableTab('bill');
        this.orderService.setActiveTab('payment'); //TODO: move to common
    };
    return BillingAddressComponent;
}());
BillingAddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'billing-address-component',
        template: __webpack_require__("../../../../../src/app/pages/checkout/billing-address/billing-address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/checkout/billing-address/billing-address.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__["a" /* ToastyMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__["a" /* ToastyMessageService */]) === "function" && _b || Object])
], BillingAddressComponent);

var _a, _b;
//# sourceMappingURL=billing-address.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header {\r\n    display: flow-root;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"modal-header\">\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n              <button type=\"button\" class=\"btn btn-block\" (click)=\"setActiveTab('customer')\"  [ngClass]=\"(orderService.activeTab === 'customer') ? 'btn-success' : 'btn-outline-success'\">Customer Info</button>\n          </div>\n          <div class=\"col-md-3\">\n              <button type=\"button\" class=\"btn btn-block\" (click)=\"setActiveTab('bill')\"  [ngClass]=\"(orderService.activeTab === 'bill') ? 'btn-success' : 'btn-outline-success'\">Billing Address</button>\n          </div>\n          <div class=\"col-md-3\">\n              <button type=\"button\" class=\"btn btn-block\" (click)=\"setActiveTab('payment')\"  [ngClass]=\"(orderService.activeTab === 'payment') ? 'btn-success' : 'btn-outline-success'\">Payment Info</button>\n          </div>\n          <div class=\"col-md-3\">\n              <button type=\"button\" class=\"btn btn-block\" (click)=\"setActiveTab('review')\"  [ngClass]=\"(orderService.activeTab === 'review') ? 'btn-success' : 'btn-outline-success'\">Review</button>\n          </div>\n        </div>\n  </div>\n  <div class=\"modal-body\">\n    <customer-info-component *ngIf=\"orderService.activeTab === 'customer'\"></customer-info-component>\n    <billing-address-component *ngIf=\"orderService.activeTab === 'bill'\"></billing-address-component>\n    <payment-info-component *ngIf=\"orderService.activeTab === 'payment'\"></payment-info-component>\n    <review-component *ngIf=\"orderService.activeTab === 'review'\"></review-component>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"bsModalRef.hide()\"><< Back</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutModalComponent = (function () {
    function CheckoutModalComponent(bsModalRef, orderService) {
        this.bsModalRef = bsModalRef;
        this.orderService = orderService;
        this.orderService.createNewInstance();
        this.orderService.setFees();
        this.orderService.setOrderItems();
    }
    CheckoutModalComponent.prototype.ngOnInit = function () {
        this.orderService.setActiveTab('customer'); //TODO: move customer to common
    };
    CheckoutModalComponent.prototype.setActiveTab = function (tabName) {
        if (this.orderService.isTabNavigatable(tabName)) {
            this.orderService.setActiveTab(tabName);
        }
    };
    return CheckoutModalComponent;
}());
CheckoutModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'checkout-modal-component',
        template: __webpack_require__("../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/checkout/checkout-modal/checkout-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _b || Object])
], CheckoutModalComponent);

var _a, _b;
//# sourceMappingURL=checkout-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/checkout/customer-info/customer-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/customer-info/customer-info.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"customerInfoForm\">\n    <div class=\"form-group\">\n      <label>First Name:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\" formControlName=\"firstname\">\n      \n      <div *ngIf=\"firstname.invalid \n                && (firstname.dirty \n                || firstname.touched)\" class=\"alert alert-danger\">First Name is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Last Name:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\" formControlName=\"lastname\">\n      \n      <div *ngIf=\"lastname.invalid \n                && (lastname.dirty \n                || lastname.touched)\" class=\"alert alert-danger\">Last Name is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Gender:</label>\n      <select class=\"form-control\" formControlName=\"gender\">\n          <option>Male</option>\n          <option>Female</option>\n      </select>\n      \n      <div *ngIf=\"gender.invalid \n                && (gender.dirty \n                || gender.touched)\" class=\"alert alert-danger\">Gender is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Email:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\" formControlName=\"email\">\n      \n      <div *ngIf=\"email.errors \n                && (email.dirty \n                || email.touched)\">\n        <div *ngIf=\"email.errors.required\" class=\"alert alert-danger\">Email is required.</div>        \n        <div *ngIf=\"email.errors.pattern\" class=\"alert alert-danger\">Invalid Email.</div>\n      </div>\n    </div>\n\n    <button type=\"button\" (click)=\"save()\" class=\"btn btn-success\">Save & Next</button>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/customer-info/customer-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_model__ = __webpack_require__("../../../../../src/app/models/customer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__ = __webpack_require__("../../../../../src/app/services/toasty.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerInfoComponent = (function () {
    function CustomerInfoComponent(orderService, toastyMessageService) {
        this.orderService = orderService;
        this.toastyMessageService = toastyMessageService;
        this.createFormControls();
        this.createForm();
        this.setFormData();
    }
    CustomerInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerInfoComponent.prototype.createFormControls = function () {
        this.firstname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]);
        this.lastname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]);
        this.gender = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[^ @]*@[^ @]*")
        ]);
    };
    CustomerInfoComponent.prototype.createForm = function () {
        this.customerInfoForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            firstname: this.firstname,
            lastname: this.lastname,
            gender: this.gender,
            email: this.email
        });
    };
    CustomerInfoComponent.prototype.setFormData = function () {
        if (this.orderService.isTabNavigatable('customer')) {
            var customerInfo = this.orderService.order.orderDetail.customerInfo;
            if (typeof (customerInfo) !== 'undefined') {
                this.customerInfoForm.setValue({
                    firstname: customerInfo.firstname,
                    lastname: customerInfo.lastname,
                    gender: customerInfo.gender,
                    email: customerInfo.email
                });
            }
        }
    };
    CustomerInfoComponent.prototype.save = function () {
        if (!this.customerInfoForm.valid) {
            this.toastyMessageService.showMessage('', "Form is not valid!", 'error'); //TODO: move type to common
            return;
        }
        var customerInfo = new __WEBPACK_IMPORTED_MODULE_2__models_customer_model__["a" /* CustomerModel */](this.customerInfoForm.value.firstname, this.customerInfoForm.value.lastname, this.customerInfoForm.value.gender, this.customerInfoForm.value.email);
        this.orderService.saveCustomerInfo(customerInfo);
        this.orderService.addNavigatableTab('customer');
        this.orderService.setActiveTab('bill'); //TODO: move to common
    };
    return CustomerInfoComponent;
}());
CustomerInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-info-component',
        template: __webpack_require__("../../../../../src/app/pages/checkout/customer-info/customer-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/checkout/customer-info/customer-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__["a" /* ToastyMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__["a" /* ToastyMessageService */]) === "function" && _b || Object])
], CustomerInfoComponent);

var _a, _b;
//# sourceMappingURL=customer-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/checkout/payment-info/payment-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/payment-info/payment-info.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"paymentForm\">\n    <div class=\"form-group\">\n      <label>Payment Type:</label>\n      \n      <select class=\"form-control\" formControlName=\"paymentType\">\n        <option>Cash</option>\n        <option>Credit Card</option>\n      </select>\n      \n      <div *ngIf=\"paymentType.invalid \n                && (paymentType.dirty \n                || paymentType.touched)\" class=\"alert alert-danger\">Payment Type is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Card Type:</label>\n      <select class=\"form-control\" formControlName=\"cardType\">\n        <option>Visa</option>\n        <option>Master Card</option>\n      </select>\n      \n      <div *ngIf=\"cardType.invalid \n                && (cardType.dirty \n                || cardType.touched)\" class=\"alert alert-danger\">Card Type is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Name on Card:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name on Card\" formControlName=\"nameOnCard\">        \n    \n      <div *ngIf=\"nameOnCard.invalid \n            && (nameOnCard.dirty \n            || nameOnCard.touched)\" class=\"alert alert-danger\">Name on Card is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Card No:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Card No\" formControlName=\"cardNo\">        \n    \n      <div *ngIf=\"cardNo.invalid \n            && (cardNo.dirty \n            || cardNo.touched)\" class=\"alert alert-danger\">Card No is required.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Card Expiration:</label>\n      \n      <div class=\"input-group\">\n        <select class=\"form-control\" formControlName=\"cardExpMonth\">\n          <option>January</option>\n          <option>February</option>\n        </select>\n        <div *ngIf=\"cardExpMonth.invalid \n                  && (cardExpMonth.dirty \n                  || cardExpMonth.touched)\" class=\"alert alert-danger\">Card Expiration Month is required.\n        </div>\n        <select class=\"form-control\" formControlName=\"cardExpDay\">\n          <option>01</option>\n          <option>02</option>\n        </select>\n        <div *ngIf=\"cardExpDay.invalid \n                  && (cardExpDay.dirty \n                  || cardExpDay.touched)\" class=\"alert alert-danger\">Card Expiration Day is required.\n        </div>\n        <select class=\"form-control\" formControlName=\"cardExpYear\">\n          <option>2018</option>\n          <option>2019</option>\n        </select>\n        <div *ngIf=\"cardExpYear.invalid \n                  && (cardExpYear.dirty \n                  || cardExpYear.touched)\" class=\"alert alert-danger\">Card Expiration Year is required.\n        </div>\n      </div>\n      \n    </div>\n\n    <div class=\"form-group\">\n      <label>Card CVV:</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Card CVV\" formControlName=\"cardCvv\">        \n    \n      <div *ngIf=\"cardCvv.invalid \n            && (cardCvv.dirty \n            || cardCvv.touched)\" class=\"alert alert-danger\">Card CVV is required.\n      </div>\n    </div>\n\n    <button type=\"button\" (click)=\"save()\" class=\"btn btn-success\">Save & Next</button>\n  </form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/payment-info/payment-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_payment_model__ = __webpack_require__("../../../../../src/app/models/payment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__ = __webpack_require__("../../../../../src/app/services/toasty.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentInfoComponent = (function () {
    function PaymentInfoComponent(orderService, toastyMessageService) {
        this.orderService = orderService;
        this.toastyMessageService = toastyMessageService;
        this.createFormControls();
        this.createForm();
        this.setFormData();
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
    };
    PaymentInfoComponent.prototype.createFormControls = function () {
        this.paymentType = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
        ]),
            this.cardType = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]),
            this.nameOnCard = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]),
            this.cardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]),
            this.cardExpMonth = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]),
            this.cardExpDay = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]),
            this.cardExpYear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]),
            this.cardCvv = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]);
    };
    PaymentInfoComponent.prototype.createForm = function () {
        this.paymentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            paymentType: this.paymentType,
            cardType: this.cardType,
            nameOnCard: this.nameOnCard,
            cardNo: this.cardNo,
            cardExpMonth: this.cardExpMonth,
            cardExpDay: this.cardExpDay,
            cardExpYear: this.cardExpYear,
            cardCvv: this.cardCvv
        });
    };
    PaymentInfoComponent.prototype.setFormData = function () {
        if (this.orderService.isTabNavigatable('payment')) {
            var paymentInfo = this.orderService.order.orderDetail.paymentInfo;
            if (typeof (paymentInfo) !== 'undefined') {
                this.paymentForm.setValue({
                    paymentType: paymentInfo.paymentType,
                    cardType: paymentInfo.cardType,
                    nameOnCard: paymentInfo.nameOnCard,
                    cardNo: paymentInfo.cardNo,
                    cardExpMonth: paymentInfo.cardExpMonth,
                    cardExpDay: paymentInfo.cardExpDay,
                    cardExpYear: paymentInfo.cardExpYear,
                    cardCvv: paymentInfo.cardCvv
                });
            }
        }
    };
    PaymentInfoComponent.prototype.save = function () {
        if (!this.paymentForm.valid) {
            this.toastyMessageService.showMessage('', "Form is not valid!", 'error'); //TODO: move type to common
            return;
        }
        var paymentInfo = new __WEBPACK_IMPORTED_MODULE_2__models_payment_model__["a" /* PaymentModel */](this.paymentForm.value.paymentType, this.paymentForm.value.nameOnCard, this.paymentForm.value.cardType, this.paymentForm.value.cardNo, this.paymentForm.value.cardExpMonth, this.paymentForm.value.cardExpDay, this.paymentForm.value.cardExpYear, this.paymentForm.value.cardCvv);
        this.orderService.savePaymentInfo(paymentInfo);
        this.orderService.addNavigatableTab('payment');
        this.orderService.setActiveTab('review'); //TODO: move to common
    };
    return PaymentInfoComponent;
}());
PaymentInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'payment-info-component',
        template: __webpack_require__("../../../../../src/app/pages/checkout/payment-info/payment-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/checkout/payment-info/payment-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__["a" /* ToastyMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toasty_service__["a" /* ToastyMessageService */]) === "function" && _b || Object])
], PaymentInfoComponent);

var _a, _b;
//# sourceMappingURL=payment-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/checkout/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h5 class=\"card-header\">Customer Information</h5>\n  <div class=\"card-body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">Name:</div>\n          <div class=\"col\">{{ customer.firstname }} {{ customer.lastname }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Gender:</div>\n          <div class=\"col\">{{ customer.gender }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Email:</div>\n          <div class=\"col\">{{ customer.email }}</div>\n        </div>\n      </div>\n  </div>\n</div>\n<br />\n<div class=\"card\">\n  <h5 class=\"card-header\">Shipping Address</h5>\n  <div class=\"card-body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">Address 1:</div>\n          <div class=\"col\">{{ bill.address1 }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Address 2:</div>\n          <div class=\"col\">{{ bill.address2 }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Country:</div>\n          <div class=\"col\">{{ bill.country }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Zipcode:</div>\n          <div class=\"col\">{{ bill.zipcode }}</div>\n        </div>\n      </div>\n  </div>\n</div>\n<br />\n<div class=\"card\">\n  <h5 class=\"card-header\">Payment Information</h5>\n  <div class=\"card-body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">Payment Type:</div>\n          <div class=\"col\">{{ payment.paymentType }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Card Type:</div>\n          <div class=\"col\">{{ payment.cardType }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Name on Card:</div>\n          <div class=\"col\">{{ payment.nameOnCard }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Card No:</div>\n          <div class=\"col\">{{ payment.cardNo }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">Card Expiration:</div>\n          <div class=\"col\">{{ payment.cardExpMonth + \" \" + payment.cardExpDay + \", \" + payment.cardExpYear  }}</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">Card CVV:</div>\n            <div class=\"col\">{{ payment.cardCvv }}</div>\n          </div>\n      </div>\n  </div>\n</div>\n<br />\n<div class=\"card\">\n  <h5 class=\"card-header\">Order Details</h5>\n  <div class=\"card-body\">\n      <div class=\"row\">\n          <table class=\"table table-striped table-dark\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Product</th>\n              <th scope=\"col\">Image</th>\n              <th scope=\"col\">Price</th>\n              <th scope=\"col\">Quantity</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let orderItem of orderItems\">\n              <td>{{ orderItem.name }}</td>\n              <td>Image here</td>\n              <td>{{ orderItem.price | currency:'USD':'code' }}</td>\n              <td>{{ orderItem.qty }}</td>\n            </tr>\n            <tr>\n              <td colspan=\"4\">&nbsp;</td>\n            </tr>\n            <tr>\n              <td>&nbsp;</td>\n              <td>&nbsp;</td>\n              <td>Sub Total:</td>\n              <td>{{ subTotal | currency:'USD':'code' }}</td>\n            </tr>\n            <tr>\n              <td>&nbsp;</td>\n              <td>&nbsp;</td>\n              <td>Tax:</td>\n              <td>{{ tax | currency:'USD':'code' }}</td>\n            </tr>\n            <tr>\n              <td>&nbsp;</td>\n              <td>&nbsp;</td>\n              <td>Shipping Fee:</td>\n              <td>{{ shippingFee | currency:'USD':'code' }}</td>\n            </tr>\n            <tr>\n              <td>&nbsp;</td>\n              <td>&nbsp;</td>\n              <td>Total Amount:</td>\n              <td>{{ totalAmount | currency:'USD':'code' }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n  </div>\n  <br />\n  <button type=\"button\" (click)=\"saveOrder()\" class=\"btn btn-success\">Place Order</button>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toasty_service__ = __webpack_require__("../../../../../src/app/services/toasty.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewComponent = (function () {
    function ReviewComponent(orderService, cartService, store, bsModalRef, toastyMessageService) {
        this.orderService = orderService;
        this.cartService = cartService;
        this.store = store;
        this.bsModalRef = bsModalRef;
        this.toastyMessageService = toastyMessageService;
        this.orderItems = new Array();
        this.orderItems = this.orderService.order.orderItems;
        this.subTotal = this.orderService.order.subTotal;
        this.totalAmount = this.orderService.order.totalAmount;
        this.tax = this.orderService.order.tax;
        this.shippingFee = this.orderService.order.shippingFee;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var orderDetail = this.orderService.order.orderDetail;
        this.customer = orderDetail.customerInfo;
        this.bill = orderDetail.billInfo;
        this.payment = orderDetail.paymentInfo;
    };
    ReviewComponent.prototype.saveOrder = function () {
        this.orderService.save();
        this.cartService.clearCarts();
        this.bsModalRef.hide();
        this.toastyMessageService.showMessage('', "We are now processing your order.", 'success'); //TODO: move type to common
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'review-component',
        template: __webpack_require__("../../../../../src/app/pages/checkout/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/checkout/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_toasty_service__["a" /* ToastyMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_toasty_service__["a" /* ToastyMessageService */]) === "function" && _e || Object])
], ReviewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n      \n      <div class=\"row\">\n        <div class=\"col-md-6\">\n            <span>Products</span>\n        </div>\n        <div class=\"col-md-6\">\n            <input placeholder=\"Search...\" class=\"form-control\" [formControl]=\"search\">\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"text-center\">\n        <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n      </div>\n      <div class=\"text-center\" *ngIf=\"productLists.length==0\">\n          <p>No record found! Are you kidding me? =)</p>\n      </div>\n      <ul>\n        <li *ngFor=\"let product of productLists\">\n          <div class=\"card\">\n              <img class=\"card-img-top\" src=\"{{ product.imgUrl }}\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{ product.name }}</h5>\n                <p class=\"card-text\">Price: {{ product.price | currency:'USD':'code' }}</p>\n              </div>\n              <div class=\"card-body\">\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"cartService.add(product, 1)\">Add to Cart</button>\n              </div>\n            </div>\n        </li>\n      </ul>\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductComponent = (function () {
    function ProductComponent(productService, cartService, store) {
        this.productService = productService;
        this.cartService = cartService;
        this.store = store;
        this.search = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.productLists = new Array();
        this.searchResults = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDefaultProducts();
        this.watchProducts();
        this.searchResults = this.search.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(function (_) { return _this.loading = true; })
            .switchMap(function (term) { return _this.productService.searchProducts(term); })
            .do(function (_) { return _this.loading = false; });
        this.searchResults.subscribe(function (res) {
            _this.productLists = new Array();
            Object.assign(_this.productLists, res);
        });
    };
    ProductComponent.prototype.loadDefaultProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (res) {
            Object.assign(_this.productLists, res);
        });
    };
    ProductComponent.prototype.watchProducts = function () {
        var _this = this;
        this.store.select().subscribe(function (res) {
            _this.productLists = new Array();
            Object.assign(_this.productLists, res.products);
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-component',
        template: __webpack_require__("../../../../../src/app/pages/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <span>Settings</span>\n  </div>\n  <div class=\"card-body\">\n    <form class=\"form-horizontal\" [formGroup]=\"settingFormGroup\">\n      <div class=\"form-group\">\n        <label>Background Color:</label>\n        <select (change)=\"saveSettings()\" class=\"form-control\" formControlName=\"themeBackgroundColor\">\n          <option value=\"White\">Default</option>\n          <option>Red</option>\n          <option>Blue</option>\n          <option>Green</option>\n        </select>\n\n        <div *ngIf=\"settingFormGroup.controls.themeBackgroundColor.invalid \n                && (settingFormGroup.controls.themeBackgroundColor.dirty \n                || settingFormGroup.controls.themeBackgroundColor.touched)\" class=\"alert alert-danger\">Theme color is required.\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = (function () {
    function SettingComponent(settingService) {
        this.settingService = settingService;
        this.settingFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            themeBackgroundColor: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])
        });
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.saveSettings = function () {
        if (!this.settingFormGroup.valid) {
            alert('form is not valid');
            return;
        }
        if (this.settingFormGroup.valid) {
            this.settingService.changeThemeBackgroundColor(this.settingFormGroup.value.themeBackgroundColor);
        }
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'setting-component',
        template: __webpack_require__("../../../../../src/app/pages/setting/setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_setting_service__["a" /* SettingService */]) === "function" && _a || Object])
], SettingComponent);

var _a;
//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/redux/actions/action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SELECTED_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SAVE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SELECTED_ORDER; });
var ADD_TO_CART = 'ADD_TO_CART';
var REMOVE_FROM_CART = 'REMOVE_FROM_CART';
var UPDATE_CART = 'UPDATE_CART';
var ADD_PRODUCT = 'ADD_PRODUCT';
var REMOVE_PRODUCT = 'REMOVE_PRODUCT';
var CHANGE_SETTING = 'CHANGE_SETTING';
var SELECTED_PRODUCT = 'SELECTED_PRODUCT';
var SAVE_ORDER = 'SAVE_ORDER';
var SELECTED_ORDER = 'SELECTED_ORDER';
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "../../../../../src/app/redux/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_action__ = __webpack_require__("../../../../../src/app/redux/actions/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_setting_model__ = __webpack_require__("../../../../../src/app/models/setting.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_order_model__ = __webpack_require__("../../../../../src/app/models/order.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var INITIAL_STATE = {
    carts: new Array(),
    products: new Array(),
    setting: new __WEBPACK_IMPORTED_MODULE_2__models_setting_model__["a" /* SettingModel */](),
    selectedProduct: new __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */](),
    orders: new Array(),
    selectedOrder: new __WEBPACK_IMPORTED_MODULE_3__models_order_model__["a" /* OrderModel */]()
};
function rootReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["c" /* ADD_TO_CART */]:
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["b" /* UPDATE_CART */]:
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["d" /* REMOVE_FROM_CART */]:
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["e" /* ADD_PRODUCT */]:
            return __assign({}, state, { products: __assign({}, action.payload.products) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["f" /* REMOVE_PRODUCT */]:
            return __assign({}, state, { products: __assign({}, action.payload.products) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["a" /* CHANGE_SETTING */]:
            return __assign({}, state, { setting: __assign({}, action.payload.setting) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["h" /* SELECTED_PRODUCT */]:
            return __assign({}, state, { selectedProduct: __assign({}, action.payload.selectedProduct) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["i" /* SAVE_ORDER */]:
            return __assign({}, state, { orders: __assign({}, action.payload.orders) });
        case __WEBPACK_IMPORTED_MODULE_0__actions_action__["g" /* SELECTED_ORDER */]:
            return __assign({}, state, { selectedOrder: __assign({}, action.payload.selectedOrder) });
    }
    return state;
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart_model__ = __webpack_require__("../../../../../src/app/models/cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__ = __webpack_require__("../../../../../src/app/redux/actions/action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(store) {
        this.store = store;
        this.carts = new Array();
        this.cartChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CartService.prototype.add = function (product, qty) {
        var cartIndex = this.getCartIndex(product);
        if (cartIndex >= 0) {
            this.incrementCartQty(cartIndex);
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__["b" /* UPDATE_CART */], payload: { carts: this.carts } }); //TODO: move to action. create a function addToCart in action and trigger dispatch
            return;
        }
        var cartModel = new __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* CartModel */](product, qty);
        this.carts.push(cartModel);
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__["c" /* ADD_TO_CART */], payload: { carts: this.carts } });
    };
    CartService.prototype.getCartIndex = function (product) {
        var cartIndex = this.carts.findIndex(function (cart) {
            return cart.name + cart.description === product.name + product.description; //FYI: temporary identification
        });
        return cartIndex;
    };
    CartService.prototype.incrementCartQty = function (cartIndex) {
        this.carts[cartIndex].qty += 1;
    };
    CartService.prototype.remove = function (key) {
        this.carts = this.carts.filter(function (res) {
            var tempKey = res.name + res.description; //TODO: temporary: change when using ID
            return (tempKey !== key);
        });
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__["d" /* REMOVE_FROM_CART */], payload: { carts: this.carts } });
    };
    CartService.prototype.getSubTotal = function () {
        var subTotal = 0;
        this.carts.forEach(function (cart) {
            subTotal += cart.price * cart.qty;
        });
        return subTotal;
    };
    CartService.prototype.clearCarts = function () {
        this.carts = new Array();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__["d" /* REMOVE_FROM_CART */], payload: { carts: this.carts } });
    };
    return CartService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CartService.prototype, "cartChanged", void 0);
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_order_model__ = __webpack_require__("../../../../../src/app/models/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_service__ = __webpack_require__("../../../../../src/app/services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_order_detail__ = __webpack_require__("../../../../../src/app/models/order.detail.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderService = (function () {
    function OrderService(store, cartService, settingService, utilityService) {
        this.store = store;
        this.cartService = cartService;
        this.settingService = settingService;
        this.utilityService = utilityService;
        this.orders = new Array();
        this.activeTab = 'customer'; //TODO: move to common
        this.navigatableTabs = new Array();
    }
    OrderService.prototype.createNewInstance = function () {
        this.order = new __WEBPACK_IMPORTED_MODULE_2__models_order_model__["a" /* OrderModel */]();
        this.order.orderDetail = new __WEBPACK_IMPORTED_MODULE_6__models_order_detail__["a" /* OrderDetailModel */]();
    };
    OrderService.prototype.setFees = function () {
        this.order.tax = this.settingService.getTax();
        this.order.shippingFee = this.settingService.getShippingFee();
        this.order.subTotal = this.cartService.getSubTotal();
        this.order.totalAmount = this.order.subTotal + this.order.shippingFee + this.order.tax;
    };
    OrderService.prototype.setOrderItems = function () {
        this.order.orderItems = this.cartService.carts;
    };
    OrderService.prototype.saveCustomerInfo = function (customerInfo) {
        this.order.orderDetail.customerInfo = customerInfo;
    };
    OrderService.prototype.saveBillInfo = function (billInfo) {
        this.order.orderDetail.billInfo = billInfo;
    };
    OrderService.prototype.savePaymentInfo = function (paymentInfo) {
        this.order.orderDetail.paymentInfo = paymentInfo;
    };
    OrderService.prototype.save = function () {
        this.order.orderNo = this.utilityService.generateOrderNo();
        this.order.orderDate = this.utilityService.getCurrentDate();
        this.order.status = 'Pending'; //TODO: Move to common
        this.orders.push(this.order);
        this.store.dispatch({ type: 'SAVE_ORDER', payload: { orders: this.orders } });
        this.clearNavigatableTabs();
    };
    OrderService.prototype.getOrders = function () {
        return this.orders;
    };
    OrderService.prototype.getOrderByOrderNo = function (orderNo) {
        return this.orders.find(function (order) {
            return order.orderNo === orderNo;
        });
    };
    OrderService.prototype.setActiveTab = function (tabName) {
        this.activeTab = tabName;
    };
    OrderService.prototype.addNavigatableTab = function (tabName) {
        var isExist = (this.navigatableTabs.indexOf(tabName) == -1) ? false : true;
        if (!isExist) {
            this.navigatableTabs.push(tabName);
        }
    };
    OrderService.prototype.isTabNavigatable = function (tabName) {
        var navigatableIndex = this.navigatableTabs.findIndex(function (navigatableTab) {
            return tabName === navigatableTab;
        });
        return (navigatableIndex < 0) ? false : true;
    };
    OrderService.prototype.clearNavigatableTabs = function () {
        this.navigatableTabs = new Array();
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__setting_service__["a" /* SettingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utility_service__["a" /* UtilityService */]) === "function" && _d || Object])
], OrderService);

var _a, _b, _c, _d;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_action__ = __webpack_require__("../../../../../src/app/redux/actions/action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = (function () {
    function ProductService(store) {
        this.store = store;
        this.products = new Array();
        this.productSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addDefaultProducts();
    }
    ProductService.prototype.addDefaultProducts = function () {
        this.products = [
            new __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */]("Product1", "Product Description1", 20, "https://images.apple.com/v/macbook-pro/n/images/overview/compare13_small.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */]("Product2", "Product Description2", 40, "https://images.apple.com/v/macbook-pro/n/images/overview/compare13_touchbar_small.jpg")
        ];
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__redux_actions_action__["e" /* ADD_PRODUCT */], payload: { products: this.products } });
    };
    ProductService.prototype.saveProduct = function (product) {
        this.products.push(product);
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__redux_actions_action__["e" /* ADD_PRODUCT */], payload: { products: this.products } });
    };
    ProductService.prototype.getProducts = function () {
        var response;
        response = this.createResponse(this.products, 200);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(response.body);
    };
    ProductService.prototype.searchProducts = function (term) {
        var response;
        var searchResults = this.products.map(function (res) {
            if (res.name.toLowerCase().includes(term.toLowerCase())) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */](res.name, res.description, res.price, res.imgUrl);
            }
        }).filter(function (res) {
            return (typeof (res) !== 'undefined');
        });
        response = this.createResponse(searchResults, 200);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(response.body);
    };
    ProductService.prototype.remove = function (key) {
        this.products = this.products.filter(function (res) {
            var tempKey = res.name + res.description; //TODO: temporary: change when using ID
            return (tempKey !== key);
        });
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__redux_actions_action__["f" /* REMOVE_PRODUCT */], payload: { products: this.products } });
    };
    ProductService.prototype.createResponse = function (body, status) {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpResponse */]({ body: body, status: status });
    };
    return ProductService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProductService.prototype, "productSelected", void 0);
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_setting_model__ = __webpack_require__("../../../../../src/app/models/setting.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__ = __webpack_require__("../../../../../src/app/redux/actions/action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingService = (function () {
    function SettingService(store) {
        this.store = store;
        this.setting = new __WEBPACK_IMPORTED_MODULE_1__models_setting_model__["a" /* SettingModel */]();
    }
    SettingService.prototype.changeThemeBackgroundColor = function (color) {
        this.setting.themeBackgroundColor = color;
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__redux_actions_action__["a" /* CHANGE_SETTING */], payload: { setting: this.setting } });
    };
    SettingService.prototype.getTax = function () {
        return this.setting.tax;
    };
    SettingService.prototype.getShippingFee = function () {
        return this.setting.shippingFee;
    };
    return SettingService;
}());
SettingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], SettingService);

var _a;
//# sourceMappingURL=setting.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toasty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastyMessageService = (function () {
    function ToastyMessageService(toastyService) {
        this.toastyService = toastyService;
    }
    ToastyMessageService.prototype.showMessage = function (title, msg, type) {
        var toastOptions = {
            title: title,
            msg: msg,
            showClose: true,
            timeout: 3000,
            theme: "bootstrap"
        };
        switch (type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    return ToastyMessageService;
}());
ToastyMessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object])
], ToastyMessageService);

var _a;
//# sourceMappingURL=toasty.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = (function () {
    function UtilityService() {
    }
    UtilityService.prototype.generateOrderNo = function () {
        var now = Date.now().toString(); // '1492341545873'
        // pad with extra random digit
        now += now + Math.floor(Math.random() * 10);
        // format
        return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
    };
    UtilityService.prototype.getCurrentDate = function () {
        return new Date().toString();
    };
    return UtilityService;
}());
UtilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UtilityService);

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map