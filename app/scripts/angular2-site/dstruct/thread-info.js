/**
 * @author angelndevil2 on 16. 10. 25.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var thread_1 = require("./thread");
var ThreadInfo = (function (_super) {
    __extends(ThreadInfo, _super);
    function ThreadInfo() {
        _super.apply(this, arguments);
    }
    return ThreadInfo;
}(thread_1.Thread));
exports.ThreadInfo = ThreadInfo;
//# sourceMappingURL=thread-info.js.map