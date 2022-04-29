const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Displays available commands.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Available commands')
        .setDescription('Total commands: **6**')
        .addFields(
            {name: 'help', value: 'You are reading this.'},
            {name: 'info', value: 'Displays library versions.'},
            {name: 'ping', value: 'Discord API Response time.'},
            {name: 'server', value: 'Displays FS22 server info.'},
            {name: 'time', value: 'Provides timezone conversion.'},
            {name: 'uptime', value: 'How long have I been alive for??'}
        )
        .setTimestamp()
        .setColor('RANDOM')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}