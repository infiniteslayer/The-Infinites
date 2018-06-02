module.exports.run = async (bot, message, args) => {

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.reply("You must mention a user or their ID!");

    if (toMute.id === bot.id) return message.channel.send("...");

    let role = message.guild.roles.find(r => r.name === "Verified");
    if (!role) {
        try {
            role = await message.guild.createRole({
                name: "Verified",
                color: "0ba333",
                permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true,
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    if (toMute.roles.has(role.id)) return message.reply(`is already verified!`);

    await toMute.addRole(role);
    message.reply(`is Verified.`);
}

module.exports.help = {
    name: "verify",
    usage: "verify <mention/ID>"
}