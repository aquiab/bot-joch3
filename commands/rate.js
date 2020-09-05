module.exports = {
    name: 'rate',
    aliases: ['r'],
    description: 'reacciona con 5 numeritos al mensaje',
	execute(message, args) {
        message.react('1️⃣')
			.then(() => message.react('2️⃣'))
            .then(() => message.react('3️⃣'))
            .then(() => message.react('4️⃣'))
            .then(() => message.react('5️⃣'))
			.catch(() => console.error('se rompio xd'));
	},
}