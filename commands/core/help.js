const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ขอคำสั่ง',
    aliases: [],
    showHelp: false,
    utilisation: '{prefix}ขอคำสั่ง',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('อ่านแล้วจำ') ;
        embed.addField(`มีอยู่ - ${commands.size} ตามนี้`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases[0]})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter({ text: 'ขนุนร้องเพลง', iconURL:message.author.avatarURL({ dynamic: true }) });
        message.channel.send({ embeds: [embed] });
    },
};
