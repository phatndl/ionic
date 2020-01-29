(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offer-booking-offer-booking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/offer-booking/offer-booking.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/offer-booking/offer-booking.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>offer-booking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-button margin color=\"primary\" [routerLink]=\"['/', 'places', 'tabs', 'offers', 'edit', place.id]\">Edit</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OfferBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingPageRoutingModule", function() { return OfferBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _offer_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer-booking.page */ "./src/app/places/offers/offer-booking/offer-booking.page.ts");




var routes = [
    {
        path: '',
        component: _offer_booking_page__WEBPACK_IMPORTED_MODULE_3__["OfferBookingPage"]
    }
];
var OfferBookingPageRoutingModule = /** @class */ (function () {
    function OfferBookingPageRoutingModule() {
    }
    OfferBookingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OfferBookingPageRoutingModule);
    return OfferBookingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking.module.ts ***!
  \*********************************************************************/
/*! exports provided: OfferBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingPageModule", function() { return OfferBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-booking-routing.module */ "./src/app/places/offers/offer-booking/offer-booking-routing.module.ts");
/* harmony import */ var _offer_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-booking.page */ "./src/app/places/offers/offer-booking/offer-booking.page.ts");







var OfferBookingPageModule = /** @class */ (function () {
    function OfferBookingPageModule() {
    }
    OfferBookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferBookingPageRoutingModule"]
            ],
            declarations: [_offer_booking_page__WEBPACK_IMPORTED_MODULE_6__["OfferBookingPage"]]
        })
    ], OfferBookingPageModule);
    return OfferBookingPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItYm9va2luZy9vZmZlci1ib29raW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/offer-booking/offer-booking.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/offers/offer-booking/offer-booking.page.ts ***!
  \*******************************************************************/
/*! exports provided: OfferBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBookingPage", function() { return OfferBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");





var OfferBookingPage = /** @class */ (function () {
    function OfferBookingPage(route, navCtrl, placesService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.placesService = placesService;
    }
    OfferBookingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            if (!param.has('placeId')) {
                _this.navCtrl.navigateBack("/places/tabs/offers");
                return;
            }
            _this.placesService.getPlace(param.get('placeId')).subscribe(function (place) {
                _this.place = place;
            });
        });
    };
    OfferBookingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"] }
    ]; };
    OfferBookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offer-booking',
            template: __webpack_require__(/*! raw-loader!./offer-booking.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/offer-booking/offer-booking.page.html"),
            styles: [__webpack_require__(/*! ./offer-booking.page.scss */ "./src/app/places/offers/offer-booking/offer-booking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"]])
    ], OfferBookingPage);
    return OfferBookingPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offer-booking-offer-booking-module-es5.js.map