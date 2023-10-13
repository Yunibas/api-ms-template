"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commands = require('./commands');
const TenantService = require('../services/tenant.service');
const service = new TenantService();
module.exports = class TenantCommands extends Commands {
    constructor() {
        super();
        this.getTenant = async (props) => {
            console.log('commands', 'getTenant', 'props', props);
            const result = await service.getTenant(props);
            return result;
        };
        this.getTenants = async () => {
            const result = await service.getTenants();
            return result;
        };
        this.createTenant = async (props) => {
            const result = await service.createTenant(props);
            return result;
        };
    }
};
//# sourceMappingURL=tenant.commands.js.map