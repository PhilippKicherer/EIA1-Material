// Variablen

//Variablen Samples (meine Version)
let a: HTMLAudioElement = new Audio("samples/A.mp3");
let c: HTMLAudioElement = new Audio("samples/C.mp3");
let f: HTMLAudioElement = new Audio("samples/F.mp3");
let g: HTMLAudioElement = new Audio("samples/G.mp3");
let hihat: HTMLAudioElement = new Audio("samples/hihat.mp3");
let kick: HTMLAudioElement = new Audio("samples/kick.mp3");
let snare: HTMLAudioElement = new Audio("samples/snare.mp3");
let laugh1: HTMLAudioElement = new Audio("samples/laugh-1.mp3");
let laugh2: HTMLAudioElement = new Audio("samples/laugh-2.mp3");

//Samples Array (meine version)
const sample =[a, c, f, g, hihat, kick, snare, laugh1, laugh2];

//Buttons Array
const buttons = document.querySelectorAll(".button");
let button_selector = Array.from(buttons);

//Damit i nicht über 9 geht
let totalbuttons = buttons.length;

//Events
//Die Funktion vergleicht beim klick die Position des Buttons im Array mit der Position des Samples im Array und spielt diesen dann ab.
//(Ich habe hier noch eine für mich einfachere Version benutzt, da brauche ich nicht an jedem einzelnen Element einen Event Listener, werde verbessern falls nötig)

for(let i=0; i<totalbuttons; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        sample[i].play();
    })
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Für den Beat muss ich den array anders definieren

//Array für beats

let beat: string[] = [("./samples/kick.mp3"), ("./samples/snare.mp3"), ("./samples/laugh-1.mp3")];

//Funkionen
function playSample(sample_selector: string) {
    let sound: HTMLAudioElement = new Audio(sample_selector);
    sound.play();
}

//Funktion für den Beat
function playBeat0() {
    playSample(beat[2]);
}
function playBeat1() {
    setInterval(function () {
        playSample (beat[0]);
    }, 2000);
}
function playBeat2() {
    setInterval(function() {
        playSample (beat[1]);
    }, 1000);
}

document.querySelector(".play").addEventListener("click", function() {
    playBeat0();
    playBeat1();
    setTimeout(function() {
        playBeat1();
    }, 750);
    setTimeout(function() {
        playBeat2();
    }, 1500);
});
