export {}
import { Request, Response } from 'express'
const Controller = require('./controller')

module.exports = class HttpController extends Controller {
   constructor() {
      super()
   }

   ping = (req: Request, res: Response): void => {
      res.sendStatus(200)
   }
}
