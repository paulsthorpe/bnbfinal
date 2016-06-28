System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './order.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, order_service_1;
    var CartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            }],
        execute: function() {
            CartComponent = (function () {
                function CartComponent(orderService, router) {
                    this.orderService = orderService;
                    this.router = router;
                }
                CartComponent.prototype.ngOnInit = function () {
                    this.cart = this.orderService.cart;
                    if (this.cart.length > 0) {
                        //get all item prices and reduce for total
                        this.totalPrice = this.orderService.itemPrices.reduce(function (total, num) {
                            return total + num;
                        });
                        this.tax = this.orderService.calcTax(this.totalPrice);
                        this.subtotal = this.tax + this.totalPrice;
                    }
                };
                CartComponent.prototype.deleteItem = function (item) {
                    //delete objects related to user input
                    this.orderService.cart.splice(item, 1);
                    this.orderService.order.splice(item, 1);
                    this.orderService.itemPrices.splice(item, 1);
                    this.totalPrice = this.orderService.itemPrices.reduce(function (total, num) {
                        return total + num;
                    });
                    this.tax = this.orderService.calcTax(this.totalPrice);
                    this.subtotal = this.tax + this.totalPrice;
                };
                CartComponent.prototype.addItem = function (item) {
                    //grab and store objects concerning user input
                    this.cartItem = this.orderService.cart[item];
                    this.orderItem = this.orderService.order[item];
                    //create duplicate instances of objects and add to api/cart arrays
                    this.orderService.cart.push(this.cartItem);
                    this.orderService.order.push(this.orderItem);
                    this.orderService.itemPrices.push(this.cartItem.total);
                    this.totalPrice = this.orderService.itemPrices.reduce(function (total, num) {
                        return total + num;
                    });
                    this.tax = this.orderService.calcTax(this.totalPrice);
                    this.subtotal = this.tax + this.totalPrice;
                };
                CartComponent.prototype.isNumber = function (val) {
                    return typeof val === 'number';
                };
                CartComponent = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        templateUrl: './components/cart.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS],
                        inputs: ['cart', 'totalPrice', 'tax', 'subtotal']
                    }), 
                    __metadata('design:paramtypes', [order_service_1.OrderService, router_deprecated_1.Router])
                ], CartComponent);
                return CartComponent;
            }());
            exports_1("CartComponent", CartComponent);
        }
    }
});

//# sourceMappingURL=cart.component.js.map
