module.exports = {
	name: 'ayuda',
	aliases: ['help'],
	description: 'informacion de los comandos',
	execute(message, args) {
		message.channel.send('**-avi, -foto, -pfp, -icon + @mencion**: envia la foto de perfil de alguien \n**-rec, -recuerdo**: envia una foto/video/captura random de la carpeta de cosas viejas (max 1 cada media hora). si me mandan cosas las agrego \n **-rate, -r**: reacciona con 5 numeritos al mensaje/foto, como para puntuar \n **-rate10, -r10**: reacciona con 10 numeritos si queres hinchar mas las pelotas \n **-mute**: mutea a todo el mundo en el canal de voz, y desmutea si alguien ya esta muteado')
	},
}