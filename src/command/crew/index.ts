import { Crew } from "./../../shared/interface/crew";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getCrewMembers } from "../../api/crew";
import { createEmbed } from "../../embeds/crew/embed";
import { createRow } from "../../embeds/crew/row";

export const data = new SlashCommandBuilder()
  .setName("crew")
  .setDescription("Reply with all crew members");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [crew],
      totalPages,
    }: { docs: Crew[]; totalPages: number } = await getCrewMembers(1);

    const embed = createEmbed(crew, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching crew:", error);
    await interaction.reply({
      content: "Failed to fetch crew.",
      ephemeral: true,
    });
  }
}
