const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'ลูป',
    aliases: [],
    utilisation: '{prefix}ลูป <คิว>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง ❌` });

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send({ content: `${message.author} ปิดลูปก่อนไอสัส **(${client.config.px}loop)** ❌` });

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send({ content: success ? `ลูป: **${queue.repeatMode === 0 ? 'ปิด' : 'เปิด'}** ลูป ` : `${message.author}, เออเร่อ ❌` });
        } else {
            if (queue.repeatMode === 2) return message.channel.send({ content: `${message.author} ปิดลูปคิวก่อนไอสัส **(${client.config.px} ลูปคิว)** ` });

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send({ content: success ? `ลูป : **${queue.repeatMode === 0 ? 'ปิด' : 'เปิด'}** 🔂` : `${message.author}, เออเร่อ ❌` });
};
    },
};