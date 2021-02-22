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
    { name: "s!startpollyesno", value:  "s!startpollyesno <poll> - Creates a poll in a channel named polls. (up or down, yes or no.)", inline: true },
    { name: "s!startpoll2", value:  "s!startpoll2 <poll> - Creates a poll in a channel named polls. (one or two, pancakes or waffles?) These stack up being, s!startpoll3, s!startpoll4, which have the same outcome but with different amounts of reactions, hence the number.", inline: true },
    { name: "s!suggest", value:  "s!suggest <suggestion> - Puts the suggestion in a channel named Suggestions.", inline: true },
    { name: "s!ping", value:  "s!ping - Gives the bot latency in MS.", inline: true },
    { name: "s!hug", value:  "s!hug <@user> - Give a user a nice little hug!", inline: true })
            .setColor("RED")
            .setTimestamp()
     message.channel.send(embed);
    }
}



    ///"s!support - Gives the link of the support server", " s!shiba - Gives a random Shiba-Inu Image", "s!shiba - Gives a random Shiba-Inu image.", "s!shiba - Gives a random Shiba-Inu image", "s!purge <number of messages> - Removes the amount of messages above the command. <br>  s!help - Displays commands", "s!help - Displays commands", "s!startpoll <poll> & s!startpollchoice <poll> - Creates a poll in a channel named polls. Choice version is a choice 1 and 2, where normal poll is a yes or no.", "s!ping - Gives the bot latency in MS.", "s!suggest <suggestion> - Puts the suggestion in a channel named Suggestions."