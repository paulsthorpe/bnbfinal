System.register(['@angular/core', './cart.component', './order.service', '@angular/common', '@angular/router-deprecated', './http.service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, cart_component_1, order_service_1, common_1, router_deprecated_1, http_service_1, http_1;
    var ReviewComponent;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ReviewComponent = (function () {
                function ReviewComponent(_httpService, orderService, router) {
                    this._httpService = _httpService;
                    this.orderService = orderService;
                    this.router = router;
                    this.form = new common_1.ControlGroup({
                        name: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
                            this.cannotContainSpecialChars])),
                        phone: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
                            this.cannotContainSpace,
                            this.cannotContainSpecialChars,
                            this.phoneLength])),
                    });
                }
                ReviewComponent.prototype.sendOrder = function () {
                    this.custInfo = {
                        name: this.form.value.name,
                        phone: this.form.value.phone
                    };
                    this.orderService.addToOrder(this.form.value);
                    this._httpService.postJSON(this.orderService.order)
                        .subscribe(function (data) { return console.log(data); });
                    this.orderService.storeCust(this.custInfo);
                    this.orderService.orderComplete = true;
                    this.router.navigate(['Confirm']);
                };
                ReviewComponent.prototype.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0) {
                        return { cannotContainChars: true };
                    }
                    else {
                        return null;
                    }
                };
                ReviewComponent.prototype.cannotContainSpecialChars = function (control) {
                    if (control.value.indexOf('/') >= 0) {
                        return { cannotContainChars: true };
                    }
                    else if (control.value.indexOf('-') >= 0) {
                        return { cannotContainChars: true };
                    }
                    else if (control.value.indexOf('(') >= 0) {
                        return { cannotContainChars: true };
                    }
                    else if (control.value.indexOf(')') >= 0) {
                        return { cannotContainChars: true };
                    }
                    else {
                        return null;
                    }
                };
                ReviewComponent.prototype.phoneLength = function (control) {
                    if (control.value.length >= 11) {
                        return { phoneLength: true };
                    }
                    else if (control.value.length <= 9) {
                        return { phoneLength: true };
                    }
                    else {
                        return null;
                    }
                };
                ReviewComponent = __decorate([
                    core_1.Component({
                        selector: 'review',
                        templateUrl: './components/review.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, cart_component_1.CartComponent],
                        providers: [http_service_1.RequestService, http_1.HTTP_PROVIDERS],
                        inputs: ['thePhone', 'theName', 'form']
                    }), 
                    __metadata('design:paramtypes', [http_service_1.RequestService, order_service_1.OrderService, router_deprecated_1.Router])
                ], ReviewComponent);
                return ReviewComponent;
            }());
            exports_1("ReviewComponent", ReviewComponent);
        }
    }
});
//# sourceMappingURL=review.component.js.map