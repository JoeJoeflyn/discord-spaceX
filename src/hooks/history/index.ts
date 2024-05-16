import { getHistory } from "../../api/history";
import { createEmbed } from "../../embeds/history/embed";
import { History } from "../../shared/interface/history";

let page = 1;
let totalPages = 1;

export async function handleHistoryPagination(interaction, direction) {
  const {
    docs: [history],
    totalPages: newTotalPages,
  }: { docs: History[]; totalPages: number } = await getHistory(page);
  totalPages = newTotalPages;

  if (direction === "next" && page < totalPages) {
    page += 1;
  } else if (direction === "previous" && page > 1) {
    page -= 1;
  }

  const embed = createEmbed(history, page, totalPages);
  await interaction.update({ embeds: [embed] });
}
