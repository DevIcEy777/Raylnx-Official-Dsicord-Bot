const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "botinfo",
    description: "Give Information About Bot!",
    usage: "[botinfo]",
    aliases: ["about"],
  },

  run: async function (client, message, args) {
    
    let botinfo = new MessageEmbed()
    .setTitle(`<a:TE_heart:802896762120699964> Info of ${client.user.username}`)
    .setDescription(`Hi, I am Raylnx. I am made to provide lag free Immense Music! I am mainly  using the powerful NodeJS buildpack and javascript language. I am 24/7 Online on a VPS! so don't be afraid for Downtimes tho lol! :3 <:AwesomeFace:792344626115641347>`)
    .addFields({
      name: '__Discord Information__', value: '<a:Arrow:790110283968282626> **Client Name**: Raylnx#3955'
    },{
      name: '<a:Arrow:790110283968282626> Client ID:', value:'774488777179004958'
    },{
      name: '<a:Arrow:790110283968282626> Creation date:', value: '18 October 2020'
    },{
      name: '<a:Arrow:790110283968282626> Developers:', value:'<a:Arrow:790110283968282626> **Lead:** Mr.Illegal Gamer#7859 **Frontend and Backend Developer:** Raypixel#9424' 
    },{
      name: '<a:Arrow:790110283968282626> Buildpacks:', value: 'Discord.js'
    },{
      name: '<a:Arrow:790110283968282626> Hosting: ', value:'DigitalOcean® VPS'
    })
    .setColor("BLUE")
    return message.channel.send(botinfo);
  },
};
