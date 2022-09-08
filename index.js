/// Read license before using, thank you :)


const express = require('express');
const app = express();
const port = 3000;

/// webserver for a backup keepalive due to hosting
app.get('/', (req, res) => res.send('Ping!'));

app.listen(port, () => console.log(`localhost at http://localhost:${port}`));

const talkedRecently = new Set();
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");





client.on('debug', console.log);

client.once('ready', () => {
   console.log('Ready!');
   console.log(client.guilds.cache.size);
   client.user.setActivity(client.guilds.cache.size + " Servers | s!help | shiba.ga", {
  type: "WATCHING"}).catch(console.error);
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
   if (talkedRecently.has(message.author.id)) {
            message.reply("Wait 4 seconds before running a command again (The time has been increased to attempt to fix ratelimiting issues, we are very sorry for any issues this may cause.)");
    } else {
    
    const args = message.content.slice(config.prefix.length).split(" ")
    const command = args.shift()
    const cmd = client.commands.get(command)
    if (cmd) { 
        cmd.run(client, message, args)
    } else return;
         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 4000);
    }
  
});



client.login(process.env.DISCORD_TOKEN);
