require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('messageCreate', (message) => {
    if(message.author.id.includes('1117586035984060516')){
        return;
    }

    if(message.content.toLowerCase().includes("drop")){
        message.reply('@everyone');
    }
})

client.login(process.env.TOKEN);

