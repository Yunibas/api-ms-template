export {}
const Commands = require('./commands')
const TenantService = require('../services/tenant.service')

type CreateTenantProps = Record<string, unknown>
type CreateTenantResponse = Record<string, unknown>
type GetTenantProps = Record<string, unknown>
type GetTenantResponse = Record<string, unknown>
type GetTenantsResponse = Record<string, unknown>[]

const service = new TenantService()

module.exports = class TenantCommands extends Commands {
   constructor() {
      super()
   }

   getTenant = async (props: GetTenantProps): Promise<GetTenantResponse> => {
      const result = await service.getTenant(props)
      return result
   }

   getTenants = async (): Promise<GetTenantsResponse> => {
      const result = await service.getTenants()
      return result
   }

   createTenant = async (
      props: CreateTenantProps
   ): Promise<CreateTenantResponse> => {
      const result = await service.createTenant(props)
      return result
   }
}
