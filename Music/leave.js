const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "disconnect",
    aliases: ["dc", "disconnect", "nikal"],
    description: "Leaves VC",
    async execute(message, args) {
        const { channel } = message.member.voice;
    
        if(!message.member.hasPermission('MOVE_MEMBERS')){
          const noperms = new MessageEmbed()
          .setDescription('<:s_voice:854540365112541224> You Do Not Have Perms To Execute This Command! You Need `MOVE MEMBER` Perm To Execute This Command!')
          .setColor("#303037")
          return message.channel.send(noperms)
        }
        const serverQueue = message.client.queue.get(message.guild.id);

        const dcneedvc = new MessageEmbed()        
        .setDescription("<:s_voice:854540365112541224> You need to join my voice channel - to disconnect me!")
        .setColor("#303037")

        const dcembed = new MessageEmbed()
        .setDescription("<:s_voice:854540365112541224> Sucessfully left **${channel.name}**.")
        .setColor("#303037")

        
        const dccembed = new MessageEmbed()
        .setDescription(`<:s_voice:854540365112541224> You must be in ${msg.guild.me.voice.channel}**`)
        .setColor("#303037")

        if (!channel) return message.reply(dcneedvc).catch(console.error);
        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.reply(dccembed).catch(console.error);

            message.member.voice.channel.leave();
            message.channel.send(dcembed)        
           
        }
    }



    console.log("DC / Disconnect working")
