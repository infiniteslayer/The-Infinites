const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new discord.RichEmbed()
            .setColor("#0ba333")
            .addField("Academy", ``)
            .addField("Activities", `@everyone Go to Academy Lets get some Activities`)
            .addField("Player", `${message.guild.user}`)

        message.channel.send(embed)
}

module.exports.help = {
    name: "academy",
    usage: "academy"
}