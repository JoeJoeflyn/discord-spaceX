import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { createEmbed } from "../../embeds/launch/embed";
import { Launch } from "../../shared/interface/launch";
import { getLaunches } from "./../../api/launch";
import { createRow } from "../../embeds/launch/row";

export const data = new SlashCommandBuilder()
  .setName("launch")
  .setDescription("Reply with all launches");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [launch],
      totalPages,
    }: { docs: Launch[]; totalPages: number } = await getLaunches(1);

    const embed = createEmbed(launch, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching launches:", error);
    await interaction.reply({
      content: "Failed to fetch launches.",
      ephemeral: true,
    });
  }
}
