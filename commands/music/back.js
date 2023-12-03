module.exports = {
    name: 'กลับลำ',
    aliases: [],
    utilisation: '{prefix}กลับลำ',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        if (!queue.previousTracks[1]) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        await queue.back();

        message.channel.send({ content: `กำลังสับรางโปรดรอสักครู่` });
    },
};
