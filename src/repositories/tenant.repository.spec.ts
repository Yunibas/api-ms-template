export {}
jest.mock('@yunibas/core')

const TenantRepository = require('./tenant.repository')
const { FirestoreAdapter } = require('@yunibas/core')

describe('testing tenant repository', () => {
   beforeEach(() => {
      FirestoreAdapter.mockClear()
   })

   it('should create a new tenant', async () => {
      const repo = new TenantRepository()

      const data = {
         federal_id: '4816110',
         long_name: 'Cypress-Fairbanks ISD',
         short_name: 'Cy-Fair ISD',
      }

      await repo.createTenant(data)

      const mockAdapter = FirestoreAdapter.mock.instances[0]
      const mockResponse = mockAdapter.addDoc.mock.calls[0][0]

      expect(FirestoreAdapter).toHaveBeenCalledTimes(1)
      expect(mockResponse).toEqual({
         collection: 'tenants',
         data,
      })
   })
})
