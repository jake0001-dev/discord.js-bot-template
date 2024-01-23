const { time } = require('console');
const {Client, GatewayIntentBits, SlashCommandBuilder, ActivityFlagsBitField, ActivityType} = require('discord.js');

const {bot_token, bot_activity, bot_intents} = require('./config.json');

const new_intents = [];
if (bot_intents.length > 0) {
    if (bot_intents.includes('GUILDS')) {
        new_intents.push(GatewayIntentBits.Guilds);
    }
    if (bot_intents.includes('GUILD_MEMBERS')) {
        new_intents.push(GatewayIntentBits.GuildMembers);
    }
    if (bot_intents.includes('GUILD_BANS')) {
        new_intents.push(GatewayIntentBits.GuildBans);
    }
    if (bot_intents.includes('GUILD_EMOJIS_AND_STICKERS')) {
        new_intents.push(GatewayIntentBits.GuildEmojisAndStickers);
    }
    if (bot_intents.includes('GUILD_INTEGRATIONS')) {
        new_intents.push(GatewayIntentBits.GuildIntegrations);
    }
    if (bot_intents.includes('GUILD_WEBHOOKS')) {
        new_intents.push(GatewayIntentBits.GuildWebhooks);
    }
    if (bot_intents.includes('GUILD_INVITES')) {
        new_intents.push(GatewayIntentBits.GuildInvites);
    }
    if (bot_intents.includes('GUILD_VOICE_STATES')) {
        new_intents.push(GatewayIntentBits.GuildVoiceStates);
    }
    if (bot_intents.includes('GUILD_PRESENCES')) {
        new_intents.push(GatewayIntentBits.GuildPresences);
    }
    if (bot_intents.includes('GUILD_MESSAGES')) {
        new_intents.push(GatewayIntentBits.GuildMessages);
    }
    if (bot_intents.includes('MESSAGE_CONTENT')) {
        new_intents.push(GatewayIntentBits.MessageContent);
    }
    if (bot_intents.includes('GUILD_MESSAGE_REACTIONS')) {
        new_intents.push(GatewayIntentBits.GuildMessageReactions);
    }
    if (bot_intents.includes('GUILD_MESSAGE_TYPING')) {
        new_intents.push(GatewayIntentBits.GuildMessageTyping);
    }
    if (bot_intents.includes('DIRECT_MESSAGES')) {
        new_intents.push(GatewayIntentBits.DirectMessages);
    }
    if (bot_intents.includes('DIRECT_MESSAGE_REACTIONS')) {
        new_intents.push(GatewayIntentBits.DirectMessageReactions);
    }
    if (bot_intents.includes('DIRECT_MESSAGE_TYPING')) {
        new_intents.push(GatewayIntentBits.DirectMessageTyping);
    }
}

const client = new Client({
    intents: new_intents
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    if (bot_activity.type === 'PLAYING') {
        client.user.setActivity(bot_activity.text, { type: ActivityType.Playing })
    }
    if (bot_activity.type === 'STREAMING') {
        client.user.setActivity(bot_activity.text, { type: ActivityType.Streaming })
    }
    if (bot_activity.type === 'LISTENING') {
        client.user.setActivity(bot_activity.text, { type: ActivityType.Listening })
    }
    if (bot_activity.type === 'WATCHING') {
        client.user.setActivity(bot_activity.text, { type: ActivityType.Watching })
    }
    if (bot_activity.type === 'COMPETING') {
        client.user.setActivity(bot_activity.text, { type: ActivityType.Competing })
    }
    if (bot_activity.type === 'CUSTOM_STATUS') {
        client.user.setActivity(bot_activity.text, { type: ActivityType.CustomStatus })
    } else {
        return;
    }

    // if you want to make slash commands.
    // You can do it like this.
    /*
    const data = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong');
        
    const command = await client.application.commands.create(data);


    // If you want to set slash command permissions.
    // You can do it like this.
    /*
    const command = await client.application.commands.create(data);
    const permissions = [
        {
            id: '123456789012345678',
            type: 'USER',
            permission: true,
        },
        {
            id: '876543210987654321',
            type: 'ROLE',
            permission: false,
        },
    ]


    */

    

})

client.on('messageCreate', async (message) => {
    
    // If you want to check for message content and listen to the message Event. 
    // You can do it like this.
    /*
    if (message.content === 'ping') {
        await message.reply('pong');
    }
    */

})

client.on('interactionCreate', async (interaction) => {
    const { commandName, isCommand } = interaction;
    if (!isCommand()) return;


    // If you want to check for command name and listen to the interactionCreate Event.
    // You can do it like this.

    /*
    if (commandName === 'ping') {
        await interaction.reply('pong');
    }
    */
})


client.on('guildMemberAdd', async (member) => {
    // If you want to listen to guildMemberAdd Event.
    // You can do it like this.

    /*
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    await channel.send(`Welcome to the server, ${member}`);
    */
})

client.on('guildMemberRemove', async (member) => {
    // If you want to listen to guildMemberRemove Event.
    // You can do it like this.

    /*
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    await channel.send(`Goodbye, ${member}`);
    */
})


// monitor voice channel join
client.on('voiceStateUpdate', async (oldState, newState) => {
    // If you want to listen to voiceStateUpdate Event.
    // You can do it like this.

    /*
    if (!channel) return;
    console.log(newState.member.user.tag + " joined " + newState.channel.name);
    */
    
})



client.login(bot_token);