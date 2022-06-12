const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "startpoll4",
    aliases: [],
    description: "Start a vote on a question you have.. But with 4 options instead of yes/no.",
    category: "utility",
    usage: "startpoll4 <poll>",
    run: async (client, message, args) => {
        let poll = args.slice(0).join(" ");
        let PollChannel = message.guild.channels.cache.find(channel => channel.name === "polls");
        if (!PollChannel) return message.channel.send("ERROR: Please create a channel named polls for this command to work.");
        const embed = new MessageEmbed()
            .setTitle("User Poll")
            .setDescription(poll)
            .setColor("RANDOM")
            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)
            .setTimestamp()
        PollChannel.send(embed).then(msg => {
            msg.react("1️⃣")
            msg.react("2️⃣")
            msg.react("3️⃣")
            msg.react("4️⃣")
        message.channel.send("Your poll has been recorded and posted!");
        });
    }
}