//Aufgabe 1
function finger() {
    document.querySelector("#button1").innerHTML = "Der dickste Finger an der Hand ist der Daumen";
};

document.querySelector("#button1").addEventListener('click', finger);


//Aufgabe 2
let count = 0;

function button_click() {
    let new_count = (count + 1);
    count = new_count;
    document.querySelector("#result").innerHTML = count;
};

document.querySelector("#button2").addEventListener('click', button_click);
