require('dotenv').config()
const { Bot, InputFile } = require("grammy");
const fs = require('fs');
const ytdl = require('ytdl-core');
const bot = new Bot(process.env.BOT_TOKEN)

bot.command('start', ctx => {
    ctx.reply('Menga youtube link yuboring')
})


bot.on("message", async ctx => {
    console.log('world')
    const info = await ytdl.getInfo(ctx.message.text)
    ytdl(ctx.message.text).pipe(fs.createWriteStream(`videos/${info.videoDetails.videoId}.mp4`))
    console.log('world')
    // ctx.replyWithVideo(new InputFile(__dirname + `/videos/${info.videoDetails.videoId}.mp4`))
})


bot.start({
    onStart: me => {
      console.log('Bot working...')
    }
  })