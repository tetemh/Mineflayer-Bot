module.exports = {
    viewMessageConsole: (bot) => {
        bot.on('message', (message) => {
            console.log(message.toAnsi())
        })
    },

    loadServeur: (bot, prompt, fs) => {
        let server = (process.env.debug ? process.env.host : prompt('IP of server : '))
        fs.access(`./server/${server}`, error => {
            if (error) {
                module.exports.disconnect(bot)
            } else {
                // console.log(`./server/${server}/index`)
                let { main } = require(`./server/${server}/index`)
                main(bot)
            }
        })
    },

    loadBotOption: () => {
        const host = (process.env.debug == 'true' ? process.env.host : prompt(`Host : `))
        const version = (process.env.debug == 'true' ? process.env.mc_version : prompt(`Version : `))
        const username = (process.env.debug == 'true' ? process.env.mc_username : prompt(`Username : `))
        const password = (process.env.debug == 'true' ? process.env.mc_password : prompt(`Password (${username}) : `))

        return {
            host: host,
            username: username,
            auth: process.env.auth,
            port: process.env.port,
            version: version,
            password: password
        }
    },

    disconnect: (bot) => {
        bot.end()
        console.log('Bot disconnected')
        process.exit()
    }
}