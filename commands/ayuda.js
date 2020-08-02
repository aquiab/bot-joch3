module.exports = {
	name: 'ayuda',
	aliases: ['help'],
	description: 'informacion de los comandos',
	execute(message, args) {
		message.channel.send('**-avi, -foto, -pfp, -icon + @mencion+**: envia la foto de perfil de alguien \n**-rec, -recuerdo**: envia una foto/video/captura random de la carpeta de cosas viejas (max 1 cada media hora). si me mandan cosas las agrego')
	},
}