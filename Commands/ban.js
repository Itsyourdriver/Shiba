const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: [],
    description: "Ban someone, do not hesitate!",
    category: "utility",
    usage: "ban <@user>",
    run: async (client, message, args) => {
      if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " was banned.");
            message.channel.send (`${bannedMember} has been Banned from The Server!`)
        }
            catch(err) {
            console.log(err);
        }
    }
    }
}
}