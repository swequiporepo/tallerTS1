import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var avgSeasons = document.getElementById("average-seasons");
renderSeriesInTable(dataSeries);
avgSeasons.innerHTML = "" + ("Seasons average: " + getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.classList.add('table-secondary');
        trElement.innerHTML = "<td>" + serie.id + "</td>\n                           <td>" + serie.name + "</td>\n                           <td>" + serie.channel + "</td>\n                           <td>" + serie.seasons + "</td>";
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.seasons; });
    return total / series.length;
}
