/**
 * @author angelndevil2 on 16. 10. 25.
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
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
var url_service_1 = require("../service/url.service");
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
var ThreadService = (function () {
    function ThreadService(http, jsonp, url) {
        this.http = http;
        this.jsonp = jsonp;
        this.url = url;
    }
    ThreadService.prototype.getThreadInfoWithJsonp = function (id) {
        try {
            return this.jsonp.get(this.url.getThreadInfoUrl(id) + "?callback=JSONP_CALLBACK").map(function (response) { return response.json(); }).catch(this.handleError);
        }
        catch (error) {
            return Rx_1.Observable.throw(error.message);
        }
    };
    ThreadService.prototype.getThreads = function () {
        try {
            return this.http.get(this.url.getThreadListUrl()).map(this.extractData).catch(this.handleError);
        }
        catch (error) {
            return Rx_1.Observable.throw(error.message);
        }
    };
    ThreadService.prototype.getThreadsWithJsonp = function () {
        try {
            return this.jsonp.get(this.url.getThreadListUrl() + "?callback=JSONP_CALLBACK").map(function (response) { return response.json(); }).catch(this.handleError);
        }
        catch (error) {
            return Rx_1.Observable.throw(error.message);
        }
    };
    ThreadService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ThreadService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    ThreadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp, url_service_1.UrlService])
    ], ThreadService);
    return ThreadService;
}());
exports.ThreadService = ThreadService;
//# sourceMappingURL=thread.service.js.map