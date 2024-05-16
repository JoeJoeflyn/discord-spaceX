export const getHistory = async (page: number) => {
  const limit = 1;

  try {
    const response = await fetch(`${process.env.SPACEX_URL}history/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        options: {
          page,
          limit,
        },
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch SpaceX data:", error);
    throw error;
  }
};
