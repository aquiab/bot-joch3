const fs = require('fs')
const { MessageAttachment } = require('discord.js')

var files = fs.readdirSync('./recuerdos')
module.exports = {
	name: 'recuerdo',
	aliases: ['rec'],
	description: 'manda una foto random de la carpeta de recuerdos',
	cooldown: 1800,
	execute(message, args) {
		imageNumber = Math.floor (Math.random() * files.length) + 1
		const attachment = new MessageAttachment('./recuerdos/'+ files[imageNumber])
		message.channel.send(attachment)
	},
}