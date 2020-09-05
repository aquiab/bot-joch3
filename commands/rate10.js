module.exports = {
    name: 'rate10',
    aliases: ['r10'],
    description: 'reacciona con 10 numeritos al mensaje si queres hinchar las pelotas',
	execute(message, args) {
        message.react('1️⃣')
			.then(() => message.react('2️⃣'))
            .then(() => message.react('3️⃣'))
            .then(() => message.react('4️⃣'))
            .then(() => message.react('5️⃣'))
            .then(() => message.react('6️⃣'))
            .then(() => message.react('7️⃣'))
            .then(() => message.react('8️⃣'))
            .then(() => message.react('9️⃣'))
            .then(() => message.react('🔟'))
			.catch(() => console.error('se rompio xd'));
	},
}