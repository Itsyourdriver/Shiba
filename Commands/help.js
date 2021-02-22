const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: [],
    description: "Gives the bot commands.",
    category: "utility",
    usage: "help",
    run: async (client, message, args) => {
     
      const embed = new MessageEmbed()
            .setTitle("Bot Commands")
            embed.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: "s!support", value: "s!support - Gives the link of the support server", inline: true },
		{ name: "s!shiba", value: "s!shiba - Gives a random Shiba-Inu image", inline: true },
    { name: "s!help", value:  "s!help - Displays commands", inline: true },
    { name: "s!ban", value:  "s!ban <@user> - Disabled as it's being worked on..", inline: true },
    { name: "s!kick", value:  "s!kick <@user> - Disabled as it's being worked on..", inline: true },
    { name: "s!ping", value:  "s!ping - Gives the bot latency in MS.", inline: true },
    { name: "s!hug", value:  "s!hug <@user> - Give a user a nice little hug!", inline: true })
            .setColor("RED")
            .setTimestamp()
     message.channel.send(embed);
    }
}


/// as I use this code for other help commands, there is a placeholder of commands below:

    ///"s!support - Gives the link of the support server", " s!shiba - Gives a random Shiba-Inu Image", "s!shiba - Gives a random Shiba-Inu image.", "s!shiba - Gives a random Shiba-Inu image", "s!purge <number of messages> - Removes the amount of messages above the command. <br>  s!help - Displays commands", "s!help - Displays commands", "s!startpoll <poll> & s!startpollchoice <poll> - Creates a poll in a channel named polls. Choice version is a choice 1 and 2, where normal poll is a yes or no.", "s!ping - Gives the bot latency in MS.", "s!suggest <suggestion> - Puts the suggestion in a channel named Suggestions."
