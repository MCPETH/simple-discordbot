module.exports = {
    name: 'ข้าม',
    aliases: [],
    utilisation: '{prefix}ข้าม',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, คิวว่างคับน้อง` });

        const success = queue.skip();
        return message.channel.send({ content: success ? `ข้ามเพลง **${queue.current.title}** ละคับน้อง ✅ \n**(โดย ${message.author})**` : `${message.author}, เออเร่อ ❌` });
    },
};
