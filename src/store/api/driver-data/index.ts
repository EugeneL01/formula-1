export const getDriverData = async () => {
  const res = await fetch(
    "https://api.openf1.org/v1/drivers?session_key=latest",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
