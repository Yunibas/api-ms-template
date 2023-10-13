"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller = require('./controller');
module.exports = class HttpController extends Controller {
    constructor() {
        super();
        this.ping = (req, res) => {
            res.sendStatus(200);
        };
    }
};
//# sourceMappingURL=http.controller.js.map