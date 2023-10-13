"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const Routes = require('./routes');
const HttpController = require('../controllers/http.controller');
module.exports = class IndexRoutes extends Routes {
    constructor() {
        super();
        this.path = '/';
        this.router = Router();
        this.controller = new HttpController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.controller.ping);
    }
};
//# sourceMappingURL=index.routes.js.map