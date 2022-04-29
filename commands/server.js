const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Displays info from FS22 server.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Farming Simulator 22 - Server Status')
        .addFields(
            {name: 'Test Title', value: `Test Title`, inline: true},
            {name: 'Test Title2', value: 'Test Title2', inline: true}
        )
        .setTimestamp()
        .setColor('#E7D171')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}
// http://185.239.211.78:9150/feed/dedicated-server-stats.xml?code=eFD2dPCZ
// Game name | Server name | Map name | Server version | Admin (Text or Emote) | Min/Max Players