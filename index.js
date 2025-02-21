const express = require("express"); 
const app = express();
const keep_alive = require('./keep_alive.js')

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
})

client.login(process.env.token); 
