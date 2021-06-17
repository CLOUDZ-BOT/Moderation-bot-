const { Client, Collection, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: `help`,
  description: `Help Commands`,
  aliases: ["h"],
  cooldown: 2,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {

    const help = new MessageEmbed()
    .setAuthor("Shadow Music Help")
		.setDescription("Hey my prefix in this server is **+**")
    .addField("<a:s_playing:854540645507137576> Music","`join`, `disconnect`, `play`, `loop`, `move`, `pause`, `now playing`, `queue`, `radio`, `remove`, `search`, `shuffle`, `skip`, `skipto`, `stop`, `volume`,")
    .addField("<a:s_music:854540431932522506> Filters", "`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `surrounding`, `pulsator`, `subboost`, `chorus`, `karaoke`, `sofa`, `desilencer`, `clear`")
    .addField("<a:s_shards:850674068034551818> General", "`invite`, `ping`, `uptime`,`bug`,feedback ")
    .setColor("#303037");
    message.channel.send(help)
    

  }
}
