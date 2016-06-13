import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {RequestService} from './http.service';


@Component({
    selector: 'welcome',
    templateUrl: './components/welcome.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [],
    inputs: ['orderService.order']
})

export class WelcomeComponent{

    constructor(public orderService : OrderService){

    }



  }
