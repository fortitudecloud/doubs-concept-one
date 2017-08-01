webpackJsonp([2,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "[menu] {\n  background-color: #000;\n  height: 50px; }\n  [menu] [menu-center] {\n    position: relative; }\n    [menu] [menu-center].bg {\n      width: 200px;\n      height: 200px;\n      background: url(" + __webpack_require__(167) + ");\n      background-size: 435px;\n      background-repeat: no-repeat;\n      background-position: -117px -124px; }\n    [menu] [menu-center] img {\n      width: 200px;\n      position: absolute;\n      top: 0;\n      right: -100px; }\n\n[site-menu] {\n  background-color: #fff; }\n  [site-menu] ul {\n    margin: 0;\n    text-align: center;\n    list-style: none;\n    padding: 0; }\n    [site-menu] ul li {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      width: 140px;\n      padding: 15px;\n      text-transform: uppercase; }\n      [site-menu] ul li.active {\n        background-color: #eaebec; }\n      [site-menu] ul li.logo {\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none;\n        width: 200px; }\n\n[hero] {\n  height: 500px;\n  background: url(" + __webpack_require__(168) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position-y: 0; }\n  [hero] label {\n    margin: 50px;\n    padding: 10px 40px;\n    color: #fff;\n    text-transform: uppercase;\n    background-color: #000;\n    font-size: 20px;\n    letter-spacing: 4px; }\n    [hero] label i {\n      margin: 0 0 0 20px; }\n\n[content] [body] {\n  width: 1230px; }\n  [content] [body] [block] {\n    margin: 20px; }\n    [content] [body] [block] img {\n      width: 300px;\n      height: 400px; }\n    [content] [body] [block] label {\n      padding: 10px;\n      background-color: #000;\n      font-size: 20px;\n      text-align: center;\n      color: #eee;\n      text-transform: uppercase;\n      font-weight: 200; }\n      [content] [body] [block] label span {\n        letter-spacing: -1px;\n        font-weight: 700; }\n      [content] [body] [block] label.btn {\n        font-size: 16px; }\n      [content] [body] [block] label i {\n        margin: 0 0 0 20px; }\n    [content] [body] [block] h3 {\n      font-weight: 300;\n      text-align: right; }\n      [content] [body] [block] h3 span {\n        display: block;\n        font-size: 18px;\n        line-height: 4px;\n        font-weight: 700; }\n    [content] [body] [block] p {\n      font-size: 14px;\n      font-weight: 300; }\n      [content] [body] [block] p.hide {\n        display: none; }\n\n[content] [social] h4 {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 300; }\n\n[content] [social] i {\n  text-align: center;\n  font-size: 30px;\n  margin: 10px;\n  color: rgba(0, 0, 0, 0.46); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div menu flex row>\n    <div menu-left flex col grow>\n    </div>\n    <div menu-center flex col>\n        <img src=\"./assets/logo.png\" />\n    </div>\n    <div menu-right flex-col grow>\n    </div>\n</div>\n<div site-menu flex row center>\n    <ul flex row>\n      <li class=\"active\">Home</li>\n      <li>About</li>\n      <li>Shop Mens</li>\n      <li class=\"logo\"></li>\n      <li>Shop Womens</li>      \n      <li>Sizes</li>      \n      <li>Contact</li>\n    </ul>\n</div>\n<div hero flex row center>  \n    <div flex col end>\n        <label>Shop Now<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></label>\n    </div>  \n</div>\n<div content flex row center>\n    <div body flex row center>\n        <div block class=\"flex col center\">\n            <img src=\"./assets/slide_1.jpg\" />\n            <label><span>Shop</span>Mens<i class=\"fa fa-chevron-circle-right\" aria-hidden=\"true\"></i></label>\n        </div>\n        <div block class=\"flex col center\">\n            <img src=\"./assets/slide_6.jpg\" />\n            <label><span>Shop</span>Womens<i class=\"fa fa-chevron-circle-right\" aria-hidden=\"true\"></i></label>\n        </div>\n        <div block class=\"flex col grow\">\n            <h3><span>DOUBS</span>CLOTHING</h3>\n            <p>Doubs Clothing is made for tall men 6'6\" through to 7'4\" for men with long limbs.</p>\n            <p>Doubs Women is made for 6'0 through to 6'10\" or women with long torsos, long inseams or long limbs.</p>\n            <p>Extra tall clothing in pants, jumpers, tshirts, long sleeve tops, sweats, jackets, dresses, shorts, playsuits.... everything.</p>\n            <p class=\"hide\">90% of our clothing is made in Melbourne, Australia to support this amazing country! We get denim from China & occasionally use an ethical factory in Bali for other amazing items of clothing.</p>\n            <p class=\"hide\">We guarantee it will fit. Worn and modeled by genuine tall people of all shapes and sizes. For sizing check on the item description on each page or see our sizing page in the menu item.</p>\n            \n            <div social class=\"flex col center grow\">\n                <h4><span>Follow</span>Us</h4>\n                <div class=\"flex row center\">\n                    <i class=\"fa fa-facebook-square flex-1\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-twitter-square flex-1\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-youtube-square flex-1\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-pinterest-square flex-1\" aria-hidden=\"true\"></i>\n                    <i class=\"fa fa-instagram flex-1\" aria-hidden=\"true\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.e99cfcc469b33ef79343.png";

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide_5.0d7c0f38705e58cc201e.jpg";

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(82);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(137)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
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

/***/ })

},[170]);
//# sourceMappingURL=main.bundle.js.map