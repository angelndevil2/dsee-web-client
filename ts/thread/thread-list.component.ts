import {Thread} from "../dstruct/Thread";
import {Component, Input, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'thread-list',
    templateUrl: 'html/thread/thread-list.component.html',
    styleUrls: ['styles/thread-list.component.css'],
})

/**
 * component for Thread List
 *
 * input - thread list {@link threads}
 * output - {@link threadIdClick} event
 *
 * @author angelndevil2 on 16. 10. 24.
 */
export class ThreadListComponent {

    @Input() public threads: Thread[];
    @Input() public serverUrl : string;

    /**
     * event for thread id clicking
     *
     * @type {EventEmitter}
     */
    @Output() threadIdClick: EventEmitter<number> = new EventEmitter();


    /**
     * emit {@link threadIdClick} event when thread id button is clicked.
     * @param id clicked thread id
     */
    public threadIdClicked(id : number) {
        this.threadIdClick.emit(id);
    }

}
