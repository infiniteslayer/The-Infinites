const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!config.maintainers.includes(message.author.id)) return message.reply("You are not the owner of this bot!");

    try {
        const code = args.join(" ");

        if (code.indexOf("config.token") !== -1) return message.reply("The hell you tryna do?!");

        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(evaled, { code: "xl" });
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
}

module.exports.help = {
    name: "eval",
    usage: "eval <js>"
}