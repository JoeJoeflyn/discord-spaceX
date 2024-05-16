import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function createRow() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("previousCore")
      .setEmoji("⬅")
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("nextCore")
      .setEmoji("➡")
      .setStyle(ButtonStyle.Secondary)
  );
}
