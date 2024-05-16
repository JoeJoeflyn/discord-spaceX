export const getStarlinkSatellites = async () => {
  try {
    const response = await fetch(`${process.env.SPACEX_URL}starlink/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch SpaceX data:", error);
    throw error;
  }
};
