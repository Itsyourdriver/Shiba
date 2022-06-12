const { MessageEmbed } = require("discord.js");
const cooldown = new Set();
module.exports = {
    name: "8ball",
    aliases: [],
    description: "Get some help, from the most unreliable place.",
    category: "utility",
    usage: "8ball <question>",
    run: async (client, message, args) => {

           let results =["Certainly", "Give me time to think.", "100% No.", "The answer is frozen in ice.", "Possibly","Only time will tell.", "You'll have better luck winning the lottery then finding an answer to that."];
       // let result = results[Math.floor(Math.random() *results.length)-1];
       let result = Math.floor(Math.random() * results.length);
       message.channel.send(results[result])
      
    }
   
}