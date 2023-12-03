const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');
module.exports = {
    name: 'ยูทูป',
    aliases: [],
    utilisation: '{prefix}ยูทูป',
    voiceChannel: true,

    execute(client, message) {
        client.discordTogether = new DiscordTogether(client);
        if(message.member.voice.channel) {
            // const saveButton = new MessageButton();
            // saveButton.setStyle('LINK')
            // const row = new MessageActionRow().addComponents(saveButton);
            
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                const embed = new MessageEmbed();
                embed.setColor('RED');
                embed.setTitle(`ปุ่มนี้รองรับเฉพาะPCและมีอายุ1วันหากปุ่มหมดอายุสามารถใช้คำสั่งอีกรอบได้`)
                embed.setTimestamp();
                embed.setFooter({ text: 'ขนุนร้องเพลง', iconURL: message.author.avatarURL({ dynamic: true }) });
                const saveButton = new MessageButton();
                saveButton.setLabel('เปิดยูทูป');
                saveButton.setStyle('LINK')
                const row = new MessageActionRow().addComponents(saveButton);
                saveButton.setURL(`${invite.code}`)
                return message.channel.send({ embeds: [embed], components: [row] });
            });
        }
    },
};
