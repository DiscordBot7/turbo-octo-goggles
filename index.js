const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", 'GUILD_MESSAGES'] });

client.on("message", message => {
  if (message.content === "Привіт") {
    message.channel.send("Добрий день!")
  }
})

client.login(process.env.token);