const CommandHandler = require('./handlers/commandHandler');
const PicturesHandler = require('./handlers/pictureHandler');
const { Telegraf } = require('telegraf');

class TelegramManager {
    constructor(app) {
        this.app = app
        this.commandHandler = new CommandHandler(this)
        //this.buttonHandler = new TextHandler(this)
        this.pictureHandler = new PicturesHandler(this)
        this.bot = new Telegraf(this.app.config.properties.telegram.botToken);
        this.bot.launch()
    }

    connect() {
        this.bot.on('text', (msg) => {
            this.commandHandler.onMessage(msg)
        });

        this.bot.on('message', ctx => {
            this.pictureHandler.onMessage(ctx)
        });
    }
}

module.exports = TelegramManager
