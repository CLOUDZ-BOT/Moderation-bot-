const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "join",
    aliases: ["j", "247", "24/7", "24x7","aaja","aja"],
    description: "Join your VC for 27/7",
    async execute(message, args) {
        const { channel } = message.member.voice;

        const novc = new MessageEmbed()
        .setDescription(`<:s_voice:854540365112541224> You need to join a voice channel first!`)
        .setColor("#303037");

        const joinn = new MessageEmbed()
        .setDescription("<:s_voice:854540365112541224> Successfully joined **${channel.name}**")
        .setColor("#303037");

        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) return message.channel.send(novc).catch(console.error);
        const nosamechannel = new MessageEmbed()
        .setDescription(`<:s_voice:854540365112541224> You must be in  ${msg.guild.me.voice.channel} to play Music.`)
        .setColor("#303037");
        message.channel.send(joinn)

        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.channel.send(nosamechannel).catch(console.error);


          

            await message.member.voice.channel.join()
        }
    };


    console.log("Join working")
