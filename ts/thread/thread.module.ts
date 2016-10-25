/**
 * @author angelndevil2 on 16. 10. 24.
 */

import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ThreadComponent} from "./thread.component";
import { MaterialModule } from "@angular/material";
import { ThreadRoutingModule } from "./thread-routing.module";
import {ThreadListComponent} from "./thread-list.component";
import {ThreadInfoComponent} from "./thread-info.component";

@NgModule({
    imports:      [
        FormsModule,
        CommonModule,
        MaterialModule,
        ThreadRoutingModule
    ],
    declarations: [ ThreadComponent, ThreadListComponent, ThreadInfoComponent ],
    exports : [ ThreadComponent, ThreadListComponent, ThreadInfoComponent ],
    providers: [  ]
})
export class ThreadModule {}
