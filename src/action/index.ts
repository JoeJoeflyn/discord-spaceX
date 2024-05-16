import {
  handleCrewPagination,
  handleDragonPagination,
  handleHistoryPagination,
  handleLandingPadPagination,
  handleLaunchPagination,
  handleRocketPagination,
  handleShipPagination,
  handleCapsulePagination,
  handleCorePagination,
} from "../hooks";

const actions = {
  previous: { handler: handleShipPagination, args: ["previous"] },
  next: { handler: handleShipPagination, args: ["next"] },
  previousImage: {
    handler: handleRocketPagination,
    args: ["previous", "image"],
  },
  nextImage: { handler: handleRocketPagination, args: ["next", "image"] },
  previousRocket: {
    handler: handleRocketPagination,
    args: ["previous", "rocket"],
  },
  nextRocket: { handler: handleRocketPagination, args: ["next", "rocket"] },
  previousLaunchImage: {
    handler: handleLaunchPagination,
    args: ["previous", "image"],
  },
  nextLaunchImage: {
    handler: handleLaunchPagination,
    args: ["next", "image"],
  },
  previousLaunch: {
    handler: handleLaunchPagination,
    args: ["previous", "launch"],
  },
  nextLaunch: { handler: handleLaunchPagination, args: ["next", "launch"] },
  previousLandingPad: {
    handler: handleLandingPadPagination,
    args: ["previous"],
  },
  nextLandingPad: {
    handler: handleLandingPadPagination,
    args: ["next"],
  },
  previousHistory: {
    handler: handleHistoryPagination,
    args: ["previous"],
  },
  nextHistory: {
    handler: handleHistoryPagination,
    args: ["next"],
  },
  previousDragonImage: {
    handler: handleDragonPagination,
    args: ["previous", "image"],
  },
  nextDragonImage: {
    handler: handleDragonPagination,
    args: ["next", "image"],
  },
  previousDragon: {
    handler: handleDragonPagination,
    args: ["previous", "dragon"],
  },
  nextDragon: { handler: handleDragonPagination, args: ["next", "dragon"] },
  previousCrew: {
    handler: handleCrewPagination,
    args: ["previous"],
  },
  nextCrew: {
    handler: handleCrewPagination,
    args: ["next"],
  },
  previousCapsule: {
    handler: handleCapsulePagination,
    args: ["previous"],
  },
  nextCapsule: {
    handler: handleCapsulePagination,
    args: ["next"],
  },
  previousCore: {
    handler: handleCorePagination,
    args: ["previous"],
  },
  nextCore: {
    handler: handleCorePagination,
    args: ["next"],
  },
};

export async function handleAction(interaction) {
  if (actions[interaction.customId]) {
    const { handler, args } = actions[interaction.customId];
    await handler(interaction, ...args);
  }
}
