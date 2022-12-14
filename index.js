// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const {commandName} = interaction;
    if(commandName === 'ping'){
        await interaction.reply('pong!');
    }else if(commandName === 'server'){
        await interaction.reply('Server name: ${interaction.guild.name} \n Total members: ${interaction.guild.memberCount}');
    }else if(commandName === 'user'){
        await interaction.reply('Your tag: ${interaction.user.tag}\n Your id: ${interaction.user.id}');
    }
});

// Login to Discord with your client's token
client.login(token);
