const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
//==============================================================
//INFORMAÇÕES | EXPORT's
//==============================================================
// fs.readdir("./commands/", (err, files) => {

//     if(err) console.log(err);
//     let jsfile = files.filter(f => f.split(".").pop() === "js")
//     if(jsfile.length <= 0){
//       console.log("Não foi possível encontrar o(s) comando(s).");
//       return;
//     }
  
//     jsfile.forEach((f, i) =>{
//       let props = require(`./commands/${f}`);
//       console.log(`${f} Carregado!`);
//       bot.commands.set(props.help.name, props);
//     });
//   });
//==============================================================
//RICK PRESENCE
//==============================================================
bot.on("ready", async () => {
    console.log(`O bot está ligado! ${bot.user.username}`)  

    bot.user.setActivity("Wesley Safadão", {type: "LISTING"});

    //bot.generateInvite(["ADMINISTRATOR"]).then();
});
//==============================================================
//PARA AS MENSAGENS FUNCIONAREM
//==============================================================
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

//==============================================================
});    
//==============================================================
//PRO BOT FUNCIONAR
//==============================================================
bot.login(botconfig.token);
//==============================================================
//
//==============================================================
