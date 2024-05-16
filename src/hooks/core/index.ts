import { getCores } from "../../api/core";
import { createEmbed } from "../../embeds/core/embed";

let page = 1;
let totalPages = 1;

export async function handleCorePagination(interaction, direction) {
  if (direction === "next" && page < totalPages) {
    ++page;
  } else if (direction === "previous" && page > 1) {
    --page;
  }

  const {
    docs: [core],
    totalPages: newTotalPages,
  } = await getCores(page);
  totalPages = newTotalPages;

  const embed = createEmbed(core, page, totalPages);
  await interaction.update({ embeds: [embed] });
}
