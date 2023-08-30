const TenantService = require('./tenant.service')
const TenantRepository = require('../repositories/tenant.repository')
jest.mock('../repositories/tenant.repository')

describe('testing tenant service', () => {
   beforeEach(() => {
      TenantRepository.mockClear()
   })

   it('should call repo method', async () => {
      const service = new TenantService()
      await service.createTenant()
      expect(TenantRepository).toHaveBeenCalledTimes(1)
   })

   it('should create a new tenant', async () => {
      const service = new TenantService()

      const data = {
         federal_id: '4816110',
         long_name: 'Cypress-Fairbanks ISD',
         short_name: 'Cy-Fair ISD',
      }

      await service.createTenant(data)

      const mockRepoInstance = TenantRepository.mock.instances[0]
      const mockResponse = mockRepoInstance.createTenant.mock.calls[0][0]

      expect(TenantRepository).toHaveBeenCalledTimes(1)
      expect(mockResponse).toEqual(data)
   })
})
