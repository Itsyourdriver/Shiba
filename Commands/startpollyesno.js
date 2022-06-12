const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "startpollyesno",
    aliases: [],
    description: "Start a vote on a question you have..",
    category: "utility",
    usage: "startpollyesno <poll>",
    run: async (client, message, args) => {
        let poll = args.slice(0).join(" ");
        let PollChannel = message.guild.channels.cache.find(channel => channel.name === "polls");
        if (!PollChannel) return message.channel.send("ERROR: Please create a channel named Polls for this command to work.");
        const embed = new MessageEmbed()
            .setTitle("User Poll")
            .setDescription(poll)
            .setColor("RANDOM")
            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)
            .setTimestamp()
        PollChannel.send(embed).then(msg => {
            msg.react("👍")
            msg.react("👎")
        message.channel.send("Your poll has been recorded and posted!");
        });
    }
}