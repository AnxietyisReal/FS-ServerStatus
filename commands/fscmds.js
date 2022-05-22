const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'fscmds',
    description: 'Displays available commands for Farming Simulator server.',
    execute(message) {
        const embed1 = new MessageEmbed()
        .setTitle('Available FS server commands.')
        .setDescription('Total cmds in this list: **6**')
        .addFields(
            {name: 'players', value: 'Displays how many players are on MP server.'},
            {name: 'server', value: 'Fetches FS22 server information.'},
            {name: 'mods', value: 'Fetches mods from MP server. *-Hardcoded*'},
            {name: 'fuel', value: 'Fetches fuel levels from vehicles on MP server. *-Hardcoded*'},
            {name: 'fill', value: 'Fetches fill level and what vehicle is it in on MP server. *-Hardcoded*'},
            {name: 'fields', value: 'Fetches field # and ownership on MP server. *-Hardcoded*'}
        )
        .setTimestamp()
        .setColor('#0FD4F2')

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