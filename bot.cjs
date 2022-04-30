const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');
const client = new Client({ 
    intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Discord.Collection();

dotenv.config();
console.log(process.env.STARTUP);
client.login(process.env.BOT_TOKEN);
const prefix = '-'

client.on('error', (err) => {
    console.log(`Failed to log into Discord API: ${err.code} ($[err.message])`);
    client.destroy();
    setTimeout(() => { client.login(process.env.BOT_TOKEN); }, 10000)
})

client.on('ready', async () => {
    console.log(`${client.user.tag} has successfully logged into Discord API!`);
    client.user.setStatus('idle');

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }

    console.log('Startup complete!');
    client.user.setStatus('online');
    client.user.setActivity('Farming Simulator 22', { type: 'PLAYING' });
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;
    if (message.mentions.has(client.user.id)) {
        message.channel.send("https://tenor.com/view/reply-ping-gif-22087362");
    }
})

client.on('messageCreate', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if (command == 'help') {
        client.commands.get('help').execute(message)
    }
    if (command == 'ping') {
        client.commands.get('ping').execute(message)
    }
    if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message)
    }
    if (command == 'prem-info') {
        client.commands.get('prem-info').execute(message)
    }
    /*if (command == 'server') {
        client.commands.get('server').execute(message)
    } */
    if (command == 'info') {
        client.commands.get('info').execute(message)
    }
    if (command == 'time') {
        client.commands.get('time').execute(message)
    }
    /*if (command == 'uptime') {
        client.commands.get('uptime').execute(message)
    }*/
})
 

//          General notes to keep.
/*
List of available statuses for the bot:
            online
            idle
            dnd
            invisible
*/
/*
List of available activities for the bot:
            PLAYING
            WATCHING
            STREAMING
            LISTENING
*/
/*
WebSocketManager Status
            READY: 0
            CONNECTING: 1
            RECONNECTING: 2
            IDLE: 3
            NEARLY: 4
            DISCONNECTED: 5
            WAITING_FOR_GUILDS: 6
            IDENTIFYING: 7
            RESUMING: 8
*/