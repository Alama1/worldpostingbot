const fs = require('fs')
require('dotenv').config()


class Configuration {
    properties = {
        telegram: {
            botToken: process.env.TOKEN,
            channelId: null,
        },
        express: {
            port: 8880,
            enabled: true
        }
    }
    constructor() {
    }
}

module.exports = Configuration
