const { disconnect } = require("../../function");

module.exports = {
    main: (bot) => {
        let notLogin = true;
        bot.once('spawn', () => {
            disconnect(bot)
            bot.on("windowOpen", window => {
                if (window.title == `{"text":"          §a§lSurvival§2§lWorld"}`) {
                    notLogin = false;
                    bot.clickWindow(22, 0, 0)
                    bot.clickWindow(20, 0, 0)

                    setTimeout(() => {
                        bot.chat('/spawn')
                    }, 2000)
                }
            })

            setTimeout(() => {
                if (notLogin) bot.chat('/login testtest')
            }, 2000);
        })
    }
}