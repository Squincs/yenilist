const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
    
    
  const seksizaman = moment
    
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("#17ebce")
    .setTimestamp()
    .setTitle(' :white_circle: AtrBotLıst İstatistikleri ')
    .setFooter("AtrBotLıst İstatistikleri", client.user.avatarURL())
    
    .addField(":white_circle:  **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    
    .addField(":white_circle:  **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField(":white_circle:  **Çalışma süresi**", seksizaman, true)
    
    

    .addField(":white_circle:  **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField(":white_circle:  **Node.JS sürüm**", `${process.version}`, true)
    
    .addField(":white_circle:  **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField(":white_circle:  **Bit**", `\`${os.arch()}\``, true)
    .addField(":white_circle:  **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
     

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","bilgi"],
  permLevel: 0
};

exports.help = {
    cooldown: 5 ,
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};