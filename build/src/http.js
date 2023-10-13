"use strict";
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
module.exports = class HttpApp {
    constructor(routes) {
        this.app = express();
        this.env = process.env.NODE_ENV || 'development';
        this.port = process.env.PORT || 3000;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            console.log(`Route: ${route.path}`);
            this.app.use('/', route.router);
        });
    }
};
//# sourceMappingURL=http.js.map