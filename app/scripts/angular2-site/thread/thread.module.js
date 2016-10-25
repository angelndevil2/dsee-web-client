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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var thread_component_1 = require("./thread.component");
var material_1 = require("@angular/material");
var thread_routing_module_1 = require("./thread-routing.module");
var thread_list_component_1 = require("./thread-list.component");
var thread_info_component_1 = require("./thread-info.component");
var ThreadModule = (function () {
    function ThreadModule() {
    }
    ThreadModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                material_1.MaterialModule,
                thread_routing_module_1.ThreadRoutingModule
            ],
            declarations: [thread_component_1.ThreadComponent, thread_list_component_1.ThreadListComponent, thread_info_component_1.ThreadInfoComponent],
            exports: [thread_component_1.ThreadComponent, thread_list_component_1.ThreadListComponent, thread_info_component_1.ThreadInfoComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ThreadModule);
    return ThreadModule;
}());
exports.ThreadModule = ThreadModule;
//# sourceMappingURL=thread.module.js.map