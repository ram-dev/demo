webpackJsonp([1],{

/***/ "../../../../../src/app/home/deals/dealdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data_deals__ = __webpack_require__("../../../../../src/app/home/deals/mock-data-deals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__mock_data_deals__["a" /* DATA */]);
    };
    DataService.prototype.getRemoteData = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=dealdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/deals-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n    <div class=\"col-md-3 slider\">\r\n        <div class=\"filters-wrapper\">\r\n            <filters #filtersComponent [categories]='originalData.categories' [customFilters]='customFilters' [discountFilters]='discountFilters' (onFilterChange)='onFilterChange($event)'></filters>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-9 slider\">\r\n        <ngb-carousel>\r\n            <ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n                <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\r\n                <div class=\"carousel-caption\">\r\n                    <h3>{{slider.label}}</h3>\r\n                    <p>{{slider.text}}</p>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-carousel>\r\n        <div class=\"deal-list\">\r\n            <div class=\"main-container\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <showcase [products]='products'></showcase>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/deals/deals-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-default) .main-container {\n    padding-top: 2rem; }\n  :host-context(.nb-theme-default) .filters-wrapper {\n    position: relative;\n    z-index: 100; }\n  :host-context(.nb-theme-default) sort-filters {\n    position: relative;\n    z-index: 20; }\n  :host-context(.nb-theme-default) cart {\n    position: absolute;\n    top: -23px;\n    right: -57px;\n    z-index: 99999999; }\n  :host-context(.nb-theme-default) search-bar {\n    position: relative;\n    top: -8px; }\n  :host-context(.nb-theme-default) showcase {\n    position: relative;\n    top: -39px;\n    z-index: 10; }\n  :host-context(.nb-theme-default) .sort-filters-wrapper {\n    position: relative; }\n  :host-context(.nb-theme-default) url-form {\n    position: absolute;\n    top: -55px; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-default) url-form {\n      position: fixed;\n      bottom: 20px;\n      left: 10px; }\n    :host-context(.nb-theme-default) filters {\n      position: fixed;\n      top: 71px;\n      right: -100%;\n      width: 100%;\n      height: 100%; }\n    :host-context(.nb-theme-default) .sort-filters-wrapper {\n      position: fixed;\n      top: 44px;\n      left: 0;\n      width: 100%;\n      box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);\n      padding-top: 10px;\n      background: #5cb85c;\n      z-index: 200; }\n    :host-context(.nb-theme-default) .main-container {\n      padding-top: 34px; }\n    :host-context(.nb-theme-default) search-bar {\n      position: fixed;\n      top: 0;\n      width: 100%;\n      left: 0;\n      z-index: 9000; } }\n  :host-context(.nb-theme-default) .solar-card nb-card-header {\n    border: none;\n    padding-bottom: 0; }\n  :host-context(.nb-theme-default) .home-container {\n    padding: 2rem; }\n  :host-context(.nb-theme-default) .section-header {\n    color: #25b15c;\n    text-align: center;\n    padding: 1rem 0;\n    border-top: 1px solid #636c72;\n    border-bottom: 1px solid #a4abb3;\n    margin: 1% 0; }\n  :host-context(.nb-theme-default) .slider {\n    margin-top: 8.3rem; }\n    :host-context(.nb-theme-default) .slider .img-fluid {\n      max-height: 18rem; }\n  :host-context(.nb-theme-default) .cat-why-section {\n    background: url(/assets/images/category/footer2.jpg) no-repeat;\n    background-position: center;\n    background-size: cover; }\n  :host-context(.nb-theme-default) .home-category-section {\n    width: 100%;\n    padding: 0; }\n    :host-context(.nb-theme-default) .home-category-section li {\n      list-style: none; }\n      :host-context(.nb-theme-default) .home-category-section li .categoryWrapper {\n        width: calc(94% /3);\n        height: 17rem;\n        margin: 1%;\n        display: inline-block;\n        float: left;\n        position: relative; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-food {\n          background: url(/assets/images/category/food.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-wellness {\n          background: url(/assets/images/category/wellness.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-spa {\n          background: url(/assets/images/category/spa.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-entertainment {\n          background: url(/assets/images/category/entertainment.png) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-travels {\n          background: url(/assets/images/category/travel.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-shopping {\n          background: url(/assets/images/category/shopping.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-section {\n        width: 100%;\n        height: 100%;\n        display: block;\n        position: relative;\n        background: rgba(93, 18, 18, 0.71); }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-section {\n        background: transparent; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-icon {\n        font-size: .8em;\n        bottom: 56%;\n        background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n        box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-title {\n        bottom: 34%; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-sub {\n        position: absolute;\n        top: 69%;\n        text-align: center;\n        color: #fff;\n        width: 100%; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-icon {\n        color: #fff;\n        position: absolute;\n        bottom: 36%;\n        right: 36%;\n        padding: .5rem 1.5rem;\n        font-size: 1.2em;\n        background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n        box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98;\n        border-radius: 10%; }\n        :host-context(.nb-theme-default) .home-category-section li .cat-icon span {\n          font-size: 5em; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-title {\n        color: #fff;\n        font-size: 2em;\n        bottom: 14%;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        position: absolute; }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) ngx-traffic {\n      display: none; }\n    :host-context(.nb-theme-default) .slider {\n      margin-top: 0; }\n      :host-context(.nb-theme-default) .slider .img-fluid {\n        max-height: 24rem; }\n    :host-context(.nb-theme-default) .home-category-section li .categoryWrapper {\n      width: 100%;\n      margin-bottom: 1%; }\n    :host-context(.nb-theme-default) .home-category-section li .cat-icon {\n      bottom: 50%;\n      right: calc(90%/3); }\n      :host-context(.nb-theme-default) .home-category-section li .cat-icon span {\n        font-size: 3em; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n      height: 456px; } }\n\n:host-context(.nb-theme-cosmic) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-cosmic) .main-container {\n    padding-top: 2rem; }\n  :host-context(.nb-theme-cosmic) .filters-wrapper {\n    position: relative;\n    z-index: 100; }\n  :host-context(.nb-theme-cosmic) sort-filters {\n    position: relative;\n    z-index: 20; }\n  :host-context(.nb-theme-cosmic) cart {\n    position: absolute;\n    top: -23px;\n    right: -57px;\n    z-index: 99999999; }\n  :host-context(.nb-theme-cosmic) search-bar {\n    position: relative;\n    top: -8px; }\n  :host-context(.nb-theme-cosmic) showcase {\n    position: relative;\n    top: -39px;\n    z-index: 10; }\n  :host-context(.nb-theme-cosmic) .sort-filters-wrapper {\n    position: relative; }\n  :host-context(.nb-theme-cosmic) url-form {\n    position: absolute;\n    top: -55px; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-cosmic) url-form {\n      position: fixed;\n      bottom: 20px;\n      left: 10px; }\n    :host-context(.nb-theme-cosmic) filters {\n      position: fixed;\n      top: 71px;\n      right: -100%;\n      width: 100%;\n      height: 100%; }\n    :host-context(.nb-theme-cosmic) .sort-filters-wrapper {\n      position: fixed;\n      top: 44px;\n      left: 0;\n      width: 100%;\n      box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);\n      padding-top: 10px;\n      background: #5cb85c;\n      z-index: 200; }\n    :host-context(.nb-theme-cosmic) .main-container {\n      padding-top: 34px; }\n    :host-context(.nb-theme-cosmic) search-bar {\n      position: fixed;\n      top: 0;\n      width: 100%;\n      left: 0;\n      z-index: 9000; } }\n  :host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n    border: none;\n    padding-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .home-container {\n    padding: 2rem; }\n  :host-context(.nb-theme-cosmic) .section-header {\n    color: #25b15c;\n    text-align: center;\n    padding: 1rem 0;\n    border-top: 1px solid #636c72;\n    border-bottom: 1px solid #a4abb3;\n    margin: 1% 0; }\n  :host-context(.nb-theme-cosmic) .slider {\n    margin-top: 8.3rem; }\n    :host-context(.nb-theme-cosmic) .slider .img-fluid {\n      max-height: 18rem; }\n  :host-context(.nb-theme-cosmic) .cat-why-section {\n    background: url(/assets/images/category/footer2.jpg) no-repeat;\n    background-position: center;\n    background-size: cover; }\n  :host-context(.nb-theme-cosmic) .home-category-section {\n    width: 100%;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .home-category-section li {\n      list-style: none; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper {\n        width: calc(94% /3);\n        height: 17rem;\n        margin: 1%;\n        display: inline-block;\n        float: left;\n        position: relative; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-food {\n          background: url(/assets/images/category/food.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-wellness {\n          background: url(/assets/images/category/wellness.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-spa {\n          background: url(/assets/images/category/spa.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-entertainment {\n          background: url(/assets/images/category/entertainment.png) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-travels {\n          background: url(/assets/images/category/travel.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-shopping {\n          background: url(/assets/images/category/shopping.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-section {\n        width: 100%;\n        height: 100%;\n        display: block;\n        position: relative;\n        background: rgba(93, 18, 18, 0.71); }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-section {\n        background: transparent; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-icon {\n        font-size: .8em;\n        bottom: 56%;\n        background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n        box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-title {\n        bottom: 34%; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-sub {\n        position: absolute;\n        top: 69%;\n        text-align: center;\n        color: #fff;\n        width: 100%; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon {\n        color: #fff;\n        position: absolute;\n        bottom: 36%;\n        right: 36%;\n        padding: .5rem 1.5rem;\n        font-size: 1.2em;\n        background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n        box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98;\n        border-radius: 10%; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon span {\n          font-size: 5em; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-title {\n        color: #fff;\n        font-size: 2em;\n        bottom: 14%;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        position: absolute; }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) ngx-traffic {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .slider {\n      margin-top: 0; }\n      :host-context(.nb-theme-cosmic) .slider .img-fluid {\n        max-height: 24rem; }\n    :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper {\n      width: 100%;\n      margin-bottom: 1%; }\n    :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon {\n      bottom: 50%;\n      right: calc(90%/3); }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon span {\n        font-size: 3em; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n      height: 456px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/deals/deals-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dealdata_service__ = __webpack_require__("../../../../../src/app/home/deals/dealdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_filters_component__ = __webpack_require__("../../../../../src/app/home/deals/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DealsCategoryComponent = (function () {
    function DealsCategoryComponent(dataService, route, router) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.sliders = [];
        this.sortFilters = [
            { name: 'Name (A to Z)', value: 'name' },
            { name: 'Discount (low to high)', value: 'discountAsc' },
            { name: 'Discount (high to low)', value: 'discountDes' }
        ];
        this.customFilters = [
            { name: 'All', value: 'all', checked: true },
            { name: 'Available', value: 'available', checked: false },
            { name: 'Bestoffer', value: 'bestseller', checked: false }
        ];
        this.discountFilters = [
            { name: 'All', value: 'all', checked: true },
            { name: 'Discount > 30', value: 'more_30', checked: false },
            { name: 'Discount < 10', value: 'less_10', checked: false }
        ];
        this.originalData = [];
        this.selected = {};
        this.sliders.push({
            imagePath: 'assets/images/camera1.jpg',
            label: 'First slide label',
            text: 'First'
        }, {
            imagePath: 'assets/images/camera2.jpg',
            label: 'Second slide label',
            text: 'Second'
        }, {
            imagePath: 'assets/images/camera3.jpg',
            label: 'Third slide label',
            text: 'Third'
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.catid = +params['id']; // (+) converts string 'id' to a number
        });
    }
    DealsCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().then(function (data) {
            _this.originalData = data;
            var list = [];
            console.log(_this.catid);
            if (_this.catid) {
                _this.originalData.categories.forEach(function (element) {
                    if (element.categori_id == _this.catid) {
                        element.checked = true;
                        list.push(element);
                    }
                    else {
                        element.checked = false;
                    }
                });
            }
            else {
                _this.originalData.categories.forEach(function (element) {
                    element.checked = true;
                });
                list = _this.originalData.categories.slice(0);
            }
            _this.mainFilter = {
                search: '',
                categories: list,
                customFilter: _this.customFilters[0],
                discountFilter: _this.discountFilters[0]
            };
            //Make a deep copy of the original data to keep it immutable
            _this.products = _this.originalData.deals.slice(0);
            _this.sortProducts('name');
            //this.filtersComponent.reset(this.customFilters, this.discountFilters)
            _this.updateProducts({
                type: 'category',
                change: 1
            });
        });
    };
    DealsCategoryComponent.prototype.ngOnDestroy = function () {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    };
    DealsCategoryComponent.prototype.onURLChange = function (url) {
        var _this = this;
        this.dataService.getRemoteData(url).subscribe(function (data) {
            _this.originalData = data;
            _this.mainFilter = {
                search: '',
                categories: _this.originalData.categories.slice(0),
                customFilter: _this.customFilters[0],
                discountFilter: _this.discountFilters[0]
            };
            //Make a deep copy of the original data to keep it immutable
            // this.products = this.originalData.deals.slice(0)
            _this.sortProducts('name');
            _this.updateProducts({
                type: 'category',
                change: 1
            });
            //this.searchComponent.reset()
            //this.cartService.flushCart()
        });
    };
    DealsCategoryComponent.prototype.onSearchChange = function (search) {
        this.mainFilter.search = search.search;
        this.updateProducts({
            type: 'search',
            change: search.change
        });
    };
    DealsCategoryComponent.prototype.onFilterChange = function (data) {
        if (data.type == 'category') {
            if (data.isChecked) {
                this.mainFilter.categories.push(data.filter);
            }
            else {
                this.mainFilter.categories = this.mainFilter.categories.filter(function (category) { return category.categori_id != data.filter.categori_id; });
            }
        }
        else if (data.type == 'custom') {
            this.mainFilter.customFilter = data.filter;
        }
        else if (data.type == 'discount') {
            this.mainFilter.discountFilter = data.filter;
        }
        this.updateProducts({
            type: data.type,
            change: data.change
        });
    };
    DealsCategoryComponent.prototype.updateProducts = function (filter) {
        var _this = this;
        var productsSource = this.originalData.deals;
        var prevProducts = this.products;
        var filterAllData = true;
        if ((filter.type == 'search' && filter.change == 1) || (filter.type == 'category' && filter.change == -1)) {
            productsSource = this.products;
            filterAllData = false;
        }
        //console.log('filtering ' + productsSource.length + ' products')
        this.products = productsSource.filter(function (product) {
            //Filter by search
            if (filterAllData || filter.type == 'search') {
                if (!product.name.match(new RegExp(_this.mainFilter.search, 'i'))) {
                    return false;
                }
            }
            //Filter by categories
            if (filterAllData || filter.type == 'category') {
                var passCategoryFilter_1 = false;
                product.categories.forEach(function (product_category) {
                    if (!passCategoryFilter_1) {
                        passCategoryFilter_1 = _this.mainFilter.categories.reduce(function (found, category) {
                            return found || product_category == category.categori_id;
                        }, false);
                    }
                });
                if (!passCategoryFilter_1) {
                    return false;
                }
            }
            //Filter by custom filters
            if (filterAllData || filter.type == 'custom') {
                var passCustomFilter = false;
                var customFilter = _this.mainFilter.customFilter.value;
                if (customFilter == 'all') {
                    passCustomFilter = true;
                }
                else if (customFilter == 'available' && product.available) {
                    passCustomFilter = true;
                }
                else if (customFilter == 'unavailable' && !product.available) {
                    passCustomFilter = true;
                }
                else if (customFilter == 'bestseller' && product.best_seller) {
                    passCustomFilter = true;
                }
                if (!passCustomFilter) {
                    return false;
                }
            }
            //Filter by discount filters
            if (filterAllData || filter.type == 'discount') {
                var passdiscountFilter = false;
                var customFilter = _this.mainFilter.discountFilter.value;
                var productdiscount = parseFloat(product.discount.replace(/\./g, '').replace(',', '.'));
                if (customFilter == 'all') {
                    passdiscountFilter = true;
                }
                else if (customFilter == 'more_30' && productdiscount > 30) {
                    passdiscountFilter = true;
                }
                else if (customFilter == 'less_10' && productdiscount < 10) {
                    passdiscountFilter = true;
                }
                if (!passdiscountFilter) {
                    return false;
                }
            }
            return true;
        });
        //If the number of products increased after the filter has been applied then sort again
        //If the number of products remained equal, there's a high chance that the items have been reordered.
        if (prevProducts.length <= this.products.length && this.products.length > 1) {
            this.sortProducts(this.currentSorting);
        }
        //These two types of filters usually add new data to the products showcase so a sort is necessary
        if (filter.type == 'custom' || filter.type == 'discount') {
            this.sortProducts(this.currentSorting);
        }
    };
    DealsCategoryComponent.prototype.sortProducts = function (criteria) {
        //console.log('sorting ' + this.products.length + ' products')
        this.products.sort(function (a, b) {
            var discountComparison = parseFloat(a.discount.replace(/\./g, '').replace(',', '.')) - parseFloat(b.discount.replace(/\./g, '').replace(',', '.'));
            if (criteria == 'discountDes') {
                return -discountComparison;
            }
            else if (criteria == 'discountAsc') {
                return discountComparison;
            }
            else if (criteria == 'name') {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
            else {
                //Keep the same order in case of any unexpected sort criteria
                return -1;
            }
        });
        this.currentSorting = criteria;
    };
    return DealsCategoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filtersComponent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__filters_filters_component__["a" /* FiltersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__filters_filters_component__["a" /* FiltersComponent */]) === "function" && _a || Object)
], DealsCategoryComponent.prototype, "filtersComponent", void 0);
DealsCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-deal-category',
        styles: [__webpack_require__("../../../../../src/app/home/deals/deals-category.component.scss")],
        template: __webpack_require__("../../../../../src/app/home/deals/deals-category.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__dealdata_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dealdata_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DealsCategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=deals-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/deals-category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deals_category_component__ = __webpack_require__("../../../../../src/app/home/deals/deals-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__showcase_showcase_component__ = __webpack_require__("../../../../../src/app/home/deals/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_component__ = __webpack_require__("../../../../../src/app/home/deals/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_thumbnail_product_thumbnail_component__ = __webpack_require__("../../../../../src/app/home/deals/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filters_filters_component__ = __webpack_require__("../../../../../src/app/home/deals/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sort_filters_sort_filters_component__ = __webpack_require__("../../../../../src/app/home/deals/sort-filters/sort-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dealdata_service__ = __webpack_require__("../../../../../src/app/home/deals/dealdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsCategoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DealsCategoryModule = (function () {
    function DealsCategoryModule() {
    }
    return DealsCategoryModule;
}());
DealsCategoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["c" /* NgbAlertModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__deals_category_component__["a" /* DealsCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__showcase_showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_7__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_9__filters_filters_component__["a" /* FiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sort_filters_sort_filters_component__["a" /* SortFiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__product_thumbnail_product_thumbnail_component__["a" /* ProductThumbnailComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__dealdata_service__["a" /* DataService */]
        ],
    })
], DealsCategoryModule);

//# sourceMappingURL=deals-category.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"toggle-btn\" (click)=\"sideShown = true\">Filters</button>\n<div class=\"filters\" [class.side-shown]=\"sideShown\">\n  <button type=\"button\" class=\"close-side-btn\" (click)=\"sideShown = false\">x</button>\n  <h5>Filter by categories</h5>\n  <form *ngIf = \"showFilters\">\n    <div class=\"category-filter filter-wrapper\" *ngFor = 'let filter of categories'>\n      <label class=\"fake-checkbox\">\n        <input type=\"checkbox\" [checked]='filter.checked' (change)='onInputChange($event, filter, \"category\")'>\n        <span class=\"square\"><span class=\"fill\"></span></span>\n        <span class=\"label\">{{filter.name}}</span>\n        <span></span>\n      </label>\n    </div>\n  </form>\n  <h5>Filter by discount</h5>\n  <form *ngIf = \"showFilters\">\n    <div class=\"custom-filter filter-wrapper\" *ngFor = 'let filter of discountFilters'>\n        <label class=\"fake-checkbox\">\n          <input type=\"radio\" name=\"discount\" [checked]='filter.checked' (click)='onInputChange($event, filter, \"discount\")'>\n          <span class=\"circle\"><span class=\"fill\"></span></span>\n          <span class=\"label\">{{filter.name}}</span>\n          <span></span>\n        </label>\n    </div>\n  </form>\n  <h5>Filter By Popularity</h5>\n  <form *ngIf = \"showFilters\">\n    <div class=\"custom-filter filter-wrapper\" *ngFor = 'let filter of customFilters'>\n        <label class=\"fake-checkbox\">\n          <input type=\"radio\" name=\"custom\" [checked]='filter.checked' (click)='onInputChange($event, filter, \"custom\")'>\n          <span class=\"circle\"><span class=\"fill\"></span></span>\n          <span class=\"label\">{{filter.name}}</span>\n          <span></span>\n        </label>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/deals/filters/filters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-default) .filters {\n    border: 1px solid #333333;\n    padding: 1rem;\n    width: 100%;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n    background-color: white;\n    border: none;\n    border-radius: 4px;\n    padding-top: 1rem;\n    position: relative; }\n  :host-context(.nb-theme-default) .filter {\n    width: 100%;\n    background: #999999;\n    border-radius: 3px;\n    margin-bottom: 10px;\n    height: 35px; }\n  :host-context(.nb-theme-default) .fake-checkbox {\n    position: relative; }\n  :host-context(.nb-theme-default) .filter-wrapper {\n    margin-bottom: 8px; }\n    :host-context(.nb-theme-default) .filter-wrapper label {\n      cursor: pointer; }\n    :host-context(.nb-theme-default) .filter-wrapper input[type=checkbox], :host-context(.nb-theme-default) .filter-wrapper input[type=radio] {\n      display: none; }\n      :host-context(.nb-theme-default) .filter-wrapper input[type=checkbox]:checked + .square, :host-context(.nb-theme-default) .filter-wrapper input[type=checkbox]:checked + .circle, :host-context(.nb-theme-default) .filter-wrapper input[type=radio]:checked + .square, :host-context(.nb-theme-default) .filter-wrapper input[type=radio]:checked + .circle {\n        opacity: 1; }\n      :host-context(.nb-theme-default) .filter-wrapper input[type=checkbox]:checked + .square .fill, :host-context(.nb-theme-default) .filter-wrapper input[type=checkbox]:checked + .circle .fill, :host-context(.nb-theme-default) .filter-wrapper input[type=radio]:checked + .square .fill, :host-context(.nb-theme-default) .filter-wrapper input[type=radio]:checked + .circle .fill {\n        opacity: 1; }\n      :host-context(.nb-theme-default) .filter-wrapper input[type=checkbox]:checked ~ .label, :host-context(.nb-theme-default) .filter-wrapper input[type=radio]:checked ~ .label {\n        opacity: 1; }\n    :host-context(.nb-theme-default) .filter-wrapper .square, :host-context(.nb-theme-default) .filter-wrapper .circle, :host-context(.nb-theme-default) .filter-wrapper .fill {\n      display: inline-block; }\n    :host-context(.nb-theme-default) .filter-wrapper .square, :host-context(.nb-theme-default) .filter-wrapper .circle {\n      height: 16px;\n      width: 16px;\n      border: 1px solid #5cb85c;\n      position: relative;\n      opacity: 0.4; }\n      :host-context(.nb-theme-default) .filter-wrapper .square .fill, :host-context(.nb-theme-default) .filter-wrapper .circle .fill {\n        height: 15px;\n        width: 15px;\n        background-color: #5cb85c;\n        transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n        position: absolute;\n        opacity: 0; }\n    :host-context(.nb-theme-default) .filter-wrapper .square {\n      border-radius: 3px; }\n      :host-context(.nb-theme-default) .filter-wrapper .square .fill {\n        border-radius: 2px; }\n    :host-context(.nb-theme-default) .filter-wrapper .circle {\n      border-radius: 50%; }\n      :host-context(.nb-theme-default) .filter-wrapper .circle .fill {\n        border-radius: 50%; }\n    :host-context(.nb-theme-default) .filter-wrapper .fill {\n      top: 0px;\n      left: 0px; }\n    :host-context(.nb-theme-default) .filter-wrapper .label {\n      text-transform: capitalize;\n      position: relative;\n      top: -4px;\n      margin-left: 7px;\n      opacity: 0.6;\n      transition: all 0.4s ease; }\n  :host-context(.nb-theme-default) h5 {\n    text-transform: uppercase;\n    color: #bababa;\n    font-size: 0.8em;\n    font-weight: 600; }\n    :host-context(.nb-theme-default) h5:after {\n      content: \"\";\n      display: block;\n      width: 100%;\n      height: 1px;\n      margin-top: 3px;\n      background-color: #e8e8e8; }\n  :host-context(.nb-theme-default) .toggle-btn {\n    display: none; }\n  :host-context(.nb-theme-default) .close-side-btn {\n    display: none;\n    background: none;\n    border: none; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-default) .close-side-btn {\n      display: block;\n      position: absolute;\n      color: #aaaaaa;\n      font-size: 1.2em;\n      font-weight: 300;\n      right: 18px;\n      top: 6px;\n      opacity: 0.7; }\n    :host-context(.nb-theme-default) .toggle-btn {\n      display: inline-block;\n      position: absolute;\n      left: -69px;\n      top: 11px;\n      background: white;\n      border-radius: 3px;\n      color: #5D4EF0;\n      padding: 4px 11px;\n      border: none;\n      font-size: 0.8em;\n      font-weight: 600;\n      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4); }\n    :host-context(.nb-theme-default) .filters {\n      width: initial;\n      position: relative;\n      box-shadow: none;\n      border-radius: 0;\n      height: 100%;\n      transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n      :host-context(.nb-theme-default) .filters.side-shown {\n        -webkit-transform: translateX(-100%);\n        transform: translateX(-100%); } }\n\n:host-context(.nb-theme-cosmic) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-cosmic) .filters {\n    border: 1px solid #333333;\n    padding: 1rem;\n    width: 100%;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n    background-color: white;\n    border: none;\n    border-radius: 4px;\n    padding-top: 1rem;\n    position: relative; }\n  :host-context(.nb-theme-cosmic) .filter {\n    width: 100%;\n    background: #999999;\n    border-radius: 3px;\n    margin-bottom: 10px;\n    height: 35px; }\n  :host-context(.nb-theme-cosmic) .fake-checkbox {\n    position: relative; }\n  :host-context(.nb-theme-cosmic) .filter-wrapper {\n    margin-bottom: 8px; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper label {\n      cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper input[type=checkbox], :host-context(.nb-theme-cosmic) .filter-wrapper input[type=radio] {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .filter-wrapper input[type=checkbox]:checked + .square, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=checkbox]:checked + .circle, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=radio]:checked + .square, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=radio]:checked + .circle {\n        opacity: 1; }\n      :host-context(.nb-theme-cosmic) .filter-wrapper input[type=checkbox]:checked + .square .fill, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=checkbox]:checked + .circle .fill, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=radio]:checked + .square .fill, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=radio]:checked + .circle .fill {\n        opacity: 1; }\n      :host-context(.nb-theme-cosmic) .filter-wrapper input[type=checkbox]:checked ~ .label, :host-context(.nb-theme-cosmic) .filter-wrapper input[type=radio]:checked ~ .label {\n        opacity: 1; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper .square, :host-context(.nb-theme-cosmic) .filter-wrapper .circle, :host-context(.nb-theme-cosmic) .filter-wrapper .fill {\n      display: inline-block; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper .square, :host-context(.nb-theme-cosmic) .filter-wrapper .circle {\n      height: 16px;\n      width: 16px;\n      border: 1px solid #5cb85c;\n      position: relative;\n      opacity: 0.4; }\n      :host-context(.nb-theme-cosmic) .filter-wrapper .square .fill, :host-context(.nb-theme-cosmic) .filter-wrapper .circle .fill {\n        height: 15px;\n        width: 15px;\n        background-color: #5cb85c;\n        transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n        position: absolute;\n        opacity: 0; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper .square {\n      border-radius: 3px; }\n      :host-context(.nb-theme-cosmic) .filter-wrapper .square .fill {\n        border-radius: 2px; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper .circle {\n      border-radius: 50%; }\n      :host-context(.nb-theme-cosmic) .filter-wrapper .circle .fill {\n        border-radius: 50%; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper .fill {\n      top: 0px;\n      left: 0px; }\n    :host-context(.nb-theme-cosmic) .filter-wrapper .label {\n      text-transform: capitalize;\n      position: relative;\n      top: -4px;\n      margin-left: 7px;\n      opacity: 0.6;\n      transition: all 0.4s ease; }\n  :host-context(.nb-theme-cosmic) h5 {\n    text-transform: uppercase;\n    color: #bababa;\n    font-size: 0.8em;\n    font-weight: 600; }\n    :host-context(.nb-theme-cosmic) h5:after {\n      content: \"\";\n      display: block;\n      width: 100%;\n      height: 1px;\n      margin-top: 3px;\n      background-color: #e8e8e8; }\n  :host-context(.nb-theme-cosmic) .toggle-btn {\n    display: none; }\n  :host-context(.nb-theme-cosmic) .close-side-btn {\n    display: none;\n    background: none;\n    border: none; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-cosmic) .close-side-btn {\n      display: block;\n      position: absolute;\n      color: #aaaaaa;\n      font-size: 1.2em;\n      font-weight: 300;\n      right: 18px;\n      top: 6px;\n      opacity: 0.7; }\n    :host-context(.nb-theme-cosmic) .toggle-btn {\n      display: inline-block;\n      position: absolute;\n      left: -69px;\n      top: 11px;\n      background: white;\n      border-radius: 3px;\n      color: #5D4EF0;\n      padding: 4px 11px;\n      border: none;\n      font-size: 0.8em;\n      font-weight: 600;\n      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4); }\n    :host-context(.nb-theme-cosmic) .filters {\n      width: initial;\n      position: relative;\n      box-shadow: none;\n      border-radius: 0;\n      height: 100%;\n      transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n      :host-context(.nb-theme-cosmic) .filters.side-shown {\n        -webkit-transform: translateX(-100%);\n        transform: translateX(-100%); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/deals/filters/filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiltersComponent = (function () {
    function FiltersComponent() {
        this.onFilterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showFilters = true;
        this.sideShown = false;
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent.prototype.reset = function (customFilters, discountFilters) {
        var _this = this;
        this.customFilters = customFilters;
        this.discountFilters = discountFilters;
        this.showFilters = false;
        setTimeout(function () {
            _this.showFilters = true;
        });
    };
    FiltersComponent.prototype.onInputChange = function ($event, filter, type) {
        var change = $event.target.checked ? 1 : -1;
        this.onFilterChange.emit({
            type: type,
            filter: filter,
            isChecked: $event.target.checked,
            change: change
        });
    };
    return FiltersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "categories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "customFilters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "discountFilters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FiltersComponent.prototype, "onFilterChange", void 0);
FiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filters',
        template: __webpack_require__("../../../../../src/app/home/deals/filters/filters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/deals/filters/filters.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FiltersComponent);

//# sourceMappingURL=filters.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/mock-data-deals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
var DATA = {
    "categories": [
        {
            "categori_id": 1,
            "name": "Food & Beverages",
        },
        {
            "categori_id": 2,
            "name": "Wellness"
        },
        {
            "categori_id": 3,
            "name": "SPA"
        },
        {
            "categori_id": 4,
            "name": "Entertainment"
        },
        {
            "categori_id": 5,
            "name": "Travel"
        },
        {
            "categori_id": 6,
            "name": "E Shopping"
        }
    ],
    "deals": [
        {
            "id": 1,
            "name": "Over The Top",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 2,
                    "address": "Defence Colony",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "20",
            "offer": "Flat 20% off on the bill. Cannot be clubed with any other offer",
            "offerdetails": "Enjoy your favourite food at Over the Top. Now Get Flat 20 % of on the bill ( Drinks and Food)",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "This offer cannot be clubbed with other offers. You can download this coupon FREE of cost from dealsandyou.com. You only need to pay 28 Capri Italy as per the Offer Details.",
            "images": ["/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover1.jpg"],
            "best_seller": false,
            "available": true
        },
        {
            "id": 2,
            "name": "22 Capri Italy",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "68",
            "offer": "5 beer with 1 Veg or Non Veg Pizza / 1 Veg or Non Veg Pasta. Pay Rs 599 at the outlet. (Taxes and Service charges extra)",
            "offerdetails": "Get 68% off on Beer, Pizza & More worth Rs. 1850.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 3,
            "name": "The Arabian Night at Club London on Thursdays",
            "categories": [
                4
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "8",
            "offer": "ARABIAN NIGHT LIVE BELLY DANCE",
            "offerdetails": "Thursaday Another energy filled episode of the amazing Arabian Nights is back this week, taking fun to another level! Drop in to witness some great belly dancing and get the party started.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover3.jpg", "/assets/images/cover2.jpg", "/assets/images/cover1.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 4,
            "name": "Over The Top",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 2,
                    "address": "Defence Colony",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "20",
            "offer": "Flat 20% off on the bill. Cannot be clubed with any other offer",
            "offerdetails": "Enjoy your favourite food at Over the Top. Now Get Flat 20 % of on the bill ( Drinks and Food)",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "This offer cannot be clubbed with other offers. You can download this coupon FREE of cost from dealsandyou.com. You only need to pay 28 Capri Italy as per the Offer Details.",
            "images": ["/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover1.jpg"],
            "best_seller": false,
            "available": true
        },
        {
            "id": 5,
            "name": "22 Capri Italy",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "68",
            "offer": "5 beer with 1 Veg or Non Veg Pizza / 1 Veg or Non Veg Pasta. Pay Rs 599 at the outlet. (Taxes and Service charges extra)",
            "offerdetails": "Get 68% off on Beer, Pizza & More worth Rs. 1850.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 6,
            "name": "The Arabian Night at Club London on Thursdays",
            "categories": [
                4
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "8",
            "offer": "ARABIAN NIGHT LIVE BELLY DANCE",
            "offerdetails": "Thursaday Another energy filled episode of the amazing Arabian Nights is back this week, taking fun to another level! Drop in to witness some great belly dancing and get the party started.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover3.jpg", "/assets/images/cover2.jpg", "/assets/images/cover1.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 7,
            "name": "Over The Top",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 2,
                    "address": "Defence Colony",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "20",
            "offer": "Flat 20% off on the bill. Cannot be clubed with any other offer",
            "offerdetails": "Enjoy your favourite food at Over the Top. Now Get Flat 20 % of on the bill ( Drinks and Food)",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "This offer cannot be clubbed with other offers. You can download this coupon FREE of cost from dealsandyou.com. You only need to pay 28 Capri Italy as per the Offer Details.",
            "images": ["/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover1.jpg"],
            "best_seller": false,
            "available": true
        },
        {
            "id": 8,
            "name": "22 Capri Italy",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "68",
            "offer": "5 beer with 1 Veg or Non Veg Pizza / 1 Veg or Non Veg Pasta. Pay Rs 599 at the outlet. (Taxes and Service charges extra)",
            "offerdetails": "Get 68% off on Beer, Pizza & More worth Rs. 1850.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 9,
            "name": "The Arabian Night at Club London on Thursdays",
            "categories": [
                4
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "8",
            "offer": "ARABIAN NIGHT LIVE BELLY DANCE",
            "offerdetails": "Thursaday Another energy filled episode of the amazing Arabian Nights is back this week, taking fun to another level! Drop in to witness some great belly dancing and get the party started.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover3.jpg", "/assets/images/cover2.jpg", "/assets/images/cover1.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 10,
            "name": "Over The Top",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 2,
                    "address": "Defence Colony",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "20",
            "offer": "Flat 20% off on the bill. Cannot be clubed with any other offer",
            "offerdetails": "Enjoy your favourite food at Over the Top. Now Get Flat 20 % of on the bill ( Drinks and Food)",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "This offer cannot be clubbed with other offers. You can download this coupon FREE of cost from dealsandyou.com. You only need to pay 28 Capri Italy as per the Offer Details.",
            "images": ["/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover1.jpg"],
            "best_seller": false,
            "available": true
        },
        {
            "id": 11,
            "name": "22 Capri Italy",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "68",
            "offer": "5 beer with 1 Veg or Non Veg Pizza / 1 Veg or Non Veg Pasta. Pay Rs 599 at the outlet. (Taxes and Service charges extra)",
            "offerdetails": "Get 68% off on Beer, Pizza & More worth Rs. 1850.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 12,
            "name": "The Arabian Night at Club London on Thursdays",
            "categories": [
                4
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "8",
            "offer": "ARABIAN NIGHT LIVE BELLY DANCE",
            "offerdetails": "Thursaday Another energy filled episode of the amazing Arabian Nights is back this week, taking fun to another level! Drop in to witness some great belly dancing and get the party started.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover3.jpg", "/assets/images/cover2.jpg", "/assets/images/cover1.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 10,
            "name": "Over The Top",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 2,
                    "address": "Defence Colony",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "20",
            "offer": "Flat 20% off on the bill. Cannot be clubed with any other offer",
            "offerdetails": "Enjoy your favourite food at Over the Top. Now Get Flat 20 % of on the bill ( Drinks and Food)",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "This offer cannot be clubbed with other offers. You can download this coupon FREE of cost from dealsandyou.com. You only need to pay 28 Capri Italy as per the Offer Details.",
            "images": ["/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover1.jpg"],
            "best_seller": false,
            "available": true
        },
        {
            "id": 11,
            "name": "22 Capri Italy",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "68",
            "offer": "5 beer with 1 Veg or Non Veg Pizza / 1 Veg or Non Veg Pasta. Pay Rs 599 at the outlet. (Taxes and Service charges extra)",
            "offerdetails": "Get 68% off on Beer, Pizza & More worth Rs. 1850.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 12,
            "name": "The Arabian Night at Club London on Thursdays",
            "categories": [
                4
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "8",
            "offer": "ARABIAN NIGHT LIVE BELLY DANCE",
            "offerdetails": "Thursaday Another energy filled episode of the amazing Arabian Nights is back this week, taking fun to another level! Drop in to witness some great belly dancing and get the party started.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover3.jpg", "/assets/images/cover2.jpg", "/assets/images/cover1.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 10,
            "name": "Over The Top",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 2,
                    "address": "Defence Colony",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "20",
            "offer": "Flat 20% off on the bill. Cannot be clubed with any other offer",
            "offerdetails": "Enjoy your favourite food at Over the Top. Now Get Flat 20 % of on the bill ( Drinks and Food)",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "This offer cannot be clubbed with other offers. You can download this coupon FREE of cost from dealsandyou.com. You only need to pay 28 Capri Italy as per the Offer Details.",
            "images": ["/assets/images/cover2.jpg", "/assets/images/cover3.jpg", "/assets/images/cover1.jpg"],
            "best_seller": false,
            "available": true
        },
        {
            "id": 11,
            "name": "22 Capri Italy",
            "categories": [
                1
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "68",
            "offer": "5 beer with 1 Veg or Non Veg Pizza / 1 Veg or Non Veg Pasta. Pay Rs 599 at the outlet. (Taxes and Service charges extra)",
            "offerdetails": "Get 68% off on Beer, Pizza & More worth Rs. 1850.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover1.jpg", "/assets/images/cover2.jpg", "/assets/images/cover3.jpg"],
            "best_seller": true,
            "available": true
        },
        {
            "id": 12,
            "name": "The Arabian Night at Club London on Thursdays",
            "categories": [
                4
            ],
            "outlets": [
                {
                    "id": 1,
                    "address": "#43 hsr layout",
                    "lat": "11.2",
                    "lon": "12.56",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India"
                }
            ],
            "offertype": 1,
            "discount": "8",
            "offer": "ARABIAN NIGHT LIVE BELLY DANCE",
            "offerdetails": "Thursaday Another energy filled episode of the amazing Arabian Nights is back this week, taking fun to another level! Drop in to witness some great belly dancing and get the party started.",
            "coupontodate": "25-Nov-2017",
            "couponfromdate": "01-Nov-2017",
            "fundallocation": 2000,
            "daysallocation": "All days",
            "terms": "Available on all days. One Voucher per person Prior appointment Mandatory. Call the merchant for more details on the Package. T&C apply. Cannot be clubbed with any other Offer. Payment to the Merchant only. This coupon is free of cost. Prices may vary from other sites. These are the prices Shared by the merchant. Merchant can change the Deal price any time. Do call the Merchant to confirm / recheck the details.",
            "images": ["/assets/images/cover3.jpg", "/assets/images/cover2.jpg", "/assets/images/cover1.jpg"],
            "best_seller": true,
            "available": true
        },
    ]
};
//# sourceMappingURL=mock-data-deals.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/product-thumbnail/product-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.unavailable]='!product.available'>\n  <div class=\"info\" >\n    <div class=\"img-wrapper\">\n      <img class=\"img\" [src]='product.images[0]'>\n      <div class=\"img-placeholder\"></div>\n    </div>\n    <h5 class=\"title\">{{product.name}}</h5>\n    <p class=\"price\"><span>{{product.discount}}</span> % Discount</p>\n    <div class=\"details\">\n      <div class=\"available\" *ngIf = 'product.available'>\n        \n        <div class=\"row\">\n          <div class=\"col-4-sm\">\n            <button type=\"button\" class=\"btn btn-outline-success btn-tn\" (click)='onProductClick()'><i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i> View more</button>\n          </div>\n          <div class=\"col-4-sm offset-sm-1\">\n            <button type=\"button\" class=\"btn btn-outline-success btn-tn\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Coupon</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"not-available\" *ngIf = '!product.available'>\n        \n        <p>Not available</p>\n      </div>\n    </div>\n    <!--span class=\"category-name\" *ngFor='let category of product.categories'>{{category}}</span-->\n    <div class=\"detail-view\" [class.active]='detailViewActive'>\n      <div class=\"bg\" [class.shown]='detailViewActive'></div>\n      <div class=\"info-wrapper\">\n        <p class=\"d-holder d-title\">{{product.name}}</p>\n        <p class=\"d-holder d-description\">{{product.offerdetails}}</p>\n        <p class=\"d-holder d-description\">{{product.offer}}</p>\n      </div>\n      <button type=\"button\" class=\"hide-detail-btn\" (click)='onProductClick()'>Click to hide</button>\n    </div>\n  </div>\n  <div class=\"bestseller-badge\" [class.in-detailed]='detailViewActive' *ngIf = 'product.best_seller'>\n    <span class=\"star left\">&nbsp;</span>\n    <span class=\"txt\">Bestoffer</span>\n    <span class=\"star right\">&nbsp;</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/deals/product-thumbnail/product-thumbnail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-default) .wrapper {\n    border-radius: 5px;\n    box-shadow: 0 5px 5px;\n    position: relative;\n    text-align: center;\n    display: block;\n    background-color: white;\n    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n  :host-context(.nb-theme-default) .add-cart-wrapper, :host-context(.nb-theme-default) .view-details-wrapper {\n    margin-top: 0;\n    margin-bottom: 0; }\n  :host-context(.nb-theme-default) .view-details-wrapper {\n    position: relative; }\n    :host-context(.nb-theme-default) .view-details-wrapper:after {\n      content: \"\";\n      width: 1px;\n      display: block;\n      position: absolute;\n      height: 28px;\n      background-color: #5D4EF0;\n      right: -3px;\n      top: -4px;\n      opacity: 0.2; }\n  :host-context(.nb-theme-default) .hide-detail-btn {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    width: 100%;\n    z-index: 20;\n    background: none;\n    border: none;\n    color: white;\n    opacity: 0.6;\n    font-size: 0.7em;\n    font-weight: 600;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.1);\n    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    -webkit-transform: translateY(15px);\n    transform: translateY(15px);\n    transition-delay: 1.2s; }\n    :host-context(.nb-theme-default) .hide-detail-btn:hover {\n      background: rgba(255, 255, 255, 0.2); }\n  :host-context(.nb-theme-default) .img-wrapper {\n    height: 12rem;\n    position: relative;\n    overflow: hidden; }\n  :host-context(.nb-theme-default) .details {\n    margin: 1rem;\n    padding: 1rem; }\n    :host-context(.nb-theme-default) .details hr {\n      width: 90%;\n      height: 0;\n      border-top: 1px solid #5cb85c; }\n    :host-context(.nb-theme-default) .details .view:hover, :host-context(.nb-theme-default) .details .cart:hover {\n      opacity: 0.8; }\n    :host-context(.nb-theme-default) .details .view {\n      text-transform: uppercase;\n      color: #5cb85c;\n      font-size: 0.85em;\n      font-weight: 500;\n      position: relative;\n      top: -1px;\n      left: -2px; }\n    :host-context(.nb-theme-default) .details .cart {\n      position: relative;\n      top: 2px; }\n    :host-context(.nb-theme-default) .details .not-available hr {\n      border-top: 1px solid #999999; }\n    :host-context(.nb-theme-default) .details .not-available p {\n      margin: 0;\n      margin-top: -7px;\n      position: relative;\n      top: 2px;\n      text-transform: uppercase;\n      font-size: 0.85em;\n      font-weight: 500;\n      padding-top: 5px;\n      padding-bottom: 3px; }\n  :host-context(.nb-theme-default) .img-placeholder, :host-context(.nb-theme-default) .img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    border-radius: 5px 5px 0 0; }\n  :host-context(.nb-theme-default) .img-placeholder {\n    z-index: 3;\n    height: 100%;\n    background: #dddddd; }\n  :host-context(.nb-theme-default) .detail-view {\n    position: absolute;\n    z-index: 30;\n    border-radius: 5px;\n    overflow: hidden;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    pointer-events: none; }\n    :host-context(.nb-theme-default) .detail-view.active {\n      pointer-events: all; }\n      :host-context(.nb-theme-default) .detail-view.active .hide-detail-btn {\n        -webkit-transform: translateY(0);\n        transform: translateY(0); }\n      :host-context(.nb-theme-default) .detail-view.active .info-wrapper {\n        opacity: 1; }\n      :host-context(.nb-theme-default) .detail-view.active .bg {\n        -webkit-transform: scale(232);\n        transform: scale(232); }\n      :host-context(.nb-theme-default) .detail-view.active .d-holder {\n        opacity: 1;\n        -webkit-transform: translate(0);\n        transform: translate(0);\n        transition: all 0.5s ease; }\n      :host-context(.nb-theme-default) .detail-view.active .d-title {\n        transition-delay: 0.4s; }\n      :host-context(.nb-theme-default) .detail-view.active .d-price {\n        transition-delay: 0.5s; }\n      :host-context(.nb-theme-default) .detail-view.active .d-description {\n        transition-delay: 0.6s; }\n    :host-context(.nb-theme-default) .detail-view .d-holder {\n      opacity: 0;\n      -webkit-transform: translateY(10px);\n      transform: translateY(10px);\n      transition: all 0.1s ease; }\n    :host-context(.nb-theme-default) .detail-view .d-title {\n      font-size: 1.3em;\n      font-weight: 600;\n      margin-bottom: 0;\n      margin-top: 5px; }\n    :host-context(.nb-theme-default) .detail-view .d-price {\n      margin-top: -7px;\n      font-size: 0.9em; }\n    :host-context(.nb-theme-default) .detail-view .d-description {\n      font-size: 0.9em;\n      line-height: 1.4em; }\n    :host-context(.nb-theme-default) .detail-view .info-wrapper {\n      position: relative;\n      z-index: 30;\n      color: white;\n      text-align: left;\n      padding-left: 14px;\n      padding-right: 14px;\n      height: 90%;\n      overflow: hidden; }\n    :host-context(.nb-theme-default) .detail-view .bg {\n      position: absolute;\n      bottom: -9px;\n      left: 43px;\n      height: 3px;\n      width: 3px;\n      border-radius: 50%;\n      z-index: 20;\n      background: #5cb85c;\n      transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  :host-context(.nb-theme-default) .info {\n    position: relative; }\n  :host-context(.nb-theme-default) .unavailable {\n    opacity: 0.3; }\n  :host-context(.nb-theme-default) .img {\n    z-index: 5;\n    height: auto;\n    background-color: #eeeeee; }\n  :host-context(.nb-theme-default) .title {\n    font-size: 1em;\n    margin-top: 18px;\n    font-weight: 600;\n    margin-bottom: 3px;\n    text-align: center;\n    word-wrap: break-word;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 0 .4rem; }\n  :host-context(.nb-theme-default) .price {\n    margin-bottom: 10px;\n    color: #999999;\n    font-size: 18px;\n    font-weight: 300;\n    margin-top: 0; }\n  :host-context(.nb-theme-default) .bestseller-badge {\n    position: absolute;\n    top: -10px;\n    border-radius: 10px;\n    background-color: #EF364C;\n    color: white;\n    font-size: 0.7em;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 70%;\n    z-index: 40;\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    overflow: hidden;\n    height: 20px;\n    transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n    :host-context(.nb-theme-default) .bestseller-badge .txt, :host-context(.nb-theme-default) .bestseller-badge .star {\n      transition: all 0.35s ease; }\n    :host-context(.nb-theme-default) .bestseller-badge .txt {\n      position: relative;\n      top: 4px; }\n    :host-context(.nb-theme-default) .bestseller-badge .star {\n      position: absolute;\n      top: 2px; }\n      :host-context(.nb-theme-default) .bestseller-badge .star.left {\n        left: 8px; }\n      :host-context(.nb-theme-default) .bestseller-badge .star.right {\n        right: 14px; }\n    :host-context(.nb-theme-default) .bestseller-badge.in-detailed {\n      box-shadow: 0 2px 7px transparent;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      top: 9px;\n      right: -80%;\n      background-color: #5cb85c; }\n      :host-context(.nb-theme-default) .bestseller-badge.in-detailed .right, :host-context(.nb-theme-default) .bestseller-badge.in-detailed .txt {\n        opacity: 0; }\n      :host-context(.nb-theme-default) .bestseller-badge.in-detailed .left {\n        left: 5px;\n        top: 2px; }\n  :host-context(.nb-theme-default) .sad-face {\n    border-radius: 50%;\n    background-color: #aaaaaa;\n    height: 90px;\n    width: 90px; }\n  :host-context(.nb-theme-default) .category-name {\n    display: inline-block;\n    margin-right: 10px; }\n  :host-context(.nb-theme-default) .star:before {\n    content: \"\\2605\";\n    position: absolute;\n    color: white; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-default) .detail-view.active .bg {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    :host-context(.nb-theme-default) .hide-detail-btn {\n      height: 32px;\n      -webkit-transform: translateY(32px);\n      transform: translateY(32px); }\n    :host-context(.nb-theme-default) .wrapper {\n      margin-bottom: -22px; }\n    :host-context(.nb-theme-default) .img-wrapper {\n      height: 14rem; }\n    :host-context(.nb-theme-default) .detail-view .bg {\n      width: 100%;\n      height: 100%;\n      border-radius: 0;\n      left: 0;\n      bottom: 0;\n      -webkit-transform: translateY(100%);\n      transform: translateY(100%); }\n    :host-context(.nb-theme-default) .detail-view .info-wrapper {\n      padding: 10px 25px;\n      height: 78%; } }\n\n:host-context(.nb-theme-cosmic) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-cosmic) .wrapper {\n    border-radius: 5px;\n    box-shadow: 0 5px 5px;\n    position: relative;\n    text-align: center;\n    display: block;\n    background-color: white;\n    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n  :host-context(.nb-theme-cosmic) .add-cart-wrapper, :host-context(.nb-theme-cosmic) .view-details-wrapper {\n    margin-top: 0;\n    margin-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .view-details-wrapper {\n    position: relative; }\n    :host-context(.nb-theme-cosmic) .view-details-wrapper:after {\n      content: \"\";\n      width: 1px;\n      display: block;\n      position: absolute;\n      height: 28px;\n      background-color: #5D4EF0;\n      right: -3px;\n      top: -4px;\n      opacity: 0.2; }\n  :host-context(.nb-theme-cosmic) .hide-detail-btn {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    width: 100%;\n    z-index: 20;\n    background: none;\n    border: none;\n    color: white;\n    opacity: 0.6;\n    font-size: 0.7em;\n    font-weight: 600;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.1);\n    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    -webkit-transform: translateY(15px);\n    transform: translateY(15px);\n    transition-delay: 1.2s; }\n    :host-context(.nb-theme-cosmic) .hide-detail-btn:hover {\n      background: rgba(255, 255, 255, 0.2); }\n  :host-context(.nb-theme-cosmic) .img-wrapper {\n    height: 12rem;\n    position: relative;\n    overflow: hidden; }\n  :host-context(.nb-theme-cosmic) .details {\n    margin: 1rem;\n    padding: 1rem; }\n    :host-context(.nb-theme-cosmic) .details hr {\n      width: 90%;\n      height: 0;\n      border-top: 1px solid #5cb85c; }\n    :host-context(.nb-theme-cosmic) .details .view:hover, :host-context(.nb-theme-cosmic) .details .cart:hover {\n      opacity: 0.8; }\n    :host-context(.nb-theme-cosmic) .details .view {\n      text-transform: uppercase;\n      color: #5cb85c;\n      font-size: 0.85em;\n      font-weight: 500;\n      position: relative;\n      top: -1px;\n      left: -2px; }\n    :host-context(.nb-theme-cosmic) .details .cart {\n      position: relative;\n      top: 2px; }\n    :host-context(.nb-theme-cosmic) .details .not-available hr {\n      border-top: 1px solid #999999; }\n    :host-context(.nb-theme-cosmic) .details .not-available p {\n      margin: 0;\n      margin-top: -7px;\n      position: relative;\n      top: 2px;\n      text-transform: uppercase;\n      font-size: 0.85em;\n      font-weight: 500;\n      padding-top: 5px;\n      padding-bottom: 3px; }\n  :host-context(.nb-theme-cosmic) .img-placeholder, :host-context(.nb-theme-cosmic) .img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    border-radius: 5px 5px 0 0; }\n  :host-context(.nb-theme-cosmic) .img-placeholder {\n    z-index: 3;\n    height: 100%;\n    background: #dddddd; }\n  :host-context(.nb-theme-cosmic) .detail-view {\n    position: absolute;\n    z-index: 30;\n    border-radius: 5px;\n    overflow: hidden;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    pointer-events: none; }\n    :host-context(.nb-theme-cosmic) .detail-view.active {\n      pointer-events: all; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .hide-detail-btn {\n        -webkit-transform: translateY(0);\n        transform: translateY(0); }\n      :host-context(.nb-theme-cosmic) .detail-view.active .info-wrapper {\n        opacity: 1; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .bg {\n        -webkit-transform: scale(232);\n        transform: scale(232); }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-holder {\n        opacity: 1;\n        -webkit-transform: translate(0);\n        transform: translate(0);\n        transition: all 0.5s ease; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-title {\n        transition-delay: 0.4s; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-price {\n        transition-delay: 0.5s; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-description {\n        transition-delay: 0.6s; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-holder {\n      opacity: 0;\n      -webkit-transform: translateY(10px);\n      transform: translateY(10px);\n      transition: all 0.1s ease; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-title {\n      font-size: 1.3em;\n      font-weight: 600;\n      margin-bottom: 0;\n      margin-top: 5px; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-price {\n      margin-top: -7px;\n      font-size: 0.9em; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-description {\n      font-size: 0.9em;\n      line-height: 1.4em; }\n    :host-context(.nb-theme-cosmic) .detail-view .info-wrapper {\n      position: relative;\n      z-index: 30;\n      color: white;\n      text-align: left;\n      padding-left: 14px;\n      padding-right: 14px;\n      height: 90%;\n      overflow: hidden; }\n    :host-context(.nb-theme-cosmic) .detail-view .bg {\n      position: absolute;\n      bottom: -9px;\n      left: 43px;\n      height: 3px;\n      width: 3px;\n      border-radius: 50%;\n      z-index: 20;\n      background: #5cb85c;\n      transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  :host-context(.nb-theme-cosmic) .info {\n    position: relative; }\n  :host-context(.nb-theme-cosmic) .unavailable {\n    opacity: 0.3; }\n  :host-context(.nb-theme-cosmic) .img {\n    z-index: 5;\n    height: auto;\n    background-color: #eeeeee; }\n  :host-context(.nb-theme-cosmic) .title {\n    font-size: 1em;\n    margin-top: 18px;\n    font-weight: 600;\n    margin-bottom: 3px;\n    text-align: center;\n    word-wrap: break-word;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 0 .4rem; }\n  :host-context(.nb-theme-cosmic) .price {\n    margin-bottom: 10px;\n    color: #999999;\n    font-size: 18px;\n    font-weight: 300;\n    margin-top: 0; }\n  :host-context(.nb-theme-cosmic) .bestseller-badge {\n    position: absolute;\n    top: -10px;\n    border-radius: 10px;\n    background-color: #EF364C;\n    color: white;\n    font-size: 0.7em;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 70%;\n    z-index: 40;\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    overflow: hidden;\n    height: 20px;\n    transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n    :host-context(.nb-theme-cosmic) .bestseller-badge .txt, :host-context(.nb-theme-cosmic) .bestseller-badge .star {\n      transition: all 0.35s ease; }\n    :host-context(.nb-theme-cosmic) .bestseller-badge .txt {\n      position: relative;\n      top: 4px; }\n    :host-context(.nb-theme-cosmic) .bestseller-badge .star {\n      position: absolute;\n      top: 2px; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge .star.left {\n        left: 8px; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge .star.right {\n        right: 14px; }\n    :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed {\n      box-shadow: 0 2px 7px transparent;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      top: 9px;\n      right: -80%;\n      background-color: #5cb85c; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed .right, :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed .txt {\n        opacity: 0; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed .left {\n        left: 5px;\n        top: 2px; }\n  :host-context(.nb-theme-cosmic) .sad-face {\n    border-radius: 50%;\n    background-color: #aaaaaa;\n    height: 90px;\n    width: 90px; }\n  :host-context(.nb-theme-cosmic) .category-name {\n    display: inline-block;\n    margin-right: 10px; }\n  :host-context(.nb-theme-cosmic) .star:before {\n    content: \"\\2605\";\n    position: absolute;\n    color: white; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-cosmic) .detail-view.active .bg {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    :host-context(.nb-theme-cosmic) .hide-detail-btn {\n      height: 32px;\n      -webkit-transform: translateY(32px);\n      transform: translateY(32px); }\n    :host-context(.nb-theme-cosmic) .wrapper {\n      margin-bottom: -22px; }\n    :host-context(.nb-theme-cosmic) .img-wrapper {\n      height: 14rem; }\n    :host-context(.nb-theme-cosmic) .detail-view .bg {\n      width: 100%;\n      height: 100%;\n      border-radius: 0;\n      left: 0;\n      bottom: 0;\n      -webkit-transform: translateY(100%);\n      transform: translateY(100%); }\n    :host-context(.nb-theme-cosmic) .detail-view .info-wrapper {\n      padding: 10px 25px;\n      height: 78%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/deals/product-thumbnail/product-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_deal_model__ = __webpack_require__("../../../../../src/app/home/deals/shared/deal.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductThumbnailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductThumbnailComponent = (function () {
    function ProductThumbnailComponent() {
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () {
        this.detailViewActive = false;
    };
    ProductThumbnailComponent.prototype.onProductClick = function () {
        this.detailViewActive = !this.detailViewActive;
    };
    ProductThumbnailComponent.prototype.onAddToCart = function () {
        //this.cartService.addProductToCart(this.product)
    };
    return ProductThumbnailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_deal_model__["a" /* Deal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_deal_model__["a" /* Deal */]) === "function" && _a || Object)
], ProductThumbnailComponent.prototype, "product", void 0);
ProductThumbnailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-thumbnail',
        template: __webpack_require__("../../../../../src/app/home/deals/product-thumbnail/product-thumbnail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/deals/product-thumbnail/product-thumbnail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductThumbnailComponent);

var _a;
//# sourceMappingURL=product-thumbnail.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  holi\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/deals/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/deals/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/home/deals/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/deals/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/shared/deal.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deal; });
var Deal = (function () {
    function Deal() {
    }
    return Deal;
}());

//# sourceMappingURL=deal.model.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor = 'let product of products'>\n    <product-thumbnail [product] = 'product'></product-thumbnail>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/deals/showcase/showcase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) product-thumbnail {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n:host-context(.nb-theme-cosmic) product-thumbnail {\n  padding-left: 10px;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/deals/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseComponent = (function () {
    function ShowcaseComponent() {
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    return ShowcaseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ShowcaseComponent.prototype, "products", void 0);
ShowcaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase',
        template: __webpack_require__("../../../../../src/app/home/deals/showcase/showcase.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/deals/showcase/showcase.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShowcaseComponent);

//# sourceMappingURL=showcase.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/deals/sort-filters/sort-filters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <label for=\"\">Ordered by</label>\n  <select (change)='onSelectChange($event)'>\n    <option *ngFor='let filter of filters' [value]=\"filter.value\">{{filter.name}}</option>\n  </select>\n  <div class=\"triangle\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/deals/sort-filters/sort-filters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: block;\n  height: 35px;\n  background: none;\n  font-size: 14px;\n  padding-left: 11px;\n  position: relative;\n  top: 4px; }\n  .wrapper label {\n    opacity: 0.8; }\n  .wrapper select {\n    color: #5cb85c;\n    background: none;\n    border: none;\n    font-size: 13px;\n    margin-left: 2px;\n    font-weight: 500;\n    cursor: pointer;\n    width: 130px; }\n  .wrapper .triangle {\n    height: 0;\n    width: 0;\n    border-top: 4px solid #5cb85c;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    display: inline-block;\n    position: relative;\n    top: -2px;\n    right: 14px;\n    pointer-events: none;\n    opacity: 0.3; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .wrapper label {\n    color: white; }\n  .wrapper select {\n    color: white; }\n  .wrapper .triangle {\n    border-top: 4px solid white; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/deals/sort-filters/sort-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortFiltersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortFiltersComponent = (function () {
    function SortFiltersComponent() {
        this.onSortChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SortFiltersComponent.prototype.ngOnInit = function () {
    };
    SortFiltersComponent.prototype.onSelectChange = function ($event) {
        this.onSortChange.emit($event.target.value);
    };
    return SortFiltersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SortFiltersComponent.prototype, "filters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SortFiltersComponent.prototype, "onSortChange", void 0);
SortFiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sort-filters',
        template: __webpack_require__("../../../../../src/app/home/deals/sort-filters/sort-filters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/deals/sort-filters/sort-filters.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SortFiltersComponent);

//# sourceMappingURL=sort-filters.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homedashboard_homedashboard_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/homedashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__ = __webpack_require__("../../../../../src/app/home/deals/deals-category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        children: [
            {
                path: 'index',
                component: __WEBPACK_IMPORTED_MODULE_3__homedashboard_homedashboard_component__["a" /* HomeDashboardComponent */]
            },
            {
                path: 'deals',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: 'deals-food/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: 'deals-wellness/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: 'deals-spa/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: 'deals-entertainment/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: 'deals-travel/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: 'deals-shopping/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_deals_category_component__["a" /* DealsCategoryComponent */]
            },
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full',
            }
        ],
    }];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_menu__ = __webpack_require__("../../../../../src/app/home/home-menu.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__home_menu__["a" /* MENU_ITEMS */];
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-home',
        template: "\n    <ngx-home-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-home-layout>\n  ",
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homedashboard_homedashboard_module__ = __webpack_require__("../../../../../src/app/home/homedashboard/homedashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deals_deals_category_module__ = __webpack_require__("../../../../../src/app/home/deals/deals-category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HOME_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_2__homedashboard_homedashboard_module__["a" /* HomeDashboardModule */],
            __WEBPACK_IMPORTED_MODULE_3__deals_deals_category_module__["a" /* DealsCategoryModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbAlertModule */].forRoot(),
        ],
        declarations: [
            HOME_COMPONENTS,
        ],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/dealsummary/dealsummary-chart/dealsummary-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealSummarychartsPieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealSummarychartsPieComponent = (function () {
    function DealSummarychartsPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Active Deals', 'InActive Deals', 'InComplete Deals'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    DealSummarychartsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return DealSummarychartsPieComponent;
}());
DealSummarychartsPieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-pie',
        template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _a || Object])
], DealSummarychartsPieComponent);

var _a;
//# sourceMappingURL=dealsummary-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/dealsummary/dealsummary.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\r\n  <nb-tabset fullWidth>\r\n    <nb-tab tabTitle=\"Deals Details\">\r\n        <ngx-chartjs-pie></ngx-chartjs-pie>  \r\n    </nb-tab>       \r\n  </nb-tabset>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/dealsummary/dealsummary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-default) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-default) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    position: relative;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-default) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a4abb3;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container .desc {\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container.off .value {\n    color: #a4abb3;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-default) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-default) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-default) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .btn-icon.active {\n    border-color: #40dc7e;\n    color: #40dc7e; }\n  :host-context(.nb-theme-default) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-default) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-default) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-cosmic) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-cosmic) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    position: relative;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a1a1e5;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .desc {\n    color: #a1a1e5;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .value {\n    color: #a1a1e5;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .btn-icon.active {\n    border-color: #00f9a6;\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n:host-context(.nb-theme-cosmic) .btn-icon.active {\n  color: #ffffff;\n  border-color: #00f9a6;\n  box-shadow: 0 2px 12px 0 rgba(0, 249, 166, 0.25);\n  background-color: rgba(0, 249, 166, 0.25); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-cosmic) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-cosmic) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/dealsummary/dealsummary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealSummaryComponent = (function () {
    function DealSummaryComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.temperature = 24;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidity = 87;
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            _this.colors = config.variables;
        });
    }
    DealSummaryComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return DealSummaryComponent;
}());
DealSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dealsummary',
        styles: [__webpack_require__("../../../../../src/app/home/homedashboard/dealsummary/dealsummary.component.scss")],
        template: __webpack_require__("../../../../../src/app/home/homedashboard/dealsummary/dealsummary.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _a || Object])
], DealSummaryComponent);

var _a;
//# sourceMappingURL=dealsummary.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph-chart/downloadgraph-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-default) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph-chart/downloadgraph-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadGraphChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadGraphChartComponent = (function () {
    function DownloadGraphChartComponent(theme) {
        this.theme = theme;
        var points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
            720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
            145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
            340, 340, 340, 340, 340, 340, 340, 340];
        // const points = [];
        // let pointsCount = 100;
        // let min = -3;
        // let max = 3;
        // let xStep = (max - min) / pointsCount;
        //
        // for(let x = -3; x <= 3; x += xStep) {
        //   let res = x**3 - 5*x + 17;
        //   points.push(Math.round(res * 25));
        // }
        this.data = points.map(function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); });
    }
    DownloadGraphChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} rs',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: eTheme.xAxisTextColor,
                            fontSize: 18,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    DownloadGraphChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return DownloadGraphChartComponent;
}());
DownloadGraphChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-downloadgraph-chart',
        styles: [__webpack_require__("../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph-chart/downloadgraph-chart.component.scss")],
        template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _a || Object])
], DownloadGraphChartComponent);

var _a;
//# sourceMappingURL=downloadgraph-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\r\n<!--   <div class=\"consumption-table\">\r\n    <div class=\"table-header\">\r\n      <div>Deals</div>\r\n      <div class=\"subtitle\">Download</div>\r\n    </div>\r\n\r\n    <nb-tabset fullWidth>\r\n      <nb-tab *ngFor=\"let year of data\" [tabTitle]=\"year.title\" [active]=\"year.active\">\r\n        <div class=\"stats-month\" *ngFor=\"let month of year.months\">\r\n          <div>\r\n            <span class=\"month\">{{ month.month }}</span>\r\n            <span class=\"delta\" [ngClass]=\"{ 'down': month.down }\">{{ month.delta }}</span>\r\n          </div>\r\n          <div class=\"results\">\r\n            <b>{{ month.kWatts }}</b> RS / <b>{{ month.cost }}</b> RS\r\n          </div>\r\n        </div>\r\n      </nb-tab>\r\n    </nb-tabset>\r\n  </div> -->\r\n\r\n  <div class=\"chart-container\">\r\n    <div class=\"chart-header\">\r\n      <div class=\"header-stats\">\r\n        \r\n\r\n        <div class=\"stats-block\">\r\n          <div class=\"subtitle\">Total Amount </div>\r\n          <div>\r\n            <span class=\"value\">2900</span>\r\n            <span class=\"unit\">RS</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"stats-block\">\r\n          <div class=\"subtitle\">Spent Amount </div>\r\n          <div>\r\n            <span class=\"value\">816</span>\r\n            <span class=\"unit\">RS</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div ngbDropdown>\r\n        <button type=\"button\" ngbDropdownToggle class=\"btn\"\r\n                [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\r\n          {{ type }}\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n    <ngx-downloadgraph-chart></ngx-downloadgraph-chart>\r\n  </div>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 2px 12px 0 #dfe3eb; }\n\n:host-context(.nb-theme-default) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-default) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header .subtitle {\n    color: #a4abb3;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #ebeff5;\n    border-radius: 0.375rem 0.375rem 0 0; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #40dc7e; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-default) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .stats-month:not(:first-child) {\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff6780; }\n    :host-context(.nb-theme-default) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff6780; }\n    :host-context(.nb-theme-default) .stats-month .delta.down {\n      color: #5de191; }\n      :host-context(.nb-theme-default) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #5de191;\n        border-bottom: none; }\n  :host-context(.nb-theme-default) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-default) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-default) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a4abb3;\n  padding: 0 1.5rem;\n  border-right: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 130px; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-default) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-default) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-default) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-default) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-default) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) .stats-block .unit {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6); }\n\n:host-context(.nb-theme-cosmic) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header .subtitle {\n    color: #a1a1e5;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #2f296b;\n    border-radius: 0.5rem 0.5rem 0 0; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #00d977; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-cosmic) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .stats-month:not(:first-child) {\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta.down {\n      color: #26df8b; }\n      :host-context(.nb-theme-cosmic) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #26df8b;\n        border-bottom: none; }\n  :host-context(.nb-theme-cosmic) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-cosmic) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-cosmic) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a1a1e5;\n  padding: 0 1.5rem;\n  border-right: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 130px; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n  background-color: #7659ff;\n  border-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .stats-block .value {\n  font-weight: 500; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-cosmic) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .unit {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__ = __webpack_require__("../../../../../src/app/@core/data/electricity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadGraphComponent = (function () {
    function DownloadGraphComponent(eService, themeService) {
        var _this = this;
        this.eService = eService;
        this.themeService = themeService;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.data = eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    DownloadGraphComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return DownloadGraphComponent;
}());
DownloadGraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-downloadgraph',
        styles: [__webpack_require__("../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph.component.scss")],
        template: __webpack_require__("../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__["a" /* ElectricityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__["a" /* ElectricityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _b || Object])
], DownloadGraphComponent);

var _a, _b;
//# sourceMappingURL=downloadgraph.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/homedashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row slider\">\r\n    <div class=\"col-md-12\">\r\n        <ngb-carousel>\r\n            <ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n                <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\r\n                <div class=\"carousel-caption\">\r\n                    <h3>{{slider.label}}</h3>\r\n                    <p>{{slider.text}}</p>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-carousel>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <h2 class=\"section-header\">Our Deals</h2></div>\r\n</div>\r\n<section class=\"food\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-header-cat\">\r\n            <h4 class=\"float-md-left\"><a href=\"#/home/deals-food/1\"><i class=\"fa fa-cutlery\"></i> Deals in Food & Beverages</a></h4>\r\n            <a class=\"float-md-right\" href=\"#/home/deals-food/1\"><span>View all</span></a>\r\n        </div>\r\n        <hr/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div ng-multiplecarousel class=\"slides-wrapper\" [items]=\"items\" [width]=\"sliderWidth\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"wellness\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-header-cat\">\r\n            <h4 class=\"float-md-left\"><a href=\"#/home/deals-wellness/2\"><i class=\"fa fa-heartbeat\"></i> Deals in Wellness</a></h4>\r\n            <a class=\"float-md-right\" href=\"#/home/deals-wellness/2\"><span>View all</span></a>\r\n        </div>\r\n        <hr/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div ng-multiplecarousel class=\"slides-wrapper\" [items]=\"items\" [width]=\"sliderWidth\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"spa\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-header-cat\">\r\n            <h4 class=\"float-md-left\"><a href=\"#/home/deals-spa/3\"><i class=\"fa fa-bath\"></i> Deals in SPA</a></h4>\r\n            <a class=\"float-md-right\" href=\"#/home/deals-spa/3\"><span>View all</span></a>\r\n        </div>\r\n        <hr/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div ng-multiplecarousel class=\"slides-wrapper\" [items]=\"items\" [width]=\"sliderWidth\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"entertainment\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-header-cat\">\r\n            <h4 class=\"float-md-left\"><a href=\"#/home/deals-entertainment/4\"><i class=\"fa fa-film\"></i> Deals in Entertainment</a></h4>\r\n            <a class=\"float-md-right\" href=\"#/home/deals-entertainment/4\"><span>View all</span></a>\r\n        </div>\r\n        <hr/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div ng-multiplecarousel class=\"slides-wrapper\" [items]=\"items\" [width]=\"sliderWidth\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"travel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-header-cat\">\r\n            <h4 class=\"float-md-left\"><a href=\"#/home/deals-travel/5\"><i class=\"fa fa-plane\"></i> Deals in Travels</a></h4>\r\n            <a class=\"float-md-right\" href=\"#/home/deals-travel/5\"><span>View all</span></a>\r\n        </div>\r\n        <hr/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div ng-multiplecarousel class=\"slides-wrapper\" [items]=\"items\" [width]=\"sliderWidth\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"shopping\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"section-header-cat\">\r\n            <h4 class=\"float-md-left\"><a href=\"#/home/deals-shopping/6\"><i class=\"fa fa-shopping-bag\"></i> Deals in E-Shopping</a></h4>\r\n            <a class=\"float-md-right\" href=\"#/home/deals-shopping/6\"><span>View all</span></a>\r\n        </div>\r\n        <hr/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div ng-multiplecarousel class=\"slides-wrapper\" [items]=\"items\" [width]=\"sliderWidth\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #prev>\r\n    <i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i>\r\n</ng-template>\r\n<ng-template #next>\r\n    <i class=\"fa fa-chevron-circle-right\" aria-hidden=\"true\"></i>\r\n</ng-template>\r\n<ng-template #item let-item let-i=\"index\">\r\n    <div class=\"categoryItem\">\r\n        <div class=\"wrapper\" [class.unavailable]='!item.available'>\r\n            <div class=\"info\">\r\n                <div class=\"img-wrapper\">\r\n                    <img class=\"img\" [src]='item.images[0]'>\r\n                    <div class=\"img-placeholder\"></div>\r\n                </div>\r\n                <h5 class=\"title\">{{item.name}}</h5>\r\n                <p class=\"price\"><span>{{item.discount}}</span> % Discount</p>\r\n            </div>\r\n            <div class=\"bestseller-badge\" [class.in-detailed]='detailViewActive' *ngIf='item.best_seller'>\r\n                <span class=\"star left\">&nbsp;</span>\r\n                <span class=\"txt\">Bestoffer</span>\r\n                <span class=\"star right\">&nbsp;</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<!-- <div class=\"row home-category-section\">\r\n    <div class=\"col-md-12\">\r\n        <ul>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-food\">\r\n                    <a href=\"#/home/deals-food/1\" class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-cutlery\"></i></span></div>\r\n                        <div class=\"cat-title\">Deals in Food & Beverages</div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-wellness\">\r\n                    <a href=\"#/home/deals-wellness/2\" class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-heartbeat\"></i></span></div>\r\n                        <div class=\"cat-title\">Deals in Wellness</div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-spa\">\r\n                    <a href=\"#/home/deals-spa/3\" class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-bath\"></i></span></div>\r\n                        <div class=\"cat-title\">Deals in SPA</div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-entertainment\">\r\n                    <a href=\"#/home/deals-entertainment/4\" class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-film\"></i></span></div>\r\n                        <div class=\"cat-title\">Deals in Entertainment</div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-travels\">\r\n                    <a href=\"#/home/deals-travel/5\" class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-plane\"></i></span></div>\r\n                        <div class=\"cat-title\">Deals in Travels</div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-shopping\">\r\n                    <a href=\"#/home/deals-shopping/6\" class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-shopping-bag\"></i></span></div>\r\n                        <div class=\"cat-title\">Deals in E-Shopping</div>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div> -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <h2 class=\"section-header\">Other Services</h2></div>\r\n</div>\r\n<div class=\"home-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xxxl-2 col-md-2\">\r\n            <ngx-status-card title=\"Car Wash\" value=\"\" type=\"info\">\r\n                <i class=\"fa fa-car\"></i>\r\n            </ngx-status-card>\r\n        </div>\r\n        <div class=\"col-xxxl-2 col-md-2\">\r\n            <ngx-status-card title=\"Pest Control\" value=\"\" type=\"info\">\r\n                <i class=\"fa fa-fire-extinguisher\"></i>\r\n            </ngx-status-card>\r\n        </div>\r\n        <div class=\"col-xxxl-2 col-md-2\">\r\n            <ngx-status-card title=\"Photography\" value=\"\" type=\"info\">\r\n                <i class=\"fa fa-camera\"></i>\r\n            </ngx-status-card>\r\n        </div>\r\n        <div class=\"col-xxxl-2 col-md-2\">\r\n            <ngx-status-card title=\"Dance & Music Classes\" value=\"\" type=\"info\">\r\n                <i class=\"fa fa-music\"></i>\r\n            </ngx-status-card>\r\n        </div>\r\n        <div class=\"col-xxxl-2 col-md-2\">\r\n            <ngx-status-card title=\"Flower & Cake Delivary\" value=\"\" type=\"info\">\r\n                <i class=\"fa fa-truck\"></i>\r\n            </ngx-status-card>\r\n        </div>\r\n        <div class=\"col-xxxl-2 col-md-2\">\r\n            <ngx-status-card title=\"Coaching Classes\" value=\"\" type=\"info\">\r\n                <i class=\"fa fa-certificate\"></i>\r\n            </ngx-status-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <h2 class=\"section-header\">Why YofferZ.com ?</h2></div>\r\n</div>\r\n<div class=\"row home-category-section cat-why-section\">\r\n    <div class=\"col-md-12\">\r\n        <ul>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-why\">\r\n                    <div class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-cloud-download\"></i></span></div>\r\n                        <div class=\"cat-title\">FREE Download!</div>\r\n                        <div class=\"cat-sub\">All of our coupons are completely free to download.</div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-why\">\r\n                    <div class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-bell\"></i></span></div>\r\n                        <div class=\"cat-title\">Crazy Discount Offerz!</div>\r\n                        <div class=\"cat-sub\">We work Hard to bring you exclusive discounted Offers you won't find anywhere else!</div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-why\">\r\n                    <div class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-shopping-cart\"></i></span></div>\r\n                        <div class=\"cat-title\">My Shops</div>\r\n                        <div class=\"cat-sub\">Find your favorite shops online</div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-why\">\r\n                    <div class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-sign-in\"></i></span></div>\r\n                        <div class=\"cat-title\">Easy Registration</div>\r\n                        <div class=\"cat-sub\">Easy registration process helps business to grow Online.</div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-why\">\r\n                    <div class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-download\"></i></span></div>\r\n                        <div class=\"cat-title\">Easy download</div>\r\n                        <div class=\"cat-sub\">No hassle: Enter your mobile no and OTP to get the discount Voucher</div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"categoryWrapper cat-why\">\r\n                    <div class=\"cat-section\">\r\n                        <div class=\"cat-icon\"><span><i class=\"fa fa-user\"></i></span></div>\r\n                        <div class=\"cat-title\">No Account Required</div>\r\n                        <div class=\"cat-sub\">Vouchers are available for all, no membership required.</div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/homedashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-default) .categoryItem {\n    min-width: calc(100%/4);\n    padding: 1rem; }\n  :host-context(.nb-theme-default) .solar-card nb-card-header {\n    border: none;\n    padding-bottom: 0; }\n  :host-context(.nb-theme-default) .home-container {\n    padding: 2rem; }\n  :host-context(.nb-theme-default) .section-header {\n    color: #25b15c;\n    text-align: center;\n    padding: 1rem 0;\n    border-bottom: 1px solid #a4abb3;\n    margin: 1% 0; }\n  :host-context(.nb-theme-default) .section-header-cat {\n    color: #25b15c;\n    text-align: left;\n    padding: 1rem 2rem;\n    margin: 1% 0; }\n  :host-context(.nb-theme-default) .slider .img-fluid {\n    max-height: 34rem; }\n  :host-context(.nb-theme-default) .cat-why-section {\n    background: url(/assets/images/category/footer2.jpg) no-repeat;\n    background-position: center;\n    background-size: cover; }\n  :host-context(.nb-theme-default) .home-category-section {\n    width: 100%;\n    padding: 0; }\n    :host-context(.nb-theme-default) .home-category-section li {\n      list-style: none; }\n      :host-context(.nb-theme-default) .home-category-section li .categoryWrapper {\n        width: calc(94% /3);\n        height: 17rem;\n        margin: 1%;\n        display: inline-block;\n        float: left;\n        position: relative; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-food {\n          background: url(/assets/images/category/food.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-wellness {\n          background: url(/assets/images/category/wellness.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-spa {\n          background: url(/assets/images/category/spa.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-entertainment {\n          background: url(/assets/images/category/entertainment.png) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-travels {\n          background: url(/assets/images/category/travel.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-default) .home-category-section li .categoryWrapper.cat-shopping {\n          background: url(/assets/images/category/shopping.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-section {\n        width: 100%;\n        height: 100%;\n        display: block;\n        position: relative;\n        background: rgba(93, 18, 18, 0.71); }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-section {\n        background: transparent; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-icon {\n        font-size: .8em;\n        bottom: 56%;\n        background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n        box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-title {\n        bottom: 34%; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-why .cat-sub {\n        position: absolute;\n        top: 69%;\n        text-align: center;\n        color: #fff;\n        width: 100%; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-icon {\n        color: #fff;\n        position: absolute;\n        bottom: 36%;\n        right: 36%;\n        padding: .5rem 1.5rem;\n        font-size: 1.2em;\n        background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n        box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98;\n        border-radius: 10%; }\n        :host-context(.nb-theme-default) .home-category-section li .cat-icon span {\n          font-size: 5em; }\n      :host-context(.nb-theme-default) .home-category-section li .cat-title {\n        color: #fff;\n        font-size: 2em;\n        bottom: 14%;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        position: absolute; }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) ngx-traffic {\n      display: none; }\n    :host-context(.nb-theme-default) .slider .img-fluid {\n      max-height: 24rem; }\n    :host-context(.nb-theme-default) .home-category-section li .categoryWrapper {\n      width: 100%;\n      margin-bottom: 1%; }\n    :host-context(.nb-theme-default) .home-category-section li .cat-icon {\n      bottom: 50%;\n      right: calc(90%/3); }\n      :host-context(.nb-theme-default) .home-category-section li .cat-icon span {\n        font-size: 3em; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n      height: 456px; } }\n  :host-context(.nb-theme-default) .wrapper {\n    border-radius: 5px;\n    box-shadow: 0 5px 5px;\n    position: relative;\n    text-align: center;\n    display: block;\n    background-color: white;\n    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n  :host-context(.nb-theme-default) .add-cart-wrapper, :host-context(.nb-theme-default) .view-details-wrapper {\n    margin-top: 0;\n    margin-bottom: 0; }\n  :host-context(.nb-theme-default) .view-details-wrapper {\n    position: relative; }\n    :host-context(.nb-theme-default) .view-details-wrapper:after {\n      content: \"\";\n      width: 1px;\n      display: block;\n      position: absolute;\n      height: 28px;\n      background-color: #5D4EF0;\n      right: -3px;\n      top: -4px;\n      opacity: 0.2; }\n  :host-context(.nb-theme-default) .hide-detail-btn {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    width: 100%;\n    z-index: 20;\n    background: none;\n    border: none;\n    color: white;\n    opacity: 0.6;\n    font-size: 0.7em;\n    font-weight: 600;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.1);\n    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    -webkit-transform: translateY(15px);\n    transform: translateY(15px);\n    transition-delay: 1.2s; }\n    :host-context(.nb-theme-default) .hide-detail-btn:hover {\n      background: rgba(255, 255, 255, 0.2); }\n  :host-context(.nb-theme-default) .img-wrapper {\n    height: 12rem;\n    position: relative;\n    overflow: hidden; }\n  :host-context(.nb-theme-default) .details {\n    margin: 1rem;\n    padding: 1rem; }\n    :host-context(.nb-theme-default) .details hr {\n      width: 90%;\n      height: 0;\n      border-top: 1px solid #5cb85c; }\n    :host-context(.nb-theme-default) .details .view:hover, :host-context(.nb-theme-default) .details .cart:hover {\n      opacity: 0.8; }\n    :host-context(.nb-theme-default) .details .view {\n      text-transform: uppercase;\n      color: #5cb85c;\n      font-size: 0.85em;\n      font-weight: 500;\n      position: relative;\n      top: -1px;\n      left: -2px; }\n    :host-context(.nb-theme-default) .details .cart {\n      position: relative;\n      top: 2px; }\n    :host-context(.nb-theme-default) .details .not-available hr {\n      border-top: 1px solid #999999; }\n    :host-context(.nb-theme-default) .details .not-available p {\n      margin: 0;\n      margin-top: -7px;\n      position: relative;\n      top: 2px;\n      text-transform: uppercase;\n      font-size: 0.85em;\n      font-weight: 500;\n      padding-top: 5px;\n      padding-bottom: 3px; }\n  :host-context(.nb-theme-default) .img-placeholder, :host-context(.nb-theme-default) .img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    border-radius: 5px 5px 0 0; }\n  :host-context(.nb-theme-default) .img-placeholder {\n    z-index: 3;\n    height: 100%;\n    background: #dddddd; }\n  :host-context(.nb-theme-default) .detail-view {\n    position: absolute;\n    z-index: 30;\n    border-radius: 5px;\n    overflow: hidden;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    pointer-events: none; }\n    :host-context(.nb-theme-default) .detail-view.active {\n      pointer-events: all; }\n      :host-context(.nb-theme-default) .detail-view.active .hide-detail-btn {\n        -webkit-transform: translateY(0);\n        transform: translateY(0); }\n      :host-context(.nb-theme-default) .detail-view.active .info-wrapper {\n        opacity: 1; }\n      :host-context(.nb-theme-default) .detail-view.active .bg {\n        -webkit-transform: scale(232);\n        transform: scale(232); }\n      :host-context(.nb-theme-default) .detail-view.active .d-holder {\n        opacity: 1;\n        -webkit-transform: translate(0);\n        transform: translate(0);\n        transition: all 0.5s ease; }\n      :host-context(.nb-theme-default) .detail-view.active .d-title {\n        transition-delay: 0.4s; }\n      :host-context(.nb-theme-default) .detail-view.active .d-price {\n        transition-delay: 0.5s; }\n      :host-context(.nb-theme-default) .detail-view.active .d-description {\n        transition-delay: 0.6s; }\n    :host-context(.nb-theme-default) .detail-view .d-holder {\n      opacity: 0;\n      -webkit-transform: translateY(10px);\n      transform: translateY(10px);\n      transition: all 0.1s ease; }\n    :host-context(.nb-theme-default) .detail-view .d-title {\n      font-size: 1.3em;\n      font-weight: 600;\n      margin-bottom: 0;\n      margin-top: 5px; }\n    :host-context(.nb-theme-default) .detail-view .d-price {\n      margin-top: -7px;\n      font-size: 0.9em; }\n    :host-context(.nb-theme-default) .detail-view .d-description {\n      font-size: 0.9em;\n      line-height: 1.4em; }\n    :host-context(.nb-theme-default) .detail-view .info-wrapper {\n      position: relative;\n      z-index: 30;\n      color: white;\n      text-align: left;\n      padding-left: 14px;\n      padding-right: 14px;\n      height: 90%;\n      overflow: hidden; }\n    :host-context(.nb-theme-default) .detail-view .bg {\n      position: absolute;\n      bottom: -9px;\n      left: 43px;\n      height: 3px;\n      width: 3px;\n      border-radius: 50%;\n      z-index: 20;\n      background: #5cb85c;\n      transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  :host-context(.nb-theme-default) .info {\n    position: relative; }\n  :host-context(.nb-theme-default) .unavailable {\n    opacity: 0.3; }\n  :host-context(.nb-theme-default) .img {\n    z-index: 5;\n    height: auto;\n    background-color: #eeeeee; }\n  :host-context(.nb-theme-default) .title {\n    font-size: 1em;\n    margin-top: 18px;\n    font-weight: 600;\n    margin-bottom: 3px;\n    text-align: center;\n    word-wrap: break-word;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 0 .4rem; }\n  :host-context(.nb-theme-default) .price {\n    margin-bottom: 10px;\n    color: #999999;\n    font-size: 18px;\n    font-weight: 300;\n    margin-top: 0; }\n  :host-context(.nb-theme-default) .bestseller-badge {\n    position: absolute;\n    top: -10px;\n    border-radius: 10px;\n    background-color: #EF364C;\n    color: white;\n    font-size: 0.7em;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 70%;\n    z-index: 40;\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    overflow: hidden;\n    height: 20px;\n    transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n    :host-context(.nb-theme-default) .bestseller-badge .txt, :host-context(.nb-theme-default) .bestseller-badge .star {\n      transition: all 0.35s ease; }\n    :host-context(.nb-theme-default) .bestseller-badge .txt {\n      position: relative;\n      top: 4px; }\n    :host-context(.nb-theme-default) .bestseller-badge .star {\n      position: absolute;\n      top: 2px; }\n      :host-context(.nb-theme-default) .bestseller-badge .star.left {\n        left: 8px; }\n      :host-context(.nb-theme-default) .bestseller-badge .star.right {\n        right: 14px; }\n    :host-context(.nb-theme-default) .bestseller-badge.in-detailed {\n      box-shadow: 0 2px 7px transparent;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      top: 9px;\n      right: -80%;\n      background-color: #5cb85c; }\n      :host-context(.nb-theme-default) .bestseller-badge.in-detailed .right, :host-context(.nb-theme-default) .bestseller-badge.in-detailed .txt {\n        opacity: 0; }\n      :host-context(.nb-theme-default) .bestseller-badge.in-detailed .left {\n        left: 5px;\n        top: 2px; }\n  :host-context(.nb-theme-default) .sad-face {\n    border-radius: 50%;\n    background-color: #aaaaaa;\n    height: 90px;\n    width: 90px; }\n  :host-context(.nb-theme-default) .category-name {\n    display: inline-block;\n    margin-right: 10px; }\n  :host-context(.nb-theme-default) .star:before {\n    content: \"\\2605\";\n    position: absolute;\n    color: white; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-default) .categoryItem {\n      min-width: calc(100%); }\n    :host-context(.nb-theme-default) .detail-view.active .bg {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    :host-context(.nb-theme-default) .hide-detail-btn {\n      height: 32px;\n      -webkit-transform: translateY(32px);\n      transform: translateY(32px); }\n    :host-context(.nb-theme-default) .wrapper {\n      margin-bottom: -22px; }\n    :host-context(.nb-theme-default) .img-wrapper {\n      height: 14rem; }\n    :host-context(.nb-theme-default) .detail-view .bg {\n      width: 100%;\n      height: 100%;\n      border-radius: 0;\n      left: 0;\n      bottom: 0;\n      -webkit-transform: translateY(100%);\n      transform: translateY(100%); }\n    :host-context(.nb-theme-default) .detail-view .info-wrapper {\n      padding: 10px 25px;\n      height: 78%; } }\n\n:host-context(.nb-theme-cosmic) {\n  /** Media queries **/ }\n  :host-context(.nb-theme-cosmic) .categoryItem {\n    min-width: calc(100%/4);\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n    border: none;\n    padding-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .home-container {\n    padding: 2rem; }\n  :host-context(.nb-theme-cosmic) .section-header {\n    color: #25b15c;\n    text-align: center;\n    padding: 1rem 0;\n    border-bottom: 1px solid #a4abb3;\n    margin: 1% 0; }\n  :host-context(.nb-theme-cosmic) .section-header-cat {\n    color: #25b15c;\n    text-align: left;\n    padding: 1rem 2rem;\n    margin: 1% 0; }\n  :host-context(.nb-theme-cosmic) .slider .img-fluid {\n    max-height: 34rem; }\n  :host-context(.nb-theme-cosmic) .cat-why-section {\n    background: url(/assets/images/category/footer2.jpg) no-repeat;\n    background-position: center;\n    background-size: cover; }\n  :host-context(.nb-theme-cosmic) .home-category-section {\n    width: 100%;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .home-category-section li {\n      list-style: none; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper {\n        width: calc(94% /3);\n        height: 17rem;\n        margin: 1%;\n        display: inline-block;\n        float: left;\n        position: relative; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-food {\n          background: url(/assets/images/category/food.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-wellness {\n          background: url(/assets/images/category/wellness.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-spa {\n          background: url(/assets/images/category/spa.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-entertainment {\n          background: url(/assets/images/category/entertainment.png) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-travels {\n          background: url(/assets/images/category/travel.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper.cat-shopping {\n          background: url(/assets/images/category/shopping.jpg) no-repeat;\n          background-position: center;\n          background-size: cover; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-section {\n        width: 100%;\n        height: 100%;\n        display: block;\n        position: relative;\n        background: rgba(93, 18, 18, 0.71); }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-section {\n        background: transparent; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-icon {\n        font-size: .8em;\n        bottom: 56%;\n        background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n        box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-title {\n        bottom: 34%; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-why .cat-sub {\n        position: absolute;\n        top: 69%;\n        text-align: center;\n        color: #fff;\n        width: 100%; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon {\n        color: #fff;\n        position: absolute;\n        bottom: 36%;\n        right: 36%;\n        padding: .5rem 1.5rem;\n        font-size: 1.2em;\n        background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n        box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98;\n        border-radius: 10%; }\n        :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon span {\n          font-size: 5em; }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-title {\n        color: #fff;\n        font-size: 2em;\n        bottom: 14%;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        position: absolute; }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) ngx-traffic {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .slider .img-fluid {\n      max-height: 24rem; }\n    :host-context(.nb-theme-cosmic) .home-category-section li .categoryWrapper {\n      width: 100%;\n      margin-bottom: 1%; }\n    :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon {\n      bottom: 50%;\n      right: calc(90%/3); }\n      :host-context(.nb-theme-cosmic) .home-category-section li .cat-icon span {\n        font-size: 3em; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n      height: 456px; } }\n  :host-context(.nb-theme-cosmic) .wrapper {\n    border-radius: 5px;\n    box-shadow: 0 5px 5px;\n    position: relative;\n    text-align: center;\n    display: block;\n    background-color: white;\n    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n  :host-context(.nb-theme-cosmic) .add-cart-wrapper, :host-context(.nb-theme-cosmic) .view-details-wrapper {\n    margin-top: 0;\n    margin-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .view-details-wrapper {\n    position: relative; }\n    :host-context(.nb-theme-cosmic) .view-details-wrapper:after {\n      content: \"\";\n      width: 1px;\n      display: block;\n      position: absolute;\n      height: 28px;\n      background-color: #5D4EF0;\n      right: -3px;\n      top: -4px;\n      opacity: 0.2; }\n  :host-context(.nb-theme-cosmic) .hide-detail-btn {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    width: 100%;\n    z-index: 20;\n    background: none;\n    border: none;\n    color: white;\n    opacity: 0.6;\n    font-size: 0.7em;\n    font-weight: 600;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.1);\n    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    -webkit-transform: translateY(15px);\n    transform: translateY(15px);\n    transition-delay: 1.2s; }\n    :host-context(.nb-theme-cosmic) .hide-detail-btn:hover {\n      background: rgba(255, 255, 255, 0.2); }\n  :host-context(.nb-theme-cosmic) .img-wrapper {\n    height: 12rem;\n    position: relative;\n    overflow: hidden; }\n  :host-context(.nb-theme-cosmic) .details {\n    margin: 1rem;\n    padding: 1rem; }\n    :host-context(.nb-theme-cosmic) .details hr {\n      width: 90%;\n      height: 0;\n      border-top: 1px solid #5cb85c; }\n    :host-context(.nb-theme-cosmic) .details .view:hover, :host-context(.nb-theme-cosmic) .details .cart:hover {\n      opacity: 0.8; }\n    :host-context(.nb-theme-cosmic) .details .view {\n      text-transform: uppercase;\n      color: #5cb85c;\n      font-size: 0.85em;\n      font-weight: 500;\n      position: relative;\n      top: -1px;\n      left: -2px; }\n    :host-context(.nb-theme-cosmic) .details .cart {\n      position: relative;\n      top: 2px; }\n    :host-context(.nb-theme-cosmic) .details .not-available hr {\n      border-top: 1px solid #999999; }\n    :host-context(.nb-theme-cosmic) .details .not-available p {\n      margin: 0;\n      margin-top: -7px;\n      position: relative;\n      top: 2px;\n      text-transform: uppercase;\n      font-size: 0.85em;\n      font-weight: 500;\n      padding-top: 5px;\n      padding-bottom: 3px; }\n  :host-context(.nb-theme-cosmic) .img-placeholder, :host-context(.nb-theme-cosmic) .img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    border-radius: 5px 5px 0 0; }\n  :host-context(.nb-theme-cosmic) .img-placeholder {\n    z-index: 3;\n    height: 100%;\n    background: #dddddd; }\n  :host-context(.nb-theme-cosmic) .detail-view {\n    position: absolute;\n    z-index: 30;\n    border-radius: 5px;\n    overflow: hidden;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    pointer-events: none; }\n    :host-context(.nb-theme-cosmic) .detail-view.active {\n      pointer-events: all; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .hide-detail-btn {\n        -webkit-transform: translateY(0);\n        transform: translateY(0); }\n      :host-context(.nb-theme-cosmic) .detail-view.active .info-wrapper {\n        opacity: 1; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .bg {\n        -webkit-transform: scale(232);\n        transform: scale(232); }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-holder {\n        opacity: 1;\n        -webkit-transform: translate(0);\n        transform: translate(0);\n        transition: all 0.5s ease; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-title {\n        transition-delay: 0.4s; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-price {\n        transition-delay: 0.5s; }\n      :host-context(.nb-theme-cosmic) .detail-view.active .d-description {\n        transition-delay: 0.6s; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-holder {\n      opacity: 0;\n      -webkit-transform: translateY(10px);\n      transform: translateY(10px);\n      transition: all 0.1s ease; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-title {\n      font-size: 1.3em;\n      font-weight: 600;\n      margin-bottom: 0;\n      margin-top: 5px; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-price {\n      margin-top: -7px;\n      font-size: 0.9em; }\n    :host-context(.nb-theme-cosmic) .detail-view .d-description {\n      font-size: 0.9em;\n      line-height: 1.4em; }\n    :host-context(.nb-theme-cosmic) .detail-view .info-wrapper {\n      position: relative;\n      z-index: 30;\n      color: white;\n      text-align: left;\n      padding-left: 14px;\n      padding-right: 14px;\n      height: 90%;\n      overflow: hidden; }\n    :host-context(.nb-theme-cosmic) .detail-view .bg {\n      position: absolute;\n      bottom: -9px;\n      left: 43px;\n      height: 3px;\n      width: 3px;\n      border-radius: 50%;\n      z-index: 20;\n      background: #5cb85c;\n      transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  :host-context(.nb-theme-cosmic) .info {\n    position: relative; }\n  :host-context(.nb-theme-cosmic) .unavailable {\n    opacity: 0.3; }\n  :host-context(.nb-theme-cosmic) .img {\n    z-index: 5;\n    height: auto;\n    background-color: #eeeeee; }\n  :host-context(.nb-theme-cosmic) .title {\n    font-size: 1em;\n    margin-top: 18px;\n    font-weight: 600;\n    margin-bottom: 3px;\n    text-align: center;\n    word-wrap: break-word;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 0 .4rem; }\n  :host-context(.nb-theme-cosmic) .price {\n    margin-bottom: 10px;\n    color: #999999;\n    font-size: 18px;\n    font-weight: 300;\n    margin-top: 0; }\n  :host-context(.nb-theme-cosmic) .bestseller-badge {\n    position: absolute;\n    top: -10px;\n    border-radius: 10px;\n    background-color: #EF364C;\n    color: white;\n    font-size: 0.7em;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 70%;\n    z-index: 40;\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    overflow: hidden;\n    height: 20px;\n    transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n    :host-context(.nb-theme-cosmic) .bestseller-badge .txt, :host-context(.nb-theme-cosmic) .bestseller-badge .star {\n      transition: all 0.35s ease; }\n    :host-context(.nb-theme-cosmic) .bestseller-badge .txt {\n      position: relative;\n      top: 4px; }\n    :host-context(.nb-theme-cosmic) .bestseller-badge .star {\n      position: absolute;\n      top: 2px; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge .star.left {\n        left: 8px; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge .star.right {\n        right: 14px; }\n    :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed {\n      box-shadow: 0 2px 7px transparent;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      top: 9px;\n      right: -80%;\n      background-color: #5cb85c; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed .right, :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed .txt {\n        opacity: 0; }\n      :host-context(.nb-theme-cosmic) .bestseller-badge.in-detailed .left {\n        left: 5px;\n        top: 2px; }\n  :host-context(.nb-theme-cosmic) .sad-face {\n    border-radius: 50%;\n    background-color: #aaaaaa;\n    height: 90px;\n    width: 90px; }\n  :host-context(.nb-theme-cosmic) .category-name {\n    display: inline-block;\n    margin-right: 10px; }\n  :host-context(.nb-theme-cosmic) .star:before {\n    content: \"\\2605\";\n    position: absolute;\n    color: white; }\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n    :host-context(.nb-theme-cosmic) .categoryItem {\n      min-width: calc(100%); }\n    :host-context(.nb-theme-cosmic) .detail-view.active .bg {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    :host-context(.nb-theme-cosmic) .hide-detail-btn {\n      height: 32px;\n      -webkit-transform: translateY(32px);\n      transform: translateY(32px); }\n    :host-context(.nb-theme-cosmic) .wrapper {\n      margin-bottom: -22px; }\n    :host-context(.nb-theme-cosmic) .img-wrapper {\n      height: 14rem; }\n    :host-context(.nb-theme-cosmic) .detail-view .bg {\n      width: 100%;\n      height: 100%;\n      border-radius: 0;\n      left: 0;\n      bottom: 0;\n      -webkit-transform: translateY(100%);\n      transform: translateY(100%); }\n    :host-context(.nb-theme-cosmic) .detail-view .info-wrapper {\n      padding: 10px 25px;\n      height: 78%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/homedashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deals_dealdata_service__ = __webpack_require__("../../../../../src/app/home/deals/dealdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeDashboardComponent = (function () {
    function HomeDashboardComponent(dataService) {
        this.dataService = dataService;
        this.sliders = [];
        this.items = [];
        this.sliderWidth = outerWidth - 80;
        this.sliders.push({
            imagePath: 'assets/images/camera1.jpg',
            label: 'First slide label',
            text: 'First'
        }, {
            imagePath: 'assets/images/camera2.jpg',
            label: 'Second slide label',
            text: 'Second'
        }, {
            imagePath: 'assets/images/camera3.jpg',
            label: 'Third slide label',
            text: 'Third'
        });
    }
    HomeDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().then(function (data) {
            _this.items = data.deals;
        });
    };
    return HomeDashboardComponent;
}());
HomeDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dashboard',
        styles: [__webpack_require__("../../../../../src/app/home/homedashboard/homedashboard.component.scss")],
        template: __webpack_require__("../../../../../src/app/home/homedashboard/homedashboard.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__deals_dealdata_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__deals_dealdata_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeDashboardComponent);

var _a;
//# sourceMappingURL=homedashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/homedashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homedashboard_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/homedashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_card_status_card_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/status-card/status-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dealsummary_dealsummary_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/dealsummary/dealsummary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dealsummary_dealsummary_chart_dealsummary_chart_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/dealsummary/dealsummary-chart/dealsummary-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__downloadgraph_downloadgraph_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__downloadgraph_downloadgraph_chart_downloadgraph_chart_component__ = __webpack_require__("../../../../../src/app/home/homedashboard/downloadgraph/downloadgraph-chart/downloadgraph-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deals_dealdata_service__ = __webpack_require__("../../../../../src/app/home/deals/dealdata.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeDashboardModule = (function () {
    function HomeDashboardModule() {
    }
    return HomeDashboardModule;
}());
HomeDashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["c" /* NgbAlertModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__homedashboard_component__["a" /* HomeDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__status_card_status_card_component__["a" /* StatusCardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dealsummary_dealsummary_component__["a" /* DealSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__downloadgraph_downloadgraph_component__["a" /* DownloadGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_10__downloadgraph_downloadgraph_chart_downloadgraph_chart_component__["a" /* DownloadGraphChartComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dealsummary_dealsummary_chart_dealsummary_chart_component__["a" /* DealSummarychartsPieComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__deals_dealdata_service__["a" /* DataService */]
        ],
    })
], HomeDashboardModule);

//# sourceMappingURL=homedashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/status-card/status-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 7rem;\n  overflow: visible;\n  background: transparent;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 3.75rem;\n    height: 2.75rem;\n    font-size: 1.75rem;\n    border-radius: 0.375rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-default) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #b57fff, #8a7fff);\n      box-shadow: 0 0 0 0 #896ddb, 0 0 0 0 #9f7fff; }\n    :host-context(.nb-theme-default) nb-card .icon.success {\n      background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n      box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98; }\n    :host-context(.nb-theme-default) nb-card .icon.info {\n      background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n      box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n    :host-context(.nb-theme-default) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 0 0 0 #db9d00, 0 0 0 0 #ffb600; }\n  :host-context(.nb-theme-default) nb-card:hover {\n    background: white; }\n    :host-context(.nb-theme-default) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #bf91ff, #9a91ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #5be1bd, #5be190); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #65ccff, #65b2ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-default) nb-card.off {\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card.off .icon {\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card.off .icon.primary, :host-context(.nb-theme-default) nb-card.off .icon.success, :host-context(.nb-theme-default) nb-card.off .icon.info, :host-context(.nb-theme-default) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-default) nb-card.off .title {\n      color: #a4abb3; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 0.9rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 7rem;\n  overflow: visible;\n  background: transparent;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 3.75rem;\n    height: 2.75rem;\n    font-size: 1.75rem;\n    border-radius: 0.5rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #ad59ff, #7659ff);\n      box-shadow: 0 3px 0 0 #7e4ddb, 0 2px 8px 0 #9259ff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.success {\n      background-image: linear-gradient(to right, #00d9bf, #00d977);\n      box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.info {\n      background-image: linear-gradient(to right, #00b3ff, #0088ff);\n      box-shadow: 0 3px 0 0 #0087db, 0 2px 8px 0 #009dff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    background: #463f92; }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #b970ff, #8970ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #24dec8, #24de8a); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #24bdff, #2499ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-cosmic) nb-card.off {\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) nb-card.off .icon {\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) nb-card.off .icon.primary, :host-context(.nb-theme-cosmic) nb-card.off .icon.success, :host-context(.nb-theme-cosmic) nb-card.off .icon.info, :host-context(.nb-theme-cosmic) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-cosmic) nb-card.off .title {\n      color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 0.9rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) nb-card.off .icon-container {\n  border-right: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homedashboard/status-card/status-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusCardComponent = (function () {
    function StatusCardComponent() {
        this.on = true;
    }
    return StatusCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], StatusCardComponent.prototype, "on", void 0);
StatusCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-status-card',
        styles: [__webpack_require__("../../../../../src/app/home/homedashboard/status-card/status-card.component.scss")],
        template: "\n    <nb-card [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"status\">{{ title }}</div>\n        <div class=\"title\">{{ value }}</div>        \n      </div>\n    </nb-card>\n  ",
    })
], StatusCardComponent);

//# sourceMappingURL=status-card.component.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/throw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throw_1 = __webpack_require__("../../../../rxjs/observable/throw.js");
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "../../../../rxjs/observable/ErrorObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        subscriber.syncErrorThrowable = true;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;
//# sourceMappingURL=ErrorObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/throw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__("../../../../rxjs/observable/ErrorObservable.js");
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map