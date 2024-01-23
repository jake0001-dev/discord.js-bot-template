# discord.js bot template
 A simple discord.js Bot template that makes it a breeze to start developing a new bot without going from 0<br/><br/>
**Configuration Options**
| Parameter    | Required? | Options | Description |
| -------- | ------- | -------------| ----|
| bot_token  | true    | Discord Bot Secret Token | The token of which is used to authentication your application with the discord API 
| bot_activity | false  | String \| [PLAYING / WATCHING/STREAMING]  | The Activity of which your discord bot shows its current activity
| bot_intents    | true    | GUILDS<br/>GUILD_MEMBERS<br/>GUILD_BANS<br/>GUILD_EMOJIS_AND_STICKERS<br/>GUILD_INTEGRATIONS<br/>GUILD_WEBHOOKS<br/>GUILD_INVITES<br/>GUILD_VOICE_STATES<br/>GUILD_PRESENCES<br/>GUILD_MESSAGES<br/>MESSAGE_CONTENT<br/>GUILD_MESSAGE_REACTIONS<br/>GUILD_MESSAGE_TYPING<br/>DIRECT_MESSAGES<br/>DIRECT_MESSAGE_REACTION<br/>DIRECT_MESSAGE_TYPING | The Permisions of which the bot requires and is requesting from the discord API for it to function with certain rights and permissions, lacking the right permissions may lead to to your bot not behaving as expected.<br/> <br/> Remember, These permissions are also required on the application itself [discord developer portal](https://discord.dev)