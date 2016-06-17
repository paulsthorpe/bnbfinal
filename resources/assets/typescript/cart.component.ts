import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from '@angular/router-deprecated';
import {OrderService} from './order.service';



@Component({
    selector: 'cart',
    templateUrl: './components/cart.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    inputs: ['cart', 'totalPrice', 'tax', 'subtotal']
})

export class CartComponent {
  //array containing user relevant cart info
  cart: any;

  totalPrice: number;
  tax: number;
  subtotal: number;

  //temporary storage for item objects for deleting/adding purposes in functions below
  cartItem: any;
  orderItem: any;

  constructor(public orderService : OrderService){
  }

  ngOnInit(){

    this.cart = this.orderService.cart;

    if(this.orderService.itemPrices.length>0){
      this.totalPrice = this.orderService.itemPrices.reduce(function(total,num){return total+num});
      this.tax = this.orderService.calcTax(this.totalPrice);
      this.subtotal = this.tax + this.totalPrice;
    }

  }

  deleteItem(item){
    //delete objects related to user input
    this.orderService.cart.splice(item,1);
    this.orderService.order.splice(item,1);
    this.orderService.itemPrices.splice(item,1);
    this.totalPrice = this.orderService.itemPrices.reduce(function(total,num){return total+num});
    this.tax = this.orderService.calcTax(this.totalPrice);
    this.subtotal = this.tax + this.totalPrice;
  }

  addItem(item){
    //grab and store objects concerning user input
    this.cartItem = this.orderService.cart[item];
    this.orderItem = this.orderService.order[item];
    //create duplicate instances of objects and add to api/cart arrays
    this.orderService.cart.push(this.cartItem);
    this.orderService.order.push(this.orderItem);
    this.orderService.itemPrices.push(this.cartItem.total);
    this.totalPrice = this.orderService.itemPrices.reduce(function(total,num){return total+num});
    this.tax = this.orderService.calcTax(this.totalPrice);
    this.subtotal = this.tax + this.totalPrice;
  }

}
