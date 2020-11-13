import { gestolen } from "./gestolen.js"

/*
Draws a bar chart in given container (DOM Element) using data (array), headers (object)
and titleVar (string) allowing optional options (object)
*/
export function drawBarChart(container, data, headers, titleVar, options) {
  // Get variable used to scale the bar chart from selection
  const scaleVar = d3.select("#wat-options").property("value");
  // Select d3 container element
  const containerElement = d3.select(container);
  // Get background color, default parent container element (transparent if not set)
  const backgroundColor = options.backgroundColor || containerElement.style("background-color");
  // Get bar color, default black
  const color = options.color || "black";
  // Get bar width, default 50
  const barWidth = relativeSize(options.barWidth) || relativeSize(50);
  // Get bar gap, default 5
  const barGap = relativeSize(options.barGap) || relativeSize(6);
  // Get sort function
  const sort = options.sort || headers[scaleVar].order;
  // Get max display amount
  const displayAmount = options.displayAmount || undefined;

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
  if (displayAmount) {
    data = data.slice(0, displayAmount)
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
    .style("fill", color)
    .attr("width", (d, i) => calcBarLength(d, i))
    .on("mousemove", (e, d) => showTooltip(e, d, tooltip, tooltipText(d)))
    .on("mouseout", (e, d) => hideTooltip(tooltip))

  // Draw title text in bar
  const titleText = bar.append("text")
    .attr("class", "titleText")
    .attr("x", (d, i) => calcBarLength(d, i) - relativeSize(15))
    .attr("text-anchor", "end")
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

  // Create tooltip text displaying all information
  function tooltipText(d) {
    let tooltipText = "";
    for (const key of Object.keys(d)) {
      const title = headers[key].title || key;
      const value = d[key].toLocaleString("nl-nl");
      tooltipText += `<span>${title}</span><span>${value}</span>`;
    }
    return tooltipText
  }

  // Convert size in px to new size in px relative to 1 rem
  function relativeSize(size) {
    // Calculate rem size for calculating responsive sizes
    const remSize = d3.select("html").style("font-size").replace("px", "");
    return size / 16 * remSize;
  }
}


/*
  Draws a map in given container (DOM Element) using data (array)
*/
export async function drawMap(container, data, options) {
  // Get variable used to scale the bar chart from selection
  const scaleVar = d3.select("#waar-options").property("value");
  // Select d3 container element
  const containerElement = d3.select(container);
  // Get bar color, default black
  const color = options.color || "black";

  // Get highest Number
  let highestNumber = 0
  for (const item of Object.keys(gestolen)) {
    if (gestolen[item][scaleVar] > highestNumber) highestNumber = gestolen[item][scaleVar];
  }

  // Remove previous svgs
  const deleteSvgs = d3.select(container).selectAll("svg").remove()

  // Add svg & add responsiveness with viewbox
  const svg = d3.select(container).append("svg")
    .attr("width", "100%")
    .attr("height", "90vh")
    .attr("viewBox", "488.9 80 10.4 12.3")

  // https://bl.ocks.org/d3noob/a22c42db65eb00d4e369
  const tooltip = containerElement.append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)

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
    .attr("fill", color)
    .attr("opacity", (d) => {
      const scale = gestolen[d.properties.statnaam][scaleVar] / highestNumber;
      const intensity = 0.9;
      return scale * intensity + 1-intensity;
    })
    .attr("stroke", options.stroke)
    .attr("stroke-width", "0.01px")
    .on("mouseover", (e, d) => showTooltip(e, d, tooltip, tooltipText(d)))
    .on("mouseout", (e, d) => hideTooltip(tooltip))

  // Create Tooltip Text
  function tooltipText(d) {
    const gemeente = d.properties.statnaam;
    let value = gestolen[gemeente][scaleVar];
    if (gestolen[gemeente] !== undefined) {
      if (typeof value === "number") {
        return gemeente + " " + value.toLocaleString("nl-nl");
      } else {
        return gemeente + " " + value.replace(".", ",");
      }
    return gemeente + " data onbekend";
  }
}


/*
  Show tooltip, set to mouse location and set tooltip text
*/
function showTooltip(e, d, tooltip, tooltipText) {
  // Display tooltip and set to mouse location
  tooltip
    .style("left", e.clientX + "px")
    .style("top", (e.clientY - tooltip.style("height").replace("px", "")) + "px")
    .transition()
    .duration(50)
    .style("opacity", 0.95)

  // Add information to tooltip
  tooltip.html(tooltipText);
}


/*
  Hide tooltip
*/
function hideTooltip(tooltip) {
  tooltip.transition()
    .duration(200)
    .style("opacity", 0)
}
