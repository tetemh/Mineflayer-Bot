const mineflayerViewer = require('prismarine-viewer').mineflayer
const {
    viewMessageConsole
} = require('../function')

module.exports = {
    main: (bot, args) => {
        viewMessageConsole(bot)
        mineflayerViewer(bot, { port: 3007, firstPerson: true })
    }
}