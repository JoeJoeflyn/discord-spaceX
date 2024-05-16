import http from "http";
import { handleAction } from "./action";
import { commands } from "./command";
import { config } from "./config";
import { client } from "./config/client";
import { deployCommands } from "./deploy";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Discord bot is running\n");
});

const PORT = process.env.PORT || 3001;

client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");
});

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const { commandName } = interaction;
    const command = commands[commandName as keyof typeof commands];

    if (!command) {
      interaction.reply(`No command matching ${commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      if (!interaction.replied) {
        console.log(error);
        await interaction.reply(
          "An error occurred while executing the command."
        );
      }
    }
  } else if (interaction.isButton()) {
    handleAction(interaction);
  }
});

client.login(config.DISCORD_TOKEN).catch(console.error);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);

  setInterval(() => {
    http.get(`http://localhost:${PORT}`);
  }, 600000);
});
