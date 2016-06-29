import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {OrderService} from './order.service';
import {ReorderService} from './reorder.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
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

export class WelcomeComponent implements OnInit {

    phone:Phone;
    /**
     * form for retrieving users past orders
     * @type {ControlGroup}
     */
    form = new ControlGroup({

        phoneLookup: new Control('',
            Validators.compose([Validators.required,
                this._validators.cannotContainSpace,
                this._validators.cannotContainSpecialChars,
                this._validators.phoneLength])),
    });

    /**
     * inject services
     * @param _httpService
     * @param orderService
     * @param _validators
     * @param router
     * @param reorderService
     */
    constructor(private _httpService:RequestService,
                public orderService:OrderService,
                private _validators:ValidatorService,
                private router:Router,
                private reorderService:ReorderService) {
    }

    ngOnInit() {
    }

    /**
     * call reorder service method to post to api and recieve a response
     */
    getOrders() {
        this.phone = {
            phone: this.form.value.phoneLookup
        }
        this.reorderService.getOrders(this.phone);
    }

    /**
     * call reorder service method to build up a current order from prev order
     * @param orderIndex
     */
    retrieveOrderState(orderIndex) {
        this.reorderService.retrieveOrderState(orderIndex);
    }

    /**
     * create a cart and api item from past order selected by user
     * @param data
     * @param orderIndex
     * @param itemIndex
     */
    applyOrder(data, orderIndex, itemIndex) {
        this.reorderService.applyOrder(data, orderIndex, itemIndex);
    }

}

/**
 * interface for user input(phone)
 */
export interface Phone {
    phone:string;
}
