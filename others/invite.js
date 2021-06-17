const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Shadow Music ingeat, Thank you! Consider adding it to your server")
      .setColor("#303037")
      .setAuthor('Shadow Music')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Me to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=854594118789103616&permissions=8&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};