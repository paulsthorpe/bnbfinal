System.register(['rxjs/add/operator/map', '@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var OrderService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OrderService = (function () {
                function OrderService() {
                    //array to hold json objects to send to api to persist data to database
                    this.order = [];
                    //array to hold similar json objects containing user relevant information to display in angular cart
                    this.cart = [];
                    this.itemPrices = [];
                    this.contactInfo = [];
                    this.orderComplete = false;
                }
                OrderService.prototype.addToOrder = function (item) {
                    this.order.push(item);
                };
                OrderService.prototype.addToCart = function (item) {
                    this.cart.push(item);
                };
                OrderService.prototype.formatPrice = function (input) {
                    return (input / 100).toFixed(2);
                };
                OrderService.prototype.calcTax = function (price) {
                    return price * .0675;
                };
                OrderService.prototype.storeCust = function (object) {
                    this.customer = {
                        name: object.name,
                        phone: object.phone,
                    };
                };
                OrderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], OrderService);
                return OrderService;
            }());
            exports_1("OrderService", OrderService);
        }
    }
});
//# sourceMappingURL=order.service.js.map