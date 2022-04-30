const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'info',
    description: 'Displays bot info and library versions',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('ServerStatus - Library versions')
        .setDescription('I\'m built on top of JavaScript.')
        .addFields(
            {name: 'Node.JS', value: '18.0.0', inline: true},
            {name: 'Discord.JS', value: '13.6.0', inline: true},
            {name: 'jQuery', value: '3.6.0', inline: true},
            {name: 'moment', value: '2.29.3', inline:true},
        )
        .setTimestamp()
        .setColor('LUMINOUS_VIVID_PINK')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}