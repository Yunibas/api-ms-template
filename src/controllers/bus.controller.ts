export {}
const Controller = require('./controller')
const AuthCommands = require('../commands/auth_commands')

type CreateUserProps = Record<string, unknown>
type CreateUserResponse = Record<string, unknown>

const authCommands = new AuthCommands()

module.exports = class BusController extends Controller {
   constructor() {
      super()
   }

   createUser = (props: CreateUserProps): CreateUserResponse => {
      const { firstName, lastName, emailAddress } = props
      const payload = {
         name: `${firstName} ${lastName}`,
         email: emailAddress,
      }
      const result = authCommands.createUser(payload)
      console.log('bus_controller', 'createUser', result)
      return result
   }
}
