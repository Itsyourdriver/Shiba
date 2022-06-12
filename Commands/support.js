const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "support",
    aliases: [],
    description: "Get the invite link to the support server.",
    category: "utility",
    usage: "support",
    run: async (client, message, args) => {
      message.channel.send("Get Support Here: https://discord.gg/7hsMjWkBED");
    }
}
