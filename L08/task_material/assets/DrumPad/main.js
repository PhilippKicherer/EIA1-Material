// Variablen
//Variablen Samples
let a = new Audio("samples/A.mp3");
let c = new Audio("samples/C.mp3");
let f = new Audio("samples/F.mp3");
let g = new Audio("samples/G.mp3");
let hihat = new Audio("samples/hihat.mp3");
let kick = new Audio("samples/kick.mp3");
let snare = new Audio("samples/snare.mp3");
let laugh1 = new Audio("samples/laugh-1.mp3");
let laugh2 = new Audio("samples/laugh-2.mp3");
//Samples Array
const sample = [a, c, f, g, hihat, kick, snare, laugh1, laugh2];
//Buttons Array
const buttons = document.querySelectorAll(".button");
let button_selector = Array.from(buttons);
//Damit i nicht über 9 geht
let totalbuttons = buttons.length;
//Events
//Die Funktion vergleicht beim klick die Position des Buttons im Array mit der Position des Samples im Array und spielt diesen dann ab.
//(Hoffe das ist auch so, ohne Funktion, in Ordnung, ansonsten verbessere ich nochmal)
for (let i = 0; i < totalbuttons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        sample[i].play();
    });
}
//# sourceMappingURL=main.js.map