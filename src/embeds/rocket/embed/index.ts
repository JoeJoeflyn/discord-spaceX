import { EmbedBuilder } from "discord.js";
import type { PayloadWeight, Rocket } from "../../../shared/interface/rocket";

export function createEmbed(rocket: Rocket, page: number, totalPages: number) {
  const {
    name,
    wikipedia,
    country,
    engines,
    active,
    type,
    height,
    diameter,
    mass,
    description,
    company,
    cost_per_launch: costPerLaunch,
    payload_weights: PayloadWeight,
    landing_legs: ladingLegs,
    flickr_images: [flickrIMages],
    first_flight: firstFlight,
    first_stage: firstStage,
    second_stage: secondStage,
  } = rocket;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${name} 🚀`,
      url: wikipedia,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .addFields(
      {
        name: "Country",
        value: `\`${country}\``,
      },
      {
        name: "First flight",
        value: `\`${firstFlight}\``,
      },
      {
        name: "First stage",
        value: `Powered by ${firstStage.engines} engine(s) with ${
          firstStage.thrust_sea_level.kN
        }kN thrust at sea level and ${
          firstStage.thrust_vacuum.kN
        }kN in vacuum. Carries ${
          firstStage.fuel_amount_tons
        } tons of fuel for ${firstStage.burn_time_sec} seconds. This stage is ${
          firstStage.reusable ? "reusable" : "disposable"
        }.`,
      },
      {
        name: "Second stage",
        value: `Powered by ${secondStage.engines} engine(s) with ${
          secondStage.thrust.kN
        }kN thrust. Carries ${secondStage.fuel_amount_tons} tons of fuel for ${
          secondStage.burn_time_sec
        } seconds. This stage is ${
          secondStage.reusable ? "reusable" : "disposable"
        }. Fairing: ${
          secondStage.payloads.composite_fairing.height.meters
        }m tall, ${
          secondStage.payloads.composite_fairing.diameter.meters
        }m wide.`,
      },
      {
        name: "Engines",
        value: `${engines.number} ${engines.type} ${
          engines.version
        } engine(s) in ${engines.layout} layout. Thrust: ${
          engines.thrust_sea_level.kN
        }kN at sea level, ${engines.thrust_vacuum.kN}kN in vacuum. ISP: ${
          engines.isp.sea_level
        } at sea level, ${
          engines.isp.vacuum
        } in vacuum. Propellants: ${`\`${engines.propellant_1}, ${engines.propellant_2}\``}. Thrust-to-weight ratio: ${`\`${engines.thrust_to_weight}\``}. Maximum engine loss: ${`\`${engines.engine_loss_max}\``}.`,
      },
      {
        name: "Landing legs",
        value: `${
          ladingLegs.number
            ? `${ladingLegs.number} made of ${ladingLegs.material}`
            : "None"
        }`,
        inline: true,
      },
      {
        name: "Payload capacity",
        value: PayloadWeight.reduce(
          (acc, pw: PayloadWeight, index) =>
            acc +
            `${pw.name}: ${pw.kg.toLocaleString("en-US")}kg` +
            (index < PayloadWeight.length - 1 ? ", " : ""),
          ""
        ),
        inline: true,
      },
      {
        name: "Status",
        value: `${active ? "In service" : "Out of service"}`,
        inline: true,
      },
      {
        name: "Type",
        value: `${type}`,
        inline: true,
      },
      {
        name: "Company",
        value: `\`${company}\``,
        inline: true,
      },
      {
        name: "Cost per launch",
        value: `${costPerLaunch.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`,
        inline: true,
      },
      {
        name: "Height",
        value: `${height.meters}m`,
        inline: true,
      },
      {
        name: "Diameter",
        value: `${diameter.meters}m`,
        inline: true,
      },
      {
        name: "Mass",
        value: `${mass.kg.toLocaleString("en-US")}kg`,
        inline: true,
      }
    )
    .setImage(flickrIMages)
    .setDescription(description)
    .setTimestamp()
    .setFooter({
      text: `Rocket information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
