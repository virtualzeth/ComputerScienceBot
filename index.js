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
  } else if (msg.content.startsWith(">eval ")) {
    let content = msg.content.substr(">eval ".length);
    try {
      msg.channel.send(eval(content));
    } catch (e) {
      if (e instanceof SyntaxError) {
        msg.channel.send("Syntax error..");
      } else {
        msg.channel.send(`I don't know how to operate on this: '${content}'`);
      }
    }
  }
});
