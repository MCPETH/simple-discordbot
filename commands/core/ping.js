const Discord = require('discord.js');
module.exports = {
    name: 'ขอค่าปิง',
    aliases: [],
    utilisation: '{prefix}ขอค่าปิง',

    execute(client, message) {
        const start = Date.now();
        message.channel.send('เบ้ง!').then(m => {
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(client.user.username + " - เบ้ง!")
                .setThumbnail(client.user.displayAvatarURL())
                .addField(`ปิงข้อความ`, `\`${Date.now() - start}ms\` 🛰️`)
                .addField(`เวลาในการตอบสนองข้อความ`, `\`${m.createdTimestamp - start}ms\` 🛰️`)
                .addField(`เวลาในการตอบสนองของ API`, `\`${Math.round(client.ws.ping)}ms\` 🛰️`)
                .setTimestamp()
                .setFooter({ text: 'ขนุนร้องเพลง', iconURL: message.author.avatarURL({ dynamic: true }) });
            m.edit({ embeds: [embed] });
        })
    },
};
