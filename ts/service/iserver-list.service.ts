/**
 * @author angelndevil2 on 16. 10. 25.
 */

import {Server} from "../dstruct/server";

export interface IServerListService {

    /**
     * return current selected server
     * @see Server
     */
    getCurrentServer() : Server;
}
