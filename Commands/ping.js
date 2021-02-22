

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: [],
    description: "Ping! Pong!",
    category: "utility",
    usage: "ping",
    run: async (client, message, args) => {
     message.channel.send(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}