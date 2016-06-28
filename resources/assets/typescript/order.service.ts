
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

  addOn : AddOn;
  addOns = [];




  //////CONFIGITEM PROPERTIES

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

  item: Item;

  constructor(){
  }

  addToOrder(item){
    this.order.push(item);
    //clear previous array to avoid duplication
    this.apiAdditionals = [];
  }

  addToCart(item){
    this.cart.push(item);
    //clear previous arrays to avoid duplication
    this.cartPrices = [];
    this.cartAdditionals = [];
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


////////////CONFIGITEM METHODs

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
  // console.log(this.apiAdditionals);

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


create(id, price, item) {
  this.cartPrices.push(price);
  this.total = this.cartPrices.reduce(function(total,num){return total+num});
  // !!!!!!!!!!!!!!!!!!!FOR API!!!!!!!!!!!!!!!!!!!!!!!//
  //set interface with selected menuitem and addons
  this.apiItem = {
    item_id : item.id,
    additionals : this.apiAdditionals
  };



  //push interface object into API array
  this.addToOrder(this.apiItem);

  console.log(this.order);



  // !!!!!!!!!!!!!!!!!!!FOR CART!!!!!!!!!!!!!!!!!!!!!!!//
  //set interface with selected menuitem and addons
  this.cartItem = {
    name : item.name,
    additionals : this.cartAdditionals,
    prices: this.cartPrices,
    total: this.total,
  };

  //push interface object into API array
  this.addToCart(this.cartItem);
  this.itemPrices.push(this.total);
  console.log(this.cart);
}





//////INTEFRFACES

}
export interface Cust {
  name: string,
  phone: string
}

export interface AddOn {
  id: number,
  name: string,
  price: number
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
