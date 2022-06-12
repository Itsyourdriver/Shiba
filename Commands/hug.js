const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hug",
    aliases: [],
    description: "Give a user a nice little hug!",
    category: "utility",
    usage: "hug <@user>",
    run: async (client, message, args) => {
     message.channel.send(`👐 ${message.author} sent a hug to ${message.mentions.members.first()}`);
    }
}