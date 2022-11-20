const DE = "Deutschland";
const FR = "Frankreich";
const IT = "Italien";
const SP = "Spanien";

let Jahr = 2022;
let Jahr_alt = 2021;

let DE_Einwohner = 83.2;
let FR_Einwohner = 67.8;
let IT_Einwohner = 59.0;
let SP_Einwohner = 47.4;

let DE_Einwohner_alt = 83.1;
let FR_Einwohner_alt = 65.3;
let IT_Einwohner_alt = 59.0;
let SP_Einwohner_alt = 47.4;

let RateDE = (1-DE_Einwohner_alt/DE_Einwohner)*100;
let RateFR = (1-FR_Einwohner_alt/FR_Einwohner)*100;
let RateIT = (1-IT_Einwohner_alt/IT_Einwohner)*100;
let RateSP = (1-SP_Einwohner_alt/SP_Einwohner)*100;

console.log("Die Einwoherzahl in " + DE + " beträgt " + DE_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + DE + " ist seit " + Jahr_alt + " um " + RateDE + " % gestiegen");
console.log("Die Einwoherzahl in " + FR + " beträgt " + FR_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + FR + " ist seit " + Jahr_alt + " um " + RateFR + " % gestiegen");
console.log("Die Einwoherzahl in " + IT + " beträgt " + IT_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + IT + " ist seit " + Jahr_alt + " um " + RateIT + " % gestiegen");
console.log("Die Einwoherzahl in " + SP + " beträgt " + SP_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + SP + " ist seit " + Jahr_alt + " um " + RateSP + " % gestiegen");