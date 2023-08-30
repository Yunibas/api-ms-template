export {}
const Repository = require('./repository')
const { FirestoreAdapter } = require('@yunibas/core')

type CreateTenantProps = Record<string, unknown>
type CreateTenantResponse = Record<string, unknown> | Error
type GetTenantProps = Record<string, unknown>
type GetTenantResponse = Record<string, unknown> | Error
type GetTenantsResponse = Record<string, unknown>[] | Error

module.exports = class TenantRepository extends Repository {
   constructor() {
      super()
      this.adapter = new FirestoreAdapter()
   }

   async getTenant(props: GetTenantProps): Promise<GetTenantResponse> {
      const id = props.tenant_id
      const tenant = await this.adapter.getDoc({
         collection: 'tenants',
         id,
      })
      return tenant
   }

   async getTenants(): Promise<GetTenantsResponse> {
      const tenants = await this.adapter.getDocs({
         collection: 'tenants',
      })
      return tenants
   }

   async createTenant(props: CreateTenantProps): Promise<CreateTenantResponse> {
      const result = await this.adapter.addDoc({
         collection: 'tenants',
         data: props,
      })
      return result
   }
}
