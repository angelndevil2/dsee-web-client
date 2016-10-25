/**
 * @author k on 16. 10. 19.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var http_1 = require('@angular/http');
var core_2 = require('angular2-cookie/core');
var app_component_1 = require('./app.component');
var core_3 = require('@angular/core');
var app_routing_module_1 = require("./app-routing.module");
var thread_module_1 = require("./thread/thread.module");
var class_module_1 = require("./class/class.module");
var page_not_found_component_1 = require("./page-not-found.component");
var server_not_set_component_1 = require("./server-not-set.component");
var server_list_service_1 = require("./service/server-list.service");
var thread_service_1 = require("./service/thread.service");
var url_service_1 = require("./service/url.service");
core_3.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                thread_module_1.ThreadModule,
                class_module_1.ClassModule,
                app_routing_module_1.AppRoutingModule,
                material_1.MaterialModule.forRoot(),
            ],
            providers: [
                server_list_service_1.ServerListService, thread_service_1.ThreadService, url_service_1.UrlService, core_2.CookieService
            ],
            declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFoundComponent, server_not_set_component_1.ServerNotSetComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map