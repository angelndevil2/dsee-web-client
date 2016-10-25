/**
 * @author k on 16. 10. 19.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { AppComponent }   from './app.component';


import { enableProdMode } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {ThreadModule} from "./thread/thread.module";
import {ClassModule} from "./class/class.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {ServerNotSetComponent} from "./server-not-set.component";
import {ServerListService} from "./service/server-list.service";
import {ThreadService} from "./service/thread.service";
import {UrlService} from "./service/url.service";

enableProdMode();

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule,
        ThreadModule,
        ClassModule,
        AppRoutingModule,
        MaterialModule.forRoot(),
    ],
    providers: [
        ServerListService, ThreadService,UrlService, CookieService
        // equal to RouterModule.forRoot(..., {useHash : true})
        /*{ provide : LocationStrategy, useClass: HashLocationStrategy }*/
    ],
    declarations: [ AppComponent, PageNotFoundComponent, ServerNotSetComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {
}
