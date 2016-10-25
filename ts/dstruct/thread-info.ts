/**
 * @author angelndevil2 on 16. 10. 25.
 */

import {Thread} from "./thread";
import {MonitorInfo} from "./monitor-info";
import {LockInfo} from "./lock-info";

export class ThreadInfo extends Thread{

    public state : string;
    public blocked_count : number;
    public blocked_time : number;
    public lock_name : string;
    public lock_owner_id : number;
    public lock_owner_name : string;
    public waited_count : number;
    public waited_time : number;
    public in_native : boolean;
    public suspended : boolean;
    public locked_monitors : MonitorInfo[];
    public locked_synchronizers : LockInfo[];
    public stack_trace : string[];
}
