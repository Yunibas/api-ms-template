export {}
const { Router } = require('express')
const Routes = require('./routes')
const HttpController = require('../controllers/http.controller')

module.exports = class IndexRoutes extends Routes {
   path = '/'
   router = Router()
   controller = new HttpController()

   constructor() {
      super()
      this.initializeRoutes()
   }

   initializeRoutes() {
      this.router.get(`${this.path}`, this.controller.ping)
   }
}
