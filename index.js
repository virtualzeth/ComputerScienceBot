require("dotenv").config({ path: "./config.env" });
const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("The bot is ready!");
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase() === ">help") {
    msg.channel.send("This feature is under development...");
  }
});
