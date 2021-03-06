const glob = require("glob"),
  path = require("path");

module.exports = async (client) => {
  const commandFiles = glob.sync("./src/slash/**/**/*.js");
  for (const file of commandFiles) {
    const command = require(path.resolve(file));

    client.slash.set(command.name, command);
    const data = {
      name: command.name,
      description: command.description || "Empty Description",
      options: command.options ? command.options : [],
    };
    //global command creation :D
    await client.application.commands.create(data);
  }
};
