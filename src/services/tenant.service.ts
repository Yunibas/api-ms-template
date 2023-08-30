export {}
const Service = require('./service')
const TenantRepository = require('../repositories/tenant.repository')
const Utils = require('../lib/utils')

const utils = new Utils()

type CreateTenantProps = Record<string, unknown>
type CreateTenantResponse = Record<string, unknown> | Error
type GetTenantProps = Record<string, unknown>
type GetTenantResponse = Record<string, unknown> | Error
type GetTenantsResponse = Record<string, unknown>[] | Error

module.exports = class TenantService extends Service {
   constructor() {
      super()
      this.repo = new TenantRepository()
   }

   async getTenant(props: GetTenantProps): Promise<GetTenantResponse> {
      const result = await this.repo.getTenant(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: `/tenants/${props.tenant_id}`,
         action: 'get_tenant',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }

   async getTenants(): Promise<GetTenantsResponse> {
      const result = await this.repo.getTenants()

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'get_tenants',
         target_ref: '',
         request: '',
         response: result,
         success: !!result,
      })

      return result
   }

   async createTenant(props: CreateTenantProps): Promise<CreateTenantResponse> {
      const result = await this.repo.createTenant(props)

      utils.publishMessage({
         severity: 'INFO',
         tenant_ref: '',
         action: 'create_tenant',
         target_ref: props.tenant_id,
         request: props,
         response: result,
         success: !!result,
      })

      return result
   }
}
