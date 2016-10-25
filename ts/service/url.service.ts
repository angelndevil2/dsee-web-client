/**
 * @author angelndevil2 on 16. 10. 25.
 */


import {Injectable} from "@angular/core";
import {ServerListService} from "./server-list.service";

@Injectable()
export class UrlService {

    private threadListUri : string = '/thread/list';
    private threadInfoUri : string = '/thread/info';
    private protocol : string = "http";

    constructor(private servers : ServerListService) {
    }

    public getThreadListUrl() : string {

        let s = this.servers.getCurrentServer();

        if (s == null) throw Error("current selected server is null");
        return this.protocol + "://" + s.connectionString() + this.threadListUri;
    }

    public getThreadInfoUrl(id : number) : string {

        let s = this.servers.getCurrentServer();
        if (s == null) throw Error("current selected server is null");
        return this.protocol + "://" + s.connectionString() + this.threadInfoUri + "/" + id;
    }

    public setProtocol(protocol : string) {
        this.protocol = protocol;
    }

    public getProtocol() : string {
        return this.protocol;
    }
}
