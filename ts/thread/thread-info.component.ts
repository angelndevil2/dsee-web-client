/**
 * @author angelndevil2 on 16. 10. 25.
 */

import {Component, Input} from "@angular/core";
import {ThreadInfo} from "../dstruct/thread-info";

@Component({
    selector: 'thread-info',
    templateUrl: 'html/thread/thread-info.component.html',
    styleUrls: ['styles/thread-info.component.css'],
})

export class ThreadInfoComponent {

    @Input() public threadInfo : ThreadInfo;

}
