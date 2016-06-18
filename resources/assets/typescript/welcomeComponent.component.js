System.register(['@angular/core', './cart.component', './order.service', '@angular/router-deprecated', './http.service', '@angular/common', './validators.service'], function(exports_1, context_1) {
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
    var core_1, cart_component_1, order_service_1, router_deprecated_1, http_service_1, common_1, validators_service_1;
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
                function WelcomeComponent(_httpService, orderService, _validators, router) {
                    this._httpService = _httpService;
                    this.orderService = orderService;
                    this._validators = _validators;
                    this.router = router;
                    this.pastOrders = [];
                    this.pastOrdersClient = [];
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
                    var _this = this;
                    this.phone = {
                        phone: this.form.value.phoneLookup
                    };
                    this._httpService.getOrders(this.phone)
                        .subscribe(function (data) { return _this.orgData(data); });
                    this._httpService.getOrdersClient(this.phone)
                        .subscribe(function (data) { return _this.orgDataClient(data); });
                };
                WelcomeComponent.prototype.orgData = function (data) {
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
                WelcomeComponent.prototype.orgDataClient = function (data) {
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
                WelcomeComponent.prototype.retrieveOrderState = function (orderIndex) {
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
                    this.router.navigate(['Review']);
                };
                WelcomeComponent.prototype.applyOrder = function (data, orderIndex, itemIndex) {
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
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        templateUrl: './components/welcome.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, cart_component_1.CartComponent],
                        providers: [validators_service_1.ValidatorService],
                        inputs: ['orderService.order', 'pastOrdersClient']
                    }), 
                    __metadata('design:paramtypes', [http_service_1.RequestService, order_service_1.OrderService, validators_service_1.ValidatorService, router_deprecated_1.Router])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//
// orgData(data){
//   let length = data.length;
//   let allOrders = [];
//
//   for(var i = 0; i < length; i++ ){
//
//     this.pastOrder = data[i].order_id;
//
//     let items = data[i].items.length;
//     let oItems = [];
//     for(var a = 0; a < items; a++ ){
//
//       let tops = data[i].items[a].additionals.length;
//       let toppings = [];
//       for(var b = 0; b < tops; b++ ){
//         toppings.push(data[i].items[a].additionals[b]);
//       }
//
//       this.pItem = {
//         item_id : data[i].items[a].item_id,
//         additionals: toppings
//       }
//
//       oItems.push(this.pItem);
//
//     }
//     this.pastOrder = {
//       order_id: data[i].order_id,
//       orderItem: oItems
//     }
//     this.pastOrders.push(this.pastOrder);
//   }
//     // this.pastOrders = allOrders;
//
//
//     console.log(this.pastOrders);
// }
//
//
//
// }
//
// export interface Phone {
// phone: string;
// }
//
// export interface allPastOrders {
// orders: pastOrder[]
// }
//
// export interface pastOrder {
// order_id:number,
// orderItem: pOrderItem[]
// }
//
// export interface pOrderItem {
// item_id: number,
// additionals: number[]
// }
//# sourceMappingURL=welcomeComponent.component.js.map