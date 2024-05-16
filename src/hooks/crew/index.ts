import { getCrewMembers } from "../../api/crew";
import { createEmbed } from "../../embeds/crew/embed";

let page = 1;
let totalPages = 1;

export async function handleCrewPagination(interaction, direction) {
  if (direction === "next" && page < totalPages) {
    page++;
  } else if (direction === "previous" && page > 1) {
    page--;
  }

  const {
    docs: [crew],
    totalPages: newTotalPages,
  } = await getCrewMembers(page);
  totalPages = newTotalPages;

  const embed = createEmbed(crew, page, totalPages);
  await interaction.update({ embeds: [embed] });
}
