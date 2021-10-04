module.exports = {
    name: 'mute/unmute',
    aliases: ['mute'],
    description: 'mutea a todo el mundo en el canal, y desmutea si alguien ya esta muteado',
    execute(message, args) {
        if (message.member.voice.channel) {
            message.delete()
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id)
            for (const [memberID, member] of channel.members) {
                member.voice.setMute(!member.voice.serverMute)
            }
        } else {
            message.reply('no estas en el canal de voz')
        }
    }
}