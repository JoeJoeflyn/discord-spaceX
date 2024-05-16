import { EmbedBuilder } from "discord.js";
import { Dragon, Thruster } from "../../../shared/interface/dragon";

export function createEmbed(dragon: Dragon, page: number, totalPages: number) {
  const {
    name,
    wikipedia,
    first_flight: firstFlight,
    heat_shield: heatShield,
    launch_payload_mass: launchPayloadMass,
    launch_payload_vol: launchPayloadVol,
    return_payload_mass: returnPayloadMass,
    return_payload_vol: returnPayloadVol,
    pressurized_capsule: pressurizedCapsule,
    trunk,
    height_w_trunk: heightWTrunk,
    diameter,
    dry_mass_kg: dryMassKg,
    thrusters,
    description,
    flickr_images: flickrImages,
  } = dragon;

  return new EmbedBuilder()
    .setColor("#0E1111")
    .setAuthor({
      name: `${name} 🐉`,
      url: wikipedia,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    })
    .addFields(
      {
        name: "First flight",
        value: `\`${firstFlight!}\``,
      },
      {
        name: "Heat Shield",
        value: `Material: ${heatShield.material}, Size: ${heatShield.size_meters} meters, Temperature: ${heatShield.temp_degrees} degrees, Developed by: ${heatShield.dev_partner}`,
      },
      {
        name: "Launch Payload Mass",
        value: `${launchPayloadMass.kg} kg`,
      },
      {
        name: "Launch Payload Volume",
        value: `${launchPayloadVol.cubic_meters} cubic meters`,
      },
      {
        name: "Return Payload Mass",
        value: `${returnPayloadMass.kg} kg`,
      },
      {
        name: "Return Payload Volume",
        value: `${returnPayloadVol.cubic_meters} cubic meters`,
      },
      {
        name: "Pressurized Capsule Payload Volume",
        value: `${pressurizedCapsule.payload_volume.cubic_meters} cubic meters`,
      },
      {
        name: "Trunk Volume",
        value: `${trunk.trunk_volume.cubic_meters} cubic meters`,
      },
      {
        name: "Cargo",
        value: `Solar Array: ${trunk.cargo.solar_array}, Unpressurized Cargo: ${trunk.cargo.unpressurized_cargo}`,
      },
      {
        name: "Height with Trunk",
        value: `${heightWTrunk.meters} meters`,
      },
      {
        name: "Diameter",
        value: `${diameter.meters} meters`,
      },
      {
        name: "Dry Mass",
        value: `${dryMassKg} kg`,
      },
      {
        name: "Thrusters",
        value: thrusters.reduce(
          (acc, thruster: Thruster) =>
            acc +
            `Type: ${thruster.type}, Amount: ${thruster.amount}, Pods: ${thruster.pods}, Fuel 1: ${thruster.fuel_1}, Fuel 2: ${thruster.fuel_2}, ISP: ${thruster.isp}, Thrust: ${thruster.thrust.kN} kN\n`,
          ""
        ),
      },
      {
        name: "Description",
        value: `\`${description!}\``,
      }
    )
    .setImage(flickrImages[0])
    .setTimestamp()
    .setFooter({
      text: `Dragon information ${page} out of ${totalPages}`,
      iconURL: "https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg",
    });
}
