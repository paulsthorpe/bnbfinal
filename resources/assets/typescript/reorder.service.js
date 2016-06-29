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
                /**
                 *
                 * @param _httpService
                 * @param orderService
                 */
                function ReorderService(_httpService, orderService) {
                    this._httpService = _httpService;
                    this.orderService = orderService;
                    this.pastOrders = [];
                    this.pastOrdersClient = [];
                }
                /**
                 * This method will make to calls to the api based on user input, one to get
                 * user relevant data, the other to get api relevant data(from past orders)
                 * maybe this should be one call and a bigger array, for now it stays like this
                 * @param phone
                 */
                ReorderService.prototype.getOrders = function (phone) {
                    var _this = this;
                    this._httpService.getOrders(phone)
                        .subscribe(function (data) { return _this.orgData(data); });
                    this._httpService.getOrdersClient(phone)
                        .subscribe(function (data) { return _this.orgDataClient(data); });
                };
                /**
                 * Retrieve the index from user click event and fire applyOrder()
                 * @param orderIndex
                 */
                ReorderService.prototype.retrieveOrderState = function (orderIndex) {
                    var _this = this;
                    this.totalItems = this.pastOrders[orderIndex].items.length;
                    var _loop_1 = function() {
                        var index = itemIndex;
                        this_1._httpService.getSpecificAddOns(this_1.pastOrders[orderIndex].items[itemIndex].additionals)
                            .subscribe(function (data) { return _this.applyOrder(data, orderIndex, index); });
                    };
                    var this_1 = this;
                    for (var itemIndex = 0; itemIndex < this.totalItems; itemIndex++) {
                        _loop_1();
                    }
                };
                /**
                 * This method retrieves which order a user clicks on from retrieveOrderState, retrieves the array index,
                 * which is supplied to the view by the array that feeds it(pastOrdersClient) and then in turn builds the standard
                 * application array that displays order data to the user.
                 *
                 * Once this process is complete it does the same process, but for the array that contains api item interfaces
                 * which will be sent to the api for processing
                 * @param data
                 * @param orderIndex
                 * @param itemIndex
                 */
                ReorderService.prototype.applyOrder = function (data, orderIndex, itemIndex) {
                    //Initialize length to serve as the index for the iteration below
                    var length = data.length;
                    //Set these properties to empty array to ensure they are empty before using them.
                    //You never know....
                    this.orderService.apiAdditionals = [];
                    this.orderService.cartAdditionals = [];
                    this.orderService.cartPrices = [];
                    //store the cart total
                    this.orderService.cartPrices.push(this.pastOrdersClient[orderIndex].items[itemIndex].price);
                    for (var i = 0; i < length; i++) {
                        //foreach topping in the api and client past order arrays, push to our default arrays
                        this.orderService.apiAdditionals.push(data[i].id);
                        this.orderService.cartAdditionals.push(data[i].name);
                        //store individual item prices in client order
                        this.orderService.cartPrices.push(data[i].price);
                        //store individual prices in api order
                        this.orderService.total = this.orderService.cartPrices.reduce(function (total, num) {
                            return total + num;
                        });
                    }
                    //create order item interface to store in our api order array
                    this.apiItem = {
                        item_id: this.pastOrders[orderIndex].items[itemIndex].item_id,
                        additionals: this.orderService.apiAdditionals
                    };
                    //create order item interface in our client order array
                    this.cartItem = {
                        name: this.pastOrdersClient[orderIndex].items[itemIndex].name,
                        additionals: this.orderService.cartAdditionals,
                        prices: this.orderService.cartPrices,
                        total: this.orderService.total,
                    };
                    //push the interfaces o its respective destination, client or api
                    this.orderService.addToOrder(this.apiItem);
                    this.orderService.addToCart(this.cartItem);
                    this.orderService.itemPrices.push(this.orderService.total);
                };
                /**
                 * organize previous order data recieved from api
                 * @param data
                 */
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
                /**
                 * organize previous order data recieved from api
                 * @param data
                 */
                ReorderService.prototype.orgDataClient = function (data) {
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