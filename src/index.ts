const functions = require('@google-cloud/functions-framework')

const TRIGGER = process.env.TRIGGER

if (TRIGGER === 'http') {
   const HttpApp = require('./http')
   const IndexRoutes = require('./routes/index.routes')
   const TenantRoutes = require('./routes/tenant.routes')

   const app = new HttpApp([new IndexRoutes(), new TenantRoutes()])
   functions.http('securesync_webservice', app.getServer())
}

// if (TRIGGER === 'event') {
//    const BusController = require('./controllers/bus_controller')
//    const bus = new BusController()
// }
// }
