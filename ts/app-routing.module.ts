/**
 * @author angelndevil2 on 16. 10. 24.
 */

import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./PageNotFound.component";

@NgModule({
    imports: [

        RouterModule.forRoot(
        [

            { path: '**', component: PageNotFoundComponent }
        ],
        { useHash:true }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule {}
