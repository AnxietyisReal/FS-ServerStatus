const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'time',
    description: 'Provides timezone.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Time')
        .setURL('https://time.is/') // This part is optional, you can remove it and it won't hurt the code itself :)
        .addFields(
            {name: 'Timezone 1', value: moment().utcOffset(+10).format("dddd, MMM Do YY, hh:mm:ss A")}, // utcOffset +10 = Sydney, Australia
            {name: 'Timezone 2', value: moment().utcOffset(+1).format("dddd, MMM Do YY, hh:mm:ss A")}, // utcOffset +1 = London, United Kingdom
            {name: 'Timezone 3', value: moment().utcOffset(-5).format("dddd, MMM Do YY, hh:mm:ss A")} // utcOffset -5 = Dallas, United States
        )
        .setColor('#A1DFF3')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}

/**
 * I was going to take this command away
 * from GitHub version of the bot,
 * but I decided that you can probably use this if your community server wants it.
 * 
 * If you want to add more timezones, you can google the timezone and grab the utcOffset from there.
 * Example, Washington, DC, United States -- utcOffset is GMT-4, take -4 into the utcOffset(-4).
 * Some countries/states have Daylight Saving Time, if Sydney NSW is AEDT, you can take +11 instead of +10 (AEST)
 */