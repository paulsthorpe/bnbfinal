import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';


@Injectable()
export class RequestService {

    /**
     * inject angular2 http service
     * @param _http
     */
    constructor(private _http:Http) {

    }


    /**
     * post to api to get specific menu item info
     * @param id
     * @returns {Observable<R>}
     */
    getMenuItem(id) {
        return this._http.get("http://paul-webdev.com/getItems/" + id)
            .map(res => res.json());
    }

    /**
     * post to api to get menu item(s)
     * @returns {Observable<R>}
     */
    getMenuItems() {
        return this._http.get("http://paul-webdev.com/getItems")
            .map(res => res.json());
    }


    /**
     * post to api to get toppings
     * @returns {Observable<R>}
     */
    getAddOns() {

        return this._http.get("http://paul-webdev.com/getAddOns")

            .map(res => res.json());

    }

    /**
     * get csrf token from blade template that houses the angular app
     * @returns {any}
     */
    getToken() {

        let token = document.querySelector('meta[property="csrf-token"]')['content'];

        return token;

    }

    /**
     * post order to api
     * @param item
     * @returns {Observable<R>}
     */
    postJSON(item) {

        let json = JSON.stringify(item);

        let headers = new Headers();

        headers.append('Content-type', 'application/json');

        headers.append('X-CSRF-TOKEN', this.getToken());

        return this._http.post('http://paul-webdev.com/recieveAPI', json, {
            headers: headers
        }).map(res => res.json());

    }

    /**
     * post response to api and wait for return, which in this case will
     * be a users previous orders. get api relevant data
     * @param item
     * @returns {Observable<R>}
     */
    getOrders(item) {

        let json = JSON.stringify(item);

        let headers = new Headers();

        headers.append('Content-type', 'application/json');

        headers.append('X-CSRF-TOKEN', this.getToken());

        return this._http.post('http://paul-webdev.com/getOrders', json, {
            headers: headers
        }).map(res => res.json());

    }

    /**
     * post response to api and wait for return, get user previous orders
     * data relevant to client side cart
     * @param item
     * @returns {Observable<R>}
     */
    getOrdersClient(item) {

        let json = JSON.stringify(item);

        let headers = new Headers();

        headers.append('Content-type', 'application/json');

        headers.append('X-CSRF-TOKEN', this.getToken());

        return this._http.post('http://paul-webdev.com/getOrdersClient', json, {
            headers: headers
        }).map(res => res.json());

    }

    /**
     * get addons from previous orders
     * @param item
     * @returns {Observable<R>}
     */
    getSpecificAddOns(item) {

        let json = JSON.stringify(item);

        let headers = new Headers();

        headers.append('Content-type', 'application/json');

        headers.append('X-CSRF-TOKEN', this.getToken());

        return this._http.post('http://paul-webdev.com/getSpecificAddOns', json, {
            headers: headers
        }).map(res => res.json());

    }


}
