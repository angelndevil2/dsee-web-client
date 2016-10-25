/**
 * @author angelndevil2 on 16. 10. 25.
 */


import {IServerListService} from "./iserver-list.service";
import {Server} from "../dstruct/server";
import {Injectable} from "@angular/core";

@Injectable()
export class ServerListService implements IServerListService {

    private currentServer :Server= new Server();

    getCurrentServer(): Server {
        this.currentServer.addr = "192.168.100.241";
        this.currentServer.httpPort = "1080";
        return  this.currentServer;
    }

}
