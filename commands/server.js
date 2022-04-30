const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Displays info from FS22 server.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Farming Simulator 22 Server Information')
        .setDescription('**Server Status: 🔴**')
        .addFields(
            {name: '__*Game:*__', value: 'Farming Simulator 22', inline: false},
            {name: '__*Server Name:*__', value: `AAAAAAAAAAAAAAAAAAA`, inline: false},
            {name: '__*Server Version:*__', value: '0.0.0.0', inline: true},
            {name: '__*Current Map:*__', value: 'Placeholder', inline: true},
            {name: '__*Players:*__', value: '0/0', inline: false},
            {name: '__*Download mods from Server:*__', value: '*http://IP-ADDRESS:PORT/mods.html*', inline: false}
        )
        .setTimestamp()
        .setColor('#E7D171')
        .setThumbnail('https://c.tenor.com/vchYyjWcJ0EAAAAC/it-crowd-moss.gif')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}
// http://IP-ADDRESS:PORT/feed/dedicated-server-stats.xml?code=
// Game name | Server name | Server version | Current Map | Admin (Text or Custom Emote) | Min/Max Players