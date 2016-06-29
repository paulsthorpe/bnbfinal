import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {OrderService} from './order.service';
import {RequestService} from './http.service';


@Injectable()
export class ReorderService {

    pastOrders = [];

    pastOrdersClient = [];

    addOns:AddOn;

    apiItem:ConfigAPI;

    cartItem:ConfigCART;

    totalItems: number;


    /**
     *
     * @param _httpService
     * @param orderService
     */
    constructor(private _httpService:RequestService,
                public orderService:OrderService) {

    }

    /**
     * This method will make to calls to the api based on user input, one to get
     * user relevant data, the other to get api relevant data(from past orders)
     * maybe this should be one call and a bigger array, for now it stays like this
     * @param phone
     */
    getOrders(phone) {

        this._httpService.getOrders(phone)
            .subscribe(data => this.orgData(data));

        this._httpService.getOrdersClient(phone)
            .subscribe(data => this.orgDataClient(data));

    }


    /**
     * Retrieve the index from user click event and fire applyOrder()
     * @param orderIndex
     */
    retrieveOrderState(orderIndex) {


      this.totalItems = this.pastOrders[orderIndex].items.length;


      for(var itemIndex = 0; itemIndex < this.totalItems; itemIndex++){
          let index = itemIndex;


          this._httpService.getSpecificAddOns(this.pastOrders[orderIndex].items[itemIndex].additionals)
          .subscribe(data => this.applyOrder(data, orderIndex, index));
      }

    }

    /**
     * This method retrieves which order a user clicks on from retrieveOrderState, retrieves the array index,
     * which is supplied to the view by the array that feeds it(pastOrdersClient) and then in turn builds the standard
     * application array that displays order data to the user.
     *
     * Once this process is complete it does the same process, but for the array that contains api item interfaces
     * which will be sent to the api for processing
     * @param data
     * @param orderIndex
     * @param itemIndex
     */
    applyOrder(data, orderIndex, itemIndex) {

        //Initialize length to serve as the index for the iteration below
        let length = data.length;
        //Set these properties to empty array to ensure they are empty before using them.
        //You never know....
        this.orderService.apiAdditionals = [];
        this.orderService.cartAdditionals = [];
        this.orderService.cartPrices = [];
        //store the cart total
        this.orderService.cartPrices.push(this.pastOrdersClient[orderIndex].items[itemIndex].price);

        for (var i = 0; i < length; i++) {
            //foreach topping in the api and client past order arrays, push to our default arrays
            this.orderService.apiAdditionals.push(data[i].id);
            this.orderService.cartAdditionals.push(data[i].name);
            //store individual item prices in client order
            this.orderService.cartPrices.push(data[i].price);
            //store individual prices in api order
            this.orderService.total = this.orderService.cartPrices.reduce(function (total, num) {
                return total + num
            });

        }

        //create order item interface to store in our api order array
        this.apiItem = {
            item_id: this.pastOrders[orderIndex].items[itemIndex].item_id,
            additionals: this.orderService.apiAdditionals
        }

        //create order item interface in our client order array
        this.cartItem = {
            name: this.pastOrdersClient[orderIndex].items[itemIndex].name,
            additionals: this.orderService.cartAdditionals,
            prices: this.orderService.cartPrices,
            total: this.orderService.total,
        }

        //push the interfaces o its respective destination, client or api
        this.orderService.addToOrder(this.apiItem);
        this.orderService.addToCart(this.cartItem);
        this.orderService.itemPrices.push(this.orderService.total);

    }

    /**
     * organize previous order data recieved from api
     * @param data
     */
    orgData(data) {
        let length = data.length;

        for (var i = 0; i < length; i++) {
            let pastOrder = [];

            let items = data[i].items.length;
            let col = [];
            for (var a = 0; a < items; a++) {
                let oItem = [];

                let tops = data[i].items[a].additionals.length;
                let toppings = [];
                for (var b = 0; b < tops; b++) {
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

    /**
     * organize previous order data recieved from api
     * @param data
     */
    orgDataClient(data) {

        let length = data.length;

        for (var i = 0; i < length; i++) {
            let pastOrder = [];

            let items = data[i].items.length;
            let col = [];
            for (var a = 0; a < items; a++) {
                let oItem = [];

                let tops = data[i].items[a].additionals.length;
                let toppings = [];
                for (var b = 0; b < tops; b++) {
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

}

/**
 *
 */
export interface AddOn {
    id:number,
    name:string,
    price:number
}

/**
 * Interface previous orders, orderItem stores individual items and an array of toppings
 */
export interface pastOrder {
    order_id:number,
    orderItem:pOrderItem[]
}

/**
 *
 */
export interface pOrderItem {
    item_id:number,
    additionals:number[]
}

/**
 *
 */
export interface ConfigAPI {
    item_id:any,
    additionals:any,
}

/**
 *
 */
export interface ConfigCART {
    name:string,
    additionals:any,
    prices:any,
    total:number,
}
