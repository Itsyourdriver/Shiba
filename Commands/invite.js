const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    aliases: [],
    description: "invite the bot!",
    category: "utility",
    usage: "invite",
    run: async (client, message, args) => {
      message.channel.send("Invite the bot to your server: https://discord.com/oauth2/authorize?client_id=778751661245333577&permissions=2147871808&scope=bot");
    }
}
