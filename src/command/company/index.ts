import { createEmbed } from "../../embeds/company/embed";
import { Company } from "../../shared/interface/company";
import { getCompany } from "./../../api/company";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("company")
  .setDescription("Reply company information.");

export async function execute(interaction: CommandInteraction) {
  try {
    const company: Company = await getCompany();

    const embed = createEmbed(company);

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    console.error("Error fetching company:", error);
    await interaction.reply({
      content: "Failed to fetch company.",
      ephemeral: true,
    });
  }
}
