import { getData } from "./getData.js"
import { drawBarChart, drawMap } from "./drawCharts.js"
import { data as diefstalrisico, dataHeaders as diefstalrisicoHeaders } from "/data/diefstalrisico.js"

function initializeChart(chartFunction, selectElement) {
  chartFunction()

  // Redraw on resize to refit to container
  window.addEventListener("resize", () => {
    chartFunction()
  });

  // Select dropdown & redraw barchart on change
  if (selectElement) {
    d3.select(selectElement).on("change", () => { chartFunction() })
  }
}


initializeChart(() => {
  const data = diefstalrisico;
  const dataHeaders = diefstalrisicoHeaders;
  const options = {
    barColor: "#B7274C",
    amount: 10,
  };
  drawBarChart("#wat", data, dataHeaders, "merk", options);
}, "#wat-options");


initializeChart(async () => {
  const data = await d3.json("https://opendata.arcgis.com/datasets/e1f0dd70abcb4fceabbc43412e43ad4b_0.geojson");
  drawMap("#waar", data);
});
