/*
Draws a bar chart in given container (DOM Element) using data (array)
and scales to given scaleVar (string) allowing optional options (object)
*/
export function drawBarChart(data, container, titleVar, scaleVar, options) {
  // Calculate rem size for calculating responsive sizes
  const remSize = d3.select("html").style("font-size").replace("px", "")

  const containerElement = d3.select(container)
  // Get background color, default parent container element (transparent if not set)
  const backgroundColor = options.backgroundColor || containerElement.style("background-color");
  // Get bar color, default black
  const barColor = options.barColor || "black";
  // Get bar width, default 50
  const barWidth = relativeSize(options.barWidth) || relativeSize(50);
  // Get bar gap, default 5
  const barGap = relativeSize(options.barGap) || relativeSize(6);
  // Get sort function
  const sortFunction = options.sort || undefined;
  // Get max display amount
  const amount = options.amount || undefined;

  // Sort data
  if (sortFunction) {
    data.sort((x, y) => {
      return sortFunction(x[scaleVar], y[scaleVar])
    })
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
  const deleteSvgs = d3.selectAll("svg").remove()

  // Create svg "canvas" to draw on
  const svg = containerElement.append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .style("background-color", backgroundColor)

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

  // Draw title text in bar
  const titleText = bar.append("text")
    .attr("text-anchor", "end")
    .attr("x", (d, i) => calcBarLength(d, i) - relativeSize(15))
    .attr("alignment-baseline", "central")
    .attr("y", barWidth / 2)
    .style("fill", backgroundColor)
    .style("font-weight", "bold")
    .text(d => d[titleVar])

  // Draw number text next to bar
  const numberText = bar.append("text")
    .attr("x", (d, i) => calcBarLength(d, i) + relativeSize(12))
    .attr("alignment-baseline", "central")
    .attr("y", barWidth / 2)
    .style("fill", "black")
    .style("font-weight", "bold")
    .text(d => d[scaleVar])

  // Calculate bar length according to highest number
  function calcBarLength(d, i) {
    if (d[scaleVar] <= 0) {
      return 0
    }
    return (width - relativeSize(55)) * (d[scaleVar] / highestNumber)
  }

  // Convert size in px to new size in px relative to 1 rem
  function relativeSize(size) {
    return size / 16 * remSize
  }
}
