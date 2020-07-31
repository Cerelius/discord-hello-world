// Require discord.js package
const Discord = require("discord.js")

// Instantiate a discord client
const client = new Discord.Client();

// Listen for discord client ready message and post a success message to console
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for the !hello command and respond with "Hello World!"
client.on("message", msg => {
    if (msg.content === "!hello"){
        msg.reply("Hello World!");
    }
});

// Perform the discord client login with the token
client.login("NzM4NTE4MTgxMTM5ODQxMTY1.XyNEpw.xLcAucEtZ0vbfrQcdoGaawf2eis");