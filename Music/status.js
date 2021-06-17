const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  name: "status",
  aliases: ["status"],
  cooldown: 10,
  description: "Change bot's status!",
  execute(message, args) {
   
    if(message.author.id != '844595643443183635') {
    const noperms = new MessageEmbed()
    .setDescription("You Can't Use that Command. Only Bot Owner Can Use it.");
    message.channel.send(noperms)
    return;
    }
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
            .setDescription('Please Provide Me A Status!\n\nUsage: \`\`\`+status <Name> <Type>\`\`\`')
            .setColor("#303037");
            message.channel.send(`<@${message.author.id}>`, embed)
            return;
        }
        client.user.setActivity(args.slice(1).join(` `).substr(0, 50), {
        type: args[0].toUpperCase(),
        url: `https://twitch.tv/milratodiscordbot`
      }).catch(console.error)
        const embed = new Discord.MessageEmbed()
        .setDescription(`My Status Has Been Changed To **${args.join(' ')}**`)
        .setColor("#303037");
        message.channel.send(embed)
    }
}
