/**
 * @author k on 16. 10. 19.
 */

import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ClassComponent } from "./class.component";
import { MaterialModule } from "@angular/material";
import {ClassRoutingModule} from "./class-routing.module";

@NgModule({
    imports:      [
        FormsModule,
        CommonModule,
        MaterialModule,
        ClassRoutingModule
    ],
    declarations: [ ClassComponent ],
    exports : [ ClassComponent ],
    providers: [ ]
})
export class ClassModule {}
