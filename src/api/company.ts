export const getCompany = async () => {
  try {
    const response = await fetch(`${process.env.SPACEX_URL}company`, {
      method: "GET",
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
