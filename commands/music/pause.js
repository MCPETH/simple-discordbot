module.exports = {
    name: 'พัก',
    aliases: [],
    utilisation: '{prefix}พัก',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        const success = queue.setPaused(true);

        return message.channel.send({ content: success ? `กุหยุดร้องเพลง **${queue.current.title}** เชี่ยนี้ก็ได้` : `${message.author}, เออเร่อ` });
    },
};
