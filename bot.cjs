const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');
const client = new Client({ 
    intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Discord.Collection();

dotenv.config();
console.log(process.env.STARTUP);
client.login(process.env.BOT_TOKEN_DEV); // Production bot: BOT_TOKEN -- Development bot: BOT_TOKEN_DEV
const prefix = '!'

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
    if (message.mentions.has(client.user.id)) {
        message.channel.send("Hi there! I see you have pinged me so I thought I would say hi!");
    }
})

client.on('messageCreate', async message => {
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()

    if (command == 'cmds') {
        client.commands.get('cmds').execute(message)
    }
    if (command == 'ping') {
        client.commands.get('ping').execute(message)
    }
    if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message)
    }
    if (command == 'preminfo') {
        client.commands.get('preminfo').execute(message)
    }
    if (command == 'players') {
        client.commands.get('players').execute(message)
    }
    if (command == 'info') {
        client.commands.get('info').execute(message)
    }
    if (command == 'hostinfo') {
        client.commands.get('hostinfo').execute(message)
    }
    if (command == 'time') {
        client.commands.get('time').execute(message)
    }
    if (command == 'uptime') {
        client.commands.get('uptime').execute(message)
    }
    
    
    if (command == 'restart') {
        client.commands.get('restart').execute(message) // Owner-level command -- Restarts bot instance under Process Manager 2
    }
    }
})
