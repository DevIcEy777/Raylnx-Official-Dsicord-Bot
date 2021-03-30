const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "ping",
    description: "Give Information About Bot's current ping!",
    usage: "[ping]",
    aliases: ["Ping"],
  },

  run: async function (client, message, args) {
    
    let ping = new MessageEmbed()
    .setTitle(`<a:CB_RainbowHeart:793083433252421652> Ping of ${client.user.username}`)
    .setDescription(`<a:CB_RainbowHeart:793083433252421652> Is this Really my Ping? Yeah Mine lol, **Client's Ping** ${Date.now()-message.createdTimestamp} and **API's Ping** ${Math.round(client.ws.ping)}`)
    .setColor("BLUE")
    return message.channel.send(ping);
  },
};
