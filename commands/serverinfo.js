const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: 'Displays Discord server info.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle(message.guild.name)
        .addFields(
            { name: '*Owner:*', value: `${message.guild.ownerName}`},
            { name: '*Owner ID:*', value: `${message.guild.ownerId}`},
            { name: '*Server ID:*', value: `${message.guild.id}`},
            { name: '*Created on:*', value:  ` ${moment(message.guild.createdTimestamp).format(
                'LL'
            )} **|** ${moment(message.guild.createdTimestamp
            ).fromNow()}`},
            { name: '*Total Members:*', value: `${message.guild.memberCount}`}
        )

        .setTimestamp()
        .setColor('WHITE')
        .setThumbnail(message.guild.iconURL())

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}
