"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application = void 0;
var server_1 = require("./server");
var application = new server_1.AppServer();
exports.application = application;
application.init();
application._application.listen(process.env.PORT);
//# sourceMappingURL=app.js.map