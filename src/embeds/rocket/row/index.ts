import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function createRow() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("previousImage")
      .setLabel("Prev Image")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextImage")
      .setLabel("Next Image")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("previousRocket")
      .setEmoji("⬅")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextRocket")
      .setEmoji("➡")
      .setStyle(ButtonStyle.Secondary)
  );
}
