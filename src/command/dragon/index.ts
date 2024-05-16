import { Dragon } from "./../../shared/interface/dragon";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getDragons } from "../../api/dragon";
import { createEmbed } from "../../embeds/dragon/embed";
import { createRow } from "../../embeds/dragon/row";

export const data = new SlashCommandBuilder()
  .setName("dragon")
  .setDescription("Reply with all dragon");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [dragon],
      totalPages,
    }: { docs: Dragon[]; totalPages: number } = await getDragons(1);

    const embed = createEmbed(dragon, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching dragon:", error);
    await interaction.reply({
      content: "Failed to fetch dragon.",
      ephemeral: true,
    });
  }
}
