const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'เบส',
    aliases: [],
    utilisation: '{prefix}เบส',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

   if (!queue || !queue.playing) return message.channel.send({ content: `${message.author} คิวว่างคับน้อง` });
        const embed = new MessageEmbed();
         const filters = [];
         queue.getFiltersEnabled().map(x => filters.push(x));
         queue.getFiltersDisabled().map(x => filters.push(x));
         const filter = 'bassboost'
         const filtersUpdated = {};
         filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;
        //  console.log(filters)
        //  console.log(filter)
        //  console.log(filtersUpdated[filter])
        //  console.log(filtersUpdated)
         await queue.setFilters(filtersUpdated);
         embed.setColor('RED');
         embed.setDescription(`**\`เพิ่มเสียงเบส => ${queue.getFiltersEnabled().includes(filter) ? 'เปิด✅' : 'ปิด❌'}\`**`);
         embed.setTimestamp();
         embed.setFooter({text: 'ขนุนร้องเพลง', iconURL: message.author.avatarURL({ dynamic: true }) });
         message.channel.send({ embeds: [embed] });
    },
};