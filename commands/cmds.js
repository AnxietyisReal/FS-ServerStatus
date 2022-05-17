const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cmds',
    description: 'Displays available commands.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available commands')
        .setDescription('Total commands: **7**')
        .addFields(
            {name: 'cmds', value: 'You\'re already reading this embed.'},
            {name: 'info', value: 'Displays library versions.'},
            {name: 'ping', value: 'Discord API Response time.'},
         // {name: 'server', value: 'Displays FS22 server info.'},
            {name: 'players', value: 'Displays how many players are on MP server.'},
            {name: 'serverinfo', value: 'Displays Discord server info.'},
            {name: 'prem-info', value: 'Displays Discord server additional info'},
            {name: 'time', value: 'Provides timezone conversion.'},
            {name: 'uptime', value: 'How long have I been alive for??'}
        )
        .setTimestamp()
        .setColor('RANDOM')

        const embed2 = new MessageEmbed()
        .setTitle('Disabled commands')
        .setDescription('If things don\'t go too well, they end up\nbeing disabled for time being.')
        .addFields(
            {name: 'server', value: 'Displays FS22 server info.'}
        )
        .setTimestamp()
        .setColor('RED')
        
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
        message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
    }
}