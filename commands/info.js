const { default: axios } = require('axios')
const { MessageEmbed, version } = require('discord.js')
module.exports = {
    name: 'info',
    description: 'Displays bot info and library versions',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('ServerStatus - Library versions')
        .setDescription('I\'m built on top of JavaScript.')
        .addFields(
            {name: 'Node.JS', value: '18.0.0', inline: true},
            {name: 'Discord.JS', value: version, inline: true},
         // {name: 'jQuery', value: '3.6.0', inline: true},
            {name: 'axios', value: axios.VERSION, inline: true},
            {name: 'moment', value: '2.29.3', inline: true},
        )
        .setTimestamp()
        .setColor('#FC6E52')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}