import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';
import {ControlGroup, Control, Validators} from '@angular/common';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import {RequestService} from './http.service';
import {HTTP_PROVIDERS} from '@angular/http';



@Component({
    selector: 'review',
    templateUrl: './components/review.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [RequestService, HTTP_PROVIDERS],
    inputs: ['thePhone', 'theName', 'form']
})


export class ReviewComponent{

    theName: string;
    thePhone: string;
    custInfo: CustInfo;
    // private hello : Router;
    form = new ControlGroup({
            name: new Control('', Validators.compose([Validators.required,this.cannotContainSpecialChars])),
            phone: new Control('', Validators.compose([Validators.required,this.cannotContainSpace, this.cannotContainSpecialChars, this.phoneLength])),
    });

    constructor(private _httpService: RequestService, public orderService : OrderService, private hello : Router){

    }

    sendOrder(){
      this.custInfo = {
        name: this.form.value.name,
        phone: this.form.value.phone
      }

      this.orderService.addToOrder(this.form.value);
      console.log(this.orderService.order);
      this._httpService.postJSON(this.orderService.order)
      .subscribe(data => console.log(data));
      this.orderService.storeCust(this.custInfo);
      this.orderService.orderComplete  = true;
      this.hello.navigate(['Confirm']);
      console.log(this.form.value);
    }

    cannotContainSpace(control: Control){
      if(control.value.indexOf(' ')>=0){
        return {cannotContainChars:true};
      } else {
        return null;
      }
    }

    cannotContainSpecialChars(control: Control){
      if(control.value.indexOf('/')>=0){
        return {cannotContainChars:true};
      } else if(control.value.indexOf('-')>=0){
        return {cannotContainChars:true};
      } else if(control.value.indexOf('(')>=0){
        return {cannotContainChars:true};
      } else if(control.value.indexOf(')')>=0){
        return {cannotContainChars:true};
      } else {
        return null;
      }
    }

    phoneLength(control: Control){
      if(control.value.length >= 11){
        return {phoneLength:true};
      } else if(control.value.length <= 9 ){
        return {phoneLength:true};
      } else {
        return null;
      }
    }


  }



export interface CustInfo {
  name: string,
  phone: string
}
