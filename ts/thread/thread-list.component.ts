/**
 * @author angelndevil2 on 16. 10. 24.
 */

import {OnInit, Component} from "@angular/core";
import {Thread} from "../dstruct/Thread";
import {ThreadService} from "../service/thread.service";
import {UrlService} from "../service/url.service";
import {ThreadInfo} from "../dstruct/thread-info";


@Component({
    selector: 'thread-list',
    templateUrl: 'html/thread/thread-list.component.html',
    styleUrls: ['styles/thread-list.component.css'],
})

export class ThreadListComponent implements OnInit {

    private errorMessage : string;
    public threads: Thread[];
    public serverUrl : string;
    public threadInfo : ThreadInfo;

    constructor (private threadService : ThreadService, private urlService : UrlService) {}

    public getThreadInfo(id : number) {

        try {
            this.threadService.getThreadInfoWithJsonp(id)
                .subscribe(
                    threadInfo => this.threadInfo = threadInfo,
                    error => this.errorMessage = <any>error
                );
        }  catch (e) {
            console.error(e);
        }
    }

    public ngOnInit() {
        this.getThreads();
        this.serverUrl = this.urlService.getThreadListUrl();
    }

    private getThreads() {

        try {
            this.threadService.getThreadsWithJsonp()
                .subscribe(
                    threads => this.threads = threads,
                    error => this.errorMessage = <any>error
                );
        } catch (e) {
            console.error(e);
        }
    }
}
