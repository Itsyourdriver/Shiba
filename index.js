/// Read license before using, thank you :)


const express = require('express');
const app = express();
const port = 3000;


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
  client.user.setActivity(client.guilds.cache.size + " Servers | shiba.ga | Shard 0", {
//   client.user.setActivity(client.guilds.cache.size + " Servers | s!help ", {
  type: "WATCHING"}).catch(console.error);
});

client.on(`presenceUpdate`,(member)=>{
    console.log(`${member.user.username} has updated their presence.`)

})


function checkStatus() {
    if (client.users.fetch(botID).presence.status === "offline" ) {
   return true;
} else {
   return false;
}
}

client.setInterval(() => checkPing(), 300000);


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
/// code if it works I'll use to keep statuspage working :D
////  app.close((err) => {
  ///console.log('server closed')
  ///app.exit(err ? 1 : 0)
///})
