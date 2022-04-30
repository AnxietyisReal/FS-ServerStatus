const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Displays available commands.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available commands')
        .setDescription('Total commands: **4**')
        .addFields(
            {name: 'help', value: 'You are reading this.'},
            {name: 'info', value: 'Displays library versions.'},
            {name: 'ping', value: 'Discord API Response time.'},
        //  {name: 'server', value: 'Displays FS22 server info.'}, -Disabled for time-being.
            {name: 'time', value: 'Provides timezone conversion.'},
        //  {name: 'uptime', value: 'How long have I been alive for??'} -Disabled for time-being.
        )
        .setTimestamp()
        .setColor('RANDOM')

        const embed2 = new MessageEmbed()
        .setTitle('Disabled commands')
        .setDescription('If things don\'t go too well, they end up\nbeing disabled for time being.')
        .addFields(
            {name: 'server', value: 'Displays FS22 server info.'},
            {name: 'uptime', value: 'How long have I been alive for??'}
        )
        .setTimestamp()
        .setColor('RED')
        
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
        message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
    }
}