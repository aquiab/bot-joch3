const fs = require('fs')
const { MessageAttachment } = require('discord.js')

var files = fs.readdirSync('./recuerdos')
module.exports = {
	name: 'recuerdo',
	aliases: ['rec'],
	description: 'manda una foto random de la carpeta de recuerdos',
	cooldown: 1800,
	execute(message, args) {
		if (message.guild.id == 226196169104162817) {
			imageNumber = Math.floor(Math.random() * files.length)
			const attachment = new MessageAttachment('./recuerdos/' + files[imageNumber])
			message.channel.send(attachment)
		} else {
			message.channel.send('https://i.imgur.com/nkZy3N1.png')
		}
	},
}