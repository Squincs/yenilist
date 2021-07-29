const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const MoTion42 = new Discord.MessageEmbed()
  .setColor('#43d6bc')
  .setThumbnail("")
  .setTimestamp()
  .setFooter(`Atr bot List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"")
  .setDescription(`Bilgilendirme kısmını okumayı unutmayın! \`(b!bilgilendirme)\``)
  .addField(`\`d!bilgilendirme\``,`**Bot list hakkında bilgi**`, true) 
  .addField(`\`d!botlist-komutlar\``,`**Bot list komutları**`, true)
  .addField(`\`d!ayarlar-durum\``,`**Komutların Durumu**`, true)

return message.channel.send(MoTion42)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yardım',
    description: 'Yardım List.',
    usage: 'yardım'
}
