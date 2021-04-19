const fetch = require('node-fetch');

module.exports = {
	name: 'war',
	description: 'War Info',
	execute(message, args) {
const { list } = await fetch(`https://war-service-live.foxholeservices.com/api/worldconquest/war`).then(response => response.json());
message.channel.send(list[0].definition);

	},
};