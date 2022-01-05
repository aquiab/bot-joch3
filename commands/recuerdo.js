const fs = require('fs')

function obtener_cooldown() {
	// retorna cuanto tiempo paso desde la ultima foto enviada
	let cooldown = fs.readFileSync('./data/cooldown_recs.txt')
	let dif_minutos = Math.floor((Date.now() - parseInt(cooldown, 10)) / 60000)
	if (dif_minutos > 30) {
		fs.writeFile('./data/cooldown_recs.txt', Date.now().toString(),  err => {console.error(err)})
	}	
	return dif_minutos
}

module.exports = {
	name: 'recuerdo',
	aliases: ['rec'],
	description: 'manda una foto random de la carpeta de recuerdos',
	execute(message, args) {
		if (message.guild.id === "226196169104162817") {
			let cooldown = obtener_cooldown()
			if (cooldown < 30) {
				message.reply(`Cada vez estás más pelotudo... faltan ${30 - cooldown} minutos`)
				return
			}
			var files = fs.readdirSync('./recuerdos')
			let enviadas = new Set(fs.readFileSync('./data/imgs_enviadas.txt').toString().trim().split('\n'))
			if (enviadas.length >= files.length) {          // se resetea la lista
				fs.writeFile('./data/imgs_enviadas.txt', '',  err => {console.error(err)})
				enviadas = new Set()
			}
			var str_archivo = files[Math.floor(Math.random() * files.length)]
			while (enviadas.has(str_archivo)){   //si ya estaba el elemento en el set, se busca uno nuevo
				str_archivo = files[Math.floor(Math.random() * files.length)]
			}
			message.channel.send({
				files: [{
					attachment: './recuerdos/' + str_archivo,
					name: str_archivo,
				}]
			})
			fs.writeFile('./data/imgs_enviadas.txt', str_archivo + '\n', { flag: 'a+' },  err => {console.error(err)})
		} 
		else {
			message.channel.send('noooooooooooooooooooooooo')
		}
	},
}