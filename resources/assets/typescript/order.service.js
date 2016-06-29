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
                /**
                 * push api item interface into api array, clear toppings array for next use
                 * @param item
                 */
                OrderService.prototype.addToOrder = function (item) {
                    this.order.push(item);
                    //clear previous array to avoid duplication
                    this.apiAdditionals = [];
                };
                /**
                 * push client item interface into client array, clear item price and toppings array for next use
                 * @param item
                 */
                OrderService.prototype.addToCart = function (item) {
                    this.cart.push(item);
                    //clear previous arrays to avoid duplication
                    this.cartPrices = [];
                    this.cartAdditionals = [];
                };
                /**
                 * convert cents to dollar/cent format
                 * @param input
                 * @returns {string}
                 */
                OrderService.prototype.formatPrice = function (input) {
                    return (input / 100).toFixed(2);
                };
                /**
                 * calculate tax for cart total
                 * @param price
                 * @returns {number}
                 */
                OrderService.prototype.calcTax = function (price) {
                    return price * .0675;
                };
                /**
                 * store customer details, not in use atm
                 * @param object
                 */
                OrderService.prototype.storeCust = function (object) {
                    this.customer = {
                        name: object.name,
                        phone: object.phone,
                    };
                };
                /**
                 * on select box click event add or delete toppings from toppings array
                 * @param idValue
                 * @param nameValue
                 * @param prices
                 * @param event
                 */
                OrderService.prototype.add = function (idValue, nameValue, prices, event) {
                    //if checked store addOn ids in array to send to api
                    if (event.target.checked) {
                        this.apiAdditionals.push(idValue);
                    }
                    else if (!event.target.checked) {
                        var index = this.apiAdditionals.indexOf(idValue);
                        this.apiAdditionals.splice(index, 1);
                    }
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
                };
                /**
                 * User adds item after config, creates item interfaces and pushes them to their
                 * designated array, cart or api
                 * @param id
                 * @param price
                 * @param item
                 */
                OrderService.prototype.create = function (id, price, item) {
                    //add item price
                    this.cartPrices.push(price);
                    //reduce topping array values to a total for item price
                    this.total = this.cartPrices.reduce(function (total, num) {
                        return total + num;
                    });
                    // !!!!!!!!!!!!!!!!!!!FOR API!!!!!!!!!!!!!!!!!!!!!!!//
                    //set interface with selected menuitem and addons
                    this.apiItem = {
                        item_id: item.id,
                        additionals: this.apiAdditionals
                    };
                    //push interface object into API array
                    this.addToOrder(this.apiItem);
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