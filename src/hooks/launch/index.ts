import { DiscordAPIError } from "discord.js";
import { getLaunches } from "../../api/launch";
import { createEmbed } from "../../embeds/launch/embed";
import { Launch } from "../../shared/interface/launch";

let page = 1;
let totalPages = 1;
let imageIndex = 0;

export async function handleLaunchPagination(interaction, direction, type) {
  try {
    if (type === "launch") {
      if (direction === "next" && page < totalPages) {
        page += 1;
      } else if (direction === "previous" && page > 1) {
        page -= 1;
      }
      imageIndex = 0;
    }

    const {
      docs: [launch],
      totalPages: newTotalPages,
    }: { docs: Launch[]; totalPages: number } = await getLaunches(page);
    totalPages = newTotalPages;

    if (type === "image") {
      if (
        direction === "next" &&
        imageIndex < launch.links.flickr.original.length - 1
      ) {
        imageIndex += 1;
      } else if (direction === "previous" && imageIndex > 0) {
        imageIndex -= 1;
      }
    }

    const embed = createEmbed(launch, page, totalPages);
    if (
      launch.links.flickr.original &&
      launch.links.flickr.original.length > 0
    ) {
      embed.setImage(launch.links.flickr.original[imageIndex]);
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
