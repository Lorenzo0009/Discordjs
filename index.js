const Discord = require('discord.js');
const client = new Discord.Client();
// const for get token in private config
const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {

    const args = message.content.slice(config.prefix.length).trim().split("/ !/l");
    const comando = args.shift().toLowerCase();

    if(comando === "oi"){
        const m = await message.channel.send("oi");
        return;
    }

});
client.login(config.token);