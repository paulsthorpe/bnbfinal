System.register(['@angular/core', './cart.component', './order.service', '@angular/router-deprecated', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, cart_component_1, order_service_1, router_deprecated_1, http_1;
    var ConfirmComponent;
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
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent(orderService) {
                    this.orderService = orderService;
                    this.cust = this.orderService.customer;
                }
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'confirm',
                        templateUrl: './components/confirm.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, cart_component_1.CartComponent],
                        providers: [http_1.HTTP_PROVIDERS],
                        inputs: ['cust']
                    }), 
                    __metadata('design:paramtypes', [order_service_1.OrderService])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});
//# sourceMappingURL=confirm.component.js.map