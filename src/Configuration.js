const fs = require('fs')
require('dotenv').config()


class Configuration {
    properties = {
        telegram: {
            botToken: process.env.TOKEN,
            channelId: null,
        },
    }
    constructor() {
    }
}

module.exports = Configuration
