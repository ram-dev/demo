webpackJsonp([4],{

/***/ "../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card>\r\n            <nb-card-header>\r\n                <h2 class=\"title\">Change password</h2>\r\n                <small class=\"form-text sub-title\">Please enter a new password</small>\r\n            </nb-card-header>\r\n            <nb-card-body>\r\n                <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\">\r\n                    <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <div><strong>Oh snap!</strong></div>\r\n                        <div *ngFor=\"let error of errors\">{{ error }}</div>\r\n                    </div>\r\n                    <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\r\n                        <div><strong>Hooray!</strong></div>\r\n                        <div *ngFor=\"let message of messages\">{{ message }}</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-oldpassword\" class=\"sr-only\">Old Password</label>\r\n                        <input name=\"oldpassword\" [(ngModel)]=\"user.oldpassword\" type=\"password\" id=\"input-oldpassword\" class=\"form-control form-control-lg first\" placeholder=\"Old Password\" #oldpassword=\"ngModel\" [class.form-control-danger]=\"oldpassword.invalid && oldpassword.touched\" [required]=\"getConfigValue('forms.validation.oldpassword.required')\" [minlength]=\"getConfigValue('forms.validation.oldpassword.minLength')\" [maxlength]=\"getConfigValue('forms.validation.oldpassword.maxLength')\" autofocus>\r\n                        <small class=\"form-text error\" *ngIf=\"oldpassword.invalid && oldpassword.touched && oldpassword.errors?.required\">\r\n            Old Password is required!\r\n          </small>\r\n                        <small class=\"form-text error\" *ngIf=\"oldpassword.invalid && oldpassword.touched && (oldpassword.errors?.minlength || oldpassword.errors?.maxlength)\">\r\n            Password should contains\r\n            from {{getConfigValue('forms.validation.oldpassword.minLength')}}\r\n            to {{getConfigValue('forms.validation.oldpassword.maxLength')}}\r\n            characters\r\n          </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-password\" class=\"sr-only\">New Password</label>\r\n                        <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\" class=\"form-control form-control-lg first\" placeholder=\"New Password\" #password=\"ngModel\" [class.form-control-danger]=\"password.invalid && password.touched\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\" autofocus>\r\n                        <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\r\n            Password is required!\r\n          </small>\r\n                        <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\r\n            Password should contains\r\n            from {{getConfigValue('forms.validation.password.minLength')}}\r\n            to {{getConfigValue('forms.validation.password.maxLength')}}\r\n            characters\r\n          </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-re-password\" class=\"sr-only\">Confirm Password</label>\r\n                        <input name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\" class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\" #rePass=\"ngModel\" [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\" [required]=\"getConfigValue('forms.validation.password.required')\">\r\n                        <small class=\"form-text error\" *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\r\n            Password confirmation is required!\r\n          </small>\r\n                        <small class=\"form-text error\" *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\r\n            Password does not match the confirm password.\r\n          </small>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <button [disabled]=\"submitted || !resetPassForm.form.valid\" class=\"btn btn-hero-success\" [class.btn-pulse]=\"submitted\">\r\n                                Change password\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <br/>\r\n                </form>\r\n            </nb-card-body>\r\n        </nb-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileChangePWDComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileChangePWDComponent = (function () {
    function ProfileChangePWDComponent() {
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    ProfileChangePWDComponent.prototype.resetPass = function () {
        this.errors = this.messages = [];
        this.submitted = true;
        /*this.service.resetPassword(this.provider, this.user).subscribe((result: NbAuthResult) => {
          this.submitted = false;
          if (result.isSuccess()) {
            this.messages = result.getMessages();
          } else {
            this.errors = result.getErrors();
          }
    
          const redirect = result.getRedirect();
         
        });*/
    };
    ProfileChangePWDComponent.prototype.getConfigValue = function (key) {
        // return getDeepFromObject(this.config, key, null);
    };
    return ProfileChangePWDComponent;
}());
ProfileChangePWDComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-profile-cpwd',
        template: __webpack_require__("../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.scss")]
    })
], ProfileChangePWDComponent);

//# sourceMappingURL=profile-changepwd.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card>\r\n            <nb-card-header>\r\n                <h2 class=\"title\">Profile</h2>                \r\n            </nb-card-header>\r\n        </nb-card>\r\n        <form (ngSubmit)=\"updateProfile()\" #updateProfileForm=\"ngForm\">\r\n            <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\r\n                <div><strong>Oh snap!</strong></div>\r\n                <div *ngFor=\"let error of errors\">{{ error }}</div>\r\n            </div>\r\n            <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\r\n                <div><strong>Hooray!</strong></div>\r\n                <div *ngFor=\"let message of messages\">{{ message }}</div>\r\n            </div>\r\n            <nb-card>\r\n            \t<nb-card-header>                \r\n\t                <small class=\"form-text sub-title\">User Details</small>\r\n\t            </nb-card-header>\r\n            \t<nb-card-body>\r\n\t                <div class=\"row\">\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-firstName\">First Name</label>\r\n\t                            <input name=\"firstName\" [(ngModel)]=\"user.firstName\" type=\"text\" id=\"input-firstName\" class=\"form-control\" placeholder=\"First Name\" #firstName=\"ngModel\" [class.form-control-danger]=\"firstName.invalid && firstName.touched\" [required]=\"getConfigValue('forms.validation.firstName.required')\" autofocus>\r\n\t                            <small class=\"form-text error\" *ngIf=\"firstName.invalid && firstName.touched && firstName.errors?.required\">firstName is required!</small>\r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-lastName\">Last Name</label>\r\n\t                            <input name=\"lastName\" [(ngModel)]=\"user.lastName\" type=\"text\" id=\"input-lastName\" class=\"form-control\" placeholder=\"Last Name\" #lastName=\"ngModel\" [class.form-control-danger]=\"lastName.invalid && lastName.touched\" [required]=\"getConfigValue('forms.validation.lastName.required')\" autofocus>\r\n\t                            <small class=\"form-text error\" *ngIf=\"lastName.invalid && lastName.touched && lastName.errors?.required\">lastName is required!</small>\r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-username\">Email</label>\r\n\t                            <input name=\"username\" [(ngModel)]=\"user.username\" type=\"text\" id=\"input-username\" class=\"form-control\" placeholder=\"Email\" #username=\"ngModel\" [class.form-control-danger]=\"username.invalid && username.touched\" [required]=\"getConfigValue('forms.validation.username.required')\" autofocus>\r\n\t                            <small class=\"form-text error\" *ngIf=\"username.invalid && username.touched && username.errors?.required\">Email is required!</small>\r\n\t                        </div>\r\n\t                    </div>\r\n\t                </div>\r\n\t                 <div class=\"row\">\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-gender\">Gender</label>\r\n\t                            <input name=\"gender\" [(ngModel)]=\"user.gender\" type=\"text\" id=\"input-gender\" class=\"form-control\" placeholder=\"Gender\" #gender=\"ngModel\">                           \r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-phone\">Phone</label>\r\n\t                            <input name=\"phone\" [(ngModel)]=\"user.phone\" type=\"text\" id=\"input-phone\" class=\"form-control\" placeholder=\"Phone\" #phone=\"ngModel\" [class.form-control-danger]=\"phone.invalid && phone.touched\" [required]=\"getConfigValue('forms.validation.phone.required')\">\r\n\t                            <small class=\"form-text error\" *ngIf=\"phone.invalid && phone.touched && phone.errors?.required\">phone is required!</small>\r\n\t                        </div>\r\n\t                    </div>\t                    \r\n\t                </div>\r\n                </nb-card-body>\r\n            </nb-card>\r\n             <nb-card>\r\n            \t<nb-card-header>                \r\n\t                <small class=\"form-text sub-title\">Contact Details</small>\r\n\t            </nb-card-header>\r\n            \t<nb-card-body>\r\n\t                <div class=\"row\">\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-address1\">Address 1</label>\r\n\t                            <input name=\"address1\" [(ngModel)]=\"user.address1\" type=\"text\" id=\"input-address1\" class=\"form-control\" placeholder=\"Address 1\" #firstName=\"ngModel\" >\r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-address2\">Address 2</label>\r\n\t                            <input name=\"address2\" [(ngModel)]=\"user.address2\" type=\"text\" id=\"input-address2\" class=\"form-control\" placeholder=\"Address 2\" #lastName=\"ngModel\">\r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-zip\">Zip Code</label>\r\n\t                            <input name=\"zip\" [(ngModel)]=\"user.zip\" type=\"text\" id=\"input-zip\" class=\"form-control\" placeholder=\"Zip Code\" #username=\"ngModel\" >\r\n\t                        </div>\r\n\t                    </div>\r\n\t                </div>\r\n\t                 <div class=\"row\">\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-state\">State</label>\r\n\t                            <input name=\"state\" [(ngModel)]=\"user.state\" type=\"text\" id=\"input-state\" class=\"form-control\" placeholder=\"State\" #state=\"ngModel\">                           \r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-city\">City</label>\r\n\t                            <input name=\"city\" [(ngModel)]=\"user.city\" type=\"text\" id=\"input-city\" class=\"form-control\" placeholder=\"City\" #city=\"ngModel\" >\t                           \r\n\t                        </div>\r\n\t                    </div>\t \r\n\t                    <div class=\"col-md-4\">\r\n\t                        <div class=\"form-group\">\r\n\t                            <label for=\"input-country\">Country</label>\r\n\t                            <input name=\"country\" [(ngModel)]=\"user.country\" type=\"text\" id=\"input-country\" class=\"form-control\" placeholder=\"Country\" #country=\"ngModel\">\r\n\t                        </div>\r\n\t                    </div>\t                    \r\n\t                </div>\r\n                </nb-card-body>\r\n            </nb-card>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button class=\"btn btn-hero-success\" >\r\n                        Save changes\r\n                    </button>\r\n                    \r\n                </div>\r\n            </div>\r\n            <br/>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileEditComponent = (function () {
    function ProfileEditComponent() {
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    ProfileEditComponent.prototype.updateProfile = function () {
        this.errors = this.messages = [];
        this.submitted = true;
        /*this.service.resetPassword(this.provider, this.user).subscribe((result: NbAuthResult) => {
          this.submitted = false;
          if (result.isSuccess()) {
            this.messages = result.getMessages();
          } else {
            this.errors = result.getErrors();
          }
    
          const redirect = result.getRedirect();
         
        });*/
    };
    ProfileEditComponent.prototype.getConfigValue = function (key) {
        // return getDeepFromObject(this.config, key, null);
    };
    return ProfileEditComponent;
}());
ProfileEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-profile-edit',
        template: __webpack_require__("../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.scss")]
    })
], ProfileEditComponent);

//# sourceMappingURL=profile-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("../../../../../src/app/merchants/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_edit_profile_edit_component__ = __webpack_require__("../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_changepwd_profile_changepwd_component__ = __webpack_require__("../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
        children: [{
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_3__profile_edit_profile_edit_component__["a" /* ProfileEditComponent */],
            },
            {
                path: 'changepwd',
                component: __WEBPACK_IMPORTED_MODULE_4__profile_changepwd_profile_changepwd_component__["a" /* ProfileChangePWDComponent */],
            }]
    }];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], ProfileRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_3__profile_edit_profile_edit_component__["a" /* ProfileEditComponent */],
    __WEBPACK_IMPORTED_MODULE_4__profile_changepwd_profile_changepwd_component__["a" /* ProfileChangePWDComponent */]
];
//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-profile',
        template: "<router-outlet></router-outlet>",
    })
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__ = __webpack_require__("../../../../../src/app/merchants/profile/profile-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* Ng2SmartTableModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["b" /* routedComponents */],
        ],
        providers: [],
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map