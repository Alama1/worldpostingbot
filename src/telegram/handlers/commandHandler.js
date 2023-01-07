const fs = require("fs");
const axios = require("axios");

class CommandHandler {
    constructor(telegram) {
        this.telegram = telegram
        this.commands = new Map()
        let commandFiles = fs.readdirSync('./src/telegram/commands').filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const command = new (require(`../commands/${file}`))(telegram)
            this.commands.set(command.name, command)
        }
    }

    async onMessage(event) {
        let reqData = {
            update: event.update,
            text: event.update.message.text
        }
        axios.post('https://dev.gooods.biz/index.php', {url:'action/vidat/method/tg', action:'vidat', method:'tg', payload: JSON.stringify(reqData)}).then(res => {
            event.reply(res.data.message)
        });
    }
}

module.exports = CommandHandler
