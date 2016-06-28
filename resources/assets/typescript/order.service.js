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
                    this.addOns = [];
                    //store relevant config item data for display in angular cart
                    this.cartAdditionals = [];
                    this.cartPrices = [];
                    //store relevant config item data for api
                    this.apiAdditionals = [];
                }
                OrderService.prototype.addToOrder = function (item) {
                    this.order.push(item);
                    this.apiAdditionals = [];
                };
                OrderService.prototype.addToCart = function (item) {
                    this.cart.push(item);
                    this.cartPrices = [];
                    this.cartAdditionals = [];
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
                ////////////CONFIGITEM METHODs
                OrderService.prototype.add = function (idValue, nameValue, prices, event) {
                    //if checked store addOn ids in array to send to api
                    if (event.target.checked) {
                        this.apiAdditionals.push(idValue);
                    }
                    else if (!event.target.checked) {
                        var index = this.apiAdditionals.indexOf(idValue);
                        this.apiAdditionals.splice(index, 1);
                    }
                    //log for testing
                    // console.log(this.apiAdditionals);
                    //store addOn names to array to use for readable cart values
                    if (event.target.checked) {
                        this.cartAdditionals.push(nameValue);
                        this.cartPrices.push(prices);
                    }
                    else if (!event.target.checked) {
                        var index = this.cartAdditionals.indexOf(nameValue);
                        this.cartAdditionals.splice(index, 1);
                        this.cartPrices.splice(index, 1);
                    }
                    console.log(this.cartAdditionals);
                    console.log(this.cartPrices);
                };
                OrderService.prototype.create = function (id, price, item) {
                    this.cartPrices.push(price);
                    this.total = this.cartPrices.reduce(function (total, num) { return total + num; });
                    // !!!!!!!!!!!!!!!!!!!FOR API!!!!!!!!!!!!!!!!!!!!!!!//
                    //set interface with selected menuitem and addons
                    this.apiItem = {
                        item_id: item.id,
                        additionals: this.apiAdditionals
                    };
                    //push interface object into API array
                    this.addToOrder(this.apiItem);
                    console.log(this.order);
                    // !!!!!!!!!!!!!!!!!!!FOR CART!!!!!!!!!!!!!!!!!!!!!!!//
                    //set interface with selected menuitem and addons
                    this.cartItem = {
                        name: item.name,
                        additionals: this.cartAdditionals,
                        prices: this.cartPrices,
                        total: this.total,
                    };
                    //push interface object into API array
                    this.addToCart(this.cartItem);
                    this.itemPrices.push(this.total);
                    console.log(this.cart);
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