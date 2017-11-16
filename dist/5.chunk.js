webpackJsonp([5],{

/***/ "../../../../../src/app/merchants/deals/deals-edit/deals-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card class=\"inline-form-card\">\r\n            <nb-card-header>{{DealType}} Deals                \r\n            </nb-card-header>\r\n        </nb-card>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card class=\"inline-form-card\">\r\n            <nb-card-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Deal Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputDealName\" placeholder=\"Deal Name\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">                        \r\n                            <label for=\"inputLastName\">Outlet</label>\r\n                            <div class=\"btn-group btn-group-full-width\">                                \r\n                                <ss-multiselect-dropdown [options]=\"myOptionsOutlet\" [texts]=\"myTexts\" [settings]=\"mySettings\" [(ngModel)]=\"optionsOutletModel\"></ss-multiselect-dropdown>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputEmail\">Category</label>\r\n                            <select class=\"form-control\" placeholder=\"Select Category\">\r\n                                <option>Minsk</option>\r\n                                <option>Gomel</option>\r\n                                <option>Brest</option>\r\n                                <option>Grodno</option>\r\n                                <option>Mogilev</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputWebsite\">Sub Category</label>\r\n                            <select class=\"form-control\" placeholder=\"Select sub category\">\r\n                                <option>Minsk</option>\r\n                                <option>Gomel</option>\r\n                                <option>Brest</option>\r\n                                <option>Grodno</option>\r\n                                <option>Mogilev</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </nb-card-body>\r\n        </nb-card>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card class=\"inline-form-card\">\r\n            <!-- <nb-card-header>Offer Details</nb-card-header> -->\r\n            <nb-card-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">offer type</label>\r\n                            <select class=\"form-control\" [(ngModel)]=\"offerType\">\r\n                                <option value=\"0\">Select offer type</option>\r\n                                <option value=\"1\">Flat Discount</option>\r\n                                <option value=\"2\">Minimum Discount</option>\r\n                                <option value=\"3\">Buy/Get Discount</option>\r\n                                <option value=\"4\">Package Campaign/Deal</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 1) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">% Discount On</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"% Discount On\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 1) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Select option</label>\r\n                            <select class=\"form-control\">\r\n                                <option>Total bill</option>\r\n                                <option>Food Only</option>\r\n                                <option>Drink Only</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 2) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Get Rs.</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"Get Rs.\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 2) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Off on a Minimum bill of</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"Off on a Minimum bill of\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 3) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Buy</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"Buy\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 3) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Get Free</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"Get Free\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 4) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Discount (%)</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\" Discount (%)\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\" [style.display]=\"(offerType == 4) ? 'block' : 'none'\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Offer Description</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"Offer Description\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Offer Details</label>\r\n                            <textarea rows=\"2\" placeholder=\"Offer Details\" class=\"form-control\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Coupon Valid From</label>\r\n                            <input type=\"date\" class=\"form-control full-width\" placeholder=\"From Date\">                           \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Coupon Valid Till</label>\r\n                            <input type=\"date\" class=\"form-control full-width\" placeholder=\"To Date\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Fund Allocation (Balance : Rs 1000)</label>\r\n                            <input type=\"text\" class=\"form-control full-width\" placeholder=\"Amount\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </nb-card-body>\r\n        </nb-card>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card class=\"inline-form-card\">\r\n            <nb-card-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputFirstName\">Days Allocation</label>\r\n                            <select class=\"form-control\" placeholder=\"Select Outlet\">\r\n                                <option>Week Days</option>\r\n                                <option>Weekend</option>\r\n                                <option>All Days</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputLastName\">Select Photo(s)</label>\r\n                            <select class=\"form-control\" placeholder=\"Select Outlet\">\r\n                                <option>image 1</option>\r\n                                <option>image 2</option>\r\n                                <option>image 3</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"inputEmail\">Terms and Condition</label>\r\n                            <textarea rows=\"2\" placeholder=\"Terms and Condition\" class=\"form-control\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </nb-card-body>\r\n        </nb-card>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card class=\"inline-form-card\">\r\n            <nb-card-header>\r\n                <div class=\"row\">                   \r\n                    <div class=\"col-sm-12 btn-deals\">\r\n                        <button class=\"btn btn-success btn-semi-round btn-sm\">Save as Draft</button>\r\n                        <button class=\"btn btn-success btn-semi-round btn-sm\">Go Live</button>\r\n                    </div>\r\n                </div>\r\n            </nb-card-header>\r\n        </nb-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals-edit/deals-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n\n.btn-deals {\n  text-align: right; }\n\n.btn-custom {\n  display: block; }\n\n.btn1 {\n  width: calc(100%);\n  text-align: left;\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.125rem;\n  color: #2a2a2a;\n  background-color: #ffffff;\n  border: 2px solid #dadfe6;\n  font-family: Roboto;\n  border-radius: 0.375rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals-edit/deals-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealsEditComponent = (function () {
    function DealsEditComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.offerType = 1;
        this.DealType = 'Create';
        // Default selection
        this.optionsOutletModel = [2, 3, 4, 6];
        // Settings configuration
        this.mySettings = {
            buttonClasses: 'btn btn-hero-secondary',
            dynamicTitleMaxItems: 4
        };
        // Text configuration
        this.myTexts = {};
        // Labels / Parents
        this.myOptionsOutlet = [
            { id: 2, name: 'Volvo', parentId: 1 },
            { id: 3, name: 'Honda', parentId: 1 },
            { id: 4, name: 'BMW', parentId: 1 },
            { id: 6, name: 'Blue', parentId: 5 },
            { id: 7, name: 'Red', parentId: 5 },
            { id: 8, name: 'White', parentId: 5 }
        ];
        this.params = this.activatedRoute.snapshot.params;
        console.log(this.params.id);
    }
    DealsEditComponent.prototype.ngOnInit = function () {
        console.log(this.params.id);
        if (this.params.id) {
            this.DealType = 'Edit';
        }
    };
    return DealsEditComponent;
}());
DealsEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-deals-edit',
        template: __webpack_require__("../../../../../src/app/merchants/deals/deals-edit/deals-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merchants/deals/deals-edit/deals-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DealsEditComponent);

var _a;
//# sourceMappingURL=deals-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals-list/deals-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    All Deals \r\n    <a href=\"/#/merchants/deals/edit\" style=\"position: absolute;right: 18px;top: 11px;\" class=\"btn btn-outline-success btn-sm\"><i class=\"nb-plus\"></i> Create Deals</a>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals-list/deals-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_deals_list_service__ = __webpack_require__("../../../../../src/app/@core/data/deals-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DealsListComponent = (function () {
    function DealsListComponent(service) {
        this.service = service;
        this.settings = {
            actions: {
                edit: false,
                delete: false,
                add: false
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    filter: false
                },
                startDate: {
                    title: 'Start Date',
                    type: 'string',
                    filter: false
                },
                endDate: {
                    title: 'End Date',
                    type: 'string',
                    filter: false
                },
                category: {
                    title: 'Category',
                    type: 'string',
                    filter: false
                },
                currentBalance: {
                    title: 'Balance',
                    type: 'string',
                    filter: false
                },
                createDate: {
                    title: 'Create Date',
                    type: 'string',
                    filter: false
                },
                previewDeal: {
                    title: 'Preview Deal',
                    type: 'html',
                    filter: false
                },
                status: {
                    title: 'Status',
                    type: 'string',
                    filter: false
                },
                actions: //or something
                {
                    title: 'Actions',
                    type: 'html',
                    valuePrepareFunction: function (cell, row) {
                        return "<div class=\"btn-group\">\n          <a title=\"Edit\" class=\"btn btn-primary btn-icon\" href=\"/#/merchants/deals/edit/" + row.id + "\"> \n          <i class=\"nb-edit\"></i> \n          <a title=\"Add Coupon\" class=\"btn btn-success btn-icon\" href=\"/#/merchants/deals/addcoupon/" + row.id + "\">\n           <i class=\"nb-plus\"></i>\n           </a></div>";
                    },
                    filter: false
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* LocalDataSource */]();
        var data = this.service.getData();
        this.source.load(data);
    }
    DealsListComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    return DealsListComponent;
}());
DealsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-deals-list',
        template: __webpack_require__("../../../../../src/app/merchants/deals/deals-list/deals-list.component.html"),
        styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n    nb-card-body{\n      tr.ng2-smart-filters th{\n        padding:0;\n      }\n    } \n\n  "],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_deals_list_service__["a" /* DealsListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_deals_list_service__["a" /* DealsListService */]) === "function" && _a || Object])
], DealsListComponent);

var _a;
//# sourceMappingURL=deals-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deals_component__ = __webpack_require__("../../../../../src/app/merchants/deals/deals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deals_list_deals_list_component__ = __webpack_require__("../../../../../src/app/merchants/deals/deals-list/deals-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deals_edit_deals_edit_component__ = __webpack_require__("../../../../../src/app/merchants/deals/deals-edit/deals-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__deals_component__["a" /* DealsComponent */],
        children: [{
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_3__deals_list_deals_list_component__["a" /* DealsListComponent */],
            }, {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_edit_deals_edit_component__["a" /* DealsEditComponent */],
            }, {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__deals_edit_deals_edit_component__["a" /* DealsEditComponent */],
            }],
    }];
var DealsRoutingModule = (function () {
    function DealsRoutingModule() {
    }
    return DealsRoutingModule;
}());
DealsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], DealsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__deals_component__["a" /* DealsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__deals_list_deals_list_component__["a" /* DealsListComponent */],
    __WEBPACK_IMPORTED_MODULE_4__deals_edit_deals_edit_component__["a" /* DealsEditComponent */]
];
//# sourceMappingURL=deals-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DealsComponent = (function () {
    function DealsComponent() {
    }
    return DealsComponent;
}());
DealsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-deals',
        template: "<router-outlet></router-outlet>",
    })
], DealsComponent);

//# sourceMappingURL=deals.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/deals/deals.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deals_routing_module__ = __webpack_require__("../../../../../src/app/merchants/deals/deals-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_deals_list_service__ = __webpack_require__("../../../../../src/app/@core/data/deals-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsModule", function() { return DealsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DealsModule = (function () {
    function DealsModule() {
    }
    return DealsModule;
}());
DealsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__deals_routing_module__["a" /* DealsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__deals_routing_module__["b" /* routedComponents */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core_data_deals_list_service__["a" /* DealsListService */],
        ],
    })
], DealsModule);

//# sourceMappingURL=deals.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map