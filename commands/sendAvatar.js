const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'avi',
    aliases: ['icon', 'pfp', 'foto'],
    description: 'manda un avatar',
	execute(message, args) {
        let user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed().setImage(`${user.displayAvatarURL({ format: "png", dynamic: true , size: 2048})}`, true)
        message.channel.send({ embeds: [embed] })
	},
}