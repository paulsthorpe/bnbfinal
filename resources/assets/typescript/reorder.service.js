System.register(['rxjs/add/operator/map', '@angular/core', './order.service', './http.service'], function(exports_1, context_1) {
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
    var core_1, order_service_1, http_service_1;
    var ReorderService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            ReorderService = (function () {
                function ReorderService(_httpService, orderService) {
                    this._httpService = _httpService;
                    this.orderService = orderService;
                    this.pastOrders = [];
                    this.pastOrdersClient = [];
                }
                ReorderService.prototype.getOrders = function (phone) {
                    var _this = this;
                    this._httpService.getOrders(phone)
                        .subscribe(function (data) { return _this.orgData(data); });
                    this._httpService.getOrdersClient(phone)
                        .subscribe(function (data) { return _this.orgDataClient(data); });
                };
                ReorderService.prototype.orgData = function (data) {
                    var length = data.length;
                    for (var i = 0; i < length; i++) {
                        var pastOrder = [];
                        var items = data[i].items.length;
                        var col = [];
                        for (var a = 0; a < items; a++) {
                            var oItem = [];
                            var tops = data[i].items[a].additionals.length;
                            var toppings = [];
                            for (var b = 0; b < tops; b++) {
                                toppings.push(data[i].items[a].additionals[b]);
                            }
                            oItem['item_id'] = data[i].items[a].item_id;
                            oItem['additionals'] = toppings;
                            col.push(oItem);
                        }
                        pastOrder['order_id'] = data[i].order_id;
                        pastOrder['items'] = col;
                        this.pastOrders.push(pastOrder);
                    }
                };
                ReorderService.prototype.orgDataClient = function (data) {
                    console.log(data);
                    var length = data.length;
                    for (var i = 0; i < length; i++) {
                        var pastOrder = [];
                        var items = data[i].items.length;
                        var col = [];
                        for (var a = 0; a < items; a++) {
                            var oItem = [];
                            var tops = data[i].items[a].additionals.length;
                            var toppings = [];
                            for (var b = 0; b < tops; b++) {
                                toppings.push(data[i].items[a].additionals[b]);
                            }
                            oItem['name'] = data[i].items[a].name;
                            oItem['price'] = data[i].items[a].price;
                            oItem['additionals'] = toppings;
                            col.push(oItem);
                        }
                        pastOrder['order_id'] = data[i].order_id;
                        pastOrder['items'] = col;
                        this.pastOrdersClient.push(pastOrder);
                    }
                };
                ReorderService.prototype.retrieveOrderState = function (orderIndex) {
                    var _this = this;
                    var total = this.pastOrders[orderIndex].items.length;
                    var _loop_1 = function() {
                        var index = itemIndex;
                        this_1._httpService.getSpecificAddOns(this_1.pastOrders[orderIndex].items[itemIndex].additionals)
                            .subscribe(function (data) { return _this.applyOrder(data, orderIndex, index); });
                    };
                    var this_1 = this;
                    for (var itemIndex = 0; itemIndex < total; itemIndex++) {
                        _loop_1();
                    }
                    //clear past orders to reduce clutter
                    this.pastOrders = [];
                    this.pastOrdersClient = [];
                };
                ReorderService.prototype.applyOrder = function (data, orderIndex, itemIndex) {
                    var length = data.length;
                    this.orderService.apiAdditionals = [];
                    this.orderService.cartAdditionals = [];
                    this.orderService.cartPrices = [];
                    this.orderService.cartPrices.push(this.pastOrdersClient[orderIndex].items[itemIndex].price);
                    for (var i = 0; i < length; i++) {
                        this.orderService.apiAdditionals.push(data[i].id);
                        this.orderService.cartAdditionals.push(data[i].name);
                        this.orderService.cartPrices.push(data[i].price);
                        this.orderService.total = this.orderService.cartPrices.reduce(function (total, num) { return total + num; });
                    }
                    this.apiItem = {
                        item_id: this.pastOrders[orderIndex].items[itemIndex].item_id,
                        additionals: this.orderService.apiAdditionals
                    };
                    this.cartItem = {
                        name: this.pastOrdersClient[orderIndex].items[itemIndex].name,
                        additionals: this.orderService.cartAdditionals,
                        prices: this.orderService.cartPrices,
                        total: this.orderService.total,
                    };
                    this.orderService.addToOrder(this.apiItem);
                    this.orderService.addToCart(this.cartItem);
                    this.orderService.itemPrices.push(this.orderService.total);
                };
                ReorderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.RequestService, order_service_1.OrderService])
                ], ReorderService);
                return ReorderService;
            }());
            exports_1("ReorderService", ReorderService);
        }
    }
});
//# sourceMappingURL=reorder.service.js.map