const mineflayer = require('mineflayer')
const prompt = require("prompt-sync")({ sigint: true })
require('dotenv').config()
const fs = require('fs');

const {
    loadServeur,
    loadBotOption
} = require('./function')

const bot = mineflayer.createBot(loadBotOption())

fs.readdir('./events', (error, files) => {
    files.forEach(file => {
        let event_name = file.slice(0, -3)
        let { main } = require(`./events/${event_name}`)
        bot.once(event_name, (args) => {
            main(bot, args)
        })
    })
})

loadServeur(bot, prompt, fs)