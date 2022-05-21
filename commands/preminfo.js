const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'preminfo',
    description: 'Displays Discord server additional info',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Discord Server Additional Info:')
        .addFields(
            { name: '*Discord Partner:*', value: `${message.guild.partnered}`},
            { name: '*Verified Server:*', value: `${message.guild.verified}`},
            { name: '*Boost Tier:*', value: `${message.guild.premiumTier}`},
            { name: '*Boost Count:*', value: `${message.guild.premiumSubscriptionCount}`},
            { name: '*Vanity URL:*', value: `${message.guild.vanityURLCode}`},
            { name: '*Vanity URL Uses:*', value: `${message.guild.vanityURLUses}`},
            { name: '*Verification Level:*', value: `${message.guild.verificationLevel}`},
            { name: '*2FA Status:*', value: `${message.guild.mfaLevel}`},
            { name: '*Server\'s Maximum Members Capacity:*', value: `${message.guild.maximumMembers}`},
        )
        .setTimestamp()
        .setColor('#F070F7')
        .setThumbnail(message.guild.iconURL())

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}