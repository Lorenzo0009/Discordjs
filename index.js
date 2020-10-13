// dependencias
//npm i discord.js@11 fs hastebin-gen approximate-number djs-commands --save
// npm install djs-commands --save
// const for get token in private config

const Discord = require('discord.js');
const client = new Discord.Client();
// const for get token in private config
const config = require('./config.json');

client.on('ready', () => {
    console.log(`O Bot foi iniciado! ${client.user.tag}!`);
});

client.on('message', async message => {

});

client.login(config.token);