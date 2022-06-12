const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "vote",
    aliases: [],
    description: "Vote for the bot",
    category: "utility",
    usage: "vote",
    run: async (client, message, args) => {
      message.channel.send("Want to vote for the bot? Vote here: https://top.gg/bot/778751661245333577/vote (Perks may come in the future so stay tuned!)");
    }
}
