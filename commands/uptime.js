const { MessageEmbed, Client } = require('discord.js');
const moment = require('moment');
require("moment-duration-format");

module.exports = {
    name: 'uptime',
    description: 'How long has the bot been online for',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('ServerStatus')
        .addFields(
            {name: 'Uptime:', value:  duration }
        )
        .setTimestamp()
        .setColor('BLURPLE')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}

const duration = moment.duration(Client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");