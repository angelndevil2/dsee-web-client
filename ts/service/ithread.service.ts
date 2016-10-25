/**
 * @author angelndevil2 on 16. 10. 24.
 */

import {Observable} from "rxjs/Rx";
import {Thread} from "../dstruct/thread";

export interface IThreadService {

    getThreads() : Observable;
    getThreadsWithJsonp(): Observable<Thread[]>
    getThreadInfoWithJsonp(id : number) : Observable<Thread>
}
