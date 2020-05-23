const GuardianClient = require('./core/client.js');
const client = new GuardianClient();

client.on("ready", () => {
  client.user.setActivity(`Best Anti-Nuke`, {type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
  console.log("This bot is online!");
});

client.login(process.env.BOT_TOKEN);