module.exports = {
  name: "test",
  description: "test kek",
  options: [
    {
      name: "input",
      type: "STRING",
      description: "The input which should be tested back",
      required: true,
    },
  ],
  async execute(client, interaction, args) {
    interaction.reply(args[0] || "hi");
  },
};
