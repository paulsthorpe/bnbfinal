
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';



@Injectable()
export class OrderService {
  //array to hold json objects to send to api to persist data to database
  order = [];
  //array to hold similar json objects containing user relevant information to display in angular cart
  cart = [];
  itemPrices = [];
  contactInfo = [];
  customer : Cust;
  orderComplete: boolean = false;


  constructor(){
  }

  addToOrder(item){
    this.order.push(item);
  }

  addToCart(item){
    this.cart.push(item);
  }

  formatPrice(input){
    return (input / 100).toFixed(2);
  }

  calcTax(price){
    return price * .0675;
  }

  storeCust(object){
    this.customer = {
      name : object.name,
      phone : object.phone,
    }
  }

}
export interface Cust {
  name: string,
  phone: string
}
