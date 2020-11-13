import { drawBarChart, drawMap } from "./drawCharts.js"
import { diefstalrisico, diefstalrisicoTypes, diefstalrisicoHeaders } from "./diefstalrisico.js"

// Initialize chart and add function to resize & selectElement change.
function initializeChart(chartFunction, selectElement) {
  chartFunction()

  // Redraw on resize to refit to container
  window.addEventListener("resize", () => {
    chartFunction()
  });

  // Select dropdown & redraw chart on change
  if (selectElement) {
    d3.select(selectElement).on("change", () => {
      chartFunction()
    })
  }
}

// Initialize Bar chart
initializeChart(() => {
  const data = [diefstalrisico, diefstalrisicoTypes];
  const dataHeaders = diefstalrisicoHeaders;
  const options = {
    color: "#B7274C",
    displayAmount: 10,
  };
  drawBarChart("#wat", data, dataHeaders, "merk", options);
}, "#wat-options");

// Initialize map
initializeChart(async () => {
  const storage = window.sessionStorage;
  let data = JSON.parse(storage.getItem("data"));
  if (data === null) {
    data = await d3.json("https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson");
    storage.setItem("data", JSON.stringify(data));
  }
  const options = {
    color: "#B7274C",
    stroke: "white",
  }
  drawMap("#waar", data, options);
}, "#waar-options");
