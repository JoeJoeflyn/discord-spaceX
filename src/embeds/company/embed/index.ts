import { EmbedBuilder } from "discord.js";
import { Company } from "../../../shared/interface/company";

export function createEmbed(company: Company) {
  const {
    name,
    links,
    founder,
    founded,
    employees,
    vehicles,
    launch_sites: LaunchSites,
    test_sites: TestSites,
    ceo,
    cto,
    coo,
    cto_propulsion,
    valuation,
    headquarters,
    summary,
  } = company;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${name} 👨‍🚀`,
      url: links.website,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .addFields(
      {
        name: "Founder",
        value: founder,
        inline: true,
      },
      {
        name: "Founded",
        value: founded.toString(),
        inline: true,
      },
      {
        name: "Employees",
        value: employees.toString(),
        inline: true,
      },
      {
        name: "Vehicles",
        value: vehicles.toString(),
        inline: true,
      },
      {
        name: "Launch Sites",
        value: LaunchSites.toString(),
        inline: true,
      },
      {
        name: "Test Sites",
        value: TestSites.toString(),
        inline: true,
      },
      {
        name: "CEO",
        value: ceo,
        inline: true,
      },
      {
        name: "CTO",
        value: cto,
        inline: true,
      },
      {
        name: "COO",
        value: coo,
        inline: true,
      },
      {
        name: "CTO Propulsion",
        value: cto_propulsion,
        inline: true,
      },
      {
        name: "Valuation",
        value: `$${valuation.toLocaleString()}`,
        inline: true,
      },
      {
        name: "Headquarters",
        value: `${headquarters.address}, ${headquarters.city}, ${headquarters.state}`,
        inline: true,
      },
      {
        name: "Summary",
        value: summary,
      }
    )
    .setTimestamp()
    .setFooter({
      text: `Company information`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
