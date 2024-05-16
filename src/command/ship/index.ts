import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getShips } from "../../api/ships";
import { createEmbed } from "../../embeds/ship/embed";
import { createRow } from "../../embeds/ship/row";
import { Ship } from "../../shared/interface/ship";

export const data = new SlashCommandBuilder()
  .setName("ship")
  .setDescription("Reply with all recovery ships");

export async function execute(interaction: CommandInteraction) {
  const {
    docs: [ship],
    page,
    totalPages,
  }: { docs: Ship[]; page: number; totalPages: number } = await getShips(1);

  const embed = createEmbed(ship, page, totalPages);
  const row = createRow();

  await interaction.reply({ embeds: [embed], components: [row] });
}
