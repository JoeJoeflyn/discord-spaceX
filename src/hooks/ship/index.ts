import { getShips } from "../../api/ships";
import { Ship } from "../../shared/interface/ship";
import { createEmbed } from "../../embeds/ship/embed";

let page = 1;
let totalPages = 1;

export async function handleShipPagination(interaction, direction) {
  const {
    docs: [ship],
    totalPages: newTotalPages,
  }: { docs: Ship[]; totalPages: number } = await getShips(page);
  totalPages = newTotalPages;

  if (direction === "next" && page < totalPages) {
    page += 1;
  } else if (direction === "previous" && page > 1) {
    page -= 1;
  }

  const embed = createEmbed(ship, page, totalPages);
  await interaction.update({ embeds: [embed] });
}
