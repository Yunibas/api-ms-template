"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_framework_1 = require("@google-cloud/functions-framework");
module.exports = class BusApp {
    constructor() {
        this.getEventMessage = (event) => {
            const raw_message = event.data.message.data;
            if (!raw_message)
                throw new Error('Missing message');
            const str_message = Buffer.from(raw_message, 'base64').toString();
            if (!JSON.parse(str_message))
                throw new Error('Malformed message');
            this.message = JSON.parse(str_message);
        };
        (0, functions_framework_1.cloudEvent)('subscriber', (event) => {
            this.getEventMessage(event);
        });
    }
};
//# sourceMappingURL=bus.js.map