//Alles zu den Pads
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
const sample = [a, c, f, g, hihat, kick, snare, laugh1, laugh2];

//Buttons Array
const buttons = document.querySelectorAll(".button");
let button_selector = Array.from(buttons);

//Event für das Drumpad
//Die Funktion vergleicht beim klick die Position des Buttons im Array mit der Position des Samples im Array und spielt diesen dann ab.

for (let i = 0; i < buttons.length; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        sample[i].play();
    })
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Alles zum Beat und Remix
//Für den Beat muss ich den array anders definieren
//Array für beats

let beat: string[] = [("./samples/A.mp3"), ("./samples/C.mp3"), ("./samples/F.mp3"), ("./samples/G.mp3"), ("./samples/hihat.mp3"), ("./samples/kick.mp3"), ("./samples/snare.mp3"), ("./samples/laugh-1.mp3"), ("./samples/laugh-2.mp3")]

//Variablen für den Play Button

let check: number = 0;
let count: number = 0;
let sound: number;

//Funkion playSample (wird für die pads nicht benutzt, deswegen erst hier)
function playSample(sample_selector: string) {
    let sound: HTMLAudioElement = new Audio(sample_selector);
    sound.play();
}

//Funktion für den Remix
function Mix() {
    playSample(beat[count]);
    count = Math.round(Math.random() * 9);
};

//Funktion für den Beat
function myBeat() {
    playSample(beat[count]);
    count += 1;
    if (count > (beat.length - 1))
        count = 0;
}

//Bedingung, welcher beat wird abgespielt
function playSong() {
    if (check == 0) {
        myBeat();
    }
    else {
        Mix();
    }
}

//Diese Funktion spielt den beat oder den remix ab und ändert die Klassen der HTML Elemente
function PlayBeat() {
    if (document.querySelector("#playbtn i").classList.contains("fa-play")) {
        document.querySelector("#playbtn i").classList.remove("fa-play");
        document.querySelector("#playbtn i").classList.add("fa-stop");
        sound = setInterval(playSong, 500);
    }
    else {
        document.querySelector("#playbtn i").classList.remove("fa-stop");
        document.querySelector("#playbtn i").classList.add("fa-play");
        clearInterval(sound);
        count = 0;
    }
}

//Event, um den beat abzuspielen
document.querySelector("#playbtn").addEventListener("click", function () {
    PlayBeat();
});

//Event um die Variable check auf 1 zu setzen, das dient als token um zu entscheiden was abgespielt wird.
document.querySelector("#remixbtn").addEventListener("click", function () {
    check = 1;
});
