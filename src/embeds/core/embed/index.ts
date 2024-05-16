import { EmbedBuilder } from "discord.js";
import { Core } from "../../../shared/interface/core";

export function createEmbed(core: Core, page: number, totalPages: number) {
  const { status, block, serial, last_update: lastUpdate } = core;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .addFields(
      {
        name: "Serial",
        value: serial,
        inline: true,
      },
      {
        name: "Status",
        value: status,
        inline: true,
      },
      {
        name: "Block",
        value: block ? block.toString() : "N/A",
        inline: true,
      },
      {
        name: "Last Update",
        value: lastUpdate ? lastUpdate : "N/A",
      }
    )
    .setTimestamp()
    .setFooter({
      text: `Core information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
