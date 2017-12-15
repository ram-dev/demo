webpackJsonp([9],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deals/deals.module": [
		"../../../../../src/app/merchants/deals/deals.module.ts",
		0,
		5
	],
	"./download/download.module": [
		"../../../../../src/app/merchants/download/download.module.ts",
		0,
		6
	],
	"./merchant/merchant.module": [
		"../../../../../src/app/merchants/merchant/merchant.module.ts",
		0,
		3
	],
	"./profile/profile.module": [
		"../../../../../src/app/merchants/profile/profile.module.ts",
		0,
		4
	],
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		0,
		1
	],
	"app/merchants/merchants.module": [
		"../../../../../src/app/merchants/merchants.module.ts",
		0,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_import_guard__ = __webpack_require__("../../../../../src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data_module__ = __webpack_require__("../../../../../src/app/@core/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NB_CORE_PROVIDERS = __WEBPACK_IMPORTED_MODULE_4__data_data_module__["a" /* DataModule */].forRoot().providers.concat(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* NbAuthModule */].forRoot({
    providers: {
        email: {
            service: __WEBPACK_IMPORTED_MODULE_2__auth__["h" /* NbDummyAuthProvider */],
            config: {
                delay: 3000,
                login: {
                    rememberMe: true,
                },
            },
        },
    },
}).providers, [
    __WEBPACK_IMPORTED_MODULE_5__utils_analytics_service__["a" /* AnalyticsService */],
]);
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* NbAuthModule */],
        ],
        declarations: [],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

var CoreModule_1;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__electricity_service__ = __webpack_require__("../../../../../src/app/@core/data/electricity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_service__ = __webpack_require__("../../../../../src/app/@core/data/player.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_3__electricity_service__["a" /* ElectricityService */],
    __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */],
    __WEBPACK_IMPORTED_MODULE_5__smart_table_service__["a" /* SmartTableService */],
    __WEBPACK_IMPORTED_MODULE_6__player_service__["a" /* PlayerService */],
];
var DataModule = DataModule_1 = (function () {
    function DataModule() {
    }
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    return DataModule;
}());
DataModule = DataModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        providers: SERVICES.slice(),
    })
], DataModule);

var DataModule_1;
//# sourceMappingURL=data.module.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/electricity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricityService = (function () {
    function ElectricityService() {
        this.data = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
    }
    // TODO: observables
    ElectricityService.prototype.getData = function () {
        return this.data;
    };
    return ElectricityService;
}());
ElectricityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ElectricityService);

//# sourceMappingURL=electricity.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* unused harmony export Track */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Track = (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    return PlayerService;
}());
PlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/smart-table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmartTableService = (function () {
    function SmartTableService() {
        this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
    }
    SmartTableService.prototype.getData = function () {
        return this.data;
    };
    return SmartTableService;
}());
SmartTableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SmartTableService);

//# sourceMappingURL=smart-table.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StateService = (function () {
    function StateService() {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Left Sidebar',
                icon: 'nb-layout-sidebar-left',
                id: 'left',
                selected: true,
            },
            {
                name: 'Right Sidebar',
                icon: 'nb-layout-sidebar-right',
                id: 'right',
            },
        ];
        this.layoutState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.sidebars[0]);
    }
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    return StateService;
}());
StateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StateService);

//# sourceMappingURL=state.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var counter = 0;
var UserService = (function () {
    function UserService() {
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.users);
    };
    UserService.prototype.getUserArray = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userArray);
    };
    UserService.prototype.getUser = function () {
        counter = (counter + 1) % this.userArray.length;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userArray[counter]);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ "../../../../../src/app/@core/utils/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"].call(this.router.events, function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AnalyticsService);

var _a, _b;
//# sourceMappingURL=analytics.service.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer-public/footer-public.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .footer-nav {\n    display: block; }\n    :host-context(.nb-theme-default) .footer-nav a {\n      padding: .51rem;\n      border-left: 1px solid #dfdfdf; }\n      :host-context(.nb-theme-default) .footer-nav a:first-child {\n        border-left: 0; }\n  :host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-default) .socials a:hover {\n        color: #2a2a2a; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) .footer-nav {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .footer-nav {\n    display: block; }\n    :host-context(.nb-theme-cosmic) .footer-nav a {\n      padding: .51rem;\n      border-left: 1px solid #dfdfdf; }\n      :host-context(.nb-theme-cosmic) .footer-nav a:first-child {\n        border-left: 0; }\n  :host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) .footer-nav {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer-public/footer-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterPublicComponent = (function () {
    function FooterPublicComponent() {
    }
    return FooterPublicComponent;
}());
FooterPublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-footer-public',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/footer-public/footer-public.component.scss")],
        template: "\n    <span class=\"created-by\">\u00A9 2017 Copyright <b><a href=\"#\">YofferZ</a></b>, All rights reserved</span>\n    <div class=\"footer-nav\">\n      <a href=\"#\" target=\"_blank\">About us</a>\n      <a href=\"#\" target=\"_blank\">Contact us</a>\n      <a href=\"#\" target=\"_blank\">Terms & Conditions</a>\n      <a href=\"#\" target=\"_blank\">Privacy Policy</a>      \n    </div>\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-google\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>      \n    </div>\n  ",
    })
], FooterPublicComponent);

//# sourceMappingURL=footer-public.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-default) .socials a:hover {\n        color: #2a2a2a; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-footer',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.scss")],
        template: "\n    <span class=\"created-by\">Created with \u2665 by <b><a href=\"#\" target=\"_blank\">yofferz</a></b> 2017</span>\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>\n  ",
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/header-public-top/header-public-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\" [class.left]=\"position === 'normal'\" [class.right]=\"position === 'inverse'\">\r\n    \r\n    <div class=\"logo-containter\">\r\n        <a  class=\"navigation\" href=\"#/home/index\"><i class=\"nb-home\"></i></a>\r\n        <a  class=\"menu\" href=\"#/home/deals\"> All</a>\r\n        <a  class=\"menu\" href=\"#/home/deals-food/1\"> Food & Beverages</a>\r\n        <a  class=\"menu\" href=\"#/home/deals-wellness/2\"> Wellness</a>\r\n        <a  class=\"menu\" href=\"#/home/deals-spa/3\"> SPA</a>\r\n        <a  class=\"menu\" href=\"#/home/deals-entertainment/4\"> Entertainment</a> \r\n        <a  class=\"menu\" href=\"#/home/deals-travel/5\"> Travel</a> \r\n        <a  class=\"menu\" href=\"#/home/deals-shopping/6\"> E Shopping</a>       \r\n    </div>    \r\n</div>\r\n\r\n<div class=\"header-container\" [class.left]=\"position === 'inverse'\" [class.right]=\"position === 'normal'\">\r\n    <div class=\"logo-containter\">       \r\n        <a href=\"#/auth/register\"  class=\"menu\"> Register</a> \r\n        <a href=\"#/auth/login\" class=\"menu\"> Login</a>  \r\n        <a class=\"menu\"><i class=\"fa fa-map-marker\"></i> Hyderabad</a>     \r\n    </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/@theme/components/header-public-top/header-public-top.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-default) .mobilemenu {\n    display: none; }\n  :host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-default) .control-item {\n    display: block; }\n  :host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-default) .header-container .navigation {\n      padding: .6rem .3rem;\n      font-size: 1.5rem;\n      text-decoration: none;\n      background-color: #2c313b; }\n      :host-context(.nb-theme-default) .header-container .navigation i {\n        display: block;\n        color: white; }\n    :host-context(.nb-theme-default) .header-container a.menu {\n      padding: 0 .5rem;\n      font-size: .9rem;\n      color: white;\n      text-transform: UPPERCASE; }\n    :host-context(.nb-theme-default) .header-container a:hover {\n      color: #3dcc6d;\n      text-decoration: none; }\n    :host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n      :host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .control-item {\n      display: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; }\n    :host-context(.nb-theme-default) .mobilemenu /deep/ {\n      display: block; }\n    :host-context(.nb-theme-default) .logo-containter /deep/ {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .mobilemenu {\n    display: none; }\n  :host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n  :host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding: .6rem .3rem;\n      font-size: 1.5rem;\n      text-decoration: none;\n      background-color: #2c313b; }\n      :host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block;\n        color: white; }\n    :host-context(.nb-theme-cosmic) .header-container a.menu {\n      padding: 0 .5rem;\n      font-size: .9rem;\n      color: white;\n      text-transform: UPPERCASE; }\n    :host-context(.nb-theme-cosmic) .header-container a:hover {\n      color: #3dcc6d;\n      text-decoration: none; }\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n      :host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .control-item {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .mobilemenu /deep/ {\n      display: block; }\n    :host-context(.nb-theme-cosmic) .logo-containter /deep/ {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/header-public-top/header-public-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPublicTopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderPublicTopComponent = (function () {
    function HeaderPublicTopComponent(sidebarService, menuService, userService, analyticsService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Log out', link: "/auth/logout" }];
    }
    HeaderPublicTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.user = users.nick; });
    };
    HeaderPublicTopComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderPublicTopComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderPublicTopComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderPublicTopComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    return HeaderPublicTopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HeaderPublicTopComponent.prototype, "position", void 0);
HeaderPublicTopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-header-public-top',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/header-public-top/header-public-top.component.scss")],
        template: __webpack_require__("../../../../../src/app/@theme/components/header-public-top/header-public-top.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _d || Object])
], HeaderPublicTopComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header-public-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/header-public/header-public.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\" [class.left]=\"position === 'normal'\" [class.right]=\"position === 'inverse'\">\r\n    <div class=\"logo-containter\">\r\n    \t<a (click)=\"toggleSidebar()\" class=\"navigation mobilemenu\"><i class=\"nb-menu\"></i></a>     \r\n        <a href=\"#/home/index\"><div class=\"logo\">Y<span>offerZ.com</span></div></a>\r\n    </div>    \r\n</div>\r\n\r\n<nb-actions size=\"medium\" class=\"header-container\" [class.right]=\"position === 'normal'\" [class.left]=\"position === 'inverse'\">    \r\n    <nb-action class=\"control-item\">\r\n        <nb-search type=\"rotate-layout\" (click)=\"startSearch()\"></nb-search>\r\n    </nb-action>\r\n</nb-actions>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/@theme/components/header-public/header-public.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-default) .mobilemenu {\n    display: none; }\n  :host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-default) .control-item {\n    display: block; }\n  :host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-default) .header-container .navigation i {\n        display: block;\n        color: #fff; }\n    :host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap;\n      color: #fff; }\n      :host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400;\n        color: #fff; }\n  :host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .control-item {\n      display: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; }\n    :host-context(.nb-theme-default) .mobilemenu /deep/ {\n      display: block; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; }\n    :host-context(.nb-theme-default) .mobilemenu /deep/ {\n      display: block; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .mobilemenu {\n    display: none; }\n  :host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n  :host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block;\n        color: #fff; }\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap;\n      color: #fff; }\n      :host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400;\n        color: #fff; }\n  :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .control-item {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .mobilemenu /deep/ {\n      display: block; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .mobilemenu /deep/ {\n      display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/header-public/header-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderPublicComponent = (function () {
    function HeaderPublicComponent(sidebarService, menuService, userService, analyticsService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Log out', link: "/auth/logout" }];
    }
    HeaderPublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.user = users.nick; });
    };
    HeaderPublicComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderPublicComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderPublicComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderPublicComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    return HeaderPublicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HeaderPublicComponent.prototype, "position", void 0);
HeaderPublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-header-public',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/header-public/header-public.component.scss")],
        template: __webpack_require__("../../../../../src/app/@theme/components/header-public/header-public.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _d || Object])
], HeaderPublicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header-public.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\" [class.left]=\"position === 'normal'\" [class.right]=\"position === 'inverse'\">\r\n    <div class=\"logo-containter\">\r\n        <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\r\n        <div class=\"logo\" (click)=\"goToHome()\">Y<span>offerZ.com</span></div>\r\n    </div>\r\n    <!-- <ngx-theme-switcher></ngx-theme-switcher> -->\r\n</div>\r\n\r\n<nb-actions size=\"medium\" class=\"header-container\" [class.right]=\"position === 'normal'\" [class.left]=\"position === 'inverse'\">\r\n    <!-- <nb-action icon=\"nb-grid-b\" class=\"toggle-layout\" (click)=\"toggleSettings()\"></nb-action> -->\r\n    <nb-action>\r\n        <nb-user [menu]=\"userMenu\" [name]=\"user?.name\" [picture]=\"user?.picture\"></nb-user>\r\n    </nb-action>\r\n    <!-- <nb-action class=\"control-item\" disabled icon=\"nb-notifications\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"nb-email\"></nb-action> -->\r\n    <!-- <nb-action class=\"control-item\">\r\n        <nb-search type=\"rotate-layout\" (click)=\"startSearch()\"></nb-search>\r\n    </nb-action> -->\r\n</nb-actions>"

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-default) .control-item {\n    display: block; }\n  :host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-default) .header-container .navigation i {\n        display: block; }\n    :host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #ebeef2;\n      white-space: nowrap; }\n      :host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .control-item {\n      display: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n  :host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block; }\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #342e73;\n      white-space: nowrap; }\n      :host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .control-item {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(sidebarService, menuService, userService, analyticsService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Log out', link: "/auth/logout" }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.user = users.nick; });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "position", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-header',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/header/header.component.scss")],
        template: __webpack_require__("../../../../../src/app/@theme/components/header/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_public_top_header_public_top_component__ = __webpack_require__("../../../../../src/app/@theme/components/header-public-top/header-public-top.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__header_public_top_header_public_top_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_public_header_public_component__ = __webpack_require__("../../../../../src/app/@theme/components/header-public/header-public.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__header_public_header_public_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_public_footer_public_component__ = __webpack_require__("../../../../../src/app/@theme/components/footer-public/footer-public.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__footer_public_footer_public_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_input_search_input_component__ = __webpack_require__("../../../../../src/app/@theme/components/search-input/search-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__search_input_search_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tiny_mce_tiny_mce_component__ = __webpack_require__("../../../../../src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__tiny_mce_tiny_mce_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_settings_theme_settings_component__ = __webpack_require__("../../../../../src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__theme_settings_theme_settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_switcher_theme_switcher_component__ = __webpack_require__("../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__theme_switcher_theme_switcher_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__multiplecarousel_multiplecarousel_component__ = __webpack_require__("../../../../../src/app/@theme/components/multiplecarousel/multiplecarousel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__multiplecarousel_multiplecarousel_component__["a"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/multiplecarousel/multiplecarousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"multiplecarousel-container\">\r\n  <div\r\n    class=\"multiplecarousel-wrapper\"\r\n    [style.width]=\"width + 'px'\"\r\n    (mousedown)=\"onMousedown($event)\"\r\n    (touchstart)=\"onTouchdown($event)\"\r\n    (mousemove)=\"onMousemove($event, list.scrollWidth)\"\r\n    (touchmove)=\"onTouchmove($event, list.scrollWidth)\"\r\n    (mouseup)=\"onMouseup($event, list)\"\r\n    (mouseleave)=\"onMouseup($event, list)\"\r\n    (touchend)=\"onTouchup($event, list)\"\r\n  >\r\n    <div\r\n      class=\"multiplecarousel\"\r\n      [attr.startPress]=\"startPress\"\r\n      [style.transition]=\"startPress > 0 ? 'none' : '-webkit-transform 1s'\"\r\n      [style.webkitTransition]=\"startPress > 0 ? 'none' : '-webkit-transform 1s'\"\r\n      [style.transform]=\"'translateX('+amount+'px)'\"\r\n      [style.webkitTransform]=\"'translateX('+amount+'px)'\"\r\n      #list\r\n    >\r\n      <ng-template\r\n        *ngFor=\"let item of items; let i = index\"\r\n        [ngTemplateOutlet]=\"$item\"\r\n        [ngTemplateOutletContext]=\"{$implicit: item, index: i, selectedIndex: childIndex}\"\r\n      ></ng-template>\r\n    </div>\r\n  </div>\r\n  <div\r\n    class=\"controls\" *ngIf=\"$prev || $next\" >\r\n    <button type=\"button\" *ngIf=\"$prev\" (click)=\"scroll(false, list)\" [disabled]=\"amount >= 0\" >\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"$prev\"\r\n      ></ng-template>\r\n    </button>\r\n    <button type=\"button\" *ngIf=\"$next\" (click)=\"scroll(true, list)\" [disabled]=\"amount <= -(list.scrollWidth-width)\" >\r\n        <ng-template\r\n          [ngTemplateOutlet]=\"$next\"\r\n        ></ng-template>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/@theme/components/multiplecarousel/multiplecarousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .multiplecarousel-container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n:host-context(.nb-theme-default) .multiplecarousel-wrapper {\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .multiplecarousel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: transform 1s, -webkit-transform 1s; }\n\n:host-context(.nb-theme-default) .controls {\n  pointer-events: none;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n:host-context(.nb-theme-default) .controls button {\n  pointer-events: all;\n  background: transparent;\n  border: 0;\n  font-size: 2.5rem;\n  color: #3dcc6d; }\n\n:host-context(.nb-theme-cosmic) .multiplecarousel-container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .multiplecarousel-wrapper {\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .multiplecarousel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: transform 1s, -webkit-transform 1s; }\n\n:host-context(.nb-theme-cosmic) .controls {\n  pointer-events: none;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n:host-context(.nb-theme-cosmic) .controls button {\n  pointer-events: all;\n  background: transparent;\n  border: 0;\n  font-size: 2.5rem;\n  color: #3dcc6d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/multiplecarousel/multiplecarousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleCarousel; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultipleCarousel = (function () {
    function MultipleCarousel() {
        this.items = [];
        this.width = 500;
        this.onSelectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childIndex = 0;
        this.amount = 0;
        this.startPress = 0;
        this.lastX = 0;
    }
    MultipleCarousel.prototype.onMousedown = function (e) {
        if (e.which === 1) {
            this.startPress = e.clientX;
            this.lastX = this.amount;
        }
    };
    MultipleCarousel.prototype.onTouchdown = function (e) {
        if (navigator.userAgent.indexOf('Android') >= 0)
            e.preventDefault();
        this.startPress = e.targetTouches[0].clientX;
        this.lastX = this.amount;
    };
    MultipleCarousel.prototype.onMousemove = function (e, maxWidth) {
        if (e.which === 1) {
            var amount = this.lastX - (this.startPress - e.clientX);
            if (amount > 0 || amount < -(maxWidth - this.width))
                return;
            this.amount = amount;
        }
    };
    MultipleCarousel.prototype.onTouchmove = function (e, maxWidth) {
        if (navigator.userAgent.indexOf('Android') >= 0)
            e.preventDefault();
        var amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
        if (amount > 0 || amount < -(maxWidth - this.width))
            return;
        this.amount = amount;
    };
    MultipleCarousel.prototype.onMouseup = function (e, elem) {
        if (e.which === 1) {
            this.startPress = 0;
            this.snap(elem);
        }
    };
    MultipleCarousel.prototype.onTouchup = function (e, elem) {
        if (navigator.userAgent.indexOf('Android') >= 0)
            e.preventDefault();
        this.startPress = 0;
        this.snap(elem);
    };
    MultipleCarousel.prototype.snap = function (elem) {
        var counter = 0;
        var lastVal = 0;
        for (var i = 0; i < this.items.length; i++) {
            var el = elem.children[i];
            var style = el.currentStyle || window.getComputedStyle(el);
            counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
            if (this.amount <= lastVal && this.amount >= -counter) {
                this.amount = -lastVal;
                this.childIndex = i;
                this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex, first: false });
                return;
            }
            lastVal = counter;
        }
        return counter;
    };
    MultipleCarousel.prototype.scroll = function (forward, elem) {
        this.childIndex += forward ? 1 : -1;
        this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex, first: false });
        this.amount = -(this.calcScroll(elem));
    };
    MultipleCarousel.prototype.calcScroll = function (elem) {
        var counter = 0;
        for (var i = this.childIndex - 1; i >= 0; i--) {
            var el = elem.children[i];
            var style = el.currentStyle || window.getComputedStyle(el);
            counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return counter;
    };
    MultipleCarousel.prototype.ngOnChanges = function (changes) {
        if (changes.items && !(changes.items.previousValue === changes.items.currentValue)) {
            if (changes.items.firstChange) {
                this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex, first: true });
            }
            this.amount = 0;
        }
    };
    return MultipleCarousel;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MultipleCarousel.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MultipleCarousel.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], MultipleCarousel.prototype, "$prev", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], MultipleCarousel.prototype, "$next", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)
], MultipleCarousel.prototype, "$item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], MultipleCarousel.prototype, "onSelectedItem", void 0);
MultipleCarousel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[ng-multiplecarousel]',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/multiplecarousel/multiplecarousel.component.scss")],
        template: __webpack_require__("../../../../../src/app/@theme/components/multiplecarousel/multiplecarousel.component.html")
    })
    /*
      *
      * @param() items - List of items to belong in carousel
      * @param() width - Size of window(view) to show
      * @param() $prev - Template for previous button
      * @param() $next - Template for next button
      * @param() $item - Template for the item
    */
], MultipleCarousel);

var _a, _b, _c, _d;
//# sourceMappingURL=multiplecarousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/search-input/search-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    transition: width 0.2s ease; }\n    :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = (function () {
    function SearchInputComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    return SearchInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SearchInputComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], SearchInputComponent.prototype, "search", void 0);
SearchInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-search-input',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/search-input/search-input.component.scss")],
        template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
    })
], SearchInputComponent);

var _a, _b;
//# sourceMappingURL=search-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-settings/theme-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) h6 {\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-default) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n  :host-context(.nb-theme-default) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) .settings-row a.selected {\n      color: #40dc7e; }\n\n:host-context(.nb-theme-cosmic) h6 {\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n  :host-context(.nb-theme-cosmic) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00d977; }\n    :host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00f9a6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-settings/theme-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    return ThemeSettingsComponent;
}());
ThemeSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-theme-settings',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/theme-settings/theme-settings.component.scss")],
        template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */]) === "function" && _a || Object])
], ThemeSettingsComponent);

var _a;
//# sourceMappingURL=theme-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n  :host-context(.nb-theme-default) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n    :host-context(.nb-theme-default) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      transition: opacity 0.3s ease; }\n      :host-context(.nb-theme-default) .theme-switch > span.light {\n        color: #4b4b4b;\n        padding-right: 10px; }\n      :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n        color: #a4abb3;\n        padding-left: 10px; }\n      :host-context(.nb-theme-default) .theme-switch > span:active {\n        opacity: 0.78; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #40dc7e;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n  :host-context(.nb-theme-cosmic) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      transition: opacity 0.3s ease; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #d1d1ff;\n        padding-right: 10px; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #a1a1e5;\n        padding-left: 10px; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #ffffff; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n        opacity: 0.78; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #00d977;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherComponent = (function () {
    function ThemeSwitcherComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var boolTheme = this.boolToTheme(theme);
        this.themeService.changeTheme(boolTheme);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name === 'cosmic';
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? 'cosmic' : 'default';
    };
    return ThemeSwitcherComponent;
}());
ThemeSwitcherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-theme-switcher',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.scss")],
        template: "\n    <label class=\"theme-switch\">\n      <span class=\"light\">Light</span>\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"currentBoolTheme()\" (change)=\"toggleTheme(theme.checked)\" #theme>\n        <span class=\"slider\"></span>\n      </div>\n      <span class=\"cosmic\">Cosmic</span>\n    </label>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _b || Object])
], ThemeSwitcherComponent);

var _a, _b;
//# sourceMappingURL=theme-switcher.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMCEComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyMCEComponent = (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return TinyMCEComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TinyMCEComponent.prototype, "editorKeyup", void 0);
TinyMCEComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tiny-mce',
        template: '',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], TinyMCEComponent);

var _a;
//# sourceMappingURL=tiny-mce.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/home/home.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .secondary-menu {\n  top: 2.6rem; }\n\n:host-context(.nb-theme-default) .mobilemenu {\n  display: none; }\n\n:host-context(.nb-theme-default) .mobilemenuInverse {\n  display: block; }\n\n:host-context(.nb-theme-default) nb-layout-header.nav-top /deep/ nav {\n  height: auto;\n  padding: 0rem;\n  background: black; }\n\n:host-context(.nb-theme-default) nb-layout-header /deep/ nav {\n  background: rgba(28, 28, 45, 0.65); }\n\n:host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container {\n  padding-top: 0rem; }\n  :host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container /deep/ nb-layout-column {\n    padding: 0; }\n  :host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container /deep/ .content {\n    margin-left: 0; }\n\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 0;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted {\n    display: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n      padding-left: 0;\n      padding-right: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n      width: 46px;\n      height: 44px;\n      padding: 0.375rem;\n      border-radius: 5px;\n      transition: none; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n        display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; }\n  :host-context(.nb-theme-default) .mobilemenu {\n    display: block; }\n  :host-context(.nb-theme-default) .mobilemenuInverse {\n    display: none; }\n  :host-context(.nb-theme-default) .secondary-menu {\n    top: 0rem; }\n  :host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container {\n    padding-top: 4.75rem; }\n    :host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container /deep/ nb-layout-column {\n      padding: 0; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; }\n  :host-context(.nb-theme-default) .mobilemenu {\n    display: block; }\n  :host-context(.nb-theme-default) .mobilemenuInverse {\n    display: none; }\n  :host-context(.nb-theme-default) .secondary-menu {\n    top: 0rem; }\n  :host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container {\n    padding-top: 0rem; }\n    :host-context(.nb-theme-default) nb-layout /deep/ .layout /deep/ .layout-container /deep/ nb-layout-column {\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) .secondary-menu {\n  top: 2.6rem; }\n\n:host-context(.nb-theme-cosmic) .mobilemenu {\n  display: none; }\n\n:host-context(.nb-theme-cosmic) .mobilemenuInverse {\n  display: block; }\n\n:host-context(.nb-theme-cosmic) nb-layout-header.nav-top /deep/ nav {\n  height: auto;\n  padding: 0rem;\n  background: black; }\n\n:host-context(.nb-theme-cosmic) nb-layout-header /deep/ nav {\n  background: rgba(28, 28, 45, 0.65); }\n\n:host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container {\n  padding-top: 0rem; }\n  :host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container /deep/ nb-layout-column {\n    padding: 0; }\n  :host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container /deep/ .content {\n    margin-left: 0; }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 0;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted {\n    display: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n      padding-left: 0;\n      padding-right: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n      width: 46px;\n      height: 44px;\n      padding: 0.375rem;\n      border-radius: 5px;\n      transition: none; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n        display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; }\n  :host-context(.nb-theme-cosmic) .mobilemenu {\n    display: block; }\n  :host-context(.nb-theme-cosmic) .mobilemenuInverse {\n    display: none; }\n  :host-context(.nb-theme-cosmic) .secondary-menu {\n    top: 0rem; }\n  :host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container {\n    padding-top: 4.75rem; }\n    :host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container /deep/ nb-layout-column {\n      padding: 0; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; }\n  :host-context(.nb-theme-cosmic) .mobilemenu {\n    display: block; }\n  :host-context(.nb-theme-cosmic) .mobilemenuInverse {\n    display: none; }\n  :host-context(.nb-theme-cosmic) .secondary-menu {\n    top: 0rem; }\n  :host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container {\n    padding-top: 0rem; }\n    :host-context(.nb-theme-cosmic) nb-layout /deep/ .layout /deep/ .layout-container /deep/ nb-layout-column {\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/home/home.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var HomeLayoutComponent = (function () {
    function HomeLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    HomeLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    return HomeLayoutComponent;
}());
HomeLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-home-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/home/home.layout.scss")],
        template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed class=\"nav-top mobilemenuInverse\">\n        <ngx-header-public-top [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header-public-top>\n      </nb-layout-header>\n      <nb-layout-header fixed class=\"secondary-menu\">\n        <ngx-header-public [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header-public>\n      </nb-layout-header>  \n      <nb-sidebar class=\"menu-sidebar mobilemenu\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [right]=\"sidebar.id === 'right'\">\n        <nb-sidebar-header>         \n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer-public></ngx-footer-public>\n      </nb-layout-footer>      \n      \n    </nb-layout>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbMediaBreakpointsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */]) === "function" && _e || Object])
], HomeLayoutComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/home/home.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__home_home_layout__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/one-column/one-column.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/one-column/one-column.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColumnLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var OneColumnLayoutComponent = (function () {
    function OneColumnLayoutComponent() {
    }
    return OneColumnLayoutComponent;
}());
OneColumnLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-one-column-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/one-column/one-column.layout.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-email\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
    })
], OneColumnLayoutComponent);

//# sourceMappingURL=one-column.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/sample/sample.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/sample/sample.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var SampleLayoutComponent = (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    return SampleLayoutComponent;
}());
SampleLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-sample-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/sample/sample.layout.scss")],
        template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [right]=\"sidebar.id === 'right'\">\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-email\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [right]=\"sidebar.id !== 'right'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["a" /* NbThemeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbMediaBreakpointsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbSidebarService */]) === "function" && _e || Object])
], SampleLayoutComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sample.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeColumnsLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = (function () {
    function ThreeColumnsLayoutComponent() {
    }
    return ThreeColumnsLayoutComponent;
}());
ThreeColumnsLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-three-columns-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-email\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
    })
], ThreeColumnsLayoutComponent);

//# sourceMappingURL=three-columns.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = (function () {
    function TwoColumnsLayoutComponent() {
    }
    return TwoColumnsLayoutComponent;
}());
TwoColumnsLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-two-columns-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-email\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
    })
], TwoColumnsLayoutComponent);

//# sourceMappingURL=two-columns.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxCapitalize' })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    return PluralPipe;
}());
PluralPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxPlural' })
], PluralPipe);

//# sourceMappingURL=plural.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxRound' })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    return TimingPipe;
}());
TimingPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'timing' })
], TimingPipe);

//# sourceMappingURL=timing.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.cosmic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};
//# sourceMappingURL=theme.cosmic.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};
//# sourceMappingURL=theme.default.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes__ = __webpack_require__("../../../../../src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts__ = __webpack_require__("../../../../../src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_theme_default__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_theme_cosmic__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.cosmic.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["c" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["b" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["f" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["g" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["i" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["j" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["d" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ThemeSwitcherComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["c" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["d" /* FooterPublicComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["e" /* HeaderPublicComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["f" /* HeaderPublicTopComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["g" /* SearchInputComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["h" /* ThemeSettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["i" /* TinyMCEComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["a" /* OneColumnLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["b" /* SampleLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["c" /* HomeLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["d" /* ThreeColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["e" /* TwoColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["j" /* MultipleCarousel */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_6__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["d" /* TimingPipe */],
];
var NB_THEME_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["l" /* NbThemeModule */].forRoot({
        name: 'default',
    }, [__WEBPACK_IMPORTED_MODULE_8__styles_theme_default__["a" /* DEFAULT_THEME */], __WEBPACK_IMPORTED_MODULE_9__styles_theme_cosmic__["a" /* COSMIC_THEME */]]).providers,
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbSidebarModule */].forRoot().providers,
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["g" /* NbMenuModule */].forRoot().providers,
];
var ThemeModule = ThemeModule_1 = (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    return ThemeModule;
}());
ThemeModule = ThemeModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: BASE_MODULES.concat(NB_MODULES),
        exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
        declarations: COMPONENTS.concat(PIPES),
    })
], ThemeModule);

var ThemeModule_1;
//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'merchants', loadChildren: 'app/merchants/merchants.module#MerchantsModule' },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__auth__["i" /* NbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__auth__["j" /* NbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__auth__["j" /* NbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_2__auth__["k" /* NbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_2__auth__["l" /* NbLogoutComponent */],
            },
            {
                path: 'request-password',
                component: __WEBPACK_IMPORTED_MODULE_2__auth__["m" /* NbRequestPasswordComponent */],
            },
            {
                path: 'reset-password',
                component: __WEBPACK_IMPORTED_MODULE_2__auth__["n" /* NbResetPasswordComponent */],
            },
        ],
    },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, config)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var AppComponent = (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-app',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/bundles/platform-browser-animations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/bundles/common-http.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/@core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["BrowserAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__theme_theme_module__["a" /* ThemeModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__auth__["a" /* NbAuthModule */].forRoot({
                providers: {
                    email: {
                        service: __WEBPACK_IMPORTED_MODULE_13__auth__["b" /* NbEmailPassAuthProvider */],
                    },
                },
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"], useValue: '/' },
            { provide: __WEBPACK_IMPORTED_MODULE_13__auth__["c" /* NB_AUTH_TOKEN_WRAPPER_TOKEN */], useClass: __WEBPACK_IMPORTED_MODULE_13__auth__["d" /* NbAuthSimpleToken */] },
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["HTTP_INTERCEPTORS"], useClass: __WEBPACK_IMPORTED_MODULE_13__auth__["e" /* NbAuthJWTInterceptor */], multi: true },
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/bundles/common-http.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dummy_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/dummy-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_email_pass_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/email-pass-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_auth_component__ = __webpack_require__("../../../../../src/app/auth/components/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_token_service__ = __webpack_require__("../../../../../src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_auth_block_auth_block_component__ = __webpack_require__("../../../../../src/app/auth/components/auth-block/auth-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("../../../../../src/app/auth/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_request_password_request_password_component__ = __webpack_require__("../../../../../src/app/auth/components/request-password/request-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_routes__ = __webpack_require__("../../../../../src/app/auth/auth.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* unused harmony export nbAuthServiceFactory */
/* unused harmony export nbOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















function nbAuthServiceFactory(config, tokenService, injector) {
    var providers = config.providers || {};
    for (var key in providers) {
        if (providers.hasOwnProperty(key)) {
            var provider = providers[key];
            var object = injector.get(provider.service);
            object.setConfig(provider.config || {});
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["b" /* NbAuthService */](tokenService, injector, providers);
}
function nbOptionsFactory(options) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__helpers__["c" /* deepExtend */])(__WEBPACK_IMPORTED_MODULE_10__auth_options__["e" /* defaultSettings */], options);
}
var NbAuthModule = NbAuthModule_1 = (function () {
    function NbAuthModule() {
    }
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_10__auth_options__["f" /* NB_AUTH_USER_OPTIONS_TOKEN */], useValue: nbAuthOptions },
                { provide: __WEBPACK_IMPORTED_MODULE_10__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */], useFactory: nbOptionsFactory, deps: [__WEBPACK_IMPORTED_MODULE_10__auth_options__["f" /* NB_AUTH_USER_OPTIONS_TOKEN */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__auth_options__["d" /* NB_AUTH_PROVIDERS_TOKEN */], useValue: {} },
                { provide: __WEBPACK_IMPORTED_MODULE_10__auth_options__["a" /* NB_AUTH_TOKEN_WRAPPER_TOKEN */], useClass: __WEBPACK_IMPORTED_MODULE_12__services_token_service__["a" /* NbAuthSimpleToken */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__auth_options__["b" /* NB_AUTH_INTERCEPTOR_HEADER */], useValue: 'Authorization' },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["b" /* NbAuthService */],
                    useFactory: nbAuthServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_10__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */], __WEBPACK_IMPORTED_MODULE_12__services_token_service__["b" /* NbTokenService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]],
                },
                __WEBPACK_IMPORTED_MODULE_12__services_token_service__["b" /* NbTokenService */],
                __WEBPACK_IMPORTED_MODULE_7__providers_dummy_auth_provider__["a" /* NbDummyAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_email_pass_auth_provider__["a" /* NbEmailPassAuthProvider */],
            ],
        };
    };
    return NbAuthModule;
}());
NbAuthModule = NbAuthModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["b" /* NbLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["c" /* NbCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["d" /* NbCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_19__auth_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HttpClientModule"],
            __WEBPACK_IMPORTED_MODULE_9__theme_theme_module__["a" /* ThemeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__components_auth_component__["a" /* NbAuthComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_auth_block_auth_block_component__["a" /* NbAuthBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* NbLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* NbRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_request_password_request_password_component__["a" /* NbRequestPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_reset_password_reset_password_component__["a" /* NbResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_logout_logout_component__["a" /* NbLogoutComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__components_auth_component__["a" /* NbAuthComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_auth_block_auth_block_component__["a" /* NbAuthBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* NbLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* NbRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_request_password_request_password_component__["a" /* NbRequestPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_reset_password_reset_password_component__["a" /* NbResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_logout_logout_component__["a" /* NbLogoutComponent */],
        ],
    })
], NbAuthModule);

var NbAuthModule_1;
//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NB_AUTH_OPTIONS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NB_AUTH_USER_OPTIONS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NB_AUTH_PROVIDERS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NB_AUTH_TOKEN_WRAPPER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NB_AUTH_INTERCEPTOR_HEADER; });

var defaultSettings = {
    forms: {
        login: {
            redirectDelay: 500,
            provider: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true,
            },
        },
        register: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
        },
        requestPassword: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
        },
        resetPassword: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
        },
        logout: {
            redirectDelay: 500,
            provider: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            companyname: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            categoryId: {
                required: true,
            },
            username: {
                required: true,
            },
            firstName: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            contactNumber: {
                required: true,
            },
            lastName: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
var NB_AUTH_OPTIONS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Auth Options');
var NB_AUTH_USER_OPTIONS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular User Auth Options');
var NB_AUTH_PROVIDERS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Auth Providers');
var NB_AUTH_TOKEN_WRAPPER_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Auth Token');
var NB_AUTH_INTERCEPTOR_HEADER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Simple Interceptor Header');
//# sourceMappingURL=auth.options.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_auth_component__ = __webpack_require__("../../../../../src/app/auth/components/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("../../../../../src/app/auth/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_request_password_request_password_component__ = __webpack_require__("../../../../../src/app/auth/components/request-password/request-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/components/reset-password/reset-password.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });






var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_0__components_auth_component__["a" /* NbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* NbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* NbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* NbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__["a" /* NbLogoutComponent */],
            },
            {
                path: 'request-password',
                component: __WEBPACK_IMPORTED_MODULE_4__components_request_password_request_password_component__["a" /* NbRequestPasswordComponent */],
            },
            {
                path: 'reset-password',
                component: __WEBPACK_IMPORTED_MODULE_5__components_reset_password_reset_password_component__["a" /* NbResetPasswordComponent */],
            },
        ],
    }
];
//# sourceMappingURL=auth.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/auth-block/auth-block.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n@media (max-width: 550px) {\n  :host /deep/ .accept-group {\n    font-size: 12px;\n    padding: 0; } }\n\n:host /deep/ form {\n  width: 100%; }\n\n:host /deep/ .alert {\n  text-align: center; }\n\n:host /deep/ .title {\n  margin-bottom: 0.75rem;\n  text-align: center; }\n\n:host /deep/ .sub-title {\n  margin-bottom: 2rem;\n  text-align: center; }\n\n:host /deep/ .checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n  font-weight: normal; }\n\n:host /deep/ .form-group.accept-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 2rem 0; }\n  :host /deep/ .form-group.accept-group .forgot-password {\n    line-height: 2; }\n\n:host /deep/ .links {\n  text-align: center;\n  margin-top: 1.75rem; }\n  :host /deep/ .links .socials {\n    margin: 1.5rem 0 2.5rem; }\n  :host /deep/ .links .socials a {\n    font-size: 2rem;\n    margin: 0 1rem;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/auth-block/auth-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbAuthBlockComponent = (function () {
    function NbAuthBlockComponent() {
    }
    return NbAuthBlockComponent;
}());
NbAuthBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-auth-block',
        styles: [__webpack_require__("../../../../../src/app/auth/components/auth-block/auth-block.component.scss")],
        template: "\n    <ng-content>\n    </ng-content>\n  ",
    })
], NbAuthBlockComponent);

//# sourceMappingURL=auth-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem; }\n\n:host /deep/ nb-card {\n  height: calc(100vh - 2 * 2.5rem); }\n\n:host /deep/ nb-card {\n  margin: 0;\n  margin-top: 8rem; }\n\n:host /deep/ nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n@media (max-width: 550px) {\n  :host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 0; }\n  :host /deep/ nb-card {\n    border-radius: 0;\n    height: 100vh;\n    margin-top: 5rem; }\n    :host /deep/ nb-card nb-card-body .register {\n      padding-top: 20rem; } }\n\n@media (max-width: 410px) {\n  :host /deep/ nb-card {\n    border-radius: 0;\n    height: 100vh;\n    margin-top: 5rem; }\n    :host /deep/ nb-card nb-card-body .register {\n      padding-top: 24rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_menu__ = __webpack_require__("../../../../../src/app/home/home-menu.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var NbAuthComponent = (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.menu = __WEBPACK_IMPORTED_MODULE_2__home_home_menu__["a" /* MENU_ITEMS */];
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return NbAuthComponent;
}());
NbAuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-auth',
        styles: [__webpack_require__("../../../../../src/app/auth/components/auth.component.scss")],
        template: "\n  <ngx-home-layout>    \n      <nb-menu [items]=\"menu\"></nb-menu>  \n      <router-outlet></router-outlet>\n    </ngx-home-layout>    \n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object])
], NbAuthComponent);

var _a;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_component__ = __webpack_require__("../../../../../src/app/auth/components/auth.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_block_auth_block_component__ = __webpack_require__("../../../../../src/app/auth/components/auth-block/auth-block.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/auth/components/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/components/logout/logout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/auth/components/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__ = __webpack_require__("../../../../../src/app/auth/components/request-password/request-password.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/components/reset-password/reset-password.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbLoginComponent = (function () {
    function NbLoginComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
    }
    NbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getDeepFromObject */])(this.config, key, null);
    };
    return NbLoginComponent;
}());
NbLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-login',
        template: "\n    <nb-auth-block>\n\n        <nb-card>\n          <nb-card-body>\n            <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              \n           \n      \n      <h2 class=\"title\">Sign In</h2>\n      <small class=\"form-text sub-title\">Hello! Sign in with your username or email</small>\n\n      <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" pattern=\".+\\@.+\\..+\"\n                 class=\"form-control\" placeholder=\"Email address\" #email=\"ngModel\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\" autofocus\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group accept-group col-sm-12\">\n          <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\">Remember me</nb-checkbox>\n          <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\">\n          Sign In\n        </button>\n      </form>\n      <div class=\"links\">\n        \n        <small class=\"form-text\">\n          Don't have an account? <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n      \n       </div>\n          </nb-card-body>\n        </nb-card>\n    </nb-auth-block>\n  ",
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NbLoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbLogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var NbLogoutComponent = (function () {
    function NbLogoutComponent(service, router) {
        this.service = service;
        this.router = router;
        this.redirectDelay = 1500;
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout('email');
    };
    NbLogoutComponent.prototype.logout = function (provider) {
        var _this = this;
        this.service.logout(provider).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    return NbLogoutComponent;
}());
NbLogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-logout',
        template: "\n    <div>Logging out, please wait...</div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NbLogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-auth-block>\r\n    <nb-card>\r\n        <nb-card-body>\r\n            <div class=\"register col-xl-6 col-lg-6 col-md-8 col-sm-12\">\r\n                <h2 class=\"title\">Sign Up</h2>\r\n                <form (ngSubmit)=\"register()\" #form=\"ngForm\">\r\n                    <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <div><strong>Oh snap!</strong></div>\r\n                        <div *ngFor=\"let error of errors\">{{ error }}</div>\r\n                    </div>\r\n                    <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\r\n                        <div><strong>Hooray!</strong></div>\r\n                        <div *ngFor=\"let message of messages\">{{ message }}</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"input-companyname\" class=\"sr-only-no\">Company name</label>\r\n                                <input name=\"companyname\" [(ngModel)]=\"user.companyname\" id=\"input-companyname\" #companyname=\"ngModel\" class=\"form-control\" placeholder=\"Company name\" [class.form-control-danger]=\" companyname.invalid && companyname.touched\" [required]=\"getConfigValue('forms.validation.companyname.required')\" [minlength]=\"getConfigValue('forms.validation.companyname.minLength')\" [maxlength]=\"getConfigValue('forms.validation.companyname.maxLength')\" >\r\n                                <small class=\"form-text error\" *ngIf=\"companyname.invalid && companyname.touched && companyname.errors?.required\">\r\n                                  Company name is required!\r\n                                </small>\r\n                                <small class=\"form-text error\" *ngIf=\"companyname.invalid && companyname.touched && (companyname.errors?.minlength || companyname.errors?.maxlength)\">\r\n                                  Company name should contains\r\n                                  from {{getConfigValue('forms.validation.password.minLength')}}\r\n                                  to {{getConfigValue('forms.validation.password.maxLength')}}\r\n                                  characters\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                          <div class=\"form-group\">\r\n                                <label for=\"input-categoryId\" class=\"sr-only-no\">Business Type</label>\r\n                                <select name=\"categoryId\" [(ngModel)]='user.categoryId' id=\"select-categoryId\"\r\n                                #categoryId=\"ngModel\" class=\"form-control\" \r\n                                [class.form-control-danger]=\"categoryId.invalid && categoryId.touched\" \r\n                                [required]=\"getConfigValue('forms.validation.categoryId.required')\"\r\n                                >                                                                    \r\n                                  <option *ngFor=\"let r of categoryList\" [value]=\"r.id\">{{ r.label }}</option> \r\n                                </select>\r\n                                 <small class=\"form-text error\" *ngIf=\"categoryId.invalid && categoryId.touched && categoryId.errors?.required\">\r\n                                  Please select Business type!\r\n                                </small>\r\n                            </div>                            \r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"input-firstName\" class=\"sr-only-no\">First name</label>\r\n                                <input name=\"firstName\" [(ngModel)]=\"user.firstName\" id=\"input-firstName\" #firstName=\"ngModel\" class=\"form-control\" placeholder=\"First name\" [class.form-control-danger]=\"firstName.invalid && firstName.touched\" [required]=\"getConfigValue('forms.validation.firstName.required')\" [minlength]=\"getConfigValue('forms.validation.firstName.minLength')\" [maxlength]=\"getConfigValue('forms.validation.firstName.maxLength')\" >\r\n                                <small class=\"form-text error\" *ngIf=\"firstName.invalid && firstName.touched && firstName.errors?.required\">\r\n                                  First name is required!\r\n                                </small>\r\n                                <small class=\"form-text error\" *ngIf=\"firstName.invalid && firstName.touched && (firstName.errors?.minlength || firstName.errors?.maxlength)\">\r\n                                  First name should contains\r\n                                  from {{getConfigValue('forms.validation.password.minLength')}}\r\n                                  to {{getConfigValue('forms.validation.password.maxLength')}}\r\n                                  characters\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"input-lastName\" class=\"sr-only-no\">Last name</label>\r\n                                <input name=\"lastName\" [(ngModel)]=\"user.lastName\" id=\"input-lastName\" #lastName=\"ngModel\" class=\"form-control\" placeholder=\"Last name\" [class.form-control-danger]=\"lastName.invalid && lastName.touched\" [required]=\"getConfigValue('forms.validation.lastName.required')\" [minlength]=\"getConfigValue('forms.validation.lastName.minLength')\" [maxlength]=\"getConfigValue('forms.validation.lastName.maxLength')\">\r\n                                <small class=\"form-text error\" *ngIf=\"lastName.invalid && lastName.touched && lastName.errors?.required\">\r\n                                  Last name is required!\r\n                                </small>\r\n                                <small class=\"form-text error\" *ngIf=\"lastName.invalid && lastName.touched && (lastName.errors?.minlength || lastName.errors?.maxlength)\">\r\n                                  Last name should contains\r\n                                  from {{getConfigValue('forms.validation.password.minLength')}}\r\n                                  to {{getConfigValue('forms.validation.password.maxLength')}}\r\n                                  characters\r\n                                </small>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"input-contactNumber\" class=\"sr-only-no\">Contact number</label>\r\n                              <input name=\"contactNumber\" [(ngModel)]=\"user.contactNumber\" id=\"input-contactNumber\" #contactNumber=\"ngModel\" class=\"form-control\" placeholder=\"Contact number\" pattern=\"[0-9]{10}$\" [class.form-control-danger]=\"contactNumber.invalid && contactNumber.touched\" [required]=\"getConfigValue('forms.validation.contactNumber.required')\" [minlength]=\"10\" [maxlength]=\"10\" >\r\n                              <small class=\"form-text error\" *ngIf=\"contactNumber.invalid && contactNumber.touched && contactNumber.errors?.required\">\r\n                                Contact number is required!\r\n                              </small>  \r\n                               <small class=\"form-text error\" *ngIf=\"contactNumber.invalid && contactNumber.touched && (contactNumber.errors?.minlength || contactNumber.errors?.maxlength)\">\r\n                                  Contact Number should contain 10 numbers\r\n                                </small>  \r\n                                <small class=\"form-text error\" *ngIf=\"contactNumber.invalid && contactNumber.touched && contactNumber.errors?.pattern\">\r\n                                Contact Number should be only digits / numder\r\n                              </small>                          \r\n                          </div>\r\n                        </div>              \r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"input-username\" class=\"sr-only-no\">Email address</label>\r\n                              <input name=\"username\" [(ngModel)]=\"user.username\" type=\"text\" id=\"input-username\"  class=\"form-control\" placeholder=\"Email address\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" #username=\"ngModel\" \r\n                              [class.form-control-danger]=\"username.invalid && username.touched\" [required]=\"getConfigValue('forms.validation.username.required')\">\r\n                              <small class=\"form-text error\" *ngIf=\"username.invalid && username.touched && username.errors?.required\">\r\n                                Email is required!\r\n                              </small>\r\n                              <small class=\"form-text error\" *ngIf=\"username.invalid && username.touched && username.errors?.pattern\">\r\n                                Email should be the real one!\r\n                              </small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"input-password\" class=\"sr-only-no\">Password</label>\r\n                              <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\" class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\" [class.form-control-danger]=\"password.invalid && password.touched\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\r\n                              <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\r\n                                Password is required!\r\n                              </small>\r\n                              <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\r\n                                Password should contains\r\n                                from {{ getConfigValue('forms.validation.password.minLength') }}\r\n                                to {{ getConfigValue('forms.validation.password.maxLength') }}\r\n                                characters\r\n                              </small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-6 col-md-6\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"input-re-password\" class=\"sr-only-no\">Repeat password</label>\r\n                              <input name=\"rePass\" [(ngModel)]=\"user.confirmpassword\" type=\"password\" id=\"input-re-password\" class=\"form-control\" placeholder=\"Confirm Password\" #rePass=\"ngModel\" [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\" [required]=\"getConfigValue('forms.validation.password.required')\">\r\n                              <small class=\"form-text error\" *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\r\n                                Password confirmation is required!\r\n                              </small>\r\n                              <small class=\"form-text error\" *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\r\n                                Password does not match the confirm password.\r\n                              </small>\r\n                          </div>\r\n                        </div>\r\n                    </div>                   \r\n                    \r\n                    \r\n                    <div class=\"form-group accept-group col-sm-12\" *ngIf=\"getConfigValue('forms.register.terms')\">\r\n                        <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\r\n                            Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\r\n                        </nb-checkbox>\r\n                    </div>\r\n                    <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\" [class.btn-pulse]=\"submitted\">\r\n                        Register\r\n                    </button>\r\n                </form>\r\n                <div class=\"links\">\r\n                    <small class=\"form-text\">\r\n                      Already have an account? <a routerLink=\"../login\"><strong>Sign in</strong></a>\r\n                    </small>\r\n                </div>\r\n            </div>\r\n        </nb-card-body>\r\n    </nb-card>\r\n</nb-auth-block>"

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .title {\n  margin-bottom: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbRegisterComponent = (function () {
    function NbRegisterComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.categoryList = [
            { id: "5a290b2d539eb0b14cd91d0c", label: 'Food & Beverages' },
            { id: "5a290ba6539eb0b14cd91d1f", label: 'SPA' },
            { id: "5a290b84539eb0b14cd91d1a", label: 'Wellness' },
            { id: "57d900c2df896e82ac1f8548", label: 'Entertainment' },
            { id: "5a290c78539eb0b14cd91d37", label: 'Travel' },
            { id: "5a290c83539eb0b14cd91d39", label: 'E-Shopping' },
            { id: "5a290c8f539eb0b14cd91d3d", label: 'Services' }
        ];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.provider = this.getConfigValue('forms.register.provider');
    }
    NbRegisterComponent.prototype.register = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            console.log(result);
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbRegisterComponent.prototype.getConfigValue = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getDeepFromObject */])(this.config, key, null);
    };
    return NbRegisterComponent;
}());
NbRegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-register',
        styles: [__webpack_require__("../../../../../src/app/auth/components/register/register.component.scss")],
        template: __webpack_require__("../../../../../src/app/auth/components/register/register.component.html"),
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NbRegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/request-password/request-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host .form-group:last-of-type {\n  margin-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/request-password/request-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbRequestPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbRequestPasswordComponent = (function () {
    function NbRequestPasswordComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.provider = this.getConfigValue('forms.requestPassword.provider');
    }
    NbRequestPasswordComponent.prototype.requestPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbRequestPasswordComponent.prototype.getConfigValue = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getDeepFromObject */])(this.config, key, null);
    };
    return NbRequestPasswordComponent;
}());
NbRequestPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-request-password-page',
        styles: [__webpack_require__("../../../../../src/app/auth/components/request-password/request-password.component.scss")],
        template: "\n    <nb-auth-block>\n     <nb-card>\n          <nb-card-body>\n            <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n      <h2 class=\"title\">Forgot Password</h2>\n      <small class=\"form-text sub-title\">Enter your email adress and we\u2019ll send a like to reset your password</small>\n      <form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Enter your email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+\\@.+\\..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !requestPassForm.form.valid\" class=\"btn btn-hero-success btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Request password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n      </div>\n          </nb-card-body>\n        </nb-card>\n    </nb-auth-block>\n  ",
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NbRequestPasswordComponent);

var _a, _b;
//# sourceMappingURL=request-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host .form-group:last-of-type {\n  margin-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbResetPasswordComponent = (function () {
    function NbResetPasswordComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.provider = this.getConfigValue('forms.resetPassword.provider');
    }
    NbResetPasswordComponent.prototype.resetPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbResetPasswordComponent.prototype.getConfigValue = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* getDeepFromObject */])(this.config, key, null);
    };
    return NbResetPasswordComponent;
}());
NbResetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-reset-password-page',
        styles: [__webpack_require__("../../../../../src/app/auth/components/reset-password/reset-password.component.scss")],
        template: "\n    <nb-auth-block>\n     <nb-card>\n          <nb-card-body>\n            <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n      <h2 class=\"title\">Change password</h2>\n      <small class=\"form-text sub-title\">Please enter a new password</small>\n      <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\">\n\n        <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">New Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control form-control-lg first\" placeholder=\"New Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{getConfigValue('forms.validation.password.minLength')}}\n            to {{getConfigValue('forms.validation.password.maxLength')}}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-re-password\" class=\"sr-only\">Confirm Password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !resetPassForm.form.valid\" class=\"btn btn-hero-success btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Change password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n      </div>\n          </nb-card-body>\n        </nb-card>\n    </nb-auth-block>\n  ",
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NbResetPasswordComponent);

var _a, _b;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deepExtend; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getDeepFromObject;
/* harmony export (immutable) */ __webpack_exports__["b"] = urlBase64Decode;
/* unused harmony export b64decode */
/* unused harmony export b64DecodeUnicode */
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */ var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object || {});
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../../../../src/app/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/auth/components/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/auth/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__("../../../../../src/app/auth/providers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["b"]; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/auth/providers/abstract-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/bundles/common-http.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAbstractAuthProvider; });


var NbAbstractAuthProvider = (function () {
    function NbAbstractAuthProvider() {
        this.defaultConfig = {};
        this.config = {};
    }
    NbAbstractAuthProvider.prototype.setConfig = function (config) {
        this.config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* deepExtend */])({}, this.defaultConfig, config);
    };
    NbAbstractAuthProvider.prototype.getConfigValue = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* getDeepFromObject */])(this.config, key, null);
    };
    NbAbstractAuthProvider.prototype.createFailResponse = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpResponse"]({ body: {}, status: 401 });
    };
    NbAbstractAuthProvider.prototype.createSuccessResponse = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpResponse"]({ body: {}, status: 200 });
    };
    NbAbstractAuthProvider.prototype.getJsonSafe = function (res) {
        return res.body;
    };
    return NbAbstractAuthProvider;
}());

//# sourceMappingURL=abstract-auth.provider.js.map

/***/ }),

/***/ "../../../../../src/app/auth/providers/dummy-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/abstract-auth.provider.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbDummyAuthProvider; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NbDummyAuthProvider = (function (_super) {
    __extends(NbDummyAuthProvider, _super);
    function NbDummyAuthProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultConfig = {
            delay: 1000,
        };
        return _this;
    }
    NbDummyAuthProvider.prototype.authenticate = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.createDummyResult(data))
            .delay(this.getConfigValue('delay'));
    };
    NbDummyAuthProvider.prototype.register = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.createDummyResult(data))
            .delay(this.getConfigValue('delay'));
    };
    NbDummyAuthProvider.prototype.requestPassword = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.createDummyResult(data))
            .delay(this.getConfigValue('delay'));
    };
    NbDummyAuthProvider.prototype.resetPassword = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.createDummyResult(data))
            .delay(this.getConfigValue('delay'));
    };
    NbDummyAuthProvider.prototype.logout = function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.createDummyResult(data))
            .delay(this.getConfigValue('delay'));
    };
    NbDummyAuthProvider.prototype.createDummyResult = function (data) {
        if (this.getConfigValue('alwaysFail')) {
            return new __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* NbAuthResult */](false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* NbAuthResult */](true, this.createSuccessResponse(data), '/', ['Successfully logged in.']);
    };
    return NbDummyAuthProvider;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_auth_provider__["a" /* NbAbstractAuthProvider */]));
NbDummyAuthProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NbDummyAuthProvider);

//# sourceMappingURL=dummy-auth.provider.js.map

/***/ }),

/***/ "../../../../../src/app/auth/providers/email-pass-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/bundles/common-http.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abstract_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/abstract-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbEmailPassAuthProvider; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










/**
 * The most common authentication provider.
 * The following options are available (with default values):
 *
 *
 *
 * @example
 *
 * Default settings object:
 * ```
 * {
 *  baseEndpoint: '',
 *  login: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/login',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  },
 *  register: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/register',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  },
 *  logout: {
 *    alwaysFail: false,
 *    endpoint: '/api/auth/logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  },
 *  requestPass: {
 *    endpoint: '/api/auth/request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  },
 *  resetPass: {
 *    endpoint: '/api/auth/reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  },
 *  token: {
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('token.key')),
 *  },
 *  errors: {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse) => getDeepFromObject(res.error,
 *      this.getConfigValue('errors.key'),
 *      this.getConfigValue(`${module}.defaultErrors`)),
 *  },
 *  messages: {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('messages.key'),
 *      this.getConfigValue(`${module}.defaultMessages`)),
 *  },
 *}
 * ```
 */
var NbEmailPassAuthProvider = (function (_super) {
    __extends(NbEmailPassAuthProvider, _super);
    function NbEmailPassAuthProvider(http, route) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.defaultConfig = {
            baseEndpoint: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl,
            login: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'login',
                method: 'post',
                redirect: {
                    success: '/merchants',
                    failure: '/auth/login',
                },
                defaultErrors: ['Login/Email combination is not correct, please try again.'],
                defaultMessages: ['You have been successfully logged in.'],
            },
            register: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'register',
                method: 'post',
                redirect: {
                    success: '/auth/register',
                    failure: '/auth/register',
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully registered. Please verify the mail.'],
            },
            logout: {
                alwaysFail: false,
                endpoint: 'logout',
                method: 'post',
                redirect: {
                    success: '/auth/login',
                    failure: '/',
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully logged out.'],
            },
            requestPass: {
                endpoint: 'request-pass',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Reset password instructions have been sent to your email.'],
            },
            resetPass: {
                endpoint: 'reset-pass',
                method: 'put',
                redirect: {
                    success: '/',
                    failure: null,
                },
                resetPasswordTokenKey: 'reset_password_token',
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Your password has been successfully changed.'],
            },
            token: {
                key: 'data.token',
                getter: function (module, res) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__helpers__["a" /* getDeepFromObject */])(res.body, _this.getConfigValue('token.key')); },
            },
            errors: {
                key: 'data.errors',
                getter: function (module, res) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__helpers__["a" /* getDeepFromObject */])(res.error, _this.getConfigValue('errors.key'), _this.getConfigValue(module + ".defaultErrors")); },
            },
            messages: {
                key: 'data.messages',
                getter: function (module, res) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__helpers__["a" /* getDeepFromObject */])(res.body, _this.getConfigValue('messages.key'), _this.getConfigValue(module + ".defaultMessages")); },
            },
        };
        return _this;
    }
    NbEmailPassAuthProvider.prototype.authenticate = function (data) {
        var _this = this;
        var method = this.getConfigValue('login.method');
        var url = this.getActionEndpoint('login');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .map(function (res) {
            if (_this.getConfigValue('login.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        })
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](true, res, _this.getConfigValue('login.redirect.success'), [], _this.getConfigValue('messages.getter')('login', res), _this.getConfigValue('token.getter')('login', res));
        })
            .catch(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('login', res);
                errors.push(res.error.error);
            }
            else {
                errors.push('Something went wrong.');
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](false, res, _this.getConfigValue('login.redirect.failure'), errors));
        });
    };
    NbEmailPassAuthProvider.prototype.register = function (data) {
        var _this = this;
        var method = this.getConfigValue('register.method');
        var url = this.getActionEndpoint('register');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .map(function (res) {
            if (_this.getConfigValue('register.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        })
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](true, res, _this.getConfigValue('register.redirect.success'), [], _this.getConfigValue('messages.getter')('register', res), _this.getConfigValue('token.getter')('register', res));
        })
            .catch(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('register', res);
                errors.push(res.error.error);
            }
            else {
                errors.push('Something went wrong.');
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](false, res, _this.getConfigValue('register.redirect.failure'), errors));
        });
    };
    NbEmailPassAuthProvider.prototype.requestPassword = function (data) {
        var _this = this;
        var method = this.getConfigValue('requestPass.method');
        var url = this.getActionEndpoint('requestPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .map(function (res) {
            if (_this.getConfigValue('requestPass.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        })
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](true, res, _this.getConfigValue('requestPass.redirect.success'), [], _this.getConfigValue('messages.getter')('requestPass', res));
        })
            .catch(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('requestPass', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](false, res, _this.getConfigValue('requestPass.redirect.failure'), errors));
        });
    };
    NbEmailPassAuthProvider.prototype.resetPassword = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var tokenKey = this.getConfigValue('resetPass.resetPasswordTokenKey');
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        var method = this.getConfigValue('resetPass.method');
        var url = this.getActionEndpoint('resetPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .map(function (res) {
            if (_this.getConfigValue('resetPass.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        })
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](true, res, _this.getConfigValue('resetPass.redirect.success'), [], _this.getConfigValue('messages.getter')('resetPass', res));
        })
            .catch(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('resetPass', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](false, res, _this.getConfigValue('resetPass.redirect.failure'), errors));
        });
    };
    NbEmailPassAuthProvider.prototype.logout = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var tokenKey = this.getConfigValue('token.key');
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        var method = this.getConfigValue('logout.method');
        var url = this.getActionEndpoint('logout');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of({})
            .switchMap(function (res) {
            if (!url) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(res);
            }
            return _this.http.request(method, url, { observe: 'response' });
        })
            .map(function (res) {
            if (_this.getConfigValue('logout.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        })
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](true, res, _this.getConfigValue('logout.redirect.success'), [], _this.getConfigValue('messages.getter')('logout', res));
        })
            .catch(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpErrorResponse"]) {
                errors = _this.getConfigValue('errors.getter')('logout', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* NbAuthResult */](false, res, _this.getConfigValue('logout.redirect.failure'), errors));
        });
    };
    NbEmailPassAuthProvider.prototype.getActionEndpoint = function (action) {
        var actionEndpoint = this.getConfigValue(action + ".endpoint");
        var baseEndpoint = this.getConfigValue('baseEndpoint');
        return baseEndpoint + actionEndpoint;
    };
    return NbEmailPassAuthProvider;
}(__WEBPACK_IMPORTED_MODULE_8__abstract_auth_provider__["a" /* NbAbstractAuthProvider */]));
NbEmailPassAuthProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], NbEmailPassAuthProvider);

var _a, _b;
//# sourceMappingURL=email-pass-auth.provider.js.map

/***/ }),

/***/ "../../../../../src/app/auth/providers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/abstract-auth.provider.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/dummy-auth.provider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dummy_auth_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_pass_auth_provider__ = __webpack_require__("../../../../../src/app/auth/providers/email-pass-auth.provider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__email_pass_auth_provider__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_service__ = __webpack_require__("../../../../../src/app/auth/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NbAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var NbAuthResult = (function () {
    // TODO pass arguments in options object
    function NbAuthResult(success, response, redirect, errors, messages, token) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        if (this.response.body) {
            this.token = this.response.body.token;
        }
        else {
            this.token = null;
        }
    }
    NbAuthResult.prototype.getResponse = function () {
        return this.response;
    };
    NbAuthResult.prototype.getTokenValue = function () {
        return this.token;
    };
    NbAuthResult.prototype.replaceToken = function (token) {
        this.token = token;
    };
    NbAuthResult.prototype.getRedirect = function () {
        return this.redirect;
    };
    NbAuthResult.prototype.getErrors = function () {
        return this.errors.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.getMessages = function () {
        return this.messages.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.isSuccess = function () {
        return this.success;
    };
    NbAuthResult.prototype.isFailure = function () {
        return !this.success;
    };
    return NbAuthResult;
}());

var NbAuthService = (function () {
    function NbAuthService(tokenService, injector, providers) {
        if (providers === void 0) { providers = {}; }
        this.tokenService = tokenService;
        this.injector = injector;
        this.providers = providers;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.getToken = function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is presented in the token storage
     * // TODO: check exp date for JWT token
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.isAuthenticated = function () {
        return this.getToken().map(function (token) { return token && token.getValue(); });
    };
    /**
     * Returns tokens stream
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.onTokenChange = function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     *  // TODO: check exp date for JWT token
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.onAuthenticationChange = function () {
        return this.onTokenChange().map(function (token) { return !!token; });
    };
    /**
     * Authenticates with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.authenticate = function (provider, data) {
        var _this = this;
        return this.getProvider(provider).authenticate(data)
            .switchMap(function (result) {
            if (result.isSuccess() && result.getTokenValue()) {
                return _this.tokenService.set(result.getTokenValue())
                    .switchMap(function (_) { return _this.tokenService.get(); })
                    .map(function (token) {
                    result.replaceToken(token);
                    return result;
                });
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result);
        });
    };
    /**
     * Registers with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.register = function (provider, data) {
        var _this = this;
        return this.getProvider(provider).register(data)
            .switchMap(function (result) {
            if (result.isSuccess() && result.getTokenValue()) {
                return _this.tokenService.set(result.getTokenValue())
                    .switchMap(function (_) { return _this.tokenService.get(); })
                    .map(function (token) {
                    result.replaceToken(token);
                    return result;
                });
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result);
        });
    };
    /**
     * Sign outs with the selected provider
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param provider
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.logout = function (provider, data) {
        var _this = this;
        return this.getProvider(provider).logout()
            .do(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear().subscribe(function () { });
            }
        });
    };
    /**
     * Sends forgot password request to the selected provider
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.requestPassword = function (provider, data) {
        return this.getProvider(provider).requestPassword(data);
    };
    /**
     * Tries to reset password with the selected provider
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.resetPassword = function (provider, data) {
        return this.getProvider(provider).resetPassword(data);
    };
    NbAuthService.prototype.getProvider = function (provider) {
        if (!this.providers[provider]) {
            throw new TypeError("Nb auth provider '" + provider + "' is not registered");
        }
        return this.injector.get(this.providers[provider].service);
    };
    return NbAuthService;
}());
NbAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__auth_options__["d" /* NB_AUTH_PROVIDERS_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__token_service__["b" /* NbTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__token_service__["b" /* NbTokenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object, Object])
], NbAuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_service__ = __webpack_require__("../../../../../src/app/auth/services/token.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__token_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__token_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors_jwt_interceptor__ = __webpack_require__("../../../../../src/app/auth/services/interceptors/jwt-interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__interceptors_jwt_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_simple_interceptor__ = __webpack_require__("../../../../../src/app/auth/services/interceptors/simple-interceptor.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/interceptors/jwt-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthJWTInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NbAuthJWTInterceptor = (function () {
    function NbAuthJWTInterceptor(injector) {
        this.injector = injector;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        return this.authService.getToken()
            .switchMap(function (token) {
            if (token) {
                console.log('token === ' + token);
                var JWT = "Bearer " + token.getValue();
                req = req.clone({
                    setHeaders: {
                        Authorization: JWT,
                    },
                });
            }
            return next.handle(req);
        });
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__auth_service__["b" /* NbAuthService */]);
        },
        enumerable: true,
        configurable: true
    });
    return NbAuthJWTInterceptor;
}());
NbAuthJWTInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], NbAuthJWTInterceptor);

var _a;
//# sourceMappingURL=jwt-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/interceptors/simple-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* unused harmony export NbAuthSimpleInterceptor */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NbAuthSimpleInterceptor = (function () {
    function NbAuthSimpleInterceptor(injector, headerName) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
    }
    NbAuthSimpleInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getToken()
            .switchMap(function (token) {
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: (_a = {},
                        _a[_this.headerName] = token.getValue(),
                        _a),
                });
            }
            return next.handle(req);
            var _a;
        });
    };
    Object.defineProperty(NbAuthSimpleInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__auth_service__["b" /* NbAuthService */]);
        },
        enumerable: true,
        configurable: true
    });
    return NbAuthSimpleInterceptor;
}());
NbAuthSimpleInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__auth_options__["b" /* NB_AUTH_INTERCEPTOR_HEADER */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object, String])
], NbAuthSimpleInterceptor);

var _a;
//# sourceMappingURL=simple-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/auth/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_options__ = __webpack_require__("../../../../../src/app/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__("../../../../../src/app/auth/helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthSimpleToken; });
/* unused harmony export NbAuthJWTToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NbTokenService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/**
 * Wrapper for simple (text) token
 */
var NbAuthSimpleToken = (function () {
    function NbAuthSimpleToken() {
        this.token = '';
    }
    NbAuthSimpleToken.prototype.setValue = function (token) {
        this.token = token;
    };
    /**
     * Returns the token value
     * @returns string
     */
    NbAuthSimpleToken.prototype.getValue = function () {
        return this.token;
    };
    return NbAuthSimpleToken;
}());
NbAuthSimpleToken = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NbAuthSimpleToken);

/**
 * Wrapper for JWT token with additional methods.
 */
var NbAuthJWTToken = (function (_super) {
    __extends(NbAuthJWTToken, _super);
    function NbAuthJWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns payload object
     * @returns any
     */
    NbAuthJWTToken.prototype.getPayload = function () {
        var parts = this.token.split('.');
        if (parts.length !== 3) {
            throw new Error("The token " + this.token + " is not valid JWT token and must consist of three parts.");
        }
        var decoded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers__["b" /* urlBase64Decode */])(parts[1]);
        if (!decoded) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be decoded.");
        }
        return JSON.parse(decoded);
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    NbAuthJWTToken.prototype.getTokenExpDate = function () {
        var decoded = this.getPayload();
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    return NbAuthJWTToken;
}(NbAuthSimpleToken));
NbAuthJWTToken = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NbAuthJWTToken);

/**
 * Nebular token service. Provides access to the stored token.
 * By default returns NbAuthSimpleToken instance,
 * but you can inject NbAuthJWTToken if you need additional methods for JWT token.
 *
 * @example Injecting NbAuthJWTToken, so that NbTokenService will now return NbAuthJWTToken instead
 * of the default NbAuthSimpleToken
 *
 * ```
 * // import token and service into your AppModule
 * import { NB_AUTH_TOKEN_WRAPPER_TOKEN,  NbAuthJWTToken} from './auth';
 *
 * // add to a list of providers
 * providers: [
 *  // ...
 *  { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
 * ],
 * ```
 */
var NbTokenService = (function () {
    function NbTokenService(options, tokenWrapper) {
        var _this = this;
        this.options = options;
        this.tokenWrapper = tokenWrapper;
        this.defaultConfig = {
            token: {
                key: 'auth_app_token',
                getter: function () {
                    var tokenValue = localStorage.getItem(_this.getConfigValue('token.key'));
                    _this.tokenWrapper.setValue(tokenValue);
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.tokenWrapper);
                },
                setter: function (token) {
                    var raw = token instanceof NbAuthSimpleToken ? token.getValue() : token;
                    localStorage.setItem(_this.getConfigValue('token.key'), raw);
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
                },
                deleter: function () {
                    localStorage.removeItem(_this.getConfigValue('token.key'));
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
                },
            },
        };
        this.config = {};
        this.token$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.setConfig(options);
        this.get().subscribe(function (token) { return _this.publishToken(token); });
    }
    NbTokenService.prototype.setConfig = function (config) {
        this.config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers__["c" /* deepExtend */])({}, this.defaultConfig, config);
    };
    NbTokenService.prototype.getConfigValue = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* getDeepFromObject */])(this.config, key, null);
    };
    /**
     * Sets the token into the storage. This method is used by the NbAuthService automatically.
     * @param {string} rawToken
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.set = function (rawToken) {
        var _this = this;
        return this.getConfigValue('token.setter')(rawToken)
            .switchMap(function (_) { return _this.get(); })
            .do(function (token) {
            _this.publishToken(token);
        });
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthSimpleToken>}
     */
    NbTokenService.prototype.get = function () {
        return this.getConfigValue('token.getter')();
    };
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthSimpleToken>}
     */
    NbTokenService.prototype.tokenChange = function () {
        return this.token$.publish().refCount();
    };
    /**
     * Removes the token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.clear = function () {
        this.publishToken(null);
        return this.getConfigValue('token.deleter')();
    };
    NbTokenService.prototype.publishToken = function (token) {
        this.token$.next(token);
    };
    return NbTokenService;
}());
NbTokenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__auth_options__["c" /* NB_AUTH_OPTIONS_TOKEN */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__auth_options__["a" /* NB_AUTH_TOKEN_WRAPPER_TOKEN */])),
    __metadata("design:paramtypes", [Object, NbAuthSimpleToken])
], NbTokenService);

//# sourceMappingURL=token.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Home',
        link: '/home/index',
        home: true,
    },
    {
        title: 'Food & Beverages',
        link: '/home/index'
    },
    {
        title: 'Wellness',
        link: '/home/index'
    },
    {
        title: 'SPA',
        link: '/home/index'
    },
    {
        title: 'Entertainment',
        link: '/home/index'
    },
    {
        title: 'Travel',
        link: '/home/index'
    },
    {
        title: 'E Shopping',
        link: '/home/index'
    },
    {
        title: 'Register',
        link: '/auth/register'
    },
    {
        title: 'Login',
        link: '/auth/login'
    }
];
//# sourceMappingURL=home-menu.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */ var environment = {
    production: false,
    apiUrl: 'http://35.186.188.164:3000/frontend/api/v1/'
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map