System.register(['@angular/http', 'rxjs/add/operator/map', '@angular/core'], function(exports_1, context_1) {
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
    var http_1, core_1, http_2;
    var RequestService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RequestService = (function () {
                function RequestService(_http) {
                    this._http = _http;
                }
                RequestService.prototype.getMenuItem = function (id) {
                    return this._http.get("http://paul-webdev.com/getItems/" + id)
                        .map(function (res) { return res.json(); });
                };
                RequestService.prototype.getMenuItems = function () {
                    return this._http.get("http://paul-webdev.com/getItems")
                        .map(function (res) { return res.json(); });
                };
                RequestService.prototype.getAddOns = function () {
                    return this._http.get("http://paul-webdev.com/getAddOns")
                        .map(function (res) { return res.json(); });
                };
                RequestService.prototype.getToken = function () {
                    var token = document.querySelector('meta[property="csrf-token"]')['content'];
                    return token;
                };
                RequestService.prototype.postJSON = function (item) {
                    var json = JSON.stringify(item);
                    var headers = new http_2.Headers();
                    headers.append('Content-type', 'application/json');
                    headers.append('X-CSRF-TOKEN', this.getToken());
                    return this._http.post('http://paul-webdev.com/recieveAPI', json, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                RequestService.prototype.getOrders = function (item) {
                    var json = JSON.stringify(item);
                    var headers = new http_2.Headers();
                    headers.append('Content-type', 'application/json');
                    headers.append('X-CSRF-TOKEN', this.getToken());
                    return this._http.post('http://paul-webdev.com/getOrders', json, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                RequestService.prototype.getOrdersClient = function (item) {
                    var json = JSON.stringify(item);
                    var headers = new http_2.Headers();
                    headers.append('Content-type', 'application/json');
                    headers.append('X-CSRF-TOKEN', this.getToken());
                    return this._http.post('http://paul-webdev.com/getOrdersClient', json, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                RequestService.prototype.getSpecificAddOns = function (item) {
                    var json = JSON.stringify(item);
                    var headers = new http_2.Headers();
                    headers.append('Content-type', 'application/json');
                    headers.append('X-CSRF-TOKEN', this.getToken());
                    return this._http.post('http://paul-webdev.com/getSpecificAddOns', json, {
                        headers: headers
                    }).map(function (res) { return res.json(); });
                };
                RequestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RequestService);
                return RequestService;
            }());
            exports_1("RequestService", RequestService);
        }
    }
});

//# sourceMappingURL=http.service.js.map
