const Configuration = require('./Configuration')
const TelegramManager = require('./telegram/TelegramManager')
const ExpressManager = require('./express/expressManager')

class Application {
    async register() {
        this.config = new Configuration()
        this.telegram = new TelegramManager(this)
        this.express = new ExpressManager(this)
    }

    async connect() {
        this.telegram.connect()
        this.express.initialize()

    }
}

module.exports = new Application()
