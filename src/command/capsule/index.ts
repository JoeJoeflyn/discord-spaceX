import { createEmbed } from "../../embeds/capsule/embed";
import { createRow } from "../../embeds/capsule/row";
import { Capsule } from "../../shared/interface/capsule";
import { getCapsules } from "./../../api/capsule";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("capsule")
  .setDescription("Reply capsule information.");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [capsule],
      totalPages,
    }: { docs: Capsule[]; totalPages: number } = await getCapsules(1);

    const embed = createEmbed(capsule, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching capsule:", error);
    await interaction.reply({
      content: "Failed to fetch capsule.",
      ephemeral: true,
    });
  }
}
