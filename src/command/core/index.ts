import { createEmbed } from "../../embeds/core/embed";
import { createRow } from "../../embeds/core/row";
import { Core } from "../../shared/interface/core";
import { getCores } from "./../../api/core";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("core")
  .setDescription("Reply core information.");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [core],
      totalPages,
    }: { docs: Core[]; totalPages: number } = await getCores(1);

    const embed = createEmbed(core, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching core:", error);
    await interaction.reply({
      content: "Failed to fetch core.",
      ephemeral: true,
    });
  }
}
