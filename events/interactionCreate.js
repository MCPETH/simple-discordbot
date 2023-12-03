const Discord = require('discord.js');
module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);
    switch (int.customId) {
        case 'saveTrack': {
          if (!queue || !queue.playing) return int.reply({ content: `ไม่มีเพลงที่กำลังเล่นอยู่ตอนนี้คับน้อง`, ephemeral: true, components: [] });

          const embed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle(client.user.username + " - Save Track")
          .setThumbnail(client.user.displayAvatarURL())
          .addField(`รายชื่อเพลง`, `\`${queue.current.title}\``)
          .addField(`ระยะเวลา`, `\`${queue.current.duration}\``)
          .addField(`URL`, `${queue.current.url}`)
          .addField(`ขอเพลงโดย`, `${queue.current.requestedBy}`)
          .setTimestamp()
          .setFooter({ text: 'ขนุนร้องเพลง', iconURL: int.user.displayAvatarURL({ dynamic: true }) });
          int.member.send({ embeds: [embed] }).then(() => {
                return int.reply({ content: `ตอบแชทดิไอสัส`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `กุแชทหามึงไม่ได้. ❌`, ephemeral: true, components: [] });
            });
        }
        break
    }
};
