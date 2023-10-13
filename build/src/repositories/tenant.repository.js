"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository = require('./repository');
const { FirestoreAdapter } = require('@yunibas/core');
module.exports = class TenantRepository extends Repository {
    constructor() {
        super();
        this.adapter = new FirestoreAdapter();
    }
    async getTenant(props) {
        const id = props.id;
        const tenant = await this.adapter.getDoc({
            collection: 'tenants',
            id,
        });
        return tenant;
    }
    async getTenants() {
        const tenants = await this.adapter.getDocs({
            collection: 'tenants',
        });
        return tenants;
    }
    async createTenant(props) {
        const result = await this.adapter.addDoc({
            collection: 'tenants',
            data: props,
        });
        return result;
    }
};
//# sourceMappingURL=tenant.repository.js.map