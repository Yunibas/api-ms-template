const axios = require('axios')
const { PubSubAdapter } = require('@yunibas/core')

const BASEURL =
   'https://us-central1-yunibas-prms-dev.cloudfunctions.net/schemavalidator-api'

type PublishMessageProps = {
   severity: string
   tenant_ref: string
   action: string
   target_ref: string
   request: Record<string, unknown> | string
   response: Record<string, unknown> | string
   success: boolean
}

module.exports = class Utils {
   publishMessage(props: PublishMessageProps): void {
      const pubsub = new PubSubAdapter()

      const {
         severity = 'INFO',
         tenant_ref,
         action,
         target_ref,
         request,
         response,
         success,
      } = props
      const payload = {
         severity,
         log_name: 'LoggerEvent',
         message: {
            env: process.env.NODE_ENV ?? 'development',
            tenant_ref,
            timestamp: new Date().toUTCString(),
            service: 'api-ms-template',
            process: 'tenant.service',
            action,
            actor_ref: null,
            target_ref,
            request,
            response,
            success,
         },
      }
      if (process.env.NODE_ENV === 'production')
         pubsub.publishMessage({
            topic: 'LogEventTopic',
            message: payload,
         })
   }

   async validateSchema(schema: string, obj: Record<string, unknown>) {
      try {
         const result = await axios.post(`${BASEURL}/${schema}`, obj)
         if (result.status === 200) return true
         return false
      } catch (error) {
         if (error instanceof Error) return error
         return new Error('Error validating schema')
      }
   }
}
