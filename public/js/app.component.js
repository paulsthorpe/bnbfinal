System.register(['@angular/core', '@angular/router-deprecated', './http.service', './order.service', '@angular/http', './configItem.component', './itemOptions.component', './review.component', './welcomeComponent.component', './confirm.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, http_service_1, order_service_1, http_1, configItem_component_1, itemOptions_component_1, review_component_1, welcomeComponent_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (configItem_component_1_1) {
                configItem_component_1 = configItem_component_1_1;
            },
            function (itemOptions_component_1_1) {
                itemOptions_component_1 = itemOptions_component_1_1;
            },
            function (review_component_1_1) {
                review_component_1 = review_component_1_1;
            },
            function (welcomeComponent_component_1_1) {
                welcomeComponent_component_1 = welcomeComponent_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/order', name: 'Welcome', component: welcomeComponent_component_1.WelcomeComponent },
                        { path: '/order/options/:type', name: 'Options', component: itemOptions_component_1.OptionsComponent },
                        { path: '/order/config/:item', name: 'Config', component: configItem_component_1.ConfigItemComponent },
                        { path: '/order/review', name: 'Review', component: review_component_1.ReviewComponent },
                        { path: '/order/confirmation', name: 'Confirm', component: confirm_component_1.ConfirmComponent },
                        { path: '/*other', name: 'Welcome', component: welcomeComponent_component_1.WelcomeComponent },
                        { path: '/order/options/*other', name: 'Welcome', component: welcomeComponent_component_1.WelcomeComponent },
                        { path: '/order/config/*other', name: 'Welcome', component: welcomeComponent_component_1.WelcomeComponent },
                        { path: '/order/*other', name: 'Welcome', component: welcomeComponent_component_1.WelcomeComponent },
                    ]),
                    core_1.Component({
                        selector: 'order-app',
                        templateUrl: './components/master.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, http_service_1.RequestService, http_1.HTTP_PROVIDERS, order_service_1.OrderService],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.RequestService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
