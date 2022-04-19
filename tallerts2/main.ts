import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasons: HTMLElement = document.getElementById("average-seasons")!;
let card: HTMLElement = document.getElementById('card')!;
let card_image: HTMLImageElement = document.getElementById('card_image')! as HTMLImageElement;
let card_tittle: HTMLElement = document.getElementById('card_tittle')!;
let card_text: HTMLElement = document.getElementById('card_text')!;
let card_link: HTMLAnchorElement = document.getElementById('card_link')! as HTMLAnchorElement;

renderSeriesInTable(dataSeries);

avgSeasons.innerHTML = `${"Seasons average: "+getAverageSeasons(dataSeries)}`

function clickSerie(dataId: any){
  let serie = dataSeries[dataId];
  card.style.display = "block";
  card_image.src = serie.imageUrl;
  card_tittle.innerHTML = serie.name;
  card_text.innerHTML = serie.description;
  card_link.innerHTML = serie.page;
  card_link.href = serie.page;
}

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.classList.add('bg-light-gray');
    //id
    let tdElement = document.createElement("td");
    tdElement.innerHTML = `<strong>${serie.id}</strong>`;
    trElement.appendChild(tdElement);
    //name
    tdElement = document.createElement("td");
    let spanElement = document.createElement("span");
    spanElement.innerHTML = `${serie.name}`;
    spanElement.classList.add('link');
    spanElement.onclick = () => clickSerie(serie.id-1);
    tdElement.appendChild(spanElement);
    trElement.appendChild(tdElement);
    //channel
    tdElement = document.createElement("td");
    tdElement.innerHTML = `${serie.channel}`;
    trElement.appendChild(tdElement);
    //seasons
    tdElement = document.createElement("td");
    tdElement.innerHTML = `${serie.seasons}`;
    trElement.appendChild(tdElement);
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let total: number = 0;
  series.forEach((serie) => total = total + serie.seasons);
  return total/series.length;
}