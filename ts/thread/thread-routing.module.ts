/**
 * @author angelndevil2 on 16. 10. 24.
 */
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {ThreadComponent} from "./thread.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ThreadComponent
            },
            {
                path:"thread",
                component:ThreadComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ThreadRoutingModule {}
