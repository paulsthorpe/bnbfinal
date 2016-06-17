import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {RequestService} from './http.service';
import {OrderService} from './order.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from '@angular/router-deprecated';



@Component({
    selector: 'item',
    templateUrl: './components/itemConfig.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [RequestService, HTTP_PROVIDERS],
    inputs: [ 'item', 'addOns', 'itemPrice']
})



export class ConfigItemComponent implements OnInit{
  //to store uri param for item id
  id: any;
  //store item data per uri param
  item: Item;
  itemPrice: number;
  //store all addOns from api source
  addOns: any;

  qty: number;
  qtyMessage: string;

  //store relevant config item data for display in angular cart
  cartAdditionals = [];
  cartPrices = [];
  total: number;
  cartItem: ConfigCART;

  //store relevant config item data for api
  apiAdditionals = [];
  apiItem: ConfigAPI;



  constructor(private _httpService: RequestService, private _routeParams: RouteParams, public orderService : OrderService){
  }

  ngOnInit() {
    //get item id
    this.id = this._routeParams.get("item");

    //send item id to api to retieve selected menu item, store in item
    this._httpService.getMenuItem(this.id)
    .subscribe(data => this.item = data)

    this._httpService.getAddOns()
    .subscribe(data => this.addOns = data)
    // console.log(this.addOns);
    this.qty = 1;
  }


  add( idValue, nameValue, prices, event ){
    this.orderService.add( idValue, nameValue, prices, event );
  }


  create( id, price ){
    this.orderService.create( id, price, this.item);
  }


}



export interface Item{
  name: any,
  id: any,
  price: any
}

export interface ConfigAPI{
  item_id: any,
  additionals: any,
}

export interface ConfigCART {
  name: string,
  additionals: any,
  prices: any,
  total: number,
}
