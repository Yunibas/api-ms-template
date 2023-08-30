export {}
import { Request, Response, NextFunction } from 'express'
const HttpController = require('./http.controller')
const TenantCommands = require('../commands/tenant.commands')
const TenantModel = require('../models/tenant.model')

const command = new TenantCommands()
const model = new TenantModel()

module.exports = class TenantHttpController extends HttpController {
   constructor() {
      super()
   }

   getTenant = async (
      req: Request,
      res: Response,
      next: NextFunction
   ): Promise<void> => {
      try {
         // Validate request
         if (!model.get(req.params)) {
            res.status(400).send('Malformed request')
            return void 0
         }

         // Perform request
         const result = await command.getTenant(req.params)
         res.status(200).json(result)
      } catch (error) {
         next(error)
      }
   }

   getTenants = async (
      req: Request,
      res: Response,
      next: NextFunction
   ): Promise<void> => {
      try {
         // No validation needed

         const result = await command.getTenants()
         console.log('http_controller', 'getTenants', result)
         res.status(200).json(result)
      } catch (error) {
         next(error)
      }
   }

   createTenant = async (
      req: Request,
      res: Response,
      next: NextFunction
   ): Promise<void> => {
      try {
         console.log('req', req.body)
         const validation = await model.get(req.body)
         if (!validation.success) {
            res.status(400).send(JSON.stringify(validation.errors))
            return void 0
         }
         const result = await command.createTenant(req.body)
         console.log('http_controller', 'createTenant', result)
         res.status(201).json(result)
      } catch (error) {
         next(error)
      }
   }
}
