import {LockInfo} from "./lock-info";
/**
 * @author angelndevil2 on 16. 10. 26.
 */

export class MonitorInfo extends LockInfo {
    public locked_tack_depth : number;
    public locked_stack_frame : string;
}

