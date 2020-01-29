(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/offers.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Offers</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button routerLink=\"/places/tabs/offers/new\">\r\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let place of places\" [routerLink]=\"['/', 'places', 'tabs', 'offers', place.id]\">\r\n            <ion-thumbnail slot=\"start\">\r\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n              <h2>{{ place.title }}</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/places/offers/offers-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/places/offers/offers-routing.module.ts ***!
  \********************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");




var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
var OffersPageRoutingModule = /** @class */ (function () {
    function OffersPageRoutingModule() {
    }
    OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OffersPageRoutingModule);
    return OffersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.module.ts":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/places/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");







var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.page.scss":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/offers.page.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");



var OffersPage = /** @class */ (function () {
    function OffersPage(placesService) {
        this.placesService = placesService;
        this.places = [];
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.places.subscribe(function (places) {
            _this.places = places;
        });
        // this.places = this.placesService.places;
    };
    OffersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.placeSub = this.placesService.places.subscribe(function (place) {
            console.log("okkk", place);
            _this.places = place;
        });
    };
    OffersPage.prototype.ionViewDidEnter = function () {
        this.placeSub.unsubscribe();
    };
    OffersPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/offers.page.html"),
            styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/places/offers/offers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es5.js.map