const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cmds',
    description: 'Displays available commands.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available commands')
        .setDescription('Global commands: **4**')
        .addFields(
            { name: 'Name', value: 
                    'cmds' + '\n' +
                    'players' + '\n' +
                    'time' + '\n' +
                    'restart', inline: true },
            
            { name: '\u200b', value: '\u200b', inline: true }, // Keeps both entries separated.

            { name: 'Description', value: 
                    'You\'re already reading this embed.' + '\n' +
                    'Fetches player list from FS Server.' + '\n' +
                    'Provides timezone conversion.' + '\n' +
                    'Tells Process Manager 2 to restart the bot. ***Restricted to bot owner***', inline: true }
        )
        .setTimestamp()
        .setColor('#767ACA')
        
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
    }
}