export async function getCampersData() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `https://proxy.cors.sh/https://paulcamper.de/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24`,
    requestOptions
  );
  if (!response.ok) {
    throw new Error(`Request failed with status code ${response.status}`);
  }

  const data = await response.json();
  return data;
}
