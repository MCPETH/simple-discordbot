module.exports = {
    name: 'หยุด',
    aliases: [],
    utilisation: '{prefix}หยุด',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        queue.destroy();

        message.channel.send({ content: `กูหยุดร้องก็ได้แม่ง` });
    },
};
