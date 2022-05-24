const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cmds',
    description: 'Displays available commands.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available commands')
        .setDescription('Global commands: **15**' + '\n' + 'Command list: **10**')
        .addFields(
            { name: 'Name', value: 
                    'cmds' + '\n' +
                    'fscmds' + '\n' +
                    'info' + '\n' +
                    'ping' + '\n' +
                    'time' + '\n' +
                    'uptime' + '\n' +
                    'hostinfo' + '\n' +
                    'serverinfo' + '\n' +
                    'preminfo' + '\n' +
                    'restart', inline: true },
            
            { name: '\u200b', value: '\u200b', inline: true }, // Keeps both entries separated.

            { name: 'Description', value: 
                    'You\'re already reading this embed.' + '\n' +
                    'Displays FS Server commands.' + '\n' +
                    'Displays bot library versions.' + '\n' +
                    'Discord API Response time.' + '\n' +
                    'Provides timezone conversion.' + '\n' +
                    'Shows bot and system\'s uptime.' + '\n' +
                    'Displays system information the bot is running on.' + '\n' +
                    'Displays Discord server information.' + '\n' +
                    'Displays additional Discord server information.' + '\n' +
                    'Tells Process Manager 2 to restart the bot. ***Restricted to bot owner***', inline: true }
        )
        .setTimestamp()
        .setColor('#767ACA')

        /*const embed2 = new MessageEmbed()
        .setTitle('Disabled commands')
        .setDescription('If things don\'t go too well, they end up in this list until\nit gets looked into it in another time.')
        .addFields(
            { name: 'Name', value:
                    '', inline: true },
            
            { name: '\u200b', value: '\u200b', inline: true },

            { name: 'Disabled reason', value:
                    '', inline: true }
        )
        .setTimestamp()
        .setColor('RED')*/
        
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
        //message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
    }
}