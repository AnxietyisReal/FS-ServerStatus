const { default: axios } = require('axios')
const { MessageEmbed, version } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'info',
    description: 'Displays library versions',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('ServerStatus - Library versions')
        .setDescription('I\'m built on top of JavaScript.')
        .addFields(
            { name: 'Library', value:
                    'Discord.JS' + '\n' +
                    'Node.JS' + '\n' +
                    'Axios' + '\n' +
                    'node-fetch' + '\n' +
                    'moment' + '\n' +
                    'ms' + '\n' +
                    'systeminformation', inline: true },
            { name: 'Version', value: 
                    version + '\n' +
                    process.version + '\n' +
                    axios.VERSION + '\n' +
                    '2.6.7' + '\n' +
                    `${moment.version}` + '\n' +
                    '2.1.3' + '\n' +
                    '5.11.15', inline: true }
        )
        .setTimestamp()
        .setColor('#D93D6D')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}