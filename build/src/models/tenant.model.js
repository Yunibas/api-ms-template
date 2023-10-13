"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model = require('./model');
const Utils = require('../lib/utils');
const utils = new Utils();
module.exports = class TenantModel extends Model {
    constructor() {
        super();
    }
    async create(props) {
        // console.log('model', 'create', 'props', props)
        return true;
        // return await utils.validateSchema('tenant_create', props)
    }
    async get(props) {
        return await utils.validateSchema('tenant_get', props);
    }
};
//# sourceMappingURL=tenant.model.js.map