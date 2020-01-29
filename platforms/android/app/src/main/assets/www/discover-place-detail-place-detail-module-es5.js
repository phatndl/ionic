(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bookings/create-bookings/create-bookings.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookings/create-bookings/create-bookings.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar text-center>\r\n    <ion-title>{{ selectedPlace.title }}</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content text-center padding>\r\n  <p>{{ selectedPlace.description }}</p>\r\n  <form (ngSubmit)=\"onBookPlace(f)\" #f=\"ngForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">First Name</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              ngModel\r\n              name=\"first-name\"\r\n              required\r\n            >\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Last Name</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              ngModel\r\n              name=\"last-name\"\r\n              required \r\n            >\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Number of Guests</ion-label>\r\n            <ion-select\r\n              name=\"guest-number\"\r\n              [ngModel]=\"'2'\"\r\n              >\r\n              <ion-select-option value=\"1\">1</ion-select-option>\r\n              <ion-select-option value=\"2\">2</ion-select-option>\r\n              <ion-select-option value=\"3\">3</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">From</ion-label>\r\n            <ion-datetime\r\n              display-format=\"MMM DD YYYY\"\r\n              picker-format=\"YY MM DD\"\r\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\r\n              [max]=\"selectedPlace.availableTo\b.toISOString()\"\r\n              [ngModel]=\"startDate.toISOString()\"\r\n              name=\"date-from\"\r\n              required\r\n              #startDateCtrl=\"ngModel\"\r\n            ></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">To</ion-label>\r\n            <ion-datetime\r\n              display-format=\"MMM DD YYYY\"\r\n              picker-format=\"YY MM DD\"\r\n              [min]=\"startDateCtrl.value\"\r\n              [max]=\"selectedPlace.availableTo.toISOString()\"\r\n              [ngModel]=\"endDate.toISOString()\"\r\n              name=\"date-to\"\r\n              required\r\n            ></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\r\n          <ion-button [disabled]=\"!f.valid || !datesValid()\" color=\"primary\" (click)=\"onBook()\" expand=\"block\">Book!</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/places/discover/place-detail/place-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/discover/place-detail/place-detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>place-detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button margin color=\"primary\" (click)=\"onBook()\">Book</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/bookings/create-bookings/create-bookings.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/bookings/create-bookings/create-bookings.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2NyZWF0ZS1ib29raW5ncy9jcmVhdGUtYm9va2luZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bookings/create-bookings/create-bookings.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-bookings/create-bookings.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookingsComponent", function() { return CreateBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_places_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places/places.model */ "./src/app/places/places.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreateBookingsComponent = /** @class */ (function () {
    function CreateBookingsComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CreateBookingsComponent.prototype.ngOnInit = function () {
        var availableFrom = new Date(this.selectedPlace.availableFrom);
        var availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 * 3600 * 1000 - availableFrom.getTime()));
            this.endDate = new Date(this.startDate.getTime() + Math.random() * (this.startDate.getTime() + 7 * 24 * 3600 * 1000));
        }
        else {
            this.startDate = availableFrom;
            this.endDate = availableTo;
        }
    };
    CreateBookingsComponent.prototype.onBook = function () {
        if (!this.form.valid || !this.datesValid()) {
            return;
        }
        this.modalCtrl.dismiss({ bookingDate: this.form.value }, 'confirm');
    };
    CreateBookingsComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CreateBookingsComponent.prototype.datesValid = function () {
        var startDate = this.form.value['date-from'];
        var endDate = this.form.value['date-to'];
        return endDate > startDate;
    };
    CreateBookingsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _places_places_model__WEBPACK_IMPORTED_MODULE_2__["Place"])
    ], CreateBookingsComponent.prototype, "selectedPlace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateBookingsComponent.prototype, "selectedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], CreateBookingsComponent.prototype, "form", void 0);
    CreateBookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-bookings',
            template: __webpack_require__(/*! raw-loader!./create-bookings.component.html */ "./node_modules/raw-loader/index.js!./src/app/bookings/create-bookings/create-bookings.component.html"),
            styles: [__webpack_require__(/*! ./create-bookings.component.scss */ "./src/app/bookings/create-bookings/create-bookings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CreateBookingsComponent);
    return CreateBookingsComponent;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PlaceDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function() { return PlaceDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");




var routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
    }
];
var PlaceDetailPageRoutingModule = /** @class */ (function () {
    function PlaceDetailPageRoutingModule() {
    }
    PlaceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlaceDetailPageRoutingModule);
    return PlaceDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-detail-routing.module */ "./src/app/places/discover/place-detail/place-detail-routing.module.ts");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");
/* harmony import */ var _bookings_create_bookings_create_bookings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../bookings/create-bookings/create-bookings.component */ "./src/app/bookings/create-bookings/create-bookings.component.ts");








var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"]
            ],
            declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"], _bookings_create_bookings_create_bookings_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingsComponent"]],
            entryComponents: [_bookings_create_bookings_create_bookings_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingsComponent"]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookings_create_bookings_create_bookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bookings/create-bookings/create-bookings.component */ "./src/app/bookings/create-bookings/create-bookings.component.ts");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");






var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(activedRoute, navCtrl, modalCtrl, placeService, actionSheet) {
        this.activedRoute = activedRoute;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
        this.actionSheet = actionSheet;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack("/places/tabs/discover");
                return;
            }
            _this.placeService.getPlace(paramMap.get('placeId')).subscribe(function (place) {
                _this.place = place;
            });
            console.log("this.place: ", _this.place);
        });
    };
    PlaceDetailPage.prototype.ngOnDestroy = function () {
    };
    PlaceDetailPage.prototype.onBook = function () {
        var _this = this;
        // this.router.navigateByUrl("/places/tabs/discover");
        // this.navCtrl.navigateBack("/places/tabs/discover");
        // this.navCtrl.pop()
        this.actionSheet.create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: function () {
                        _this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: function () {
                        _this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).then(function (actionEl) {
            actionEl.present();
        });
    };
    PlaceDetailPage.prototype.openBookingModal = function (mode) {
        this.modalCtrl.create({
            component: _bookings_create_bookings_create_bookings_component__WEBPACK_IMPORTED_MODULE_4__["CreateBookingsComponent"],
            componentProps: {
                selectedPlace: this.place,
                selectedMode: mode
            }
        }).then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then(function (result) {
            console.log("result: ", result);
        });
    };
    PlaceDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
    ]; };
    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-detail',
            template: __webpack_require__(/*! raw-loader!./place-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/discover/place-detail/place-detail.page.html"),
            styles: [__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/places/discover/place-detail/place-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-place-detail-place-detail-module-es5.js.map