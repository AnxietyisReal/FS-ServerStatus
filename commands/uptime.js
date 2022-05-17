const { MessageEmbed } = require('discord.js');
const moment = require('moment');
require("moment-duration-format");
const os = require('node:os');

module.exports = {
    name: 'uptime',
    description: 'How long has the bot been online for',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('ServerStatus')
        .addFields(
            { name: 'Bot:', value: moment.duration(message.client.uptime).format("w [weeks], d [days], h [hrs], m [mins], s [secs]") },
            { name: 'System:', value: `${(os.uptime() / 3600).toFixed(2)}` + 'h' }
        )
        .setTimestamp()
        .setColor('BLURPLE')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}
