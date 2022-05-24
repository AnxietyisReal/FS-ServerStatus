const { MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
    name: 'mods',
    description: 'Fetches mods from MP server.',
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

        embed.setTitle('Mod list for this server: ' + res.data.server.name)
        embed.setDescription(`Current Map: `+ res.data.server.mapName + `\nMod URL: http://103.193.80.29:8120/mods.html`)
        embed.addFields(
         { name: 'Mod name', value: 
                                    `${res.data.mods[0].description}` + '\n' +
                                    `${res.data.mods[1].description}` + '\n' +
                                    `${res.data.mods[2].description}` + '\n' +
                                    `${res.data.mods[3].description}`, inline: true },
         { name: 'Mod version', value:
                                    `${res.data.mods[0].version}` + '\n' +
                                    `${res.data.mods[1].version}` + '\n' +
                                    `${res.data.mods[2].version}` + '\n' +
                                    `${res.data.mods[3].version}`, inline: true },
         { name: 'Mod author', value:
                                    `${res.data.mods[0].author}` + '\n' +
                                    `${res.data.mods[1].author}` + '\n' +
                                    `${res.data.mods[2].author}` + '\n' +
                                    `${res.data.mods[3].author}`, inline: true }
        )

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    } 
}
