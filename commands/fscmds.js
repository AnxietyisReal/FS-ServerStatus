const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'fscmds',
    description: 'Displays available commands for Farming Simulator server.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available FS server commands.')
        .setDescription('Total cmds in this list: **5**')
        .addFields(
            { name: 'Name', value:
                    'players' + '\n' +
                    'mods' + '\n' +
                    'fuel' + '\n' +
                    'fill' + '\n' +
                    'fields', inline: true },

            { name: '\u200b', value: '\u200b', inline: true },

            { name: 'Description', value: 
                    'Displays how many players are on MP server.' + '\n' +
                    'Fetches mods from MP server. ***Hardcoded***' + '\n' +
                    'Fetches fuel levels from vehicles on MP server. ***Hardcoded***' + '\n' +
                    'Fetches fill level and what vehicle is it in on MP server. ***Hardcoded***' + '\n' +
                    'Fetches field # and ownership on MP server. ***Hardcoded***', inline: true }
        )
        .setTimestamp()
        .setColor('#0FD4F2')

        const embed2 = new MessageEmbed()
        .setTitle('Disabled commands')
        .setDescription('If things don\'t go too well, they end up in this list until\nit gets looked into it in another time.')
        .addFields(
            { name: 'Name', value:
                    'server', inline: true },
            
            { name: '\u200b', value: '\u200b', inline: true },

            { name: 'Disabled reason', value:
                    'For time being until I can make the command work\nor remove it from bot.', inline: true }
        )
        .setTimestamp()
        .setColor('RED')
        
        message.reply({embeds: [embed1], allowedMentions: {repliedUser: false}})
        message.reply({embeds: [embed2], allowedMentions: {repliedUser: false}})
    }
}

// server | Fetches savegame settings for MP server.