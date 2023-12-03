const { Player } = require('discord-player');
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');

let client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
});

client.config = require('./config');
client.player = new Player(client, client.config.opt.discordPlayer);
client.commands = new Collection();
const player = client.player

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    console.log(`-> Loaded event ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
};
console.log(`-> Loaded commands...`);
readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`${command.name.toLowerCase()} ✅`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    };
});


player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new MessageEmbed();
    const timestamp = queue.getPlayerTimestamp();
    const progress = queue.createProgressBar();
        embed.setColor('RED');
        embed.setTitle(`กูจะร้องเพลง \n**${track.title}**`);
        embed.setThumbnail(`${track.thumbnail}`)
        embed.setURL(`${track.url}`)
        embed.setDescription(`\`${progress}\` \`(${timestamp.progress}%)\`\n(ขอเพลงโดย <@${track. requestedBy.id}>)`)
        queue.metadata.send({ embeds: [embed] });
});

 player.on('trackAdd', (queue, track) => {
    const timestamp = queue.getPlayerTimestamp();
    const trackDuration = timestamp.progress == 'Forever' ? 'Endless (Live)' : track.duration;
    const embed = new MessageEmbed();
        embed.setColor('RED');
        embed.setTitle(`**เพิ่มลงคิวเรียบร้อย ✅**`);
        embed.setDescription(`${track.title} \n**\`ความยาว\`** \`${trackDuration}\``)
    //  queue.metadata.send({ content: `**${track.title}** เพิ่มลงคิวเรียบร้อย ✅` });
     queue.metadata.send({ embeds: [embed] });
 });

player.on('botDisconnect', (queue) => {
    queue.metadata.send({ content: 'กูโดนเตะไอ้สัส' });
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send({ content: 'ไม่เห็นมีใครเลยไอ้เหี้ย' });
});

player.on('queueEnd', (queue) => {
    queue.metadata.send({ content: 'เพลงจบแล้วไอควาย'});
});



if(client.config.TOKEN){
client.login(client.config.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})
} else {
console.log("Please Write Your Bot Token Opposite The Token In The config.js File In Your Project!")
}
