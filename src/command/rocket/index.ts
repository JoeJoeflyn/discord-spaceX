import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getRockets } from "../../api/rocket";
import { Rocket } from "../../shared/interface/rocket";
import { createEmbed } from "../../embeds/rocket/embed";
import { createRow } from "../../embeds/rocket/row";

export const data = new SlashCommandBuilder()
  .setName("rocket")
  .setDescription("Reply with all rockets");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [rocket],
      totalPages,
    }: { docs: Rocket[]; totalPages: number } = await getRockets(1);

    const embed = createEmbed(rocket, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching rockets:", error);
    await interaction.reply({
      content: "Failed to fetch rockets.",
      ephemeral: true,
    });
  }
}
