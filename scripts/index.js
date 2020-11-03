async function getData(endPoint, limit) {
  const endPoints = {
    tijdvak: "https://opendata.rdw.nl/resource/ixf8-gtwq.json",
  };

  const url = endPoints[endPoint] + "?$limit=" + limit;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

getData("tijdvak", 100).then(data => {
  const dayTime = data.map(item => item["daytimeframe"]);
  // console.table(dayTime);

  const dayCount = [
    {
      "day": "MAANDAG",
      "count": 0,
      "popularity": 2,
    },
    {
      "day": "DINSDAG",
      "count": 0,
      "popularity": 4,
    },
    {
      "day": "WOENSDAG",
      "count": 0,
      "popularity": 7,
    },
    {
      "day": "DONDERDAG",
      "count": 0,
      "popularity": 6,
    },
    {
      "day": "VRIJDAG",
      "count": 0,
      "popularity": 9,
    },
    {
      "day": "ZATERDAG",
      "count": 0,
      "popularity": 10,
    },
    {
      "day": "ZONDAG",
      "count": 0,
      "popularity": 9,
    },
  ]

  // Count each day
  dayTime.forEach(item => {
    for (const day of dayCount) {
      if (day.day === item) {
        // console.log(item)
        day.count += 1;
        return;
      }
    }
  })

  window.addEventListener("resize", () => {
    drawBarChart(dayCount, "count", {
      backgroundColor: "red",
      barColor: "blue",
      barWidth: 50,
      barGap: 5,
    });
  });

  const div = d3
    .select("div")
    .selectAll("p")
    .data(dayCount)
    .enter()
    .append("p")
    .text((d, i) => {
      return d.day + " " + d.count;
    });
});

function drawBarChart(data, scaleNum, options) {
  // Get background color, default gray
  const backgroundColor = options.backgroundColor || "gray"
  // Get bar color, default red
  const barColor = options.barColor || "red";
  // Get bar width, default 50
  const barWidth = options.barWidth || 50;
  // Get bar gap, default 5
  const barGap = options.barGap || 5;

  // Calculate height
  const height = data.length * (barWidth + barGap);

  // Get highest Number
  let highestNumber = 0;
  for (const item of data) {
    if (item[scaleNum] > highestNumber) {
      highestNumber = item[scaleNum];
    }
  }

  // Remove previous svgs
  const deleteSvgs = d3.selectAll("svg").remove()

  // Create svg "canvas" to draw on
  const svg = d3.select("body")
    .append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .style("background-color", backgroundColor)

  // Calculate bar width
  const width = svg.style("width").replace("px", "");

  // Draw bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => {
      return i * (barWidth + barGap)
    })
    .attr("width", (d, i) => {
      if (d.count <= 0) {
        return 0
      }
      return width * (d[scaleNum] / highestNumber)
    })
    .attr("height", barWidth)
    .style("fill", barColor)
}
