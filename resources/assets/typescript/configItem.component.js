System.register(['@angular/core', './cart.component', './http.service', './order.service', '@angular/http', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, cart_component_1, http_service_1, order_service_1, http_1, router_deprecated_1;
    var ConfigItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_component_1_1) {
                cart_component_1 = cart_component_1_1;
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
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            ConfigItemComponent = (function () {
                function ConfigItemComponent(_httpService, _routeParams, orderService) {
                    this._httpService = _httpService;
                    this._routeParams = _routeParams;
                    this.orderService = orderService;
                    //store relevant config item data for display in angular cart
                    this.cartAdditionals = [];
                    this.cartPrices = [];
                    //store relevant config item data for api
                    this.apiAdditionals = [];
                }
                ConfigItemComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //get item id
                    this.id = this._routeParams.get("item");
                    //send item id to api to retieve selected menu item, store in item
                    this._httpService.getMenuItem(this.id)
                        .subscribe(function (data) { return _this.item = data; });
                    this._httpService.getAddOns()
                        .subscribe(function (data) { return _this.addOns = data; });
                    // console.log(this.addOns);
                    this.qty = 1;
                };
                ConfigItemComponent.prototype.add = function (idValue, nameValue, prices, event) {
                    this.orderService.add(idValue, nameValue, prices, event);
                };
                ConfigItemComponent.prototype.create = function (id, price) {
                    this.orderService.create(id, price, this.item);
                };
                ConfigItemComponent = __decorate([
                    core_1.Component({
                        selector: 'item',
                        templateUrl: './components/itemConfig.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, cart_component_1.CartComponent],
                        providers: [http_service_1.RequestService, http_1.HTTP_PROVIDERS],
                        inputs: ['item', 'addOns', 'itemPrice']
                    }), 
                    __metadata('design:paramtypes', [http_service_1.RequestService, router_deprecated_1.RouteParams, order_service_1.OrderService])
                ], ConfigItemComponent);
                return ConfigItemComponent;
            }());
            exports_1("ConfigItemComponent", ConfigItemComponent);
        }
    }
});
//# sourceMappingURL=configItem.component.js.map