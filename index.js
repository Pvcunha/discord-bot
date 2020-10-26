const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');

const client = new Discord.Client();

const commands = require("./route/route")(process.env.PREFIX);

console.log(commands);

client.on('ready', () => {
    console.log(`Logado com o bot ${client.user.tag}`);
});

client.on('message', msg => {
    if(!msg.author.bot) {
        let command = msg.content.split(" ")[0];
        if(commands[command]) {
            commands[command](client, msg);
        }
    }
});

client.login(process.env.TOKEN);

