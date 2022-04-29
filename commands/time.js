const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'time',
    description: 'Provides timezone.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Time')
        .setURL('https://time.is/')
        .addFields(
            {name: 'Sydney, Australia', value: moment().utcOffset(+10).format("dddd, MMM Do YY, hh:mm:ss A")},
            {name: 'London, United Kingdom', value: moment().utcOffset(+1).format("dddd, MMM Do YY, hh:mm:ss A")}
        )
        .setColor('#A1DFF3')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}