<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/vJs36ES"><img src="https://cdn.discordapp.com/attachments/707201738255368194/770668703271354408/hmtai.png" width="546" alt="HMtai!" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/hmtai"><img src="https://img.shields.io/npm/v/hmtai.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/hmtai"><img src="https://img.shields.io/npm/dt/hmtai.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>
hmtai is an Anime / Hentai (NSFW) Image API which simplifies how you fetch random images from the local JSON! More features and functions will be added soon!

Will be i updating this API?
Of course nyse, dude, but this API has a 17.690 NSFW picture, and 342 SFW picture. 18 031 total.
All picture we added manually.

My goal is to create the most depraved library ever and I think I got it

[Discord Server](https://discord.gg/vJs36ES) | [Hentai Manager Bot in Discord](https://discordapp.com/api/oauth2/authorize?client_id=720662500118364252&permissions=8&scope=bot) | [REST API](https://hmtai.herokuapp.com/endpoints) | [HMfull](https://www.npmjs.com/package/hmfull)

## Installation

`npm install hmtai`

## Changelogs
### v2.0.13
- Deleted Bad for TOS images from incest (will be update not soon)

## Example(s)

**NodeJS:**

```javascript
// hmtai //
const hmtai = require("hmtai");

// Get SFW Neko Images, uwu //
console.log("SFW Neko: " + hmtai.neko());

// Get other NSFW Images //
console.log("Hentai: " + hmtai.nsfw.hentai());
console.log("BDSM: " + hmtai.nsfw.bdsm());
console.log("Ero: " + hmtai.nsfw.ero());
```

## Legacy Function(s)

Example:

```javascript
hmtai.function(); // Format
hmtai.neko(); // Example
hmtai.wallpaper(); // Example 2
```

| Function        | Description                        |
| --------------- | ---------------------------------- |
| wallpaper       | SFW Wallpaper with Anime           |
| mobileWallpaper | SFW Wallpaper with Anime on Mobile |
| neko            | SFW Neko Girls (Cat Girls)         |
| jahy            | So hot Jahy :3                     |
| lick            | SFW licks gifs :P                  |
| slap            | SFW slap gifs xD                   |
| depression      | SFW depression Gifs :c             |

## NSFW Function(s)

Example:

```javascript
hmtai.nsfw.function(); // Format
hmtai.nsfw.hentai(); // Example
```

| Function            | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| ass                 | I know you like anime ass~ uwu                                     |
| bdsm                | If you don't know what it is, search it up                         |
| cum                 | Basically sticky white stuff that is usually milked from sharpies. |
| creampie            | So hot, sticky, and inside uwu                                     |
| manga               | Sends a random doujin page imageURL!                               |
| femdom              | Female Domination?                                                 |
| hentai              | Sends a random vanilla hentai imageURL~                            |
| incest              | I know, you like it. Brothet and sister <3 And..mo...omg           |
| masturbation        | You like lewd solo?~                                               |
| public              | Some people like do it on a public..uh~                             |
| ero                 | eros, ero Uniforms, etc, you know what eros are :3                 |
| orgy                | Group Lewd Acts                                                    |
| elves               | So, it's not Elvis Presley, but i know, you like it :)             |
| yuri                | What about cute Les?~                                              |
| pantsu              | I mean... just why? You like underwear?                            |
| glasses             | Girls that wear glasses, uwu~                                      |
| cuckold             | Wow, I won't even question your fetishes.                          |
| blowjob             | Basically an image of a girl sucking on a sharp blade!             |
| boobjob             | So soft, round ... gentle ... damn we love it                      |
| foot                | So you like smelly feet huh?                                       |
| thighs              | Oh, i so like it, it's best of the best, like a religion <3        |
| vagina              | The genitals of a female, or a cat, you give the meaning.          |
| ahegao              | So happy woman faces :))                                           |
| uniform             | School and many other Uniforms~                                    |
| gangbang            | 5 on 1? Uh..                                                       |
| tentacles           | I'm sorry but, why do you like it? Uh..                            |
| gif                 | Basically an animated image, so yes :3                             |
| nsfwNeko            | NSFW Neko Girls (Cat Girls)                                        |
| nsfwMobileWallpaper | NSFW Anime Mobile Wallpaper                                        |
| zettaiRyouiki       | That one part of the flesh being squeeze in thigh-highs~<3         |

## Wallpaper Function(s)

Example:

```javascript
hmtai.nsfw.function(); // NSFW Format
hmtai.nsfw.mobileWallpaper(); // NSFW Example
```

| Function                         | Description                             |
| -------------------------------- | --------------------------------------- |
| hmtai.mobileWallpaper()          | Fetch a random SFW Wallpaper! (Mobile)  |
| hmtai.wallpaper()                | Fetch a random SFW Wallpaper! (Desktop) |
| hmtai.nsfw.nsfwMobileWallpaper() | Fetch a random NSFW Wallpaper! (Mobile) |

## Discord Bot Example

```javascript
// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

// Create New Client //
const client = new Discord.Client();

// Bot Settings //
const settings = {
  prefix: "YOUR_BOT_PREFIX",
  token: "YOUR_BOT_TOKEN",
};

client.on("message", async (message) => {
  // Create New Embed //
  const embed = new Discord.MessageEmbed();

  // Defines Command //
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(" ")[0];
  
  // Onii-chan, don't reply! //
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (command == "nsfwNeko") {

    // For Embed //
    embed.setImage(hmtai.nsfw.nsfwNeko());
    return message.channel.send(embed);

    // For Plain Text //
    return message.channel.send(hmtai.nsfw.nsfwNeko());

    // For Attachment //
    let img = hmtai.nsfw.nsfwNeko();
    return message.channel.send({file: [{ attachment: img, name: `NSFW${img.slice(-5)}` }]});
  } else if (command == "ero") {

    // For Embed //
    embed.setImage(hmtai.nsfw.ero());
    return message.channel.send(embed);

    // For Plain Text //
    return message.channel.send(hmtai.nsfw.ero());

    // For Attachment //
    let img = hmtai.nsfw.nsfwNeko();
    return message.channel.send({file: [{ attachment: img, name: `NSFW${img.slice(-5)}` }]});
  }
});
```

## Thank Yous
- **💗Ｍｉｋａｎｅｓａ💗#1469** (What he shared with me his NSFW library!)

## Sources
I hand picked most of the images from the following: Discord Servers, Konachan, Patreon, Friends sending to me, nHentai, gelbooru, etc.

## Support

[Discord Server](https://discord.gg/vJs36ES)