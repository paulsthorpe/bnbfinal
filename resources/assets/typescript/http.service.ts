import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class RequestService {

  constructor(private _http: Http){

  }


  getMenuItem(id) {
    return this._http.get("http:///getItems/"+id)
      .map(res => res.json());
  }

  getMenuItems() {
    return this._http.get("http:///getItems")
      .map(res => res.json());
  }


  getAddOns() {
    return this._http.get("http:///getAddOns")
      .map(res => res.json());
  }

  getToken() {
  let token = document.querySelector('meta[property="csrf-token"]')['content'];
  return token;
  }

  postJSON(item) {

    let json = JSON.stringify(item);

    let headers = new Headers();

    headers.append('Content-type', 'application/json');

    headers.append('X-CSRF-TOKEN', this.getToken());

    return this._http.post('http:///recieveAPI', json , {
      headers: headers
    }).map(res => res.json());

  }

  getOrders(item) {

    let json = JSON.stringify(item);

    let headers = new Headers();

    headers.append('Content-type', 'application/json');

    headers.append('X-CSRF-TOKEN', this.getToken());

    return this._http.post('http:///getOrders', json , {
      headers: headers
    }).map(res => res.json());

  }

  getOrdersClient(item) {

    let json = JSON.stringify(item);

    let headers = new Headers();

    headers.append('Content-type', 'application/json');

    headers.append('X-CSRF-TOKEN', this.getToken());

    return this._http.post('http:///getOrdersClient', json , {
      headers: headers
    }).map(res => res.json());

  }

  getSpecificAddOns(item) {

    let json = JSON.stringify(item);

    let headers = new Headers();

    headers.append('Content-type', 'application/json');

    headers.append('X-CSRF-TOKEN', this.getToken());

    return this._http.post('http:///getSpecificAddOns', json , {
      headers: headers
    }).map(res => res.json());

  }




}
