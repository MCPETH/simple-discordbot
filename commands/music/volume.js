const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'ปรับเสียง',
    aliases: [],
    utilisation: `{prefix}ปรับเสียง [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send({ content: `ระดับเสียงตอนนี้: **${queue.volume}** 🔊\n**ปรับเสียงได้ \`1\` to \`${maxVol}\` บอกพี่มาเลย.**` });

        if (queue.volume === vol) return message.channel.send({ content: `${message.author} ระดับเสียงอยู่แบบนี้อยู่แล้ว` });

        if (vol < 0 || vol > maxVol) return message.channel.send({ content: `${message.author} **บอกพี่มาเลย \`1\` to \`${maxVol}\` ถ้าอยากจะปรับเสียงอะนะ**` });

        const success = queue.setVolume(vol);

        return message.channel.send({ content: success ? `เปลี่ยนระดับเสียง: **${vol}**/**${maxVol}** 🔊` : `${message.author}, เออเร่อ` }) ;
    },
};
