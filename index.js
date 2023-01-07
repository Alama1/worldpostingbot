'use strict'
process.title = 'World posting bot'

const app = require('./src/Application')

app
    .register()
    .then(() => {
        app.connect()
    })
    .catch(err => {
        console.error(err)
    })
