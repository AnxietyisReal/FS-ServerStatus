module.exports = {
    name: 'restart',
    description: 'Restarts the bot instance - ProcessManager2 only',
    async execute(message) {
        if (message.author.id !== 'Discord UserID here.') {
             return message.channel.send('I\'m sorry, you\'re not the bot owner to perform this command. :sweat_smile:') }
        
        await message.channel.send('**Process Manager 2:** Received the request to restart the bot.');
        return process.exit();
    }
}

/**
 * Replace message.author.id with your own UserID.
 * You can change message.channel.send messages to your needs that works best for you. :)
 * If you want to use external emote, the emote has to be in same server as the bot for it to work,
 * you can retrieve the emote ID by picking the emote that
 * suits your messages well and add \ at the front then press Enter.
 */