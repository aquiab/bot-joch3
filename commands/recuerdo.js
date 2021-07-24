const fs = require('fs')
const { MessageAttachment } = require('discord.js')

var files = fs.readdirSync('./recuerdos')

function get_elem_random(arr) {
	let imageNumber = Math.floor(Math.random() * files.length)
	var str_archivo = files[imageNumber]
	while (arr.includes(str_archivo)){   //si ya estaba el elemento en el array, se busca uno nuevo
		imageNumber = Math.floor(Math.random() * files.length)
		str_archivo = files[imageNumber]
	}
	return str_archivo
}

module.exports = {
	name: 'recuerdo',
	aliases: ['rec'],
	description: 'manda una foto random de la carpeta de recuerdos',
	cooldown: 1800,
	execute(message, args) {
		if (message.guild.id == 226196169104162817 || message.guild.id == 739109425566056518) {
			fs.readFile('./data/imgs_enviadas.txt', 'utf8' , (err, data) => {   //leer archivo de imagenes enviadas
				if (err) {
				  console.error(err)
				  return
				}
				var enviadas = data.trim().split('\n')
				if (enviadas.length > 250) {          //al llegar a 250 imagenes registradas se resetea la lista
					fs.writeFile('./data/imgs_enviadas.txt', '',  err => {console.error(err)})
					enviadas = []
				}
				var str_archivo = get_elem_random(enviadas)
				const attachment = new MessageAttachment('./recuerdos/' + str_archivo)
				message.channel.send(attachment)
				fs.writeFile('./data/imgs_enviadas.txt', str_archivo + '\n', { flag: 'a+' },  err => {console.error(err)})
			})
		} 
		else {
			message.channel.send('no')
		}
	},
}