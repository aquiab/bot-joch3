const fs = require('fs')
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')

const client = new Discord.Client()
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection()

client.once('ready', () => {
    console.log('Ready!')
    client.user.setActivity('-ayuda')
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (!command) return

    /* cooldowns */
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 2) * 1000;

    if (timestamps.has(message.guild.id)) {
        const expirationTime = timestamps.get(message.guild.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000 / 60;
            message.reply(`dios sos un pelotudo`)
            return message.channel.send(`${timeLeft.toFixed(0)} minutos`);
        }
    }

    timestamps.set(message.guild.id, now);
    setTimeout(() => timestamps.delete(message.guild.id), cooldownAmount);

    try {
        command.execute(message, args)
    } catch (error) {
        console.error(error)
        message.reply('hubo un error jaja')
    }
})

client.login(token)
