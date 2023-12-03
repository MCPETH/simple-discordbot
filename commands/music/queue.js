 const { MessageEmbed } = require('discord.js');
// const { Player } = require('discord-player');
// const { Client, Intents, Collection, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'คิว',
    aliases: [],
    utilisation: '{prefix}คิว',
    voiceChannel: true,

    execute(client, message, track) {
        const queue = client.player.getQueue(message.guild.id);

 
        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        if (!queue.tracks[0]) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });

        const embed = new MessageEmbed();
        const methods = ['🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setTitle(`โหมด : ${methods[queue.repeatMode]}`);
        // const timestamp = queue.getPlayerTimestamp();
        // const trackDuration = timestamp.progress == 'Forever' ? 'Endless (Live)' : track.duration;
        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | \`${track.duration}\` | ${track.url} | ${track.author} (ขอเพลงโดย <@${track. requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `และ **${songs - 5}** เพลงอื่นๆ...` : `มีอีก **${songs}** รายชื่อเพลง`;

        embed.setDescription(`กำลังร้อง : \`${queue.current.title}\`\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs }`);

        embed.setTimestamp();
        embed.setFooter({text: 'ขนุนร้องเพลง', iconURL: message.author.avatarURL({ dynamic: true }) });

        message.channel.send({ embeds: [embed] });
    },
};
