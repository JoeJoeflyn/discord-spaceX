import { getLandingPads } from "../../api/landingPad";
import { createEmbed } from "../../embeds/landingPad/embed";
import { LandingPad } from "../../shared/interface/landingPad";

let page = 1;
let landingPadIndex = 0;

export async function handleLandingPadPagination(interaction, direction) {
  let { docs, totalPages } = await getLandingPads(page);

  if (direction === "next") {
    landingPadIndex += 1;

    if (landingPadIndex >= docs.length) {
      page += 1;
      landingPadIndex = 0;
    }
  } else if (direction === "previous" && landingPadIndex > 0) {
    landingPadIndex -= 1;
  } else if (direction === "previous" && page > 1) {
    page -= 1;
    landingPadIndex = docs.length - 1;
  }

  if (landingPadIndex === 0 || landingPadIndex === docs.length - 1) {
    const {
      docs: newDocs,
      totalPages: newTotalPages,
    }: { docs: LandingPad[]; totalPages: number } = await getLandingPads(page);

    docs = newDocs;
    totalPages = newTotalPages;
  }

  const landingPad = docs[landingPadIndex];

  const embed = createEmbed(landingPad, page, totalPages);

  if (
    !interaction.replied &&
    Date.now() - interaction.createdTimestamp < 900000
  ) {
    await interaction.update({ embeds: [embed] });
  }
}
