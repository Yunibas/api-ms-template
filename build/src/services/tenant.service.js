"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service = require('./service');
const TenantRepository = require('../repositories/tenant.repository');
const Utils = require('../lib/utils');
const utils = new Utils();
module.exports = class TenantService extends Service {
    constructor() {
        super();
        this.repo = new TenantRepository();
    }
    async getTenant(props) {
        console.log('service', 'getTenant', 'props', props);
        const result = await this.repo.getTenant(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: `/tenants/${props.tenant_id}`,
            action: 'get_tenant',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
    async getTenants() {
        const result = await this.repo.getTenants();
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'get_tenants',
            target_ref: '',
            request: '',
            response: result,
            success: !!result,
        });
        return result;
    }
    async createTenant(props) {
        const result = await this.repo.createTenant(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'create_tenant',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
};
//# sourceMappingURL=tenant.service.js.map