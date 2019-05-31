const Discord = require("discord.js")
const bot = new Discord.Client()
const Manager = new Discord.ShardingManager('./main.js');
const BotSettings = require("./botsettings.json")
//Start-Up
  bot.on("ready", async () => {

    console.log(`\nBot ist online.\nName + Tag: ${bot.user.username}#${bot.user.discriminator}\nPrefix: ${BotSettings.prefix}`)
    bot.user.setStatus("dnd")//online, idle, dnd, invisible
    bot.user.setActivity(`mit verrückten`, {

        type: "PLAYING" //PLAYING, STREAMING, LISTENING, WATCHING
    })
    
    bot.on("guildMemberAdd", async member => { 
        if(member.guild.id == `572890865417060370`) {
        bot.channels.get("576128178448236567").send(` Willkommen ${member} auf der ${member.guild.name}:smiley:`)
        }
    });

});bot.login(BotSettings.process.env.Bottoken)
