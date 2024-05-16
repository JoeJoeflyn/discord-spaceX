import { EmbedBuilder } from "discord.js";
import { Crew } from "../../../shared/interface/crew";

export function createEmbed(crew: Crew, page: number, totalPages: number) {
  const { name, wikipedia, agency, status, image } = crew;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${name} 👨‍🚀`,
      url: wikipedia,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .addFields(
      {
        name: "Agency",
        value: agency!,
      },
      {
        name: "Status",
        value: status,
      }
    )
    .setImage(image!)
    .setTimestamp()
    .setFooter({
      text: `Crew information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
