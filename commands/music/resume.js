module.exports = {
    name: 'ต่อเลย',
    aliases: [],
    utilisation: '{prefix}ต่อเลย',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue) return message.channel.send({ content:`${message.author} คิวว่างคับน้อง ` });

        const success = queue.setPaused(false);

        return message.channel.send({ content: success ? `**${queue.current.title}** เอาเว่ยๆ✅` : `${message.author}, เออเร่อ ❌` });
    },
};
