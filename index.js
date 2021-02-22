/// Open source shiba-bot
/// This code is NOT allowed to be used to host your own copy of the bot. (Read License.md)

/// web framework, is required for repl.it hosting.
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('main.html')); // was going to send you to the webpage, scrapped that

app.listen(port, () => console.log(`localhost at http://localhost:${port}`));


const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const rateLimit = require("express-rate-limit");


//old activity setting code
/// may be used when I feel like it

///client.once('ready', () => {
  ///  console.log('Ready!');
  //  client.user.setActivity('2 Servers | s!help', { type: 'WATCHING'}).catch(console.error);
//});

//client.once('ready', () => {
   // console.log('Ready!');
   // setInterval(() => {
   //     client.user.setActivity(client.guilds.cache.size + " Servers | s!help", {type: 'WATCHING'}).catch(console.error);
    //}, 10000);
//});
///

client.once('ready', () => {
   console.log('Ready!');
   setInterval(() => {
   client.user.setActivity(client.guilds.cache.size + " Servers | s!help", {
  type: "STREAMING",
  url: "https://www.twitch.tv/itsyourdriver_"})
.catch(console.error);
    }, 10000);
});


client.commands = new Discord.Collection()
const fs = require("fs")
fs.readdir("./Commands/", (error, files) => {
    files = files.filter(f => f.endsWith(".js"))
    files.forEach(f => {
        const command = require(`./Commands/${f}`)
        client.commands.set(command.name, command)
        console.log(`Command ${command.name} was loaded!`)
    });
});


client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).split(" ")
    const command = args.shift()
    const cmd = client.commands.get(command)
    if (cmd) {
        cmd.run(client, message, args)
    } else return;
});

client.login(process.env.DISCORD_TOKEN);
/// DDoS Protection, I don't exactly know how good this is, and I don't want to find out.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});
/// I should move to cloudfare, seriously. (for hosting and protection.)
app.use(limiter);

