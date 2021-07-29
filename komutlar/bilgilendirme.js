const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  let basvuru = db.get(`basvuru.kanal_${message.guild.id}`);
  
const motion42 = new Discord.MessageEmbed()

  .setColor('#43d6bc')
  .setThumbnail("")
  .setTimestamp()
  .setFooter(`Atr bot List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"")
  .setDescription(`
:pushpin:                                            **__Bot List Kurallar__**                                            :pushpin:

 

\`1)\` Dm-Duyuru Komutu Olmamalıdır.

\`2)\` Botunuz Ban Botu Olmamalıdır.

\`3)\` Botunuz Saldırı Botu Olmamalıdır.

\`4)\` AntiSpam ve Dm Hg BB komutları ayarlamalı olmalıdır.

\`5)\` \`d!bot-ekle\` komutunu spamlayak yasak. \`(Karaliste alınırsınız)\`

\`6)\` Botunuzda everyone - here ve ya her hangi bi rolü herkese açık şekilde etiketlemek varsa açık şekilde botunuz onaylanmaz.

:gear: **__Bot Nasıl Eklenir?__** :gear:

<#${basvuru}> Kanalına gelip \`d!bot-ekle\` \`bot-id\` \`prefix\` \`dbl-onay-durumu\` şeklinde başvuru yolluyorsunuz.

:dizzy: \`Not:\` Botunuz Onaylı İse Direk Eklenir.
:dizzy: \`Not2:\` Botunuz **DBL** onaylıysa direk onaylanır. 

`)
 
return message.channel.send(motion42)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'bilgilendirme',
    description: 'bilgilendirme',
    usage: 'bilgilendirme'
}
