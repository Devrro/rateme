"use strict";
(self["webpackChunkrateme"] = self["webpackChunkrateme"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _compoenents_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compoenents/login/login.component */ 1079);
/* harmony import */ var _compoenents_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compoenents/signup/signup.component */ 4029);
/* harmony import */ var _compoenents_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compoenents/home/home.component */ 6051);
/* harmony import */ var _compoenents_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compoenents/profile/profile.component */ 7812);
/* harmony import */ var _compoenents_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compoenents/profile/user-profile/user-profile.component */ 1750);
/* harmony import */ var _compoenents_profile_qr_codes_page_qr_codes_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compoenents/profile/qr-codes-page/qr-codes-page.component */ 9391);
/* harmony import */ var _compoenents_profile_qr_reviews_page_qr_reviews_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compoenents/profile/qr-reviews-page/qr-reviews-page.component */ 944);
/* harmony import */ var _compoenents_profile_qr_codes_page_qr_code_form_qr_code_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compoenents/profile/qr-codes-page/qr-code-form/qr-code-form.component */ 72);
/* harmony import */ var _compoenents_review_qr_form_review_qr_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compoenents/review-qr-form/review-qr-form.component */ 8850);
/* harmony import */ var _services_guards_user_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/guards/user.guard */ 803);
/* harmony import */ var _compoenents_profile_telegram_info_telegram_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compoenents/profile/telegram-info/telegram-info.component */ 9634);
/* harmony import */ var _compoenents_signup_profile_activate_profile_activate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compoenents/signup/profile-activate/profile-activate.component */ 3705);
/* harmony import */ var _compoenents_signup_profile_activate_profile_activated_profile_activated_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compoenents/signup/profile-activate/profile-activated/profile-activated.component */ 3948);
/* harmony import */ var _compoenents_redirect_pages_redirect404_redirect404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./compoenents/redirect-pages/redirect404/redirect404.component */ 6685);
/* harmony import */ var _compoenents_signup_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./compoenents/signup/password-recovery/password-recovery.component */ 9739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);


















const routes = [
    { path: '', component: _compoenents_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent },
    { path: 'signin', component: _compoenents_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'signup', component: _compoenents_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent },
    { path: 'activate/:token', component: _compoenents_signup_profile_activate_profile_activate_component__WEBPACK_IMPORTED_MODULE_11__.ProfileActivateComponent },
    { path: 'password_recovery/:token', component: _compoenents_signup_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_14__.PasswordRecoveryComponent },
    { path: 'user_is_activated', component: _compoenents_signup_profile_activate_profile_activated_profile_activated_component__WEBPACK_IMPORTED_MODULE_12__.ProfileActivatedComponent },
    {
        path: 'profile', component: _compoenents_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, canActivate: [_services_guards_user_guard__WEBPACK_IMPORTED_MODULE_9__.UserGuard],
        children: [
            { path: 'info', component: _compoenents_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__.UserProfileComponent },
            {
                path: 'qr_codes', component: _compoenents_profile_qr_codes_page_qr_codes_page_component__WEBPACK_IMPORTED_MODULE_5__.QrCodesPageComponent, children: [
                    { path: 'qr_create', component: _compoenents_profile_qr_codes_page_qr_code_form_qr_code_form_component__WEBPACK_IMPORTED_MODULE_7__.QrCodeFormComponent }
                ]
            },
            { path: 'qr_reviews', component: _compoenents_profile_qr_reviews_page_qr_reviews_page_component__WEBPACK_IMPORTED_MODULE_6__.QrReviewsPageComponent },
            { path: 'telegram_info', component: _compoenents_profile_telegram_info_telegram_info_component__WEBPACK_IMPORTED_MODULE_10__.TelegramInfoComponent },
        ]
    },
    { path: 'rate_place/:id', component: _compoenents_review_qr_form_review_qr_form_component__WEBPACK_IMPORTED_MODULE_8__.ReviewQrFormComponent },
    { path: 'error', component: _compoenents_redirect_pages_redirect404_redirect404_component__WEBPACK_IMPORTED_MODULE_13__.Redirect404Component },
    { path: '**', redirectTo: 'error' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _compoenents_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compoenents/header/header.component */ 4938);



class AppComponent {
    constructor() {
        this.title = 'rateme';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _compoenents_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: [".background-main[_ngcontent-%COMP%] {\n  background-color: var(--light_sea_green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtbWFpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodF9zZWFfZ3JlZW4pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/interceptors/auth.interceptor */ 3323);
/* harmony import */ var _compoenents_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compoenents/header/header.component */ 4938);
/* harmony import */ var _compoenents_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compoenents/login/login.component */ 1079);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mdb-angular-ui-kit/accordion */ 8685);
/* harmony import */ var mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mdb-angular-ui-kit/carousel */ 9036);
/* harmony import */ var mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! mdb-angular-ui-kit/checkbox */ 2034);
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 8723);
/* harmony import */ var mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! mdb-angular-ui-kit/dropdown */ 2516);
/* harmony import */ var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mdb-angular-ui-kit/forms */ 2326);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 106);
/* harmony import */ var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! mdb-angular-ui-kit/popover */ 1453);
/* harmony import */ var mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! mdb-angular-ui-kit/radio */ 5863);
/* harmony import */ var mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mdb-angular-ui-kit/range */ 3094);
/* harmony import */ var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! mdb-angular-ui-kit/ripple */ 7966);
/* harmony import */ var mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! mdb-angular-ui-kit/scrollspy */ 3305);
/* harmony import */ var mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! mdb-angular-ui-kit/tabs */ 244);
/* harmony import */ var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! mdb-angular-ui-kit/tooltip */ 9911);
/* harmony import */ var mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! mdb-angular-ui-kit/validation */ 5453);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _compoenents_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compoenents/signup/signup.component */ 4029);
/* harmony import */ var _compoenents_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compoenents/home/home.component */ 6051);
/* harmony import */ var _compoenents_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compoenents/profile/profile.component */ 7812);
/* harmony import */ var _compoenents_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compoenents/profile/user-profile/user-profile.component */ 1750);
/* harmony import */ var _compoenents_profile_qr_codes_page_qr_codes_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compoenents/profile/qr-codes-page/qr-codes-page.component */ 9391);
/* harmony import */ var _compoenents_profile_qr_reviews_page_qr_reviews_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compoenents/profile/qr-reviews-page/qr-reviews-page.component */ 944);
/* harmony import */ var _compoenents_profile_qr_codes_page_qr_code_form_qr_code_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compoenents/profile/qr-codes-page/qr-code-form/qr-code-form.component */ 72);
/* harmony import */ var _compoenents_review_qr_form_review_qr_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compoenents/review-qr-form/review-qr-form.component */ 8850);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _compoenents_profile_telegram_info_telegram_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./compoenents/profile/telegram-info/telegram-info.component */ 9634);
/* harmony import */ var _compoenents_signup_profile_activate_profile_activate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./compoenents/signup/profile-activate/profile-activate.component */ 3705);
/* harmony import */ var _compoenents_signup_profile_activate_profile_activated_profile_activated_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./compoenents/signup/profile-activate/profile-activated/profile-activated.component */ 3948);
/* harmony import */ var _compoenents_redirect_pages_redirect_pages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./compoenents/redirect-pages/redirect-pages.component */ 1429);
/* harmony import */ var _compoenents_redirect_pages_redirect404_redirect404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./compoenents/redirect-pages/redirect404/redirect404.component */ 6685);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _compoenents_signup_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./compoenents/signup/password-recovery/password-recovery.component */ 9739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 2560);











































const mdbModules = [
    mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_19__.MdbAccordionModule,
    mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_20__.MdbCarouselModule,
    mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_21__.MdbCheckboxModule,
    mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_22__.MdbCollapseModule,
    mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_23__.MdbDropdownModule,
    mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_24__.MdbFormsModule,
    mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_25__.MdbModalModule,
    mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_26__.MdbPopoverModule,
    mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_27__.MdbRadioModule,
    mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_28__.MdbRangeModule,
    mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_29__.MdbRippleModule,
    mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_30__.MdbScrollspyModule,
    mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_31__.MdbTabsModule,
    mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_32__.MdbTooltipModule,
    mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_33__.MdbValidationModule,
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [_services_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthServiceProvider], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__.BrowserAnimationsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_40__.MatSelectModule, mdbModules, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_41__.MatPaginatorModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_42__.MatSliderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _compoenents_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _compoenents_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _compoenents_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent,
        _compoenents_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _compoenents_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
        _compoenents_profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__.UserProfileComponent,
        _compoenents_profile_qr_codes_page_qr_codes_page_component__WEBPACK_IMPORTED_MODULE_9__.QrCodesPageComponent,
        _compoenents_profile_qr_reviews_page_qr_reviews_page_component__WEBPACK_IMPORTED_MODULE_10__.QrReviewsPageComponent,
        _compoenents_profile_qr_codes_page_qr_code_form_qr_code_form_component__WEBPACK_IMPORTED_MODULE_11__.QrCodeFormComponent,
        _compoenents_review_qr_form_review_qr_form_component__WEBPACK_IMPORTED_MODULE_12__.ReviewQrFormComponent,
        _compoenents_profile_telegram_info_telegram_info_component__WEBPACK_IMPORTED_MODULE_13__.TelegramInfoComponent,
        _compoenents_signup_profile_activate_profile_activate_component__WEBPACK_IMPORTED_MODULE_14__.ProfileActivateComponent,
        _compoenents_signup_profile_activate_profile_activated_profile_activated_component__WEBPACK_IMPORTED_MODULE_15__.ProfileActivatedComponent,
        _compoenents_redirect_pages_redirect_pages_component__WEBPACK_IMPORTED_MODULE_16__.RedirectPagesComponent,
        _compoenents_redirect_pages_redirect404_redirect404_component__WEBPACK_IMPORTED_MODULE_17__.Redirect404Component,
        _compoenents_signup_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_18__.PasswordRecoveryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__.BrowserAnimationsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_40__.MatSelectModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_19__.MdbAccordionModule,
        mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_20__.MdbCarouselModule,
        mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_21__.MdbCheckboxModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_22__.MdbCollapseModule,
        mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_23__.MdbDropdownModule,
        mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_24__.MdbFormsModule,
        mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_25__.MdbModalModule,
        mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_26__.MdbPopoverModule,
        mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_27__.MdbRadioModule,
        mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_28__.MdbRangeModule,
        mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_29__.MdbRippleModule,
        mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_30__.MdbScrollspyModule,
        mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_31__.MdbTabsModule,
        mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_32__.MdbTooltipModule,
        mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_33__.MdbValidationModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_41__.MatPaginatorModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_42__.MatSliderModule] }); })();


/***/ }),

/***/ 4938:
/*!********************************************************!*\
  !*** ./src/app/compoenents/header/header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





const _c0 = function () { return ["signin"]; };
function HeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["signup"]; };
function HeaderComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["profile", "info"]; };
function HeaderComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
} }
function HeaderComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c3 = function () { return ["contact"]; };
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        if (this.authService.getAccessToken()) {
            this.authService.UserIsLogged.next(true);
        }
        else {
            this.authService.UserIsLogged.next(false);
        }
        this.authService.UserIsLogged.subscribe({
            next: (value) => {
                this.isLoggedIn = value;
                if (value) {
                    let user = this.authService.getUser();
                    if (user) {
                        if ("profile" in user) {
                            this.username = user.profile.first_name;
                        }
                    }
                }
            }
        });
    }
    logOut() {
        this.authService.UserIsLogged.next(false);
        this.isLoggedIn = false;
        this.authService.signOut();
        // window.location.reload()
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 6, consts: [[1, "header"], [1, "navbar", "navbar-expand-lg", "navbar-light", 2, "padding-left", "20px", "padding-right", "20px"], ["href", "#", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "ml-auto", "topnav", "d-flex", "gap-2"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item pl-2 ", 4, "ngIf"], ["class", "nav-item pl-2", 4, "ngIf"], ["class", "nav-item ", 4, "ngIf"], [1, "nav-item", "pl-2"], ["type", "button", "href", "#", "data-toggle", "modal", "data-target", "#myModal", 1, "nav-link", "btn", "btn-primary", "text-white", 3, "routerLink"], ["type", "button", "href", "#", "data-toggle", "modal", "data-target", "#myModal", 1, "nav-link", "btn", "btn-danger", "text-white", 3, "routerLink"], ["href", "", 1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "RateMeQR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8)(12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 3, 2, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_li_19_Template, 3, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HeaderComponent_li_20_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar], styles: [".header[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6051:
/*!****************************************************!*\
  !*** ./src/app/compoenents/home/home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 47, vars: 0, consts: [[1, "container-fluid", "bg-white", 2, "padding", "0"], [1, "row", "background-main", 2, "background-color", "var(--light_sea_green)", "overflow", "hidden"], [1, "col-12", "d-flex", "background-main", "text-white", "align-items-center", "justify-content-center"], [2, "margin", "20vh", "z-index", "2"], [2, "color", "var(--yellow_munsell)"], [1, "row", "expand-row"], [1, "col", "d-flex", "justify-content-start", "align-items-center", "flex-column", 2, "height", "50vh"], ["contact", ""], [1, "my-4"], [1, "my-3", "text-uppercase", "text-light-sea-green", "text-decor-wide"], [1, "card", "d-flex", "flex-row", "justify-content-center", "align-items-center", "gap-3", 2, "height", "30vh"], [1, "contact-info", "d-flex", "justify-content-end", 2, "width", "30vw"], [1, "d-flex", "flex-column", "gap-3", "margin-right", 2, "margin", "0", "padding", "0"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "text-uppercase"], [1, "list-inline-item"], [1, "fa-solid", "fa-location-dot"], [1, "fa-solid", "fa-phone"], [1, "fa-solid", "fa-inbox"], [1, "d-flex", "flex-row", "align-items-center", "h-100", 2, "width", "30vw", "z-index", "1"], [2, "width", "0", "height", "0", "z-index", "2"], [1, "cut-shadow"], [1, "profile-block", "d-flex", "bg-white", "align-items-center", "justify-content-center", 2, "z-index", "3", "height", "100%"], [2, "margin-right", "1rem", "margin-left", "1rem"], [1, "my-1"], [1, "text-uppercase", "fw-bold", "text-tangerine"], [2, "width", "150px", "border-radius", "100%", "overflow", "hidden"], ["src", "./assets/img/portrait.jpg", "alt", "My profiles photo", 2, "width", "150px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " QR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Reviews study app! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6, 7)(11, "div", 8)(12, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "ul", 12)(17, "li", 13)(18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ukraine, Lviv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+380977551373");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "serhii.terletskiy.ua@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 12)(27, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22)(37, "div", 23)(38, "h5", 24)(39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Serhii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Terletskiy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Junior FullStack developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: [".expand-row[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 100vw;\n  margin-left: calc(-50vw + 50%);\n}\n\n.background-main[_ngcontent-%COMP%] {\n  background-color: var(--light_sea_green);\n}\n\n.background-secondary[_ngcontent-%COMP%] {\n  background-color: var(--columbia_blue);\n}\n\n.no-shadow[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.profile-shadow[_ngcontent-%COMP%] {\n  box-shadow: -10px 0 40px 10px #cecece;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n\n.cut-shadow[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100px;\n  border-radius: 100%;\n  transform: translate(50%, -50%);\n  box-shadow: 0 0 50px 20px var(--light_sea_green);\n  opacity: 50%;\n}\n\n.text-tangerine[_ngcontent-%COMP%] {\n  color: var(--tangerine);\n}\n\n.text-light-sea-green[_ngcontent-%COMP%] {\n  color: var(--light_sea_green);\n}\n\n.text-decor-wide[_ngcontent-%COMP%] {\n  letter-spacing: 10px;\n  opacity: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtcm93IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tbGVmdDogY2FsYygtNTB2dyArIDUwJSk7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLW1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0X3NlYV9ncmVlbik7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sdW1iaWFfYmx1ZSk7XHJcbn1cclxuXHJcbi5uby1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogLTEwcHggMCA0MHB4IDEwcHggI2NlY2VjZTtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXQtc2hhZG93IHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1MHB4IDIwcHggdmFyKC0tbGlnaHRfc2VhX2dyZWVuKTtcclxuICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi50ZXh0LXRhbmdlcmluZXtcclxuICBjb2xvcjogdmFyKC0tdGFuZ2VyaW5lKTtcclxufVxyXG5cclxuLnRleHQtbGlnaHQtc2VhLWdyZWVue1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodF9zZWFfZ3JlZW4pO1xyXG59XHJcbi50ZXh0LWRlY29yLXdpZGV7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgb3BhY2l0eTogMzAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1079:
/*!******************************************************!*\
  !*** ./src/app/compoenents/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LoginComponent_form_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errMsg, " ");
} }
const _c0 = function () { return ["../", "password_recovery", "send_to_mail"]; };
function LoginComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.formLogin.valid && ctx_r3.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5)(3, "div", 6)(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Can`t remember password? Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginComponent_form_2_div_21_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.submitted && ctx_r0.isLoginFailed);
} }
class LoginComponent {
    constructor(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('antit4'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('12345678')
        });
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errMsg = '';
        this.roles = [];
    }
    ngOnInit() {
        this.authService.UserIsLogged.subscribe({ next: value => this.isLoggedIn = value });
        if (this.authService.getAccessToken()) {
            const user = this.authService.getUser();
            if (user) {
                this.user = user;
            }
            this.authService.UserIsLogged.next(true);
        }
        else {
            this.authService.UserIsLogged.next(false);
        }
    }
    onSubmit() {
        let { login, password } = this.formLogin.value;
        login = login.toLowerCase();
        this.authService.login(login, password).subscribe({
            next: (value) => {
                this.authService.SaveTokens(value);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.userService.getMeUser().pipe().subscribe({
                    next: (value) => {
                        let user = value.data[0];
                        this.authService.saveUser(user);
                        this.user = user;
                        this.authService.UserIsLogged.next(true);
                        this.router.navigate(['/profile', 'info']);
                    },
                    error: (err) => {
                        this.authService.UserIsLogged.next(false);
                        console.log(err);
                        this.errMsg = err.error.detail;
                        this.isLoginFailed = true;
                    }
                });
            },
            error: (err) => {
                this.errMsg = err.error.detail;
                this.isLoginFailed = true;
            },
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 1, consts: [[1, "col-md-12", 2, "margin-top", "30vh"], [1, "card-container"], ["class", "px-2 py-2 d-flex flex-column align-items-center", "name", "form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 1, "px-2", "py-2", "d-flex", "flex-column", "align-items-center", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "row", "mb-2"], [1, "col", "form-group"], ["for", "login"], ["id", "login", "type", "text", "name", "username", "formControlName", "login", "required", "", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "formControlName", "password", "required", "", "minlength", "4", 1, "form-control"], [1, "form-group"], [1, "btn", "btn-primary", "btn-block", "mb-5"], [1, "yellow_text", 2, "text-decoration", "none", 3, "routerLink"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 22, 4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7812:
/*!**********************************************************!*\
  !*** ./src/app/compoenents/profile/profile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function () { return ["info"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return ["qr_codes"]; };
const _c3 = function () { return ["telegram_info"]; };
class ProfileComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    ngOnInit() {
        const user = this.authService.getUser();
        if (user) {
            this.currentUser = user;
        }
        else {
            this.getUser();
        }
    }
    getUser() {
        this.userService.getMeUser().subscribe({
            next: (value) => {
                const user = value.data[0];
                this.currentUser = user;
                this.authService.saveUser(user);
            },
            error: (value) => {
                console.log('Profile model error');
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 12, vars: 12, consts: [[1, "container", 2, "margin-top", "120px", "margin-bottom", "120px"], [1, "row"], [1, "col-3"], [1, "list-group", "mb-2"], [1, "list-group-item", "list-group-item-action", 3, "routerLink", "routerLinkActive"], [1, "col-9"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " QR codes managements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Telegram connection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 72:
/*!******************************************************************************************!*\
  !*** ./src/app/compoenents/profile/qr-codes-page/qr-code-form/qr-code-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodeFormComponent": () => (/* binding */ QrCodeFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_public_place_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/public-place.service */ 7708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);







class QrCodeFormComponent {
    constructor(placeService) {
        this.placeService = placeService;
        this.addQrEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.createPlaceForm();
    }
    createPlaceForm() {
        this._PlaceGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
                street_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            })
        });
    }
    _SubmitPlace() {
        this.placeService.createPlace(this._PlaceGroup.value).subscribe({
            next: (value) => {
                this.addQrEvent.emit(value);
            }
        });
    }
}
QrCodeFormComponent.ɵfac = function QrCodeFormComponent_Factory(t) { return new (t || QrCodeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_public_place_service__WEBPACK_IMPORTED_MODULE_0__.PublicPlaceService)); };
QrCodeFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QrCodeFormComponent, selectors: [["app-qr-code-form"]], outputs: { addQrEvent: "addQrEvent" }, decls: 25, vars: 3, consts: [[1, "form-group", 3, "formGroup", "ngSubmit"], [1, "col"], [1, "row"], ["for", "name"], ["required", "", "id", "name", "name", "name", "formControlName", "name", 1, "form-control"], ["formGroupName", "address", 1, "row", "mb-2"], ["for", "country"], [1, "form-control", 2, "color", "black"], ["id", "country", "placeholder", "Country", "formControlName", "country"], [2, "color", "black", "background-color", "white", 3, "value"], ["for", "city"], ["required", "", "id", "city", "name", "city", "formControlName", "city", 1, "form-control"], ["for", "street"], ["required", "", "id", "street", "name", "street", "formControlName", "street", 1, "form-control"], ["for", "street_number"], ["required", "", "id", "street_number", "name", "street_number", "formControlName", "street_number", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function QrCodeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function QrCodeFormComponent_Template_form_ngSubmit_0_listener() { return ctx._SubmitPlace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name of your place");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "mat-select", 8)(11, "mat-option", 9)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Street number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Create place");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx._PlaceGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "UA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx._PlaceGroup.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1jb2RlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9391:
/*!******************************************************************************!*\
  !*** ./src/app/compoenents/profile/qr-codes-page/qr-codes-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodesPageComponent": () => (/* binding */ QrCodesPageComponent)
/* harmony export */ });
/* harmony import */ var _qr_reviews_page_qr_reviews_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../qr-reviews-page/qr-reviews-page.component */ 944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_public_place_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/public-place.service */ 7708);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _qr_code_form_qr_code_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-code-form/qr-code-form.component */ 72);






function QrCodesPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "app-qr-code-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("addQrEvent", function QrCodesPageComponent_div_14_Template_app_qr_code_form_addQrEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5._addQr($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function QrCodesPageComponent_hr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
} }
function QrCodesPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_div_18_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const qr_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8._saveImg(qr_r7.qr_data.qr_code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Click to save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 1)(8, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 19)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 21)(18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_div_18_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const qr_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10._getReviewsModalOpenXl(qr_r7.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_div_18_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const qr_r7 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11._deletePlaceModal(_r3, qr_r7.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Delete place");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const qr_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", qr_r7.qr_data.qr_code, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", qr_r7.qr_data.qr_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", qr_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 9, qr_r7.created_at, "MMM d, y, HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"]("", qr_r7.address.country, " ", qr_r7.address.city, " ", qr_r7.address.street, " ", qr_r7.address.street_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("ID : ", qr_r7.id, "");
} }
function QrCodesPageComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete place");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_ng_template_19_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r12.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29)(8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_ng_template_19_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15._deletePlace(modal_r12)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_ng_template_19_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r12.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4._msg);
} }
class QrCodesPageComponent {
    constructor(publicPlaceService, modalService) {
        this.publicPlaceService = publicPlaceService;
        this.modalService = modalService;
        this._msg = '';
        this._qrDeleteId = '';
        this._createQr = false;
        this.params = {
            page_size: 40
        };
    }
    ngOnInit() {
        this._getUsersPublicPlaces();
    }
    _getUsersPublicPlaces() {
        this.publicPlaceService.getMyPlaces(this.params).subscribe({
            next: value => {
                this._qrs = value.data;
            }
        });
    }
    _createQrMode() {
        this._createQr = !this._createQr;
    }
    _addQr($event) {
        if (!this._qrs) {
            this._qrs = [];
        }
        this._qrs.unshift($event);
        if (this._qrs.length >= 10) {
            this._qrs.pop();
        }
    }
    _getReviewsModalOpenXl(place_id) {
        const reviewModalRef = this.modalService.open(_qr_reviews_page_qr_reviews_page_component__WEBPACK_IMPORTED_MODULE_0__.QrReviewsPageComponent, { size: 'xl' });
        reviewModalRef.componentInstance.place_id = place_id;
    }
    _deletePlaceModal(content, id, msg = 'Are sure want to delete place?') {
        this.modalService.open(content);
        this._msg = msg;
        this._qrDeleteId = id;
    }
    _deletePlace(modal) {
        this.publicPlaceService.deletePlace(this._qrDeleteId).subscribe({
            next: value => {
                this._qrs = this._qrs.filter(obj => obj.id != this._qrDeleteId);
            }
        });
        modal.close();
    }
    _saveImg(src) {
        window.open(src);
    }
}
QrCodesPageComponent.ɵfac = function QrCodesPageComponent_Factory(t) { return new (t || QrCodesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_public_place_service__WEBPACK_IMPORTED_MODULE_1__.PublicPlaceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
QrCodesPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QrCodesPageComponent, selectors: [["app-qr-codes-page"]], decls: 21, vars: 3, consts: [[1, "card", "mb-5"], [1, "card-body"], [1, "col"], [1, "row"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-6", 4, "ngIf"], [4, "ngIf"], [1, "col", "d-flex", "gap-2", "flex-column"], ["class", "card flex-row px-3 py-3 azure_light_bg no_shadow", 4, "ngFor", "ngForOf"], ["content", ""], [1, "col-6"], [3, "addQrEvent"], [1, "card", "flex-row", "px-3", "py-3", "azure_light_bg", "no_shadow"], [1, "card-img", "hover-shadow", "host_picture", "overflow-hidden", 2, "width", "200px", "height", "200px", "border-radius", "25px"], [3, "click"], [1, "", 2, "width", "200px", 3, "src", "alt"], [1, "save_me", "text-light", 2, "width", "200px", "height", "40px"], [1, "card-title"], [1, "card-text"], [1, "text-capitalize"], [1, "d-flex", "flex-column", "justify-content-between"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function QrCodesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Your places");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QrCodesPageComponent_Template_button_click_8_listener() { return ctx._createQrMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Create place");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "div", 2)(13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, QrCodesPageComponent_div_14_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, QrCodesPageComponent_hr_15_Template, 1, 0, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3)(17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, QrCodesPageComponent_div_18_Template, 22, 12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, QrCodesPageComponent_ng_template_19_Template, 12, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._createQr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._createQr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._qrs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _qr_code_form_qr_code_form_component__WEBPACK_IMPORTED_MODULE_2__.QrCodeFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".no_shadow[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.save_me[_ngcontent-%COMP%] {\n  background-color: var(--bs-danger);\n  transition: all 0.25s ease-in;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 15px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.host_picture[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: translateY(0);\n}\n\n.host_picture[_ngcontent-%COMP%]:hover   .save_me[_ngcontent-%COMP%] {\n  transform: translateY(-40px);\n  transition: transform 0.25s ease-in;\n}\n\n@keyframes move {\n  0% {\n    bottom: -40px;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLWNvZGVzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNDLHdCQUFBO0FBRUg7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGFBQUE7RUFIRjtFQUtBO0lBQ0UsU0FBQTtFQUhGO0FBQ0YiLCJmaWxlIjoicXItY29kZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub19zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zYXZlX21lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1kYW5nZXIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaG9zdF9waWN0dXJlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAvL3RyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcclxufVxyXG4vL1xyXG4uaG9zdF9waWN0dXJlOmhvdmVyIC5zYXZlX21lIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluO1xyXG59XHJcbi8vXHJcbi8vLmhvc3RfcGljdHVyZTpob3ZlciAuc2F2ZV9tZSB7XHJcbi8vICBib3R0b206IDA7XHJcbi8vfVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IC00MHB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 944:
/*!**********************************************************************************!*\
  !*** ./src/app/compoenents/profile/qr-reviews-page/qr-reviews-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrReviewsPageComponent": () => (/* binding */ QrReviewsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _services_reviews_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/reviews.service */ 2178);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);





const _c0 = function () { return [5, 10, 25]; };
function QrReviewsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-paginator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function QrReviewsPageComponent_div_0_Template_mat_paginator_page_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.handlePageEvent($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Average: ", ctx_r0.avg_score, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r0._pageCount)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("pageSize", 10);
} }
function QrReviewsPageComponent_div_2_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Customer name: ", review_r6.customer_name, " ");
} }
function QrReviewsPageComponent_div_2_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Customer rate: ", review_r6.place_score, " ");
} }
function QrReviewsPageComponent_div_2_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Phone number: ", review_r6.customer_phone_number, " ");
} }
function QrReviewsPageComponent_div_2_div_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r6.customer_review, " ");
} }
function QrReviewsPageComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QrReviewsPageComponent_div_2_div_1_p_3_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QrReviewsPageComponent_div_2_div_1_p_4_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QrReviewsPageComponent_div_2_div_1_p_5_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QrReviewsPageComponent_div_2_div_1_p_6_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const review_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.place_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.customer_phone_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r6.customer_review);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 6, review_r6.created_at, "MMM d, y, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Review id : ", review_r6.id, "");
} }
function QrReviewsPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QrReviewsPageComponent_div_2_div_1_Template, 12, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.reviews_list);
} }
function QrReviewsPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.err);
} }
class QrReviewsPageComponent {
    constructor(activeModal, reviewsService) {
        this.activeModal = activeModal;
        this.reviewsService = reviewsService;
        this._getReviewsParams = {
            page: 1,
            page_size: 10,
            ordering: '-created_at'
        };
    }
    ngOnInit() {
        this._getReviews(this._getReviewsParams);
        this._getAvgScore(this._getAvgScoreParams);
    }
    _getReviews(params) {
        this.reviewsService
            .getReviews(this.place_id, params)
            .subscribe({
            next: value => {
                this._pageCount = parseInt(value.count);
                this.reviews_list = value.data;
            },
            error: err => {
                this.err = err.error.detail;
            }
        });
    }
    _getAvgScore(params) {
        this.reviewsService
            .getAvgScoreReviews(this.place_id, params)
            .subscribe({
            next: value => {
                this.avg_score = value.data.place_score__avg;
            }
        });
    }
    handlePageEvent($event) {
        this._getReviewsParams.page_size = $event.pageSize;
        this._getReviewsParams.page = $event.pageIndex + 1;
        this._getReviews(this._getReviewsParams);
    }
}
QrReviewsPageComponent.ɵfac = function QrReviewsPageComponent_Factory(t) { return new (t || QrReviewsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reviews_service__WEBPACK_IMPORTED_MODULE_0__.ReviewsService)); };
QrReviewsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QrReviewsPageComponent, selectors: [["app-qr-reviews-page"]], inputs: { place_id: "place_id" }, decls: 7, vars: 3, consts: [["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "paginate_reviews", 1, "border-5", 2, "overflow", "hidden", 3, "length", "pageSizeOptions", "pageSize", "page"], [4, "ngFor", "ngForOf"], [1, "card", "mb-2", "mt-2"], [1, "card-body"], [1, "card-text"]], template: function QrReviewsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QrReviewsPageComponent_div_0_Template, 4, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QrReviewsPageComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QrReviewsPageComponent_div_3_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QrReviewsPageComponent_Template_button_click_5_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.err);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.err);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".mat-paginator[_ngcontent-%COMP%] {\n  background-color: var(--light_sea_green);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXJldmlld3MtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJxci1yZXZpZXdzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXBhZ2luYXRvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodF9zZWFfZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9634:
/*!******************************************************************************!*\
  !*** ./src/app/compoenents/profile/telegram-info/telegram-info.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramInfoComponent": () => (/* binding */ TelegramInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/user.service */ 2996);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class TelegramInfoComponent {
    constructor(userService) {
        this.userService = userService;
        this.telegramCode = '';
    }
    ngOnInit() {
        this.userService.getUserTelegramKeyObject().subscribe({
            next: value => {
                this.telegramCode = value.data[0].token_key;
                this.is_active = value.data[0].is_active;
            }
        });
    }
    _sliderIsActive() {
        this.userService.getUserTelegramKeyObject().subscribe({
            next: value => {
                if (value.data[0].is_active) {
                    this.slider_value = 10;
                }
                else {
                    this.slider_value = 1;
                }
            }
        });
    }
    setValue($event) {
        this.userService.getUserTelegramKeyObject().subscribe({
            next: value => {
                if (value.data[0].is_active) {
                    this.slider_value = 10;
                }
                else {
                    this.slider_value = 1;
                }
            }
        });
    }
}
TelegramInfoComponent.ɵfac = function TelegramInfoComponent_Factory(t) { return new (t || TelegramInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
TelegramInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TelegramInfoComponent, selectors: [["app-telegram-info"]], decls: 18, vars: 4, consts: [[1, "card", "mb-5"], [1, "card-body"], [1, "row"], [1, "col", "justify-content-center", "align-items-center"], [2, "text-align", "center"], ["target", "_blank", "href", "https://t.me/RateMe_app_bot", 2, "text-decoration", "none", "color", "#ccc5cc"], [1, "col"], [1, "col-2"], [1, "slide_container", "card", "px-2", "py-2"], ["for", "telegram_range"], ["type", "range", "step", "10", "value", "0", "id", "telegram_range", 1, "slider", 3, "min", "max", "ngModel", "ngModelChange"]], template: function TelegramInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "To connect your telegram send code to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "RateMeApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "div", 7)(14, "div", 8)(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Activate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TelegramInfoComponent_Template_input_ngModelChange_17_listener($event) { return ctx.slider_value = $event; })("ngModelChange", function TelegramInfoComponent_Template_input_ngModelChange_17_listener($event) { return ctx.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Your telegram code: ", ctx.telegramCode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", 0)("max", 10)("ngModel", ctx.slider_value);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: [".slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 5px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbGVncmFtLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsc0JBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtBQUhGIiwiZmlsZSI6InRlbGVncmFtLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVfY29udGFpbmVyIHtcclxuXHJcbn1cclxuXHJcbi8qIFRoZSBzbGlkZXIgaXRzZWxmICovXHJcbi5zbGlkZXIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1750:
/*!****************************************************************************!*\
  !*** ./src/app/compoenents/profile/user-profile/user-profile.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _constants_regEx_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/regEx.constants */ 3111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/user.service */ 2996);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 2567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function UserProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 31)(5, "div", 32)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Max 2 mb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.currentUser.profile.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 31)(4, "div", 32)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Max 2 mb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
class UserProfileComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this._editAbout = false;
        this._disableOnSubmit = true;
        this._placeholderInfo = 'Minimum characters input';
        this._minChars = 10;
    }
    ngOnInit() {
        const user = this.authService.getUser();
        if (user) {
            this.currentUser = user;
            console.log(user);
        }
        else {
            this.getUser();
        }
        this._createUserForm();
        this._createAvatarForm();
    }
    getUser() {
        this.userService.getMeUser().subscribe({
            next: (value) => {
                const user = value.data[0];
                this.currentUser = user;
                this.authService.saveUser(user);
            },
            error: (value) => {
                console.log('Profile model error');
            }
        });
    }
    _createUserForm() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(``, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(130)]),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(``, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_constants_regEx_constants__WEBPACK_IMPORTED_MODULE_0__.regExList.ukrainian_phone_num)]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(``, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)
            ]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(``, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)
            ]),
            about_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(``, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(5000)]),
        });
    }
    _createAvatarForm() {
        this.usersAvatarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [])
        });
    }
    onSubmit() {
        let newInfo = this.userForm.value;
        Object.keys(newInfo).forEach(key => {
            if (newInfo[key] === '' || newInfo[key] === null) {
                delete newInfo[key];
            }
        });
        if (Object.keys(newInfo).length !== 0) {
            this.userService.updateUserProfileByID(newInfo).subscribe({
                next: (profile) => {
                    this.currentUser.profile = profile;
                    this.authService.updateUser(profile);
                    this.userForm.reset(this.userForm.value);
                    this._editAbout = false;
                },
                error: (err) => {
                    console.warn(err);
                }
            });
        }
    }
    _uploadPicture(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size >= 1000 * 1024) {
                return;
            }
            let data = new FormData();
            data.append('avatar', file);
            this.userService.addAvatarToUser(data).subscribe({
                next: value => {
                    this.currentUser.profile.avatar = value.avatar;
                    this.authService.updateUserAvatar(value.avatar);
                }
            });
        }
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
UserProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], inputs: { currentUser: "currentUser" }, decls: 55, vars: 11, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-center", "host_picture", "overflow_hide", "mb-3", 2, "width", "200px", "height", "200px", "border-radius", "50%", 3, "click"], ["class", "picture_center", "style", "width: 0;height: 0", 4, "ngIf", "ngIfElse"], [2, "display", "none", 3, "formGroup"], ["for", "profile_picture"], ["formControlName", "avatar", "name", "profile_picture", "id", "profile_picture", "type", "file", "accept", ".jpg,.png,.svg", 3, "change"], ["file_upload", ""], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row", "mb-2"], [1, "col"], [1, "col-4", "col-form-label"], [1, "fw-bold"], ["for", "name", 1, "col-4", "col-form-label"], [1, "col-8"], ["id", "name", "name", "name", "placeholder", "First Name", "formControlName", "first_name", "type", "text", 1, "form-control", "here"], ["for", "lastname", 1, "col-4", "col-form-label"], ["id", "lastname", "name", "lastname", "placeholder", "Last Name", "type", "text", "formControlName", "last_name", 1, "form-control", "here"], ["id", "birth_date", "name", "birth_date", "placeholder", "Birth date", "type", "text", "formControlName", "birth_date", 1, "form-control", "here"], ["for", "phone_number", 1, "col-4", "col-form-label"], ["id", "phone_number", "name", "name", "placeholder", "Phone number", "formControlName", "phone_number", "type", "text", 1, "form-control", "here"], [1, "form-group", "row"], [1, "col-12"], ["name", "submit", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["profile_pic_placeholder", ""], [1, "picture_center", 2, "width", "0", "height", "0"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "width", "200px"], ["alt", "user photo", 2, "object-fit", "cover", "width", "200px", "height", "200px", 3, "src"], [1, "save_me", 2, "width", "200px", "height", "200px", "border-radius", "50%"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-column"], [1, "fa-solid", "fa-camera", "no_select", 2, "font-size", "3rem"], [1, "picture_center"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3", 2, "width", "150px", "height", "150px", "border-radius", "50%", "overflow", "hidden"], ["src", "./assets/img/profile_place_holder.jpg", "alt", "user photo placeholder", 2, "object-fit", "cover", "width", "200px", "height", "200px"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, UserProfileComponent_div_7_Template, 9, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Upload to");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_11_listener($event) { return ctx._uploadPicture($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2)(15, "div", 10)(16, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "p", 14)(20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "p", 14)(26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Login - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 12)(30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 12)(35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 12)(40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 12)(45, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 24)(50, "div", 25)(51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Update My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, UserProfileComponent_ng_template_53_Template, 8, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser.profile.avatar)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.usersAvatarForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentUser.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentUser.profile.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentUser.profile.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Birth date: ", ctx.currentUser.profile.birth_date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Phone number: ", ctx.currentUser.profile.phone_number, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.userForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: [".overflow_hide[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.picture_center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.save_me[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: all 0.25s ease-in;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  opacity: 0;\n}\n\n.host_picture[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.host_picture[_ngcontent-%COMP%]:hover   .save_me[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transition: opacity 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7QUFGRiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmZsb3dfaGlkZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBpY3R1cmVfY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zYXZlX21lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW47XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmhvc3RfcGljdHVyZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xyXG4gIC8vdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vL1xyXG4uaG9zdF9waWN0dXJlOmhvdmVyIC5zYXZlX21lIHtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1429:
/*!************************************************************************!*\
  !*** ./src/app/compoenents/redirect-pages/redirect-pages.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectPagesComponent": () => (/* binding */ RedirectPagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RedirectPagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RedirectPagesComponent.ɵfac = function RedirectPagesComponent_Factory(t) { return new (t || RedirectPagesComponent)(); };
RedirectPagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedirectPagesComponent, selectors: [["app-redirect-pages"]], decls: 2, vars: 0, template: function RedirectPagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "redirect-pages works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdC1wYWdlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 6685:
/*!*********************************************************************************!*\
  !*** ./src/app/compoenents/redirect-pages/redirect404/redirect404.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redirect404Component": () => (/* binding */ Redirect404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Redirect404Component {
    constructor() { }
    ngOnInit() {
    }
}
Redirect404Component.ɵfac = function Redirect404Component_Factory(t) { return new (t || Redirect404Component)(); };
Redirect404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Redirect404Component, selectors: [["app-redirect404"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "col-12", "align-items-center", "justify-content-center", 2, "margin-top", "10rem"], [1, "row"], [2, "text-align", "center"]], template: function Redirect404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Whoops! Something went wrong!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdDQwNC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 8850:
/*!************************************************************************!*\
  !*** ./src/app/compoenents/review-qr-form/review-qr-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewQrFormComponent": () => (/* binding */ ReviewQrFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_reviews_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/reviews.service */ 2178);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);







function ReviewQrFormComponent_div_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const fill_r4 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("bi-star", fill_r4 === 100 ? "-fill" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r4 === 100);
} }
function ReviewQrFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReviewQrFormComponent_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6._submitReview(ctx_r6._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6)(3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Customer phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Customer review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13)(15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Place rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngb-rating", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ReviewQrFormComponent_div_2_ng_template_18_Template, 1, 5, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0._reviewForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
} }
function ReviewQrFormComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2._sendMsg);
} }
class ReviewQrFormComponent {
    constructor(activatedRoute, reviewService) {
        this.activatedRoute = activatedRoute;
        this.reviewService = reviewService;
        this._id = '';
        this._currentRate = 5;
    }
    ngOnInit() {
        this._creteReviewFormGroup();
        this.activatedRoute.params.subscribe({
            next: value => {
                this._id = value['id'];
            }
        });
    }
    _creteReviewFormGroup() {
        this._reviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            customer_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            customer_review: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            place_score: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
        });
    }
    _submitReview(id) {
        console.log(this._reviewForm.value);
        this.reviewService.postReview(id, this._reviewForm.value).subscribe({
            next: value => {
                this._sendMsg = value.detail;
            },
            error: err => {
                console.log(err);
                this._errMsg = err.message;
            }
        });
    }
}
ReviewQrFormComponent.ɵfac = function ReviewQrFormComponent_Factory(t) { return new (t || ReviewQrFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reviews_service__WEBPACK_IMPORTED_MODULE_0__.ReviewsService)); };
ReviewQrFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReviewQrFormComponent, selectors: [["app-review-qr-form"]], decls: 5, vars: 2, consts: [[1, "container-fluid"], [1, "row", "d-flex", "align-items-center", "justify-content-center", 2, "margin-top", "10rem"], ["class", "col-3", 4, "ngIf", "ngIfElse"], ["success", ""], [1, "col-3"], [1, "form", "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-2", 3, "formGroup", "ngSubmit"], [1, "form-group", "w-100"], ["for", "customer_phone_number"], ["id", "customer_phone_number", "name", "customer_phone_number", "formControlName", "customer_phone_number", 1, "form-control"], ["for", "customer_name"], ["id", "customer_name", "formControlName", "customer_name", 1, "form-control"], ["for", "customer_review"], ["id", "customer_review", "formControlName", "customer_review", 1, "form-control"], [1, "form-group", "w-100", "d-flex", "justify-content-between", "align-items-center", "flex-column"], ["for", "place_score"], ["id", "place_score", "formControlName", "place_score", 3, "max"], ["type", "SUBMIT", 1, "btn", "btn-primary"], [1, "col-3", "d-flex", "align-items-center", "justify-content-center"], [1, "text-success", 2, "font-size", "40px"]], template: function ReviewQrFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReviewQrFormComponent_div_2_Template, 21, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReviewQrFormComponent_ng_template_3_Template, 3, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._sendMsg)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbRating, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding-right: 0.1rem;\n  color: #b0c4de;\n}\n\n.filled[_ngcontent-%COMP%] {\n  color: #1e90ff;\n}\n\n.low[_ngcontent-%COMP%] {\n  color: #deb0b0;\n}\n\n.filled.low[_ngcontent-%COMP%] {\n  color: #ff1e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1xci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJyZXZpZXctcXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcclxuICBjb2xvcjogI2IwYzRkZTtcclxufVxyXG5cclxuLmZpbGxlZCB7XHJcbiAgY29sb3I6ICMxZTkwZmY7XHJcbn1cclxuXHJcbi5sb3cge1xyXG4gIGNvbG9yOiAjZGViMGIwO1xyXG59XHJcblxyXG4uZmlsbGVkLmxvdyB7XHJcbiAgY29sb3I6ICNmZjFlMWU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9739:
/*!*************************************************************************************!*\
  !*** ./src/app/compoenents/signup/password-recovery/password-recovery.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordRecoveryComponent": () => (/* binding */ PasswordRecoveryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/user.service */ 2996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function PasswordRecoveryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PasswordRecoveryComponent_div_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4._recoverPassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "div", 7)(5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Recover password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.passwordMailRecovery);
} }
function PasswordRecoveryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PasswordRecoveryComponent_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6._sendNewPassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6)(3, "div", 7)(4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PasswordRecoveryComponent_div_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.newPassword = $event); })("ngModelChange", function PasswordRecoveryComponent_div_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.passwords_confirm($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PasswordRecoveryComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.confirmPassword = $event); })("ngModelChange", function PasswordRecoveryComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.passwords_confirm($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10)(11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Confirm password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1._newPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.validPassword || ctx_r1._newPasswordForm.invalid);
} }
function PasswordRecoveryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.recoverSent);
} }
class PasswordRecoveryComponent {
    constructor(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.validPassword = false;
        this.recoverSent = '';
    }
    ngOnInit() {
        this._createRecoverForm();
        this._createNewPasswordForm();
        this.activatedRoute.params.subscribe({
            next: value => {
                this.isMail = value['token'] == 'send_to_mail';
                if (!this.isMail) {
                    this.token = value['token'];
                }
            }
        });
    }
    _createRecoverForm() {
        this.passwordMailRecovery = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    _createNewPasswordForm() {
        this._newPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(16),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            ]),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [])
        });
    }
    _recoverPassword() {
        this.userService.recoverPassword(this.passwordMailRecovery.value).subscribe({
            next: v => {
                this.recoverSent = v.detail;
            },
            error: err => {
            }
        });
    }
    _sendNewPassword() {
        this.userService.sendNewPassword(this.token, this._newPasswordForm.value['password']).subscribe({
            next: (v) => {
                this.recoverSent = v.detail;
            }
        });
    }
    passwords_confirm($event) {
        this.validPassword = this.confirmPassword == this.newPassword;
        console.log(this._newPasswordForm.valid);
    }
}
PasswordRecoveryComponent.ɵfac = function PasswordRecoveryComponent_Factory(t) { return new (t || PasswordRecoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
PasswordRecoveryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PasswordRecoveryComponent, selectors: [["app-password-recovery"]], decls: 4, vars: 3, consts: [[1, "col-md-12", 2, "margin-top", "30vh"], ["class", "card-container", 4, "ngIf"], ["class", "row mb-2 justify-content-center align-items-center", 4, "ngIf"], [1, "card-container"], ["name", "form", "novalidate", "", 1, "px-2", "py-2", "d-flex", "flex-column", "align-items-center", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "row", "mb-2"], [1, "col", "form-group"], ["for", "email"], ["id", "email", "type", "text", "name", "email", "formControlName", "email", "required", "", 1, "form-control"], [1, "form-group"], [1, "btn", "btn-primary", "btn-block", "mb-5"], ["name", "form", 1, "px-2", "py-2", "d-flex", "flex-column", "align-items-center", 3, "formGroup", "ngSubmit"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "formControlName", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "confirm"], ["id", "confirm", "type", "password", "name", "confirm", "formControlName", "confirm", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-5", 3, "disabled"], [1, "row", "mb-2", "justify-content-center", "align-items-center"], [1, "col-4"], [2, "text-align", "center"]], template: function PasswordRecoveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PasswordRecoveryComponent_div_1_Template, 11, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordRecoveryComponent_div_2_Template, 13, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PasswordRecoveryComponent_div_3_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recoverSent);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1yZWNvdmVyeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 3705:
/*!***********************************************************************************!*\
  !*** ./src/app/compoenents/signup/profile-activate/profile-activate.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileActivateComponent": () => (/* binding */ ProfileActivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/user.service */ 2996);



class ProfileActivateComponent {
    constructor(activatedRoute, router, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        let token = this.activatedRoute.snapshot.paramMap.get('token');
        if (token) {
            this.userService.activateUser(token).subscribe({
                next: value => {
                    this.router.navigate(['user_is_activated']).then();
                },
                error: (err) => {
                    this.router.navigate(['page404']).then();
                }
            });
        }
    }
}
ProfileActivateComponent.ɵfac = function ProfileActivateComponent_Factory(t) { return new (t || ProfileActivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
ProfileActivateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileActivateComponent, selectors: [["app-profile-activate"]], decls: 0, vars: 0, template: function ProfileActivateComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWFjdGl2YXRlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 3948:
/*!******************************************************************************************************!*\
  !*** ./src/app/compoenents/signup/profile-activate/profile-activated/profile-activated.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileActivatedComponent": () => (/* binding */ ProfileActivatedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfileActivatedComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileActivatedComponent.ɵfac = function ProfileActivatedComponent_Factory(t) { return new (t || ProfileActivatedComponent)(); };
ProfileActivatedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileActivatedComponent, selectors: [["app-profile-activated"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "col-12", "align-items-center", "justify-content-center", 2, "margin-top", "10rem"], [1, "row"], [2, "text-align", "center"]], template: function ProfileActivatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your account is now active. Login to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWFjdGl2YXRlZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4029:
/*!********************************************************!*\
  !*** ./src/app/compoenents/signup/signup.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function SignupComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15)(12, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Second name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Day of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 26)(28, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
} }
function SignupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.errMsg, " ");
} }
class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.errMsg = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('11d@gmail.com'),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('abrams1'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('111111'),
            profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
                first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('Serhiy'),
                second_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('Terletskiy'),
                last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('andriy'),
                age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('18'),
                birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('1977-06-12'),
            }),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        let user = this.registerForm.getRawValue();
        this.authService.register(user).subscribe({
            next: (value) => {
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.router.navigate(['../', 'login']);
            },
            error: (err) => {
                if (err.error.email) {
                    this.errMsg = 'The email is already registered';
                }
                else {
                    this.errMsg = JSON.stringify(err);
                }
                this.isSignUpFailed = true;
            }
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 7, vars: 2, consts: [[1, "container"], [1, "col-md-12"], [1, "row", "justify-content-center"], [1, "col-4"], [1, "border-2", "d-flex", "align-items-center", "flex-column", 2, "margin-top", "120px"], ["class", "w-75", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "warning", 4, "ngIf"], ["novalidate", "", 1, "w-75", 3, "formGroup", "ngSubmit"], [1, "form-group", "pb-2"], ["for", "email"], ["type", "text", "id", "email", "required", "", "email", "", "formControlName", "email", 1, "form-control"], ["for", "login"], ["type", "text", "id", "login", "required", "", "formControlName", "login", 1, "form-control"], ["for", "password"], ["type", "text", "id", "password", "required", "", "formControlName", "password", 1, "form-control"], ["formGroupName", "profile"], ["for", "age"], ["type", "text", "id", "age", "required", "", "formControlName", "age", 1, "form-control"], ["for", "first_name"], ["type", "text", "id", "first_name", "required", "", "formControlName", "first_name", 1, "form-control"], ["for", "second_name"], ["type", "text", "id", "second_name", "required", "", "formControlName", "second_name", 1, "form-control"], ["for", "last_name"], ["type", "text", "id", "last_name", "required", "", "formControlName", "last_name", 1, "form-control"], ["for", "birth_date"], ["type", "text", "id", "birth_date", "required", "", "formControlName", "birth_date", 1, "form-control"], [1, "form-group"], [1, "btn", "btn-primary", "btn-block"], [1, "warning"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignupComponent_form_5_Template, 30, 1, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignupComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errMsg);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3111:
/*!******************************************!*\
  !*** ./src/constants/regEx.constants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regExList": () => (/* binding */ regExList)
/* harmony export */ });
const regExList = {
    ukrainian_phone_num: new RegExp("(\\+380\\s?d{2}\\s?d{3}\\s?d{4}$)"),
};


/***/ }),

/***/ 263:
/*!****************************************!*\
  !*** ./src/constants/url.constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicPlaceUrl": () => (/* binding */ PublicPlaceUrl),
/* harmony export */   "ReviewPlaceUrl": () => (/* binding */ ReviewPlaceUrl),
/* harmony export */   "boards_url": () => (/* binding */ boards_url),
/* harmony export */   "user_urls": () => (/* binding */ user_urls)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);

const { URL } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
const user_urls = {
    register: `${URL}/users/signup`,
    login: `${URL}/login`,
    refresh: `${URL}/token/refresh`
};
const boards_url = {
    me: `${URL}/users/me`,
    activate: `${URL}/auth/activate`,
    resetPassword: `${URL}/auth/reset_password`,
    confirmNewPassword: `${URL}/auth/confirm_new_password`,
    profile: `${URL}/users/profile`,
    avatar: `${URL}/users/avatar`,
    all_users: `${URL}/users/all`,
    telegramKeyObject: `${URL}/telegram_connection`,
};
const PublicPlaceUrl = {
    getMyPlaces: `${URL}/places/my_places`,
    createPlace: `${URL}/places/create_place`,
    deletePlace: `${URL}/places/delete_place`,
};
const ReviewPlaceUrl = {
    getAllPlaceReviews: `${URL}/review/get_reviews`,
    getAvgScorePlace: `${URL}/review/get_avg_place_score`,
    sendReview: `${URL}/review/place_review`
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    URL: '/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2567:
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);






const TOKEN_KEY = 'auth_token';
const REFRESH_KEY = 'refresh_token';
const USER_KEY = 'auth_user';
class AuthService {
    constructor(http) {
        this.http = http;
        this.UserIsLogged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.UserInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
    }
    login(login, password) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.user_urls.login}`, { login: login, password: password });
    }
    register(user) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.user_urls.register}`, { ...user });
    }
    refreshToken(token) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.user_urls.refresh}`, { "refresh": token }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)({
            next: (token) => {
                this.SaveTokens(token);
            },
            error: (err) => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err);
            }
        }));
    }
    signOut() {
        this.UserIsLogged.next(false);
        this.UserInfo.next({});
        window.sessionStorage.clear();
    }
    SaveTokens(tokens) {
        window.sessionStorage.setItem(TOKEN_KEY, tokens.access);
        window.sessionStorage.setItem(REFRESH_KEY, tokens.refresh);
    }
    getAccessToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    getRefreshToken() {
        return window.sessionStorage.getItem(REFRESH_KEY);
    }
    saveUser(user) {
        this.UserInfo.next(user);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    updateUser(profile) {
        const user = this.getUser();
        if (user) {
            user.profile = profile;
            this.saveUser(user);
        }
    }
    updateUserAvatar(avatar) {
        const user = this.getUser();
        if (user) {
            user.profile.avatar = avatar;
            console.log(avatar);
            this.saveUser(user);
        }
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 803:
/*!*******************************************!*\
  !*** ./src/services/guards/user.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuard": () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2567);


class UserGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.authService.UserIsLogged.value;
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
UserGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3323:
/*!*******************************************************!*\
  !*** ./src/services/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "AuthServiceProvider": () => (/* binding */ AuthServiceProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);





const TOKEN_HEADER_TYPE = 'Authorization';
class AuthInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    }
    intercept(request, next) {
        let authReq = request;
        const token = this.authService.getAccessToken();
        if (token != null) {
            authReq = this.AddTokenHeader(request, token);
        }
        return next.handle(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            if ((error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse
                && !(authReq.url.includes('signup') || authReq.url.includes('login'))
                && error.status === 401)) {
                return this.handle401error(authReq, next);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
    AddTokenHeader(request, token) {
        return request.clone({ headers: request.headers.set(TOKEN_HEADER_TYPE, 'Bearer ' + token) });
    }
    handle401error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            const refresh = this.authService.getRefreshToken();
            if (refresh) {
                return this.authService.refreshToken(refresh).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)((tokens) => {
                    return next.handle(this.AddTokenHeader(request, tokens.access));
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => {
                    this.isRefreshing = false;
                    this.authService.signOut();
                    this.router.navigate(['login']).then();
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
                }));
            }
            (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
            });
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        });
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const AuthServiceProvider = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
];


/***/ }),

/***/ 7708:
/*!**********************************************!*\
  !*** ./src/services/public-place.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicPlaceService": () => (/* binding */ PublicPlaceService)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PublicPlaceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMyPlaces(params) {
        return this.httpClient.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.PublicPlaceUrl.getMyPlaces}`, { params: { ...params } });
    }
    createPlace(data) {
        return this.httpClient.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.PublicPlaceUrl.createPlace}`, { ...data });
    }
    deletePlace(id) {
        return this.httpClient.delete(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.PublicPlaceUrl.deletePlace}/${id}`, {});
    }
}
PublicPlaceService.ɵfac = function PublicPlaceService_Factory(t) { return new (t || PublicPlaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PublicPlaceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PublicPlaceService, factory: PublicPlaceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2178:
/*!*****************************************!*\
  !*** ./src/services/reviews.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsService": () => (/* binding */ ReviewsService)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ReviewsService {
    constructor(http) {
        this.http = http;
    }
    getReviews(id, params) {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.ReviewPlaceUrl.getAllPlaceReviews}/${id}`, { params: { ...params } });
    }
    getAvgScoreReviews(id, params) {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.ReviewPlaceUrl.getAvgScorePlace}/${id}`, { params: { ...params } });
    }
    postReview(id, value) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.ReviewPlaceUrl.sendReview}/${id}`, { ...value });
    }
}
ReviewsService.ɵfac = function ReviewsService_Factory(t) { return new (t || ReviewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ReviewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReviewsService, factory: ReviewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2996:
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _constants_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/url.constants */ 263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.all_users}`);
    }
    getMeUser() {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.me}`);
    }
    getUserById(id) {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.all_users}/id`);
    }
    updateUserProfileByID(profileInfo) {
        return this.http.patch(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.profile}`, { ...profileInfo }, {});
    }
    addAvatarToUser(formData) {
        return this.http.patch(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.avatar}`, formData);
    }
    getUserTelegramKeyObject() {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.telegramKeyObject}`);
    }
    activateUser(token) {
        return this.http.get(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.activate}/${token}`);
    }
    recoverPassword(email) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.resetPassword}`, { ...email });
    }
    sendNewPassword(token, password) {
        return this.http.post(`${_constants_url_constants__WEBPACK_IMPORTED_MODULE_0__.boards_url.confirmNewPassword}/${token}`, { password: password });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map