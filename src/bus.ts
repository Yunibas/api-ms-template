import { cloudEvent } from '@google-cloud/functions-framework'

module.exports = class BusApp {
   message

   constructor() {
      cloudEvent<{ message: { data: string } }>('subscriber', (event) => {
         this.getEventMessage(event)
      })
   }

   getEventMessage = (event) => {
      const raw_message = event.data.message.data
      if (!raw_message) throw new Error('Missing message')

      const str_message = Buffer.from(raw_message, 'base64').toString()
      if (!JSON.parse(str_message)) throw new Error('Malformed message')

      this.message = JSON.parse(str_message)
   }
}
