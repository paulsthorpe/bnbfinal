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
    customer:Cust;
    orderComplete:boolean = false;

    addOn:AddOn;
    addOns = [];

    //////CONFIGITEM PROPERTIES

    qty:number;
    qtyMessage:string;

    //store relevant config item data for display in angular cart
    cartAdditionals = [];
    cartPrices = [];
    total:number;
    cartItem:ConfigCART;

    //store relevant config item data for api
    apiAdditionals = [];
    apiItem:ConfigAPI;

    item:Item;

    constructor() {
    }

    /**
     * push api item interface into api array, clear toppings array for next use
     * @param item
     */
    addToOrder(item) {
        this.order.push(item);
        //clear previous array to avoid duplication
        this.apiAdditionals = [];
    }

    /**
     * push client item interface into client array, clear item price and toppings array for next use
     * @param item
     */
    addToCart(item) {
        this.cart.push(item);
        //clear previous arrays to avoid duplication
        this.cartPrices = [];
        this.cartAdditionals = [];
    }

    /**
     * convert cents to dollar/cent format
     * @param input
     * @returns {string}
     */
    formatPrice(input) {
        return (input / 100).toFixed(2);
    }

    /**
     * calculate tax for cart total
     * @param price
     * @returns {number}
     */
    calcTax(price) {
        return price * .0675;
    }

    /**
     * store customer details, not in use atm
     * @param object
     */
    storeCust(object) {
        this.customer = {
            name: object.name,
            phone: object.phone,
        }
    }


    /**
     * on select box click event add or delete toppings from toppings array
     * @param idValue
     * @param nameValue
     * @param prices
     * @param event
     */
    add(idValue, nameValue, prices, event) {
        //if checked store addOn ids in array to send to api
        if (event.target.checked) {
            this.apiAdditionals.push(idValue);

        }

        //if UNchecked remove addOn ids from array to send to api
        else if (!event.target.checked) {
            let index = this.apiAdditionals.indexOf(idValue);
            this.apiAdditionals.splice(index, 1);

        }


        //store addOn names to array to use for readable cart values
        if (event.target.checked) {
            this.cartAdditionals.push(nameValue);
            this.cartPrices.push(prices);

        }

        //if checked store addOn names in array for readable topping values
        else if (!event.target.checked) {
            let index = this.cartAdditionals.indexOf(nameValue);
            this.cartAdditionals.splice(index, 1);
            this.cartPrices.splice(index, 1);
        }

    }


    /**
     * User adds item after config, creates item interfaces and pushes them to their
     * designated array, cart or api
     * @param id
     * @param price
     * @param item
     */
    create(id, price, item) {

        //add item price
        this.cartPrices.push(price);
        //reduce topping array values to a total for item price
        this.total = this.cartPrices.reduce(function (total, num) {
            return total + num
        });
        // !!!!!!!!!!!!!!!!!!!FOR API!!!!!!!!!!!!!!!!!!!!!!!//
        //set interface with selected menuitem and addons
        this.apiItem = {
            item_id: item.id,
            additionals: this.apiAdditionals
        };

        //push interface object into API array
        this.addToOrder(this.apiItem);

        // !!!!!!!!!!!!!!!!!!!FOR CART!!!!!!!!!!!!!!!!!!!!!!!//
        //set interface with selected menuitem and addons
        this.cartItem = {
            name: item.name,
            additionals: this.cartAdditionals,
            prices: this.cartPrices,
            total: this.total,
        };

        //push interface object into API array
        this.addToCart(this.cartItem);
        this.itemPrices.push(this.total);

    }


//////INTEFRFACES

}

/**
 * interface for user info
 */
export interface Cust {
    name:string,
    phone:string
}

/**
 * interface to be pushed into api addon array
 */
export interface AddOn {
    id:number,
    name:string,
    price:number
}

/**
 * interface for menu items
 */
export interface Item {
    name:any,
    id:any,
    price:any
}

/**
 * interface for api items
 */
export interface ConfigAPI {
    item_id:any,
    additionals:any,
}

/**
 * interface for cart items
 */
export interface ConfigCART {
    name:string,
    additionals:any,
    prices:any,
    total:number,
}
