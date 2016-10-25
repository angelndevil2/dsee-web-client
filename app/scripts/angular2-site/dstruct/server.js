/**
 * @author angelndevil2 on 16. 10. 25.
 */
"use strict";
var Server = (function () {
    function Server() {
    }
    Server.prototype.connectionString = function () {
        return this.addr + (this.httpPort == null ? "" : ":" + this.httpPort);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map