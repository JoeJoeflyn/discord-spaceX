import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function createRow() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("previousLaunchImage")
      .setLabel("Prev Image")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextLaunchImage")
      .setLabel("Next Image")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("previousLaunch")
      .setEmoji("⬅")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextLaunch")
      .setEmoji("➡")
      .setStyle(ButtonStyle.Secondary)
  );
}
