const { Client, Collection, Intents } = require("discord.js");

const client = new Client({
  intents: Intents.ALL,
});
client.login("oop");
client.slash = new Collection();
client.once("ready", () => {
  require("./loaders/slash")(client);
});
client.on("interaction", async (interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.slash.get(interaction.command.name);

  await command.execute(
    client,
    interaction,
    interaction.options.map((item) => item.value)
  );
});
