export {}
const { Router } = require('express')
const Routes = require('./routes')
const TenantHttpController = require('../controllers/tenant.http.controller')

module.exports = class TenantRoutes extends Routes {
   path = '/tenants'
   router = Router()
   controller = new TenantHttpController()

   constructor() {
      super()
      this.initializeRoutes()
   }

   initializeRoutes() {
      this.router.get(`${this.path}/:id`, this.controller.getTenant)
      this.router.get(`${this.path}`, this.controller.getTenants)
      this.router.post(`${this.path}`, this.controller.createTenant)
      // this.router.patch(`${this.path}/:id`, this.controller.updateTenant)
      // this.router.delete(`${this.path}/:id`, this.controller.deleteTenant)
   }
}
