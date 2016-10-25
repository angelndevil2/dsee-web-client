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
var core_1 = require("@angular/core");
var server_list_service_1 = require("./server-list.service");
var UrlService = (function () {
    function UrlService(servers) {
        this.servers = servers;
        this.threadListUri = '/thread/list';
        this.threadInfoUri = '/thread/info';
        this.protocol = "http";
    }
    UrlService.prototype.getThreadListUrl = function () {
        var s = this.servers.getCurrentServer();
        if (s == null)
            throw Error("current selected server is null");
        return this.protocol + "://" + s.connectionString() + this.threadListUri;
    };
    UrlService.prototype.getThreadInfoUrl = function (id) {
        var s = this.servers.getCurrentServer();
        if (s == null)
            throw Error("current selected server is null");
        return this.protocol + "://" + s.connectionString() + this.threadInfoUri + "/" + id;
    };
    UrlService.prototype.setProtocol = function (protocol) {
        this.protocol = protocol;
    };
    UrlService.prototype.getProtocol = function () {
        return this.protocol;
    };
    UrlService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [server_list_service_1.ServerListService])
    ], UrlService);
    return UrlService;
}());
exports.UrlService = UrlService;
//# sourceMappingURL=url.service.js.map