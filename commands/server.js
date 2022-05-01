/* const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Displays info from FS22 server.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('Farming Simulator 22 Server Information')
        .setDescription('**Server Status: 🔴**')
        .addFields(
            {name: '__*Game:*__', value: 'Farming Simulator 22', inline: false},
            {name: '__*Server Name:*__', value: `AAAAAAAAAAAAAAAAAAA`, inline: false},
            {name: '__*Server Version:*__', value: '0.0.0.0', inline: true},
            {name: '__*Current Map:*__', value: 'Placeholder', inline: true},
            {name: '__*Players:*__', value: '0/0', inline: false},
            {name: '__*Download mods from Server:*__', value: '*http://IP-ADDRESS:PORT/mods.html*', inline: false}
        )
        .setTimestamp()
        .setColor('#E7D171')
        .setThumbnail('https://c.tenor.com/vchYyjWcJ0EAAAAC/it-crowd-moss.gif')

        message.reply({embeds: [embed], allowedMentions: {repliedUser: false}})
    }
} */
// http://IP-ADDRESS:PORT/feed/dedicated-server-stats.xml?code=
// Game name | Server name | Server version | Current Map | Admin (Text or Custom Emote) | Min/Max Players

const { MessageEmbed } = require('discord.js');
const axios = require('axios').default

axios({
    method: 'get',
    url: 'http://185.239.211.78:9150/feed/dedicated-server-stats.xml?code=eFD2dPCZ',
    timeout: 15000,
    headers: {
        'User-Agent':'FS-ServerStatus/axios',
        'X-Requested-With':'XMLHttpRequest'
    },
    data: {
        

        /* _game,
        _version,
        _mapName,
        _mapSize,
        _dayTime,
        _name, */
    }
})
/* .then(function (response) {
    console.log(response);
}) */
.catch(function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('An error occured', error.message);
    }
    console.log(error.config);
})

module.exports = {
    name: 'server',
    description: 'Displays info from FS22 server.',
    execute(message) {
        const embed = new MessageEmbed()
        .setTitle('FS22 Server Status')
        .setDescription('This command is work in progress...')
        .addFields(
            { name: 'Game', value: 'h', inline: true},
            { name: 'Server Version', value: 'h', inline: true},
            { name: 'Server Name', value: 'h', inline: true},
            { name: 'Game Time', value: 'h', inline: true},
            { name: 'Current Map', value: 'h', inline: true},
            { name: 'Map Size', value: 'h', inline: true}
        )
        .setColor('#E7D171')
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()

        message.reply({ embeds: [embed], allowedMentions: {repliedUser: false}})
    }
}

/*
const instance = axios.create({
    url: 'http://185.239.211.78:9150/feed/dedicated-server-stats.xml?code=eFD2dPCZ',
    responseType: 'document',
    headers: { 
        'X-Requested-With':'XMLHttpRequest',
        'User-Agent':'FS-ServerStatus/axios',
        'Content-Type':'text/xml'
    },
    method: 'get',
    timeout: 10000, // 10 seconds timeout for development purposes
    // timeout: 300000, // 5 minutes timeout for production purposes
    
}) */