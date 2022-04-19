import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var avgSeasons = document.getElementById("average-seasons");
var card = document.getElementById('card');
var card_image = document.getElementById('card_image');
var card_tittle = document.getElementById('card_tittle');
var card_text = document.getElementById('card_text');
var card_link = document.getElementById('card_link');
renderSeriesInTable(dataSeries);
avgSeasons.innerHTML = "" + ("Seasons average: " + getAverageSeasons(dataSeries));
function clickSerie(dataId) {
    var serie = dataSeries[dataId];
    card.style.display = "block";
    card_image.src = serie.imageUrl;
    card_tittle.innerHTML = serie.name;
    card_text.innerHTML = serie.description;
    card_link.innerHTML = serie.page;
    card_link.href = serie.page;
}
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.classList.add('bg-light-gray');
        //id
        var tdElement = document.createElement("td");
        tdElement.innerHTML = "<strong>" + serie.id + "</strong>";
        trElement.appendChild(tdElement);
        //name
        tdElement = document.createElement("td");
        var spanElement = document.createElement("span");
        spanElement.innerHTML = "" + serie.name;
        spanElement.classList.add('link');
        spanElement.onclick = function () { return clickSerie(serie.id - 1); };
        tdElement.appendChild(spanElement);
        trElement.appendChild(tdElement);
        //channel
        tdElement = document.createElement("td");
        tdElement.innerHTML = "" + serie.channel;
        trElement.appendChild(tdElement);
        //seasons
        tdElement = document.createElement("td");
        tdElement.innerHTML = "" + serie.seasons;
        trElement.appendChild(tdElement);
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.seasons; });
    return total / series.length;
}
