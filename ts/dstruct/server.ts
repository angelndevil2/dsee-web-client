/**
 * @author angelndevil2 on 16. 10. 25.
 */

export class Server {

    public addr : string;
    public httpPort : string;

    public connectionString() : string {
        return this.addr+ (this.httpPort == null ? "" :  ":"+this.httpPort);
    }
}
