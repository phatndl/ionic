(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let recipe of recipes\" (click)=\"onClick(recipe.id)\" >\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"recipe.imageUrl\"></ion-img>\n      </ion-avatar>\n      <ion-label>{{ recipe.title }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipes/recipes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecipesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageRoutingModule", function() { return RecipesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes.page */ "./src/app/recipes/recipes.page.ts");




var routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_3__["RecipesPage"]
    }
    // {
    //   path: 'recipe-detail',
    //   loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
    // }
];
var RecipesPageRoutingModule = /** @class */ (function () {
    function RecipesPageRoutingModule() {
    }
    RecipesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RecipesPageRoutingModule);
    return RecipesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function() { return RecipesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes-routing.module */ "./src/app/recipes/recipes-routing.module.ts");
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.page */ "./src/app/recipes/recipes.page.ts");







var RecipesPageModule = /** @class */ (function () {
    function RecipesPageModule() {
    }
    RecipesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipesPageRoutingModule"]
            ],
            declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]]
        })
    ], RecipesPageModule);
    return RecipesPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/*! exports provided: RecipesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPage", function() { return RecipesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");






var RecipesPage = /** @class */ (function () {
    function RecipesPage(navCtrl, nativePageTransition, recipesService, router) {
        this.navCtrl = navCtrl;
        this.nativePageTransition = nativePageTransition;
        this.recipesService = recipesService;
        this.router = router;
    }
    RecipesPage.prototype.ngOnInit = function () {
        this.recipes = this.recipesService.getAllRecipes();
    };
    RecipesPage.prototype.onClick = function (recipeId) {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            iosdelay: 50
            // androiddelay: 50,
        };
        this.nativePageTransition.slide(options);
        this.navCtrl.navigateRoot(['/recipes', recipeId]);
        // this.router.navigate(['/recipes', recipeId]);
    };
    RecipesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"] },
        { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RecipesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! raw-loader!./recipes.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.page.html"),
            styles: [__webpack_require__(/*! ./recipes.page.scss */ "./src/app/recipes/recipes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RecipesPage);
    return RecipesPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module-es5.js.map