const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new discord.RichEmbed()
            .setColor("#0ba333")
            .addField("8BALL", `Fun Command`)
            .addField("BOTINFO", `Information`)
            .addField("DM", `Fun Command`)
            .addField("BAN", `Mod Comamnd`)
            .addField('HI', `Fun Command`)
            .addField("INVITE", `Information`)
            .addField("KICK", `Mod Command`)
            .addField("MUTE", `Mod Command`)
            .addField("PING", `Fun Command`)
            .addField("PURGE", `Mod Command`)
            .addField("SAY", `Fun Command`)
            .addField("SERVERINFO", `Information`)
            .addField("UNMUTE", `Mod Command`)
            .addField("USERINFO", `Information`)
            .addField("VERIFY", `Fun Command`)

        message.author.send(embed)
}

module.exports.help = {
    name: "help",
    usage: "help"
}