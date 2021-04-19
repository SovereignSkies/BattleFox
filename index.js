const prefix = process.env['PREFIX']
const token = process.env['TOKEN'];
const Discord = require("discord.js");
const fetch = require("node-fetch");
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(/ +/);

const commandName = args.shift().toLowerCase();
	
if (!client.commands.has(commandName)) return;

const command = client.commands.get(commandName);

try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('There was an error trying to execute that command!');
}
});

client.login(token);