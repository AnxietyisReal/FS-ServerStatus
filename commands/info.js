const { default: axios } = require('axios')
const { MessageEmbed, version } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'info',
    description: 'Displays bot info and library versions',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('ServerStatus - Library versions')
        .setDescription('I\'m built on top of JavaScript.')
        .addFields(
            { name: 'Node.JS', value: process.version, inline: true },
            { name: 'Discord.JS', value: version, inline: true },
            { name: 'axios', value: axios.VERSION, inline: true },
            { name: 'moment', value: `${moment.version}`, inline: true },
            { name: 'ms', value: `2.1.3`, inline: true },
            { name: 'System Information', value: `5.11.15`, inline: true }
        )
        .setTimestamp()
        .setColor('#FC6E52')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}