//Einwohner 2021, um den Wachstum zu berechnen
let DE_Einwohner_alt = 83.1;
let FR_Einwohner_alt = 65.3;
let IT_Einwohner_alt = 59.0;
let SP_Einwohner_alt = 47.4;
let EU_Einwohner_alt = 447.01;

//Country
const DE = "Deutschland";
const FR = "Frankreich";
const IT = "Italien";
const SP = "Spanien";
const EU = "der europäischen Union";

//Population
let DE_Einwohner = 83.2;
let FR_Einwohner = 67.8;
let IT_Einwohner = 59.0;
let SP_Einwohner = 47.4;
let EU_Einwohner = 446.83;

//PopulationRel (Einwohner in relation zu EU in %) und Height (Höhe des Balkens)
let DE_PopRel = 100 * DE_Einwohner / EU_Einwohner;
let FR_PopRel = 100 * FR_Einwohner / EU_Einwohner;
let IT_PopRel = 100 * IT_Einwohner / EU_Einwohner;
let SP_PopRel = 100 * SP_Einwohner / EU_Einwohner;
let EU_PopRel = 100 * EU_Einwohner / EU_Einwohner;

//PopulationInc (Einwohnerwachstum in %)
let DE_PopInc = (1 - DE_Einwohner_alt / DE_Einwohner) * 100;
let FR_PopInc = (1 - FR_Einwohner_alt / FR_Einwohner) * 100;
let IT_PopInc = (1 - IT_Einwohner_alt / IT_Einwohner) * 100;
let SP_PopInc = (1 - SP_Einwohner_alt / SP_Einwohner) * 100;
let EU_PopInc = (1 - EU_Einwohner_alt / EU_Einwohner) * 100;

//PopulationIncFlat (Einwohnerwachstum in Zahlen)
let DE_PopIncFlat = DE_Einwohner - DE_Einwohner_alt;
let FR_PopIncFlat = FR_Einwohner - FR_Einwohner_alt;
let IT_PopIncFlat = IT_Einwohner - IT_Einwohner_alt;
let SP_PopIncFlat = SP_Einwohner - SP_Einwohner_alt;
let EU_PopIncFlat = EU_Einwohner - EU_Einwohner_alt;

//Bonus Aufgabe (I tried :D)
function classtoggle() {
    document.querySelector(".active").setAttribute('class', ".wrapper");
    document.querySelector(".wrapper:hover").setAttribute('class', ".active");
}

//Funktion (Eine Funktion mit dummy Daten, diese werden beim Event als Attribute hinzugefügt)
function content(Country: string, Population: number, PopulationRel: number, PopulationInc: number, PopulationIncFlat: number) {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Country;
    document.querySelector("#section_1 h2").innerHTML = Population.toString() + "Mio";
    document.querySelector("#section_1 p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + Country + " in 2022";
    document.querySelector("#section_2 h2").innerHTML = PopulationRel.toFixed(0) + "%";
    document.querySelector("#section_3 h2").innerHTML = PopulationInc.toFixed(3) + "%";
    document.querySelector("#section_4 h2").innerHTML = PopulationIncFlat.toFixed(3) + "Mio";
    document.querySelector(".chart").setAttribute('style', "height:" + PopulationRel.toFixed(0) + "%");
    classtoggle();
}

//Events (Klick auf ein HTML-Element)
//Funktionen in Layern, äußere ist dummie in der inneren werden die Parameter angegeben.
document.querySelector(".germany").addEventListener('click', function () {
    content(DE, DE_Einwohner, DE_PopRel, DE_PopInc, DE_PopIncFlat);
})

document.querySelector(".france").addEventListener('click', function () {
    content(FR, FR_Einwohner, FR_PopRel, FR_PopInc, FR_PopIncFlat);
})

document.querySelector(".italy").addEventListener('click', function () {
    content(IT, IT_Einwohner, IT_PopRel, IT_PopInc, IT_PopIncFlat);
})

document.querySelector(".spain").addEventListener('click', function () {
    content(SP, SP_Einwohner, SP_PopRel, SP_PopInc, SP_PopIncFlat);
})

document.querySelector(".stars").addEventListener('click', function () {
    content(EU, EU_Einwohner, EU_PopRel, EU_PopInc, EU_PopIncFlat);
})
