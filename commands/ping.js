const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'API Response time in milliseconds.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Discord API Response')
        .addFields(
            {name: 'API', value: Math.round(message.client.ws.ping) + ' ms'},
            {name: 'Bot', value: `${message.createdTimestamp - Date.now()} ms`}
        )
        .setTimestamp()
        .setColor('BLURPLE')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}