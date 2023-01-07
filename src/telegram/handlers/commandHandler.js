const fs = require("fs");
const axios = require("axios");

class CommandHandler {
    constructor(telegram) {
        this.telegram = telegram
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
