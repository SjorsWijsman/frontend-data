import { getData } from "/scripts/getData.js"
import { drawBarChart } from "/scripts/drawCharts.js"
import { data as diefstalrisico } from "/data/diefstalrisico.js"

// Create barchart function with preferred barchart options
function barChart() {
  const options = {
    barColor: "#B7274C",
    sort: d3.descending,
    amount: 10
  }
  drawBarChart(diefstalrisico, "body", "merk", "gestolen", options);
}
barChart()

// Redraw on resize to refit to container
window.addEventListener("resize", () => {
  barChart()
});
