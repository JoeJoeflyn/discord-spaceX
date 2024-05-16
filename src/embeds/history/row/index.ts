import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function createRow() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("previousHistory")
      .setEmoji("⬅")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextHistory")
      .setEmoji("➡")
      .setStyle(ButtonStyle.Secondary)
  );
}
