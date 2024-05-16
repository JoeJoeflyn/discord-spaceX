import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function createRow() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("previousDragonImage")
      .setLabel("Prev Image")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextDragonImage")
      .setLabel("Next Image")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("previousDragon")
      .setEmoji("⬅")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextDragon")
      .setEmoji("➡")
      .setStyle(ButtonStyle.Secondary)
  );
}
