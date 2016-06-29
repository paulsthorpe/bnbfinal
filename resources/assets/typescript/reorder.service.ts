import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import {OrderService} from './order.service';
import {RequestService} from './http.service';


@Injectable()
export class ReorderService {

  pastOrders = [];

  pastOrdersClient = [];

  addOns : AddOn;

  apiItem: ConfigAPI;

  cartItem: ConfigCART;

  totalItems: number;

  constructor(private _httpService: RequestService,
    public orderService : OrderService){

  }

  getOrders(phone){

    this._httpService.getOrders(phone)
    .subscribe(data => this.orgData(data));

    this._httpService.getOrdersClient(phone)
    .subscribe(data => this.orgDataClient(data));

  }

  orgData(data){
    let length = data.length;

    for(var i = 0; i < length; i++ ){
      let pastOrder = [];

      let items = data[i].items.length;
      let col = [];
      for(var a = 0; a < items; a++ ){
        let oItem = [];

        let tops = data[i].items[a].additionals.length;
        let toppings = [];
        for(var b = 0; b < tops; b++ ){
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


  }

  orgDataClient(data){
    console.log(data);
    let length = data.length;

    for(var i = 0; i < length; i++ ){
      let pastOrder = [];

      let items = data[i].items.length;
      let col = [];
      for(var a = 0; a < items; a++ ){
        let oItem = [];

        let tops = data[i].items[a].additionals.length;
        let toppings = [];
        for(var b = 0; b < tops; b++ ){
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
  }

  retrieveOrderState(orderIndex){
    console.log(this.pastOrders);
    // this.totalItems = this.pastOrders[orderIndex].items.length;
    // console.log(this.pastOrders);
    // console.log(this.totalItems);
    //
    // for(var itemIndex = 0; itemIndex < this.totalItems; itemIndex++){
    //     let index = itemIndex;
    //
    //
    //     this._httpService.getSpecificAddOns(this.pastOrders[orderIndex].items[itemIndex].additionals)
    //     .subscribe(data => this.applyOrder(data, orderIndex, index));
    // }

  }

  applyOrder(data, orderIndex, itemIndex){
    let length = data.length;
    this.orderService.apiAdditionals = [];
    this.orderService.cartAdditionals = [];
    this.orderService.cartPrices = [];
    this.orderService.cartPrices.push(this.pastOrdersClient[orderIndex].items[itemIndex].price);
    for(var i = 0; i < length; i++){

      this.orderService.apiAdditionals.push(data[i].id);
      this.orderService.cartAdditionals.push(data[i].name);
      this.orderService.cartPrices.push(data[i].price);
      this.orderService.total = this.orderService.cartPrices.reduce(function(total,num){return total+num});

    }

    this.apiItem = {
      item_id: this.pastOrders[orderIndex].items[itemIndex].item_id,
      additionals: this.orderService.apiAdditionals
    }

    this.cartItem = {
      name : this.pastOrdersClient[orderIndex].items[itemIndex].name,
      additionals : this.orderService.cartAdditionals,
      prices: this.orderService.cartPrices,
      total: this.orderService.total,
    }

    this.orderService.addToOrder(this.apiItem);
    this.orderService.addToCart(this.cartItem);
    this.orderService.itemPrices.push(this.orderService.total);

  }

}

export interface AddOn {
  id: number,
  name: string,
  price: number
}

export interface pastOrder {
  order_id:number,
  orderItem: pOrderItem[]
}

export interface pOrderItem {
  item_id: number,
  additionals: number[]
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
