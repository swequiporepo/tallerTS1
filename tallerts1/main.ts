import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasons: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(dataSeries);

avgSeasons.innerHTML = `${"Seasons average: "+getAverageSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.classList.add('table-secondary');
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let total: number = 0;
  series.forEach((serie) => total = total + serie.seasons);
  return total/series.length;
}