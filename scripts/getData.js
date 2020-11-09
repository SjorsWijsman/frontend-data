export async function getData(endPoint, limit) {
  const endPointsObj = {
    tijdvak: "https://opendata.rdw.nl/resource/ixf8-gtwq.json",
  };
  // Construct url
  const url = endPointsObj[endPoint] + "?$limit=" + limit;
  // Get json data from url endpoint
  const data = await d3.json(url);
  return data;
}
