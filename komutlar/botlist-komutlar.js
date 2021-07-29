const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const pink = new Discord.MessageEmbed()
  .setColor('#43d6bc')
  .setThumbnail("")
  .setTimestamp()
  .setFooter(`Atr bot List`,client.user.avatarURL())  
  .setAuthor(client.user.username,"")
  .addField('**» Atr bot List Komutları**',`
╔═══════════════════════════════════╗
║**»** \`d!bot-ekle\` **Bot eklersiniz.**
║══════════════════════════════════
║**»** \`d!bot-onayla\` **Bot onaylarsınız.**
║══════════════════════════════════
║**»** \`d!bot-reddet\` **Bot reddedersiniz.**
║══════════════════════════════════
║**»** \`d!başvuru-log ayarla/sıfırla\` **Başvuru log kanalı ║ayarlarsınız.**
║══════════════════════════════════
║**»** \`d!başvuru-kanal ayarla/sıfırla\` **Başvuru kanalı ayarlarsınız.**
║══════════════════════════════════
║**»** \`d!bot-rol ayarla/sıfırla\` **Botlist botlarına otomatik rol ║verir.**
║══════════════════════════════════
║**»** \`d!developer-rol ayarla/sıfırla\` **Developer rolü ayarlarsınız.**
║══════════════════════════════════
║**»** \`d!yetkili-log ayarla/sıfırla\` **Yetkili log kanalı ayarlarsınız.**
║══════════════════════════════════
║**»** \`d!yetkili-rol ayarla/sıfırla\` **Botları onaylatıcak test ║edicek yetkili rol ayarlarsınız.**
╚═══════════════════════════════════╝
`)
 return message.channel.send(pink)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'botlist-komutlar',
    description: 'BotList.',
    usage: 'botlist-komutlar'
}
