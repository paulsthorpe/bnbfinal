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
    console.log(this.addOns);
    this.qty = 1;
  }

  add( idValue, nameValue, prices, event ) {
    //if checked store addOn ids in array to send to api
    if(event.target.checked){
      this.apiAdditionals.push(idValue);

    }
    //if UNchecked remove addOn ids from array to send to api
    else if(!event.target.checked){
      let index = this.apiAdditionals.indexOf(idValue);
      this.apiAdditionals.splice(index,1);

    }
    //log for testing
    console.log(this.apiAdditionals);

    //store addOn names to array to use for readable cart values
    if(event.target.checked){
      this.cartAdditionals.push(nameValue);
      this.cartPrices.push(prices);

    }

    else if(!event.target.checked){
      let index = this.cartAdditionals.indexOf(nameValue);
      this.cartAdditionals.splice(index,1);
      this.cartPrices.splice(index,1);
    }
    console.log(this.cartAdditionals);
    console.log(this.cartPrices);
  }


  create(id, price) {
    this.cartPrices.push(price);
    this.total = this.cartPrices.reduce(function(total,num){return total+num});
    // !!!!!!!!!!!!!!!!!!!FOR API!!!!!!!!!!!!!!!!!!!!!!!//
    //set interface with selected menuitem and addons
    this.apiItem = {
      item_id : this.item.id,
      additionals : this.apiAdditionals
    };

    //push interface object into API array
    this.orderService.addToOrder(this.apiItem);

    console.log(this.orderService.order);



    // !!!!!!!!!!!!!!!!!!!FOR CART!!!!!!!!!!!!!!!!!!!!!!!//
    //set interface with selected menuitem and addons
    this.cartItem = {
      name : this.item.name,
      additionals : this.cartAdditionals,
      prices: this.cartPrices,
      total: this.total,
    };

    //push interface object into API array
    this.orderService.addToCart(this.cartItem);
    this.orderService.itemPrices.push(this.total);
    console.log(this.orderService.cart);
  }

  countAndCreate(qty,id,price){

    for(var i = 0; i < qty; i++){
      this.create(id,price);
    }
  }

  setTotal(){

  }

  addQty(){
    if(this.qty<5){
      this.qty ++;
    } else {
      this.qtyMessage = "Cannot Add More Than 5 Identical Items At Once.";
    }

  }

  removeQty(){
    if(this.qty>1){
      this.qty --;
    } else {
      this.qtyMessage = "";
    }

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
