import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';
import {ControlGroup, Control, Validators} from '@angular/common';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {RequestService} from './http.service';
import {HTTP_PROVIDERS} from '@angular/http';


@Component({
    selector: 'review',
    templateUrl: './components/review.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [RequestService, HTTP_PROVIDERS],
    inputs: ['thePhone', 'theName', 'form']
})


export class ReviewComponent {

    theName:string;
    thePhone:string;
    custInfo:CustInfo;

    /**
     * form for user data input
     * @type {ControlGroup}
     */
    form = new ControlGroup({

        name: new Control('', Validators.compose([Validators.required,
            this.cannotContainSpecialChars])),

        phone: new Control('', Validators.compose([Validators.required,
            this.cannotContainSpace,
            this.cannotContainSpecialChars,
            this.phoneLength])),
    });

    constructor(private _httpService:RequestService, public orderService:OrderService, private router:Router) {

    }

    /**
     * get user info from form,push to api array
     * send order to api, save customer info to display in confirm view
     * set order conplete to true
     * navigate to confirm view
     */
    sendOrder() {

        this.custInfo = {

            name: this.form.value.name,
            phone: this.form.value.phone

        }

        this.orderService.addToOrder(this.form.value);

        this._httpService.postJSON(this.orderService.order)
            .subscribe(data => console.log(data));

        this.orderService.storeCust(this.custInfo);

        this.orderService.orderComplete = true;

        this.router.navigate(['Confirm']);

    }

    /**
     * validator to prevent space in input
     * @param control
     * @returns {any}
     */
    cannotContainSpace(control:Control) {
        if (control.value.indexOf(' ') >= 0) {
            return {cannotContainChars: true};
        } else {
            return null;
        }
    }

    /**
     * validator to prevent typical phone formats, we want just plain numbers
     * @param control
     * @returns {any}
     */
    cannotContainSpecialChars(control:Control) {
        if (control.value.indexOf('/') >= 0) {
            return {cannotContainChars: true};
        } else if (control.value.indexOf('-') >= 0) {
            return {cannotContainChars: true};
        } else if (control.value.indexOf('(') >= 0) {
            return {cannotContainChars: true};
        } else if (control.value.indexOf(')') >= 0) {
            return {cannotContainChars: true};
        } else {
            return null;
        }
    }

    /**
     * validator to ensure phone number is proper length
     * @param control
     * @returns {any}
     */
    phoneLength(control:Control) {
        if (control.value.length >= 11) {
            return {phoneLength: true};
        } else if (control.value.length <= 9) {
            return {phoneLength: true};
        } else {
            return null;
        }
    }


}


/**
 * interface for customer data, used in confirm view
 */
export interface CustInfo {
    name:string,
    phone:string
}
