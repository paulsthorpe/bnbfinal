import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HTTP_PROVIDERS} from '@angular/http';



@Component({
    selector: 'confirm',
    templateUrl: './components/confirm.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [HTTP_PROVIDERS],
    inputs: ['cust']
})

export class ConfirmComponent{

    cust :any;
    time : any;
    constructor(public orderService : OrderService){
      this.cust = this.orderService.customer;
    }


  }

  export interface CustInfo {
    name: string,
    phone: string
  }
