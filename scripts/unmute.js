
module.exports = async (client, msg) => {
    if(msg.content === process.env.PREFIX+"unmute all" && msg.member.permissions.has('MUTE_MEMBERS')) {
        
        //Canal de voz que vai ser desmutado
        const voiceChannel = msg.member.voice.channel;

        if(!voiceChannel) {
            msg.reply("você precisa estar em um canal de voz");
            return;
        }
        // get the channel that will be muted
        msg.channel.send(`O usuário ${msg.member.user.username} desmutou o canal ${voiceChannel.name}`)


        await voiceChannel.members.forEach(member => {
            member.voice.setMute(false);
        });
    }
}