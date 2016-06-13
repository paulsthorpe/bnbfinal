import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit} from '@angular/core';
import {CartComponent} from './cart.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {RequestService} from './http.service';


@Component({
    selector: 'item-options',
    templateUrl: './components/itemOptions.component.html',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    providers: [HTTP_PROVIDERS]
})

export class OptionsComponent implements OnInit{

    itemType: any;

  constructor(private _routeParams: RouteParams){
  }

  ngOnInit() {
    this.itemType = this._routeParams.get("type");
  }

}
