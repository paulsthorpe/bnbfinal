import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {RequestService} from './http.service';
import {ControlGroup, Control, Validators} from '@angular/common';
import {ValidatorService} from './validators.service';




@Component({
    selector: 'welcome',
    templateUrl: './components/welcome.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [ValidatorService],
    inputs: ['orderService.order', 'pastOrdersClient']
})

export class WelcomeComponent implements OnInit{

  phone: Phone;

  pastOrders = [];

  pastOrdersClient = [];

  addOns : AddOn;

  apiItem: ConfigAPI;

  cartItem: ConfigCART;

  form = new ControlGroup({

    phoneLookup: new Control('', Validators.compose([Validators.required,
      this._validators.cannotContainSpace,
      this._validators.cannotContainSpecialChars,
      this._validators.phoneLength])),
  });

  constructor(private _httpService: RequestService,
    public orderService : OrderService,
    private _validators : ValidatorService){

  }

  ngOnInit(){
  }


  getOrders(){
    this.phone = {
      phone: this.form.value.phoneLookup
    }

    this._httpService.getOrders(this.phone)
    .subscribe(data => this.orgData(data));

    this._httpService.getOrdersClient(this.phone)
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
      // this.pastOrders = allOrders;


      console.log(this.pastOrders);
  }

  orgDataClient(data){
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



      this.pastOrdersClient.push(pastOrder);

    }
      // this.pastOrders = allOrders;


      // console.log(this.pastOrdersClient);
  }

  retrieveOrderState(orderIndex){
    let total = this.pastOrders[orderIndex].items.length;

    for(var itemIndex = 0; itemIndex < total; itemIndex++){
        let index = itemIndex;
        this._httpService.getSpecificAddOns(this.pastOrders[orderIndex].items[itemIndex].additionals)
        .subscribe(data => this.applyOrder(data, orderIndex, index));
    }

  }

  applyOrder(data, orderIndex, itemIndex){
    let length = data.length;
    this.orderService.apiAdditionals = [];

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
    name : this.pastOrders[orderIndex].items[itemIndex].item_id,
    additionals : this.orderService.cartAdditionals,
    prices: this.orderService.cartPrices,
    total: this.orderService.total,
  };

  this.orderService.addToOrder(this.apiItem);
  this.orderService.addToCart(this.cartItem);
  this.orderService.itemPrices.push(this.orderService.total)
  console.log(this.orderService.order);
}
}

export interface Phone {
  phone: string;
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
