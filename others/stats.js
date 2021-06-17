const { version } = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    info: {
        name: "stats",
        description: "Check the stats of the bot", 
				aliases: [],
    },

    run: async function (client, message, args) {

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**Shadow Music**`)
  .setDescription(`Hey My name is **${message.client.user.username}** and My Work is to play Music`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "<:s_servers:850674092650659850> Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "👥 Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:s_channel:854566619099037696>  Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<a:s_uptime:850689026100035584> Uptime: ", value: uptime , inline: true },
    { name: "<a:s_ping:854540349426237441> Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: ":film_frames:   RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: ":<a:s_owner:850683566810857472> Bot Owner:",value: `\`\`\`ⴽΛ〆ShiVamPlayZ†ˢᵖʸ\n𝘴
    ꫝꪖᦔꪮ᭙\`\`\``},
  )
  .setColor("#303037")
  .setFooter("Thx For Choosing Shadow Music")  

return message.channel.send(embed);
        }
}
