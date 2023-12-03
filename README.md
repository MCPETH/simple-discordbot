# simple-discordbot
ez discordbot
Discord music bot designed for educational purposes. The bot is built using the Discord.js library and utilizes the Discord Player library for handling music-related functionalities. Whether you're a developer looking to learn about Discord bot development or an educator aiming to demonstrate practical applications of programming

## Kanoon Sing a Song

## Showcase
![image](https://github.com/MCPETH/simple-discordbot/assets/30114061/f2213b99-8e2c-437e-96f1-18168d785faf)
![image](https://github.com/MCPETH/simple-discordbot/assets/30114061/6243f9c8-4f84-4e51-ae43-3adde04bc52d)
![image](https://github.com/MCPETH/simple-discordbot/assets/30114061/baa4b075-99a9-4bef-b539-29fa181560d3)
![image](https://github.com/MCPETH/simple-discordbot/assets/30114061/8a36010b-1cd0-44c9-b716-e0ebfbbb75c0)
![image](https://github.com/MCPETH/simple-discordbot/assets/30114061/5b50a86c-6b4e-4268-9345-ce0815b668fc)
![image](https://github.com/MCPETH/simple-discordbot/assets/30114061/7eec09bc-13f1-46ed-8f7c-4a78bd5086db)

## Features
Music Playback: The bot supports playing music in voice channels, providing a dynamic and interactive experience for users.
Command System: A comprehensive command system is implemented, allowing users to control the bot's actions through various commands.
Event Handling: The bot is equipped with event handlers to manage various scenarios, such as track start, track addition to the queue, bot disconnection, empty voice channels, and queue completion.
Educational Insights: The code includes comments and structure to help learners understand the implementation details and the logic behind each component.

## Dependencies
Discord.js: A powerful library for interacting with the Discord API.
Discord Player: A library for handling music-related functionalities in Discord bots.
fs: A Node.js module for interacting with the file system.

## Getting Started
Clone the repository to your local machine.
Install the required dependencies using npm install.
Configure the bot by updating the config.js file with your bot token and any other relevant settings.
Run the bot using node index.js or your preferred method.

## Event Handling
Events are an integral part of the bot's functionality. Explore the ./events/ directory to understand how events are implemented and utilized.

## Customization
Feel free to customize the bot to suit your educational needs. Add new commands, modify existing ones, or integrate additional features to enhance the learning experience.

## Disclaimer
This project is intended for educational purposes only. Be sure to comply with Discord's terms of service and guidelines when deploying and using the bot in Discord servers.

## Getting Help
If you encounter any issues or have questions, feel free to open an issue in the GitHub repository. Additionally, you can explore the Discord.js and Discord Player documentation for more in-depth information on the libraries used in this project. Happy coding!

## Config
```js
module.exports = {
        TOKEN: '', //write your discord bot token
        px: 'ขนุน',
        playing: 'พิมพ์ ขนุน ขอคำสั่ง (เพื่อดูคำสั่งของบอท)',

    opt: {
        DJ: {
            enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'DJ', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        selfDeaf: true, //IF YOU WANT TO DEAF THE BOT, set false to true.
        maxVol: 100, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }
};
```

## Example Creeate Commands
```js
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'namehere',
    aliases: [],
    showHelp: false,
    utilisation: '{prefix}commands here',

    execute(client, message, args) {
    },
};
```

```js
module.exports = {
    name: 'name here',
    aliases: [],
    utilisation: '{prefix}commands here',
    voiceChannel: true,

    execute(client, message) {
};
```

## Package
```json
{
  "name": "music-bot-v2",
  "main": "main.js",
  "author": "Umut Bayraktar",
  "description": "Discord.js V13 Compatible Umut Bayraktar Youtube Private Music Bot Codes for Shared on GitHub! and modifed by MCPE TH",
  "scripts": {
    "start": "node main.js"
  },
  "dependencies": {
    "@discordjs/voice": "^0.8.0",
    "discord-player": "^5.2.0",
    "discord-together": "^1.3.3",
    "discord.js": "^13.6.0",
    "express": "^4.17.2",
    "ffmpeg-static": "^4.4.0",
    "ms": "^3.0.0-canary.1",
    "opusscript": "^0.0.8"
  },
  "engines": {
    "node": "16.x"
  }
}
```
