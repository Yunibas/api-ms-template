"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller = require('./controller');
const AuthCommands = require('../commands/auth_commands');
const authCommands = new AuthCommands();
module.exports = class BusController extends Controller {
    constructor() {
        super();
        this.createUser = (props) => {
            const { firstName, lastName, emailAddress } = props;
            const payload = {
                name: `${firstName} ${lastName}`,
                email: emailAddress,
            };
            const result = authCommands.createUser(payload);
            console.log('bus_controller', 'createUser', result);
            return result;
        };
    }
};
//# sourceMappingURL=bus.controller.js.map