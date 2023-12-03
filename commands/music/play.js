const { QueryType } = require('discord-player');

module.exports = {
    name: 'ขอเพลง',
    aliases: [],
    utilisation: '{prefix}ขอเพลง [ชื่อเพลง/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
if (!args[0]) return message.channel.send({ content: `${message.author} บอกเพลงมาเลย` });

        const res = await client.player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send({ content: `${message.author} ไม่เจอเพลงวะเพื่อน` });

        const queue = await client.player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel)
        } catch {
            await client.player.deleteQueue(message.guild.id);
            return message.channel.send({ content: `${message.author} กุเข้าห้องไม่ได้ใครแก้งกู` });
        }

        //await message.channel.send({ content: `> ${res.playlist ? '>' : 'แทร็ค'} กำลังโหลดใจเย็นวัยรุ่น` });

if(client.config.opt.selfDeaf === false) {
let channel = message.member.voice.channel;
const { joinVoiceChannel } = require('@discordjs/voice');
const connection = joinVoiceChannel({
   channelId: channel.id,
   guildId: channel.guild.id,
   adapterCreator: channel.guild.voiceAdapterCreator,
   selfDeaf: true
});
}

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};
