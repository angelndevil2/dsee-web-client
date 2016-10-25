import {Component, OnInit, HostListener} from '@angular/core';
import {Thread} from "../dstruct/thread";
import {ThreadInfo} from "../dstruct/thread-info";
import {ThreadService} from "../service/thread.service";
import {UrlService} from "../service/url.service";

@Component({
    selector: 'thread',
    templateUrl: 'html/thread/thread.component.html',
    styleUrls: ['styles/search.component.css']
})

/**
 * Tread information main component
 *
 * @author angelndevil2 on 16. 10. 20.
 */
export class ThreadComponent  implements OnInit {

    private errorMessage : string;
    public threads: Thread[];
    public serverUrl : string;
    public threadInfo : ThreadInfo;

    constructor (private threadService : ThreadService, private urlService : UrlService) {}

    /**
     * get thread info with jsonp
     *
     * @param id thread id
     */
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

    /**
     * event handler & listener for {@link threadIdClick}
     *
     * @param id thread id
     */
    @HostListener('threadIdClick', ['$event'])
    public threadIdClicked(id : number) {
        this.getThreadInfo(id);
    }

    /**
     * get thread list with jsonp
     */
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
