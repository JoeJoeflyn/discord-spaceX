import { DiscordAPIError } from "discord.js";
import { getDragons } from "../../api/dragon";
import { createEmbed } from "../../embeds/dragon/embed";
import { Dragon } from "../../shared/interface/dragon";

let page = 1;
let totalPages = 1;
let imageIndex = 0;

export async function handleDragonPagination(interaction, direction, type) {
  try {
    if (type === "dragon") {
      if (direction === "next" && page < totalPages) {
        page += 1;
      } else if (direction === "previous" && page > 1) {
        page -= 1;
      }
      imageIndex = 0;
    }

    const {
      docs: [dragon],
      totalPages: newTotalPages,
    }: { docs: Dragon[]; totalPages: number } = await getDragons(page);
    totalPages = newTotalPages;

    if (type === "image") {
      if (
        direction === "next" &&
        imageIndex < dragon.flickr_images.length - 1
      ) {
        imageIndex += 1;
      } else if (direction === "previous" && imageIndex > 0) {
        imageIndex -= 1;
      }
    }

    const embed = createEmbed(dragon, page, totalPages);
    if (dragon.flickr_images && dragon.flickr_images.length > 0) {
      embed.setImage(dragon.flickr_images[imageIndex]);
    }

    await interaction.update({ embeds: [embed] });
  } catch (error) {
    if (error instanceof DiscordAPIError && error.code === 10062) {
      console.log("Interaction expired or already responded to");
    } else {
      console.error("An error occurred while updating the interaction:", error);
      throw error;
    }
  }
}
