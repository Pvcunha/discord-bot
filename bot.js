const { memory } = require('console');
const { Client, MessageEmbed } = require('discord.js');

var token = require('./configs.json')

const client = new Client();

client.on('ready', () => {
    console.log(`Logado em ${client.user.tag}`);

});


client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('pong!');
    } else if(msg.content == "aiai") {
        msg.reply("uiui");
    }

});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'geral');

    if(!channel) return;

    channel.send(`Bem vindo ao servidor, ${member}`);
})


client.on('message', message => {
    if(message.content === '!mute all' && message.member.permissions.has('MUTE_MEMBERS')) {
        
        //Canal de voz que vai ser mutado
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return;

        // get the channel that will be muted
        message.channel.send(`O usuário ${message.member.user.username} silenciou o canal ${voiceChannel.name}`);
        
        voiceChannel.members.forEach(member => {
            member.voice.setMute(true)
        });
    }
});


client.on('message', message => {

    if(message.content === "!unmute all" && message.member.permissions.has('MUTE_MEMBERS')) {
        
        //Canal de voz que vai ser desmutado
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return;
        
        // get the channel that will be muted
        message.channel.send(`O usuário ${message.member.user.username} desmutou o canal ${voiceChannel.name}`)


        voiceChannel.members.forEach(member => {
            member.voice.setMute(false);
        });
    }
});

client.login(token.token_teste);
