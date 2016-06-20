System.register(['@angular/core', './cart.component', './order.service', './reorder.service', '@angular/router-deprecated', './http.service', '@angular/common', './validators.service'], function(exports_1, context_1) {
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
    var core_1, cart_component_1, order_service_1, reorder_service_1, router_deprecated_1, http_service_1, common_1, validators_service_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_component_1_1) {
                cart_component_1 = cart_component_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            },
            function (reorder_service_1_1) {
                reorder_service_1 = reorder_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_service_1_1) {
                validators_service_1 = validators_service_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(_httpService, orderService, _validators, router, reorderService) {
                    this._httpService = _httpService;
                    this.orderService = orderService;
                    this._validators = _validators;
                    this.router = router;
                    this.reorderService = reorderService;
                    this.form = new common_1.ControlGroup({
                        phoneLookup: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
                            this._validators.cannotContainSpace,
                            this._validators.cannotContainSpecialChars,
                            this._validators.phoneLength])),
                    });
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                };
                WelcomeComponent.prototype.getOrders = function () {
                    this.phone = {
                        phone: this.form.value.phoneLookup
                    };
                    this.reorderService.getOrders(this.phone);
                };
                WelcomeComponent.prototype.retrieveOrderState = function (orderIndex) {
                    this.reorderService.retrieveOrderState(orderIndex);
                    this.router.navigate(['Review']);
                };
                WelcomeComponent.prototype.applyOrder = function (data, orderIndex, itemIndex) {
                    this.reorderService.applyOrder(data, orderIndex, itemIndex);
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        templateUrl: './components/welcome.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, cart_component_1.CartComponent],
                        providers: [validators_service_1.ValidatorService, reorder_service_1.ReorderService],
                        inputs: ['orderService.order', 'reorderService.pastOrdersClient']
                    }), 
                    __metadata('design:paramtypes', [http_service_1.RequestService, order_service_1.OrderService, validators_service_1.ValidatorService, router_deprecated_1.Router, reorder_service_1.ReorderService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcomeComponent.component.js.map