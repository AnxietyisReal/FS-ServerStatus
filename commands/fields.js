const { MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
    name: 'fields',
    description: 'WIP Description',
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

        embed.setTitle('Owned fields for this server: ' + res.data.server.name)
        embed.setDescription(`Current Map: `+ res.data.server.mapName + `\n`)
        embed.addFields(
         { name: 'Field #', value: 
                                    `${res.data.fields[37].id}` + '\n' +
                                    `${res.data.fields[39].id}` + '\n' +
                                    `${res.data.fields[42].id}` + '\n' +
                                    `${res.data.fields[43].id}` + '\n' +
                                    `${res.data.fields[17].id}`, inline: true },
         { name: 'Field Ownership', value:
                                    `${res.data.fields[37].isOwned}` + '\n' +
                                    `${res.data.fields[39].isOwned}` + '\n' +
                                    `${res.data.fields[42].isOwned}` + '\n' +
                                    `${res.data.fields[43].isOwned}` + '\n' +
                                    `${res.data.fields[17].isOwned}`, inline: true }
        )

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    } 
}
