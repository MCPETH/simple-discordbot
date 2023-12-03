module.exports = {
    name: 'เคลียร์',
    aliases: [],
    utilisation: '{prefix}เคลียร์',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างน้องชาย` });

        if (!queue.tracks[0]) return message.channel.send({ content: `${message.author} คิวว่างน้องชาย` });

        await queue.clear();

        message.channel.send({ content: `กำจัดขยะเรียบร้อย` });
    },
};
