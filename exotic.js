const Discord = require("discord.js");
const  client = new Discord.Client();

const config = require("./config.json")

function presence(){
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Configurando a Exotic",
            type: "PLAYING"
        }
    })
}
client.on("ready", () => {
   console.log("Exotic Esta Listo Para Iniciar!");
   presence();
});
let prefix = config.prefix;
client.on("message", (message) => {
//evitar bucle
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
//comandos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if(command === "hola" ){
        message.channel.send("**Hola, Cómo Estás?**")
    }
    if(command === "adios"){
        message.channel.send("**Nos Vemos Camarada, que te vaya Bien!**")
    }
}); 
client.on("message", message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
//comandos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

//embeds
if(command === 'information'){
    const embed = new Discord.MessageEmbed()
      .setTitle('Server Information')
      .setColor(0x1A14E9)
      .setDescription('Current server information')
      .addField('Server Name', message.guild.name, true)
      .addField('Members', message.guild.memberCount, true)
      .addField("Bot Creator:", "Bolsito#5156")
      .addField("Discord Support:", "|| https://discord.gg/TZqRaNgaA9 ||")
      .setAuthor(message.member.displayName, message.author.avatarURL())
      .setThumbnail('https://media.discordapp.net/attachments/843943466446880781/843977480385855518/Bold_Reindeer_Illustration_E-Sports_Logo.gif')
      .setImage('https://cdn.discordapp.com/attachments/843943466446880781/843977480385855518/Bold_Reindeer_Illustration_E-Sports_Logo.gif')
      .setFooter('In Response to: '+message.member.displayName, message.author.avatarURL())
      .setTimestamp()
      .setURL('https://discord.gg/TZqRaNgaA9');
    message.channel.send(embed);
}   

///// IMAGENES /////
if(command === 'exotic'){
    const img = new Discord.MessageAttachment('https://media.discordapp.net/attachments/843943466446880781/843988282806894662/Bold_Reindeer_Illustration_E-Sports_Logo.png')
    message.channel.send(img);
}
if(command === 'creator'){
    const img = new Discord.MessageAttachment('https://media.discordapp.net/attachments/843943466446880781/843991031077928990/unknown.png')
    message.channel.send(img);
}
});

client.login(config.token);       