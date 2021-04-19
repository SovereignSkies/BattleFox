const Discord = require('discord.js');

module.exports = {
	name: 'about',
	description: 'About BattleFox',
	execute(message, args) {

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Created by Sovereign_Skies#4446')
	.setURL('')
	.setAuthor('', '', '')
	.setDescription('This bot has been created for use with the Foxhole API. With BattleFox, you can see recently updated war information, region statistics, and more.')
	.setThumbnail('https://cdn.discordapp.com/attachments/708309969363009656/833358971863171092/image0.png')
	.addFields(
		{ name: 'Support:', value: 'If you need BattleFox support, please join our Support server: https://discord.gg/vkE67rRFNr' },
	)
	.setImage('')
	.setTimestamp()
	.setFooter('BattleFox Ⓒ 2021 Sovereign_Skies#4446.');

message.channel.send(exampleEmbed);

        }
      };