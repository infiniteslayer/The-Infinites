const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`Information for BOT`, message.guild.iconURL)
        .setColor("#0ba333")
        .addField("BOT OWNER", `Mc Slay`, true)
        .addField("Server owner", `${message.guild.owner}`, true)
        .addField(":busts_in_silhouette: Members", `${message.guild.memberCount}`, true)
        .addField(":earth_africa: Server Region", `${message.guild.region}`, true);

    message.channel.send(embed);
}

module.exports.help = {
    name: "botinfo",
    usage: "botinfo"
}