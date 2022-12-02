// Variablen

let samples: string [] = ["samples/A.mp3", "samples/C.mp3", "samples/F.mp3", "samples/G.mp3", "samples/hihat.mp3", "samples/kick.mp3", "samples/laugh-1.mp3", "samples/laugh-2.mp3", "samples/snare.mp3"];

//button array
const buttons = document.querySelectorAll(".button");
let button_selector = Array.from(buttons);

//Funktion
//zuerst Selektor, um den Button festzulegen
//dann das richtige Sample mit obiger Variablen zuordnen
function playSample(Button: string[], Sample: string[]){
}

//Events
//hier wird das Sample dann abgespielt -> query selector muss auf .button liegen, welcher spezifische Button es ist wird in der Funktion bestimmt.

document.querySelector("button_selector[0]").addEventListener('click', function() {
    let sound: HTMLAudioElement = new Audio("samples[0]");
    sound.play;
})