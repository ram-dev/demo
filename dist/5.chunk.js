webpackJsonp([5],{

/***/ "../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card>\r\n            <nb-card-header>\r\n                <h2 class=\"title\">Change password</h2>\r\n                <small class=\"form-text sub-title\">Please enter a new password</small>\r\n            </nb-card-header>\r\n            <nb-card-body>\r\n                <form [formGroup]=\"profileResetPassForm\" (ngSubmit)=\"onSubmit()\"> \r\n                    <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <div *ngFor=\"let error of errors\">{{ error }}</div>\r\n                    </div>\r\n                    <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\r\n                        <div *ngFor=\"let message of messages\">{{ message }}</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"oldpassword\" class=\"sr-only\">Old Password</label>\r\n                        <input type=\"password\" id=\"oldpassword\" formControlName=\"oldpassword\" placeholder=\"Old Password\" class=\"form-control\" [class.form-control-danger]=\"profileResetPassForm.get('oldpassword').invalid && profileResetPassForm.get('oldpassword').touched\">\r\n                        <span *ngIf=\"!profileResetPassForm.get('oldpassword').valid && profileResetPassForm.get('oldpassword').touched\" class=\"form-text error\">\r\n                                  <span *ngIf=\"profileResetPassForm.get('oldpassword').errors['required']\">Old password field is required!</span>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"newpassword\" class=\"sr-only\">New Password</label>\r\n                        <input type=\"password\" id=\"newpassword\" formControlName=\"newpassword\" placeholder=\"New Password\" class=\"form-control\" [class.form-control-danger]=\"profileResetPassForm.get('newpassword').invalid && profileResetPassForm.get('newpassword').touched\">\r\n                        <span *ngIf=\"!profileResetPassForm.get('newpassword').valid && profileResetPassForm.get('newpassword').touched\" class=\"form-text error\">\r\n                                  <span *ngIf=\"profileResetPassForm.get('newpassword').errors['required']\">New password field is required!</span>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"confirmpassword\" class=\"sr-only\">Confirm Password</label>\r\n                        <input type=\"password\" id=\"confirmpassword\" formControlName=\"confirmpassword\" placeholder=\"Confirm Password\" class=\"form-control\" [class.form-control-danger]=\"profileResetPassForm.get('confirmpassword').invalid && profileResetPassForm.get('confirmpassword').touched\">\r\n                        <span *ngIf=\"!profileResetPassForm.get('confirmpassword').valid && profileResetPassForm.get('confirmpassword').touched\" class=\"form-text error\">\r\n                                  <span *ngIf=\"profileResetPassForm.get('confirmpassword').errors['required']\">Confirm password field is required!</span>\r\n                                   <span *ngIf=\"profileResetPassForm.get('confirmpassword').errors['NotEqual']\">Password does not match the confirm password!</span> \r\n                        </span>\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <button [disabled]=\"submitted || !profileResetPassForm.valid\" class=\"btn btn-hero-success\" [class.btn-pulse]=\"submitted\">\r\n                                Change password\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <br/>\r\n                </form>\r\n            </nb-card-body>\r\n        </nb-card>\r\n    </div>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileChangePWDComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Rx';



var ProfileChangePWDComponent = (function () {
    function ProfileChangePWDComponent(userService) {
        this.userService = userService;
        this.showMessages = {};
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.id = sessionStorage.getItem('userId');
    }
    ProfileChangePWDComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.profileResetPassForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({});
        this.profileResetPassForm.addControl('oldpassword', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]));
        this.profileResetPassForm.addControl('newpassword', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]));
        this.profileResetPassForm.addControl('confirmpassword', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.validateAreEqual.bind(this)])]));
    };
    ProfileChangePWDComponent.prototype.onSubmit = function () {
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        var formData = {};
        formData = this.profileResetPassForm.value;
        formData.id = this.id;
        var self = this;
        if (this.profileResetPassForm.valid) {
            this.userService.resetpassword(formData).subscribe(function (result) {
                self.submitted = false;
                if (result.error) {
                    self.errors.push(result.error);
                }
                else {
                    self.messages.push("Password successfully updated");
                }
            }, function (error) {
                self.submitted = false;
                self.errors.push(error);
            });
        }
    };
    ProfileChangePWDComponent.prototype.validateAreEqual = function (control) {
        return control.value === this.profileResetPassForm.get("newpassword").value ? null : {
            NotEqual: true
        };
    };
    return ProfileChangePWDComponent;
}());
ProfileChangePWDComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-profile-cpwd',
        template: __webpack_require__("../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merchants/profile/profile-changepwd/profile-changepwd.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileChangePWDComponent);

var _a;
//# sourceMappingURL=profile-changepwd.component.js.map

/***/ }),

/***/ "../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <nb-card>\r\n            <nb-card-header>\r\n                <h2 class=\"title\">Profile</h2>\r\n            </nb-card-header>\r\n        </nb-card>\r\n        <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n            <nb-card>\r\n                <nb-card-header>\r\n                    <small class=\"form-text sub-title\">User Details</small>\r\n                </nb-card-header>\r\n                <nb-card-body>\r\n                    <div *ngIf=\"!profileForm.valid && profileForm.touched\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <div><strong>Please enter valid data!</strong></div>\r\n                    </div>\r\n                    <div *ngIf=\"!profileForm.valid && errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\r\n\t\t                <div><strong>Oh snap!</strong></div>\r\n\t\t                <div *ngFor=\"let error of errors\">{{ error }}</div>\r\n\t\t            </div>\r\n\t\t            <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\r\n\t\t                <div><strong>Hooray!</strong></div>\r\n\t\t                <div *ngFor=\"let message of messages\">{{ message }}</div>\r\n\t\t            </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"firstName\">First Name</label>\r\n                                <input type=\"text\" id=\"firstName\" formControlName=\"firstName\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('firstName').invalid && profileForm.get('firstName').touched\">\r\n                                <span *ngIf=\"!profileForm.get('firstName').valid && profileForm.get('firstName').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('firstName').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lastName\">Last Name</label>\r\n                                <input type=\"text\" id=\"lastName\" formControlName=\"lastName\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('lastName').invalid && profileForm.get('lastName').touched\">\r\n                                <span *ngIf=\"!profileForm.get('lastName').valid && profileForm.get('lastName').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('lastName').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"username\">Email</label>\r\n                               \r\n                                <input type=\"text\" disabled=\"disabled\" id=\"username1\" formControlName=\"username\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('username').invalid && profileForm.get('username').touched\">\r\n                                <span *ngIf=\"!profileForm.get('username').valid && profileForm.get('username').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('username').errors['required']\">This field is required!</span>\r\n                                <span *ngIf=\"!profileForm.get('username').valid && profileForm.get('username').touched\" class=\"form-text error\">Please enter a valid email!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"\">Gender</label>\r\n                                <div class=\"row\">\r\n                                    <div class=\"form-check col-sm-4\" *ngFor=\"let gender of genders\">\r\n                                        <label class=\"custom-control custom-radio\">\r\n                                            <input type=\"radio\" class=\"custom-control-input\" formControlName=\"gender\" [value]=\"gender\">\r\n                                            <span class=\"custom-control-indicator\"></span>\r\n                                            <span class=\"custom-control-description\">{{ gender }}</span>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <span *ngIf=\"!profileForm.get('gender').valid && profileForm.get('gender').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('gender').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"birthDate\">Birth date</label>\r\n                                <input type=\"date\" id=\"birthDate\" formControlName=\"birthDate\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('birthDate').invalid && profileForm.get('birthDate').touched\">\r\n                                <span *ngIf=\"!profileForm.get('birthDate').valid && profileForm.get('birthDate').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('birthDate').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\" formGroupName=\"contacts\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone1\">Phone</label>\r\n                                <input type=\"text\" id=\"phone1\" formControlName=\"phone1\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.phone1').invalid && profileForm.get('contacts.phone1').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.phone1').valid && profileForm.get('contacts.phone1').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.phone1').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div formGroupName=\"contacts\" class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"address\">Address</label>\r\n                                <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.address').invalid && profileForm.get('contacts.address').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.address').valid && profileForm.get('contacts.address').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.address').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"city\">City</label>\r\n                                <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.city').invalid && profileForm.get('contacts.city').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.city').valid && profileForm.get('contacts.city').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.city').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"state\">State</label>\r\n                                <input type=\"text\" id=\"state\" formControlName=\"state\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.state').invalid && profileForm.get('contacts.state').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.state').valid && profileForm.get('contacts.state').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.state').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"country\">Country</label>\r\n                                <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.country').invalid && profileForm.get('contacts.country').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.country').valid && profileForm.get('contacts.country').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.country').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"zip\">Zip</label>\r\n                                <input type=\"text\" id=\"zip\" formControlName=\"zip\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.zip').invalid && profileForm.get('contacts.zip').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.zip').valid && profileForm.get('contacts.zip').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.zip').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"locality\">Landmark</label>\r\n                                <input type=\"text\" id=\"locality\" formControlName=\"locality\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.locality').invalid && profileForm.get('contacts.locality').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.locality').valid && profileForm.get('contacts.locality').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.locality').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone2\">Alternative Number</label>\r\n                                <input type=\"text\" id=\"phone2\" formControlName=\"phone2\" class=\"form-control\" [class.form-control-danger]=\"profileForm.get('contacts.phone1').invalid && profileForm.get('contacts.phone1').touched\">\r\n                                <span *ngIf=\"!profileForm.get('contacts.phone2').valid && profileForm.get('contacts.phone2').touched\" class=\"form-text error\">\t\t\t\t             \r\n\t\t\t\t\t              <span *ngIf=\"profileForm.get('contacts.phone2').errors['required']\">This field is required!</span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </nb-card-body>\r\n            </nb-card>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button [disabled]=\"submitted || !profileForm.valid\" class=\"btn btn-hero-success\" type=\"submit\">\r\n                        Save changes\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n        </form>\r\n    </div>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileEditComponent = (function () {
    function ProfileEditComponent(userService) {
        this.userService = userService;
        this.genders = ['Male', 'Female', 'N/A'];
        this.showMessages = {};
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            'firstName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'lastName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'gender': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */]('Male', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'birthDate': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            'contacts': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
                'address': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'zip': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'city': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'state': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'country': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'locality': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'phone1': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
                'phone2': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            }),
        });
        this.userService.getCurrentUser()
            .subscribe(function (data) {
            _this.id = data._id;
            var obj = {};
            obj.username = data.username;
            obj.firstName = data.firstName;
            obj.lastName = data.lastName;
            obj.gender = data.gender || _this.genders[0];
            var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]("en-US");
            obj.birthDate = datePipe.transform(data.birthDate, 'yyyy-MM-dd') || '';
            obj.contacts = {};
            obj.contacts.address = data.contacts.address || '';
            obj.contacts.zip = data.contacts.zip || '';
            obj.contacts.city = data.contacts.city || '';
            obj.contacts.state = data.contacts.state || '';
            obj.contacts.country = data.contacts.country || '';
            obj.contacts.locality = data.contacts.locality || '';
            obj.contacts.phone1 = data.contacts.phone1 || '';
            obj.contacts.phone2 = data.contacts.phone2 || '';
            _this.user = obj;
            _this.initFrom();
        }, function (error) {
            _this.errors.push(error);
        });
    };
    ProfileEditComponent.prototype.initFrom = function () {
        /*this.profileForm.valueChanges.subscribe(
           (value) => console.log(value)
        );
        this.profileForm.statusChanges.subscribe(
          (status) => console.log(status)
        );*/
        this.profileForm.setValue(this.user);
    };
    ProfileEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        var formData = {};
        formData = this.profileForm.value;
        formData.id = this.id;
        if (this.profileForm.valid) {
            this.userService.update(formData).subscribe(function (result) {
                _this.submitted = false;
                if (result._id != '') {
                    _this.messages.push("Profile successfully updated");
                }
                else {
                    _this.errors.push("Error!");
                }
            }, function (error) {
                _this.errors.push(error);
            });
        }
        //this.profileForm.reset();
    };
    return ProfileEditComponent;
}());
ProfileEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-profile-edit',
        template: __webpack_require__("../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merchants/profile/profile-edit/profile-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileEditComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
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
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["b" /* routedComponents */],
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__auth__["c" /* NB_AUTH_TOKEN_WRAPPER_TOKEN */], useClass: __WEBPACK_IMPORTED_MODULE_5__auth__["d" /* NbAuthSimpleToken */] },
        ],
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map