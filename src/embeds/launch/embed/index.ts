import { Launch } from "./../../../shared/interface/launch";
import { EmbedBuilder } from "discord.js";

export function createEmbed(launch: Launch, page: number, totalPages: number) {
  const {
    name,
    links,
    success,
    upcoming,
    failures,
    details,
    static_fire_date_utc: StaticFireDateUtc,
    date_utc: dateUtc,
  } = launch;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${name} 🚀`,
      url: links.wikipedia,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .setThumbnail(links.patch.large!)
    .addFields(
      {
        name: "Date",
        value: `\`${new Date(dateUtc).toLocaleString()}\``,
        inline: true,
      },
      {
        name: "Static fire date",
        value: `\`${
          StaticFireDateUtc
            ? new Date(StaticFireDateUtc).toLocaleString()
            : StaticFireDateUtc
        }\``,
        inline: true,
      },
      {
        name: "Status",
        value: `\`${success ? "Succeed" : "Failed"}\``,
        inline: true,
      },
      {
        name: "Upcoming",
        value: `\`${upcoming ? "Yes" : "No"}\``,
        inline: true,
      },
      {
        name: "Failures",
        value:
          failures && failures.length > 0
            ? failures.reduce(
                (acc, failure) =>
                  acc +
                  `\`At ${
                    failure.time
                  } seconds into the flight, at an altitude of ${
                    failure.altitude || "N/A"
                  }, the mission experienced a failure due to ${
                    failure.reason
                  }.\n\``,
                ""
              )
            : "No failures reported.",
      },
      {
        name: "Details",
        value: `\`${details}\``,
      }
    )
    .setImage(links.flickr[0])
    .setTimestamp()
    .setFooter({
      text: `Launch information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
