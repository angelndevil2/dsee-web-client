/**
 * @author angelndevil2 on 16. 10. 25.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';
import {IThreadService} from "./ithread.service";
import {Observable} from "rxjs/Rx";
import { UrlService } from "../service/url.service";
import {Thread} from "../dstruct/thread";

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import {ThreadInfo} from "../dstruct/thread-info";

@Injectable()
export class ThreadService implements IThreadService {

    getThreadInfoWithJsonp(id: number): Observable<ThreadInfo> {
        try {
            return this.jsonp.get(this.url.getThreadInfoUrl(id)+"?callback=JSONP_CALLBACK").map(
                response => <Thread> response.json()
            ).catch(this.handleError);
        } catch (error : Error) {
            return Observable.throw(error.message);
        }
    }

    constructor(private http: Http, private jsonp: Jsonp, private url : UrlService) {
    }

    getThreads(): Observable<Thread[]> {

        try {
            return this.http.get(this.url.getThreadListUrl()).map(this.extractData).catch(this.handleError);
        } catch (error : Error) {
            return Observable.throw(error.message);
        }
    }

    getThreadsWithJsonp(): Observable<Thread[]> {

        try {
            return this.jsonp.get(this.url.getThreadListUrl()+"?callback=JSONP_CALLBACK").map(
                response => <Thread[]> response.json()
            ).catch(this.handleError);
        } catch (error : Error) {
            return Observable.throw(error.message);
        }
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
