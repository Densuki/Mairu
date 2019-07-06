const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (args[0] == "help"){
      message.reply("comando de teste de imagens").then(msg => msg.delete(5000));
      return;
    }
    //let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //if (!rUser) return message.channel.send("http://prntscr.com/jpmc6o Não foi possível encontrar o usuário.").then(msg => msg.delete(5000));
    let reason = args.join(" ").slice(22);

    let rtestEmbed = new Discord.RichEmbed()
        //.setDescription("")
    //.setTumbnail()
    .setTitle('Embed test | Imagem & GIF')
    .setColor("#5F04B4") //ROXO
    .addField('')
    .addField("", reason);

    message.channel.send(rtestEmbed);

    //message.delete().catch(O_o=>{});

}

module.exports.help = {
  name:"rtest"
}
