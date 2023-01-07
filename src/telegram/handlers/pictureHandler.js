const fs = require("fs");
const axios = require('axios')
const CircularJSON = require('circular-json');

class PicturesHandler {
    constructor(telegram) {
        this.telegram = telegram
    }

    async onMessage(event) {
        let mediaUrl
        if (event.update.message.hasOwnProperty('video')) {
            let video = event.update.message.video
            mediaUrl = await event.telegram.getFileLink(video.file_id)

        }
        if (event.update.message.hasOwnProperty('photo')) {
            let photo = event.update.message.photo
            mediaUrl = await event.telegram.getFileLink(photo[photo.length-1].file_id)
        }
        let reqData = {
            update: event.update,
            url: mediaUrl.href
        }
        axios.post('https://dev.gooods.biz/index.php', {url:'action/vidat/method/tg', action:'vidat', method:'tg', payload: JSON.stringify(reqData)}).then(res => {
            event.reply(res.data.message)
        });
    }

}

module.exports = PicturesHandler
