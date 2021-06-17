const { MessageEmbed } = require('discord.js')


module.exports = {
  info: {
    name: "ping",
    description: "Shows  Latency and API of bot",
    aliases: [" "],
  },

    run: async function (client, message, args) {
			const m = await message.channel.send("Please wait .....")
  
  const embed = new MessageEmbed()
  .setTitle(":<a:s_ping:854540349426237441> Pong!")
  .setColor('#303037')
  .setTimestamp()
  .addField("<a:s_uptime:850689026100035584> Bot Latency", `\`\`\`${m.createdTimestamp - message.createdTimestamp}m\`\`\`s`, true)
  .addField("<a:s_uptime:850689026100035584> API Latency", `\`\`\`${Math.round(client.ws.ping)}ms\`\`\``, true)
  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

  m.edit(embed)

	
    }
}
