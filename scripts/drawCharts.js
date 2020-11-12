/*
Draws a bar chart in given container (DOM Element) using data (array)
and scales to given scaleVar (string) allowing optional options (object)
*/
export function drawBarChart(container, data, headers, titleVar, options) {
  // Get variable used to scale the bar chart from selection
  const scaleVar = d3.select("#wat-options").property("value");

  const containerElement = d3.select(container);
  // Get background color, default parent container element (transparent if not set)
  const backgroundColor = options.backgroundColor || containerElement.style("background-color");
  // Get bar color, default black
  const barColor = options.barColor || "black";
  // Get bar width, default 50
  const barWidth = relativeSize(options.barWidth) || relativeSize(50);
  // Get bar gap, default 5
  const barGap = relativeSize(options.barGap) || relativeSize(6);
  // Get sort function
  const sort = options.sort || headers[scaleVar].order;
  // Get max display amount
  const amount = options.amount || undefined;

  // Sort data
  switch (sort) {
    case "descending":
      data.sort((x, y) => {
        return d3.descending(x[scaleVar], y[scaleVar])
      })
      break
    case "ascending":
      data.sort((x, y) => {
        return d3.ascending(x[scaleVar], y[scaleVar])
      })
      break
  }

  // Cut off data past max display amount
  if (amount) {
    data = data.slice(0, amount)
  }

  // Calculate total height
  const height = data.length * (barWidth + barGap) - barGap;

  // Get highest Number
  const highestNumber = d3.max(data, item => item[scaleVar]);

  // Get lowest Number
  const lowestNumber = d3.min(data, item => item[scaleVar]);

  // Remove previous svgs
  const deleteSvgs = d3.select(container).selectAll("svg").remove()

  // Create svg "canvas" to draw on
  const svg = containerElement.append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .style("background-color", backgroundColor)

  // https://bl.ocks.org/d3noob/a22c42db65eb00d4e369
  const tooltip = containerElement.append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)

  // Calculate bar width
  const width = svg.style("width").replace("px", "");

  // Create group for every bar
  const bar = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (d, i) => {
      return `translate(0,${i * (barWidth + barGap)})`
    })

  // Draw bar rectangles in bar group
  const rect = bar.append("rect")
    .attr("height", barWidth)
    .style("fill", barColor)
    .attr("width", (d, i) => calcBarLength(d, i))
    .on("mousemove", (e, d) => showTooltip(e, d))
    .on("mouseout", (e, d) => hideTooltip(e, d))

  // Draw title text in bar
  const titleText = bar.append("text")
    .attr("text-anchor", "end")
    .attr("x", (d, i) => calcBarLength(d, i) - relativeSize(15))
    .attr("alignment-baseline", "central")
    .attr("y", barWidth / 2)
    .style("fill", backgroundColor)
    .style("font-weight", "bold")
    .style("pointer-events", "none")
    .text(d => d[titleVar])

  // Draw number text next to bar
  const numberText = bar.append("text")
    .attr("x", (d, i) => calcBarLength(d, i) + relativeSize(12))
    .attr("alignment-baseline", "central")
    .attr("y", barWidth / 2)
    .style("font-weight", "bold")
    .style("pointer-events", "none")
    .text(d => d[scaleVar])

  // Calculate bar length according to highest number
  function calcBarLength(d, i) {
    if (d[scaleVar] <= 0) {
      return 0;
    }
    // Normal scaling
    let scaling = d[scaleVar] / highestNumber
    // Inverted scaling
    if (headers[scaleVar].inverted) {
      scaling = lowestNumber / d[scaleVar]
    }
    return (width - relativeSize(55)) * scaling;
  }

  // Show tooltip, set to mouse location and set tooltip text
  function showTooltip(e, d) {
    // Display tooltip and set to mouse location
    tooltip
      .style("left", e.clientX + "px")
      .style("top", e.clientY - tooltip.style("height").replace("px", "") + "px")
      .transition()
      .duration(50)
      .style("opacity", 0.95)

    // Create tooltip text displaying all information
    let tooltipText = "";
    for (const key of Object.keys(d)) {
      const title = headers[key].title || key;
      const value = d[key].toLocaleString("nl-nl");
      tooltipText += `<span>${title}</span><span>${value}</span>`;
    }

    // Add information to tooltip
    tooltip.html(tooltipText);
  }

  // Hide tooltip
  function hideTooltip(e, d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 0)
  }
}


/*
  Draws a map in given container (DOM Element) using data (array)
*/
export async function drawMap(container, data) {
  // Remove previous svgs
  const deleteSvgs = d3.select(container).selectAll("svg").remove()

  // Add svg & add responsiveness with viewbox
  const svg = d3.select(container).append("svg")
    .attr("width", "100%")
    .attr("height", "90vh")
    .attr("viewBox", "488.9 80 10.4 12.3")

  // Get geojson features from topojson
  const geojson = topojson.feature(data, data.objects.gemeente_2020).features;

  // Set projection function (lat/long > x/y)
  const projection = d3.geoMercator()

  // Add projection to path generator
  const path = d3.geoPath()
    .projection(projection)

  // Create group & append paths
  const g = svg.append("g")
    .selectAll("path")
    .data(geojson)
    .enter()
    .append("path")
    .attr("d", path)
    .on("mouseover", function(e, d) {
      console.log("mouseover")
      d3.select(this)
        .classed("active", true)
    })
    .on("mouseout", function(e, d) {
      d3.select(this)
        .classed("active", false)
    })
}


// Convert size in px to new size in px relative to 1 rem
function relativeSize(size) {
  // Calculate rem size for calculating responsive sizes
  const remSize = d3.select("html").style("font-size").replace("px", "");
  return size / 16 * remSize;
}
