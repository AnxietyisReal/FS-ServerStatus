const { MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
    name: 'fill',
    description: 'Fetches fill level and what vehicle is it in on MP server.',
    async execute(message) {
        const embed = new MessageEmbed()
        .setColor('#FBAABF')
        const res = await axios.get('http://103.193.80.29:8120/feed/dedicated-server-stats.json?code=058e2a59bcd686de178691fedae13e98',
                    {
                     timeout: 2000,
                     headers:
                        { 'User-Agent':'ServerStatus/axios' }
                    })
        
        .catch(function (error) {
            message.channel.send('I\'m unable to reach the Farming Simulator Webserver. Is the host down?')
        });

        embed.setTitle('Fill levels for this server: \n' + res.data.server.name)
        embed.setDescription(`Current Map: `+ res.data.server.mapName + `\nServer Time: ${('0' + Math.floor((res.data.server.dayTime/3600/1000))).slice(-2)}:${('0' + Math.floor((res.data.server.dayTime/60/1000)%60)).slice(-2)}`)
        embed.addFields(
         { name: 'Vehicle(s)/Trailer(s)', value: 
                                    `${res.data.vehicles[6].name}` + '\n' +
                                    `${res.data.vehicles[7].name}`, inline: true },
         { name: 'Fill level', value: 
                                    `${res.data.vehicles[6].fills[0].level}` + '\n' +
                                    `${res.data.vehicles[7].fills[0].level}`, inline: true},
         { name: 'Filltype', value:
                                    `${res.data.vehicles[6].fills[0].type}` + '\n' +
                                    `${res.data.vehicles[7].fills[0].type}`, inline: true }
        )

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    } 
}
