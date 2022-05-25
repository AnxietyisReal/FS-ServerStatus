const { MessageEmbed } = require('discord.js');
const axios = require("axios");
const ms = require("ms");

module.exports = {
    name: 'players',
    description: 'Displays how many players are on server.',
    async execute(message) {
        const embed = new MessageEmbed()
        .setColor('#FBAABF')
        const res = await axios.get('http://103.193.80.29:8120/feed/dedicated-server-stats.json?code=058e2a59bcd686de178691fedae13e98', //'Insert your Farming Simulator 22 XML url here, but change the .xml to .json',
                    {
                     timeout: 2000,
                     headers:
                        { 'User-Agent':'Customize your User-Agent string here. If removed, it defaults to axios/0.27.2' }
                    })
        
        .catch(function (error) {
            message.channel.send('I\'m unable to reach the Farming Simulator Webserver. Is the host down?')
            // Customizable error message.
        });
        
        const playerInfo = [`\u200b`];

        await res.data.slots.players.forEach(player => {
        if (player.name === undefined) return;
        const time = ms(`${player.uptime}m`)
        playerInfo.push((player.isAdmin) ? `\`${player.name}\` **|** ***Admin*** **|** ${Math.floor(time/(1000*60*60))}h ${Math.floor(time/(1000*60))%60}m` : `\`${player.name}\` **|** ${Math.floor(time/(1000*60*60))}h ${Math.floor(time/(1000*60))%60}m`)
        });

        embed.setTitle(res.data.server.name +`\nServer version: `+ res.data.server.version)
        embed.setDescription(`Current Map: `+ res.data.server.mapName + `\nServer Time: ${('0' + Math.floor((res.data.server.dayTime/3600/1000))).slice(-2)}:${('0' + Math.floor((res.data.server.dayTime/60/1000)%60)).slice(-2)}`)
        embed.addFields(
         { name: 'Players', value: playerInfo.join('\n'), inline: true },
         { name: `**(`+ res.data.slots.used + `/` + res.data.slots.capacity +`)**`, value: `\u200b`, inline: true },
        )

        const players = res.data.slots.used + '/' + res.data.slots.capacity
        console.log(players)

        if (res.data.slots.capacity === 0) {
            message.channel.send('I believe the server is offline, so I can\'t show the embed right now. :sweat_smile:')
            // Customizable error message.
        } else (message.reply({embeds: [embed], allowedMentions: {repliedUser: false}}))
    } 
}
