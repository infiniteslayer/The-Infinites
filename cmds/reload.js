const main = require("../bot.js");

module.exports.run = async (bot, message, args) => {
    main.load();
}

module.exports.help = {
    name: "reload",
    usage: "reload"
}