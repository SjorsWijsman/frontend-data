import { getData } from "/scripts/getData.js"
import { drawBarChart } from "/scripts/drawCharts.js"
import { data as diefstalrisico, dataHeaders as diefstalrisicoHeaders } from "/data/diefstalrisico.js"

// Create barchart function with preferred barchart options
function barChart() {
  const options = {
    barColor: "#B7274C",
    amount: 10,
  }
  drawBarChart("#wat", diefstalrisico, diefstalrisicoHeaders, "merk", options);
}
barChart()

// Redraw on resize to refit to container
window.addEventListener("resize", () => {
  barChart()
});

d3.select("#wat-options").on("change", () => { barChart() })
