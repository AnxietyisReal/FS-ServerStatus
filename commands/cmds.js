const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cmds',
    description: 'Displays available commands.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available commands')
        .setDescription('Global commands: **14**' + '\n' + 'Command list: **9**')
        .addFields(
            {name: 'cmds', value: 'You\'re already reading this embed.'},
            {name: 'fscmds', value: 'Displays FS Server commands.'},
            {name: 'info', value: 'Displays library versions.'},
            {name: 'ping', value: 'Discord API Response time.'},
            {name: 'serverinfo', value: 'Displays Discord server info.'},
            {name: 'preminfo', value: 'Displays Discord server additional info'},
            {name: 'time', value: 'Provides timezone conversion.'},
            {name: 'uptime', value: 'Shows the uptime for the bot and host.'},
            {name: 'restart', value: 'Tells PM2 to restart the bot. *-Bot owner only*'}
        )
        .setTimestamp()
        .setColor('RANDOM')

        /*const embed2 = new MessageEmbed()
        .setTitle('Disabled commands')
        .setDescription('If things don\'t go too well, they end up\nbeing disabled for time being.')
        .addFields(
            {name: '', value: ''}
        )
        .setTimestamp()
        .setColor('RED') */
        
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
        // message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
    }
}