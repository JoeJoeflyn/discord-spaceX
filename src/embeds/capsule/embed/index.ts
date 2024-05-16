import { EmbedBuilder } from "discord.js";
import { Capsule } from "../../../shared/interface/capsule";

export function createEmbed(
  capsule: Capsule,
  page: number,
  totalPages: number
) {
  const {
    status,
    type,
    reuse_count: reuseCount,
    water_landings: waterLandings,
    land_landings: landLandings,
    last_update: lastUpdate,
  } = capsule;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .addFields(
      {
        name: "Type",
        value: type,
        inline: true,
      },
      {
        name: "Status",
        value: status,
        inline: true,
      },
      {
        name: "Reuse Count",
        value: reuseCount.toString(),
        inline: true,
      },
      {
        name: "Water Landings",
        value: waterLandings.toString(),
        inline: true,
      },
      {
        name: "Land Landings",
        value: landLandings.toString(),
        inline: true,
      },
      {
        name: "Last Update",
        value: lastUpdate as string,
      }
    )
    .setTimestamp()
    .setFooter({
      text: `Capsule information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
