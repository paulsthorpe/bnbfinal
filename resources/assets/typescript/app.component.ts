import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {RequestService} from './http.service';
import {OrderService} from './order.service';
import {HTTP_PROVIDERS} from '@angular/http';

//Child Components
import {ConfigItemComponent} from './configItem.component';
import {OptionsComponent} from './itemOptions.component';
import {ReviewComponent} from './review.component';
import {WelcomeComponent} from './welcomeComponent.component';
import {ConfirmComponent} from './confirm.component';




@RouteConfig([
  {path: '/order', name: 'Welcome', component: WelcomeComponent },
  {path: '/order/options/:type', name: 'Options', component: OptionsComponent },
  {path: '/order/config/:item', name: 'Config', component: ConfigItemComponent },
  {path: '/order/review', name: 'Review', component: ReviewComponent },
  {path: '/order/confirmation', name: 'Confirm', component: ConfirmComponent },
  {path: '/*other', name: 'Welcome', component: WelcomeComponent },
  {path: '/order/options/*other', name: 'Welcome', component: WelcomeComponent },
  {path: '/order/config/*other', name: 'Welcome', component: WelcomeComponent },
  {path: '/order/*other', name: 'Welcome', component: WelcomeComponent },
])

@Component({
    selector: 'order-app',
    templateUrl: './components/master.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, RequestService, HTTP_PROVIDERS, OrderService]
})

export class AppComponent{

    constructor(private _httpService: RequestService){
    }

  }
