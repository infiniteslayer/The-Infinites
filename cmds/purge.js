const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const deleteCount = parseInt(args[0], 10);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do that.");
    if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("Provide a number between 2 and 100 as the number of messages to purge.");

    const messages = message.channel.fetchMessages({
        limit: deleteCount
    }).then(messages => message.channel.bulkDelete(messages).catch(error => message.reply(`Error: ${error}`)));

    message.channel.send(`Deleted last ${deleteCount} messages.`);
}

module.exports.help = {
    name: "purge",
    usage: "purge <2-100>"
}