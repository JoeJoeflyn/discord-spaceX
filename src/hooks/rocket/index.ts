import { DiscordAPIError } from "discord.js";
import { getRockets } from "../../api/rocket";
import { createEmbed } from "../../embeds/rocket/embed";
import { Rocket } from "../../shared/interface/rocket";

let page = 1;
let totalPages = 1;
let imageIndex = 0;

export async function handleRocketPagination(interaction, direction, type) {
  try {
    if (type === "rocket") {
      if (direction === "next" && page < totalPages) {
        page += 1;
      } else if (direction === "previous" && page > 1) {
        page -= 1;
      }
      imageIndex = 0;
    }

    const {
      docs: [rocket],
      totalPages: newTotalPages,
    }: { docs: Rocket[]; totalPages: number } = await getRockets(page);
    totalPages = newTotalPages;

    if (type === "image") {
      if (
        direction === "next" &&
        imageIndex < rocket.flickr_images.length - 1
      ) {
        imageIndex += 1;
      } else if (direction === "previous" && imageIndex > 0) {
        imageIndex -= 1;
      }
    }

    const embed = createEmbed(rocket, page, totalPages);
    if (rocket.flickr_images && rocket.flickr_images.length > 0) {
      embed.setImage(rocket.flickr_images[imageIndex]);
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
