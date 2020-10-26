
module.exports = async (client, msg) => {
    if(msg.content === process.env.PREFIX+'mute all' && msg.member.permissions.has('MUTE_MEMBERS')) {
        
        //Canal de voz que vai ser mutado
        const voiceChannel = msg.member.voice.channel;

        if(!voiceChannel){ 
            msg.reply("Você precisa estar em um canal de voz");
            return;
        }
        // get the channel that will be muted
        msg.channel.send(`O usuário ${msg.member.user.username} silenciou o canal ${voiceChannel.name}`);
        
        await voiceChannel.members.forEach(member => {
            member.voice.setMute(true)
        });
    }
}