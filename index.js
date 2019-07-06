const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`O bot está ligado! ${bot.username}`)  

    //bot.generateInvite(["ADMINISTRATOR"]).then();
});



bot.login(botconfig.token);


