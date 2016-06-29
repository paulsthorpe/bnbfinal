import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from '@angular/router-deprecated';
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
    cart:any;

    totalPrice:number;
    tax:number;
    subtotal:number;

    //temporary storage for item objects for deleting/adding purposes in functions below
    cartItem:any;
    orderItem:any;

    /**
     * inject orderService and router, orderservice is public so data can be shared
     * between views, instead of creating a new instance in each component that needs it
     * @param orderService
     * @param router
     */
    constructor(public orderService:OrderService, private router:Router) {
    }

    ngOnInit() {

        //create cart instance from items in orderservice cart
        this.cart = this.orderService.cart;

        if (this.cart.length > 0) {
            //get all item prices and reduce for total
            this.totalPrice = this.orderService.itemPrices.reduce(function (total, num) {
                return total + num
            });
            this.tax = this.orderService.calcTax(this.totalPrice);
            this.subtotal = this.tax + this.totalPrice;
        }

    }

    /**
     * User clicks minus icon on cart item, calling this method which is fed the items
     * array index. the item is spliced from the array at that index
     * @param item
     */
    deleteItem(item) {
        //delete objects related to user input
        this.orderService.cart.splice(item, 1);
        this.orderService.order.splice(item, 1);
        this.orderService.itemPrices.splice(item, 1);
        this.totalPrice = this.orderService.itemPrices.reduce(function (total, num) {
            return total + num
        });
        this.tax = this.orderService.calcTax(this.totalPrice);
        this.subtotal = this.tax + this.totalPrice;
    }

    /**
     * User clicks plus icon in view, calling this method which is fed the items
     * array index, item is copied temporarily and then push back into the order as a duplicate
     * 
     * @param item
     */
    addItem(item) {
        //grab and store objects concerning user input
        this.cartItem = this.orderService.cart[item];
        this.orderItem = this.orderService.order[item];
        //create duplicate instances of objects and add to api/cart arrays
        this.orderService.cart.push(this.cartItem);
        this.orderService.order.push(this.orderItem);
        //increase price accordingly
        this.orderService.itemPrices.push(this.cartItem.total);
        this.totalPrice = this.orderService.itemPrices.reduce(function (total, num) {
            return total + num
        });
        //calculate tax and add to cart total, to form subtotal
        this.tax = this.orderService.calcTax(this.totalPrice);
        this.subtotal = this.tax + this.totalPrice;
    }

    /**
     * check if type is number, for debugging purposes
     * @param val
     */
    isNumber(val) {
        return typeof val === 'number';
    }


}
