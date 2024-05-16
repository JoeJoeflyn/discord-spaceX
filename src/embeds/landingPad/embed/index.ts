import { LandingPad } from "./../../../shared/interface/landingPad";
import { EmbedBuilder } from "discord.js";

export function createEmbed(
  landingPad: LandingPad,
  page: number,
  totalPages: number
) {
  const {
    full_name: fullName,
    wikipedia,
    status,
    locality,
    region,
    details,
    landing_attempts: landingAttempts,
    landing_successes: landingSuccesses,
    images,
  } = landingPad;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${fullName}`,
      url: wikipedia,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .addFields(
      {
        name: "Status",
        value: `\`${status}\``,
        inline: true,
      },
      {
        name: "Locality",
        value: `\`${locality}, ${region}\``,
        inline: true,
      },
      {
        name: "Landing Attempts/Successes",
        value: `\`${landingAttempts}/${landingSuccesses}\``,
        inline: true,
      }
    )
    .setDescription(`\`${details}\``)
    .setImage(images?.large?.[0] as string)
    .setTimestamp()
    .setFooter({
      text: `LandingPad information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
