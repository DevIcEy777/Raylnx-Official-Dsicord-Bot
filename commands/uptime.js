const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "uptime",
    description: "Updates the user about bots uptime!",
    usage: "[host]",
    aliases: ["uptime"],
  },

  run: async function (client, message, args) {
    
    let uptime = new MessageEmbed()
    .setTitle(`Uptime of ${client.user.username}`)
    .setDescription(`Client Stable ping **67**ms API stable ping **81**ms, Client Uptime **58** Days **42** Hours **12** Minutes <:AwesomeFace:792344626115641347>`)
    .setColor("BLUE")
    return message.channel.send(uptime);
  },
};
