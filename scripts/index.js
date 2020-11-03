async function getData(url) {
  const endPoints = {
    tijdvak: "https://opendata.rdw.nl/resource/ixf8-gtwq.json",
  }

  const res = await fetch(endPoints[url]);
  const data = await res.json(endPoints[url]);
  return data;
}

getData("tijdvak").then(data => {
  const dayTime = data.map(item => item["daytimeframe"]);
  const dayCount = {
    "MAANDAG": 0,
    "DINSDAG": 0,
    "WOENSDAG": 0,
    "DONDERDAG": 0,
    "VRIJDAG": 0,
    "ZATERDAG": 0,
    "ZONDAG": 0
  }
  // Count each day
  dayTime.forEach(x => {
    if (Object.keys(dayCount).includes(x)) {
      dayCount[x] += 1;
    }
  })
  const ptag = d3.selectAll("p")
    .data(["Warning: het is kapot", 250, "Warning: het is kapot", 400])
    .text(function (d, i) {
      console.log(d); // the data element
      console.log(i); // the index element
      console.log(this); // the current DOM object
      return d;
    });
  d3.selectAll("p").style("color", function(d, i) {
    const text = this.innerText;
    if (text.includes("Warning")) {
      return "red"
    } else {
      return "black"
    }
  })
});
