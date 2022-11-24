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

let EU_Einwohner = 450.0;

let RateDE = (1-DE_Einwohner_alt/DE_Einwohner)*100;
let RateFR = (1-FR_Einwohner_alt/FR_Einwohner)*100;
let RateIT = (1-IT_Einwohner_alt/IT_Einwohner)*100;
let RateSP = (1-SP_Einwohner_alt/SP_Einwohner)*100;

let EUrel = 100;

console.log("Die Einwoherzahl in " + DE + " beträgt " + DE_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + DE + " ist seit " + Jahr_alt + " um " + RateDE + " % gestiegen");
console.log("Die Einwoherzahl in " + FR + " beträgt " + FR_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + FR + " ist seit " + Jahr_alt + " um " + RateFR + " % gestiegen");
console.log("Die Einwoherzahl in " + IT + " beträgt " + IT_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + IT + " ist seit " + Jahr_alt + " um " + RateIT + " % gestiegen");
console.log("Die Einwoherzahl in " + SP + " beträgt " + SP_Einwohner + " Millionen im Jahr " + Jahr + ".");
console.log("Die Einwohnerzahl in " + SP + " ist seit " + Jahr_alt + " um " + RateSP + " % gestiegen");


//Funktionen

//Funktion EU
function eu(){
    document.querySelector("h1").innerHTML = "Einwohnerzahl in der europäischen union";
    document.querySelector("#popges h2").innerHTML = EU_Einwohner.toString() + "Mio";
    document.querySelector("#popges p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der EU in 2022";
    document.querySelector("#poprel h2").innerHTML = "100 %";
    //document.querySelector("#popinc h2").innerHTML = //Hier fehlt die Populations Wachstumsrate der EU
    //document.querySelector("#popincges h2").innerHTML = //Hier fehlt der Wachstum der Population in ganzen Zahlen
    document.querySelector(".chart").setAttribute('style', 'height:' + EUrel + '%');
}

//Funktion DE
function germany(){
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Deutschland";
    document.querySelector("#popges h2").innerHTML = DE_Einwohner.toString() + "Mio";
    document.querySelector("#popges p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
    //document.querySelector("#poprel h2").innerHTML = //Hier fehlt die relative Population zur EU
    document.querySelector("#popinc h2").innerHTML = RateDE.toFixed(3) + "%";
    //document.querySelector("#popincges h2").innerHTML = //Hier fehlt der Wachstum der Population in ganzen Zahlen
    document.querySelector(".wrapper active").setAttribute('class', "wrapper");
    document.querySelector(".germany").setAttribute('class', "wrapper active");
}

//Funktion FR
function france(){
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Frankreich"
    document.querySelector("#popges h2").innerHTML = FR_Einwohner.toString() + "Mio";
    document.querySelector("#popges p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
    //document.querySelector("#poprel h2").innerHTML = //Hier fehlt die relative Population zur EU
    document.querySelector("#popinc h2").innerHTML = RateFR.toFixed(3) + "%";
    //document.querySelector("#popincges h2").innerHTML = //Hier fehlt der Wachstum der Population in ganzen Zahlen
}

//Funktion IT
function italy(){
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Italien"
    document.querySelector("#popges h2").innerHTML = IT_Einwohner.toString() + "Mio";
    document.querySelector("#popges p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
    //document.querySelector("#poprel h2").innerHTML = //Hier fehlt die relative Population zur EU
    document.querySelector("#popinc h2").innerHTML = RateIT.toFixed(3) + "%";
    //document.querySelector("#popincges h2").innerHTML = //Hier fehlt der Wachstum der Population in ganzen Zahlen
}

//Funktion SP
function spain(){
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Spanien"
    document.querySelector("#popges h2").innerHTML = SP_Einwohner.toString() + "Mio";
    document.querySelector("#popges p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2022";
    //document.querySelector("#poprel h2").innerHTML = //Hier fehlt die relative Population zur EU
    document.querySelector("#popinc h2").innerHTML = RateSP.toFixed(3) + "%";
    //document.querySelector("#popincges h2").innerHTML = //Hier fehlt der Wachstum der Population in ganzen Zahlen
}

//Events (Klick auf ein HTML-Element)

document.querySelector(".germany").addEventListener('click', germany);
document.querySelector(".france").addEventListener('click', france);
document.querySelector(".italy").addEventListener('click', italy);
document.querySelector(".spain").addEventListener('click', spain);
document.querySelector(".stars").addEventListener('click', eu);

//document.querySelector("#test").addEventListener('click', function() {myfunction();})

//Funktionen in Layern, äußere ist dummie in der inneren werden die Parameter angegeben.
