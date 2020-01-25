(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-two-page-two-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/page-two/page-two.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/page-two/page-two.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>pageTwo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/page-two/page-two-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/page-two/page-two-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PageTwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoPageRoutingModule", function() { return PageTwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-two.page */ "./src/app/home/page-two/page-two.page.ts");




var routes = [
    {
        path: '',
        component: _page_two_page__WEBPACK_IMPORTED_MODULE_3__["PageTwoPage"]
    }
];
var PageTwoPageRoutingModule = /** @class */ (function () {
    function PageTwoPageRoutingModule() {
    }
    PageTwoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageTwoPageRoutingModule);
    return PageTwoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/page-two/page-two.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/page-two/page-two.module.ts ***!
  \**************************************************/
/*! exports provided: PageTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoPageModule", function() { return PageTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-two-routing.module */ "./src/app/home/page-two/page-two-routing.module.ts");
/* harmony import */ var _page_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-two.page */ "./src/app/home/page-two/page-two.page.ts");







var PageTwoPageModule = /** @class */ (function () {
    function PageTwoPageModule() {
    }
    PageTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageTwoPageRoutingModule"]
            ],
            declarations: [_page_two_page__WEBPACK_IMPORTED_MODULE_6__["PageTwoPage"]],
            exports: [_page_two_page__WEBPACK_IMPORTED_MODULE_6__["PageTwoPage"]]
        })
    ], PageTwoPageModule);
    return PageTwoPageModule;
}());



/***/ }),

/***/ "./src/app/home/page-two/page-two.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/page-two/page-two.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZS10d28vcGFnZS10d28ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/page-two/page-two.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/page-two/page-two.page.ts ***!
  \************************************************/
/*! exports provided: PageTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoPage", function() { return PageTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTwoPage = /** @class */ (function () {
    function PageTwoPage() {
    }
    PageTwoPage.prototype.ngOnInit = function () {
    };
    PageTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-two',
            template: __webpack_require__(/*! raw-loader!./page-two.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/page-two/page-two.page.html"),
            styles: [__webpack_require__(/*! ./page-two.page.scss */ "./src/app/home/page-two/page-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTwoPage);
    return PageTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-two-page-two-module-es5.js.map