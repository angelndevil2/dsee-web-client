/**
 * @author angelndevil2 on 16. 10. 24.
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
var thread_service_1 = require("../service/thread.service");
var url_service_1 = require("../service/url.service");
var ThreadListComponent = (function () {
    function ThreadListComponent(threadService, urlService) {
        this.threadService = threadService;
        this.urlService = urlService;
    }
    ThreadListComponent.prototype.getThreadInfo = function (id) {
        var _this = this;
        try {
            this.threadService.getThreadInfoWithJsonp(id)
                .subscribe(function (threadInfo) { return _this.threadInfo = threadInfo; }, function (error) { return _this.errorMessage = error; });
        }
        catch (e) {
            console.error(e);
        }
    };
    ThreadListComponent.prototype.ngOnInit = function () {
        this.getThreads();
        this.serverUrl = this.urlService.getThreadListUrl();
    };
    ThreadListComponent.prototype.getThreads = function () {
        var _this = this;
        try {
            this.threadService.getThreadsWithJsonp()
                .subscribe(function (threads) { return _this.threads = threads; }, function (error) { return _this.errorMessage = error; });
        }
        catch (e) {
            console.error(e);
        }
    };
    ThreadListComponent = __decorate([
        core_1.Component({
            selector: 'thread-list',
            templateUrl: 'html/thread/thread-list.component.html',
            styleUrls: ['styles/thread-list.component.css'],
        }), 
        __metadata('design:paramtypes', [thread_service_1.ThreadService, url_service_1.UrlService])
    ], ThreadListComponent);
    return ThreadListComponent;
}());
exports.ThreadListComponent = ThreadListComponent;
//# sourceMappingURL=thread-list.component.js.map