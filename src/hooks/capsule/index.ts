import { getCapsules } from "../../api/capsule";
import { createEmbed } from "../../embeds/capsule/embed";

let page = 1;
let totalPages = 1;

export async function handleCapsulePagination(interaction, direction) {
  if (direction === "next" && page < totalPages) {
    ++page;
  } else if (direction === "previous" && page > 1) {
    --page;
  }

  const {
    docs: [capsule],
    totalPages: newTotalPages,
  } = await getCapsules(page);
  totalPages = newTotalPages;

  const embed = createEmbed(capsule, page, totalPages);
  await interaction.update({ embeds: [embed] });
}
