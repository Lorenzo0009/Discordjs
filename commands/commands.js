module.exports = {
	async run(client, message) {},

	get command() {
		return {
			name: 'oi',
			description: 'Descrição do Comando',
			usage: '!l oi',
        };
	},
};