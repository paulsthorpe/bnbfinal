import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';
import {ReorderService} from './reorder.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {RequestService} from './http.service';
import {ControlGroup, Control, Validators} from '@angular/common';
import {ValidatorService} from './validators.service';


@Component({
    selector: 'welcome',
    templateUrl: './components/welcome.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [ValidatorService, ReorderService],
    inputs: ['orderService.order', 'reorderService.pastOrdersClient']
})

export class WelcomeComponent implements OnInit{

  phone: Phone;
  form = new ControlGroup({

    phoneLookup: new Control('',
      Validators.compose([Validators.required,
      this._validators.cannotContainSpace,
      this._validators.cannotContainSpecialChars,
      this._validators.phoneLength])),
  });

  constructor(private _httpService: RequestService,
    public orderService : OrderService,
    private _validators : ValidatorService,
    private router : Router,
    private reorderService : ReorderService){
  }

  ngOnInit(){
  }

  getOrders(){
    this.phone = {
      phone: this.form.value.phoneLookup
    }
    this.reorderService.getOrders(this.phone);
  }

  retrieveOrderState(orderIndex){
    this.reorderService.retrieveOrderState(orderIndex);
    // this.router.navigate(['Review']);
  }

  applyOrder(data, orderIndex, itemIndex){
    this.reorderService.applyOrder(data, orderIndex, itemIndex);
  }

}

export interface Phone {
  phone: string;
}
