import { History } from "./../../shared/interface/history";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getHistory } from "../../api/history";
import { createEmbed } from "../../embeds/history/embed";
import { createRow } from "../../embeds/history/row";

export const data = new SlashCommandBuilder()
  .setName("history")
  .setDescription("Reply with all history events");

export async function execute(interaction: CommandInteraction) {
  try {
    const {
      docs: [history],
      totalPages,
    }: { docs: History[]; totalPages: number } = await getHistory(1);

    const embed = createEmbed(history, 1, totalPages);
    const row = createRow();

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error("Error fetching history:", error);
    await interaction.reply({
      content: "Failed to fetch history.",
      ephemeral: true,
    });
  }
}
