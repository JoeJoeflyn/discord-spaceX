import { History } from "./../../../shared/interface/history";
import { EmbedBuilder } from "discord.js";

export function createEmbed(
  history: History,
  page: number,
  totalPages: number
) {
  const {
    title,
    links,
    event_date_unix: eventDateUnix,
    event_date_utc: eventDateUtc,
    details,
  } = history;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${title} 📜`,
      url: links.article!,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .addFields(
      {
        name: "Date",
        value: `\`${
          eventDateUnix
            ? new Date(eventDateUtc as string).toLocaleString()
            : eventDateUnix
        }\``,
      },
      {
        name: "Details",
        value: `\`${details!}\``,
      }
    )
    .setTimestamp()
    .setFooter({
      text: `History information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
