(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-one-page-one-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/page-one/header/header.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/page-one/header/header.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-one-header\">\r\n  <header>\r\n    <ion-img class=\"page-one-header__logo\" src=\"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/40706515/original/3beee79d2193ba49bfb141e841269c76029c5321/remove-background-from-logo.jpg\"></ion-img>\r\n    <ion-button class=\"page-one-header__click\">Click</ion-button>\r\n  </header>\r\n  <main padding>\r\n    <!-- Slide -->\r\n    <ion-slides pager={true} class=\"page-one-header__slides\" [options]=\"slideOpts\">\r\n        <ion-slide class=\"page-one-header__slide\">\r\n          <img src=\"\"/>\r\n        </ion-slide >\r\n        <ion-slide class=\"page-one-header__slide\">\r\n          <img src=\"\"/>\r\n        </ion-slide>\r\n        <ion-slide class=\"page-one-header__slide\">\r\n          <img src=\"\"/>\r\n        </ion-slide>\r\n    </ion-slides>\r\n    <!-- Option -->\r\n    <div class=\"page-one-header__opts\">\r\n      <div class=\"page-one-header__opt\">\r\n        <img src=\"assets/icon/bank.png\" />\r\n      </div>\r\n      <div class=\"page-one-header__opt\">\r\n        <img src=\"assets/icon/bank.png\" />\r\n      </div>\r\n      <div class=\"page-one-header__opt\">\r\n        <img src=\"assets/icon/bank.png\" />\r\n      </div>\r\n      <div class=\"page-one-header__opt\">\r\n        <img src=\"assets/icon/bank.png\" />\r\n      </div>\r\n    </div>\r\n    <!-- HomePage -->\r\n    <div class=\"page-one-header__homepage\">\r\n      <ion-icon name=\"card\"></ion-icon>\r\n      <span class=\"page-one-header__text\">Homepage</span>\r\n      <div class=\"page-one-header__something\">Something</div>\r\n    </div>\r\n  </main>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/page-one/menu/menu-item/menu-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/page-one/menu/menu-item/menu-item.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-one-menu__item\">\n  <div class=\"page-one-menu__background\"></div>\n  <div class=\"\" \n    *ngFor=\"let el of blockNumber; let i = index\" [class]=\"[i % 2 === 0 ? 'page-one-menu__block page-one-menu__block--left' : 'page-one-menu__block page-one-menu__block--right']\">\n    <div class=\"page-one-menu__ball\"></div>\n    <div class=\"page-one-menu__content\">\n      <strong>Title</strong>\n      <p>Something else</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/page-one/menu/menu.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/page-one/menu/menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-one-menu\">\n  <app-menu-item [blockNumber]=\"blockNumber\"></app-menu-item>\n  <app-menu-item [blockNumber]=\"blockNumber\"></app-menu-item>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/page-one/page-one.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/page-one/page-one.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-one\">\r\n  <app-header></app-header>\r\n  <app-menu></app-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/home/page-one/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home/page-one/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-one-header {\n  background: #F4F4F4;\n}\n.page-one-header header {\n  background: #4E0205;\n  position: relative;\n  height: 44px;\n  width: 100%;\n}\n.page-one-header main {\n  padding: 0;\n}\n.page-one-header__logo {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  height: 100%;\n}\n.page-one-header__click {\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  height: 24px;\n  margin-top: -12px;\n  --border-radius: 10px;\n  --background: #fff;\n  --color: #000;\n  --color-activated: #f23;\n}\n.page-one-header__slide {\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: #F5F5F5;\n}\n.page-one-header__slide img {\n  width: 100%;\n  height: 200px;\n}\n.page-one-header__slides {\n  padding-bottom: 30px;\n}\n.page-one-header__opts {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n.page-one-header__opt {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #FDCC2A;\n  padding: 5px;\n  border-radius: 50%;\n}\n.page-one-header__opt img {\n  height: 50px;\n  width: 50px;\n}\n.page-one-header__homepage {\n  padding: 10px 0;\n  margin: 10px 0;\n  border: 1px solid #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n.page-one-header__text {\n  font-size: 14px;\n  margin: 0 20px;\n}\n.page-one-header__something {\n  padding: 0 20px;\n  font-size: 14px;\n  height: 100%;\n  background: #770409;\n  text-align: center;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlLW9uZS9oZWFkZXIvQzpcXFVzZXJzXFxUQUlcXERlc2t0b3BcXHBoYXRuZGxcXGdpdFxcaW9uaWMvc3JjXFxhcHBcXGhvbWVcXHBhZ2Utb25lXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9wYWdlLW9uZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRVI7QURBSTtFQUNJLFVBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRVI7QURDSTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0VaO0FEQ0k7RUFDSSxvQkFBQTtBQ0NSO0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ0FSO0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ1o7QURHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNEUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3BhZ2Utb25lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1vbmUtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNEUwMjA1O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAmX19sb2dve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJl9fY2xpY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLS1jb2xvcjogIzAwMDtcclxuICAgICAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2YyMztcclxuICAgIH1cclxuICAgIC8vIFNsaWRlXHJcbiAgICAmX19zbGlkZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19zbGlkZXN7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAvLyBPcHRpb25zXHJcbiAgICAmX19vcHRze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICAmX19vcHR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRENDMkE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSG9tZVBhZ2VcclxuICAgICZfX2hvbWVwYWdle1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgJl9fdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAmX19zb21ldGhpbmd7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzc3MDQwOTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiLnBhZ2Utb25lLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG59XG4ucGFnZS1vbmUtaGVhZGVyIGhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM0RTAyMDU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYWdlLW9uZS1oZWFkZXIgbWFpbiB7XG4gIHBhZGRpbmc6IDA7XG59XG4ucGFnZS1vbmUtaGVhZGVyX19sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBhZ2Utb25lLWhlYWRlcl9fY2xpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmMjM7XG59XG4ucGFnZS1vbmUtaGVhZGVyX19zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuLnBhZ2Utb25lLWhlYWRlcl9fc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucGFnZS1vbmUtaGVhZGVyX19zbGlkZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5wYWdlLW9uZS1oZWFkZXJfX29wdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5wYWdlLW9uZS1oZWFkZXJfX29wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRkRDQzJBO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wYWdlLW9uZS1oZWFkZXJfX29wdCBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLnBhZ2Utb25lLWhlYWRlcl9faG9tZXBhZ2Uge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbjogMTBweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2Utb25lLWhlYWRlcl9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4ucGFnZS1vbmUtaGVhZGVyX19zb21ldGhpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNzcwNDA5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/page-one/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/page-one/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.slideOpts = {
            speed: 2000,
            slidesPerView: 1,
            delay: 300,
            autoplay: true
        };
    }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/page-one/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/home/page-one/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/page-one/menu/menu-item/menu-item.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/page-one/menu/menu-item/menu-item.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-one-menu__item {\n  width: 100%;\n  display: inline-block;\n}\n.page-one-menu__background {\n  background: #FD7443;\n  height: 50px;\n  width: 100%;\n}\n.page-one-menu__ball {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-image: url(\"https://previews.123rf.com/images/panimoni/panimoni1902/panimoni190200076/118573375-football-icon-in-flat-style-soccer-ball-on-transparent-background-sport-object-for-you-design-projec.jpg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  float: left;\n}\n.page-one-menu__block {\n  float: left;\n  width: 50%;\n  padding: 10px 15px;\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.page-one-menu__block p {\n  margin: 0;\n}\n.page-one-menu__block--left {\n  border-bottom: 1px solid gray;\n}\n.page-one-menu__block--right {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n}\n.page-one-menu__ball {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlLW9uZS9tZW51L21lbnUtaXRlbS9DOlxcVXNlcnNcXFRBSVxcRGVza3RvcFxccGhhdG5kbFxcZ2l0XFxpb25pYy9zcmNcXGFwcFxcaG9tZVxccGFnZS1vbmVcXG1lbnVcXG1lbnUtaXRlbVxcbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3BhZ2Utb25lL21lbnUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxTkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxTQUFBO0FDQ1o7QURFSTtFQUNJLDZCQUFBO0FDQVI7QURFSTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZS1vbmUvbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utb25lLW1lbnV7XHJcbiAgICAmX19pdGVte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgICZfX2JhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZENzQ0MztcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19iYWxse1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wcmV2aWV3cy4xMjNyZi5jb20vaW1hZ2VzL3Bhbmltb25pL3Bhbmltb25pMTkwMi9wYW5pbW9uaTE5MDIwMDA3Ni8xMTg1NzMzNzUtZm9vdGJhbGwtaWNvbi1pbi1mbGF0LXN0eWxlLXNvY2Nlci1iYWxsLW9uLXRyYW5zcGFyZW50LWJhY2tncm91bmQtc3BvcnQtb2JqZWN0LWZvci15b3UtZGVzaWduLXByb2plYy5qcGdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAmX19ibG9ja3tcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19ibG9jay0tbGVmdHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIH1cclxuICAgICZfX2Jsb2NrLS1yaWdodHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB9XHJcbiAgICAmX19iYWxse1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSIsIi5wYWdlLW9uZS1tZW51X19pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYWdlLW9uZS1tZW51X19iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI0ZENzQ0MztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYWdlLW9uZS1tZW51X19iYWxsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3ByZXZpZXdzLjEyM3JmLmNvbS9pbWFnZXMvcGFuaW1vbmkvcGFuaW1vbmkxOTAyL3Bhbmltb25pMTkwMjAwMDc2LzExODU3MzM3NS1mb290YmFsbC1pY29uLWluLWZsYXQtc3R5bGUtc29jY2VyLWJhbGwtb24tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1zcG9ydC1vYmplY3QtZm9yLXlvdS1kZXNpZ24tcHJvamVjLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBmbG9hdDogbGVmdDtcbn1cbi5wYWdlLW9uZS1tZW51X19ibG9jayB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLW9uZS1tZW51X19ibG9jayBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnBhZ2Utb25lLW1lbnVfX2Jsb2NrLS1sZWZ0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGFnZS1vbmUtbWVudV9fYmxvY2stLXJpZ2h0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbn1cbi5wYWdlLW9uZS1tZW51X19iYWxsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/page-one/menu/menu-item/menu-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/page-one/menu/menu-item/menu-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuItemComponent = class MenuItemComponent {
    // blockNumber: object = [
    //   {}, {}, {}, {}
    // ]
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MenuItemComponent.prototype, "blockNumber", void 0);
MenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-item',
        template: __webpack_require__(/*! raw-loader!./menu-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/page-one/menu/menu-item/menu-item.component.html"),
        styles: [__webpack_require__(/*! ./menu-item.component.scss */ "./src/app/home/page-one/menu/menu-item/menu-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuItemComponent);



/***/ }),

/***/ "./src/app/home/page-one/menu/menu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/home/page-one/menu/menu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZS1vbmUvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/page-one/menu/menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/page-one/menu/menu.component.ts ***!
  \******************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() {
        this.blockNumber = [
            {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}
        ];
    }
    ngOnInit() { }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/page-one/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/home/page-one/menu/menu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuComponent);



/***/ }),

/***/ "./src/app/home/page-one/menu/menu.module.ts":
/*!***************************************************!*\
  !*** ./src/app/home/page-one/menu/menu.module.ts ***!
  \***************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/home/page-one/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.component */ "./src/app/home/page-one/menu/menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let MenuModule = class MenuModule {
};
MenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
        declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"]]
    })
], MenuModule);



/***/ }),

/***/ "./src/app/home/page-one/page-one-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/page-one/page-one-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PageOnePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOnePageRoutingModule", function() { return PageOnePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-one.page */ "./src/app/home/page-one/page-one.page.ts");




const routes = [
    {
        path: '',
        component: _page_one_page__WEBPACK_IMPORTED_MODULE_3__["PageOnePage"]
    }
];
let PageOnePageRoutingModule = class PageOnePageRoutingModule {
};
PageOnePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageOnePageRoutingModule);



/***/ }),

/***/ "./src/app/home/page-one/page-one.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/page-one/page-one.module.ts ***!
  \**************************************************/
/*! exports provided: PageOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOnePageModule", function() { return PageOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_one_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-one-routing.module */ "./src/app/home/page-one/page-one-routing.module.ts");
/* harmony import */ var _page_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-one.page */ "./src/app/home/page-one/page-one.page.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/home/page-one/header/header.component.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/home/page-one/menu/menu.module.ts");









let PageOnePageModule = class PageOnePageModule {
};
PageOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_one_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageOnePageRoutingModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"]
        ],
        declarations: [_page_one_page__WEBPACK_IMPORTED_MODULE_6__["PageOnePage"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]],
        exports: [_page_one_page__WEBPACK_IMPORTED_MODULE_6__["PageOnePage"]]
    })
], PageOnePageModule);



/***/ }),

/***/ "./src/app/home/page-one/page-one.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/page-one/page-one.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-one {\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlLW9uZS9DOlxcVXNlcnNcXFRBSVxcRGVza3RvcFxccGhhdG5kbFxcZ2l0XFxpb25pYy9zcmNcXGFwcFxcaG9tZVxccGFnZS1vbmVcXHBhZ2Utb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9wYWdlLW9uZS9wYWdlLW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wYWdlLW9uZS9wYWdlLW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1vbmV7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59IiwiLnBhZ2Utb25lIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/page-one/page-one.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/page-one/page-one.page.ts ***!
  \************************************************/
/*! exports provided: PageOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOnePage", function() { return PageOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageOnePage = class PageOnePage {
    constructor() { }
    ngOnInit() {
    }
};
PageOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-one',
        template: __webpack_require__(/*! raw-loader!./page-one.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/page-one/page-one.page.html"),
        styles: [__webpack_require__(/*! ./page-one.page.scss */ "./src/app/home/page-one/page-one.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageOnePage);



/***/ })

}]);
//# sourceMappingURL=page-one-page-one-module-es2015.js.map