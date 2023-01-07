const Configuration = require('./Configuration')
const TelegramManager = require('./telegram/TelegramManager')

class Application {
    async register() {
        this.config = new Configuration()
        this.telegram = new TelegramManager(this)
    }

    async connect() {
        this.telegram.connect()
    }
}

module.exports = new Application()
