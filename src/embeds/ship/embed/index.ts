import { EmbedBuilder } from "discord.js";
import { Ship } from "../../../shared/interface/ship";

export function createEmbed(ship: Ship, page: number, totalPages: number) {
  const { name, link, type, roles, image, active, home_port: homePort } = ship;
  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${name} 🚢`,
      url: link!,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .setImage(image)
    .addFields(
      {
        name: "Status",
        value: `${!active ? "Out of service" : "In service"}`,
        inline: true,
      },
      {
        name: "Type",
        value: `${type}`,
        inline: true,
      },
      {
        name: "Port",
        value: `${homePort}`,
        inline: true,
      },
      {
        name: "Roles",
        value: `\`${roles.join(", ")}\``,
      }
    )
    .setTimestamp()
    .setFooter({
      text: `Ship information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
