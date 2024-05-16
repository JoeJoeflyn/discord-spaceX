import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function createRow() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("previous")
      .setEmoji("⬅")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("next")
      .setEmoji("➡")
      .setStyle(ButtonStyle.Secondary)
  );
}
