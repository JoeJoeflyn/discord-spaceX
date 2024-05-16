import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getLandingPads } from "../../api/landingPad";
import { LandingPad } from "../../shared/interface/landingPad";
import { createEmbed } from "../../embeds/landingPad/embed";
import { createRow } from "../../embeds/landingPad/row";

export const data = new SlashCommandBuilder()
  .setName("landing-pad")
  .setDescription("Reply with all landing pads");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [landingPad],
      totalPages,
    }: { docs: LandingPad[]; totalPages: number } = await getLandingPads(1);

    const embed = createEmbed(landingPad, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching landing pads:", error);
    await interaction.reply({
      content: "Failed to fetch landing pads.",
      ephemeral: true,
    });
  }
}
